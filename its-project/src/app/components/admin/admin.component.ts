import { Component, OnInit } from '@angular/core';
import { GetFreeTechPanelService } from 'src/app/services/get-free-panel.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ GetFreeTechPanelService ]
})
export class AdminComponent {

  public freePanel;
  public freePanelHr;
  public techid;
  public dummy;
  constructor(private getFreeTechPanelService: GetFreeTechPanelService) 
  { 
    getFreeTechPanelService.getTechPanel().subscribe((response)=> {
      this.freePanel=response;
      console.log("Received : ",this.freePanel);
    })
    getFreeTechPanelService.getHrPanel().subscribe((response)=> {
      this.freePanelHr=response;
      console.log("Received : ",this.freePanelHr);})     
}

OnTechSelect(techid){
  this.getFreeTechPanelService.sendtoTech(techid).subscribe((response)=>{
      this.dummy=response;
      console.log("Received : ",this.dummy);
  });
}

}