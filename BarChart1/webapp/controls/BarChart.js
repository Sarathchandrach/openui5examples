/*global sap*/
/*jslint nomen:true*/
sap.ui.define(
    [
        'jquery.sap.global',
        'sap/ui/core/Control',
        'sap/ui/thirdparty/d3'
    ],

    function (jQuery, Control) {
        'use strict';

        var BarChartControl = Control.extend('sarath.controls.BarChart', {
            metadata: {
                properties: {
                    width: { type: 'int', defaultValue: 1000 },
                    height: { type: 'int', defaultValue: 300 }
                }
            },

            renderer: function (oRm, oCustomControl) {
                oRm.write('<div');
                oRm.writeControlData(oCustomControl);
                oRm.addClass('SCBarChart');
                oRm.writeClasses();
                oRm.write('>');
                oRm.write('</div>');
            }
        });

        BarChartControl.prototype.onInit = function () {};
        BarChartControl.prototype.onBeforeRendering = function () {};

        BarChartControl.prototype.onAfterRendering = function () {
            this._createChart();
        };

        BarChartControl.prototype._createChart = function () {

        };
        return BarChartControl;
    }
);