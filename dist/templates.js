this["MyApp"] = this["MyApp"] || {};
this["MyApp"]["templates"] = this["MyApp"]["templates"] || {};
this["MyApp"]["templates"]["menu"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", buffer = 
  "    <li class=\"dropdown-header\">"
    + container.escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "</li>\n";
  stack1 = ((helper = (helper = helpers.topics || (depth0 != null ? depth0.topics : depth0)) != null ? helper : alias2),(options={"name":"topics","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.topics) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    <li role=\"separator\" class=\"divider\"></li>\n";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.implementations : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.program(6, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", buffer = 
  "            <li class=\"dropdown-submenu\">\n                <a class=\"jsTopicImplementation\" tabindex=\"-1\" href=\"#\">"
    + container.escapeExpression(((helper = (helper = helpers.topic || (depth0 != null ? depth0.topic : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"topic","hash":{},"data":data}) : helper)))
    + "</a>\n                <ul class=\"dropdown-menu\">\n";
  stack1 = ((helper = (helper = helpers.implementations || (depth0 != null ? depth0.implementations : depth0)) != null ? helper : alias2),(options={"name":"implementations","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.implementations) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                </ul>\n            </li>\n";
},"4":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing, alias5="function";

  return "                        <li>\n                            <a href=\"javascript:void(0);\" class=\"jsTopicToWidget\" onclick=\"fnctCreateWidget('"
    + alias2(alias1((depths[1] != null ? depths[1].topic : depths[1]), depth0))
    + "','"
    + alias2(alias1((depths[2] != null ? depths[2].type : depths[2]), depth0))
    + "','"
    + alias2(((helper = (helper = helpers.implementation || (depth0 != null ? depth0.implementation : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"implementation","hash":{},"data":data}) : helper)))
    + "')\">"
    + alias2(((helper = (helper = helpers.implementation || (depth0 != null ? depth0.implementation : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"implementation","hash":{},"data":data}) : helper)))
    + "</a>\n                        </li>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            <li><a class=\"jsTopicImplementation\" tabindex=\"-1\" href=\"#\">"
    + container.escapeExpression(((helper = (helper = helpers.topic || (depth0 != null ? depth0.topic : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"topic","hash":{},"data":data}) : helper)))
    + "</a></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, buffer = "";

  stack1 = ((helper = (helper = helpers.types || (depth0 != null ? depth0.types : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"types","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},options) : helper));
  if (!helpers.types) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "<li>\n    <a href=\"javascript:void(0);\" class=\"jsTopicToWidget\" onclick=\"fnctCreateWidget('','','Webcam')\">Webcam</a>\n</li>\n";
},"useData":true,"useDepths":true});
this["MyApp"]["templates"]["widgetWrapper"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "                <a type=\"button\" class=\"btn btn-default pull-right jsWidgetRemove cssWidgetRemove\" href=\"#\">\n                    <i class=\"fa fa-window-close fa-lg\" aria-hidden=\"true\"></i>\n                </a>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                <a type=\"button\" class=\"btn btn-default pull-right jsWidgetSettings cssWidgetSettings\" href=\"#\"  data-toggle=\"modal\" data-target=\"#modal-"
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n                    <i class=\"fa fa-cog fa-lg\" aria-hidden=\"true\"></i>\n                </a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"jsWidgetWrapper cssWidgetWrapper undraggable\" data-widget-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" style=\"left:"
    + alias4(((helper = (helper = helpers.posX || (depth0 != null ? depth0.posX : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"posX","hash":{},"data":data}) : helper)))
    + "px;top:"
    + alias4(((helper = (helper = helpers.posY || (depth0 != null ? depth0.posY : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"posY","hash":{},"data":data}) : helper)))
    + "px;width:"
    + alias4(((helper = (helper = helpers.width || (depth0 != null ? depth0.width : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"width","hash":{},"data":data}) : helper)))
    + "px;height:"
    + alias4(((helper = (helper = helpers.height || (depth0 != null ? depth0.height : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"height","hash":{},"data":data}) : helper)))
    + "px;position:absolute;\">\n    <div class=\"panel panel-primary cssWidgetPanelPrimary\" data-widget-resizable=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n        <div class=\"panel-heading clearfix cssWidgetPanelHeader draggable\" data-widget-draggable=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n            <div class=\"panel-title pull-left\">\n                <h4 data-widget-title=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.topicImplementation || (depth0 != null ? depth0.topicImplementation : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"topicImplementation","hash":{},"data":data}) : helper)))
    + ": "
    + alias4(((helper = (helper = helpers.topic || (depth0 != null ? depth0.topic : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"topic","hash":{},"data":data}) : helper)))
    + "</h4>\n            </div>     \n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.btnRemove : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.btnSettings : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n        <div class=\"panel-body cssWidgetPanelBody\">\n        </div>\n    </div>\n</div>";
},"useData":true});
this["MyApp"]["templates"]["workspaceMenu"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.escapeExpression, alias2=container.lambda;

  return "    <div id=\"workspace-form-"
    + alias1((helpers.trim || (depth0 && depth0.trim) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,{"name":"trim","hash":{},"data":data}))
    + "\" class=\"form-group\">\n        <label class=\"control-label col-xs-4 col-sm-4\">"
    + alias1(alias2(depth0, depth0))
    + ":</label>\n        <div class=\"col-xs-8 col-sm-8\">\n            <button type=\"button\" class=\"btn btn-default\" onclick=\"fnctSaveWorkspace('"
    + alias1(alias2(depth0, depth0))
    + "');\" data-dismiss=\"modal\"><i class=\"fa fa-floppy-o fa-lg\" ></i> Save</button>\n            <button type=\"button\" class=\"btn btn-default\" onclick=\"fnctLoadWorkspace('"
    + alias1(alias2(depth0, depth0))
    + "');\" data-dismiss=\"modal\"><i class=\"fa fa-upload fa-lg\" ></i> Load</button>\n            <button type=\"button\" class=\"btn btn-danger\" onclick=\"fnctDeleteWorkspace('"
    + alias1(alias2(depth0, depth0))
    + "');\"><i class=\"fa fa-trash fa-lg\" ></i> Delete</button>\n        </div>\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.workspaces : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});