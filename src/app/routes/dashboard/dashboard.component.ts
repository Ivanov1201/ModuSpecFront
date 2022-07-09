import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  NgZone,
  ChangeDetectorRef
} from '@angular/core';
import '@grapecity/wijmo.styles/wijmo.css';
import { SettingsService } from '@core';
import { Subscription } from 'rxjs';

import { DashboardService } from './dashboard.srevice';

import { interval } from 'rxjs';
import { RadialGauge } from '@grapecity/wijmo.gauge';
import { WjGaugeModule } from '@grapecity/wijmo.angular2.gauge';
const source = interval(100);
const gauge_source = interval(100);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
    `
      .mat-raised-button {
        margin-right: 8px;
        margin-top: 8px;
      }
    `,
  ],
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DashboardService],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.dashboardSrv.getData();

  messages = this.dashboardSrv.getMessages();

  charts = this.dashboardSrv.getCharts();
  chart1: any;
  chart2: any;

  stats = this.dashboardSrv.getStats();

  notifySubscription!: Subscription;
  readback_status_list: any[] = [
    {title: 'Conduit', white: 5000, green: 5000} ,
    {title: 'Pod Supply', white: 5000, green: 5000},
    {title: 'Pod Pilot', white: 5000, green: 5000},
    {title: 'Manifold', white: 5000, green: 5000},
    {title: 'Upper Annular', white: 5000, green: 5000},
    {title: 'Lower Annular', white: 5000, green: 5000},
    {title: 'Stack Accumulator', white: 5000, green: 5000},
    {title: 'LMRP Connector', white: 5000, green: 5000},
    {title: 'Wellhead Connector', white: 5000, green: 5000},
  ];
  gauge: any = [3, 38, 3, 38];
  
  constructor(
    private ngZone: NgZone,
    private dashboardSrv: DashboardService,
    private settings: SettingsService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  //gauge

  ngOnInit() {
    this.notifySubscription = this.settings.notify.subscribe(res => {
      console.log(res);
    });
    this.init_readback_status();
    console.log('lll');
    //gauge 
   
  }
  init_readback_status() {
    for (let i = 0; i < 9; i ++) {
      this.readback_status_list[i].white = Math.floor((Math.random() + 1) * 1500);
      this.readback_status_list[i].green = Math.floor((Math.random() + 1) * 1500);
    }
  }

  ngAfterViewInit() {
    // this.ngZone.runOutsideAngular(() => this.initChart());
    source.subscribe(val => {
      const index = Math.floor(Math.random()*1000) % 9;
      this.readback_status_list[index].green = Math.floor((Math.random() + 1) * 1500);
      this.changeDetectorRef.detectChanges();
    }); 

    gauge_source.subscribe(val => {
      const index = Math.floor(Math.random()*1000) % 2; // if index is 0, it's for LMRP Wellbore, or it's Lower Stack
      const pressOrTemp = Math.floor(Math.random()*1000) % 2; // if pressOrTemp is 0, it's pressure or it's temperature

      let value;
      if (!pressOrTemp) {
        this.gauge[index * 2 + pressOrTemp] += Math.floor(Math.random() * 100);
        if (this.gauge[index * 2 + pressOrTemp] > 10000) 
          this.gauge[index * 2 + pressOrTemp] = 10000 - Math.floor(Math.random() * 100);
      } else {
        this.gauge[index * 2 + pressOrTemp] = 35 + Math.floor(5 * Math.random());
      }
      this.changeDetectorRef.detectChanges();
    });
  }

  ngOnDestroy() {
    if (this.chart1) {
      this.chart1?.destroy();
    }
    if (this.chart2) {
      this.chart2?.destroy();
    }

    this.notifySubscription.unsubscribe();
  }

  initChart() {
    this.chart1 = new ApexCharts(document.querySelector('#chart1'), this.charts[0]);
    this.chart1?.render();
    this.chart2 = new ApexCharts(document.querySelector('#chart2'), this.charts[1]);
    this.chart2?.render();
  }
}
