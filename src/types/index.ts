export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  context?: string;
  problem: string;
  concept: string;
  myRole: string;
  status: 'In Active Development' | 'Prototype / SIH Project' | 'Completed' | 'National Finalist System';
  technologies: string[];
  features?: string[];
  workflowStages?: string[];
  githubUrl?: string | null;
  demoUrl?: string | null;
  accentColor: string;
  stats?: { label: string; value: string }[];
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  year: string;
  roleType: 'Internship' | 'Leadership' | 'Forum Role';
  description: string[];
  technologies?: string[];
  highlight?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  graduationYear: string;
  notes?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
}
