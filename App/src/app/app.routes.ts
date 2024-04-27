import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
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
    path: 'library/strength-training',
    loadComponent: () => import('./library/strength-training/strength-training.page').then( m => m.StrengthTrainingPage)
  },
  {
    path: 'library/cardiovascular',
    loadComponent: () => import('./library/cardiovascular/cardiovascular.page').then( m => m.CardiovascularPage)
  },
  {
    path: 'library/flexibility',
    loadComponent: () => import('./library/flexibility/flexibility.page').then( m => m.FlexibilityPage)
  },
];
