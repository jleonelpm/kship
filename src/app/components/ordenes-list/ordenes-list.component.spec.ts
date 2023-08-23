import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesListComponent } from './ordenes-list.component';

describe('OrdenesListComponent', () => {
  let component: OrdenesListComponent;
  let fixture: ComponentFixture<OrdenesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdenesListComponent]
    });
    fixture = TestBed.createComponent(OrdenesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
