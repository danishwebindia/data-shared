import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
title:string = 'SpaceX Launch Programs Danish';
data:any;
errorMessage:string=''
  constructor(private _dataService : DataService) { }

  ngOnInit(): void {
    this.initGetData(null)
  }

  initGetData(val:any){
    this.errorMessage=''
    this._dataService.getData(val).subscribe((res:any) => {
      console.log(res);

     if(res.length!==0){
      this.data = res;
     } else {
      this.errorMessage = 'No Data Found!'
     }


    })
  }

  getFilterVal(filterVal:any){
    this.initGetData(filterVal)
  }
}
