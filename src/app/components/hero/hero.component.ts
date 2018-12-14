import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../Services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  hero: any = {};
  constructor(private activateRoute: ActivatedRoute, private _heroesService: HeroesService) {
    this.activateRoute.params.subscribe(params => {
      // el elemento debe de tener el mismo nombre que
      // se indico en la ruta
      this.hero = this._heroesService.getHero(params['id']);
      console.log(this.hero);
    });
  }
  getComic(): string {
    if (this.hero.casa === "Marvel") {
      return ".\\assets\\img\\logo-marvel.png";
    }
    return ".\\assets\\img\\dc_comics_logo.png";
  }

}
