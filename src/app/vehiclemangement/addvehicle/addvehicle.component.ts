import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { serverresponse } from '../../serverresponse.service';

@Component({
  selector: 'app-addvehicle',
  templateUrl: './addvehicle.component.html',
  styleUrls: ['./addvehicle.component.css']
})
export class AddvehicleComponent implements OnInit {
  addvehicleform:FormGroup;

  ngOnInit() {
    this.addvehicleform=new FormGroup({
      'vehicletype':new FormControl(null,Validators.required),
      'vehicleregistrationno':new FormControl(null,Validators.required),
      'vehiclecolor':new FormControl(null,Validators.required),
    })
  }
  constructor(private route:Router, private router:ActivatedRoute,private serverresservice:serverresponse) { }

  onsubmit()
  {
    var data=this.addvehicleform.value;
    //console.log(data);
    this.serverresservice.storevehicledata(data).subscribe((response)=>{
      console.log(response);
      
        console.log(response.status);
        alert("data is added");
        this.route.navigate(['../listmyvehicles'],{relativeTo:this.router});
      
    },
  (error)=>{
    console.log("error",error);
    if(error.status==401)
    {
      this.route.navigate(['/loginform'],{relativeTo:this.router}); 
    }
  })
  }
}
