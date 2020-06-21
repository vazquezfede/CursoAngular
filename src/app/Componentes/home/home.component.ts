import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

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
  productos = {}

  constructor(private productoServ:ProductosService) { 
    this.productoServ.getAll().subscribe(data=>{
      console.log(data);
      this.productos = data;
    });
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
