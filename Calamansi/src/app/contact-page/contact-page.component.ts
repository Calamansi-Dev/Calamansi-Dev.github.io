import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  title = 'Calamansi';
  mapOptions: google.maps.MapOptions = {
    center: { lat: 35.26356962917474, lng: -120.70099663487278 },
    zoom : 13
  }
  marker = {
    position: { lat: 35.26356962917474, lng: -120.70099663487278 },
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
