import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'customtoggle',
  templateUrl: './customtoggle.component.html',
  styleUrls: ['./customtoggle.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CustomToggleComponent implements OnInit {
  @Input() color = 'green';
  @Input() method = 'extend';
  @Input() title = '';
  isChecked = false;
  ngOnInit() {
    this.isChecked = (this.method === 'retract') ? true : false;
    console.log(this.isChecked);
  }
}
