import { PostService } from './../service/post.service';

import { Component, OnInit,Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  formGroup: FormGroup;
  post: any;
  
  constructor(private postService: PostService ,private router: Router, public dialogRef: MatDialogRef<PostsComponent>,
    @Inject(MAT_DIALOG_DATA) private data) {
          
     }  
  
  ngOnInit() {
    // const value = JSON.parse(localStorage.getItem('token'));
    // console.log("local storage id",value.user.data._id); 
    if(this.data && this.data.data){
    this.createForm(this.data.data);
    }
    else{
      this.createForm()
    }
  }

 
  createForm(data?) {
    this.formGroup = new FormGroup({
    title: new FormControl((data && data.title)? data.title : '', Validators.required),
    type: new FormControl((data && data.type)? data.type : '', Validators.required),
    content: new FormControl((data && data.content)? data.content : '', Validators.required)
    })
  }

  onSubmit(post) {
    // console.log(this.data.isupdated);
    
    if(this.data && this.data.data){
      console.log("this.data.data._id",this.data.data._id);
      
      this.postService.editPost(this.data.data._id,this.formGroup.value)
           .subscribe(data => {
      console.log("put--->",data);
      } );
      this.dialogRef.close(this.data);
             this.post = post;
     
    }
    else{
    this.postService.addPost(this.formGroup.value)
          .subscribe(data => {
        console.log("post--->",data);
       this.post = post;
      } );
      // this.dialogRef.close(this.data);
            //  this.post = post;
    }

    
  }
}
