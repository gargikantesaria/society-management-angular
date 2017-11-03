import { Component, OnInit } from '@angular/core';
import { userservice } from '../userservice.service';

@Component({
  selector: 'app-vehiclemangement',
  templateUrl: './vehiclemangement.component.html',
  styleUrls: ['./vehiclemangement.component.css']
})
export class VehiclemangementComponent implements OnInit {

  userid:String;
  constructor(private userservice:userservice) { }

  ngOnInit() {
    this.userid=this.userservice.senduserid();
  }

}
