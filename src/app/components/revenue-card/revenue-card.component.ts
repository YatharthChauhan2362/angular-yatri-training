import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RevenueStat } from '../../models/stats.model';

@Component({
  selector: 'app-revenue-card',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="stat-card">
      <div class="icon" [style.background-color]="stat.color">
        <mat-icon>{{stat.icon}}</mat-icon>
      </div>
      <div class="content">
        <h3>{{stat.title}}</h3>
        <div class="amount">{{stat.amount}}</div>
        <div class="trend" [class.up]="stat.trend === 'up'" [class.down]="stat.trend === 'down'">
          {{stat.percentage}}% 
          <mat-icon>{{stat.trend === 'up' ? 'arrow_upward' : 'arrow_downward'}}</mat-icon>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .stat-card {
      position: relative;
      padding: 20px;
    }
    .icon {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 15px;
    }
    .icon mat-icon {
      color: white;
    }
    .amount {
      font-size: 24px;
      font-weight: bold;
      margin: 10px 0;
    }
    .trend {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 14px;
    }
    .trend.up { color: #4caf50; }
    .trend.down { color: #f44336; }
  `]
})
export class RevenueCardComponent {
  @Input() stat!: RevenueStat;
}