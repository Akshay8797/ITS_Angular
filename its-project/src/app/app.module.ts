import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetFreeTechPanelService } from 'src/app/services/get-free-panel.service'
import { FormsModule } from '@angular/forms';
import { AdminPageComponent } from './components/adminPage/adminPage.component';
import { TechpanelComponent } from './components/technicalpanel/technicalpanel.component';
import { TechInterviewComponent } from './components/techinterviewform/techinterviewform.component';
import { HomeComponent } from './components/home/home.component'
import { ScheduleHrinterviewComponent } from './components/schedule-hrinterview/schedule-hrinterview.component'
import { ScheduleHrinterviewFormComponent } from './components/schedule-hrinterview-form/schedule-hrinterview-form.component';
import { GetRatingsComponent } from './components/get-ratings/get-ratings.component'
import { RegisterComponent } from './components/registration/registration.component'
import { SearchComponent } from './components/search/search.component';
import { UserComponent } from './components/login_new/user.component';
import { TechPanelRatingComponent } from './components/techPanelComponent/techPanelRating.component';
import { TechPaneInterviewComponent } from './components/techPanelComponent/techPanelInterview.component';
import { TechPanelResultComponent } from './components/techPanelComponent/techPanelResult.component';
import{TechPanelHomePageComponent}from './components/tech-panel-home-page/tech-panel-home-page.component';
import { TechPanelService } from './services/techPanel.services';


@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    TechpanelComponent,
    TechInterviewComponent,
    HomeComponent,ScheduleHrinterviewFormComponent,
    ScheduleHrinterviewComponent, GetRatingsComponent,
    RegisterComponent,SearchComponent,
    UserComponent,TechPaneInterviewComponent,TechPanelRatingComponent,TechPanelResultComponent,TechPanelHomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [RouterModule],
  providers: [GetFreeTechPanelService,TechPanelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
