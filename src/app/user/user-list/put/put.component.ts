import { UserService } from './../../../service/user.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.css']
})
export class PutComponent implements OnInit {

  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';
  selectedHobby: any[];
  formData = new FormData();
  fileToUpload: File = null;
  emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  hobby:any = [];
  user: any;
  val : ''
  // hobby ['Travelling','Swmming','Cooking','Singing','Reading']
  constructor(private router: Router, private _userService : UserService, public dialogRef: MatDialogRef<PutComponent>,
    @Inject(MAT_DIALOG_DATA) private data) { }

  ngOnInit() {
   
    console.log("data...",this.data);
    this.createForm(this.data);
    this.hobby = ['Travelling','Swimming','Cooking','Singing','Reading'];
    //   {'Travelling'},
    //   {id: 2, viewValue: "Swimming"},
    //   {id: 3, viewValue: "Cooking"},
    //   {id: 4, viewValue: "Singing"},
    //   {id: 5, viewValue: "Reading"}
    // ]
    // fName=this.data.
  }
  
  createForm(data) {
    // this.user.formGroup = this.formData;
    this.formGroup = new FormGroup({
      
      email: new FormControl(data.email, [Validators.required, Validators.email]),
      fname: new FormControl(data.fname, Validators.required),
      lname: new FormControl(data.lname, Validators.required),
      gender: new FormControl(data.gender, Validators.required),
      mono: new FormControl(data.mono, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      // hobby: new FormControl(data.hobbies, Validators.required),
      picture: new FormControl(data.picture,Validators.required)
    // this.formGroup = this.formBuilder.group({
    //   'email': [null, [Validators.required, Validators.pattern(emailregex)], this.checkInUseEmail],
    //   'fname': [null, Validators.required],
    //   'lname': [null, Validators.required],
    //   'gender': [null, Validators.required],
    //   'mono': [null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    //   'hobby': ['',Validators.required]
    });
  }
  get hobbies() {
   
    return this.formGroup.get('hobby') as FormControl
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
    return this.formGroup.get('picture') as FormControl
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
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log("image",this.fileToUpload);
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
  
  onSubmit() {
    // console.log("put--->",this.formGroup.value);
    this._userService.updateUser(this.data._id,this.formGroup.value)
      .subscribe(data => {
      
        console.log("put--->",data);

    } );
 
    console.log(this.formGroup.value);
    // this.router.navigate(['./dashboard']);
    this.router.navigateByUrl('/dashboard', { state: { view: this.formGroup.value} });
 
  }
  
 }
