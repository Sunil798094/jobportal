import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent {
   
  activeJobId: number = 0;
  jobObj: any;
  userInfo:any;
  isLoggedIn :boolean = false;
  jobApplicationObj ={

  "ApplicationId": 0,
  "JobId": 0,
  "JobSeekerId": 0,
  "AppliedDate": "2024-01-06T19:26:30.987Z",
  "ApplcationStatus": "New"
  }
  constructor(private activeRoute: ActivatedRoute, private jobSrc:JobService){
   

    const userData = localStorage.getItem('jobLoginUser');
  if(userData == null){
    this.isLoggedIn = false;
  } else {
    this.isLoggedIn = true;
    this.userInfo = JSON.parse(userData);
    this.jobApplicationObj.JobSeekerId = this.userInfo.JobSeekerId
  }
   
   
    this.activeRoute.params.subscribe((res:any)=>{
      debugger;
      this.activeJobId =res.JobId ;
      this.getJobDetail();
      this.jobApplicationObj.JobId = this.activeJobId;
    })
  }

  getJobDetail(){
    this.jobSrc.GetJobListingById(this.activeJobId).subscribe((res:any)=>{
      this.jobObj = res.data;
    }) 
  }
  apply(){
    this.jobSrc.SendJobApplication(this.jobApplicationObj).subscribe((res:any)=>{
      if(res.result){
        alert("You have Succesfully applied to job")
      } else {
        alert(res.message)
      }
    })
  }
}
