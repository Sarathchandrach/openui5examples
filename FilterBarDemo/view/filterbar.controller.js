/*globals sap*/
/*jslint nomen:true*/

sap.ui.define(
    [
		'sap/ui/core/mvc/Controller'
    ],

    function (CoreController) {
			var Controller = CoreController.extend('view.filterbar');
			
		/* =========================================================== */
		/* lifecycle method- Init                                      */
		/* =========================================================== */
        Controller.prototype.onInit = function () {
        };
      	/* =========================================================== */
		/* lifecycle method- Init                                      */
		/* =========================================================== */
        Controller.prototype.onAfterRendering = function () {
        	var oFilterBar = this.getView().byId("idFilterBar");
        	oFilterBar.setVisible(true);
        };  			
		Controller.prototype.onReset = function (oEvent) {
		    jQuery.sap.require("sap.m.MessageToast");
		    // var params = oEvent.getParameters();
		    var sMessage = "onReset trigered";
		    sap.m.MessageToast.show(sMessage);
		};
	   Controller.prototype.onSearch = function(oEvent) {
		    jQuery.sap.require("sap.m.MessageToast");
		    // var params = oEvent.getParameters();
		    var sMessage = "onSearch trigered";
		    sap.m.MessageToast.show(sMessage);
	  };
		return Controller;
    }
);

