import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RevenueStat, TheatreStat, TheatrePerformance } from '../models/stats.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  getRevenueStats(): Observable<RevenueStat[]> {
    return of([
      {
        title: 'Overall Revenue',
        amount: '₹5.8M',
        percentage: 80,
        trend: 'up',
        icon: 'payments',
        color: '#5b6fe6'
      },
      {
        title: 'Theatre Revenue',
        amount: '₹4.5M',
        percentage: 20,
        trend: 'up',
        icon: 'theater_comedy',
        color: '#ff4081'
      },
      {
        title: 'Ticket Operator Revenue',
        amount: '₹100K',
        percentage: 10,
        trend: 'up',
        icon: 'confirmation_number',
        color: '#ffa726'
      },
      {
        title: 'Platform Revenue',
        amount: '₹800K',
        percentage: 30,
        trend: 'up',
        icon: 'devices',
        color: '#26c6da'
      },
      {
        title: 'Tax Contribution',
        amount: '₹100K',
        percentage: 15,
        trend: 'down',
        icon: 'account_balance',
        color: '#8e24aa'
      }
    ]);
  }

  getTheatreStats(): Observable<TheatreStat[]> {
    return of([
      { name: 'Amboli Complex', value: 35 },
      { name: 'Arabian Cinemas', value: 45 },
      { name: 'Broadway Cinemas', value: 55 },
      { name: 'Cinematic Cinemas', value: 25 },
      { name: 'Citipolis Fun Republic Mall', value: 65 }
    ]);
  }

  getTheatrePerformance(): Observable<TheatrePerformance[]> {
    return of([
      { name: 'Cosmo Cinemas', revenue: 30000, percentage: 75 },
      { name: 'Gokulam Cinemas', revenue: 28000, percentage: 65 },
      { name: 'Kalpana Theatre', revenue: 15000, percentage: 45 },
      { name: 'SRK Miraj Cinemas', revenue: 20000, percentage: 55 },
      { name: 'Karpagam Theatres', revenue: 10000, percentage: 35 }
    ]);
  }
}