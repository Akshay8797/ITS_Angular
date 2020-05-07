import { Component, OnInit } from '@angular/core';
import { GetFreeTechPanelService } from 'src/app/services/get-free-panel.service'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ GetFreeTechPanelService ]
})
export class AdminComponent {

  
  public eligibleCandidate;
  public freePanelHr;
  public hrId;
  public dummy;
  public dummy2;
  public interviewId;
  public techRating;
  public hrRating;
  
  public techid;
  public techPanelSelected;
  public detailsNumber =[{'id':0 ,'name':"None"},
                         {'id':1 , 'name':"Technical Panel"},
                         {'id':2 , 'name':"HR Panel"},
                         {'id':3 , 'name':"Both"}];
  public id;
  public detailsSharedWith;

  constructor(private getFreeTechPanelService: GetFreeTechPanelService) 
<<<<<<< HEAD
  { 
    
          
}

OnCandidateSelect(interviewID){
  this.interviewId=interviewID;
}


OnSelectResult(result){
  this.getFreeTechPanelService.setResult(5,result).subscribe((response)=>{
    this.dummy2=response;
    console.log("Set result: ",this.dummy2);
});
=======
  {
   getFreeTechPanelService.getTechPanel().subscribe((response)=> {
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

>>>>>>> 8c76066ec7838d38651bde21944a257925e88862
}
}