import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-leftpanel',
  templateUrl: './leftpanel.component.html',
  styleUrls: ['./leftpanel.component.scss']
})
export class LeftpanelComponent implements OnInit {
  year:string="year";
  launch:string="launch";
  land:string="land";
  years:any= ['2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021'];
  successLaunch=['true','false'];
  successLand=['true','false']
  constructor(private _router:Router) { }
  obj:any = {
    year:'',
    land:'',
    launch:''
  }
  ngOnInit(): void {
  }

  getClickData(data:any){
       if(data['year']){
      this.obj.year = data.year
    } else if (data['land']){
     this.obj.land = data.land
    } else if (data['launch']){
      this.obj.launch = data.launch
     }
    console.log(this.obj);
    this._router.navigate(['/filteredData'],{queryParams:this.obj})
  }
}
