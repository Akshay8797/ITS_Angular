import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/login.service';

@Component({
  selector: 'techPanelHomePage',
  templateUrl: './tech-panel-home-page.component.html',
  styleUrls: ['./tech-panel-home-page.component.css']
})
export class TechPanelHomePageComponent implements OnInit {
  public userService: UserService;
  constructor() { }

  ngOnInit(): void {
  }
  OnClick(){
      this.userService.removeSessionId(sessionStorage.getItem('sessionId')).subscribe((response)=>{console.log(response)});
      sessionStorage.removeItem('sessionId');
      }

}
