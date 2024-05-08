import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animation, AnimationController } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonCard, IonButton, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonRow, IonCol, IonGrid } from '@ionic/angular/standalone';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherFacebook, featherInstagram, featherYoutube, featherTwitter, featherMail, featherLink } from '@ng-icons/feather-icons';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonGrid, IonRow, IonCol, IonItem, IonLabel, NgIconComponent, IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonContent, IonCardContent, IonButton],
  providers: [provideIcons({ featherFacebook, featherInstagram, featherYoutube, featherTwitter, featherMail, featherLink })],

})
export class HomePage implements OnInit {

  /**
   * Fetches the first and second card on our home page
   */
  @ViewChild('firstCard', { read: ElementRef }) firstCard: ElementRef;
  @ViewChild('secondCard', { read: ElementRef }) secondCard: ElementRef;

  /**
   * The following workout and blog variables simply store the currently loaded
   * blog and workout, along with their names and images
   */
  workout: any;
  trendingWorkoutName: string;
  trendingWorkoutImage: string;

  blog: any;
  dailyFitnessDigestName: string;
  dailyFitnessDigestImage: string;

  // Stores our card animations
  private firstCardAnimation: Animation;
  private secondCardAnimation: Animation;

  constructor(private http: HttpClient, private animationCtrl: AnimationController, private router: Router) {

  }

  /**
   * The following method is called by the app in order to share the app
   * to different apps or browsers. It uses the capacitor share plugin.
   */
  async shareApp(type: string) {
    await Share.share({
      title: 'Share with ' + type,
      text: 'Sharing helps alot',
      url: 'http://localhost:8100/',
      dialogTitle: 'Share with everyone',
    });
  }

  ngAfterViewInit() {

    /**
     * Once the page has loaded the following animations will grow the
     * two cards and then shrink them back to normal one after another
     */
    this.firstCardAnimation = this.animationCtrl
      .create()
      .addElement(this.firstCard.nativeElement)
      .duration(500)
      .keyframes([
        { offset: 0, transform: 'scale(1) rotate(0)' },
        { offset: 0.5, transform: 'scale(1.05) rotate(0)' },
        { offset: 1, transform: 'scale(1) rotate(0)' },
      ]);

    this.secondCardAnimation = this.animationCtrl
      .create()
      .addElement(this.secondCard.nativeElement)
      .duration(500)
      .keyframes([
        { offset: 0, transform: 'scale(1) rotate(0)' },
        { offset: 0.5, transform: 'scale(1.05) rotate(0)' },
        { offset: 1, transform: 'scale(1) rotate(0)' },
      ]);
      this.play();
  }


  ngOnInit(): void {
    this.loadPageData();
  }

  async play() {
    await this.firstCardAnimation.play();
    await this.secondCardAnimation.play();
  }
  /**
   * The following method simply heads over to the workouts.json file
   * hosted externaly and selects a random workout from it, the same for the blogs.json
   * which is then loaded dynamically to the home page
   */
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

