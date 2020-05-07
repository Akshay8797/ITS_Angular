import { Component, OnInit } from '@angular/core';
import { GetFreeTechPanelService } from 'src/app/services/get-free-panel.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/login.service'



@Component({
  selector: 'app-schedule-hrinterview-form',
  templateUrl: './schedule-hrinterview-form.component.html',
  styleUrls: ['./schedule-hrinterview-form.component.css'],
  providers: [ GetFreeTechPanelService ]
})
export class ScheduleHrinterviewFormComponent {

  public hrPanelSelected;
  public hrId;
  public freePanelHr;
  public shareValue;
  public shareResponse;
  public interviewId;
  constructor(private getFreeTechPanelService: GetFreeTechPanelService,private activatedRoute: ActivatedRoute,private userService:UserService){
  }
  OnHrInterviewSchedule(id,date,time){
    this.getFreeTechPanelService.sendtoHr(id,date,time,this.hrId).subscribe((response)=>{
        this.hrPanelSelected=response;
        console.log("Received : ",this.hrPanelSelected);
    });
    
  }

  ProvideDateAndTime(date,time){
    this.getFreeTechPanelService.getHrPanel(date,time).subscribe((response)=> {
      this.freePanelHr=response;
      console.log("Received : ",this.freePanelHr);
    })
  }

  shareDetailsHr(id){
    this.getFreeTechPanelService.shareDetailsHr(id,this.shareValue).subscribe((response)=> {
      this.shareResponse=response;
      console.log("Received : ",this.shareResponse);
    })
  }

  OnClick(){
    this.userService.removeSessionId(sessionStorage.getItem('sessionId')).subscribe((response)=>{console.log(response)});
    sessionStorage.removeItem('sessionId');
  }

  ngOnInit() {
    this.interviewId = this.activatedRoute.snapshot.params['interviewId'];
    console.log(this.interviewId);
    }
 
}
