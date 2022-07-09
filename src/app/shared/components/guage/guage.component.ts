
import '@grapecity/wijmo.styles/wijmo.css';


import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'customguage',
    templateUrl: './guage.component.html',
    styleUrls: ['./guage.component.scss'],
})
export class GuageComponent implements OnInit  {
    @Input() color = 'purple';
    @Input() max = 10000;
    @Input() value = 0;
    ngOnInit() {
       
       
      }
    // state
    startAngle = -45;
    sweepAngle = 270;
    tickSpacing = 10000;
    showText = 'None';
    needleShape = 'Pointer';
    needleLength = 'Inner';

}



