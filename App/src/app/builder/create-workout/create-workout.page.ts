import { Component, OnInit, ElementRef, ViewChildren, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonLabel, IonItem, IonGrid, IonCol, IonRow, IonButton, IonImg, IonText, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonListHeader, IonSelectOption, IonItemDivider, IonItemGroup, IonIcon, IonThumbnail, ModalController} from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SaveWorkoutComponent } from 'src/app/components/save-workout/save-workout.component';
import { Animation, AnimationController } from '@ionic/angular';

const MUSCLE_GROUP_IDS = {
  BICEPS: 1,
  TRICEPS: 2,
  QUADRICEPS: 3,
  HAMSTRINGS: 4,
  GLUTES: 5,
  CHEST: 6,
  BACK: 7,
  SHOULDERS: 8,
  ABS: 9
};


@Component({
  selector: 'app-create-workout',
  templateUrl: './create-workout.page.html',
  styleUrls: ['./create-workout.page.scss'],
  standalone: true,
  imports: [SaveWorkoutComponent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonLabel, IonItem, IonGrid, IonCol, IonRow, IonButton, IonImg, IonText, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonListHeader, IonThumbnail, IonSelectOption, IonItemDivider, IonIcon, IonItemGroup]

})
export class CreateWorkoutPage implements OnInit {
  availableWorkouts: { [key: number]: any[] } = {};
  selectedWorkouts: any[] = [];
  selectedWorkout: any;
  expandedGroups: number[] = [];
  currentGroup: number;

  blobId = '1237078231554580480';
  
  @ViewChild('muscleDropdown', { read: ElementRef }) firstCard: ElementRef;

  private animation: Animation;

  constructor(private http: HttpClient, private router: Router, private modalController: ModalController, private animationCtrl: AnimationController) {
    this.currentGroup = 0;
  }

  ngOnInit() {
    this.getData();
    
  }

  ngAfterViewInit() {
    this.animation = this.animationCtrl
    .create()
    .addElement(this.firstCard.nativeElement)
    .duration(500)
    .fromTo('opacity', '0.3', '1');
    this.animation.play();
  }

  getData() {
    const url = `https://jsonblob.com/api/jsonBlob/${this.blobId}`;
    this.http.get<any>(url).subscribe(
      (data: any) => {
      Object.values(MUSCLE_GROUP_IDS).forEach(id => {
        this.availableWorkouts[id] = data.workouts.strength.filter((workout: any) => workout.muscleGroupId === id);
      });
    });
  }

  
toggleGroup(group: number) {
  if (this.isGroupShown(group)) {
    this.currentGroup = 0;
  } else {
    this.currentGroup = group;
  }
}

isGroupShown(group: number): boolean {
  return this.currentGroup === group;
}

  addWorkout(workout: any) {
    
    if (!this.selectedWorkouts.find(w => w.id === workout.id)) {
      this.selectedWorkouts.push(workout);
    }
  }

  removeWorkout(workout: any) {
    this.selectedWorkouts = this.selectedWorkouts.filter(w => w.id !== workout.id);
  }


  exploreWorkout(workout: any) {
    this.router.navigate(['/library/details'], { state: { workout } });
  }

  getMuscleGroupName(muscleGroupId: number): string {
    switch (muscleGroupId) {
      case MUSCLE_GROUP_IDS.BICEPS:
        return 'Biceps';
      case MUSCLE_GROUP_IDS.TRICEPS:
        return 'Triceps';
      case MUSCLE_GROUP_IDS.QUADRICEPS:
        return 'Quadriceps';
      case MUSCLE_GROUP_IDS.HAMSTRINGS:
        return 'Hamstrings';
      case MUSCLE_GROUP_IDS.GLUTES:
        return 'Glutes';
      case MUSCLE_GROUP_IDS.CHEST:
        return 'Chest';
      case MUSCLE_GROUP_IDS.BACK:
        return 'Back';
      case MUSCLE_GROUP_IDS.SHOULDERS:
        return 'Shoulders';
      case MUSCLE_GROUP_IDS.ABS:
        return 'Abs';
      default:
        return 'Unknown';
    }
  }

  getMuscleGroupIcon(muscleGroupId: number): string {
    switch (muscleGroupId) {
      case MUSCLE_GROUP_IDS.BICEPS:
        return 'assets/images/pages/builder/bicep.png';
        case MUSCLE_GROUP_IDS.TRICEPS:
          return 'assets/images/pages/builder/tricep.png';
        case MUSCLE_GROUP_IDS.QUADRICEPS:
          return 'assets/images/pages/builder/quads.png';
        case MUSCLE_GROUP_IDS.HAMSTRINGS:
          return 'assets/images/pages/builder/hamstring.png';
        case MUSCLE_GROUP_IDS.GLUTES:
          return 'assets/images/pages/builder/glutes.png';
        case MUSCLE_GROUP_IDS.CHEST:
          return 'assets/images/pages/builder/chest.png';
        case MUSCLE_GROUP_IDS.BACK:
          return 'assets/images/pages/builder/back.png';
        case MUSCLE_GROUP_IDS.SHOULDERS:
          return 'assets/images/pages/builder/shoulder.png';
        case MUSCLE_GROUP_IDS.ABS:
          return 'assets/images/pages/builder/abs.png';
      default:
        return 'assets/images/pages/builder/abs.png';
    }
  }


  async saveWorkout() {
    const modal = await this.modalController.create({
      component: SaveWorkoutComponent,
      componentProps: {
        selectedWorkouts: this.selectedWorkouts
      }
    });
    return await modal.present();
  }  
  
  
}
