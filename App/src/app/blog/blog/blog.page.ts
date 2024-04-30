import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonLabel, IonItem, IonGrid, IonCol, IonRow, IonButton, IonImg, IonText, IonCard, IonCardHeader, IonCardContent, IonCardTitle} from '@ionic/angular/standalone';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonLabel, IonItem, IonGrid, IonCol, IonRow, IonButton, IonImg, IonText, IonCard, IonCardHeader, IonCardContent, IonCardTitle]

})
export class BlogPage implements OnInit {

  blogs: any;

  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get('assets/json/blogs.json').subscribe((data: any) => {
      
              this.blogs = data.blogs;
        
      
      
      console.log(this.blogs);
    });

    
}

readBlog(blog: any) {
    this.router.navigate(['/blog/view'], { state: { blog } });
  
}
}
