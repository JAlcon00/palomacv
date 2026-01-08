import type { ContactInfo } from './contact-info.interface';
import type { EducationEntry } from './education.interface';
import type { ExperienceEntry } from './experience.interface';
import type { LanguageEntry } from './language.interface';
import type { Skills } from './skill.interface';

export interface CVData {
  contact: ContactInfo;
  about: string;
  skills: Skills;
  education: EducationEntry[];
  experience: ExperienceEntry[];
  languages: LanguageEntry[];
}
