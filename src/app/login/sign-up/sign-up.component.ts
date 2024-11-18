import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { confirmPasswordValidator } from '../../shared/interfaces/confirm-password.validator';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [MatIconModule, RouterLink, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public myForm!: FormGroup;

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router,
  ) {}

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*\\d)(?=.*[\\W_]).+$')]),
      confirmPassword:new FormControl('',[Validators.required,]),
    },
    { validators: [confirmPasswordValidator]})
  }

  Register() {
    if (this.myForm.valid) {
      const { name, email, password } = this.myForm.value;
      this.auth.onLogin({ name, email, password }).subscribe((res: any) => {
        if (res.success) {
          this.router.navigateByUrl('/signIn');
        } else {
          alert(res.message);
        }
      });
    }
  }
}
