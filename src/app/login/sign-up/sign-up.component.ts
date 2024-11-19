import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { confirmPasswordValidator } from '../../shared/confirm-password.validator';
import { SignUpSuccessResponse } from '../../shared/interfaces/SignUpSuccessResponse.interface';
import { take } from 'rxjs';



@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [MatIconModule, RouterLink, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public myForm!: FormGroup;

  constructor(private readonly auth: AuthService, private readonly router: Router) {}

  public ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*\\d)(?=.*[\\W_]).+$')]),
      confirmPassword:new FormControl('',[Validators.required,]),
    },
    { validators: [confirmPasswordValidator]})
  }

  public register() {
    if (this.myForm.valid) {
      const { userName, email, password } = this.myForm.value;
      this.auth.onRegister({ userName, email, password}).pipe(
        take(1),
      ).subscribe((res: SignUpSuccessResponse) => {
          localStorage.setItem(userName, JSON.stringify(res.data));
          this.router.navigateByUrl('/signIn');
      });
    }
  }

}
