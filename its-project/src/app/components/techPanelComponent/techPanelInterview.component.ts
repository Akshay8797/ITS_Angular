import { Component} from '@angular/core';
import{TechPanelService}from 'src/app/services/techPanel.services';
import{OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from 'src/app/services/login.service';
@Component({
    selector: 'techPanelInterviewList',
    templateUrl: './techPanelCandidateList.html',
    styleUrls: ['./techPanelInterview.css'],
    providers:[TechPanelService]
})
export class TechPaneInterviewComponent implements OnInit{
    public userService: UserService;
    public interviewCandidateList:any;
    constructor(private techPanelService:TechPanelService){
       
    }
    ngOnInit() {
        this.techPanelService.getAllInterviewCandidateList().subscribe(
            (response)=>{this.interviewCandidateList=response; console.log('Recieved Interview Candidate List :', response);}
        );  
    }
    OnClick(){
      this.userService.removeSessionId(sessionStorage.getItem('sessionId')).subscribe((response)=>{console.log(response)});
      sessionStorage.removeItem('sessionId');
      }
  
}
