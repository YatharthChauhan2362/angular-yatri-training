export interface RevenueStat {
  title: string;
  amount: string;
  percentage: number;
  trend: 'up' | 'down';
  icon: string;
  color: string;
}

export interface TheatreStat {
  name: string;
  value: number;
}

export interface TheatrePerformance {
  name: string;
  revenue: number;
  percentage: number;
}