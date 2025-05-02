// src/app/routes.ts
import { Routes } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { DetailsComponent } from './components/details/details.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '', component: BannerComponent },
  { path: 'intro', component: IntroductionComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'banner', component: BannerComponent },
  { path: 'head', component: HeaderComponent },
  {
    path: 'contact',
    component: ContactComponent,
  },
  { path: 'footer', component: FooterComponent },
];
