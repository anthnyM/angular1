import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../servicios/posts.service';

@Component({
  selector: 'app-articulos',
  standalone: true,
  imports: [],
  templateUrl: './articulos.component.html',
  styleUrl: './articulos.component.scss'
})
export class ArticulosComponent implements OnInit{
  constructor(private postsService: PostsService){ }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(
      data => console.log(data),
      error => console.log("HAY UN ERROR")
    )
  }
}
