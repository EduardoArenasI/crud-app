import { Component, OnInit } from '@angular/core';


import { Post } from 'src/app/post.model';
import { PostService } from 'src/app/post.service';
import { ApiService } from 'src/app/shared/api.service';

// import model


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']

})


export class ShowComponent implements OnInit {
  Post: Post[]
  constructor(private postService: PostService) { }
  ngOnInit(): void {
  }

  deleteRow = (post: string) => { this.postService.destroy(post) }
} 
