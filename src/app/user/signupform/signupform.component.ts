import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import { serverresponse } from '../../serverresponse.service';
import {FileUploader} from 'ng2-file-upload';
import { Observable } from 'rxjs/Observable';

const url = "http://localhost:3000/signup";
@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})

export class SignupformComponent implements OnInit {
  signupform:FormGroup;
  

  picturefile;
  ngOnInit(){
    this.signupform=new FormGroup({
      'firstname':new FormControl(null,[Validators.required,Validators.maxLength(50),Validators.pattern("[a-zA-Z]+")]),
      'lastname':new FormControl(null,[Validators.required,Validators.maxLength(50),Validators.pattern("[a-zA-Z]+")]),
      'birthdate':new FormControl(null),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'password':new FormControl(null,Validators.required),
      'conformpassword':new FormControl(null,Validators.required),
      'flatpurchasedate':new FormControl(null),
      'picture':new FormControl(null),
      'flatblock':new FormControl(null,[Validators.required,Validators.pattern("[A-F]")]),
      'flatno':new FormControl(null,[Validators.required,Validators.max(20),Validators.min(1)]),
      'checkboxhere':new FormControl(null,Validators.required),
    })

    
  }
  constructor(private route:Router, private router:ActivatedRoute,private serverresservice:serverresponse){}
  
  onsubmit()
  {
    var formdata=new FormData();
    var data=this.signupform.value;
    formdata.append("formdata",JSON.stringify(data));
    formdata.append("photo",this.picturefile);
    //console.log(formdata);
    this.serverresservice.storedata(formdata).subscribe((response)=>{
      //console.log(response.json().data);
      if(response.status==200)
      {
        alert("your sign up is done... click 'OK' for login");
        console.log(response);
      }
    });
    
  this.route.navigate(['/loginform'],{relativeTo:this.router});
  }
  
  onfileupload(picturefile)
  {
    // let formdata=new FormData();
    this.picturefile=picturefile.srcElement.files.item(0);
    // formdata.append("formdata",JSON.stringify(this.signupform.value));
    
    
    //this.serverresservice.storeimgdata(formdata).subscribe((response)=>{
      //console.log(response.json().data);
    //})
      console.log(picturefile.srcElement.files.item(0));
  }

  // emailvarification(control:FormControl):Promise<any>|Observable<any>
  // {
  //   const promise=new Promise<any>((resolve,reject)=>{
  //     if(control.value===)
  //     {
  //       resolve ({'emailvalid':false})
  //     }
  //     else
  //     {
  //       resolve (null);
  //     }
  //   })
  // }

  
}
