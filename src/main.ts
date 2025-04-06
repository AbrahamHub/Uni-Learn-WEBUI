import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { HomeComponent } from './app/application/home/app.component';

bootstrapApplication(HomeComponent)
  .catch(err => console.error(err));
