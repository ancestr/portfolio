import { Component, Inject } from '@angular/core';
import { ViewportScroller } from '@angular/common'

@Component({
  selector: 'app-hero-front-image-part',
  templateUrl: './hero-front-image-part.component.html',
  styleUrls: ['./hero-front-image-part.component.css']
})
export class HeroFrontImagePartComponent {
  constructor(@Inject(ViewportScroller) private viewportScroller: ViewportScroller) {
    this.viewportScroller.setOffset([0, 64]);
  }

  scrollToSection(section:string) {
    const element = document.querySelector("#" + section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}
