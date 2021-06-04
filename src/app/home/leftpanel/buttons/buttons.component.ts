import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
@Input() getButtonLbl:any ;
@Input() param:any;
@Output() sendValue = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  getValue(data:any){
    this.sendValue.emit(data);

  }
}
