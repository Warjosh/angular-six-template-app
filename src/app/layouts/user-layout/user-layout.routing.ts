import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { LoginComponent } from 'app/Login/logear/logear.component';
import { OlvidoComponent } from 'app/Login/olvido/olvido.component';
import { RestablecerComponent } from 'app/Login/restablecer/restablecer.component';

export const UserLayoutRoutes: Routes = [
    { path: 'home',      component: HomeComponent },
    { path: 'login',      component: LoginComponent},
    { path: 'recuperar',      component: OlvidoComponent},
    { path: 'restablecer/:codigo',      component: RestablecerComponent}
];
