import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { serverresponse } from '../../serverresponse.service';
import { FormGroup, FormControl } from '@angular/forms';
import { userservice } from '../../userservice.service';
import { feedwallservice } from '../../feedservice.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@Component({
  selector: 'app-displayfeedwall',
  templateUrl: './displayfeedwall.component.html',
  styleUrls: ['./displayfeedwall.component.css']
})
export class DisplayfeedwallComponent implements OnInit {
  
  constructor(private route:Router, private router:ActivatedRoute,private serverresservice:serverresponse,private userservice:userservice,private feedwallservice:feedwallservice) { }
  p: number = 1;
  addcommentform:FormGroup;
  feedid;
  feedwalldata=[];
  cdata=[];
  likes=[];
  ngOnInit() {
    this.addcommentform=new FormGroup({
      'comment':new FormControl(null)
    })  
    this.addfeed();     
  }
  onScroll () {
    console.log('scrolled!!');
    this.p+=1;
    this.addfeed();
}

  addfeed()
  {
    this.serverresservice.getfeedwalldata(this.p).subscribe((data)=>{

      if(data.status===200)
      {
        this.feedwalldata=this.feedwalldata.concat(data.json());
        
              // this.feedwalldata.concat(data);
              
              console.log(this.feedwalldata);
              console.log(data)
      }
      },(error)=>{
        alert("no data more");
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
