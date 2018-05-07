import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleShareComponent } from './simple-share.component';

describe('SimpleShareComponent', () => {
  let component: SimpleShareComponent;
  let fixture: ComponentFixture<SimpleShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
