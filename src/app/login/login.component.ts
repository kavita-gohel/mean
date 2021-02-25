import { UserService } from 'src/app/service/user.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
 
  user: any;
  email: any
  password:any
  hide: boolean = true;
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router,private fb: FormBuilder, private _userService : UserService) {
    // this.loginForm = new FormGroup({
    //   email: new FormControl(null, Validators.required),
    //   password: new FormControl(null, Validators.required)
    // });
   }

  ngOnInit() {
    //   this.authService.authState.subscribe((user) => {
    //   this.user = user;
    //   //console.log(user);
    // });
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });

    this._userService.getData().subscribe((data) => {
      // console.log(data);
      this.user = data;
      // console.log("get data from login component----",this.user);
    })
  }

  // loginForm: FormGroup = this.fb.group({
  //   email: ['', [Validators.required, Validators.email]],
  //   password: ['', [Validators.required, Validators.minLength(6)]]
  // });



  onLogin() {
    // console.log(this.loginForm.value);
    // console.log("get data from login component----",this.user);
    if (this.loginForm.valid) {
      this._userService.login(this.loginForm.value)
         .subscribe(
          data => {
            // delete data.password;
            delete data['password'];
            console.log("Token Successfully Generated....",data);
            localStorage.setItem('token',JSON.stringify(data));
            this.router.navigate(['/dashboard']);
          },
          error => {  console.log("Invalid Input...",error);}
        );
    }
}
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => console.log(x));
    // this.router.navigate(['./dashboard']);
    this.router.navigate(['./reg']);
  }
  // signInWithGmail(): void {
  //   console.log("gmail mathod");
  // }
  // doSubmit(){

  // }
  // signInWithFB():void{
  //   this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(x => console.log(x));
  // }

}
