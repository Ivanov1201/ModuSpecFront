import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartguageComponent } from './smartguage.component';

describe('SmartguageComponent', () => {
  let component: SmartguageComponent;
  let fixture: ComponentFixture<SmartguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartguageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
