import { Routes } from '@angular/router';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    {
        path: 'login', component: LoginPageComponent,
    },
    {
        path: 'dashboard', component: DashboardComponent,
    }
    ,
    {
        path: '**',
        component: PageNotFoundComponent

    }
];

