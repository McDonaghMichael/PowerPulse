import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewBlogPage } from './view-blog.page';

describe('ViewBlogPage', () => {
  let component: ViewBlogPage;
  let fixture: ComponentFixture<ViewBlogPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBlogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
