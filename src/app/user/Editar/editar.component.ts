import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../usuario.service';

declare var $: any;

@Component({
  selector: 'app-editar',
  templateUrl: './../agregar/agrega.component.html'
})
export class EditarComponent implements OnInit {

  usuarioForm = new FormGroup({});
  disabled: boolean;
  titulo: string;
  classCss: string;

  constructor(private fb: FormBuilder,  private router: Router,  private route: ActivatedRoute, private usuarioService: UsuarioService) { }

  ngOnInit() {

    this.titulo = 'Editar usuario';
    this.classCss = 'col-md-8';
    this.disabled = true;

    this.usuarioForm = this.fb.group({
      nombreCompleto: ['', Validators.required],
      correo: ['', [Validators.email, Validators.required]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmaPassword: ['', [Validators.required, Validators.minLength(6)]],
      celular: ['', [Validators.required, Validators.minLength(12)]]
      }, {validator: this.checkPasswords });

      this.route.params.subscribe(params => {
        this.usuarioService.get({ 'username': params['id'] }).subscribe(
            data => {
              this.usuarioForm = this.fb.group({
                nombreCompleto: data['response'].nombreCompleto,
                correo: data['response'].correo,
                username: data['response'].username,
                celular: data['response'].celular,
                password: null,
                confirmaPassword: null,
              });
            },
            error => {
               this.router.navigate(['consultar_usuario']);
                return null;
            }
        );
    });
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    const pass = group.controls.password.value;
    const confirmPass = group.controls.confirmaPassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }

  agregar() {
    console.warn(this.usuarioForm.value);
    this.usuarioService.update(this.usuarioForm.value).subscribe(
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
