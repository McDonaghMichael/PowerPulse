import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonList, IonLabel, IonItem, IonGrid, IonCol, IonRow, IonButton, IonImg, IonText, IonCard, IonCardHeader, IonCardContent, IonCardTitle} from '@ionic/angular/standalone';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.page.html',
  styleUrls: ['./view-blog.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonLabel, IonItem, IonGrid, IonCol, IonRow, IonButton, IonImg, IonText, IonCard, IonCardHeader, IonCardContent, IonCardTitle]
})
export class ViewBlogPage implements OnInit {

  blog: any;
  constructor() { }

  ngOnInit() {
    this.blog = history.state.blog;
  }

  back(){
    history.back();
  }
}
