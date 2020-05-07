import { Component, OnInit, AfterViewInit} from '@angular/core';
import { UserService } from 'src/app/services/login.service';
import { Router, ActivatedRoute, CanActivate } from '@angular/router';
import { GetFreeTechPanelService } from 'src/app/services/get-free-panel.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [ UserService , GetFreeTechPanelService]
})
export class UserComponent {
  private sessionId;
  public userId:String="";
  public userPass:String;
  private storeSessionId;
  private loginStatus=false;
  public sharedValue;
  submitted = false;
  loading = false;
  returnUrl: String="";
  public returnedObject;
  public loginFail=false;


  
  constructor(private userService:UserService,
    private route: ActivatedRoute,
    private router: Router,private getFreeTechPanelService: GetFreeTechPanelService){
      }

      onSubmit(userid,password) {
        this.userService.generateUserHomepage(userid, password,this.sharedValue).subscribe((response)=> {
          this.returnedObject=response; 
          console.log(this.returnedObject);
          this.getFreeTechPanelService.setSessionVariable(this.returnedObject);
          sessionStorage.setItem('sessionId',String(this.returnedObject))
          if(this.returnedObject!= "failed"){
            this.loginFail=true;    
          }
          if(this.sharedValue== "0" && this.returnedObject!= "failed")     {
          console.log("inside if")
          this.router.navigateByUrl('adminpage/homepage');
        }
        else if(this.returnedObject!= "failed" && this.sharedValue== "1"){
          this.router.navigate(['/techPanelHomePage']);
        }
        else if(this.returnedObject!= "failed" && this.sharedValue== "2"){
          this.router.navigate(['/hrpage']);
        }
      }) ;    
        
    }  
  userLogout(){
    this.userService.removeSessionId(this.storeSessionId).subscribe((response)=> {
      this.sessionId=response;
      console.log("Received : ",response);
      
  });}
  ngOnInit() {
  
}


}

