import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectPresenterComponent } from './object-presenter.component';

describe('ObjectPresentorComponent', () => {
  let component: ObjectPresenterComponent;
  let fixture: ComponentFixture<ObjectPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
