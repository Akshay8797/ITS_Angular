import { Component,OnInit } from '@angular/core';
import { HRCandidateService } from '../../Services/hr.services';
import { UserService } from 'src/app/services/login.service';

@Component({
    selector:'hrRatingServices',
    templateUrl:'hrRating.components.html',
    styleUrls: ['./hrPanel.css'],
    providers:[HRCandidateService]
})

export class HRRatingComponent {
    public hrRating:any;
    public userService: UserService;

    
    constructor (private hrRatingService: HRCandidateService) {

    }
     onSubmit(hrRatingForm:any){
             
    this.hrRatingService.giveHRRating(hrRatingForm.id,{"empHRRating":hrRatingForm.hrRating}).subscribe(
       (response)=>{this.hrRating=response;console.log('HR Rating given :', response);alert(JSON.stringify(response))}
       );  
    }
    OnClick(){
        this.userService.removeSessionId(sessionStorage.getItem('sessionId')).subscribe((response)=>{console.log(response)});
        sessionStorage.removeItem('sessionId');
        }
}