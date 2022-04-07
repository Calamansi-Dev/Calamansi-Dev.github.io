import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//pages
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';

const routes: Routes = [
  { path: 'about-page', component: AboutPageComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'events-page', component: EventsPageComponent },
  { path: 'contact-page', component: ContactPageComponent },
  { path: 'menu-page', component: MenuPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
