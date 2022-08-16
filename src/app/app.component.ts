import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //etiqueta
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'primer_angular';
  edad: number = 30;
  direccion: string = 'Portales Oriente 748';
  resultado: number = 0;
  mostrar: string = '';
  sumar(numero1: number, numero2: number): number {
    return numero1 + numero2;
  }
  restar(numero1: number, numero2: number): number {
    return numero1 - numero2;}
  dividir(numero1: number, numero2: number): number {
      return numero1 / numero2;}
  potencia(numero1: number, numero2: number): number {
    return numero1 ** numero2;}
  multiplicacion(numero1: number, numero2: number): number {
    return numero1 * numero2;}
  sumarDos():void{
    this.resultado =this.resultado + 2;
  }
  agregarletra(): void {
    this.mostrar = this.mostrar + 'hola';
  }
  }

