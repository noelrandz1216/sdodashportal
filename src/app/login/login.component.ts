import { Component } from '@angular/core';
import { authConfig } from '../auth/auth.config';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private oauthService: OAuthService, private router:Router) {
    this.configureOAuth();
  }

  ngOnInit(): void {

  }

  login() {
    this.oauthService.initCodeFlow();
  }

  private configureOAuth() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    // Load the discovery document and check if a login is already active
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      // Check if there is a valid access token
      if (this.oauthService.hasValidAccessToken()) {
        console.log('Access Token', this.oauthService.getAccessToken());
        this.router.navigate(['/dashboard']);
      } else {
        console.log('Not logged in');
      }
    });
  }

  getAccessToken() {
    return this.oauthService.getAccessToken();
  }

}
