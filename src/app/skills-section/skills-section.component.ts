import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css']
})
export class SkillsSectionComponent {
  skills:any[] = [['Python', 76],
  ['JavaScript', 71],
  ['Angular', 63],
  ['Html', 89],
  ['Css', 72]
  ];
}
