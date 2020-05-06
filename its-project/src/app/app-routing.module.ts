import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HrService } from './components/hrCandidates.component';
import { ResetPassCompomnent } from './components/userResetPass.component';


const routes: Routes = [
  {path:"hr", component:HrService},
  {path:"user/resetpassword", component:ResetPassCompomnent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
