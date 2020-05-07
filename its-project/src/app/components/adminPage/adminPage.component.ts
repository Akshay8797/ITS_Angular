import { Component, OnInit } from '@angular/core';
import { GetFreeTechPanelService } from 'src/app/services/get-free-panel.service';
import { UserService } from 'src/app/services/login.service';

@Component({
  selector: 'admin-page',
  templateUrl: './adminPage.component.html',
  styleUrls: ['./adminPage.component.css'],
  providers: [ GetFreeTechPanelService ]
})

export class AdminPageComponent{

  constructor(private userService:UserService){};
    OnClick(){
      this.userService.removeSessionId(sessionStorage.getItem('sessionId')).subscribe((response)=>{console.log(response)});
      sessionStorage.removeItem('sessionId');
      }
}