//# sourceMappingURL=app.routes.js.map
import { Routes, RouterModule }   from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent,
        data: {
            title: 'About angular 2'
        }
    }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);