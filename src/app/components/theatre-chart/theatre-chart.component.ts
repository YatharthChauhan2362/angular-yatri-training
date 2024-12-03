import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { Chart, registerables } from 'chart.js';
import { DashboardService } from '../../services/dashboard.service';

Chart.register(...registerables);

@Component({
  selector: 'app-theatre-chart',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  template: `
    <div class="card">
      <h2>Theatre Stats</h2>
      <canvas baseChart
        [data]="barChartData"
        [options]="barChartOptions"
        [type]="'bar'">
      </canvas>
    </div>
  `
})
export class TheatreChartComponent implements OnInit {
  constructor(private dashboardService: DashboardService) {}

  barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  barChartData: ChartConfiguration['data'] = {
    labels: [],
    datasets: [{
      data: [],
      label: 'Theatre Performance',
      backgroundColor: '#5b6fe6'
    }]
  };

  ngOnInit() {
    this.dashboardService.getTheatreStats().subscribe(stats => {
      this.barChartData.labels = stats.map(stat => stat.name);
      this.barChartData.datasets[0].data = stats.map(stat => stat.value);
    });
  }
}