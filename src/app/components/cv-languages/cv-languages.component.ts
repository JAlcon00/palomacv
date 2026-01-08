import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { input } from '@angular/core';

import { LucideAngularModule } from 'lucide-angular/src/icons';

import type { LanguageEntry } from '../../models/language.interface';

@Component({
  selector: 'app-cv-languages',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './cv-languages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvLanguagesComponent {
  languages = input.required<LanguageEntry[]>();
}

