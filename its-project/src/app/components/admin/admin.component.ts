import { Component, OnInit } from '@angular/core';
import { GetFreeTechPanelService } from 'src/app/services/get-free-panel.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ GetFreeTechPanelService ]
})
export class AdminComponent {

  
  public eligibleCandidate;
  public freePanelHr;
  public hrId;
  public dummy;
  public dummy2;
  public interviewId;
  public techRating;
  public hrRating;
  
  public techPanelSelected;
  public detailsNumber =[{'id':0 ,'name':"None"},
                         {'id':1 , 'name':"Technical Panel"},
                         {'id':2 , 'name':"HR Panel"},
                         {'id':3 , 'name':"Both"}];
  public id;
  public detailsSharedWith;

  constructor(private getFreeTechPanelService: GetFreeTechPanelService) 
  { 
    
          
}

OnCandidateSelect(interviewID){
  this.interviewId=interviewID;
}


OnSelectResult(result){
  this.getFreeTechPanelService.setResult(5,result).subscribe((response)=>{
    this.dummy2=response;
    console.log("Set result: ",this.dummy2);
});
}
}