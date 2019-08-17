import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupQueryComponent } from './popup-query.component';

describe('TimeSelectorComponent', () => {
  let component: PopupQueryComponent;
  let fixture: ComponentFixture<PopupQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
