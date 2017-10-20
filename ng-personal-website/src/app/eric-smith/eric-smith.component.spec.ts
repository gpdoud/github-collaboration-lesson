import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EricSmithComponent } from './eric-smith.component';

describe('EricSmithComponent', () => {
  let component: EricSmithComponent;
  let fixture: ComponentFixture<EricSmithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EricSmithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EricSmithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
