import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { serverresponse } from '../../serverresponse.service';
import { FormGroup, FormControl } from '@angular/forms';
import { userservice } from '../../userservice.service';
import { feedwallservice } from '../../feedservice.service';

@Component({
  selector: 'app-displayfeedwall',
  templateUrl: './displayfeedwall.component.html',
  styleUrls: ['./displayfeedwall.component.css']
})
export class DisplayfeedwallComponent implements OnInit {
  
  constructor(private route:Router, private router:ActivatedRoute,private serverresservice:serverresponse,private userservice:userservice,private feedwallservice:feedwallservice) { }

  addcommentform:FormGroup;
  feedid;
  feedwalldata=[{}];
  cdata=[];
  likes=[];
  ngOnInit() {
    this.addcommentform=new FormGroup({
      'comment':new FormControl(null)
    })  
    this.addfeed();     
  }

  addfeed()
  {
    this.serverresservice.getfeedwalldata().subscribe((data)=>{
      
      this.feedwalldata=data.json();
      
      console.log(this.feedwalldata);
      })
  }

  addcomment(feedid)
  {
    var commentdata=this.addcommentform.value;
    this.feedwallservice.getfeedid(feedid);
    this.serverresservice.addcommentdata(commentdata).subscribe((response)=>{
      if(response.status==200)
      {
        this.addfeed();
      }
      
    })
    this.addcommentform.reset();

  }

  onlike(feedid)
  {
    this.feedwallservice.getfeedid(feedid);
    this.serverresservice.addlikesdata(feedid).subscribe((response)=>{
      if(response.status==200)
      {
        this.addfeed();
      }
      console.log(response);
     
    })
  }
 
  
}
