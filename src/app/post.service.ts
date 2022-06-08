import { Injectable } from '@angular/core';

//modulos firestore service
import { AngularFirestore } from '@angular/fire/compat/firestore';

//importamos nuestro modulos 
import { Post } from './post.model';
import { ApiService } from './shared/api.service';
@Injectable({
  providedIn: 'root'
})


export class PostService extends ApiService<Post> {
  public root(): string {

    return 'posts';
  }

  // constructor(private angularFirestore: AngularFirestore) { }

  // metodos 
            
  getPosts() {
    /*    return this.angularFirestore
         .collection("posts")
         .snapshotChanges() */
  }

  getPostsById(id) {
    /*  return this.angularFirestore
       .collection("posts")
       .doc(id)
       .valueChanges() */
  }

  createPost(post: Post) {
    /*   return new Promise<any>((resolve, reject) => {
        this.angularFirestore
          .collection("posts")
          .add(post)
          .then((response) => {
            console.log(response)
  
          },
            (error) => {
              reject(error)
            })
      }) */
  }

  updatePost(post: Post, id) {
    /*  return this.angularFirestore
       .collection("posts")
       .doc(id)
       .update({
         nombre: post.nombre,
         apellido: post.apellido,
         residencia: post.residencia
       }); */

  }

  deletePost(post: Post) {
    /*    return this.angularFirestore
         .collection("posts")
         .doc(post.id)
         .delete()
     } */
  }
}
