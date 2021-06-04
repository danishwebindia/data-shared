import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
@Input() val:any;
@Input() param:any;
@Output() valueChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  getlbl(data:any,val:any){

    this.valueChange.emit({[val]:data})
  }

}
