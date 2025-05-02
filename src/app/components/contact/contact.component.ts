import {
  Component,
  Inject,
  PLATFORM_ID,
  AfterViewInit,
  HostListener,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements AfterViewInit {
  private isBrowser: boolean;
  private moveElements: HTMLElement[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      setTimeout(() => {
        this.moveElements = Array.from(
          document.querySelectorAll('.scroll-animate')
        ) as HTMLElement[];
        this.handleScroll();
      }, 0);
    }
  }

  @HostListener('window:scroll', [])
  handleScroll(): void {
    if (!this.isBrowser || this.moveElements.length === 0) return;

    const windowHeight = window.innerHeight;

    this.moveElements.forEach((el) => {
      const rect = el.getBoundingClientRect();

      if (rect.top < windowHeight * 0.9) {
        el.classList.add('visible');
      } else {
        el.classList.remove('visible');
      }
    });
  }
}
