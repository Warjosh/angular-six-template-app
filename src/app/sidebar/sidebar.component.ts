import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    type: string;
    children: Array <RouteInfo>;
    ab: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Home',  icon: 'pe-7s-home', class: '', type: 'link', children: [], ab: '' },
    { path: '', title: 'Users',  icon: 'pe-7s-user', class: '', type: 'sub', children:
    [
        {path: '/agregar_usuario', title: ' Agregar usuario',  icon: 'pe-7s-user', class: '', type: 'sub', children: [], ab: 'AU' },
        {path: '/consultar_usuario', title: ' Consultar usuario',  icon: 'pe-7s-user', class: '', type: 'sub', children: [], ab: 'CU'}
    ], ab: ''},
    { path: '/table', title: 'Table List',  icon: 'pe-7s-note2', class: '', type: 'link', children: [], ab: '' },
   /*  { path: '/typography', title: 'Typography',  icon:'pe-7s-news-paper', class: '' },
    { path: '/icons', title: 'Icons',  icon:'pe-7s-science', class: '' },
    { path: '/maps', title: 'Maps',  icon:'pe-7s-map-marker', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'pe-7s-rocket', class: 'active-pro' }, */
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
