import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { serverresponse } from '../../serverresponse.service';
import { userservice } from '../../userservice.service';

@Component({
  selector: 'app-listuservehicles',
  templateUrl: './listuservehicles.component.html',
  styleUrls: ['./listuservehicles.component.css']
})
export class ListuservehiclesComponent implements OnInit {

  uservehicledata=[{}];
  
  constructor(private route:Router, private router:ActivatedRoute,private serverresservice:serverresponse,private userservice:userservice) { }

  ngOnInit() {
    this.serverresservice.getuservehicledata().subscribe((response)=>{
     
      //this.vehicleid=response.json().data._id;
      console.log(response.json());
      //console.log(this.vehicleid);
      this.uservehicledata=response.json();
      
      })
  }
  ondelete(vehicleid)
  {

      this.serverresservice.deletevehicledata(vehicleid).subscribe((response)=>{
        alert("data deleted");
        console.log(response);
        this.uservehicledata.splice(vehicleid,1);
        
      })
      ,(error)=>{
        console.log(error);
      }
        
  }
  onupdate(vehicleid)
  {
    this.userservice.getvehicleid(vehicleid);
  }

}
