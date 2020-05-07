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
import { UserComponent } from './components/login_new/user.component';
import { TechPanelHomePageComponent } from './components/tech-panel-home-page/tech-panel-home-page.component';
import { TechPanelRatingComponent } from './components/techPanelComponent/techPanelRating.component';
import { TechPaneInterviewComponent } from './components/techPanelComponent/techPanelInterview.component';
import { TechPanelResultComponent } from './components/techPanelComponent/techPanelResult.component';
/*import { HrPanelHomePageComponent } from './Components/hr-panel-home-page/hr-panel-home-page.component';
import { HRCandidateComponent } from './Components/hrPanelComponents/hrCandidateList.components';
import { HRRatingComponent } from './Components/hrPanelComponents/hrRating.components';
import { HRResultComponent } from './Components/hrPanelComponents/hrResultList.components';*/
import { HrComponent } from './components/hrcomp/hrCandidates.component';
import { ResetPassCompomnent } from './components/resetpasscomp/userResetPass.component';


const routes: Routes = [
  {path:'adminpage',component:AdminPageComponent},
  {path:'adminpage/table', component: TechpanelComponent},
  {path:'adminpage/table/form/:candidateId', component:TechInterviewComponent},
  {path:'adminpage/tableHr', component: ScheduleHrinterviewComponent},
  {path:'adminpage/tableHr/form/:interviewId', component: ScheduleHrinterviewFormComponent},
  {path:'adminpage/ratings', component: GetRatingsComponent},
  {path:'adminpage/register', component: RegisterComponent},
  {path:'adminpage/search', component: SearchComponent },
  {path:'adminpage/homepage',component:HomeComponent},
  {path:'login',component:UserComponent},
  {path:'', redirectTo:'/login', pathMatch: 'full'},
  {path: "techPanelHomePage", component:TechPanelHomePageComponent},
  {path: 'techPanelHomePage/techPanelInterviewList', component: TechPaneInterviewComponent},
  {path: 'techPanelHomePage/techPanelRating', component: TechPanelRatingComponent},
  {path: 'techPanelHomePage/techPanelResult', component: TechPanelResultComponent},
  {path:'hr',component:HrComponent},
  /*{path:'user/resetpassword', component: ResetPassCompomnent},
  {path:"hrPanelHomePage", component: HrPanelHomePageComponent },
  {path: "hrPanelHomePage/hrCandidateList", component: HRCandidateComponent},
  {path: "hrPanelHomePage/hrRatingServices", component: HRRatingComponent},
  {path: "hrPanelHomePage/hrResultList", component: HRResultComponent}*/
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
