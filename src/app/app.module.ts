import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { HeroFrontDrawComponent } from './hero-section/hero-front-draw/hero-front-draw.component';
import { HeroFrontImagePartComponent } from './hero-section/hero-front-image-part/hero-front-image-part.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { ContactMeSectionComponent } from './contact-me-section/contact-me-section.component';
import { BarComponent } from './skills-section/bar/bar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    HeroFrontDrawComponent,
    HeroFrontImagePartComponent,
    AboutMeSectionComponent,
    SkillsSectionComponent,
    ContactMeSectionComponent,
    BarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
