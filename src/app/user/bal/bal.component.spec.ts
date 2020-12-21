import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalComponent } from './bal.component';

describe('BalComponent', () => {
  let component: BalComponent;
  let fixture: ComponentFixture<BalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
