import {Component} from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  constructor(private viewportScroller: ViewportScroller) {}

  scrollTo(section: string) {
    this.viewportScroller.scrollToAnchor(section);
  }

  openResume() {
    window.open("https://drive.google.com/file/d/1yXz2RSo3LjjeXkyM7QvYxOV3MwgtI9kL/view?usp=sharing", '_blank');
  }

  goToLinkedin() {
    window.open('https://www.linkedin.com/in/ganesh-patil-9b758b258/', '_blank');
  }

  goToGithub() {
    window.open('https://github.com/ganesh0706patil', '_blank');
  }
}
