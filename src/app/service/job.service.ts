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
      return this.http.post( this.apiUrl + 'Login',obj)
     }

    getAllCategory(){
      return this.http.get(this.apiUrl + 'GetAllJobCategory')
     }

    createNewJob(obj:any){
      return this.http.post(this.apiUrl + 'CreateNewJobListing', obj)
     }

     GetActiveJobs(){
      return this.http.get(this.apiUrl + 'GetActiveJobListing')
     }
     GetJobListingById(jobid: number){
      return this.http.get(this.apiUrl + 'GetJobListingById?jobId='+jobid)
     }
    
     SendJobApplication(obj:any){
      return this.http.post(this.apiUrl + 'SendJobApplication', obj)
     }

     GetJobsByEmployerId(employerid: number){
      return this.http.get(this.apiUrl + 'GetJobsByEmployerId?employerId='+ employerid)
     }

   
    
}
