import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  items = [
    {
      name: 'Home',
      link: '/home'
    },
    {
      name: 'Things',
      link: '/things'
    },
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
