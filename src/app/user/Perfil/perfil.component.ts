import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-perfil',
  templateUrl: './../agregar/agrega.component.html'
})
export class PerfilComponent implements OnInit {

  usuarioForm = new FormGroup({});
  disabled: boolean;
  titulo: string;
  classCss: string;

  constructor(private fb: FormBuilder,  private router: Router) { }

  ngOnInit() {

    this.titulo = 'Perfil usuario';
    this.classCss = 'col-md-8';

    this.disabled = true;

    this.usuarioForm = this.fb.group({
      nombreCompleto: ['', Validators.required],
      correo: ['', [Validators.email, Validators.required]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmaPassword: ['', [Validators.required, Validators.minLength(6)]],
      celular: ['', [Validators.required, Validators.minLength(10)]]
      }, {validator: this.checkPasswords });

    this.usuarioForm = this.fb.group({
        nombreCompleto: 'Joshua Guerra',
        correo: 'Guerrajoshua@gmail.com',
        username: 'Warjosh7',
        password: null,
        confirmaPassword: null,
        celular: '58 4269124032',
      });
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    const pass = group.controls.password.value;
    const confirmPass = group.controls.confirmaPassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }

  agregar() {
    console.warn(this.usuarioForm.value);
    $.notify({
        icon: 'pe-7s-gift',
        message: 'Usuario actualizado.'
      }, {
        type: 'success',
        timer: 900,
        placement: {
            from: 'top',
            align: 'right'
        }
      });
    /* this.usuarioService.add(this.usuarioForm.value).subscribe(
      data => {
        console.log('POST Request is successful ', data);
        this.snotifyService.success(data['mensaje'], 'Exitoso', {
          timeout: 3000,
          position: 'rightTop',
          showProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true
        });
        this.router.navigate(['usuario/consulta']);
      },
      error => {
        console.log('Error', error);
        this.snotifyService.error(error.error['mensaje'], 'Error', {
          timeout: 3000,
          position: 'rightTop',
          showProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true
        });
      }
    ); */
  }

}
