import { Component, OnInit } from '@angular/core';
import { GetFreeTechPanelService } from 'src/app/services/get-free-panel.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'schedule-tech',
  templateUrl: './technicalpanel.component.html',
  styleUrls: ['./technicalpanel.component.css'],
  providers: [ GetFreeTechPanelService ],

})
export class TechpanelComponent {
    public eligibleForTech;
    constructor(private getFreeTechPanelService: GetFreeTechPanelService) {
        getFreeTechPanelService.getEligibleCandidateForTech().subscribe((response)=> {
            this.eligibleForTech=response;
            console.log("Received : ",this.eligibleForTech);
          })
   }

   OnSelectedCandidate(candidateID){
     
   }
  
}