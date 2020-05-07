import { Component} from '@angular/core';
import{TechPanelService}from 'src/app/services/techPanel.services';
import{OnInit} from '@angular/core';
import { UserService } from 'src/app/services/login.service';
@Component({
    selector: 'techPanelResult',
    templateUrl: './techPanelResultList.html',
    styleUrls: ['./techPanelInterview.css'],
    providers:[TechPanelService]
})
export class TechPanelResultComponent implements OnInit{
  public userService: UserService;  
  public finalResultList:any;
    constructor(private techPanelService:TechPanelService){     
    } 
    ngOnInit() {
        this.techPanelService.getResults().subscribe(
            (response)=>{this.finalResultList=response; console.log('Recieved Interview Result List :', response);}
        );
    }
  OnClick(){
      this.userService.removeSessionId(sessionStorage.getItem('sessionId')).subscribe((response)=>{console.log(response)});
      sessionStorage.removeItem('sessionId');
      }
  
}
