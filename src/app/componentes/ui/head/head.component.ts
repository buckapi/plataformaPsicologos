import { Component } from '@angular/core';
import { GlobalService } from '../../../services/global.service';
import { CommonModule } from '@angular/common';
import { AuthPocketbaseService } from '../../../services/auth-pocketbase.service';

@Component({
  selector: 'app-head',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent {
  isMenuOpen = false;
  showMenu() {
    this.isMenuOpen = true;
  }
    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }
constructor(
  public global: GlobalService,
  public authService: AuthPocketbaseService
){}
}
