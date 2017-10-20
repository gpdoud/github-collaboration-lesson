import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SueAnnComponent } from './sue-ann.component';

describe('SueAnnComponent', () => {
  let component: SueAnnComponent;
  let fixture: ComponentFixture<SueAnnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SueAnnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SueAnnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
