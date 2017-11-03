import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayfeedwallComponent } from './displayfeedwall.component';

describe('DisplayfeedwallComponent', () => {
  let component: DisplayfeedwallComponent;
  let fixture: ComponentFixture<DisplayfeedwallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayfeedwallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayfeedwallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
