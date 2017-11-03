import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { serverresponse } from '../serverresponse.service';
import { feedwallservice } from '../feedservice.service';
import { userservice } from '../userservice.service';

@Component({
  selector: 'app-feedwall',
  templateUrl: './feedwall.component.html',
  styleUrls: ['./feedwall.component.css']
})
export class FeedwallComponent implements OnInit {

  userid=this.userservice.senduserid();
  addfeedform:FormGroup;
  constructor(private route:Router, private router:ActivatedRoute,private serverresservice:serverresponse,private feedwallservice:feedwallservice,private userservice:userservice) { }

  ngOnInit() {
    this.addfeedform=new FormGroup({
      'feedstatus':new FormControl(null,[Validators.required]),
      'feedimage':new FormControl(null),  
    })
    
  }
  onsubmit()
  {
    var data=this.addfeedform.value;
    this.serverresservice.addfeedwalldata(data).subscribe((response)=>{
      if(response.status==200)
      {
        console.log(response.json());
        var feedid=response.json().data._id;
        var userid=this.userservice.senduserid();
        console.log(userid);
        console.log(feedid);
        this.feedwallservice.getfeedid(feedid);
        alert("feed is added");
        this.route.navigate(['../displayfeedform'],{relativeTo:this.router});
      } 
    })
  }

}
