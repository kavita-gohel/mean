
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';


  @Injectable({
    providedIn: 'root'
  })
  

export class UserService {

   
  constructor(private http: HttpClient) { }

    public getData():Observable<any>{
      
     return this.http.get('http://localhost:3001/user');
    }

    addUser(newUser:any){
   
      var headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      return this.http.post('http://localhost:3001/user',newUser,{headers: headers});
    }

    
    deleteUser(id:any){
      console.log("deleteUser(id:any)",id)
      return this.http.delete('http://localhost:3001/user/'+id);
    }
    
    updateUser(id:any,data:any):Observable<any>{
   
      var headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      return this.http.put('http://localhost:3001/user/'+id,data,{headers: headers});
     
    }
    
    // updateUser(data:any){
   
    //   var headers = new HttpHeaders();
    //   headers.append('Content-Type', 'application/json');
    //   return this.http.put('http://localhost:3001/user/',data,{headers: headers});
    // }

    // public getData() {
    //   return [
    //     {id: 1,fname:'test1',email:'abc@gmail.com',mono:'+91 7787871111',hobby:['xyz','abc','pqr'],dob:'01/23/2002',picture:'https://robohash.org/quiasimiliquelaborum.jpg'},
    //     {id: 2,fname:'test2',email:'abc@gmail.com',mono:'+91 7787871111',hobby:['xyz','abc','pqr'],dob:'01/23/2002',picture:'https://robohash.org/quiasimiliquelaborum.jpg'},
    //     {id: 3,fname:'test3',email:'abc@gmail.com',mono:'+91 7787871111',hobby:['xyz','abc','pqr'],dob:'01/23/2002',picture:'https://robohash.org/quiaexdolorem.jpg'},
    //     {id: 4,fname:'test4',email:'abc@gmail.com',mono:'+91 7787871111',hobby:['xyz','abc','pqr'],dob:'01/23/2002',picture:'https://robohash.org/enimatsit.jpg?'},
    //     {id: 5,fname:'test5',email:'abc@gmail.com',mono:'+91 7787871111',hobby:['xyz','abc','pqr'],dob:'01/23/2002',picture:'https://robohash.org/quiaexdolorem.jpg'},
    //     {id: 6,fname:'test6',email:'abc@gmail.com',mono:'+91 7787871111',hobby:['xyz','abc','pqr'],dob:'01/23/2002',picture:'https://robohash.org/quiasimiliquelaborum.jpg'},
    //     {id: 7,fname:'test7',email:'abc@gmail.com',mono:'+91 7787871111',hobby:['xyz','abc','pqr'],dob:'01/23/2002',picture:'https://robohash.org/enimatsit.jpg?'},
    //     {id: 8,fname:'test8',email:'abc@gmail.com',mono:'+91 7787871111',hobby:['xyz','abc','pqr'],dob:'01/23/2002',picture:'https://robohash.org/quiaexdolorem.jpg'},
    //     {id: 9,fname:'test9Name',email:'test9@gmail.com',mono:'+91 7787872222',hobby:['test9','test9abc','test9pqr'],dob:'10/10/2010',picture:'https://robohash.org/enimatsit.jpg?'},
    //     {id: 10,fname:'test10',email:'abc@gmail.com',mono:'+91 7787871111',hobby:['xyz','abc','pqr'],dob:'01/23/2002',picture:'https://robohash.org/enimatsit.jpg?'}
  
    //   ];
    //   }
    }      
        
      
  
