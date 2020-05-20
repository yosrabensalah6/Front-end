import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOrdonnanceComponent } from './details-ordonnance.component';

describe('DetailsOrdonnanceComponent', () => {
  let component: DetailsOrdonnanceComponent;
  let fixture: ComponentFixture<DetailsOrdonnanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsOrdonnanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsOrdonnanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
