import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroComponent } from './components/hero/hero.component';
import { SearchComponent } from './components/search/search.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'hero/:id', component: HeroComponent },
    { path: 'search/:termino', component: SearchComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'   },
];
//  es necesario usar el hash para poder enviar parametros  {useHash: true}
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
