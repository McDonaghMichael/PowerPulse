import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animation, AnimationController } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonCard, IonButton, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonRow, IonCol, IonGrid } from '@ionic/angular/standalone';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherFacebook, featherInstagram, featherYoutube, featherTwitter, featherMail, featherLink } from '@ng-icons/feather-icons';
import { Share } from '@capacitor/share';

const BANNER_IMAGES = [
  "assets/images/pages/home/banner-1.jpg",
  "assets/images/pages/home/banner-2.avif"

];

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonGrid, IonRow, IonCol, IonItem, IonLabel, NgIconComponent, IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonContent, IonCardContent, IonButton],
  providers: [provideIcons({ featherFacebook, featherInstagram, featherYoutube, featherTwitter, featherMail, featherLink })],

})
export class HomePage implements OnInit {

  selectedImage: any;
  workout: any;
  trendingWorkoutName: string;
  trendingWorkoutImage: string;

  blog: any;
  dailyFitnessDigestName: string;
  dailyFitnessDigestImage: string;

  @ViewChild('firstCard', { read: ElementRef }) firstCard: ElementRef;
  @ViewChild('secondCard', { read: ElementRef }) secondCard: ElementRef;

  private animation: Animation;

  constructor(private http: HttpClient, private animationCtrl: AnimationController, private router: Router) {

  }

  async shareApp(type: string) {
    await Share.share({
      title: 'Share with ' + type,
      text: 'Sharing helps alot',
      url: 'https://powerpulse.app',
      dialogTitle: 'Share with everyone',
    });
  }

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.firstCard.nativeElement)
      .duration(1000)
      .fromTo('opacity', '0', '1');
    this.animation.play();

    this.animation = this.animationCtrl
      .create()
      .addElement(this.secondCard.nativeElement)
      .duration(1000)
      .fromTo('opacity', '0', '1');
    this.animation.play();
  }


  ngOnInit(): void {
    this.loadPageData();

  }

  loadPageData() {

    let url = `https://jsonblob.com/api/jsonBlob/1237078231554580480`;
    this.http.get(url).subscribe(
      (data: any) => {

        const allWorkouts = [
          ...data.workouts.strength,
          ...data.workouts.cardiovascular,
          ...data.workouts.flexibility
        ];


        const randomIndex = Math.floor(Math.random() * allWorkouts.length);

        const randomWorkout = allWorkouts[randomIndex];

        this.workout = randomWorkout;
        this.trendingWorkoutName = randomWorkout.name;
        this.trendingWorkoutImage = randomWorkout.img;

      });

    let url2 = `https://jsonblob.com/api/jsonBlob/1237079230486798336`;
    this.http.get<any>(url2).subscribe(
      (data: any) => {


        const allBlogs = data.blogs;

        const randomIndex = Math.floor(Math.random() * allBlogs.length);


        const randomBlog = allBlogs[randomIndex];

        this.blog = randomBlog;
        this.dailyFitnessDigestName = this.blog.snippet;
        this.dailyFitnessDigestImage = this.blog.thumbnail_src;

      });
  }

  exploreWorkout(workout: any) {
    this.router.navigate(['/library/details'], { state: { workout } });
  }

  readBlog(blog: any) {
    this.router.navigate(['/blog/view'], { state: { blog } });

  }


}

