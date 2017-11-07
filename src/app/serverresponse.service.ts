import {Http,Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import { userservice } from './userservice.service';
import { feedwallservice } from './feedservice.service';


@Injectable()
export class serverresponse{

    
    constructor(private http:Http,private userservice:userservice,private feedwallservice:feedwallservice){}

    token;
    isadmintoken;
    
    
        storedata(data:any)
        {
            return this.http.post("http://localhost:3000/signup",data)    
        }

        gettoken()
        {
            this.token=window.localStorage.getItem('authtoken');
            return this.token;
        }
        getheaders()
        {
            return new Headers({'authtoken':this.gettoken()});
        }

        // getadmintoken()
        // {
        //     this.isadmintoken=window.localStorage.getItem('isadmintoken');
        //     return this.isadmintoken;
        // }

        // storeimgdata(imgdata:any)
        // {
        //     return this.http.post("http://localhost:3000/storeimage",imgdata)
        // }

        comparedata(data:any[])
        { 
            return this.http.post("http://localhost:3000/loginform",data)
        }
        getuserdata()
        {
            return this.http.get("http://localhost:3000/userdata",{headers:this.getheaders()})
        }

        storevehicledata(data:any[])
        {   
            return this.http.post("http://localhost:3000/addvehicleform",data,{headers:this.getheaders()})
        }

        getvehicledata()
        {
            return this.http.get("http://localhost:3000/listallvehicles",{headers:this.getheaders()});
        }

        getuservehicledata()
        {   
            return this.http.get("http://localhost:3000/listmyvehicles",{headers:this.getheaders()});
        }

        updatevehicledata(data:any[])
        {   var id=this.userservice.sendvehicleid();
            return this.http.put("http://localhost:3000/editmyvehicles/"+id,data,{headers:this.getheaders()})
        }

        deletevehicledata(data)
        {
            var vehicleid=data;
            return this.http.delete("http://localhost:3000/deletemyvehicles/"+vehicleid,{headers:this.getheaders()})
        }

        addfeedwalldata(data:any[])
        {
            return this.http.post("http://localhost:3000/addfeedform",data,{headers:this.getheaders()})
        }
        getfeedwalldata(data)
        {
            return this.http.get("http://localhost:3000/displayfeedform/"+data,{headers:this.getheaders()});
        }

        addcommentdata(data:any)
        { var id=this.feedwallservice.sendfeedid();
            return this.http.post("http://localhost:3000/addcommentform/"+id,data,{headers:this.getheaders()})
        }

        // displaycomments()
        // {
        //     return this.http.get("http://localhost:3000/displaycomments",{headers:this.getheaders()});
        // }

        addlikesdata(feedid)
        {   
            return this.http.get("http://localhost:3000/addlikes/"+feedid,{headers:this.getheaders()});
        }

        // getlikesdata(feedid)
        // {
        //     return this.http.get("http://localhost:3000/getlikesdata/"+feedid,{headers:this.getheaders()})
        // }

        findmaintainence(data)
        {   console.log(this.getheaders());
            return this.http.post("http://localhost:3000/findmaintainence",data,{headers:this.getheaders()});
        }
}