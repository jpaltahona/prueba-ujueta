import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public listFooter: any[];
  public listTwo : any[];

  constructor() { 
    this.listFooter = [
      { title: 'History', url: '#' },
      { title: 'Out Team', url: '#' },
      { title: 'Brand Guidelines', url: '#' },
      { title: 'Terms & condition', url: '#' },
      { title: 'Privacy Policy', url: '#' }
    ];
    this.listTwo = [
      { title: 'How to Order', url: '#' },
      { title: 'Our Product', url: '#' },
      { title: 'Our Status', url: '#' },
      { title: 'Promo', url: '#' },
      { title: 'Payment Method', url: '#' }
    ];
  }

  ngOnInit(): void {
  }

}
