import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  visible = false;
  clase = "css-class";
  nombre_persona = "Cambiame esto";
  mostrar(){
    this.visible = !this.visible;
  }
}
