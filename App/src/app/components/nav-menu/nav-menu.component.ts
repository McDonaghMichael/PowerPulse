import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonImg } from '@ionic/angular';
import { IonThumbnail, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonButton, IonIcon, IonItemDivider, IonLabel, IonItem, IonList, IonItemGroup } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherFacebook, featherInstagram, featherYoutube, featherTwitter, featherMail, featherLink, featherHome} from '@ng-icons/feather-icons';
import { heroUsers } from '@ng-icons/heroicons/outline';


import { Share } from '@capacitor/share';
import { BrowserModule } from '@angular/platform-browser';

const PAGES = {
  LIBRARY: 0,
  WORKOUT_BUILDER: 1,
  ABOUT: 2,
  FAQ: 3,
  CONTACT: 4,
  NUTRITION: 5,
  
};

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
  imports: [ IonThumbnail, NgIconComponent, IonMenu, IonHeader, RouterModule, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonButton, IonIcon, IonItemDivider, IonLabel, IonItem, IonList, IonItemGroup],
  standalone: true,
  providers: [provideIcons({ featherHome, featherFacebook, featherInstagram, featherYoutube, featherTwitter, featherMail, featherLink })],
})



export class NavMenuComponent  implements OnInit {

  quotes: any;
  constructor(private http: HttpClient, private router: Router) {}
  
  ngOnInit(): void {
   this.getData();
   
  }

  navigatePage(page: string): void {
    this.router.navigate([page]);
  
  }

  async shareApp(type: string) {
    await Share.share({
      title: 'Share with ' + type,
      text: 'Sharing helps alot',
      url: 'https://powerpulse.app',
      dialogTitle: 'Share with everyone',
    });
  }


  getData() {
    this.http.get('assets/json/quotes.json').subscribe((data: any) => {
          this.quotes = data;
      
          const randomIndex = Math.floor(Math.random() * this.quotes.length);
          let selectedQuote = this.quotes[randomIndex];
          const quoteElement = document.querySelector('.nav-quote');
          if (quoteElement) { 
          quoteElement.textContent = selectedQuote["quote"] + " - " + selectedQuote["author"];
          }
      console.log(this.quotes);
    });
  }
}
