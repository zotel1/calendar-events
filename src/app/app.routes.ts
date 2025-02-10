import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)
    },
    {
        path: 'profile',
        loadComponent: () => import('./pages/profile/profile.component').then(c => c.ProfileComponent)
    },
    {
        path: 'calendar',
        loadComponent: () => import('./pages/calendar/calendar.component').then(c => c.CalendarComponent)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
