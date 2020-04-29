import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {NgxMaskModule} from 'ngx-mask';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';
// tslint:disable-next-line:max-line-length
import { MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatSelectModule, MatCardModule, MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../home/home.component';
/* import { UserComponent } from '../../user/user.component'; */
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { AgregaComponent } from 'app/user/agregar/agrega.component';
import { ConsultaComponent } from 'app/user/consultar/consultar.component'
import { PerfilComponent } from 'app/user/Perfil/perfil.component';
import { EditarComponent } from 'app/user/Editar/editar.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    NgxMaskModule.forRoot(),
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatSelectModule,
    MatCardModule,
    NgxDatatableModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    HttpModule
  ],
  declarations: [
    TablesComponent,
    TypographyComponent,
    AgregaComponent,
    ConsultaComponent,
    PerfilComponent,
    EditarComponent
  ],
})

export class AdminLayoutModule {}
