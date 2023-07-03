import { Component, Renderer2, HostListener, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  
  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }
  
  @Input() skill:any;

  skillName:string = '';
  progressValue: number = 0;
  isAnimated: boolean = false;
  progressNumber:number = 0;

  ngOnInit() {
    this.skillName = this.skill[0]
    this.progressNumber = this.skill[1]
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const sectionPosition = this.elementRef.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (sectionPosition.top < windowHeight && !this.isAnimated) {
      this.animateProgress();
      this.isAnimated = true;
    }
  }

  animateProgress() {
    let intervalSteps = 2000 / this.progressNumber
    const intervalId = setInterval(() => {
      if (this.progressValue < this.progressNumber) {
        this.progressValue++;
      } else {
        clearInterval(intervalId);
      }
    }, intervalSteps);
  }
}
