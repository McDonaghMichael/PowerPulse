import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonImg} from '@ionic/angular/standalone';

const BANNER_IMAGES = [
  "assets/images/pages/home/banner-1.jpg",
  "assets/images/pages/home/banner-2.avif"
  
];

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonImg],
})
export class HomePage implements OnInit {
 
  selectedImage: any;
  constructor() {}
  ngOnInit(): void {
    this.getData();
    
  }
getData() {
  
   
        const randomIndex = Math.floor(Math.random() * BANNER_IMAGES.length);
        this.selectedImage = BANNER_IMAGES[randomIndex];
    console.log(BANNER_IMAGES);
  };


}
