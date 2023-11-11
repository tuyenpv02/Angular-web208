import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

export const routes: Routes = [
    {path:'', component:HeroComponent},
    {path:'detail', component:HeroDetailComponent}
];
