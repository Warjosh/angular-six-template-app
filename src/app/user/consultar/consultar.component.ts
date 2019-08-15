import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { UsuarioService } from '../usuario.service';

declare var $: any;

@Component({
  selector: 'app-consulta',
  templateUrl: './consultar.component.html'
})
export class ConsultaComponent implements OnInit {

  @ViewChild('nameTemplate') nameTemplate: TemplateRef<any>;
  @ViewChild('phoneTemplate') phoneTemplate: TemplateRef<any>;
  @ViewChild('menuTemplate') menuTemplate: TemplateRef<any>;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  public columns = [];

  usuarios: any[] = [];
  titulo: string;

  constructor( private usuarioService: UsuarioService ) { }

  ngOnInit() {

    this.titulo = 'Consultar usuarios';
    this.columns = [
      { prop: 'nombreCompleto' },
      { prop: 'correo' },
      { prop: 'username', name: 'Usuario' },
      { prop: 'celular', cellTemplate: this.phoneTemplate },
      { prop: 'estatus' , width: 20},
      { prop: 'username', name: '', cellTemplate: this.menuTemplate, width: 20, sortable: false }
    ];
    this.usuarios = [];
    this.usuarioService.getAll().subscribe(
      data => {
        console.log('POST Request is successful ', data);
        this.usuarios = data['response'];
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
