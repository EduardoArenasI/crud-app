import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from 'src/app/shared/api.service';
import { Post } from 'src/app/post.model';
import { PostService } from 'src/app/post.service';




//import trabajo

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  Post: Post[]
  constructor(private postService: PostService) { }

  ngOnInit() {

  }

  store = (post: boolean) => { this.postService.store(post) }
}