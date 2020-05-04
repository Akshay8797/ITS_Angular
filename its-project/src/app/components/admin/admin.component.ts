import { Component, OnInit } from '@angular/core';
import { GetFreeTechPanelService } from 'src/app/services/get-free-panel.service'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ GetFreeTechPanelService ]
})
export class AdminComponent {

  public freePanel;
  public freePanelHr;
  public techid;
  public techPanelSelected;
  public detailsNumber =[{'id':0 ,'name':"None"},
                         {'id':1 , 'name':"Technical Panel"},
                         {'id':2 , 'name':"HR Panel"},
                         {'id':3 , 'name':"Both"}];
  public id;
  public detailsSharedWith;

  constructor(private getFreeTechPanelService: GetFreeTechPanelService) 
  {
   /* getFreeTechPanelService.getTechPanel().subscribe((response)=> {
      this.freePanel=response;
      console.log("Received : ",this.freePanel);
    })
    getFreeTechPanelService.getHrPanel().subscribe((response)=> {
      this.freePanelHr=response;
      console.log("Received : ",this.freePanelHr);});     
      getFreeTechPanelService.addCandidate({
        "primarySkills":"C++",
        "secondarySkills":"Chjjs", 
        "experience":2, 
          "qualification": "Btech",
          "designation":"engineer",
          "noticePeriod":4,
          "location":"dhan",
          "shareDetails":2,
           "firstName":"Java",
        "lastName":"Chjjs", 
        "dateOfBirth":"2017-01-13", 
          "gender": "M",
          "street":"dhen",
          
          "city":"dhan",
          "state":"jhar",
          "pincode":1223,
          "mobileNo":98999,
          "emailId":"goluays"
        
}
).subscribe((response)=> {
  this.freePanel=response;
  console.log("New Candidate added : ",response);
});

}

OnTechSelect(techid){
  this.getFreeTechPanelService.sendtoTech(techid).subscribe((response)=>{
      this.techPanelSelected=response;
      console.log("Received : ",this.techPanelSelected);
  });
}

OnTechShare(id){
  console.log(typeof(id),id);
  this.getFreeTechPanelService.shareDetails(id).subscribe((response)=>{
    this.detailsSharedWith=response;
    console.log("Received : ",this.detailsSharedWith);
  })
}
*/
}
}