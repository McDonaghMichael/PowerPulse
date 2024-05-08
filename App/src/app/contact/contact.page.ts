import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonLabel, IonItem, IonGrid, IonCol, IonRow, IonButton, IonImg, IonText, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonListHeader, IonSelectOption, IonItemDivider, IonItemGroup, IonIcon, IonThumbnail, ModalController, IonInput, IonTextarea } from '@ionic/angular/standalone';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: true,
  imports: [IonContent, IonInput, IonTextarea, IonImg, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonLabel, IonItem, IonGrid, IonCol, IonRow, IonButton, IonImg, IonText, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonListHeader, IonThumbnail, IonSelectOption, IonItemDivider, IonIcon, IonItemGroup]
})
export class ContactPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
