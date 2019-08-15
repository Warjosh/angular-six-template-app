import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
/* import { UserComponent } from '../../user/user.component'; */
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { AgregaComponent } from 'app/user/agregar/agrega.component';
import { ConsultaComponent } from 'app/user/consultar/consultar.component';
import { PerfilComponent } from 'app/user/Perfil/perfil.component';
import { EditarComponent } from 'app/user/Editar/editar.component';


export const AdminLayoutRoutes: Routes = [
   /*  { path: 'user',           component: UserComponent }, */
    { path: 'table',          component: TablesComponent },
     { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'dashboard',          component: TypographyComponent },
    { path: 'agregar_usuario',        component: AgregaComponent },
    { path: 'consultar_usuario',        component: ConsultaComponent },
    { path: 'perfil_usuario',        component: PerfilComponent },
    { path: 'consultar_usuario/editar_usuario/:id',    component: EditarComponent }
];
