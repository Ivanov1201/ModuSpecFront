import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { PreloaderService } from '@core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(private preloader: PreloaderService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.preloader.hide();
  }
}
