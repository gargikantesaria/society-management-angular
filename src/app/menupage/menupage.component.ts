import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { userservice } from '../userservice.service';
import { serverresponse } from '../serverresponse.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute,private userservice:userservice,private serverservice:serverresponse) {}
  isadmintoken;
  ngOnInit() {
     this.serverservice.getuserdata().subscribe((response)=>{
       if(response.status==200)
       {
         this.isadmintoken=(response.json().data.isadmintoken);
         console.log(this.isadmintoken);
       }
     })
      
  }
  onlogout()
  {
    window.localStorage.removeItem("authtoken");
    
    window.localStorage.clear();
    this.router.navigate(['/'],{relativeTo:this.route});
    this.isadmintoken=null;
  }
}
