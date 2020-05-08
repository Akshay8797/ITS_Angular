import { Component, OnInit } from '@angular/core';
import { GetFreeTechPanelService } from 'src/app/services/get-free-panel.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/login.service';


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
  constructor(private getFreeTechPanelService: GetFreeTechPanelService,private activatedRoute: ActivatedRoute,private userService:UserService){
  }
  OnTechInterviewSchedule(id,date,time,subject,){
    this.getFreeTechPanelService.sendtoTech(id,date,time,this.techid,subject).subscribe((response)=>{
        this.techPanelSelected=response;
        console.log("Received : ",this.techPanelSelected);
        alert("Technical Interview has been scheduled");
      
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

  OnClick(){
    this.userService.removeSessionId(sessionStorage.getItem('sessionId')).subscribe((response)=>{console.log(response)});
    sessionStorage.removeItem('sessionId');
  }
    

  ngOnInit() {
    this.candidateId =
    this.activatedRoute.snapshot.params['candidateId'];
    }
    
    
}