import { Component, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-save-workout',
  templateUrl: './save-workout.component.html',
  styleUrls: ['./save-workout.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class SaveWorkoutComponent {

  @ViewChild(IonModal) modal: IonModal;

  name: string;

  constructor(private modalController: ModalController) { }

  async cancel() {
    await this.modal.dismiss(null, 'cancel');
  }

  async confirm() {
    await this.modal.dismiss(this.name, 'confirm');
  }
  ionViewDidEnter() {
    this;
  }
  async onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {

    }
  }
}
