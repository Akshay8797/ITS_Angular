import { Component,OnInit } from '@angular/core';
import { HRCandidateService } from '../../Services/hr.services';
import { UserService } from 'src/app/services/login.service';

@Component({
    selector:'hrCandidateList',
    templateUrl:'hrCandidateList.components.html',
    styleUrls: ['./hrPanel.css'],
    providers:[HRCandidateService]
})
export class HRCandidateComponent {
    public hrCandidateList:any;
    public hrResultList:any;
    public hrRating:any;
constructor (private hrCandidateService: HRCandidateService,private userService: UserService) {

}
ngOnInit(){
    this.hrCandidateService.getHRCandidates().subscribe(
        (response)=>{this.hrCandidateList=response; console.log(' HR Candidate List : ',response);}
        );
    }
    OnClick(){
        this.userService.removeSessionId(sessionStorage.getItem('sessionId')).subscribe((response)=>{console.log(response)});
        sessionStorage.removeItem('sessionId');
        }
}