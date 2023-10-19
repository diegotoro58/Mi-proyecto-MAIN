import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachesListComponent } from './beaches-list.component';

describe('BeachesListComponent', () => {
  let component: BeachesListComponent;
  let fixture: ComponentFixture<BeachesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeachesListComponent]
    });
    fixture = TestBed.createComponent(BeachesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
