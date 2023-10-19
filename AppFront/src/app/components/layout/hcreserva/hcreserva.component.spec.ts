import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcreservaComponent } from './hcreserva.component';

describe('HcreservaComponent', () => {
  let component: HcreservaComponent;
  let fixture: ComponentFixture<HcreservaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HcreservaComponent]
    });
    fixture = TestBed.createComponent(HcreservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
