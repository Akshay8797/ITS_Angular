import { Component } from '@angular/core';
import { ResetPasswordService } from '../services/userResetPass.service';
import { HttpParams } from '@angular/common/http';

@Component({
    selector: 'resetPass',
    templateUrl: './userResetPass.component.html',
    providers: [ResetPasswordService]
})
export class ResetPassCompomnent {
    userId: string;
    curPassword: string;
    newPassword: string;
    constructor(private resetPasswordService: ResetPasswordService) {      
    }
    onSubmit(resetForm:any) {
        console.log(resetForm);
        let passParam = new HttpParams().append('newpassword', this.newPassword);
        console.log("Params: ",passParam);
        this.resetPasswordService.reset({
            "userid": this.userId,
            "password": this.curPassword
        }, passParam)
            .subscribe((response) => { alert(JSON.stringify(response)); console.log("Message ", response) });
    }
}