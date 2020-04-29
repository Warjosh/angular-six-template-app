import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
/* import { UserComponent } from '../../user/user.component'; */
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { AgregaComponent } from 'app/user/agregar/agrega.component';
import { ConsultaComponent } from 'app/user/consultar/consultar.component';
import { PerfilComponent } from 'app/user/Perfil/perfil.component';
import { EditarComponent } from 'app/user/Editar/editar.component';


export const AdminLayoutRoutes: Routes = [
   /*  { path: 'user',           component: UserComponent }, */
    { path: 'table',          component: TablesComponent },
     { path: 'typography',     component: TypographyComponent },
    { path: 'dashboard',          component: TypographyComponent },
    { path: 'agregar_usuario',        component: AgregaComponent },
    { path: 'consultar_usuario',        component: ConsultaComponent },
    { path: 'perfil_usuario',        component: PerfilComponent },
    { path: 'consultar_usuario/editar_usuario/:id',    component: EditarComponent }
];
