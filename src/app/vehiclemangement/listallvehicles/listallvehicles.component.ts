import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { serverresponse } from '../../serverresponse.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-listallvehicles',
  templateUrl: './listallvehicles.component.html',
  styleUrls: ['./listallvehicles.component.css']
})
export class ListallvehiclesComponent implements OnInit {

  
  vehicledata=[{}];

  constructor(private route:Router, private router:ActivatedRoute,private serverresservice:serverresponse) { }

  ngOnInit() {
   
    this.serverresservice.getvehicledata().subscribe((data)=>{
    // vehicledata=data;
    console.log(data.json());
    this.vehicledata=data.json();
    //console.log(vehicledata);
    })
  
  }

  //make form and get data
}
