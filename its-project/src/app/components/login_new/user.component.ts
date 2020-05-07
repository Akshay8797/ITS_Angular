import { Component, OnInit, AfterViewInit} from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [ UserService ]
})
export class UserComponent implements OnInit {
  private sessionId;
  public userId:String="";
  public userPass:String;
  private storeSessionId;
  private loginStatus=false;
  submitted = false;
  loading = false;
  loginForm: FormGroup;
  returnUrl: String="";
  get f() { return this.loginForm.controls; }

  
  constructor(private userService:UserService,  private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,){
      }

      onSubmit() {
        this.submitted = true;
      if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.userService.generateUserHomepage(this.f.username.value, this.f.password.value).subscribe(
                data => {
                    this.router.navigate([data]);
                    this.loginStatus=true;
                    this.userId=this.f.username.value
                    console.log(this.f.username.value, this.f.password.value,data,this.userId)
                },
                error => {
                    "Invalid Request";
                    this.loading = false;
                });

                         
    }  
  userLogout(){
    this.userService.removeSessionId(this.storeSessionId).subscribe((response)=> {
      this.sessionId=response;
      console.log("Received : ",response);
      
  });}
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
}


}

