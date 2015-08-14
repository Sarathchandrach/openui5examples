/*globals sap*/
/*jslint nomen:true*/

sap.ui.define(
    [
		'sap/ui/core/mvc/Controller'
    ],

    function (CoreController) {
			var Controller = CoreController.extend('view.customView');
			
		/* =========================================================== */
		/* lifecycle method- Init                                      */
		/* =========================================================== */
        Controller.prototype.onInit = function () {
			//Define some sample data 
				var oModel = new sap.ui.model.json.JSONModel(),
					aData = [
					{lastName: "Dente", name: "Al", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "male", rating: 4},
					{lastName: "Friese", name: "Andy", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person2.gif", gender: "male", rating: 2},
					{lastName: "Mann", name: "Anita", checked: false, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "female", rating: 3},
					{lastName: "Schutt", name: "Doris", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "female", rating: 4},
					{lastName: "Open", name: "Doris", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "female", rating: 2},
					{lastName: "Dewit", name: "Kenya", checked: false, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "female", rating: 3},
					{lastName: "Turner", name: "Paige", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "female", rating: 3}
				];
				oModel.setData({modelData: aData});
				this.getView().setModel(oModel, "oAppView");
        };
        			
    	Controller.prototype.onPress = function (oEvent) {
    		var list,
    		binding,
    		filter;
			list = this.getView().byId("IDCustomerListItem");
			filter = new sap.ui.model.Filter("lastName",sap.ui.model.FilterOperator.Contains , "D");
			binding = list.getBinding("items");
			binding.filter(filter,"Application"); 
			binding.refresh(true);
		};
		return Controller;
    }
);
