import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-readbacks-status',
  templateUrl: './readbacks-status.component.html',
  styleUrls: ['./readbacks-status.component.scss']
})
export class ReadbacksStatusComponent implements OnInit {
  @Input() status: any;
  constructor() { }

  ngOnInit(): void {
    
  }

}
