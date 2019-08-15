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

import { UserLayoutRoutes } from './user-layout.routing';

import { HomeComponent } from '../../home/home.component';
import { LoginComponent } from 'app/Login/logear/logear.component';
import { OlvidoComponent } from 'app/Login/olvido/olvido.component';
import { RestablecerComponent } from 'app/Login/restablecer/restablecer.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserLayoutRoutes),
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
    HttpModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'})
  ],
  declarations: [
    HomeComponent,
    LoginComponent,
    OlvidoComponent,
    RestablecerComponent
  ]
  
})

export class UserLayoutModule {}
