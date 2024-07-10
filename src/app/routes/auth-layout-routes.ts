import { Routes } from "@angular/router";

export const AUTH_LAYOUT: Routes = [
      {
            path: '',
            loadChildren: () => import('../auth/auth.module')
            .then(m=>m.AuthModule)
      }

]
