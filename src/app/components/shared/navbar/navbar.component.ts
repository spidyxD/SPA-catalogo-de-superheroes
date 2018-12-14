import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../Services/heroes.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private _heroesService: HeroesService, private router: Router) { }

  ngOnInit() {
  }
  buscarHeroe(termino: string) {
   this.router.navigate(['/search', termino ]);
  }
}
