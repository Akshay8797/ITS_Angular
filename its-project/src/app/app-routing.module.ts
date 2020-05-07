import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AdminPageComponent } from './components/adminPage/adminPage.component';
import { TechpanelComponent } from './components/technicalpanel/technicalpanel.component';
import { TechInterviewComponent } from './components/techinterviewform/techinterviewform.component';
import { HomeComponent } from './components/home/home.component';
import { ScheduleHrinterviewComponent } from './components/schedule-hrinterview/schedule-hrinterview.component'
import { ScheduleHrinterviewFormComponent } from './components/schedule-hrinterview-form/schedule-hrinterview-form.component'
import { GetRatingsComponent } from './components/get-ratings/get-ratings.component'
import { RegisterComponent } from './components/registration/registration.component'
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
  {path:'adminpage',component:AdminPageComponent},
  {path:'adminpage/table', component: TechpanelComponent},
  {path:'adminpage/table/form/:candidateId', component:TechInterviewComponent},
  {path:'adminpage/tableHr', component: ScheduleHrinterviewComponent},
  {path:'adminpage/tableHr/form/:interviewId', component: ScheduleHrinterviewFormComponent},
  {path:'adminpage/ratings', component: GetRatingsComponent},
  {path:'adminpage/register', component: RegisterComponent},
  {path:'adminpage/search', component: SearchComponent },
  {path:'homepage',component:HomeComponent},
  {path:'', redirectTo:'/homepage', pathMatch: 'full'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
