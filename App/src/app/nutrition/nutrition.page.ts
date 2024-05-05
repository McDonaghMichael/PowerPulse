import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonLabel, IonItem, IonGrid, IonCol, IonRow, IonButton, IonImg, IonText, IonCard, IonCardHeader, IonCardContent, IonCardTitle} from '@ionic/angular/standalone';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.page.html',
  styleUrls: ['./nutrition.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonLabel, IonItem, IonGrid, IonCol, IonRow, IonButton, IonImg, IonText, IonCard, IonCardHeader, IonCardContent, IonCardTitle]

})
export class NutritionPage implements OnInit {

  @ViewChild('looseBodyFatCard', { read: ElementRef }) looseBodyFatCard: ElementRef;
  @ViewChild('gainMuscleCard', { read: ElementRef }) gainMuscleCard: ElementRef;
  @ViewChild('bodyRecompCard', { read: ElementRef }) bodyRecompCard: ElementRef;

  private bodyFatAnimation: Animation;
  private gainMuscleAnimation: Animation;
  private recompAnimation: Animation;

  texts: string[] = [
    "Welcome, im Michael! Your Personal Nutritionist.",
    "Nutrition is a big part of our health so it is important we do things right!",
    "While there is a ton of ways to go about your diet, it is important you find a way that works for you.",
    "This is where I am here to help as we go on a journey of finding what foods work best for your journey",
    "Lets begin!"
  ];
  currentText: string = '';
  headerText: string = '';

  typingSpeed: number = 10; 
  currentIndex: number = 0;
  hideIntroduction: boolean = false;
  hideJourney: boolean = true;

  constructor(private animationCtrl: AnimationController) { }

  ngOnInit() {

    this.startTyping();
    this.bodyFatAnimation = this.animationCtrl
      .create()
      .addElement(this.looseBodyFatCard.nativeElement)
      .fill('none')
      .duration(500)
      .keyframes([
        { offset: 0, transform: 'scale(1) rotate(0)' },
        { offset: 0.5, transform: 'scale(1.1) rotate(0)' },
        { offset: 1, transform: 'scale(1) rotate(0)' },
      ]);

      this.gainMuscleAnimation = this.animationCtrl
      .create()
      .addElement(this.gainMuscleCard.nativeElement)
      .fill('none')
      .duration(500)
      .keyframes([
        { offset: 0, transform: 'scale(1) rotate(0)' },
        { offset: 0.5, transform: 'scale(1.1) rotate(0)' },
        { offset: 1, transform: 'scale(1) rotate(0)' },
      ]);

      this.recompAnimation = this.animationCtrl
      .create()
      .addElement(this.bodyRecompCard.nativeElement)
      .fill('none')
      .duration(500)
      .keyframes([
        { offset: 0, transform: 'scale(1) rotate(0)' },
        { offset: 0.5, transform: 'scale(1.1) rotate(0)' },
        { offset: 1, transform: 'scale(1) rotate(0)' },
      ]);
  }



  async play() {
    await this.bodyFatAnimation.play();
    await this.gainMuscleAnimation.play();
    await this.recompAnimation.play();
  }


  startTyping() {
    if (this.currentIndex < this.texts.length) {
      const textToType = this.texts[this.currentIndex];
      this.typeText(textToType, 0);
    } else {
      this.hideIntroduction = true; 
      this.hideJourney = false;
      setTimeout(() => {
        this.play(); 
        this.typeSentence("It is important in fitness to have a goal in mind. What is it that you wish to acheive? List below are your three options. Click on each to learn about more", 0);
      }, 2000);
    }
  }
  
  typeText(text: string, index: number) {
    if (index <= text.length) {
      this.currentText = text.slice(0, index);
      setTimeout(() => {
        this.typeText(text, index + 1);
      }, this.typingSpeed);
    } else {
      setTimeout(() => {
        this.currentIndex++;
        this.startTyping();
      }, 1000);
    }
  }

  typeSentence(text: string, index: number) {
    if (index <= text.length) {
      this.headerText = text.slice(0, index); 
      setTimeout(() => {
        this.typeSentence(text, index + 1);
      }, this.typingSpeed);
    }
  }
  
  

}
