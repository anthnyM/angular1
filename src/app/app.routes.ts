import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ArticulosComponent } from './pages/articulos/articulos.component';

export const routes: Routes = [
    {path: "", component: HomeComponent },
    {path: "about", component: AboutComponent},
    {path: "contact", component: ContactComponent},
    {path: "articles", component: ArticulosComponent}
];
