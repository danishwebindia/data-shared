import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-leftpanel',
  templateUrl: './leftpanel.component.html',
  styleUrls: ['./leftpanel.component.scss']
})
export class LeftpanelComponent implements OnInit {
  @Output() sendToHome = new EventEmitter();
  year:string="year";
  launch:string="launch";
  land:string="land";
  years:any= ['2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021'];
  successLaunch=['true','false'];
  successLand=['true','false']
  constructor() { }

  ngOnInit(): void {
  }

  getValue(data:any){
    this.sendToHome.emit(data)

  }

}
