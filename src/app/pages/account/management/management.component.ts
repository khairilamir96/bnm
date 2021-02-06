import { Component, Inject, NgZone, PLATFORM_ID, TemplateRef, ElementRef,ViewChild,OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_timeline from "@amcharts/amcharts4/plugins/timeline";
import * as am4plugins_bullets from "@amcharts/amcharts4/plugins/bullets";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { isPlatformBrowser } from '@angular/common';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
@Component({
  selector: "app-management",
  templateUrl: "management.component.html"
})
export class ManagementComponent {
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
  
        let chart = am4core.create("chartdiv25", am4plugins_timeline.SerpentineChart);
        chart.curveContainer.padding(50, 20, 50, 20);
        chart.levelCount = 4;
        chart.yAxisRadius = am4core.percent(25);
        chart.yAxisInnerRadius = am4core.percent(-25);
        chart.maskBullets = false;

        let colorSet = new am4core.ColorSet();
        colorSet.saturation = 0.5;

        chart.data = [{
            "category": "Module #1",
            "start": "2019-01-10",
            "end": "2019-01-13",
            "color": colorSet.getIndex(0),
            "task": "Gathering requirements"
        }, {
            "category": "Module #1",
            "start": "2019-02-05",
            "end": "2019-04-18",
            "color": colorSet.getIndex(0),
            "task": "Development"
        }, {
            "category": "Module #2",
            "start": "2019-01-08",
            "end": "2019-01-10",
            "color": colorSet.getIndex(5),
            "task": "Gathering requirements"
        }, {
            "category": "Module #2",
            "start": "2019-01-12",
            "end": "2019-01-15",
            "color": colorSet.getIndex(5),
            "task": "Producing specifications"
        }, {
            "category": "Module #2",
            "start": "2019-01-16",
            "end": "2019-02-05",
            "color": colorSet.getIndex(5),
            "task": "Development"
        }, {
            "category": "Module #2",
            "start": "2019-02-10",
            "end": "2019-02-18",
            "color": colorSet.getIndex(5),
            "task": "Testing and QA"
        }, {
            "category": ""
        }, {
            "category": "Module #3",
            "start": "2019-01-01",
            "end": "2019-01-19",
            "color": colorSet.getIndex(9),
            "task": "Gathering requirements"    
        }, {
            "category": "Module #3",
            "start": "2019-02-01",
            "end": "2019-02-10",
            "color": colorSet.getIndex(9),
            "task": "Producing specifications"
        }, {
            "category": "Module #3",
            "start": "2019-03-10",
            "end": "2019-04-15",
            "color": colorSet.getIndex(9),
            "task": "Development"
        }, {
            "category": "Module #3",
            "start": "2019-04-20",
            "end": "2019-04-30",
            "color": colorSet.getIndex(9),
            "task": "Testing and QA",
            "disabled2":false,
            "image2":"/wp-content/uploads/assets/timeline/rachel.jpg",
            "location":0
        }, {
            "category": "Module #4",
            "start": "2019-01-15",
            "end": "2019-02-12",
            "color": colorSet.getIndex(15),
            "task": "Gathering requirements",
            "disabled1":false,
            "image1":"/wp-content/uploads/assets/timeline/monica.jpg"
        }, {
            "category": "Module #4",
            "start": "2019-02-25",
            "end": "2019-03-10",
            "color": colorSet.getIndex(15),
            "task": "Development"
        }, {
            "category": "Module #4",
            "start": "2019-03-23",
            "end": "2019-04-29",
            "color": colorSet.getIndex(15),
            "task": "Testing and QA"
        }];

        chart.dateFormatter.dateFormat = "yyyy-MM-dd";
        chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";
        chart.fontSize = 11;

        let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis()as any);
        categoryAxis.dataFields.category = "category";
        categoryAxis.renderer.grid.template.disabled = true;
        categoryAxis.renderer.labels.template.paddingRight = 25;
        categoryAxis.renderer.minGridDistance = 10;
        categoryAxis.renderer.innerRadius = -60;
        categoryAxis.renderer.radius = 60;

        let dateAxis = chart.xAxes.push(new am4charts.DateAxis()as any);
        dateAxis.renderer.minGridDistance = 70;
        dateAxis.baseInterval = { count: 1, timeUnit: "day" };
        dateAxis.renderer.tooltipLocation = 0;
        dateAxis.startLocation = -0.5;
        dateAxis.renderer.line.strokeDasharray = "1,4";
        dateAxis.renderer.line.strokeOpacity = 0.6;
        dateAxis.tooltip.background.fillOpacity = 0.2;
        dateAxis.tooltip.background.cornerRadius = 5;
        dateAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
        dateAxis.tooltip.label.paddingTop = 7;

        let labelTemplate = dateAxis.renderer.labels.template;
        labelTemplate.verticalCenter = "middle";
        labelTemplate.fillOpacity = 0.7;
        labelTemplate.background.fill = new am4core.InterfaceColorSet().getFor("background");
        labelTemplate.background.fillOpacity = 1;
        labelTemplate.padding(7, 7, 7, 7);

        let series = chart.series.push(new am4plugins_timeline.CurveColumnSeries());
        series.columns.template.height = am4core.percent(20);
        series.columns.template.tooltipText = "{task}: [bold]{openDateX}[/] - [bold]{dateX}[/]";

        series.dataFields.openDateX = "start";
        series.dataFields.dateX = "end";
        series.dataFields.categoryY = "category";
        series.columns.template.propertyFields.fill = "color"; // get color from data
        series.columns.template.propertyFields.stroke = "color";
        series.columns.template.strokeOpacity = 0;

        let bullet = series.bullets.push(new am4charts.CircleBullet());
        bullet.circle.radius = 3;
        bullet.circle.strokeOpacity = 0;
        bullet.propertyFields.fill = "color";
        bullet.locationX = 0;


        let bullet2 = series.bullets.push(new am4charts.CircleBullet());
        bullet2.circle.radius = 3;
        bullet2.circle.strokeOpacity = 0;
        bullet2.propertyFields.fill = "color";
        bullet2.locationX = 1;


        let imageBullet1 = series.bullets.push(new am4plugins_bullets.PinBullet());
        imageBullet1.disabled = true;
        imageBullet1.propertyFields.disabled = "disabled1";
        imageBullet1.locationX = 1;
        imageBullet1.circle.radius = 20;
        imageBullet1.propertyFields.stroke = "color";
        imageBullet1.background.propertyFields.fill = "color";
        imageBullet1.image = new am4core.Image();
        imageBullet1.image.propertyFields.href = "image1";

        let imageBullet2 = series.bullets.push(new am4plugins_bullets.PinBullet());
        imageBullet2.disabled = true;
        imageBullet2.propertyFields.disabled = "disabled2";
        imageBullet2.locationX = 0;
        imageBullet2.circle.radius = 20;
        imageBullet2.propertyFields.stroke = "color";
        imageBullet2.background.propertyFields.fill = "color";
        imageBullet2.image = new am4core.Image();
        imageBullet2.image.propertyFields.href = "image2";


        let eventSeries = chart.series.push(new am4plugins_timeline.CurveLineSeries());
        eventSeries.dataFields.dateX = "eventDate";
        eventSeries.dataFields.categoryY = "category";
        eventSeries.data = [
            { category: "", eventDate: "2019-01-15", letter: "A", description: "Something happened here" },
            { category: "", eventDate: "2019-01-23", letter: "B", description: "Something happened here" },
            { category: "", eventDate: "2019-02-10", letter: "C", description: "Something happened here" },
            { category: "", eventDate: "2019-02-29", letter: "D", description: "Something happened here" },
            { category: "", eventDate: "2019-03-06", letter: "E", description: "Something happened here" },
            { category: "", eventDate: "2019-03-12", letter: "F", description: "Something happened here" },
            { category: "", eventDate: "2019-03-22", letter: "G", description: "Something happened here" }];
        eventSeries.strokeOpacity = 0;

        let flagBullet = eventSeries.bullets.push(new am4plugins_bullets.FlagBullet())
        flagBullet.label.propertyFields.text = "letter";
        flagBullet.locationX = 0;
        flagBullet.tooltipText = "{description}";

        chart.scrollbarX = new am4core.Scrollbar();
        chart.scrollbarX.align = "center"
        chart.scrollbarX.width = am4core.percent(85);

        let cursor = new am4plugins_timeline.CurveCursor();
        chart.cursor = cursor;
        cursor.xAxis = dateAxis;
        cursor.yAxis = categoryAxis;
        cursor.lineY.disabled = true;
        cursor.lineX.strokeDasharray = "1,4";
        cursor.lineX.strokeOpacity = 1;

        dateAxis.renderer.tooltipLocation2 = 0;
        categoryAxis.cursorTooltipEnabled = false;
  
    });
    }
  
  ngAfterViewInit():void {
    // Chart code goes in here
    this.browserOnly(() => {
      am4core.useTheme(am4themes_animated);

      let chart = am4core.create("chartdiv21", am4charts.PieChart);

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
  
        let chart = am4core.create("chartdiv22", am4charts.PieChart);
  
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
  
        // Create chart instance
        let chart = am4core.create("chartdiv23", am4charts.XYChart);
        chart.scrollbarX = new am4core.Scrollbar();

        // Add data
        chart.data = [{
        "country": "Jan",
        "visits": 3025
        }, {
        "country": "Feb",
        "visits": 1882
        }, {
        "country": "Mar",
        "visits": 1809
        }, {
        "country": "Apr",
        "visits": 1322
        }, {
        "country": "May",
        "visits": 1122
        }, {
        "country": "Jun",
        "visits": 1114
        }, {
        "country": "Jul",
        "visits": 984
        }, {
        "country": "Aug",
        "visits": 711
        }, {
        "country": "Sep",
        "visits": 665
        }, {
        "country": "Oct",
        "visits": 580
        }, {
        "country": "Nov",
        "visits": 443
        }, {
        "country": "Dec",
        "visits": 441
        }];

        // Create axes
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "country";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 30;
        categoryAxis.renderer.labels.template.horizontalCenter = "right";
        categoryAxis.renderer.labels.template.verticalCenter = "middle";
        categoryAxis.renderer.labels.template.rotation = 270;
        categoryAxis.tooltip.disabled = true;
        categoryAxis.renderer.minHeight = 110;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.minWidth = 50;

        // Create series
        let series = chart.series.push(new am4charts.ColumnSeries());
        series.sequencedInterpolation = true;
        series.dataFields.valueY = "visits";
        series.dataFields.categoryX = "country";
        series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
        series.columns.template.strokeWidth = 0;

        series.tooltip.pointerOrientation = "vertical";

        series.columns.template.column.cornerRadiusTopLeft = 10;
        series.columns.template.column.cornerRadiusTopRight = 10;
        series.columns.template.column.fillOpacity = 0.8;

        // on hover, make corner radiuses bigger
        let hoverState = series.columns.template.column.states.create("hover");
        hoverState.properties.cornerRadiusTopLeft = 0;
        hoverState.properties.cornerRadiusTopRight = 0;
        hoverState.properties.fillOpacity = 1;

        series.columns.template.adapter.add("fill", function(fill, target) {
        return chart.colors.getIndex(target.dataItem.index);
        });

        // Cursor
        chart.cursor = new am4charts.XYCursor();
  
    });
    this.browserOnly(() => {
        am4core.useTheme(am4themes_animated);
  
        // Create chart instance
        let chart = am4core.create("chartdiv24", am4charts.XYChart);

        // Add data
        chart.data = [
        {date:new Date(2019,5,12), value1:50, value2:48, previousDate:new Date(2019, 5, 5)},
        {date:new Date(2019,5,13), value1:53, value2:51, previousDate:new Date(2019, 5, 6)},
        {date:new Date(2019,5,14), value1:56, value2:58, previousDate:new Date(2019, 5, 7)},
        {date:new Date(2019,5,15), value1:52, value2:53, previousDate:new Date(2019, 5, 8)},
        {date:new Date(2019,5,16), value1:48, value2:44, previousDate:new Date(2019, 5, 9)},
        {date:new Date(2019,5,17), value1:47, value2:42, previousDate:new Date(2019, 5, 10)},
        {date:new Date(2019,5,18), value1:59, value2:55, previousDate:new Date(2019, 5, 11)}
        ]

        // Create axes
        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.minGridDistance = 50;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

        // Create series
        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.valueY = "value1";
        series.dataFields.dateX = "date";
        series.strokeWidth = 2;
        series.minBulletDistance = 10;
        series.tooltipText = "[bold]{date.formatDate()}:[/] {value1}\n[bold]{previousDate.formatDate()}:[/] {value2}";
        series.tooltip.pointerOrientation = "vertical";

        // Create series
        let series2 = chart.series.push(new am4charts.LineSeries());
        series2.dataFields.valueY = "value2";
        series2.dataFields.dateX = "date";
        series2.strokeWidth = 2;
        series2.strokeDasharray = "3,4";
        series2.stroke = series.stroke;

        // Add cursor
        chart.cursor = new am4charts.XYCursor();
        chart.cursor.xAxis = dateAxis;
  
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
