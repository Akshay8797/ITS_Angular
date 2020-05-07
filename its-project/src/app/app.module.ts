import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { GetFreeTechPanelService } from 'src/app/services/get-free-panel.service'
import { AdminPageComponent } from './components/adminPage/adminPage.component';
import { TechpanelComponent } from './components/technicalpanel/technicalpanel.component';
import { TechInterviewComponent } from './components/techinterviewform/techinterviewform.component';
import { HomeComponent } from './components/home/home.component'
import { ScheduleHrinterviewComponent } from './components/schedule-hrinterview/schedule-hrinterview.component'
import { ScheduleHrinterviewFormComponent } from './components/schedule-hrinterview-form/schedule-hrinterview-form.component';
import { GetRatingsComponent } from './components/get-ratings/get-ratings.component'
import { RegisterComponent } from './components/registration/registration.component'
import { SearchComponent } from './components/search/search.component';
import { HrService } from './components/hrCandidates.component';
import { ResetPassCompomnent } from './components/userResetPass.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminPageComponent,
    TechpanelComponent,
    TechInterviewComponent,
    HomeComponent,ScheduleHrinterviewFormComponent,
    ScheduleHrinterviewComponent, GetRatingsComponent,
    RegisterComponent,SearchComponent,
    HrService,
    ResetPassCompomnent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
