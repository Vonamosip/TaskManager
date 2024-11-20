import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { ProjectService } from '../../services/project.service';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  constructor(private readonly project:ProjectService){}

}
