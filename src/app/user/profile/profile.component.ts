
import { AppModule } from './../../app.module';
import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  //   profile: Array<any> =['https://robohash.org/quiasimiliquelaborum.jpg',
  // 'https://robohash.org/quiaexdolorem.jpg',
  // 'https://robohash.org/uttotamea.jpg',
  // 'https://robohash.org/culpalaboreet.jpg',
  // 'https://robohash.org/voluptasmollitiaautem.jpg',
  // 'https://robohash.org/eumrationequia.jpg?',
  // 'https://robohash.org/nonsolutaconsequatur.jpg?',
  // 'https://robohash.org/enimatsit.jpg?',
  // 'https://robohash.org/etporroveritatis.jpg?',
  // 'https://robohash.org/illumunderepudiandae.jpg?'
  // ];
  //randomItem:any
  user:any
  
  constructor(private _userService : UserService, private route: Router, private router: ActivatedRoute) {
    this.router.queryParams.subscribe(params => {
      if (this.route.getCurrentNavigation() && this.route.getCurrentNavigation().extras && this.route.getCurrentNavigation().extras.state) {
     //   console.log("what is in state data", this.route.getCurrentNavigation().extras.state);
        if (this.route.getCurrentNavigation().extras.state.view) {
       //   console.log("in second if, data is", this.route.getCurrentNavigation().extras.state.view);
          this.user = this.route.getCurrentNavigation().extras.state.view;
       ;
          // console.log( this.user.picture);
        //  this.displayPlanner = true
          //this.plannerData = this.router.getCurrentNavigation().extras.state.data
        }
      }
    });
   }

  ngOnInit(): void {
   
    }
    // changeProfile(){
    //  this.randomItem = Math.floor(Math.random()+1);
    //  console.log(this.randomItem);
    //  this.profile=this.profile[this.randomItem];
     
    // }

}
