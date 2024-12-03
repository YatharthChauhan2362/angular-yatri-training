import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RevenueCardComponent } from '../components/revenue-card/revenue-card.component';
import { TheatreChartComponent } from '../components/theatre-chart/theatre-chart.component';
import { PerformanceListComponent } from '../components/performance-list/performance-list.component';
import { DashboardService } from '../services/dashboard.service';
import { RevenueStat } from '../models/stats.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    RevenueCardComponent,
    TheatreChartComponent,
    PerformanceListComponent
  ],
  template: `
    <div class="dashboard">
      <div class="header">
        <h1>Dashboard</h1>
        <div class="period-selector">
          <button mat-button [class.active]="period === 'today'" (click)="period = 'today'">Today</button>
          <button mat-button [class.active]="period === 'monthly'" (click)="period = 'monthly'">Monthly</button>
          <button mat-button [class.active]="period === 'annually'" (click)="period = 'annually'">Annually</button>
        </div>
      </div>

      <div class="stats-grid">
        <app-revenue-card *ngFor="let stat of revenueStats" [stat]="stat"></app-revenue-card>
      </div>

      <div class="charts-grid">
        <app-theatre-chart></app-theatre-chart>
        <app-performance-list></app-performance-list>
      </div>
    </div>
  `,
  styles: [`
    .dashboard {
      padding: 20px;
      max-width: 1400px;
      margin: 0 auto;
    }
    .charts-grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 20px;
    }
    @media (max-width: 1024px) {
      .charts-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class DashboardComponent implements OnInit {
  period: 'today' | 'monthly' | 'annually' = 'monthly';
  revenueStats: RevenueStat[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.dashboardService.getRevenueStats()
      .subscribe(stats => this.revenueStats = stats);
  }
}