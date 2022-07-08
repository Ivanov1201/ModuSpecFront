import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadbacksStatusComponent } from './readbacks-status.component';

describe('ReadbacksStatusComponent', () => {
  let component: ReadbacksStatusComponent;
  let fixture: ComponentFixture<ReadbacksStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadbacksStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadbacksStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
