import { Component, OnInit } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox"
}
@Component({
  selector: "app-audit",
  templateUrl: "audit.component.html"
})
export class AuditComponent implements OnInit {
  public now: Date = new Date();
  private chart: am4charts.XYChart;
  entries: number = 5;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      id: "31244",
      username: "Ali",
      email: "Ali@gmail.com",
      createdat: "12/02/2020",
      action : '<span class="badge badge-pill badge-danger text-uppercase">POST</span>',
      description: "Action Triggered"
    },
    {
      id: "21244",
      username: "Abu",
      email: "Abu@gmail.com",
      createdat: "13/02/2020",
      action : '<span class="badge badge-pill badge-success text-uppercase">UPDATE</span>',
      description: "Action Triggered"
    },
    {
      id: "51244",
      username: "Amir",
      email: "Amir@gmail.com",
      createdat: "15/03/2020",
      action : '<span class="badge badge-pill badge-primary text-uppercase">GET</span>',
      description: "Action Triggered"
    },
    {
      id: "41344",
      username: "Amar",
      email: "Amar@gmail.com",
      createdat: "15/04/2019",
      action : '<span class="badge badge-pill badge-default text-uppercase">DELETE</span>',
      description: "Action Triggered"
    },
    {
      id: "54257",
      username: "Ahmad",
      email: "Ahmad@gmail.com",
      createdat: "15/04/2020",
      action : '<span class="badge badge-pill badge-default text-uppercase">DELETE</span>',
      description: "Action Triggered"
    }
  ];
  SelectionType = SelectionType;

  constructor() {
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

  ngOnInit() {
    /* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end



let chart = am4core.create('chartdiv19', am4charts.XYChart)
chart.colors.step = 2;

chart.legend = new am4charts.Legend()
chart.legend.position = 'top'
chart.legend.paddingBottom = 20
chart.legend.labels.template.maxWidth = 95

let xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
xAxis.dataFields.category = 'category'
xAxis.renderer.cellStartLocation = 0.1
xAxis.renderer.cellEndLocation = 0.9
xAxis.renderer.grid.template.location = 0;

let yAxis = chart.yAxes.push(new am4charts.ValueAxis());
yAxis.min = 0;

function createSeries(value, name) {
    let series = chart.series.push(new am4charts.ColumnSeries())
    series.dataFields.valueY = value
    series.dataFields.categoryX = 'category'
    series.name = name

    series.events.on("hidden", arrangeColumns);
    series.events.on("shown", arrangeColumns);

    let bullet = series.bullets.push(new am4charts.LabelBullet())
    bullet.interactionsEnabled = false
    bullet.dy = 30;
    bullet.label.text = '{valueY}'
    bullet.label.fill = am4core.color('#ffffff')

    return series;
}

chart.data = [
    {
        category: 'POST',
        jan: 40,
        feb: 55,
        mar: 60,
        apr: 60,
        may: 40,
        jun: 30,
        jul: 20,
        aug: 10,
        sep: 6,
        oct: 70,
        nov: 45,
        dec: 33
    },
    {
        category: 'GET',
        jan: 30,
        feb: 15,
        mar: 30,
        apr: 20,
        may: 50,
        jun: 70,
        jul: 30,
        aug: 20,
        sep: 60,
        oct: 50,
        nov: 25,
        dec: 53
    },
    {
        category: 'UPDATE',
        jan: 50,
        feb: 25,
        mar: 40,
        apr: 10,
        may: 80,
        jun: 50,
        jul: 40,
        aug: 90,
        sep: 4,
        oct: 60,
        nov: 25,
        dec: 33
    },
    {
        category: 'DELETE',
        jan: 40,
        feb: 55,
        mar: 60,
        apr: 60,
        may: 40,
        jun: 30,
        jul: 20,
        aug: 10,
        sep: 6,
        oct: 70,
        nov: 45,
        dec: 33
    }
]


createSeries('jan', 'Jan');
createSeries('feb', 'Feb');
createSeries('mar', 'Mar');
createSeries('apr', 'Apr');
createSeries('may', 'May');
createSeries('jun', 'Jun');
createSeries('jul', 'Jul');
createSeries('aug', 'Aug');
createSeries('sep', 'Sep');
createSeries('oct', 'Oct');
createSeries('nov', 'Nov');
createSeries('dec', 'Dec');

function arrangeColumns() {

    let series = chart.series.getIndex(0);

    let w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
    if (series.dataItems.length > 1) {
        let x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
        let x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
        let delta = ((x1 - x0) / chart.series.length) * w;
        if (am4core.isNumber(delta)) {
            let middle = chart.series.length / 2;

            let newIndex = 0;
            chart.series.each(function(series) {
                if (!series.isHidden && !series.isHiding) {
                    series.dummyData = newIndex;
                    newIndex++;
                }
                else {
                    series.dummyData = chart.series.indexOf(series);
                }
            })
            let visibleCount = newIndex;
            let newMiddle = visibleCount / 2;

            chart.series.each(function(series) {
                let trueIndex = chart.series.indexOf(series);
                let newIndex = series.dummyData;

                let dx = (newIndex - trueIndex + middle - newMiddle) * delta

                series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
            })
        }
    }
}
  }
}

