import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { CreateNewJobComponent } from './pages/create-new-job/create-new-job.component';
import { JobListingComponent } from './pages/job-listing/job-listing.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MyJobsComponent } from './pages/my-jobs/my-jobs.component';
import { JobsComponent } from './pages/jobs/jobs.component';

const routes: Routes = [
 {path:'', component:HomeComponent},
 {path:'home', component : HomeComponent},
 {path:'login', component : LoginComponent},
 {path:'registration',component: RegistrationComponent},
 {path:'jobs', component: JobsComponent},
 {path: 'job-details/:jobid', component:JobDetailsComponent},
 {path: 'new-job', component:CreateNewJobComponent},
 {path:'job-listing', component:JobListingComponent},
 {path:'my-jobs', component:MyJobsComponent},
 {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
