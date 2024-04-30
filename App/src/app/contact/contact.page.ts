import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonText, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonText]
})
export class ContactPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
