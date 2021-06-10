import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
@Input() val:any;
@Input() param:any;
@Input() idx:any;
@Output() getClick = new EventEmitter();


  constructor(private _router:Router) { }
  objYear:any={year:''}
  objLand:any={land:''}
  objLaunch:any={launch:''}
  ngOnInit(): void {
  }

  getlbl(data:any,val:string,idx:any){
    this.getClick.emit({[val]:data})
  }



}
