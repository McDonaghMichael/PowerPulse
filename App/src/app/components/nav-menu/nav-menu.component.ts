import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonImg } from '@ionic/angular';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonButton, IonIcon, IonItemDivider, IonLabel, IonItem, IonList, IonItemGroup } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';


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
  imports: [ IonMenu, IonHeader, RouterModule, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonButton, IonIcon, IonItemDivider, IonLabel, IonItem, IonList, IonItemGroup],
  standalone: true
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
