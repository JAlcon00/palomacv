import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import {
  Bookmark,
  Briefcase,
  Building2,
  Calendar,
  Check,
  CheckCircle,
  ChevronRight,
  Dot,
  Download,
  Globe,
  GraduationCap,
  Linkedin,
  LucideAngularModule,
  Mail,
  MessageCircle,
  Sparkles,
  User,
} from 'lucide-angular/src/icons';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    importProvidersFrom(
      LucideAngularModule.pick({
        Mail,
        MessageCircle,
        Linkedin,
        Download,
        User,
        Sparkles,
        GraduationCap,
        Bookmark,
        Calendar,
        Briefcase,
        Building2,
        ChevronRight,
        Globe,
        Dot,
        Check,
        CheckCircle,
      })
    ),
  ],
};
