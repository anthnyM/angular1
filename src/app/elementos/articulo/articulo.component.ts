import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-articulo',
  standalone: true,
  imports: [],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.scss'
})
export class ArticuloComponent {
@Input() articulo: any
}
