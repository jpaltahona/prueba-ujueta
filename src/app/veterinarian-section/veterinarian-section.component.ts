import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veterinarian-section',
  templateUrl: './veterinarian-section.component.html',
  styleUrls: ['./veterinarian-section.component.scss']
})
export class VeterinarianSectionComponent implements OnInit {
  public info: any;

  constructor() {
    this.info = [
      {id: 1, img: '/assets/images/veterinaria.jpg', title:'Veterinarian', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
      {id: 2, img: '/assets/images/veterinaria.jpg', title:'Vaccination Care', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
      {id: 5, img: '/assets/images/veterinaria.jpg', title:'Dental Care', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
    ]
   }

  ngOnInit(): void {
  }

}
