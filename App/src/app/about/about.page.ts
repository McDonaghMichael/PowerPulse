import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonLabel, IonItem, IonGrid, IonCol, IonRow, IonButton, IonImg, IonText, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonListHeader, IonSelectOption, IonItemDivider, IonItemGroup, IonIcon, IonThumbnail, ModalController} from '@ionic/angular/standalone';


@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: true,
  imports: [IonContent, IonImg, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonLabel, IonItem, IonGrid, IonCol, IonRow, IonButton, IonImg, IonText, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonListHeader, IonThumbnail, IonSelectOption, IonItemDivider, IonIcon, IonItemGroup]
})
export class AboutPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
