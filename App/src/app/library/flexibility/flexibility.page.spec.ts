import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexibilityPage } from './flexibility.page';

describe('FlexibilityPage', () => {
  let component: FlexibilityPage;
  let fixture: ComponentFixture<FlexibilityPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexibilityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
