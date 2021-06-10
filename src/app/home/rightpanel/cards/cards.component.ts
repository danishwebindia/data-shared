import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../../data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
cardsData:any;
errorMessage:string='';
isLoader:boolean=false;
param:any;
  constructor(private _route :ActivatedRoute, private dataService:DataService) { }

  ngOnInit(): void {
    this._route.queryParams.subscribe((res)=>{
      this.param= res;
      this.servicecall(this.param)
    })
  }

  servicecall(param:any){
    this.isLoader =true;
      this.errorMessage=''
      this.cardsData=[]
      this.dataService.getData(param).subscribe((res:any)=>{
        if(res.length!==0){
          this.cardsData = res;
         } else {
          this.errorMessage = 'No Data Found!'
         }
         this.isLoader =false;
      })
  }

}
