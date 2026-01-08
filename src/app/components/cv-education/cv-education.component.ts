import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { input } from '@angular/core';

import { LucideAngularModule } from 'lucide-angular/src/icons';

import type { EducationEntry } from '../../models/education.interface';

@Component({
  selector: 'app-cv-education',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './cv-education.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvEducationComponent {
  education = input.required<EducationEntry[]>();
}

