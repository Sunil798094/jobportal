import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {


  apiUrl : string ='https://freeapi.miniprojectideas.com/api/JobPortal/'
  constructor(private  http: HttpClient) { }
    registerEmployer(obj :any){
      return this.http.post( this.apiUrl + 'AddNewEmployer',obj)
     }

    registerAsJobSeeker(obj :any){
      return this.http.post( this.apiUrl + 'AddNewJobSeeker',obj)
     }
     
    login(obj :any){
      return this.http.post( this.apiUrl + 'login',obj)
     }

    getAllCategory(){
      return this.http.get(this.apiUrl + 'GetAllJobCategory')
     }
}
