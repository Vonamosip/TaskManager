import { Routes } from '@angular/router';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { AlertComponent } from './alert/alert.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { MainComponent } from './main/main.component';
import { authGuard } from './services/auth.guard';

export const routes: Routes = [
  {
    path: 'signIn',
    component: SignInComponent,
  },
  {
    path: 'signUp',
    component: SignUpComponent
  },
  {
    path: 'main',
    component: MainComponent,
    canActivate: [authGuard],
  },
  {
    path: '',
    redirectTo: "signIn",
    pathMatch: "full"
  },
  {
    path: '**',
    component: AlertComponent,
    pathMatch: 'full'
  }
];
