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
 
  user: SocialUser;
  email: any
  password:any
  hide: boolean = true;

  constructor(private authService: AuthService, private router: Router,private fb: FormBuilder) { }

  ngOnInit() {
      this.authService.authState.subscribe((user) => {
      this.user = user;
      //console.log(user);
    });
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });


  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    else{
     
    console.log(this.loginForm.value);
    this.router.navigate(['./reg']);
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
