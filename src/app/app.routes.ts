import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CatsComponent } from './pages/cats/cats.component';
import { DogsComponent } from './pages/dogs/dogs.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DiretivasComponent } from './pages/diretivas/diretivas.component';
import { SwitchComponent } from './pages/switch/switch.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cats', component: CatsComponent },
  { path: 'dogs', component: DogsComponent },
  { path: 'diretivas', component: DiretivasComponent },
  { path: 'switch', component: SwitchComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent },
];
