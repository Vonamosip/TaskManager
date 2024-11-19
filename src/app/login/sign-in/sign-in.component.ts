
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { SignInSuccessResponse } from '../../shared/interfaces/SignInSuccessResponse.interface';
import { take } from 'rxjs';
@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [MatIconModule,RouterLink,ReactiveFormsModule,RouterOutlet],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent implements OnInit {

  public myForm!: FormGroup;

 constructor(private readonly auth:AuthService, private readonly router:Router){}

 public ngOnInit() {
  this.myForm = new FormGroup({
    email: new FormControl(''),
    password:new FormControl(''),
  })
}

 Login(){
  const {  email, password } = this.myForm.value;
  this.auth.onLogin({email, password}).pipe(
    take(1),
  ).subscribe((res:SignInSuccessResponse)=>{
    if(res.success){
      this.router.navigateByUrl('/main');
    } else {
      alert(res.message)
    }
  })
 }
}
