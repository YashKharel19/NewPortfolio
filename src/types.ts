export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  category: 'business-development' | 'operations' | 'entrepreneurship' | 'leadership';
  summary?: string;
  bulletPoints: string[];
  keyMetrics?: {
    value: string;
    label: string;
  }[];
  tags: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  organization: string;
  role: string;
  period: string;
  location: string;
  badge: string;
  overview: string;
  challenge: string;
  strategy: string[];
  results: string[];
  impactMetrics: {
    label: string;
    value: string;
    context: string;
  }[];
  tags: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  credentials: string;
  summary: string;
  courseworkAndFocus: string[];
}

export interface TimelineMilestone {
  id: string;
  year: string;
  endYear?: string;
  title: string;
  roleOrDegree: string;
  organization: string;
  location: string;
  phase: 'foundation' | 'leadership' | 'venture' | 'executive' | 'expansion';
  badge: string;
  story: string;
  achievements: string[];
  corePillar: string;
  metrics: {
    label: string;
    value: string;
  }[];
  colorGradient: string;
  icon: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: 'mobile-app' | 'web-platform' | 'enterprise-system' | 'venture';
  description: string;
  badge: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  liveUrl?: string;
  websiteUrl?: string;
  githubUrl?: string;
  tags: string[];
  features: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  techStack: string[];
  colorGradient: string;
  accentColor: string;
  featured?: boolean;
}

export interface TechLanguage {
  id: string;
  name: string;
  category: 'languages' | 'frameworks' | 'systems';
  badge: string;
  level: string;
  years: string;
  summary: string;
  color: string;
  bgLight: string;
  borderColor: string;
  iconName: string;
  strengths: string[];
  codeSample: {
    filename: string;
    language: string;
    code: string;
  };
  featuredProject: string;
}

export interface PortfolioData {
  name: string;
  headline: string;
  subheadline: string;
  location: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  githubUrl?: string;
  originalSiteUrl: string;
  linkedin?: string;
  website?: string;
  summary: string;
  stats: {
    value: string;
    label: string;
    description: string;
  }[];
  projects: ProjectItem[];
  techLanguages: TechLanguage[];
  skills: SkillCategory[];
  experiences: ExperienceItem[];
  caseStudies: CaseStudy[];
  education: EducationItem[];
  timeline: TimelineMilestone[];
}
