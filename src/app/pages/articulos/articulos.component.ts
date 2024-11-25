import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../servicios/posts.service';
import { ArticuloComponent } from '../../elementos/articulo/articulo.component';

@Component({
  selector: 'app-articulos',
  standalone: true,
  imports: [ArticuloComponent],
  templateUrl: './articulos.component.html',
  styleUrl: './articulos.component.scss'
})
export class ArticulosComponent implements OnInit{
  constructor(private postsService: PostsService){ }

  articulos: any

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(
      data => this.articulos = data,
      error => console.log("HAY UN ERROR")
    )
  }
}
