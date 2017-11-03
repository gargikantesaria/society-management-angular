import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http'
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignupformComponent } from './user/signupform/signupform.component';
import { LoginFormComponent } from './user/login-form/login-form.component';
import { routingmodule } from './approuting-module';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms'
import { serverresponse } from './serverresponse.service';
import { MenupageComponent } from './menupage/menupage.component';
import { VehiclemangementComponent } from './vehiclemangement/vehiclemangement.component';
import { AddvehicleComponent } from './vehiclemangement/addvehicle/addvehicle.component';
import { ListallvehiclesComponent } from './vehiclemangement/listallvehicles/listallvehicles.component';
import { ListuservehiclesComponent } from './vehiclemangement/listuservehicles/listuservehicles.component';
import { FeedwallComponent } from './feedwall/feedwall.component';
import { DisplayfeedwallComponent } from './feedwall/displayfeedwall/displayfeedwall.component';
import { userservice } from './userservice.service';
import { EdituservehiclesComponent } from './vehiclemangement/edituservehicles/edituservehicles.component';

import { feedwallservice } from './feedservice.service';
import { MaintainencemanagementComponent } from './maintainencemanagement/maintainencemanagement.component';
import { maintainnenceservicecomponent } from './maintainenceservice.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignupformComponent,
    LoginFormComponent,
    MenupageComponent,
    VehiclemangementComponent,
    AddvehicleComponent,
    ListallvehiclesComponent,
    ListuservehiclesComponent,
    FeedwallComponent,
    DisplayfeedwallComponent,
    EdituservehiclesComponent,
    MaintainencemanagementComponent,
    
  ],
  imports: [
    BrowserModule,routingmodule,RouterModule,ReactiveFormsModule,HttpModule,
  ],
  providers: [serverresponse,userservice,feedwallservice,maintainnenceservicecomponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
