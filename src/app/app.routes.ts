import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { Login } from './page/login/login';
import { QuienSoy } from './comps/quien-soy/quien-soy';

export const routes: Routes = [
    { path: '', redirectTo: 'login',  pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'login', component: Login },
    { path: 'home/quien-soy', component: QuienSoy},
    { path: '**', redirectTo: 'error'}
];
