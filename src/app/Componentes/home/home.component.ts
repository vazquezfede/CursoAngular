import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  numero_adivinar = 5;
  numero;
  mensaje = "";
  cssGano = "";
  productos = []

  constructor() { 
    this.productos=  [
      {"id":"1", "desc":"producto 1"},
      {"id":"2", "desc":"producto 2"},
      {"id":"3", "desc":"producto 3"}
    ]
  }
  adivinar(){
   
    if(this.numero==this.numero_adivinar){
      this.mensaje="Gano"
      this.cssGano="gano"
    }else if(this.numero<this.numero_adivinar){
      this.mensaje="Debes colocar un numero mayor"
      this.cssGano="perdio"
    }else{
      this.mensaje="Debes colocar un numero menor"
      this.cssGano="perdio"
    }
  }

  ngOnInit(): void {
  }

}
