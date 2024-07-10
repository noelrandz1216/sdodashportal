import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-backend-header',
  standalone: true,
  imports: [],
  templateUrl: './backend-header.component.html',
  styleUrl: './backend-header.component.css'
})
export class BackendHeaderComponent implements OnInit{

  constructor(private oauthService: OAuthService) { }

  ngOnInit() {
  }


  logout() {
    this.oauthService.logOut();
  }

}
