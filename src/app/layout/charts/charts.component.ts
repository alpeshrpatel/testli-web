import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import {BarChartsComponent} from '../barcharts/barcharts.component';
import {LineChartsComponent} from '../linecharts/linecharts.component';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  @ViewChild(BarChartsComponent) barChartsComponent;
  @ViewChild(LineChartsComponent) lineChartsComponent;
  constructor() { }

  ngOnInit() {
    console.log("Inside ChaertsComponents");
  }

}
