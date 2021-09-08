import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  public left: boolean;

  @Input() align_elements: boolean;

  constructor() {
    this.left = true;
    this.align_elements = true;
  }
  ngOnInit(): void {
  }

}
