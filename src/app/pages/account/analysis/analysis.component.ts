import { Component, Inject, NgZone, PLATFORM_ID, TemplateRef, ElementRef,ViewChild,OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_timeline from "@amcharts/amcharts4/plugins/timeline";
import * as am4plugins_bullets from "@amcharts/amcharts4/plugins/bullets";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { isPlatformBrowser } from '@angular/common';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
@Component({
  selector: "app-analysis",
  templateUrl: "analysis.component.html"
})
export class AnalysisComponent {
  ///////////////////
  private chart: am4charts.XYChart;
  
  //modal
  dismissible = true;

  defaultModal: BsModalRef;
  default = {
    keyboard: true,
    class: "modal-md"
  };

  constructor(@Inject(PLATFORM_ID) private platformId, private zone: NgZone, private modalService: BsModalService) {}

  
  ngOnInit() {
  }
  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }
  //modal
  openDefaultModal(modalDefault: TemplateRef<any>) {
    this.defaultModal = this.modalService.show(modalDefault, this.default);
    this.browserOnly(() => {
        am4core.useTheme(am4themes_animated);
  
        let chart = am4core.create("chartdiv29", am4charts.XYChart);

      // Increase contrast by taking evey second color
      chart.colors.step = 2;

      // Add data
      chart.data = generateChartData();

      // Create axes
      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.minGridDistance = 50;

      // Create series
      function createAxisAndSeries(field, name, opposite, bullet) {
        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis()as any);
        if(chart.yAxes.indexOf(valueAxis) != 0){
          valueAxis.syncWithAxis = chart.yAxes.getIndex(0);
        }
        
        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.valueY = field;
        series.dataFields.dateX = "date";
        series.strokeWidth = 2;
        series.yAxis = valueAxis;
        series.name = name;
        series.tooltipText = "{name}: [bold]{valueY}[/]";
        series.tensionX = 0.8;
        series.showOnInit = true;
        
        let interfaceColors = new am4core.InterfaceColorSet();
        
        switch(bullet) {
          case "triangle":
            let bullet2 = series.bullets.push(new am4charts.Bullet());
            bullet2.width = 12;
            bullet2.height = 12;
            bullet2.horizontalCenter = "middle";
            bullet2.verticalCenter = "middle";
            
            let triangle = bullet2.createChild(am4core.Triangle);
            triangle.stroke = interfaceColors.getFor("background");
            triangle.strokeWidth = 2;
            triangle.direction = "top";
            triangle.width = 12;
            triangle.height = 12;
            break;
          case "rectangle":
            let bullet3 = series.bullets.push(new am4charts.Bullet());
            bullet3.width = 10;
            bullet3.height = 10;
            bullet3.horizontalCenter = "middle";
            bullet3.verticalCenter = "middle";
            
            let rectangle = bullet3.createChild(am4core.Rectangle);
            rectangle.stroke = interfaceColors.getFor("background");
            rectangle.strokeWidth = 2;
            rectangle.width = 10;
            rectangle.height = 10;
            break;
          default:
            let bullet = series.bullets.push(new am4charts.CircleBullet());
            bullet.circle.stroke = interfaceColors.getFor("background");
            bullet.circle.strokeWidth = 2;
            break;
        }
        
        valueAxis.renderer.line.strokeOpacity = 1;
        valueAxis.renderer.line.strokeWidth = 2;
        valueAxis.renderer.line.stroke = series.stroke;
        valueAxis.renderer.labels.template.fill = series.stroke;
        valueAxis.renderer.opposite = opposite;
      }

      createAxisAndSeries("visits", "ACMV", false, "circle");
      createAxisAndSeries("views", "Lift", true, "triangle");
      createAxisAndSeries("hits", "Escalator", true, "rectangle");

      // Add legend
      chart.legend = new am4charts.Legend();

      // Add cursor
      chart.cursor = new am4charts.XYCursor();

      // generate some random data, quite different range
      function generateChartData() {
        let chartData = [];
        let firstDate = new Date();
        firstDate.setDate(firstDate.getDate() - 100);
        firstDate.setHours(0, 0, 0, 0);

        let visits = 1600;
        let hits = 2900;
        let views = 8700;

        for (var i = 0; i < 15; i++) {
          // we create date objects here. In your data, you can have date strings
          // and then set format of your dates using chart.dataDateFormat property,
          // however when possible, use date objects, as this will speed up chart rendering.
          let newDate = new Date(firstDate);
          newDate.setDate(newDate.getDate() + i);

          visits += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
          hits += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
          views += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);

          chartData.push({
            date: newDate,
            visits: visits,
            hits: hits,
            views: views
          });
        }
        return chartData;
      }
  
    });
    }
  
  ngAfterViewInit():void {
    // Chart code goes in here
    this.browserOnly(() => {
      am4core.useTheme(am4themes_animated);

      let chart = am4core.create("chartdiv26", am4charts.PieChart);

         // Add data
         chart.data = [ {
            "country": "ACMV",
            "litres": 501.9
            }, {
            "country": "Lift",
            "litres": 301.9
            }, {
            "country": "Escalator",
            "litres": 201.1
            }, {
            "country": "Electrical",
            "litres": 165.8
            }, {
            "country": "CWSP",
            "litres": 139.9
            }, {
            "country": "FDPS",
            "litres": 128.3
            }];

        // Add and configure Series
        let pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "litres";
        pieSeries.dataFields.category = "country";
        pieSeries.slices.template.stroke = am4core.color("#fff");
        pieSeries.slices.template.strokeWidth = 2;
        pieSeries.slices.template.strokeOpacity = 1;

        // This creates initial animation
        pieSeries.hiddenState.properties.opacity = 1;
        pieSeries.hiddenState.properties.endAngle = -90;
        pieSeries.hiddenState.properties.startAngle = -90;

    });
    this.browserOnly(() => {
        am4core.useTheme(am4themes_animated);
  
        let chart = am4core.create("chartdiv27", am4charts.PieChart);
  
          // Add data
          chart.data = [ {
          "country": "Block A",
          "litres": 501.9
          }, {
            "country": "Block B",
            "litres": 301.9
          }, {
            "country": "Block C",
            "litres": 201.1
          }, {
            "country": "Block D",
            "litres": 165.8
          }, {
            "country": "Block E",
            "litres": 139.9
          }, {
            "country": "BlockFA",
            "litres": 128.3
          }];
  
          // Add and configure Series
          let pieSeries = chart.series.push(new am4charts.PieSeries());
          pieSeries.dataFields.value = "litres";
          pieSeries.dataFields.category = "country";
          pieSeries.slices.template.stroke = am4core.color("#fff");
          pieSeries.slices.template.strokeWidth = 2;
          pieSeries.slices.template.strokeOpacity = 1;
  
          // This creates initial animation
          pieSeries.hiddenState.properties.opacity = 1;
          pieSeries.hiddenState.properties.endAngle = -90;
          pieSeries.hiddenState.properties.startAngle = -90;
  
    });
    this.browserOnly(() => {
        am4core.useTheme(am4themes_animated);
  
        let chart = am4core.create("chartdiv28", am4charts.XYChart);

      // Increase contrast by taking evey second color
      chart.colors.step = 2;

      // Add data
      chart.data = generateChartData();

      // Create axes
      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.minGridDistance = 50;

      // Create series
      function createAxisAndSeries(field, name, opposite, bullet) {
        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis()as any);
        if(chart.yAxes.indexOf(valueAxis) != 0){
          valueAxis.syncWithAxis = chart.yAxes.getIndex(0);
        }
        
        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.valueY = field;
        series.dataFields.dateX = "date";
        series.strokeWidth = 2;
        series.yAxis = valueAxis;
        series.name = name;
        series.tooltipText = "{name}: [bold]{valueY}[/]";
        series.tensionX = 0.8;
        series.showOnInit = true;
        
        let interfaceColors = new am4core.InterfaceColorSet();
        
        switch(bullet) {
          case "triangle":
            let bullet2 = series.bullets.push(new am4charts.Bullet());
            bullet2.width = 12;
            bullet2.height = 12;
            bullet2.horizontalCenter = "middle";
            bullet2.verticalCenter = "middle";
            
            let triangle = bullet2.createChild(am4core.Triangle);
            triangle.stroke = interfaceColors.getFor("background");
            triangle.strokeWidth = 2;
            triangle.direction = "top";
            triangle.width = 12;
            triangle.height = 12;
            break;
          case "rectangle":
            let bullet3 = series.bullets.push(new am4charts.Bullet());
            bullet3.width = 10;
            bullet3.height = 10;
            bullet3.horizontalCenter = "middle";
            bullet3.verticalCenter = "middle";
            
            let rectangle = bullet3.createChild(am4core.Rectangle);
            rectangle.stroke = interfaceColors.getFor("background");
            rectangle.strokeWidth = 2;
            rectangle.width = 10;
            rectangle.height = 10;
            break;
          default:
            let bullet = series.bullets.push(new am4charts.CircleBullet());
            bullet.circle.stroke = interfaceColors.getFor("background");
            bullet.circle.strokeWidth = 2;
            break;
        }
        
        valueAxis.renderer.line.strokeOpacity = 1;
        valueAxis.renderer.line.strokeWidth = 2;
        valueAxis.renderer.line.stroke = series.stroke;
        valueAxis.renderer.labels.template.fill = series.stroke;
        valueAxis.renderer.opposite = opposite;
      }

      createAxisAndSeries("visits", "ACMV", false, "circle");
      createAxisAndSeries("views", "Lift", true, "triangle");
      createAxisAndSeries("hits", "Escalator", true, "rectangle");

      // Add legend
      chart.legend = new am4charts.Legend();

      // Add cursor
      chart.cursor = new am4charts.XYCursor();

      // generate some random data, quite different range
      function generateChartData() {
        let chartData = [];
        let firstDate = new Date();
        firstDate.setDate(firstDate.getDate() - 100);
        firstDate.setHours(0, 0, 0, 0);

        let visits = 1600;
        let hits = 2900;
        let views = 8700;

        for (var i = 0; i < 15; i++) {
          // we create date objects here. In your data, you can have date strings
          // and then set format of your dates using chart.dataDateFormat property,
          // however when possible, use date objects, as this will speed up chart rendering.
          let newDate = new Date(firstDate);
          newDate.setDate(newDate.getDate() + i);

          visits += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
          hits += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
          views += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);

          chartData.push({
            date: newDate,
            visits: visits,
            hits: hits,
            views: views
          });
        }
        return chartData;
      }
  
    });
    
    
  }

  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}
