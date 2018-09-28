
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { AppInsights } from 'applicationinsights-js';


@Injectable({
  providedIn: 'root'
})
export class AppInsightsService {
   private config: Microsoft.ApplicationInsights.IConfig = {
    instrumentationKey: environment.appInsights.instrumentationKey
   }
  constructor() {
    if(!AppInsights.config){
      AppInsights.downloadAndSetup(this.config);
    }
   }

   logPageView(name: string, url?: string, properties?: any, measurements?: any, duration?: number){
     AppInsights.trackPageView(name, url, properties, measurements, duration);
   }
}
