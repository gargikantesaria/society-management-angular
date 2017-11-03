import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { serverresponse } from '../../serverresponse.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { userservice } from '../../userservice.service';

@Component({
  selector: 'app-edituservehicles',
  templateUrl: './edituservehicles.component.html',
  styleUrls: ['./edituservehicles.component.css']
})
export class EdituservehiclesComponent implements OnInit {
  editvehicleform:FormGroup;
  
  constructor(private route:Router, private router:ActivatedRoute,private serverresservice:serverresponse, private userservice:userservice) { }
  ngOnInit() {
    this.editvehicleform=new FormGroup({
      'vehicletype':new FormControl(null,Validators.required),
      'vehicleregistrationno':new FormControl(null,Validators.required),
      'vehiclecolor':new FormControl(null,Validators.required),
    })
    this.editvehicleform.setValue({
      'vehicletype':this.router.snapshot.params['type'],
      'vehicleregistrationno':this.router.snapshot.params['regno'],
      'vehiclecolor':this.router.snapshot.params['color'],
    })
    
  }

  
  
    onsubmit()
    {
      var data=this.editvehicleform.value;
      //console.log(data);
      this.serverresservice.updatevehicledata(data).subscribe((response)=>{
        console.log(response);
        
          console.log(response.status);
          alert("data is updated");
          this.route.navigate(['../../listmyvehicles/'],{relativeTo:this.router});
        
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


