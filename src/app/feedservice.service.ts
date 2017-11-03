import { Injectable } from "@angular/core";

@Injectable()
export class feedwallservice{

     userid:String;
     feedid:String;
     
    getuserid(id)
    {
        this.userid=id;
    }

    senduserid()
    {
        return this.userid;
    }

    getfeedid(id)
    {
        this.feedid=id;
    }

    sendfeedid()
    {
        return this.feedid;
    }
   
}
