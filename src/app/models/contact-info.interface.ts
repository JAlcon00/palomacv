export interface ContactAction {
  label: string;
  href: string;
  ariaLabel: string;
}

export interface ContactInfo {
  fullName: string;
  headline: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  whatsappUrl: string;
  cvDownloadUrl: string;
  profileImageUrl: string;
  actions: ContactAction[];
}
