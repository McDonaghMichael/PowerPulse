import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonCol, IonRow, IonButton, IonImg, IonText} from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonGrid, IonCol, IonRow, IonButton, IonImg, IonText]
})
export class LibraryPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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
