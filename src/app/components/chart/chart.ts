import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {Chart, ChartDataSets} from 'chart.js';
import { configuration } from 'src/app/consts/consts';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.html',
  styleUrls: ['./chart.scss']
})
export class ChartComponent implements OnInit {
  @ViewChild('lineCanvas', {static: true}) lineCanvas;
  @Input() gasType: string;
  @Input() states: string[];
  @Input() years: string[];
  @Input() queryData: any;
  
  private lineChart;
  private datasetsData: any = {}
  constructor() {}

  ngOnInit() {
    this.setDatasetsData();
    this.setChart();
  }

  private setDatasetsData() {
    this.states.forEach(s => {
      this.datasetsData[s] = [];
      const stateObj = this.queryData[s];
      const years = Object.keys(stateObj);
      years.forEach(y => {
        const current = stateObj[y];
        this.datasetsData[s].push(current[this.gasType]);
      });
    });
  }

  private getDataSets(): ChartDataSets[] {
    const datasets: ChartDataSets[] = [];
    this.states.forEach(s => {
      datasets.push({
          data: this.datasetsData[s],
          borderColor: [configuration.all_states[s] || 'gray'],
          backgroundColor:['transparent'],
          borderWidth: 1,
      });
    });
    return datasets;
  }

  setChart() {
    const that = this;
    const all_states = configuration.all_states;
    if (!this.lineCanvas) { return; }
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: this.years,
        datasets: this.getDataSets(),
    },
    options: {
      legend:{
        display: false,
      },
      tooltips: {
        callbacks: {
          label: function(tooltipItem, data) {
            let stateName: string = '';
            const flagColor = data.datasets[tooltipItem.datasetIndex].borderColor[0];
            that.states.forEach(s => {
              if (all_states[s] === flagColor) {
                stateName = s;
              }
            })

            return `${stateName} (${tooltipItem.yLabel.toString()})`;
          }
        }
      },
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
    });
  }
}
