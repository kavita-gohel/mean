import { UserService } from './../../service/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'hammerjs';
@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  // value: any;
  // hobby1: Array<any> =['Swimming','Programming','Public Speaking','Beekeeping','Graphic Design','Tattooing','Coding','Pet Sitting','Buying And Selling','Engravings'];
  // hobby2: Array<any> =['Teaching ','Tutoring Music','Screen Printing','Financial Planning','Writing Music','Pet Sitting','Programming','Coding','Beekeeping','Swimming'];
  // hobby3: Array<any> =['Photography','Swimming','Buying','Coding','Programming','Financial Planning','Graphic Design','Teaching ','Public Speaking','Tattooing'];
  // name: Array<any> =['cbrobak0','mbradnocke1','zmorcomb2','bconey3','cmatuskiewicz4	','bdrover5','gbuxey6','jrembrant7','lcurrell8','eohannigan9'];
  // email: Array<any> = ['cbrobak0@amazon.com','mbradnocke1@un.org','zmorcomb2@craigslist.org','bconey3@umn.edu','cmatuskiewicz4@exblog.jp','bdrover5@clickbank.net','gbuxey6@odnoklassniki.ru','jrembrant7@delicious.com','lcurrell8@csmonitor.com','eohannigan9@scribd.com'];
  // con_no : Array<any> = ['+33 517 114 9741','+351 805 514 2945','+30 127 925 1970','+254 965 129 5023','+86 635 738 7603','+46 637 798 9542','+86 549 418 2176','+234 927 394 9252','+7 702 957 3885','+386 990 344 4729'];
  // fname: Array<any> = ['Curry','Maribeth','Zelda','Buiron','Conrado','Benny','Gelya','Jacky','Liesa','Elka'];
  // lname: Array<any> = ['Brobak','Bradnocke','Morcomb','Coney','Matuskiewicz','Drover','Buxey','Rembrant	','Currell','OHannigan'];
  // gen: Array<any> = ['male','male','female','male','male','female','female','male','male','female'];
  // dob: Array<any> = ['7/9/2000','4/24/2002','9/28/2012','2/6/2020	','12/23/2003','12/25/2001','1/29/2011','3/8/2017','2/3/2007','7/27/2014'];
  user : any
  
  data: any;
  hobby: any = [];
  photo: any;
  constructor(private _userService : UserService, private route: Router, private router: ActivatedRoute) { 
    // this.router.queryParams.subscribe(params => {
    
    // //  this.user = params[user];
    // console.log("test"+params);

    this.router.queryParams.subscribe(params => {
      if (this.route.getCurrentNavigation() && this.route.getCurrentNavigation().extras && this.route.getCurrentNavigation().extras.state) {
       console.log("what is in state data", this.route.getCurrentNavigation().extras.state);
        if (this.route.getCurrentNavigation().extras.state.view) {
          console.log("in second if, data is", this.route.getCurrentNavigation().extras.state.view);
          this.user = this.route.getCurrentNavigation().extras.state.view;
          // this.photo=this.user.photo;
          this.hobby = this.user.hobby;
          // console.log(this.hobby)
           console.log("hobbylist in single profile",this.hobby);
          // console.log("profile rul=======>",this.profile)
          //  this.displayPlanner = true
          //this.plannerData = this.router.getCurrentNavigation().extras.state.data
        }
      }
    });
  }



  ngOnInit(): void {
    // this._userService.getData().subscribe((data) => {
    //   // console.log(data);
    //   this.user = data;
    //   console.log("get data----",this.user);
      
    //   })
  }
  
  addNote(user: any){
    console.log(user.fname);
    this.route.navigate(['/todo'],  { queryParams: { user: user.fname} });
  }
    // this.router.queryParams.subscribe(
    //   (      params: { [x: string]: any; }) => {
    //    // console.log('Got the JWT as: ', params['jwt']);
    //     this.user =  params['user'];
    //  
    //   }
    // )
    // this.user = this._userService.getData();
   // console.log(this.user);
  

    // getData(data: any) {
    //   console.log(
    //     "this is the child data displaying in parent component: ",
    //     data
    //   );
    // }
  //  getVal(event:any){
  //       console.log("hello",event);
  //        if(event){
  //       //   this.ChildCurrentVal = "Value received from child : " + event;
  //        }
  //     }
}
