import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from './../../services/auth.service';
import { userInfo } from './../../shared/interfaces/userInfo';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'
import { Router, RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [MatIconModule,RouterLink,FormsModule,RouterOutlet],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
 loginObj:any = {
  "email": "",
  "password": ""
 }

 constructor(private readonly auth:AuthService, private readonly router:Router){}

 Login(){
  this.auth.onLogin(this.loginObj).subscribe((res:any)=>{
    if(res.success){
      localStorage.setItem("user",JSON.stringify(res.data));
      this.router.navigateByUrl('/Main');
    } else {
      alert(res.message)
    }
  })
 }
}
