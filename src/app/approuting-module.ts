import {NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignupformComponent } from './user/signupform/signupform.component';
import { LoginFormComponent } from './user/login-form/login-form.component';
import { MenupageComponent } from './menupage/menupage.component';
import { VehiclemangementComponent } from './vehiclemangement/vehiclemangement.component';
import { AddvehicleComponent } from './vehiclemangement/addvehicle/addvehicle.component';
import { ListallvehiclesComponent } from './vehiclemangement/listallvehicles/listallvehicles.component';
import { ListuservehiclesComponent } from './vehiclemangement/listuservehicles/listuservehicles.component';
import { FeedwallComponent } from './feedwall/feedwall.component';
import { DisplayfeedwallComponent } from './feedwall/displayfeedwall/displayfeedwall.component';
import { EdituservehiclesComponent } from './vehiclemangement/edituservehicles/edituservehicles.component';
import { MaintainencemanagementComponent } from './maintainencemanagement/maintainencemanagement.component';

const approutes:Routes=[
    {path:"", component:SignupformComponent},
  
        {path:"signup",component:SignupformComponent},
         {path:"loginform",component:LoginFormComponent},
         {path:"menupage",component:MenupageComponent,children:[
             {path:"vehiclemanagement",component:VehiclemangementComponent,children:[
                {path:"addvehicle",component:AddvehicleComponent},
                {path:"listallvehicles",component:ListallvehiclesComponent},
                {path:"listmyvehicles",component:ListuservehiclesComponent},
                {path:"editmyvehicles/:id/:type/:regno/:color",component:EdituservehiclesComponent},
                {path:"deletemyvehicles/",component:ListuservehiclesComponent}
             ]}
             ,{path:"addfeedform",component:FeedwallComponent},
             {path:"displayfeedform",component:DisplayfeedwallComponent},
             {path:"maintainence", component:MaintainencemanagementComponent}
         ]},
    {path:"**",redirectTo:"/"}
]
    
    @NgModule({
        imports:[RouterModule.forRoot(approutes)],
        exports:[RouterModule]
    })

export class routingmodule{

}