/*globals sap*/
/*jslint nomen:true*/

sap.ui.define(
    [
		'sap/ui/core/mvc/Controller'
    ],

    function (CoreController) {
			var Controller = CoreController.extend('view.View1');
			
		/* =========================================================== */
		/* lifecycle method- Init                                      */
		/* =========================================================== */
        Controller.prototype.onInit = function () {
			//Define some sample data 
var data = {"attachments" : [{"contributor" : "Susan Baker",
							  "documentId" : "64469d2f-b3c4-a517-20d6-f91ebf85b9da",
							   "enableEdit" : true,
							   "enableDelete" : true,
							   "fileName" : "Screenshot.jpg",
							   "fileSize" : 20,
							   "mimeType" : "image/jpg",
							   "thumbnailUrl" : "",
							   "uploadedDate" : "2014-07-30",
							   "url" : "image/orianda.png"
								}, 
								{
								"contributor" : "John Smith",
								"documentId" : "5082cc4d-da9f-2835-2c0a-8100ed47bcde",
								"enableEdit" : true,
								"enableDelete" : false,
								"fileName" : "Notes.txt",
								"fileSize" : 10,
								"mimeType" : "text/plain",
								"thumbnailUrl" : "",
								"uploadedDate" : "2014-08-01",
								"url" : "image/orianda.png"
								}
				]},
				oModel = new sap.ui.model.json.JSONModel();	
				oModel.setData({modelData: data});
				this.getView().setModel(oModel, "oAppView");

        };
        			
 
		return Controller;
    }
);