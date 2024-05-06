import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonLabel, IonItem, IonGrid, IonCol, IonRow, IonButton, IonImg, IonText, IonCard, IonCardHeader, IonCardContent, IonCardTitle} from '@ionic/angular/standalone';
import { Animation, AnimationController } from '@ionic/angular';


const INTRODUCTION_STAGE = 1;
const EXPLORE_OPTIONS_STAGE = 2;
const LOOSE_BODY_FAT_STAGE = 3;
const GAIN_MUSCLE_STAGE = 4;
const BODY_RECOMP_STAGE = 5;
const FINAL_STAGE = 6;

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



  introductionTexts: string[] = [
    "Welcome, im Michael! Your Personal Nutritionist.",
    "Nutrition is a big part of our health so it is important we do things right!",
    "While there is a ton of ways to go about acheiving your goals, we will explore what main components of your diet will allow you to reach your goals.",
    "Lets begin!"
  ];

  explorOptionsStage: string[] = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum ligula ut ligula feugiat, nec ultrices mauris suscipit. Nulla posuere odio velit, quis eleifend dui venenatis quis.",
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed hendrerit velit quis dui consequat, sit amet sagittis orci mattis."
  ];
  
  looseBodyFatStage: string[] = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum ligula ut ligula feugiat, nec ultrices mauris suscipit. Nulla posuere odio velit, quis eleifend dui venenatis quis.",
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed hendrerit velit quis dui consequat, sit amet sagittis orci mattis.",
    "Proin non lacus bibendum, semper mauris ac, euismod libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ut tellus ac orci fermentum placerat.",
    "Cras ut semper urna. Vestibulum auctor vestibulum bibendum. Integer tincidunt vehicula felis, ut vehicula urna posuere nec. Vivamus condimentum ligula sed dictum elementum.",
    "Donec ullamcorper, purus a vestibulum rhoncus, purus nunc malesuada magna, sit amet eleifend velit dolor vitae nisi."
  ];
  
  gainMuscleStage: string[] = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum ligula ut ligula feugiat, nec ultrices mauris suscipit. Nulla posuere odio velit, quis eleifend dui venenatis quis.",
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed hendrerit velit quis dui consequat, sit amet sagittis orci mattis.",
    "Proin non lacus bibendum, semper mauris ac, euismod libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ut tellus ac orci fermentum placerat.",
    "Cras ut semper urna. Vestibulum auctor vestibulum bibendum. Integer tincidunt vehicula felis, ut vehicula urna posuere nec. Vivamus condimentum ligula sed dictum elementum.",
    "Donec ullamcorper, purus a vestibulum rhoncus, purus nunc malesuada magna, sit amet eleifend velit dolor vitae nisi."
  ];
  
  bodyRecompStage: string[] = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum ligula ut ligula feugiat, nec ultrices mauris suscipit. Nulla posuere odio velit, quis eleifend dui venenatis quis.",
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed hendrerit velit quis dui consequat, sit amet sagittis orci mattis.",
    "Proin non lacus bibendum, semper mauris ac, euismod libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ut tellus ac orci fermentum placerat.",
    "Cras ut semper urna. Vestibulum auctor vestibulum bibendum. Integer tincidunt vehicula felis, ut vehicula urna posuere nec. Vivamus condimentum ligula sed dictum elementum.",
    "Donec ullamcorper, purus a vestibulum rhoncus, purus nunc malesuada magna, sit amet eleifend velit dolor vitae nisi."
  ];
  
  finalStage: string[] = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum ligula ut ligula feugiat, nec ultrices mauris suscipit. Nulla posuere odio velit, quis eleifend dui venenatis quis."
  ];
  

  currentText: string = '';
  headerText: string = '';

  currentStage: number = 1;
  typingSpeed: number = 10; 
  currentIndex: number = 0;
  hideIntroduction: boolean = false;
  hideOptionsGrid: boolean = true;
  hideLooseFatCard: boolean = true;
  hideGainMuscleCard: boolean = true;
  hideBodyRecomp: boolean = true;
  hideHeader: boolean = false;
  hideFinalStage: boolean = true;

  constructor(private animationCtrl: AnimationController) { }

  ngOnInit() {

    this.startTyping(INTRODUCTION_STAGE);
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

  updateStage(stage: number){
    this.currentStage = stage;
    this.currentIndex = 0;
    switch (stage) {
      case INTRODUCTION_STAGE:

        break;
      case EXPLORE_OPTIONS_STAGE:
        this.hideIntroduction = true; 
      this.hideOptionsGrid = false;
      this.hideLooseFatCard = false;
      this.hideBodyRecomp = false;
      this.hideGainMuscleCard = false;
      

        break;
      case LOOSE_BODY_FAT_STAGE:
       this.hideBodyRecomp = true;
       this.hideGainMuscleCard = true;
       this.hideHeader = true;
     
        break;
      case GAIN_MUSCLE_STAGE:
        this.hideLooseFatCard = true;
        this.hideGainMuscleCard = false;
        break;

        case BODY_RECOMP_STAGE:
          this.hideGainMuscleCard = true;
          this.hideBodyRecomp = false;
          break;
          case FINAL_STAGE:
            this.hideBodyRecomp = true;
            this.hideOptionsGrid= true;
            this.hideFinalStage = false;
            break;
    }
    
    if(this.currentStage < FINAL_STAGE){
      this.currentText = '';
    }

    
     
      
      setTimeout(() => {
        this.play(); 
        this.startTyping(stage);
         }, 2000);
  }

  startTyping(stage: number) {
    let textToType: string[] = [];
    switch (stage) {
      case INTRODUCTION_STAGE:
        textToType = this.introductionTexts;
        break;
      case EXPLORE_OPTIONS_STAGE:
        textToType = this.explorOptionsStage;
        break;
      case LOOSE_BODY_FAT_STAGE:
        textToType = this.looseBodyFatStage;
        break;

      case GAIN_MUSCLE_STAGE:
        textToType = this.gainMuscleStage;
        break;
        case BODY_RECOMP_STAGE:
          textToType = this.bodyRecompStage;
          break;
      case FINAL_STAGE:
        textToType = this.finalStage;
        break;
    }

        
        if (textToType && this.currentIndex < textToType.length) {
          this.typeText(textToType[this.currentIndex], 0, textToType);
        } else {
         
          this.updateStage(stage + 1);
         
        }
  
}

skipIntroduction(){
  this.updateStage(EXPLORE_OPTIONS_STAGE);
}

restart(){
  location.reload();
}

typeText(text: string, index: number, array: string[]) {
  if (index <= text.length) {
    this.currentText = text.slice(0, index);
    setTimeout(() => {
      this.typeText(text, index + 1, array);
    }, this.typingSpeed);
  } else {
    setTimeout(() => {
      this.currentIndex++;
       this.startTyping(this.currentStage);
    }, 1000);
  }
}
}
  


