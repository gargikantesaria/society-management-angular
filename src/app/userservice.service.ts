import { Injectable } from "@angular/core";

@Injectable()
export class userservice{

     userid:String;
     vehicleid:String;
     isadmin;
    getuserid(id)
    {
        this.userid=id;
    }

    senduserid()
    {
        return this.userid;
    }

    getvehicleid(id)
    {
        this.vehicleid=id;
    }

    sendvehicleid()
    {
        return this.vehicleid;
    }

    // getadmintoken(isadmintoken)
    // {
    //     this.isadmin=isadmintoken;
    // }

    // sendadmintoken()
    // {
    //     return this.isadmin;
    // }
}
