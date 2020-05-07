import { Component, OnInit } from '@angular/core';
import { GetFreeTechPanelService } from 'src/app/services/get-free-panel.service';

@Component({
  selector: 'admin-page',
  templateUrl: './adminPage.component.html',
  styleUrls: ['./adminPage.component.css'],
  providers: [ GetFreeTechPanelService ]
})

export class AdminPageComponent{
    
}