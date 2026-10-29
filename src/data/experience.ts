import { ExperienceItem, EducationItem, CertificationItem } from '../types';

export const experienceItems: ExperienceItem[] = [
  {
    id: 'thiranex-internship',
    title: 'Data Analyst Intern',
    organization: 'Thiranex',
    period: '2026',
    year: '2026',
    roleType: 'Internship',
    description: [
      'Cleaned, structured, and analyzed real-world datasets utilizing Python (Pandas, NumPy) and SQL for analytical reporting.',
      'Constructed dynamic Power BI dashboards and conducted exploratory data analysis (EDA) to uncover operational patterns and business intelligence.'
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'SQL', 'Power BI', 'Exploratory Data Analysis'],
    highlight: 'Data transformation & intelligence reporting'
  },
  {
    id: 'niit-internship',
    title: 'Cybersecurity Intern',
    organization: 'NIIT Foundation',
    period: '2026',
    year: '2026',
    roleType: 'Internship',
    description: [
      'Completed an intensive 4-week cybersecurity internship executed through AI Prime under the Cyber Suraksha Plus Program.',
      'Gained applied practical knowledge in threat surface evaluation, defense fundamentals, data privacy protocols, and network hygiene.'
    ],
    technologies: ['Cyber Suraksha Plus', 'Network Security', 'Security Fundamentals'],
    highlight: 'Cyber Suraksha Plus Program'
  },
  {
    id: 'sih-lead',
    title: 'Team Leader',
    organization: 'Smart India Hackathon (SIH)',
    period: '2024 — 2026',
    year: '2024–2026',
    roleType: 'Leadership',
    description: [
      'Spearheaded multi-disciplinary engineering teams across three consecutive SIH editions (2024, 2025, and 2026).',
      'Reached the prestigious National Grand Finale in SIH 2024 with the Fire Department Monitoring System, personally engineering the complete frontend dashboard suite.',
      'Orchestrated ideation, architecture formulation, sprint schedules, and live jury presentations under strict hackathon deadlines.'
    ],
    technologies: ['Team Leadership', 'Full-Stack Architecture', 'Technical Pitching', 'Agile Sprints'],
    highlight: 'SIH 2024 National Grand Finalist'
  },
  {
    id: 'techgium-lead',
    title: 'Team Leader',
    organization: 'L&T TECHgium (10th Edition)',
    period: '2026',
    year: '2026',
    roleType: 'Leadership',
    description: [
      'Steered the engineering cohort through the nationwide corporate innovation challenge organized by L&T Technology Services.',
      'Formulated the comprehensive Stage 1 technical abstract, feasibility analysis, and architectural submission.'
    ],
    technologies: ['Engineering Innovation', 'System Modeling', 'Technical Documentation'],
    highlight: 'Stage 1 Abstract Submission'
  },
  {
    id: 'startbit-secretary',
    title: 'Secretary',
    organization: 'StartBIT (College Entrepreneurship Forum)',
    period: '2023 — 2024',
    year: '2023–2024',
    roleType: 'Forum Role',
    description: [
      'Managed end-to-end official documentation, activity dossiers, and Minutes of Meetings (MOM) for student entrepreneurship initiatives.',
      'Supervised financial ledger accountability and verified allocations for university startup summits, workshops, and founder sessions.'
    ],
    technologies: ['Operational Governance', 'Financial Accountability', 'Stakeholder Communication'],
    highlight: 'College Entrepreneurship Leadership'
  }
];

export const educationData: EducationItem = {
  degree: 'Bachelor of Technology (B.Tech) in Computer Engineering',
  institution: 'Bajaj Institute of Technology',
  location: 'Wardha, Maharashtra, India',
  graduationYear: 'Expected 2027',
  notes: 'Focus on distributed systems, full-stack architectures, computational mathematics, and artificial intelligence.'
};

export const certificationsData: CertificationItem[] = [
  {
    title: 'Foundations of Digital Marketing and E-commerce',
    issuer: 'Coursera',
    year: '2026'
  },
  {
    title: 'Building a Startup',
    issuer: 'Course by Ankur Warikoo',
    year: '2024'
  }
];
