import { Component, OnInit } from '@angular/core';
import { GetFreeTechPanelService } from 'src/app/services/get-free-panel.service';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ GetFreeTechPanelService ]
})

export class HomeComponent{
    
}