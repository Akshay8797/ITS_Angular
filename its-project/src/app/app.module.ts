import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import {RegisterComponent} from './components/registration.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { AdminComponent } from './components/admin/admin.component';
import { GetFreeTechPanelService } from 'src/app/services/get-free-panel.service'
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
  //  AdminComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GetFreeTechPanelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
