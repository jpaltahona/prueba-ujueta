import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  links = [
    { title: 'One', fragment: 'one' },
    { title: 'Two', fragment: 'two' }
  ];
  active = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
