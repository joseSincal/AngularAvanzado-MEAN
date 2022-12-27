import { Component, Input, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent implements OnInit {
  @Input() title: string = 'Sin titulo';
  @Input() data: number[] = [350, 450, 100];
  @Input('labels') doughnutChartLabels: string[] = [
    'Label 1',
    'Label 2',
    'Label 3',
  ];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [],
  };

  ngOnInit(): void {
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [
        {
          data: this.data,
          backgroundColor: ['#6857e6', '#009fee', '#f02059'],
        },
      ],
    };
  }
}
