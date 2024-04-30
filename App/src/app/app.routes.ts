import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.page').then( m => m.AboutPage)
  },
  {
    path: 'builder',
    loadComponent: () => import('./builder/create-workout/create-workout.page').then( m => m.CreateWorkoutPage)
  },
  {
    path: 'library',
    loadComponent: () => import('./library/library/library.page').then( m => m.LibraryPage)
  },
  {
    path: 'library/details',
    loadComponent: () => import('./library/workout-details/workout-details.page').then( m => m.WorkoutDetailsPage)
  },
  {
    path: 'library/list',
    loadComponent: () => import('./library/library-workout-list/library-workout-list.page').then( m => m.LibraryWorkoutListPage)
  },
  {
    path: 'faq',
    loadComponent: () => import('./faq/faq.page').then( m => m.FaqPage)
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact.page').then( m => m.ContactPage)
  },
  {
    path: 'nutrition',
    loadComponent: () => import('./nutrition/nutrition.page').then( m => m.NutritionPage)
  },
  {
    path: 'blog',
    loadComponent: () => import('./blog/blog/blog.page').then( m => m.BlogPage)
  },
  {
    path: 'blog/view',
    loadComponent: () => import('./blog/view-blog/view-blog.page').then( m => m.ViewBlogPage)
  },
];
