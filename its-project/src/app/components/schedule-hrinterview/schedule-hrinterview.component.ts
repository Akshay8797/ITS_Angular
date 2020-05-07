import { Component, OnInit } from '@angular/core';
import { GetFreeTechPanelService } from 'src/app/services/get-free-panel.service'

@Component({
  selector: 'app-schedule-hrinterview',
  templateUrl: './schedule-hrinterview.component.html',
  styleUrls: ['./schedule-hrinterview.component.css'],
  providers: [ GetFreeTechPanelService ]
})
export class ScheduleHrinterviewComponent implements OnInit {

  public eligibleCandidate;
  public interviewId;
  
  constructor(private getFreeTechPanelService: GetFreeTechPanelService) {
    getFreeTechPanelService.getEligibleCandidate().subscribe ((response)=> {
      this.eligibleCandidate=response; 
      console.log("Received : ",this.eligibleCandidate); })   

   }

   OnSelectedCandidate(interviewID){
    this.interviewId=interviewID;
  }
  

  ngOnInit(): void {
  }

}
