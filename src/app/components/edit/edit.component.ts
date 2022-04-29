import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public editForm: FormGroup;
  postRef: any


  constructor(
    public postService: PostService,
    public formBuilder: FormBuilder,
    public router: Router,
    public ActivatedRoute: ActivatedRoute
  ) {
    this.editForm = this.formBuilder.group({
      nombre: [''],
      apellido: [''],
      residencia: ['']

    })
  }

  ngOnInit(): void {
    const id = this.ActivatedRoute.snapshot.paramMap.get('id')
    this.postService.getPostsById(id).subscribe(res => {
      this.postRef = res
      this.editForm = this.formBuilder.group({
        nombre: [this.postRef.nombre],
        apellido: [this.postRef.apellido],
        residencia: [this.postRef.residencia]
      })
    })
  }

  onSubmit() {
    const id = this.ActivatedRoute.snapshot.paramMap.get('id')
    this.postService.updatePost(this.editForm.value, id)
    this.router.navigate([''])
  }

}
