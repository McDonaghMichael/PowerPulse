import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StrengthTrainingPage } from './strength-training.page';

describe('StrengthTrainingPage', () => {
  let component: StrengthTrainingPage;
  let fixture: ComponentFixture<StrengthTrainingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StrengthTrainingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
