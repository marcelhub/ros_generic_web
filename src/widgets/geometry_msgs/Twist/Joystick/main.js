

function Joystick(id, ros, topic, type, implementation) {
    //default properties
    this.id = id;
    this.ros = ros;
    this.topic = topic;
    this.type = type;
    this.implementation = implementation;

    //settings object, this will be saved and stored.
    //contains parameters, values etc. that the implementation needs.
    //all required values should be stored in the settings object!
    this.settings = {};

    return this;
}
 
Joystick.prototype = {
    init: function() {
        this.publishedTopic = new ROSLIB.Topic({
            ros : this.ros,
            name : this.topic,
            messageType : this.type,
        });
        if(jQuery.isEmptyObject(this.settings)) {
            //initialize with default values if not loaded
            this.settings.autorepeatRate = 50;
        }
        return this;
    },
    run: function() {
        var options = {
            zone: document.getElementById('widget-'+this.id+'-joystick'),
            mode: 'dynamic',
            size: 250,
            color: 'red'
        };
        this.manager = nipplejs.create(options);
        this.sendMessages = false;
        this.msgLoop = null;
        var self = this;

        this.manager.on('start', function (evt, data) {
            self.msgLoop = setInterval(function () { self.teleopLoop(); }, self.settings.autorepeatRate);
        });

        this.manager.on('move', function(evt, data) {
            self.y = (data.position.x - data.instance.position.x) / data.instance.options.size*2;
            self.x = (data.position.y - data.instance.position.y) / data.instance.options.size*2;
        });

        this.manager.on('end', function (evt, data) {
            var twist = new ROSLIB.Message({
                angular : {
                    x : 0,
                    y : 0,
                    z : 0
                },
                linear : {
                    x : 0,
                    y : 0,
                    z : 0
                }
            });
            self.publishedTopic.publish(twist);
            clearInterval(self.msgLoop);
            self.publishedTopic.publish(twist);
        });
        
        

    },
    load: function(settings) {
        this.settings.autorepeatRate = settings.autorepeatRate;
        this.init();
        return this;
    },

    save: function(widget) {
        return JSON.stringify(widget.data.settings);
    },
    btnSettings: function(widget) {
    },
    
    btnRemove: function(widget) {
        clearInterval(this.msgLoop);
    },

    btnSettingsSave: function(widget) {
        widget.data.settings.autorepeatRate = $("#widget-"+widget.data.id+"-value-autorepeatRate").val();

    },
    teleopLoop: function() {
        //need at least 5% speed backwards to drive an inverted curve
        var twist = new ROSLIB.Message({
            angular : {
                x : 0,
                y : 0,
                z : this.x < 0.05  ? this.y * (-1) : this.y
            },
            linear : {
                x : this.x*(-1),
                y : 0,
                z : this.x < 0.05  ? this.y * (-1) : this.y
            }
        });
        this.publishedTopic.publish(twist);
    }
};
