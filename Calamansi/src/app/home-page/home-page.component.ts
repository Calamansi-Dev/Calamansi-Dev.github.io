import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  items = [
    {
      fileLocation: 'deck.jpeg',
      fileDescrition: 'deck',
      first: ' active'
    }, 
    {
      fileLocation: 'light.jpeg',
      fileDescrition: 'lights',
      first: ''
    }, 
    {
      fileLocation: 'meal1.jpeg',
      fileDescrition: 'meal1',
      first: ''
    }, 
    {
      fileLocation: 'meal2.png',
      fileDescrition: 'meal2',
      first: ''
    }, 
    {
      fileLocation: 'meal3.png',
      fileDescrition: 'meal3',
      first: ''
    }, 
    {
      fileLocation: 'pans.jpeg',
      fileDescrition: 'pans',
      first: ''
    }, 
    {
      fileLocation: 'sunset.jpeg',
      fileDescrition: 'sunset',
      first: ''
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  
}
