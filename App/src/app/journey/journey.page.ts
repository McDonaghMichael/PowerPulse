import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonLabel, IonItem, IonGrid, IonCol, IonRow, IonButton, IonImg, IonText, IonCard, IonCardHeader, IonCardContent, IonCardTitle } from '@ionic/angular/standalone';
import { Animation, AnimationController } from '@ionic/angular';

/**
 * Here are some basic const variables to mark each stage of the journey
 */
const INTRODUCTION_STAGE = 1;
const EXPLORE_OPTIONS_STAGE = 2;
const LOOSE_BODY_FAT_STAGE = 3;
const GAIN_MUSCLE_STAGE = 4;
const BODY_RECOMP_STAGE = 5;
const FINAL_STAGE = 6;

@Component({
  selector: 'app-journey',
  templateUrl: './journey.page.html',
  styleUrls: ['./journey.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonLabel, IonItem, IonGrid, IonCol, IonRow, IonButton, IonImg, IonText, IonCard, IonCardHeader, IonCardContent, IonCardTitle]

})
export class JourneyPage implements OnInit {

  /**
   * The following code simply gets the element from my journey.page.html, so
   * it will get the looseBodyFatCard element as it has #looseBodyFatCard beside it
   */
  @ViewChild('looseBodyFatCard', { read: ElementRef }) looseBodyFatCard: ElementRef;
  @ViewChild('gainMuscleCard', { read: ElementRef }) gainMuscleCard: ElementRef;
  @ViewChild('bodyRecompCard', { read: ElementRef }) bodyRecompCard: ElementRef;

  private bodyFatAnimation: Animation;
  private gainMuscleAnimation: Animation;
  private recompAnimation: Animation;


  /**
   * Listed below are each of the messages that will appear on the screen
   * depending on what stage the page is in, so if its on the introduction stage 
   * it will show the "introductionTexts" messages
   */

  introductionTexts: string[] = [
    "Welcome to the beginning of your fitness journey!",
    "Here we will explore the various aspects of fitness, getting into shape and alot more.",
    "While there is no exact aproach to fitness, there are some funadmental aspects that are agreed upon, which we will be focusing on primarily",
    "Lets begin!"
  ];

  explorOptionsStage: string[] = [
    "There are 3 main concepts in fitness, these are what most people based their journey around.",
    "The aspects are loosing fat, gaining muscle, and both!",
    "We will explore each of these aspects in depth."
  ];

  looseBodyFatStage: string[] = [
    "The first aspect as I mentioned was loosing body fat. Alot of people say they wish to 'loose weight' when in reality they wish to loose body fat.",
    "As our bodies use energy, which burns calories, the only way to shred the body fat is to be in a calorie deficit. This is done by eating less calories than required to maintain your current body weight"
  ];

  gainMuscleStage: string[] = [
    "The second aspect was Gaining Muscle. It is one of the most important parts of fitness as it is what the majority of people wish to-do.",
    "To gain muscle, focus on resistance training exercises and ensure you're consuming enough protein to support muscle growth."
  ];

  bodyRecompStage: string[] = [
    "The final aspect was Body Recomposition, which is when you loose body fat while simultaneously gaining muscle.",
    "For body recomposition, combine strength training with a balanced high protein diet to simultaneously build muscle and reduce body fat"
  ];

  finalStage: string[] = [
    "Thanks for listening!"
  ];


  // Sets the default messages to ''
  currentText: string = '';
  headerText: string = '';

  // Current stage, it starts with the introduction (1)
  currentStage: number = 1;

  /**
   * This is simply the current index of the message array, so the
   * program knows which string in the array to currently display
   */
  currentIndex: number = 0;

  /**
   * Depending on what stage it currently is, the following
   * variables will get changed as to hide or show certain
   * cards in the journey.page.html
   */
  hideIntroduction: boolean = false;
  hideOptionsGrid: boolean = true;
  hideLooseFatCard: boolean = true;
  hideGainMuscleCard: boolean = true;
  hideBodyRecomp: boolean = true;
  hideHeader: boolean = false;
  hideFinalStage: boolean = true;

  constructor(private animationCtrl: AnimationController) { }

  ngOnInit() {

    // When the page is loaded, start typing the messages
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

  /**
   * Whenever the stage has to be updated the following method gets called.
   * This will reset the currentIndex so it will start at the start of the message
   * array, as well as it will hide/show whatever cards for the page that are needed
   */
  updateStage(stage: number) {
    this.currentStage = stage;
    this.currentIndex = 0;
    switch (stage) {
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
        this.hideOptionsGrid = true;
        this.hideFinalStage = false;
        break;
    }

    if (this.currentStage < FINAL_STAGE) {
      this.currentText = '';
    }

    // Here is just a delay so the user can read the messages
    setTimeout(() => {
      this.play();
      this.startTyping(stage);
    }, 2000);
  }

  startTyping(stage: number) {
    this.currentText = '';
    let textToType: string[] = [];

    /**
     * Depending on what stage we are currently in, the following
     * will check and then assign the message array to the textToType
     * variable array, which is then passed and the message is typed.
     */
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

    /**
     * This code will type the current message if there is one, if there isnt
     * it will begin to update the stage to the next
     */
    if (textToType && this.currentIndex < textToType.length) {
      this.typeText(textToType[this.currentIndex], this.currentIndex, textToType);
    } else {
      this.updateStage(stage + 1);
    }

  }

  restart() {
    location.reload();
  }

  typeText(text: string, index: number, array: string[]) {
    this.currentText = text;
    if (this.currentIndex < array.length - 1) {
      setTimeout(() => {
        this.currentIndex++;
        this.typeText(array[this.currentIndex], this.currentIndex, array);
      }, text.length * 25);
    } else {
      setTimeout(() => {
        this.updateStage(this.currentStage + 1);
        this.currentText = '';
      }, text.length * 25);
      
    }
  }


}



