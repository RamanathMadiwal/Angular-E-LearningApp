import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummytestComponent } from './dummytest.component';

describe('DummytestComponent', () => {
  let component: DummytestComponent;
  let fixture: ComponentFixture<DummytestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummytestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummytestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
