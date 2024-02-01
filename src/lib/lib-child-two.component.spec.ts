import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibChildTwoComponent } from './lib-child-two.component';

describe('LibChildTwoComponent', () => {
  let component: LibChildTwoComponent;
  let fixture: ComponentFixture<LibChildTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibChildTwoComponent]
    });
    fixture = TestBed.createComponent(LibChildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
