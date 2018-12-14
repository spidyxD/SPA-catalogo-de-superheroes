import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: []
})
export class HeroeTarjetaComponent implements OnInit {
  // el decorador input establece que puede venir informacion por fuera (una clase padre)
  // de la clase para esa propiedad
  @Input() hero: any = {};
  @Input() index: number;

  // para utilizar metodos de una clase padre se usa el output y el event emiter 
  // es crear un listener a la clase padre
  @Output() heroSelected: EventEmitter<number>;
  constructor( private router: Router) {
    this.heroSelected = new EventEmitter();
   }


  // ciclo de vida de un componente
  ngOnInit() {
  }

  verHeroe() {
     this.router.navigate(['/hero', this.index]);
    // console.log(this.index);
    // this.heroSelected.emit(this.index);
  }
}
