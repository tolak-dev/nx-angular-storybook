import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { appRoutes } from './app/app.routes';
import { WEB_APP_ENV, WebAppEnvironment } from '@ui-comp/shared-environments';

const env: WebAppEnvironment = {
  API_BASE_URL: process.env.API_BASE_URL,
};

bootstrapApplication(App, {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: WEB_APP_ENV, useValue: env },
  ],
});
