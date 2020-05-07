
import { Component } from '@angular/core';
import { GetFreeTechPanelService } from 'src/app/services/get-free-panel.service'

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  //styleUrls: ['./app.component.css']
  providers: [ GetFreeTechPanelService ]

})

export class SearchComponent 
{
  public freePanel;

  public Candidates: Array<Object>;
  
  PrimarySkills= ['C','JAVA','PYTHON','JS','Android'];
   Qualification=["10th","12th","B.tech"];
  
  
  public getRegistrationservice;
  public getCandidate;
  
  public candidate = [
      {
          
      }
  ];
  constructor(private getFreeTechPanelService: GetFreeTechPanelService) 
  {
    
    this.getRegistrationservice=getFreeTechPanelService;
     this.getCandidate=getFreeTechPanelService;
  }
  
  onSubmit(experience:any,qualification:any,primaryskills:any)
  {
      
    this.getCandidate.getSearch({
 
        "primarySkills":primaryskills.value,
        "qualification":qualification.value,
         "experience":experience.value,
        
      }).subscribe((response) => {
        {this.Candidates = response}
        console.log("resposne",response);
      });
    }

    
      
}
