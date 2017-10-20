import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EricBComponent } from './EricB.component';

describe('EricBComponent', () => {
  let component: EricBComponent;
  let fixture: ComponentFixture<EricBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EricBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EricBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});