import { Component, AfterViewInit, Inject, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  imports: [CommonModule], 
})
export class DetailsComponent implements AfterViewInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef
  ) {}

  showModal: boolean = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('scroll', () => {
        const parallaxSections = document.querySelectorAll('.parallax-section');
        parallaxSections.forEach((section: any) => {
          const speed = parseFloat(section.getAttribute('data-speed')) || 0.3;
          const bg = section.querySelector('.parallax-bg');
          const offset = window.pageYOffset - section.offsetTop;
          if (bg) {
            bg.style.transform = `translateY(${offset * speed}px)`;
          }
        });
      });
    }
  }
}
