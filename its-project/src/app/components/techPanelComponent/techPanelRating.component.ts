import { Component} from '@angular/core';
import{TechPanelService}from 'src/app/services/techPanel.services';

@Component({
    selector: 'techPanelRating',
    templateUrl: './techPanelRating.html',
    styleUrls: ['./techPanelInterview.css'],
    providers:[TechPanelService]
})
export class TechPanelRatingComponent{
    constructor(private techPanelService:TechPanelService){  
    }
    onSubmit(techForm:any){
        console.log('techForm :',techForm );
        this.techPanelService.giveTechRating(techForm.id,{"techRating":techForm.tRating,"subject": techForm.subject}).subscribe(
            (response)=>{console.log('Rating Given:', response);alert(JSON.stringify(response))}
        );
    }   
}