import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Post } from 'src/app/post.model';
import { PostService } from 'src/app/post.service';
import { ApiService } from 'src/app/shared/api.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
  Post: Post[]
  constructor(private postService: PostService) { }

  ngOnInit() {

  }
  update = (post: Post) => { this.postService.update(post.id, post) };
}



