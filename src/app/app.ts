import { Component } from '@angular/core';

import { CvAboutComponent } from './components/cv-about/cv-about.component';
import { CvEducationComponent } from './components/cv-education/cv-education.component';
import { CvExperienceComponent } from './components/cv-experience/cv-experience.component';
import { CvHeaderComponent } from './components/cv-header/cv-header.component';
import { CvLanguagesComponent } from './components/cv-languages/cv-languages.component';
import { CvSkillsComponent } from './components/cv-skills/cv-skills.component';
import { cvData } from './data/cv-data';

@Component({
  selector: 'app-root',
  imports: [
    CvHeaderComponent,
    CvAboutComponent,
    CvSkillsComponent,
    CvEducationComponent,
    CvExperienceComponent,
    CvLanguagesComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly cv = cvData;
}
