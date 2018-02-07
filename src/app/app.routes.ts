import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';


const app_routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'artist/:id', component: ArtistComponent },
  
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },


    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];


export const app_routing = RouterModule.forRoot(app_routes, {useHash: true});

// recomienda usar el hash, por los distintos navegadores