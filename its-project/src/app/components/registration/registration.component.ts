import { Component } from '@angular/core';
import { GetFreeTechPanelService } from 'src/app/services/get-free-panel.service'
import { UserService } from 'src/app/services/login.service';

export class User {
  
  public experience: Number;
  public qualification: string;
  public primaryskills: string;
  public secondaryskills: string;
  public designation: string;
  public noticeperiod: string;
  public location: string;
  public sharedetails: string;
  public firstname: string;
  public lastname: string;
  public dateofbirth:Date;
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
  styleUrls: ['./registration.component.css'],
  providers: [ GetFreeTechPanelService ]
})

export class RegisterComponent {
  public freePanel;
  public freePanelHr;
  public id;
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$"
  pincode1="^((\\+91-?)|0)?[0-9]{6}$"
 
  
  PrimarySkills= ['C','JAVA','PYTHON','JS'];
 SecondarySkills= ['C', 'JAVA','PYTHON','JS'];
  Gender = ['F','M'];
  Qualification=['10th','12th','B.tech'];
  ShareDetails=['0','1','2','3'];
  
  public getRegistrationservice;
  public submit:boolean=false;
  
  constructor(private getFreeTechPanelService: GetFreeTechPanelService,private userService:UserService) 
  {
    
    this.getRegistrationservice=getFreeTechPanelService;
    

  }
  onSubmit(experience:any,qualification:any,
    designation:any,noticeperiod:any,location:any,sharedetails:any,primaryskills:any,secondaryskills:any)
  {
    
    this.getRegistrationservice.addCandidate({
 
       "primarySkills":primaryskills.value,
      "secondarySkills":secondaryskills.value,
        "qualification":qualification.value,
        "designation":designation.value,
        "noticePeriod":noticeperiod.value,
        "location":location.value,
        "shareDetails":sharedetails.value,
        "experience":experience.value,
         
      
}
).subscribe((response)=> {
this.freePanel=response;
console.log("New Candidate added : ",response);
this.id=response;
});
  }

  onSubmit2(firstname:any,
    lastname:any,dob:any,street:any,city:any,state:any,pincode:any,mobile:any,
    emailid:any,gender:any)
  {
    this.getRegistrationservice.addUserProfile(
      {
    "firstName":firstname.value,
    "lastName":lastname.value,
    "dateOfBirth":dob.value,
      "gender":gender.value,
      "street":street.value,
       "city":city.value,
      "state":state.value,
      "pincode":pincode.value,
      "mobileNo":mobile.value,
      "emailId":emailid.value
      },this.id).subscribe((response)=>
      console.log("added",response));
      alert("Candidate Detils Added")
  }

onSelectSubmit()
{
  this.submit=true;
}

OnClick(){
  this.userService.removeSessionId(localStorage.getItem('sessionId')).subscribe((response)=>{console.log(response)});
  localStorage.removeItem('sessionId');
}
}
