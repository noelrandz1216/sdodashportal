import { Component, OnInit } from '@angular/core';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { TeacherService } from '../../service/teacher.service';
import { authConfig } from '../../auth/auth.config';
import { Router } from '@angular/router';
import { LessonModuleService } from '../../service/lesson-module.service';

@Component({
  selector: 'app-content-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './content-wrapper.component.html',
  styleUrl: './content-wrapper.component.css'
})
export class ContentWrapperComponent implements OnInit{
  text: string ='';
  access_token = '';
  email: string ='';
  gradelevel: string ='';
  subject: string = '';
  constructor(
    private oauthService:OAuthService,
    private teacherService:TeacherService,
    private lessonModuleService:LessonModuleService,
    private router:Router){
    this.configureOAuth();
  }

  private configureOAuth() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    // Load the discovery document and check if a login is already active
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      // Check if there is a valid access token
      if (this.oauthService.hasValidAccessToken()) {
        console.log('Access Token', this.oauthService.getAccessToken());
        this.access_token = this.oauthService.getAccessToken();
        const email = this.teacherService.getEmailFromToken(this.access_token);
        if(email!=null){
          this.email = email;
          this.teacherService.getSubjectGradelevels(email).subscribe(response => {
            const jsonResponse = JSON.parse(JSON.stringify(response));
            const numOfItems = jsonResponse.setSubjectGradeLevels.length;
            console.log("Number of items:", numOfItems);
            this.subject = jsonResponse.setSubjectGradeLevels[0].subject;
            this.gradelevel = jsonResponse.setSubjectGradeLevels[0].gradeLevel;
            for (let i = 0; i < numOfItems; i++) {
              console.log(`Item ${i}: Subject = ${jsonResponse.setSubjectGradeLevels[i].subject}, Grade Level = ${jsonResponse.setSubjectGradeLevels[i].gradeLevel}`);
            }
          });
        }else{
          console.log("Email does exist..");
        }

      } else {
        console.log('Not logged in');
      }
    });
  }

  ngOnInit(): void {

  }

  getEmailFromTokenAccess(){

  }

}
