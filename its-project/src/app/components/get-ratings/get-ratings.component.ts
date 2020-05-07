import { Component, OnInit } from '@angular/core';
import { GetFreeTechPanelService } from 'src/app/services/get-free-panel.service'
import { UserService } from 'src/app/services/login.service';

@Component({
  selector: 'app-get-ratings',
  templateUrl: './get-ratings.component.html',
  styleUrls: ['./get-ratings.component.css']
})
export class GetRatingsComponent implements OnInit {

  constructor(private getFreeTechPanelService: GetFreeTechPanelService,private userService:UserService) { 
    
    getFreeTechPanelService.getAllRatedCandidates().subscribe ((response)=> {
      this.eligibleCandidate=response; 
      console.log("Received : ",this.eligibleCandidate); })   

  }

  public eligibleCandidate;
  public interviewId;
  public rating=false;
  public ratingsBoth:any;
  public result=false;
  public choices=[{ch:"selected"},{ch:"rejected"}]
  public responseSetResult;
  public successDisplay=false;
  OnSelectedCandidate(interviewId){
    this.getFreeTechPanelService.getRatings(interviewId).subscribe ((response)=> {
      this.ratingsBoth=response; 
      console.log("Received : ",this.eligibleCandidate); })  
      this.rating=true;
      this.interviewId=interviewId;
  }
  setResult(){
    this.result=true;
  }
  OnSelectResult(result){
    this.getFreeTechPanelService.setResult(this.interviewId,result).subscribe((response)=>{
      this.responseSetResult=response;
      this.successDisplay=true
      console.log("Set result: ",this.responseSetResult);
  });  }
  
  OnClick(){
    this.userService.removeSessionId(sessionStorage.getItem('sessionId')).subscribe((response)=>{console.log(response)});
    sessionStorage.removeItem('sessionId');
    }

  ngOnInit(): void {
  }

}
