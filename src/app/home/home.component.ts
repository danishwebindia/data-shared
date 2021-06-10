import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
title:string = 'SpaceX Launch Programs';
developerName:string = 'Danish Khan';
  constructor() { }

  ngOnInit(): void {

  }


}
