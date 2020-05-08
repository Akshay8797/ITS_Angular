import { Component,OnInit } from '@angular/core';
import { HRCandidateService } from '../../Services/hr.services';
import { UserService } from 'src/app/services/login.service';

@Component({
    selector:'hrResultList',
    templateUrl:'hrResultList.components.html',
    styleUrls: ['./hrPanel.css'],
    providers:[HRCandidateService]
})
export class HRResultComponent {
    public hrResultList:any;

constructor (private hrResultService: HRCandidateService,private userService: UserService) {

}
ngOnInit(){
this.hrResultService.getResults().subscribe(
    (response)=>{this.hrResultList=response; console.log('Recieved Interview Result List :', response);}
    );
 }

    OnClick(){
        this.userService.removeSessionId(sessionStorage.getItem('sessionId')).subscribe((response)=>{console.log(response)});
        sessionStorage.removeItem('sessionId');
        }
}