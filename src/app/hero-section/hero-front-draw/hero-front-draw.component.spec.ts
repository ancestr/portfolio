import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFrontDrawComponent } from './hero-front-draw.component';

describe('HeroFrontDrawComponent', () => {
  let component: HeroFrontDrawComponent;
  let fixture: ComponentFixture<HeroFrontDrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroFrontDrawComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroFrontDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
