import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutPage } from './about.page';
import { Title } from '@angular/platform-browser';
import { Platform } from '@ionic/angular';


describe('AboutPage', () => {
  let component: AboutPage;
  let fixture: ComponentFixture<AboutPage>;
  

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
