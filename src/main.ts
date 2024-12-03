import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { DashboardComponent } from './app/dashboard/dashboard.component';

bootstrapApplication(DashboardComponent, {
  providers: [
    provideAnimations()
  ]
}).catch(err => console.error(err));