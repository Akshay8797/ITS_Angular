import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/login.service';


@Component({
  selector: 'app-hr-panel-home-page',
  templateUrl: './hr-panel-home-page.component.html',
  styleUrls: ['./hr-panel-home-page.component.css']
})

export class HrPanelHomePageComponent implements OnInit {
    constructor(private userService: UserService) { }

    ngOnInit(): void {
    }
    OnClick(){
    this.userService.removeSessionId(sessionStorage.getItem('sessionId')).subscribe((response)=>{console.log(response)});
    sessionStorage.removeItem('sessionId');
    }

}
