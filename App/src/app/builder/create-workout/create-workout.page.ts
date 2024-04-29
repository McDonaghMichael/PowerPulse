import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonLabel, IonItem, IonGrid, IonCol, IonRow, IonButton, IonImg, IonText, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonListHeader, IonSelectOption, IonItemDivider, IonItemGroup, IonIcon} from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { Router } from '@angular/router';
const fonts = {
  Roboto: {
    normal: 'assets/fonts/Roboto-Regular.ttf',
    bold: 'assets/fonts/Roboto-Medium.ttf',
    italics: 'assets/fonts/Roboto-Italic.ttf',
    bolditalics: 'assets/fonts/Roboto-MediumItalic.ttf'
  }
};

const MUSCLE_GROUP_IDS = {
  BICEPS: 1,
  TRICEPS: 2,
  QUADRICEPS: 3,
  HAMSTRINGS: 4,
  GLUTES: 5,
  CHEST: 6,
  BACK: 7,
  SHOULDERS: 8,
  ABS: 9,
  CARDIO: 10,
  FLEXIBILITY: 11
};


@Component({
  selector: 'app-create-workout',
  templateUrl: './create-workout.page.html',
  styleUrls: ['./create-workout.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonLabel, IonItem, IonGrid, IonCol, IonRow, IonButton, IonImg, IonText, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonListHeader, IonSelectOption, IonItemDivider, IonIcon, IonItemGroup]

})
export class CreateWorkoutPage implements OnInit {
  availableWorkouts: { [key: number]: any[] } = {};
  selectedWorkouts: any[] = [];
  selectedWorkout: any;
  expandedGroups: number[] = [];
  currentGroup: number;

  constructor(private http: HttpClient, private router: Router) {
    this.currentGroup = 0;
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get('assets/json/workouts.json').subscribe((data: any) => {
      Object.values(MUSCLE_GROUP_IDS).forEach(id => {
        this.availableWorkouts[id] = data.workouts.strength.filter((workout: any) => workout.muscleGroupId === id);
      });
    });
  }

  

// Inside your component class
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
      case MUSCLE_GROUP_IDS.CARDIO:
        return 'Cardio';
      case MUSCLE_GROUP_IDS.FLEXIBILITY:
        return 'Flexibility';
      default:
        return 'Unknown';
    }
  }
  generatePDF() {
    const docDefinition: TDocumentDefinitions = {
      content: [
        { text: 'Selected Workouts', style: 'header' },
        { text: '------------------------', style: 'subheader' },
        { ul: this.selectedWorkouts.map(workout => workout.name) }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          alignment: 'center',
          margin: [0, 0, 0, 10]
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 5, 0, 5]
        }
      }
    };
    pdfMake.createPdf(docDefinition).download('selected_workouts.pdf');
  }
  
  
}
