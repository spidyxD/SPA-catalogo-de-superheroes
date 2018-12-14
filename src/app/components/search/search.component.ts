import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HeroesService, Hero } from '../../Services/heroes.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  heroes: Hero[] = [];
  termino: string;
  verHeroe(idx: number) {
    this.router.navigate(['/hero', idx]);
    console.log(idx);
  }

  constructor(private activateRoute: ActivatedRoute, private _heroesService: HeroesService, private router: Router) {}

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      // el elemento debe de tener el mismo nombre que
      // se indico en la ruta
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
    });
  }

}
