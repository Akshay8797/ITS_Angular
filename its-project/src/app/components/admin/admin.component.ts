import { Component, OnInit } from '@angular/core';
import { GetFreeTechPanelService } from 'src/app/services/get-free-tech-panel.service'


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ GetFreeTechPanelService ]
})
export class AdminComponent {

  public freePanel;

  constructor(getFreeTechPanelService: GetFreeTechPanelService) 
  { 
    getFreeTechPanelService.getTechPanel().subscribe((response)=> {
      this.freePanel=response;
      console.log("Received products: ",this.freePanel);
    })

}
}