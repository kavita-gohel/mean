import { filter } from 'rxjs/operators';
import { PostService } from './../service/post.service';
import { Component, OnInit,Inject, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatPaginator, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EditpostComponent } from '../editpost/editpost.component';
import { PostsComponent } from '../posts/posts.component';
import {MatPaginatorModule} from '@angular/material/paginator';
@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css'],
  animations: [
      trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ViewpostComponent implements OnInit{

   
  columnsToDisplay = ['title','edit','delete'];
  post: any;
  dataSource:any
  userReg: any;
  val: any;
  filterValues = {title: ''};
  paginator = MatPaginator;
  titleFilter = new FormControl('');
  private readonly newProperty = 'paginator';
  // @ViewChild('paginator') paginator: MatPaginator;
  // @ViewChild(MatPaginator, { static: true }) set matPaginator(mp: MatPaginator) {
  //   this.paginator = mp;
 
  // }
  constructor( public dialog: MatDialog, private postService : PostService, private router: Router, private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation() && this.router.getCurrentNavigation().extras && this.router.getCurrentNavigation().extras.state) {
       console.log("what is in state data", this.router.getCurrentNavigation().extras.state);
        if (this.router.getCurrentNavigation().extras.state.view) {
          console.log("in second if, data is", this.router.getCurrentNavigation().extras.state.view);
           this.dataSource = this.router.getCurrentNavigation().extras.state.view;
          //  this.user.push( this.router.getCurrentNavigation().extras.state.view);
          
            
          //this.plannerData = this.router.getCurrentNavigation().extras.state.data
                  }
                }
                });
                // console.log(this.dataSource);
                
          // console.log(this.router.getCurrentNavigation().extras.state.view); 
          // this.dataSource.title = this.dataSource;
          
          // this.dataSource.filterPredicate = this.createFilter();
        }
        

        // createFilter(): (data: any, filter: string) => boolean {
        //   let filterFunction = function(data, filter): boolean {
        //     let searchTerms = JSON.parse(filter);
        //     console.log("createfilter function");
        //     return data.name.toLowerCase().indexOf(searchTerms.title) !== -1
           
        //   }
        //   return filterFunction;
        // }

       
 
      ngOnInit() {
          let val = JSON.parse(localStorage.getItem('token'));
          const id = val.user.data._id;
          console.log("id....",id);
          
         this.postService.getPost(id).subscribe((data) => {
         console.log("get post data----",data);
         this.dataSource = data
         this.dataSource.paginator = this.paginator;
         })
       
        }

       applyFilter(event:any){
        this.dataSource.filter((data)=>{
          
        })
      }

         editPost(data:any){
           console.log("edit post---->",data);
           let obj ={
            data:data,
            isupdated:true
          }
          this.dialog.open(PostsComponent,{data: obj});
        }

        deletePost(id:any,index){
          console.log("deleted data-->",id)
          this.postService.deletePost(id).subscribe(data => {
          console.log("deleted data response-->",data)
           //   this.getData()
      }
      ),(err) => {
        console.error("error-->",err)
      }
      console.log(this.dataSource);
      
      this.dataSource.splice(index,1);
    }





} 



