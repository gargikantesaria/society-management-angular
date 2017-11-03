import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclemangementComponent } from './vehiclemangement.component';

describe('VehiclemangementComponent', () => {
  let component: VehiclemangementComponent;
  let fixture: ComponentFixture<VehiclemangementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclemangementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclemangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
