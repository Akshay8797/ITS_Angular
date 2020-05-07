import { Component } from '@angular/core';
import { GetFreeTechPanelService } from 'src/app/services/get-free-panel.service'
export class User {
  public id: Number;
  public experience: string;
  public qualification: string;
  public primaryskills: string;
  public secondaryskills: string;
  public designation: string;
  public noticeperiod: string;
  public location: string;
  public sharedetails: string;
  public firstname: string;
  public lastname: string;
  public dateofbirth: string;
  public gender: string;
  public street: string;
  public city: string;
  public state: string;
  public pincode: string;
  public mobilenumber: string;
  public email: string;
}

@Component({
  selector: 'register',
  templateUrl: './registration.component.html',
  //styleUrls: ['./app.component.css']
  providers: [ GetFreeTechPanelService ]
})

export class RegisterComponent {
  public freePanel;
  public freePanelHr;
  model = new User();
  
  PrimarySkills= ['C','JAVA','PYTHON','JS','GHANTAA'];
 SecondarySkills= ['C', 'JAVA','PYTHON','JS','GHANTAA'];
  Gender = ['F','M'];
  
  public getRegistrationservice;
  
  constructor(private getFreeTechPanelService: GetFreeTechPanelService) 
  {
    
    this.getRegistrationservice=getFreeTechPanelService;
    

  }
  onSubmit(experience:any,qualification:any,
    designation:any,noticeperiod:any,location:any,sharedetails:any,firstname:any,
    lastname:any,dob:any,street:any,city:any,state:any,pincode:any,mobile:any,
    emailid:any,primaryskills:any,secondaryskills:any,gender:any)
  {
    
    this.getRegistrationservice.addCandidate({
 
       "primarySkills":primaryskills.value,
      "secondarySkills":secondaryskills.value,
        "qualification":qualification.value,
        "designation":designation.value,
        "noticePeriod":noticeperiod.value,
        "location":location.value,
        "shareDetails":sharedetails.value,
         "firstName":firstname.value,
      "lastName":lastname.value,
      "dateOfBirth":dob.value,
        "gender": gender.value,
        "street":street.value,
        "experience":experience.value,
        "city":city.value,
        "state":state.value,
        "pincode":pincode.value,
        "mobileNo":mobile.value,
        "emailId":emailid.value
      
}
).subscribe((response)=> {
this.freePanel=response;
console.log("New Candidate added : ",response);
});
  }
}
