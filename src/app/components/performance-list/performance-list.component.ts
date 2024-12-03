import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DashboardService } from '../../services/dashboard.service';
import { TheatrePerformance } from '../../models/stats.model';

@Component({
  selector: 'app-performance-list',
  standalone: true,
  imports: [CommonModule, MatProgressBarModule],
  template: `
    <div class="card">
      <h2>Theatre Performance</h2>
      <div class="performance-list">
        <div class="performance-item" *ngFor="let item of performances">
          <div class="theatre-info">
            <span class="name">{{item.name}}</span>
            <span class="revenue">₹{{item.revenue}}</span>
          </div>
          <mat-progress-bar
            [value]="item.percentage"
            [color]="'primary'">
          </mat-progress-bar>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .performance-list {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    .performance-item {
      .theatre-info {
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
      }
      .name {
        font-weight: 500;
      }
      .revenue {
        color: #666;
      }
    }
  `]
})
export class PerformanceListComponent implements OnInit {
  performances: TheatrePerformance[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.dashboardService.getTheatrePerformance()
      .subscribe(data => this.performances = data);
  }
}