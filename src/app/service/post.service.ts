import { UserService } from 'src/app/service/user.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
   user_id: any;
  constructor(private http: HttpClient) { }
  
  
  addPost(body:any):Observable<any>{
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let val = JSON.parse(localStorage.getItem('token'));
    // this.user_id = val.user.data._id;
    let data = {
      'val': val.user.data._id,
      'body' : body
    }
    console.log("--data in post service--",data)
    return this.http.post('http://localhost:3001/user/post',data,{headers: headers});
  }


    public getPost(id:any):Observable<any>{
    // let val = JSON.parse(localStorage.getItem('token'));
    //   id = val.user.data._id;
      
    return this.http.get('http://localhost:3001/user/viewpost/'+id,{observe:'body'});
    
   }



   editPost(id:any,data:any):Observable<any>{
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3001/user/editpost/'+id,data,{headers: headers});

  }

  deletePost(id:any){
    console.log("deleteUser(id:any)",id)
    return this.http.delete('http://localhost:3001/user/deletePost/'+id);
  }

  // login(body:any):Observable<any>{
  //   return this.http.post('http://localhost:3001/', body,{
  //     observe:'body',
  //     params: new HttpParams().append('token', localStorage.getItem('token'))
  //   });
  // }

}
