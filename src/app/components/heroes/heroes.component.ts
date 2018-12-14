import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HeroesService, Hero } from '../../Services/heroes.service';
// se exporta la interfaz para validar tambien en el componente el arreglo
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})

export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  ngOnInit() {
    this.heroes = this._heroesService.getHeores();
    // console.log(this.heroes);
  }
  verHeroe(idx: number) {
    this.router.navigate(['/hero', idx]);
    console.log(idx);
  }

  // se declara como privado el servicio para que se el componente accede a el
  constructor(private _heroesService: HeroesService, private router: Router) { }
}
