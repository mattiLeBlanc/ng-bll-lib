import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BllLibComponent } from './bll-lib.component';

describe('BllLibComponent', () => {
  let component: BllLibComponent;
  let fixture: ComponentFixture<BllLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BllLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BllLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
