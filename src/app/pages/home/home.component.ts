import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductosService } from '../../servicios/productos.service';
import { NONE_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  productos: any

  constructor( private productosService: ProductosService) { }

  obtenerProductos() {
    this.productosService.obtenerProductos().subscribe(
      data => this.productos = data,
      error => console.log(error),
      () => console.log('FIN')
    )
  }

  ngOnInit(): void {
    this.obtenerProductos()
  }

  ngOnDestroy(): void {
    console.log("ADIOS MUNDO")
  }
}
