import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListuservehiclesComponent } from './listuservehicles.component';

describe('ListuservehiclesComponent', () => {
  let component: ListuservehiclesComponent;
  let fixture: ComponentFixture<ListuservehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListuservehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListuservehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
