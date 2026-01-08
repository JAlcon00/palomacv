import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { input } from '@angular/core';

import { LucideAngularModule } from 'lucide-angular/src/icons';

import type { ContactInfo } from '../../models/contact-info.interface';

@Component({
  selector: 'app-cv-header',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './cv-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvHeaderComponent {
  contact = input.required<ContactInfo>();

  private readonly imageFailed = signal(false);

  protected readonly showImage = computed(() => {
    const url = this.contact().profileImageUrl?.trim();
    return !this.imageFailed() && !!url;
  });

  protected readonly initials = computed(() => {
    const name = (this.contact().fullName ?? '').trim();
    if (!name) return 'CV';

    const parts = name
      .split(/\s+/)
      .map((p) => p.trim())
      .filter(Boolean);

    const first = parts[0]?.[0] ?? '';
    const last = parts.length > 1 ? parts[parts.length - 1]?.[0] ?? '' : '';
    const initials = `${first}${last}`.toUpperCase();
    return initials || 'CV';
  });

  protected onImageError(): void {
    this.imageFailed.set(true);
  }

  protected readonly contactItems = computed(() => {
    const c = this.contact();

    return [
      {
        key: 'email',
        icon: 'mail',
        label: 'Correo',
        href: `mailto:${c.email}`,
        ariaLabel: 'Enviar correo',
        targetBlank: false,
      },
      {
        key: 'whatsapp',
        icon: 'message-circle',
        label: 'WhatsApp',
        href: c.whatsappUrl,
        ariaLabel: 'Abrir WhatsApp',
        targetBlank: true,
      },
      {
        key: 'linkedin',
        icon: 'linkedin',
        label: 'LinkedIn',
        href: c.linkedinUrl,
        ariaLabel: 'Abrir LinkedIn',
        targetBlank: true,
      },
    ] as const;
  });
}

