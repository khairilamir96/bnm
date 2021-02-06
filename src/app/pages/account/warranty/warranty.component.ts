import { Component, Inject, NgZone, PLATFORM_ID, TemplateRef, ElementRef,ViewChild,OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_timeline from "@amcharts/amcharts4/plugins/timeline";
import * as am4plugins_bullets from "@amcharts/amcharts4/plugins/bullets";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { isPlatformBrowser } from '@angular/common';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
@Component({
  selector: "app-warranty",
  templateUrl: "warranty.component.html"
})
export class WarrantyComponent {
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
    }
  
  ngAfterViewInit():void {
    // Chart code goes in here
    this.browserOnly(() => {
      am4core.useTheme(am4themes_animated);

      let chart = am4core.create("chartdiv30", am4charts.PieChart);

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
  
        let chart = am4core.create("chartdiv31", am4charts.PieChart);
  
          // Add data
          chart.data = [ {
          "country": "1 Weeks",
          "litres": 501.9
          }, {
            "country": "2 Weeks",
            "litres": 301.9
          }, {
            "country": "1 Month",
            "litres": 201.1
          }, {
            "country": "3 Months",
            "litres": 165.8
          }, {
            "country": "1 Year",
            "litres": 139.9
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

      let chart = am4core.create("chartdiv32", am4charts.PieChart);

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
  
        let chart = am4core.create("chartdiv33", am4charts.PieChart);
  
          // Add data
          chart.data = [ {
          "country": "1 Weeks",
          "litres": 501.9
          }, {
            "country": "2 Weeks",
            "litres": 301.9
          }, {
            "country": "1 Month",
            "litres": 201.1
          }, {
            "country": "3 Months",
            "litres": 165.8
          }, {
            "country": "1 Year",
            "litres": 139.9
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
