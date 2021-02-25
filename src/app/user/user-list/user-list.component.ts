import { ViewpostComponent } from './../../viewpost/viewpost.component';
// import { PostComponent } from '../posts/post.component';

import { SocialLoginModule, SocialUser } from 'angularx-social-login';
import { SingleUserComponent } from './../single-user/single-user.component';
import { Observable } from 'rxjs';
import { UserService } from './../../service/user.service';
import { Component, OnInit, Output, EventEmitter, Input, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'angularx-social-login';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostsComponent } from 'src/app/posts/posts.component';
import { RegformComponent } from 'src/app/regform/regform.component';
import { HttpParams } from '@angular/common/http';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
 
  // uname: any
  // contact: any
  // value: any
  // name: Array<any> =['cbrobak0','mbradnocke1','zmorcomb2','bconey3','cmatuskiewicz4	','bdrover5','gbuxey6','jrembrant7','lcurrell8','eohannigan9'];
  // email: Array<any> = ['cbrobak0@amazon.com','mbradnocke1@un.org','zmorcomb2@craigslist.org','bconey3@umn.edu','cmatuskiewicz4@exblog.jp','bdrover5@clickbank.net','gbuxey6@odnoklassniki.ru','jrembrant7@delicious.com','lcurrell8@csmonitor.com','eohannigan9@scribd.com'];
  // con_no : Array<any> = ['+33 517 114 9741','+351 805 514 2945','+30 127 925 1970','+254 965 129 5023','+86 635 738 7603','+46 637 798 9542','+86 549 418 2176','+234 927 394 9252','+7 702 957 3885','+386 990 344 4729'];
  // mail: any;
  // moNo: any;
  // httpClient: any;
  user : any 
  UserService: any;
  name: any;
  data: any
  user2: SocialUser
  username: any
  registration: any;
  userReg: any;
  formGroup: any;
  dialogRef: any;

  //@Output() opToProfile = new EventEmitter<any>();
 
  //public userData = [];
  constructor( public dialog: MatDialog, private _userService : UserService, private router: Router,private authService: AuthService, private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation() && this.router.getCurrentNavigation().extras && this.router.getCurrentNavigation().extras.state) {
       console.log("what is in state data", this.router.getCurrentNavigation().extras.state);
        if (this.router.getCurrentNavigation().extras.state.view) {
          console.log("in second if, data is", this.router.getCurrentNavigation().extras.state.view);
           this.userReg = this.router.getCurrentNavigation().extras.state.view;
          //  this.user.push( this.router.getCurrentNavigation().extras.state.view);
          
          //this.plannerData = this.router.getCurrentNavigation().extras.state.data
                  }
                }
                });

               
      // console.log(this.router.getCurrentNavigation().extras.state.view); 
    
  }
     ngOnInit() {
       this.authService.authState.subscribe((user2) => {
        this.user2 = user2;
        this.username = this.user2.name;
     //   console.log(user.name);
      });
        //  this.user = this._userService.getData();
        // this.user.push( this.userReg);
 
        this._userService.getData().subscribe((data) => {
        // console.log(data);
        this.user = data;
        console.log("get data----",this.user);
        
        })
              
      }


    viewProfile(data: any){
    this.data =  data;
  //  this.router.navigate( ['profile'], { queryParams: {data}});
      
    this.router.navigateByUrl('/profile', { state: { view: this.data } });

    }

  
    openDialog(data:any) {
      
      console.log("openDialog()--->",data);
      let obj ={
       data:data,
       isupdated:true
    
     }
     this.dialog.open(RegformComponent,{data: obj});

    }

    
      
    
   
    
    //  this.dialogRef.afterClosed().subscribe(result => {  
                    
    // }); 
    //  this.getData();
    //   this._userService.updateUser(data)
    //    .subscribe(data => {
      
    //     console.log("Put()--->",data);
    // } );
     
        //  dialogRef.afterClosed().subscribe(result => {
        // console.log(`Dialog result: ${result}`);
     
      // });
      
    

       deleteProfile(id:any,index){
              console.log("deleted data-->",id,index)
              this._userService.deleteUser(id).subscribe(data => {
                console.log("deleted data-->",data)
              
              //   // this.getData()
          }
          ),(err) => {
            console.error("error-->",err)
          }
          this.user.splice(index,1);
        }
    
        addPost(){
        console.log("opne dialoage of add new post()");
        
        this.dialog.open(PostsComponent);
        }


        viewPost(){
          console.log("view post");
          // this.dialog.open(ViewpostComponent);
          this.router.navigateByUrl('/viewpost');
        }

    // profileRegistration(data:any){
    //   this.data =  data;
    //   this.router.navigateByUrl('/profile', { state: { view: this.data } });
    // }
  


}


