import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-new-job',
  templateUrl: './create-new-job.component.html',
  styleUrls: ['./create-new-job.component.css']
})
export class CreateNewJobComponent implements OnInit{

jobObj :any = {
  "JobId": 0,
  "JobName": "",
  "CreatedDate": new Date(),
  "EmployerId": 0,
  "CategoryId": 0,
  "Experience": "",
  "Package": "",
  "Location": "",
  "JobDescription": "",
  "IsActive": true
}

ngOnInit(): void {
  
}

getJobCategories(){

}

jobPost(){

}

}
