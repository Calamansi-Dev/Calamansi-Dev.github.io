import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addActive(e: any){
    console.log(e.target.id, e.target.className);
  }
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
  
}
