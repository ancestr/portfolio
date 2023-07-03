import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFrontImagePartComponent } from './hero-front-image-part.component';

describe('HeroFrontImagePartComponent', () => {
  let component: HeroFrontImagePartComponent;
  let fixture: ComponentFixture<HeroFrontImagePartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroFrontImagePartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroFrontImagePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
