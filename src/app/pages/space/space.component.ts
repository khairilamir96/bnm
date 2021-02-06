import { Component, Inject, NgZone, PLATFORM_ID, TemplateRef, ElementRef,ViewChild,OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_timeline from "@amcharts/amcharts4/plugins/timeline";
import * as am4plugins_bullets from "@amcharts/amcharts4/plugins/bullets";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { isPlatformBrowser } from '@angular/common';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
@Component({
  selector: "app-space",
  templateUrl: "space.component.html"
})
export class SpaceComponent {
  ///////////////////
  private chart: am4charts.XYChart;
  
  //modal
  dismissible = true;

  defaultModal: BsModalRef;
  defaultModal2: BsModalRef;
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
    }
    openDefaultModal2(modalDefault2: TemplateRef<any>) {
        this.defaultModal2 = this.modalService.show(modalDefault2, this.default);
        }
  
  ngAfterViewInit():void {
    // Chart code goes in here
    this.browserOnly(() => {
      am4core.useTheme(am4themes_animated);

      // Create chart instance
        let chart = am4core.create("chartdiv18", am4charts.XYChart3D);

        // Add data
        chart.data = [{
            "country": "Jan",
            "year2017": 3.5,
            "year2018": 4.2
        }, {
            "country": "Feb",
            "year2017": 1.7,
            "year2018": 3.1
        }, {
            "country": "Mar",
            "year2017": 2.8,
            "year2018": 2.9
        }, {
            "country": "Apr",
            "year2017": 2.6,
            "year2018": 2.3
        }, {
            "country": "May",
            "year2017": 1.4,
            "year2018": 2.1
        }, {
            "country": "Jun",
            "year2017": 2.6,
            "year2018": 4.9
        }, {
            "country": "Jul",
            "year2017": 6.4,
            "year2018": 7.2
        }, {
            "country": "Aug",
            "year2017": 8,
            "year2018": 7.1
        }, {
            "country": "Sep",
            "year2017": 9.9,
            "year2018": 10.1
        },{
            "country": "Oct",
            "year2017": 7.7,
            "year2018": 7.0
        },{
            "country": "Nov",
            "year2017": 5.9,
            "year2018": 6.9
        },{
            "country": "Dec",
            "year2017": 5.0,
            "year2018": 7.7
        }];

        // Create axes
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "country";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 30;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.title.text = "GDP growth rate";
        valueAxis.renderer.labels.template.adapter.add("text", function(text) {
        return text + "%";
        });

        // Create series
        let series = chart.series.push(new am4charts.ColumnSeries3D());
        series.dataFields.valueY = "year2017";
        series.dataFields.categoryX = "country";
        series.name = "Year 2017";
        series.clustered = false;
        series.columns.template.tooltipText = "Water: [bold]{valueY}[/]";
        series.columns.template.fillOpacity = 0.9;

        let series2 = chart.series.push(new am4charts.ColumnSeries3D());
        series2.dataFields.valueY = "year2018";
        series2.dataFields.categoryX = "country";
        series2.name = "Year 2018";
        series2.clustered = false;
        series2.columns.template.tooltipText = "Electricity: [bold]{valueY}[/]";

    });
    this.browserOnly(() => {
      am4core.useTheme(am4themes_animated);

      // Create chart instance
        let chart = am4core.create("chartdiv19", am4charts.XYChart);

        // Add percent sign to all numbers
        chart.numberFormatter.numberFormat = "#.#'%'";

        // Add data
        chart.data = [{
            "country": "Block A",
            "year2004": 3.5,
            "year2005": 4.2
        }, {
            "country": "Block B",
            "year2004": 1.7,
            "year2005": 3.1
        }, {
            "country": "Block C",
            "year2004": 2.8,
            "year2005": 2.9
        }, {
            "country": "Block D",
            "year2004": 2.6,
            "year2005": 2.3
        }, {
            "country": "Block E",
            "year2004": 1.4,
            "year2005": 2.1
        }];

        // Create axes
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "country";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 30;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.title.text = "GDP growth rate";

        // Create series
        let series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = "year2004";
        series.dataFields.categoryX = "country";
        series.clustered = false;
        series.tooltipText = "Water: [bold]{valueY}[/]";

        let series2 = chart.series.push(new am4charts.ColumnSeries());
        series2.dataFields.valueY = "year2005";
        series2.dataFields.categoryX = "country";
        series2.clustered = false;
        series2.columns.template.width = am4core.percent(50);
        series2.tooltipText = "Electricity: [bold]{valueY}[/]";

        chart.cursor = new am4charts.XYCursor();
        chart.cursor.lineX.disabled = true;
        chart.cursor.lineY.disabled = true;

    });
    this.browserOnly(() => {
        am4core.useTheme(am4themes_animated);
  
        // Create chart instance
          let chart = am4core.create("chartdiv20", am4charts.XYChart);
  
          // Add percent sign to all numbers
          chart.numberFormatter.numberFormat = "#.#'%'";
  
          // Add data
          chart.data = [{
              "country": "Block A",
              "year2004": 3.5,
              "year2005": 4.2
          }, {
              "country": "Block B",
              "year2004": 1.7,
              "year2005": 3.1
          }, {
              "country": "Block C",
              "year2004": 2.8,
              "year2005": 2.9
          }, {
              "country": "Block D",
              "year2004": 2.6,
              "year2005": 2.3
          }, {
              "country": "Block E",
              "year2004": 1.4,
              "year2005": 2.1
          }];
  
          // Create axes
          let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
          categoryAxis.dataFields.category = "country";
          categoryAxis.renderer.grid.template.location = 0;
          categoryAxis.renderer.minGridDistance = 30;
  
          let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
          valueAxis.title.text = "GDP growth rate";
  
          // Create series
          let series = chart.series.push(new am4charts.ColumnSeries());
          series.dataFields.valueY = "year2004";
          series.dataFields.categoryX = "country";
          series.clustered = false;
          series.tooltipText = "Water: [bold]{valueY}[/]";
  
          let series2 = chart.series.push(new am4charts.ColumnSeries());
          series2.dataFields.valueY = "year2005";
          series2.dataFields.categoryX = "country";
          series2.clustered = false;
          series2.columns.template.width = am4core.percent(50);
          series2.tooltipText = "Electricity: [bold]{valueY}[/]";
  
          chart.cursor = new am4charts.XYCursor();
          chart.cursor.lineX.disabled = true;
          chart.cursor.lineY.disabled = true;
  
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
