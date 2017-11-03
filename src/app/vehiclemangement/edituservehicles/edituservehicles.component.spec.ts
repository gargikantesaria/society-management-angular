import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdituservehiclesComponent } from './edituservehicles.component';

describe('EdituservehiclesComponent', () => {
  let component: EdituservehiclesComponent;
  let fixture: ComponentFixture<EdituservehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdituservehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdituservehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
