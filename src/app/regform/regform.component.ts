  import { logging } from 'protractor';

import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

 import { Component, Inject, OnInit,Input } from '@angular/core';
 
 import { FormBuilder, FormGroup, FormControl, Validators,  NgForm, FormArray } from '@angular/forms';
 import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
 import { Router } from '@angular/router';
 
 import { Observable } from 'rxjs';
 import { UserService } from '../service/user.service';
 @Pipe({
  name: 'safeHtml'
})
 @Component({
   selector: 'app-regform',
   templateUrl: './regform.component.html',
   styleUrls: ['./regform.component.css']
 })
 export class RegformComponent implements OnInit {
   fileData: File = null;
   // hobby:any = [];
   user: any;
   hobbies =  [ 
      {"id": 1, "value": "Travelling"},
      {"id": 2, "value": "Swimming"},
      {"id": 3, "value": "Cooking"},
      {"id": 4, "value": "Singing"},
      {"id": 5, "value": "Reading"}
  ]
   hide: boolean = true;
   fname: FormControl
   lname: FormControl
   hobby: FormArray[]
   gender: FormControl
   email: FormControl
   password: FormControl
   mono: FormControl
   formGroup: FormGroup;
   photo: any;
   post: any;
   selectedHobby: any[];
   titleAlert: string = 'This field is required';
 
       constructor(private sanitizer: DomSanitizer,private router: Router,private formBuilder:FormBuilder, private _userService : UserService, public dialogRef: MatDialogRef<RegformComponent>, @Inject(MAT_DIALOG_DATA) private data) { }
    
       ngOnInit(): void {

          this.formGroup = this.formBuilder.group({
           fname: ['', Validators.required],
           lname:['',Validators.required ],
           email:['',Validators.required],
           password:['',Validators.required],
           mono:['',Validators.required],
           hobby: ['',Validators.required] ,
           gender: ['',Validators.required],
           photo: ['',Validators.required]
            
         });
       }
 
       getErrorEmail() {
         return this.formGroup.get('email').hasError('required') ? 'Field is required' :
           this.formGroup.get('email').hasError('pattern') ? 'Not a valid emailaddress' :
             this.formGroup.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
       }
       getErrorContact() {
         return this.formGroup.get('mono').hasError('required') ? 'Field is required' :
         this.formGroup.get('mono').hasError('pattern') ? 'Please, Enter 10 digit Mobile Number' : 
         this.formGroup.get('mono').hasError('alreadyInUse') ? 'This Mobile number is already in use' : '';
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
       formData.append("mono", this.formGroup.get('mono').value);
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