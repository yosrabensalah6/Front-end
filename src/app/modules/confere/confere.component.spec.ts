import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfereComponent } from './confere.component';

describe('ConfereComponent', () => {
  let component: ConfereComponent;
  let fixture: ComponentFixture<ConfereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
