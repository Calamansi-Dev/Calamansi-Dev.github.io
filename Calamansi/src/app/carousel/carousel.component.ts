import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() data: any[];
  i: number;
  constructor() {
    this.i = 0;
  }

  ngOnInit(): void {
  }

}
