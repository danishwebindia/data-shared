import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-rightpanel',
  templateUrl: './rightpanel.component.html',
  styleUrls: ['./rightpanel.component.scss']
})
export class RightpanelComponent implements OnInit {

@Input() sendAPIData:any;
  constructor() { }

  ngOnInit(): void {



  }

}
