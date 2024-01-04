import { Component } from '@angular/core';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  
employerobj :any = {
  "EmployerId": 0,
  "CompanyName": "",
  "EmailId": "",
  "MobileNo": "",
  "PhoneNo": "",
  "CompanyAddress": "",
  "City": "",
  "State": "",
  "PinCode": "",
  "LogoURL": "",
  "GstNo": ""
}

jobSeekerObj :any = {
  "JobSeekerId": 0,
  "FullName": "",
  "EmailId": "",
  "MobileNo": "",
  "ExperienceStatus": "",
  "ResumeUrl": "",
}

isJobSeeker :boolean =true;
constructor(private job:JobService){}
     register(){
        this.job.registerEmployer(this.employerobj).subscribe((res:any)=>{
          if(res.result){
            alert(res.message)
          } else {
            alert(res.message)
          }
        })

     }

     registerAsJobSeeker(){
      this.job.registerAsJobSeeker(this.jobSeekerObj).subscribe((res:any)=>{
        if(res.result){
          alert(res.message)
        } else {
          alert(res.message)
        }
      })
     }

}
