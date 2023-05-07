import { ComponentFixture, TestBed } from '@angular/core/testing';

import { orderComponent } from './order.component';

describe('orderComponent', () => {
  let component: orderComponent;
  let fixture: ComponentFixture<orderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ orderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(orderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
