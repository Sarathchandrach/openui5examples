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

        var BarChartControl = Control.extend('sarath.controls.BarChart2', {
            metadata: {
                properties: {
                    width: { type: 'int', defaultValue: 1000 },
                    height: { type: 'int', defaultValue: 300 }
                }
            },

            renderer: function (oRm, oCustomControl) {
                oRm.write('<svg');
                oRm.writeControlData(oCustomControl);
                oRm.addClass('SCBarChart');
                oRm.writeClasses();
                oRm.write('>');
                oRm.write('</svg>');
            }
        });

        BarChartControl.prototype.onInit = function () {};
        BarChartControl.prototype.onBeforeRendering = function () {};

        BarChartControl.prototype.onAfterRendering = function () {
            this._createChart();
        };

        BarChartControl.prototype._createChart = function () {
			var width = 420,
			    barHeight = 20;
			
			var x = d3.scale.linear()
			    .range([0, width]);
			
			var chart = d3.select(".SCBarChart")
			    .attr("width", width);
			    
			var type = function(d) {
			  d.value = +d.value; // coerce to number
			  return d;
			};
			d3.tsv("../controls/data.tsv", type, function(error, data) {
			  x.domain([0, d3.max(data, function(d) { return d.value; })]);
			
			  chart.attr("height", barHeight * data.length);
			
			  var bar = chart.selectAll("g")
			      .data(data)
			    .enter().append("g")
			      .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });
			
			  bar.append("rect")
			      .attr("width", function(d) { return x(d.value); })
			      .attr("height", barHeight - 1);
			
			  bar.append("text")
			      .attr("x", function(d) { return x(d.value) - 3; })
			      .attr("y", barHeight / 2)
			      .attr("dy", ".35em")
			      .text(function(d) { return d.value; });
			});
			

        };
        return BarChartControl;
    }
);