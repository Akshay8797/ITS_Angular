import { Component, OnInit } from '@angular/core';
import { GetFreeTechPanelService } from 'src/app/services/get-free-panel.service';
import { EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/login.service';


@Component({
  selector: 'schedule-tech',
  templateUrl: './technicalpanel.component.html',
  styleUrls: ['./technicalpanel.component.css'],
  providers: [ GetFreeTechPanelService ],

})
export class TechpanelComponent {
    public eligibleForTech;
    constructor(private getFreeTechPanelService: GetFreeTechPanelService,private userService:UserService) {
        getFreeTechPanelService.getEligibleCandidateForTech().subscribe((response)=> {
            this.eligibleForTech=response;
            console.log("Received : ",this.eligibleForTech);
          })
   }

   OnClick(){
    this.userService.removeSessionId(sessionStorage.getItem('sessionId')).subscribe((response)=>{console.log(response)});
    sessionStorage.removeItem('sessionId');
     }
   OnSelectedCandidate(candidateID){
     
   }
  
}