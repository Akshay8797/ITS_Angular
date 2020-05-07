import { Component, OnInit } from '@angular/core';
import { GetFreeTechPanelService } from 'src/app/services/get-free-panel.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tech-form',
  templateUrl: './techinterviewform.component.html',
  styleUrls: ['./techinterviewform.component.css'],
  providers: [ GetFreeTechPanelService ]
})

export class TechInterviewComponent{

  public techPanelSelected;
  public techid;
  public freePanel;
  public shareValue;
  public candidateId;
  constructor(private getFreeTechPanelService: GetFreeTechPanelService,private activatedRoute: ActivatedRoute){
  }
  OnTechInterviewSchedule(id,date,time,subject,){
    this.getFreeTechPanelService.sendtoTech(id,date,time,this.techid,subject).subscribe((response)=>{
        this.techPanelSelected=response;
        console.log("Received : ",this.techPanelSelected);
    });
    
  }
  shareDetailsTech(id){this.getFreeTechPanelService.shareDetailsTech(id,this.shareValue).subscribe((response)=>{
    this.techPanelSelected=response;
   
});

}

  ProvideDateAndTime(date,time){
    this.getFreeTechPanelService.getTechPanel(date,time).subscribe((response)=> {
      this.freePanel=response;
      console.log("Received : ",this.freePanel);
    })
  }

  ngOnInit() {
    this.candidateId =
    this.activatedRoute.snapshot.params['candidateId'];
    }
    
    
}