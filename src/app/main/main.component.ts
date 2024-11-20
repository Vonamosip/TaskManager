import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ProjectComponent } from "./task/project.component";
import {MatMenuModule} from '@angular/material/menu'

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatIconModule, MatMenuModule, RouterLink, SidebarComponent, ProjectComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
}
