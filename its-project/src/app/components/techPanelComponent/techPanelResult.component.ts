import { Component} from '@angular/core';
import{TechPanelService}from 'src/app/services/techPanel.services';
import{OnInit} from '@angular/core';
@Component({
    selector: 'techPanelResult',
    templateUrl: './techPanelResultList.html',
    styleUrls: ['./techPanelInterview.css'],
    providers:[TechPanelService]
})
export class TechPanelResultComponent implements OnInit{
    public finalResultList:any;
    constructor(private techPanelService:TechPanelService){     
    } 
    ngOnInit() {
        this.techPanelService.getResults().subscribe(
            (response)=>{this.finalResultList=response; console.log('Recieved Interview Result List :', response);}
        );
    }
  
}