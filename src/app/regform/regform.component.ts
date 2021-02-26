import { logging } from 'protractor';


import { Component, Inject, OnInit,Input } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators,  NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css']
})
export class RegformComponent implements OnInit {
  fileData: File = null;
  // hobby:any = [];
  user: any;
  hide: boolean = true;
  fname: FormControl
  lname: FormControl
  hobby: FormControl[];
  gender: FormControl
  email: FormControl
  password: FormControl
  mono: FormControl
  formGroup: FormGroup;
  photo: any;
  post: any;


      constructor(private router: Router,private formBuilder:FormBuilder, private _userService : UserService, public dialogRef: MatDialogRef<RegformComponent>, @Inject(MAT_DIALOG_DATA) private data) { }
 
  
      ngOnInit(): void {
          
         this.formGroup = this.formBuilder.group({
          fname: [''],
          lname:[''],
          email:[''],
          password:[''],
          mono:[''],
          hobby: [''],
          gender: [''],
          photo: [null]

        });
      }
 
      uploadImage(event:any) {
        console.log("upload file", event, event.target.files)
        if (event.target.files.length > 0) {
          const file = event.target.files[0];
          
          this.photo = file;
        }
        console.log('picture value', this.photo)
        console.log('form value', this.formGroup.value)
      }
  
       onSubmit() {

      const formData = new FormData();
      
      console.log("form submit value is here",this.formGroup.value);
      formData.append("fname", this.formGroup.get('fname').value);
      formData.append("lname", this.formGroup.get('lname').value);
      formData.append("email", this.formGroup.get('email').value);  
      formData.append("password", this.formGroup.get('password').value);
      formData.append("mono", this.formGroup.get('fname').value);
      formData.append("gender", this.formGroup.get('gender').value);
      formData.append("hobby", this.formGroup.get('hobby').value);
      formData.append("photo", this.formGroup.get('photo').value);    
      console.log('user add successfully',formData);
        
      if(this.data.isupdated == true){
        this._userService.updateUser(this.data.data._id,this.formGroup.value)
        .subscribe(data => {
        console.log("put--->",data);
        } );
        this.dialogRef.close(this.data);
      }
      else{
      this._userService.addUser(formData)
        .subscribe(data => {
          console.log("post--->",data); 
            this.router.navigateByUrl('/dashboard', { state: { view: data} });
          // this.post = post;
      } );
    
      
    }
   
  
    }
}
 

