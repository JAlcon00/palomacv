import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { input } from '@angular/core';

import { LucideAngularModule } from 'lucide-angular/src/icons';

import type { Skills } from '../../models/skill.interface';

@Component({
  selector: 'app-cv-skills',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './cv-skills.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvSkillsComponent {
  skills = input.required<Skills>();
}

