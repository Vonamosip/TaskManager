import { Component } from '@angular/core';
import { SignInComponent } from "./sign-in/sign-in.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SignInComponent,RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
