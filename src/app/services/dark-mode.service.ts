// dark-mode.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DarkModeService {
  // BehaviorSubject holds current dark mode state and allows subscribers to get latest value
  private darkModeSubject = new BehaviorSubject<boolean>(false);
  darkMode$ = this.darkModeSubject.asObservable();

  toggleDarkMode(isDark: boolean) {
    this.darkModeSubject.next(isDark);
  }
}
