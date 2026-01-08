import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { input } from '@angular/core';

import { LucideAngularModule } from 'lucide-angular/src/icons';

@Component({
  selector: 'app-cv-about',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './cv-about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvAboutComponent {
  about = input.required<string>();
}

