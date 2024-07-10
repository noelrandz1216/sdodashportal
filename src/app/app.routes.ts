import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { AUTH_LAYOUT } from './routes/auth-layout-routes';
import { DASHBOARD_LAYOUT } from './routes/dashboard-layout-routes';

export const routes: Routes = [
  {path:'', component:AuthLayoutComponent, children:AUTH_LAYOUT},
  {path: 'dashboard', component:DashboardLayoutComponent, children:DASHBOARD_LAYOUT}
];
