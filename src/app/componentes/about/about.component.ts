import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-about',
  imports: [ CommonModule ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
constructor(public global: GlobalService) { }
}
