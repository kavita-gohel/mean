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
   formData = new FormData();

  
  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';
  selectedHobby: any[];
  val:string = '';
  fileToUpload: File = null;
  emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  hobby:any = [];
  user: any;
  hide: boolean = true
  // hobby ['Travelling','Swmming','Cooking','Singing','Reading']
  constructor(private router: Router, private _userService : UserService, public dialogRef: MatDialogRef<RegformComponent>,
    @Inject(MAT_DIALOG_DATA) private data) { }
  
  ngOnInit() {
    //  console.log("data...",this.data);
    
       this.createForm(this.data.data);
      
    // this.createForm(); 
    this.hobby = ['Travelling','Swimming','Cooking','Singing','Reading'];
    //   {'Travelling'},
    //   {id: 2, viewValue: "Swimming"},
    //   {id: 3, viewValue: "Cooking"},
    //   {id: 4, viewValue: "Singing"},
    //   {id: 5, viewValue: "Reading"}
    // ]
  }
   createForm(data?) {
    this.formGroup = new FormGroup({
      
      email: new FormControl((data && data.email)? data.email : '', [Validators.required, Validators.email]),
      fname: new FormControl((data && data.fname)? data.fname : '', Validators.required),
      lname: new FormControl((data && data.lname)? data.lname : '', Validators.required),
      gender: new FormControl((data && data.gender)? data.gender : '', Validators.required),
      mono: new FormControl((data && data.mono)? data.mono : '', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      hobby: new FormControl((data && data.hobby)? data.hobby : '', Validators.required),
      photo: new FormControl((data && data.photo)? data.photo : '',Validators.required),
      password: new FormControl ((data && data.password)? data.password : '',[Validators.required, Validators.minLength(6)])
      // photo: new FormData(photo) 
      // this.formData.append('photo',photo);
    // this = this.formBuilder.group({
    //   'email': [null, [Validators.required, Validators.pattern(emailregex)], this.checkInUseEmail],
    //   'fname': [null, Validators.required],
    //   'lname': [null, Validators.required],
    //   'gender': [null, Validators.required],
    //   'mono': [null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    //   'hobby': ['',Validators.required]
    });
   
  }
  
  // createForm() {
  //   this.formGroup = new FormGroup({
      
  //     email: new FormControl(null, [Validators.required, Validators.email]),
  //     fname: new FormControl(null, Validators.required),
  //     lname: new FormControl(null, Validators.required),
  //     gender: new FormControl(null, Validators.required),
  //     mono: new FormControl(null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
  //     hobby: new FormControl(null, Validators.required),
  //     picture: new FormControl(null,Validators.required)
  //   // this.formGroup = this.formBuilder.group({
  //   //   'email': [null, [Validators.required, Validators.pattern(emailregex)], this.checkInUseEmail],
  //   //   'fname': [null, Validators.required],
  //   //   'lname': [null, Validators.required],
  //   //   'gender': [null, Validators.required],
  //   //   'mono': [null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
  //   //   'hobby': ['',Validators.required]
  //   });
  // }
  get hobbies() {
   
    return this.formGroup.get('hobbies') as FormControl
  }
 
  get gender() {
   
    return this.formGroup.get('gender') as FormControl
  }

  get fname() {
    return this.formGroup.get('fname') as FormControl
  }
  get lname() {
    return this.formGroup.get('lname') as FormControl
  }
  get mono() {
    return this.formGroup.get('mono') as FormControl
  }
  get email() {
    return this.formGroup.get('email') as FormControl
  }
  get picture() {
    return this.formGroup.get('photo') as FormControl
  }
  get password() {
    return this.formGroup.get('password') as FormControl
  }
 
  // checkInUseEmail(control) {
  //   // mimic http database access
  //   let db = ['tony@gmail.com'];
  //   return new Observable(observer => {
  //     setTimeout(() => {
  //       let result = (db.indexOf(control.value) !== -1) ? { 'alreadyInUse': true } : null;
  //       observer.next(result);
  //       observer.complete();
  //     }, 1000)
  //   })
  // }
//   handleFileInput(files: FileList) {
//     this.fileToUpload = files.item(0);
//     console.log("image",this.fileToUpload);
// }
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
  
  onSubmit(post) {
    // console.log("this.data.isuptedad.....",this.data.isupdated);
    if(this.data.isupdated == true){
      this._userService.updateUser(this.data.data._id,this.formGroup.value)
           .subscribe(data => {
      console.log("put--->",data);
      } );
      this.dialogRef.close(this.data);
            //  this.post = post;
     
     }
    else{
      // this.formData.append('photo',this.formGroup.value.photo);
      this._userService.addUser(this.formGroup.value)
        .subscribe(data => {
        
          console.log("post--->",data);
          this.post = post;
      } );

      
    }
    // console.log(this.formGroup.value);
    // this.router.navigate(['./dashboard']);
    
    this.router.navigateByUrl('/dashboard', { state: { view: this.formGroup.value} });
 
  }


  // onSubmit() {
  //   // console.log("put--->",this.formGroup.value);
  //   this._userService.updateUser(this.data._id,this.formGroup.value)
  //     .subscribe(data => {
      
  //       console.log("put--->",data);

  //   } );
 
  //   console.log(this.formGroup.value);
  //   // this.router.navigate(['./dashboard']);
  //   this.router.navigateByUrl('/dashboard', { state: { view: this.formGroup.value} });
 
  // }
  
  
 }
 


