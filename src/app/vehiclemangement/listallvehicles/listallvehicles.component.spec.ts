import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListallvehiclesComponent } from './listallvehicles.component';

describe('ListallvehiclesComponent', () => {
  let component: ListallvehiclesComponent;
  let fixture: ComponentFixture<ListallvehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListallvehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListallvehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
