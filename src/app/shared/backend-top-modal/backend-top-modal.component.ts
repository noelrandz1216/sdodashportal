import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-backend-top-modal',
  standalone: true,
  imports: [],
  templateUrl: './backend-top-modal.component.html',
  styleUrl: './backend-top-modal.component.css'
})
export class BackendTopModalComponent {

  constructor(private oauthService: OAuthService, private router:Router) { }

  logout() {
    this.oauthService.logOut();
    this.router.navigate(['']);
  }

}
