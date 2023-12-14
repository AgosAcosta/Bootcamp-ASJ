import { Component } from '@angular/core';

@Component({
  selector: 'app-form-los-simpsons',
  templateUrl: './form-los-simpsons.component.html',
  styleUrl: './form-los-simpsons.component.css',
})
export class FormLosSimpsonsComponent {
  url: string = '';
  nombre: string = '';
  rol: string = '';

  formulario: { url: string; nombre: string; rol: string }[] = [];

  CargarTabla() {
    this.formulario.push({
      url: this.url,
      nombre: this.nombre,
      rol: this.rol,
    });

    this.url = '';
    this.nombre = '';
    this.rol = '';
  }
}
