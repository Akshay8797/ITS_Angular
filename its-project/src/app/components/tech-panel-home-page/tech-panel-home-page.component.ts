import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/login.service';
import{TechPanelService}from 'src/app/services/techPanel.services';

@Component({
  selector: 'techPanelHomePage',
  templateUrl: './tech-panel-home-page.component.html',
  styleUrls: ['./tech-panel-home-page.component.css'],
  providers:[TechPanelService]
})
export class TechPanelHomePageComponent implements OnInit {
  

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  OnClick(){
      this.userService.removeSessionId(sessionStorage.getItem('sessionId')).subscribe((response)=>{console.log(response)});
      sessionStorage.removeItem('sessionId');
      }

}
