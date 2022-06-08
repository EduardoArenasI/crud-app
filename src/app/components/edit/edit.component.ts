import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { Post } from 'src/app/post.model';


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
  update = (post: boolean) => { this.postService.update(post) }
}