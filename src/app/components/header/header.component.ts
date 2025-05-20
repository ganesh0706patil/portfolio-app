// import {Component} from '@angular/core';
// import {NavLinksComponent} from "../shared/nav-links/nav-links.component";

// @Component({
//   selector: 'app-header',
//   standalone: true,
//   imports: [NavLinksComponent],
//   templateUrl: './header.component.html',
//   styleUrl: './header.component.scss'
// })
// export class HeaderComponent {

// }
import { Component, HostListener } from '@angular/core';
import { NavLinksComponent } from "../shared/nav-links/nav-links.component";
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavLinksComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isDark = false; // by default light mode is enabled
  constructor(private darkModeService: DarkModeService) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.querySelector('.navbar')!;
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    this.darkModeService.toggleDarkMode(this.isDark);
  }
}
