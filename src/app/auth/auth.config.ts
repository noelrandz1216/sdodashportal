import { AuthConfig } from "angular-oauth2-oidc";


export const authConfig: AuthConfig = {
  issuer: 'http://localhost:8080/realms/lrportal',
  redirectUri: window.location.origin,
  clientId: 'sdopasig',
  responseType: 'code',
  strictDiscoveryDocumentValidation: true,
  scope: 'openid profile email offline_access',
}
