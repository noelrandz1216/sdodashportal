import { Routes } from "@angular/router";

export const DASHBOARD_LAYOUT: Routes = [
      {
            path: '',
            loadChildren: () => import('../dashboard/dashboard/dashboard.module')
            .then(m=>m.DashboardModule)
      }

]
