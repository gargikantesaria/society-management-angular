import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { serverresponse } from '../serverresponse.service';

@Component({
  selector: 'app-maintainencemanagement',
  templateUrl: './maintainencemanagement.component.html',
  styleUrls: ['./maintainencemanagement.component.css']
})
export class MaintainencemanagementComponent implements OnInit {

  maintainenceform:FormGroup;
  userdata=[];
  
  constructor(private serverresservice:serverresponse) { }

  ngOnInit() {
    this.maintainenceform=new FormGroup({
      
      'month':new FormControl(null,Validators.required),
      'block':new FormControl(null,Validators.required),
    })
  }

  ongetmaintainencedata()
  {
      this.serverresservice.findmaintainence(this.maintainenceform.value).subscribe((response)=>{
        if(response.status==200)
        {
          this.userdata=response.json().data;
          console.log(this.userdata);
        }
        else
        {
          console.log(response);
          alert("only admin can access this field");
        }
      }),
      (error)=>{
        console.log(error);
        alert("only admin can access this field");
      }
  }
}
