import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { input } from '@angular/core';

import { LucideAngularModule } from 'lucide-angular/src/icons';

import type { ExperienceEntry } from '../../models/experience.interface';

@Component({
  selector: 'app-cv-experience',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './cv-experience.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvExperienceComponent {
  experience = input.required<ExperienceEntry[]>();
}

