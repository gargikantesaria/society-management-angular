import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { serverresponse } from '../../serverresponse.service';
import { Router, ActivatedRoute } from '@angular/router';
import { userservice } from '../../userservice.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginform:FormGroup;
  usertoken;
  isadmin;
  constructor(private route:Router, private router:ActivatedRoute,private serverresponseservice:serverresponse,private userservice:userservice){}
  
    ngOnInit(){
      this.loginform=new FormGroup({
        'email':new FormControl(null,[Validators.required,Validators.email]),
        'password':new FormControl(null,Validators.required),  
      })
    }

    onsubmit()
    {
      var data=this.loginform.value;
      console.log(data);
      this.serverresponseservice.comparedata(data).subscribe((response)=>{
        console.log(response);
        if(response.status==200)
        {
          var responsedata=response.json().data._id;
          this.userservice.getuserid(responsedata);
          console.log(response.json().data._id);
          this.usertoken=response.json().data.signuptoken;
          console.log(this.usertoken);
          // this.isadmin=response.json().data.isadmintoken;
          // console.log(this.isadmin);
          // this.userservice.getadmintoken(this.isadmin);
          this.setauthtoken();
          
          this.route.navigate(['/menupage/vehiclemanagement'],{relativeTo:this.router});
          
        }
      },
        (error)=>{
          alert("please enter valid data");
          
        }
      )
    }
    setauthtoken()
    {
      window.localStorage.setItem("authtoken",this.usertoken);
    }

}
