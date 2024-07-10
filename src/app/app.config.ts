import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      HttpClient,
      HttpClientModule,
      OAuthModule.forRoot({
        resourceServer: {
          allowedUrls: [
            'http://localhost:8081/api',
            'http://localhost:8082/api'
          ],
          sendAccessToken: true
        }
      })
    ),
  ]
};
