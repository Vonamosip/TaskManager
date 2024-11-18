import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ProjectComponent } from "./project/project.component";
import { LogoutComponent } from "./logout/logout.component";
import {MatMenuModule} from '@angular/material/menu'

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatIconModule, MatMenuModule, RouterLink, SidebarComponent, ProjectComponent, LogoutComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
}
