import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonCol, IonRow, IonButton, IonImg, IonText, IonCard, IonCardHeader, IonCardContent, IonCardTitle} from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonGrid, IonCol, IonRow, IonButton, IonImg, IonText,IonCard, IonCardHeader, IonCardContent, IonCardTitle]
})
export class LibraryPage implements OnInit {

  @ViewChild('strengthCard', { read: ElementRef }) strengthCard: ElementRef;
  @ViewChild('cardiovascularCard', { read: ElementRef }) cardiovascularCard: ElementRef;
  @ViewChild('flexibilityCard', { read: ElementRef }) flexibilityCard: ElementRef;

  private strengthAnimation: Animation;
  private cardiovascularAnimation: Animation;
  private flexibilityAnimation: Animation;


  constructor(private router: Router, private animationCtrl: AnimationController) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.strengthAnimation = this.animationCtrl
      .create()
      .addElement(this.strengthCard.nativeElement)
      .fill('none')
      .duration(500)
      .keyframes([
        { offset: 0, transform: 'scale(1) rotate(0)' },
        { offset: 0.5, transform: 'scale(1.1) rotate(0)' },
        { offset: 1, transform: 'scale(1) rotate(0)' },
      ]);

      this.cardiovascularAnimation = this.animationCtrl
      .create()
      .addElement(this.cardiovascularCard.nativeElement)
      .fill('none')
      .duration(500)
      .keyframes([
        { offset: 0, transform: 'scale(1) rotate(0)' },
        { offset: 0.5, transform: 'scale(1.1) rotate(0)' },
        { offset: 1, transform: 'scale(1) rotate(0)' },
      ]);

      this.flexibilityAnimation = this.animationCtrl
      .create()
      .addElement(this.flexibilityCard.nativeElement)
      .fill('none')
      .duration(500)
      .keyframes([
        { offset: 0, transform: 'scale(1) rotate(0)' },
        { offset: 0.5, transform: 'scale(1.1) rotate(0)' },
        { offset: 1, transform: 'scale(1) rotate(0)' },
      ]);

    this.play();
  }

  async play() {
    await this.strengthAnimation.play();
    await this.cardiovascularAnimation.play();
    await this.flexibilityAnimation.play();
  }

  navigateToStrength() {
    this.router.navigate(['/library/strength']);
  }

   navigateToCardio() {
    this.router.navigate(['/library/cardiovascular']);
  }

  navigateToFlexibility() {
    this.router.navigate(['/library/flexibility']); 
  }

  navigateWorkoutList(type: any) {
    this.router.navigate(['/library/list'], { state: { type } });
  }

}
