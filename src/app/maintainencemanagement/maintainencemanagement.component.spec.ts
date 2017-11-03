import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainencemanagementComponent } from './maintainencemanagement.component';

describe('MaintainencemanagementComponent', () => {
  let component: MaintainencemanagementComponent;
  let fixture: ComponentFixture<MaintainencemanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainencemanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainencemanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
