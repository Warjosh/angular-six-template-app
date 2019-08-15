import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SessionService } from '../login.service';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';


declare var $: any;

@Component({
  selector: 'app-olvido',
  templateUrl: './olvido.component.html',
  styleUrls: ['./../logear/logear.component.css'],
  providers: [ SessionService ]
})

export class OlvidoComponent implements OnInit {

  location: Location;
  login: Object[] = [];
  olvidoForm = new FormGroup({});

  constructor( private sessionService: SessionService,  private router: Router, private fb: FormBuilder, location: Location ) {
    this.location = location;
   }

  ngOnInit() {

    this.olvidoForm = this.fb.group({
      correo: ['', [Validators.email, Validators.required]]
    });
  }

  enviarCorreo() {
    this.sessionService.enviarMail(this.olvidoForm.value).subscribe(
      data => {
        console.log('POST Request is successful ', data);
        $.notify({
            icon: 'pe-7s-check',
            message: data['mensaje'] + '.',
          }, {
            type: 'success',
            timer: 3000,
            placement: {
                from: 'top',
                align: 'right'
            }
          });
        this.router.navigate(['login']);
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
