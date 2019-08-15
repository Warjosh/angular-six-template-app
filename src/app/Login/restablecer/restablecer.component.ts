import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from '../login.service';
import { UsuarioService } from 'app/user/usuario.service';


declare var $: any;

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.component.html',
  styleUrls: ['./../logear/logear.component.css']
})
export class RestablecerComponent implements OnInit {

  restablecerForm = new FormGroup({});

  // tslint:disable-next-line:max-line-length
  constructor(private fb: FormBuilder, private sessionService: SessionService, private router: Router,  private route: ActivatedRoute, private usuarioService: UsuarioService) { }

  ngOnInit() {

    this.restablecerForm = this.fb.group({
      password: ['', [Validators.minLength(6), Validators.required]],
      confirmaPassword: ['', [Validators.minLength(6), Validators.required]]
    }, {validator: this.checkPasswords });

    this.route.params.subscribe(params => {
      this.usuarioService.getCod({ 'codigoExpira': params['codigo'] }).subscribe(
          data => {
            this.restablecerForm = this.fb.group({
               correo: data['response'].correo,
              password: null,
              confirmaPassword: null
            });
          },
          error => {
            this.router.navigate(['login']);
          }
      );

  });

  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmaPassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }

  guardar() {
      console.warn(this.restablecerForm.value);

      this.sessionService.restablecer(this.restablecerForm.value).subscribe(
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
