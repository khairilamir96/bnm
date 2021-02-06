import { Component, Inject, NgZone, PLATFORM_ID,TemplateRef,OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { isPlatformBrowser } from '@angular/common';
export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox"
}
@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})
export class UserComponent implements OnInit{
  public now: Date = new Date();
  //modal
  dismissible = true;

  defaultModal: BsModalRef;
  default = {
    keyboard: true,
    class: "modal-dialog-centered"
  };
  private chart: am4charts.XYChart;
  entries: number = 10;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      userid: "1133",
      name: "Amir",
      email: "amir@gmail.com",
      joinedat: "12/12/2020",
      usertype: "Admin",
      status: '<span class="badge badge-pill badge-danger text-uppercase">Inactive</span>',
    },
    {
      userid: "1234",
      name: "Amira",
      email: "amira@gmail.com",
      joinedat: "12/11/2020",
      usertype: "Staff",
      status: '<span class="badge badge-pill badge-success text-uppercase">Active</span>',
    },
    {
      userid: "4321",
      name: "Wan",
      email: "wan@gmail.com",
      joinedat: "11/11/2020",
      usertype: "Staff",
      status: '<span class="badge badge-pill badge-danger text-uppercase">Inactive</span>',
    },
    {
      userid: "2341",
      name: "Afiq",
      email: "afiq@gmail.com",
      joinedat: "10/10/2020",
      usertype: "Admin",
      status: '<span class="badge badge-pill badge-success text-uppercase">Active</span>',
    },
    {
      userid: "5432",
      name: "Asyraf",
      email: "asyraf@gmail.com",
      joinedat: "7/4/2020",
      usertype: "Staff",
      status: '<span class="badge badge-pill badge-success text-uppercase">Active</span>',
    },
    {
      userid: "5678",
      name: "Yoges",
      email: "yoges@gmail.com",
      joinedat: "1/1/2020",
      usertype: "Admin",
      status: '<span class="badge badge-pill badge-danger text-uppercase">Inactive</span>',
    },
    {
      userid: "8909",
      name: "Afidz",
      email: "afidz@gmail.com",
      joinedat: "2/2/2020",
      usertype: "Admin",
      status: '<span class="badge badge-pill badge-success text-uppercase">Active</span>',
    },
    {
      userid: "4565",
      name: "Shah",
      email: "shah@gmail.com",
      joinedat: "3/3/2020",
      usertype: "Staff",
      status: '<span class="badge badge-pill badge-danger text-uppercase">Inactive</span>',
    },
    {
      userid: "6545",
      name: "Ain",
      email: "ain@gmail.com",
      joinedat: "4/4/2020",
      usertype: "Admin",
      status: '<span class="badge badge-pill badge-success text-uppercase">Active</span>',
    },
    {
      userid: "5489",
      name: "Ali",
      email: "ali@gmail.com",
      joinedat: "8/8/2020",
      usertype: "Admin",
      status: '<span class="badge badge-pill badge-danger text-uppercase">Inactive</span>',
    },
  ];
  
  SelectionType = SelectionType;

  constructor(@Inject(PLATFORM_ID) private platformId, private zone: NgZone,private modalService: BsModalService) {
    this.temp = this.rows.map((prop, key) => {
      return {
        ...prop,
        id: key
      };
    });
    setInterval(() => {
      this.now = new Date();
    }, 1);
  }
  entriesChange($event) {
    this.entries = $event.target.value;
  }
  filterTable($event) {
    let val = $event.target.value;
    this.temp = this.rows.filter(function(d) {
      for (var key in d) {
        if (d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }
  onActivate(event) {
    this.activeRow = event.row;
  }
  //modal
  openDefaultModal(modalDefault: TemplateRef<any>) {
  this.defaultModal = this.modalService.show(modalDefault, this.default);
  }
  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  
  ngAfterViewInit() {
    // Chart code goes in here
    this.browserOnly(() => {
      am4core.useTheme(am4themes_animated);

      let chart = am4core.create("chartdiv18", am4charts.XYChart);
      // Add data
      chart.data = [{
        "country": "Jan",
        "visits": 2025
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
        "visits": 2000
      }, {
        "country": "Sep",
        "visits": 1500
      }, {
        "country": "Oct",
        "visits": 1200
      }, {
        "country": "Nov",
        "visits": 809
      }, {
        "country": "Dec",
        "visits": 900
      }];

      // Create axes

      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "country";
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 30;


      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

      // Create series
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = "visits";
      series.dataFields.categoryX = "country";
      series.name = "Visits";
      series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
      series.columns.template.fillOpacity = .8;

      let columnTemplate = series.columns.template;
      columnTemplate.strokeWidth = 2;
      columnTemplate.strokeOpacity = 1;

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
  ngOnInit() {}
}

