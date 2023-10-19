import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VreservaComponent } from './vreserva.component';

describe('VreservaComponent', () => {
  let component: VreservaComponent;
  let fixture: ComponentFixture<VreservaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VreservaComponent]
    });
    fixture = TestBed.createComponent(VreservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
