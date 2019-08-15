import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
// import { SnotifyService } from 'ng-snotify';

declare var $: any;

@Component({
  selector: 'app-agrega',
  templateUrl: './agrega.component.html'
})
export class AgregaComponent implements OnInit {

  usuarioForm = new FormGroup({});
  disabled: boolean;
  titulo: string;
  classCss: string;

  constructor(private fb: FormBuilder,  private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit() {

    this.titulo = 'Agregar usuario';
    this.classCss = 'col-md-offset-2 col-md-8';
    this.disabled = false;

    this.usuarioForm = this.fb.group({
    nombreCompleto: ['', Validators.required],
    correo: ['', [Validators.email, Validators.required]],
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmaPassword: ['', [Validators.required, Validators.minLength(6)]],
    celular: ['', [Validators.required, Validators.minLength(10)]]
  }, {validator: this.checkPasswords });

  }
// here we have the 'passwords' group
  checkPasswords(group: FormGroup) {
    const pass = group.controls.password.value;
    const confirmPass = group.controls.confirmaPassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }

  agregar() {
  //  console.warn(this.usuarioForm.value);
     this.usuarioService.add(this.usuarioForm.value).subscribe(
      data => {
        console.log('POST Request is successful ', data);
        $.notify({
            icon: 'pe-7s-check',
            message: data['mensaje'] + '.'
          }, {
              type: 'success',
              timer: 3000,
              placement: {
                  from: 'top',
                  align: 'right'
              }
          });
        this.router.navigate(['consultar_usuario']);
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
