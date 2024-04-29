import { Component, OnInit } from '@angular/core';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton } from '@ionic/angular/standalone';
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
  imports: [ IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton ],
  standalone: true
})
export class NavMenuComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
