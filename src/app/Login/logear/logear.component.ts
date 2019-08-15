import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SessionService } from '../login.service';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';


declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './logear.component.html',
  styleUrls: ['./logear.component.css'],
  providers: [ SessionService ]
})

export class LoginComponent implements OnInit {

  location: Location;
  login: Object[] = [];
  usuarioForm = new FormGroup({});

  constructor( private sessionService: SessionService,  private router: Router, private fb: FormBuilder, location: Location ) {
    this.location = location;
   }

  ngOnInit() {

    this.usuarioForm = this.fb.group({
      correo: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  logIn() {

    const values = {
      'correo': this.usuarioForm.value['correo'],
      'password': this.usuarioForm.value['password']
    };
    console.log(values);
    this.sessionService.logIn(values).subscribe(
      data => {
        console.log('POST Request is successful ', data);
        this.sessionService.setUser(data['response']);
        this.router.navigate(['/consultar_usuario']);
      },
      error => {
        console.log('Error', error);
        $.notify({
          icon: 'pe-7s-close',
          message: error.error['mensaje'] + '.',
        }, {
          type: 'danger',
          timer: 3000,
          placement: {
              from: 'top',
              align: 'right'
          }
        });
      }
    );
  }

}
