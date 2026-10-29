import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    name: 'LANGUAGES',
    description: 'Core programming languages across systems, web development, scripting, and data pipelines.',
    skills: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'PHP', 'HTML5', 'CSS3']
  },
  {
    name: 'FRONTEND',
    description: 'Modern component-driven UIs, real-time WebGL graphics, and responsive design systems.',
    skills: ['React.js', 'Tailwind CSS', 'Three.js', 'React Three Fiber']
  },
  {
    name: 'BACKEND',
    description: 'High-performance asynchronous microservices, type-safe validation, and API architectures.',
    skills: ['FastAPI', 'REST APIs', 'Pydantic', 'SQLAlchemy']
  },
  {
    name: 'DATABASES',
    description: 'Relational data modeling, schema architecture, integrity constraints, and query tuning.',
    skills: ['PostgreSQL', 'MySQL', 'Database Design', 'SQL Query Optimization']
  },
  {
    name: 'AI/ML & ANALYTICS',
    description: 'Statistical modeling, deep learning architectures, gradient boosting, explainability, and visual analytics.',
    skills: ['Pandas', 'NumPy', 'scikit-learn', 'XGBoost', 'PyTorch', 'SHAP', 'Exploratory Data Analysis', 'Power BI']
  },
  {
    name: 'DEVOPS & TESTING',
    description: 'Containerization, reproducible deployment environments, automated unit/integration testing, and version control.',
    skills: ['Git', 'GitHub', 'Docker', 'pytest', 'API Testing', 'CI/CD']
  },
  {
    name: 'AI INTEGRATION',
    description: 'Interfacing foundation models, generative intelligence, and agentic workflows into production software.',
    skills: ['LLM APIs', 'AI-powered application development']
  }
];

export const allSkillsList: string[] = Array.from(
  new Set(skillCategories.flatMap(c => c.skills))
);
