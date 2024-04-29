import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibraryWorkoutListPage } from './library-workout-list.page';

describe('LibraryWorkoutListPage', () => {
  let component: LibraryWorkoutListPage;
  let fixture: ComponentFixture<LibraryWorkoutListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryWorkoutListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
