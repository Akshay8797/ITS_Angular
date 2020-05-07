import { Component} from '@angular/core';
import{TechPanelService}from 'src/app/services/techPanel.services';
import{OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
    selector: 'techPanelInterviewList',
    templateUrl: './techPanelCandidateList.html',
    styleUrls: ['./techPanelInterview.css'],
    providers:[TechPanelService]
})
export class TechPaneInterviewComponent implements OnInit{
    
    public interviewCandidateList:any;
    constructor(private techPanelService:TechPanelService){
       
    }
    ngOnInit() {
        this.techPanelService.getAllInterviewCandidateList().subscribe(
            (response)=>{this.interviewCandidateList=response; console.log('Recieved Interview Candidate List :', response);}
        );  
    }
  
}