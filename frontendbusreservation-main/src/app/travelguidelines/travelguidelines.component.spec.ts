import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelguidelinesComponent } from './travelguidelines.component';

describe('TravelguidelinesComponent', () => {
  let component: TravelguidelinesComponent;
  let fixture: ComponentFixture<TravelguidelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelguidelinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelguidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
