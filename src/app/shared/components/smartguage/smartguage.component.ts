import { Component, Input, DoCheck } from '@angular/core';
import { Params } from './params';

@Component({
  selector: 'app-smartguage',
  templateUrl: './smartguage.component.html',
  styleUrls: ['./smartguage.component.css']
})
export class SmartguageComponent implements DoCheck {
  @Input() params!: Params;
  @Input() pointer = '';
  circle = 0;
  width = '80px';
  height = '80px';
  mainColor = 'rgb(74, 129, 238)';
  bgColor = 'rgba(255, 255, 255, 0.2)';
  constructor() { }

  ngDoCheck(): void {
    const value = Math.floor(260 * (this.params.value / (this.params.max - this.params.min) - 0.5));
    this.pointer = 'rotate(' + value + 'deg)';
    this.circle = 126 - 87 * (this.params.value / (this.params.max - this.params.min));

    if ( this.params.width ) this.width = this.params.width;
    if ( this.params.height ) this.height = this.params.height;
    if ( this.params.color ) this.mainColor = this.params.color;
    if ( this.params.bgcolor ) this.bgColor = this.params.bgcolor;
  }

  

}
