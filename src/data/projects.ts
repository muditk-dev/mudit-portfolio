import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'varshamitra',
    number: '01',
    title: 'VARSHAMITRA',
    subtitle: 'Monsoon Rainfall Forecast Correction & Weather Intelligence',
    category: 'AI/ML / Weather Intelligence',
    year: '2026',
    context: 'Smart India Hackathon 2026 Problem-Solving Project (NCMRWF)',
    problem: 'Numerical weather prediction models suffer from systematic, regime-dependent rainfall biases across diverse Indian agro-climatic zones, leading to inaccurate local precipitation alerts during monsoon seasons.',
    concept: 'A regime-aware monsoon rainfall forecast correction pipeline featuring synoptic weather-pattern classification, spatial bias correction, heavy-rainfall probability estimation, district-level visual dashboards, and automated forecast verification.',
    myRole: 'System architect and lead developer: designed the modular 5-stage ML pipeline, integrating U-Net spatial models with gradient boosting for localized precipitation calibration.',
    status: 'Prototype / SIH Project',
    technologies: [
      'Python',
      'PyTorch (U-Net)',
      'XGBoost',
      'scikit-learn',
      'GeoPandas',
      'SHAP',
      'Streamlit',
      'FastAPI',
      'PostgreSQL',
      'Docker'
    ],
    features: [
      'Weather-pattern synoptic classification module',
      'Residual bias correction using localized historical rainfall records',
      'Probabilistic heavy-rainfall exceedance modeling',
      'District-level interactive geospatial intelligence dashboard',
      'Automated daily verification against observational ground data'
    ],
    workflowStages: [
      'Raw NWP Ingestion',
      'Regime Classification',
      'Bias Calibration (U-Net / XGB)',
      'Probability Mapping',
      'District Forecast Delivery'
    ],
    accentColor: '#38BDF8',
    githubUrl: null, // Private / SIH submission
    demoUrl: null,
    stats: [
      { label: 'Pipeline Stages', value: '5 Modules' },
      { label: 'Domain', value: 'NCMRWF / SIH 2026' },
      { label: 'Granularity', value: 'District-Level' }
    ]
  },
  {
    id: 'aicte-sentinel',
    number: '02',
    title: 'AICTE SENTINEL',
    subtitle: 'Automated Approval Workflow & Statutory Compliance Engine',
    category: 'Full-Stack / Compliance Intelligence',
    year: '2026',
    context: 'Smart India Hackathon 2026 Submission for AICTE Regulation Bureau',
    problem: 'Institutional accreditation, annual approvals, and statutory compliance reviews face processing bottlenecks and fragmented documentation across multi-stage regulatory bodies.',
    concept: 'A unified approval workflow and compliance monitoring platform for AICTE\'s Regulation Bureau, featuring structured multi-tier document routing, automated deadline notifications, and transparent audit trails.',
    myRole: 'Prepared the end-to-end technical approach, engineered system flow diagrams, designed database schemas, and structured the idea presentation for statutory submission.',
    status: 'Prototype / SIH Project',
    technologies: [
      'React.js',
      'FastAPI',
      'Python',
      'PostgreSQL',
      'MinIO Object Storage',
      'REST APIs',
      'Docker',
      'draw.io'
    ],
    features: [
      'Strict 8-stage hierarchical regulatory approval pipeline',
      'Automated compliance status monitoring and deadline alerts',
      'Secure object storage with MinIO for institutional dossiers',
      'Relational audit logging in PostgreSQL for legal transparency',
      'Role-based access control for reviewers, scrutiny teams, and bureau leads'
    ],
    workflowStages: [
      'Application Ingestion',
      'Document Verification',
      'Scrutiny Committee Review',
      'Deficiency Reporting',
      'Hearing / Re-evaluation',
      'Regional Committee Clearance',
      'Executive Committee Approval',
      'Digital NOC Generation'
    ],
    accentColor: '#34D399',
    githubUrl: null,
    demoUrl: null,
    stats: [
      { label: 'Workflow Stages', value: '8 Tiers' },
      { label: 'Target Agency', value: 'AICTE Regulation' },
      { label: 'Architecture', value: 'FastAPI + MinIO' }
    ]
  },
  {
    id: 'homegen',
    number: '03',
    title: 'HOMEGEN',
    subtitle: 'AI-Assisted Architectural Layout & 3D Spatial Viewer',
    category: 'AI Applications / 3D Visualization',
    year: '2026',
    context: 'Independent Engineering Project',
    problem: 'Homeowners and independent builders lack fast, intuitive tools to generate custom floor plans adapted to arbitrary parcel boundaries and visualize them immediately in three dimensions.',
    concept: 'An AI-assisted architectural planner that synthesizes optimized room configurations within user-defined perimeter dimensions, rendering interactive 2D spatial diagrams and real-time 3D walkthroughs.',
    myRole: 'Full-stack creator: engineered the layout synthesis logic using computational geometry (Shapely), the interactive WebGL/Three.js spatial viewport, and the client-server coordination.',
    status: 'In Active Development',
    technologies: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'React Three Fiber',
      'Python',
      'FastAPI',
      'PostgreSQL',
      'Shapely',
      'Docker'
    ],
    features: [
      'Custom boundary input and parametric polygon subdivision',
      'Real-time 2D floorplan rendering with dimensional annotations',
      'Interactive 3D model generation powered by React Three Fiber',
      'Architectural zoning constraints (circulation, light, setback rules)',
      'Material schedule and construction cost estimation [Under Active Development]'
    ],
    workflowStages: [
      'Plot Boundary Input',
      'Zoning & Room Allocation',
      'Parametric Optimization',
      '2D Blueprint Generation',
      '3D Spatial Viewport'
    ],
    accentColor: '#F59E0B',
    githubUrl: null,
    demoUrl: null,
    stats: [
      { label: 'Graphics Engine', value: 'Three.js / R3F' },
      { label: 'Geometry Core', value: 'Shapely' },
      { label: 'Status', value: 'Active Dev' }
    ]
  },
  {
    id: 'verified-domestic-helper',
    number: '04',
    title: 'VERIFIED HELPER SYSTEM',
    subtitle: 'Vetted Domestic Workforce & Service Allocation Platform',
    category: 'Web Development / Social Impact',
    year: '2024',
    context: 'Social Impact Web Platform',
    problem: 'Household employers face security and reliability risks when hiring informal domestic staff without centralized identity verification or standardized service tracking.',
    concept: 'A trusted digital bridge connecting urban households with vetted drivers, cooks, and housekeepers, incorporating structured document verification and transparent service request workflows.',
    myRole: 'Engineered the multi-step helper onboarding and verification verification pipeline, database schema for identity checks, and customer service request routing.',
    status: 'Completed',
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'PHP',
      'MySQL'
    ],
    features: [
      'Identity verification intake and background check submission',
      'Category-based service discovery (drivers, cooks, domestic assistants)',
      'Direct service request routing with scheduling parameters',
      'Relational tracking of active service engagements in MySQL',
      'Administrative vetting console for credential validation'
    ],
    workflowStages: [
      'Helper Profile Intake',
      'Document Submission',
      'Admin Background Review',
      'Verification Approval',
      'Customer Match & Booking'
    ],
    accentColor: '#A78BFA',
    githubUrl: null,
    demoUrl: null,
    stats: [
      { label: 'Year Built', value: '2024' },
      { label: 'Core Backend', value: 'PHP / MySQL' },
      { label: 'Impact', value: 'Safety & Trust' }
    ]
  },
  {
    id: 'fire-dept-monitoring',
    number: '05',
    title: 'FIRE MONITORING SUITE',
    subtitle: 'NOC Inspection Lifecycle & Real-Time Operational Dashboard',
    category: 'Dashboard Engineering / SIH 2024',
    year: '2024',
    context: 'Smart India Hackathon 2024 National Finalist Project',
    problem: 'Municipal fire safety departments struggled with delayed inspections, fragmented paper trails for NOC issuance, and lack of real-time visibility into pending fire safety reviews.',
    concept: 'A centralized operational monitoring and evaluation system streamlining Fire Department applications, from initial filing to field inspection scheduling, follow-ups, and verified NOC issuance.',
    myRole: 'Dashboard Frontend Developer: Designed and implemented the complete frontend analytical dashboard for departmental officers. Led team to the SIH 2024 National Grand Finale.',
    status: 'National Finalist System',
    technologies: [
      'React.js',
      'JavaScript',
      'Tailwind CSS',
      'REST APIs',
      'Data Visualization'
    ],
    features: [
      'Real-time operational dashboard for departmental monitoring officers',
      'Application lifecycle visualizer tracking inspections from intake to NOC',
      'Inspection scheduler with officer assignment and status tags',
      'Deficiency flagging and automated compliance reminder triggers',
      'Responsive data tables with filtration by municipality and risk tier'
    ],
    workflowStages: [
      'Application Intake',
      'Document Scrutiny',
      'Field Inspection Dispatch',
      'Compliance Verification',
      'Digital NOC Issuance'
    ],
    accentColor: '#FB7185',
    githubUrl: null,
    demoUrl: null,
    stats: [
      { label: 'Achievement', value: 'SIH National Final' },
      { label: 'Role', value: 'Dashboard Frontend' },
      { label: 'Year', value: '2024' }
    ]
  }
];
