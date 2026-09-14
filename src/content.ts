// ============================================================================
// 📁 SINGLE SOURCE OF TRUTH FOR YASH KHAREL'S PORTFOLIO
// Easily edit text, links, photos, products, and jobs in this single file.
// ============================================================================

import yashPhoto from './assets/images/YK.JPG';
import lumashaPhoto from './assets/images/lumasha.png';
import bagishaPhoto from './assets/images/bagisha.png';

export interface TechIconItem {
  id: string;
  name: string;
  category: 'Core' | 'Frontend' | 'Backend' | 'Cloud & Tools';
  color: string;
  bgGlow: string;
  iconName: string; // Lucide icon name
}

export interface ProductItem {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: 'Ventures' | 'Mobile & Web' | 'Enterprise Systems';
  badge: string;
  photo: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  websiteUrl?: string;
  liveDemoUrl?: string;
  githubUrl?: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  keyHighlights: string[];
  // Interactive simulated video / recording details
  recording: {
    title: string;
    duration: string;
    steps: {
      title: string;
      description: string;
      badgeText: string;
      visualType: 'flashcards' | 'seat-matrix' | 'web-browser' | 'terminal';
    }[];
  };
}

export interface JobItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  category: 'Ventures & BD' | 'Operations' | 'Leadership & Tech';
  badge: string;
  summary: string;
  bulletPoints: string[];
  keyMetrics: { label: string; value: string }[];
  tags: string[];
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

export interface PortfolioContent {
  profile: {
    name: string;
    initials: string;
    headline: string;
    subheadline: string;
    academicCredentials: string;
    photo: string;
    photoAlt: string;
    location: string;
    availability: string;
    email: string;
    phone: string;
    linkedinUrl: string;
    githubUrl: string;
    websiteUrl: string;
    officialCvDownloadName: string;
    tags: string[];
  };
  products: ProductItem[];
  jobs: JobItem[];
  techStackIcons: TechIconItem[];
  education: EducationItem[];
}

export const siteContent: PortfolioContent = {
  // ==========================================================================
  // 👤 1. PROFILE & HERO SECTION
  // ==========================================================================
  profile: {
    name: 'Yash Kharel',
    initials: 'YK',
    headline: 'Co-Founder | Business Development | Senior Software Engineer | Ideator',
    academicCredentials: 'MBA (Queen Margaret University, BSC computer science Kathmandu Univeristy)',
    subheadline:
      'Co-Founder and Senior Software Engineer combining executive business strategy with rigorous software engineering. Creator of Lumasha (live on Apple App Store & Google Play), Bagisha (scaled into 100% autopilot operations), and enterprise operations leader with 8+ years scaling high-yield systems.',
    photo: yashPhoto,
    photoAlt: 'Yash Kharel - Co-Founder & Senior Software Engineer',
    location: 'Edmonton, AB, Canada',
    availability: 'Available for Executive & Engineering Roles',
    email: 'yash048339@gmail.com',
    phone: '548-881-7339',
    linkedinUrl: 'https://www.linkedin.com/in/yashkharel',
    githubUrl: 'https://github.com/YashKharel19',
    websiteUrl: 'https://kharelyash.com.np/',
    officialCvDownloadName: 'Yash_Kharel_Curriculum_Vitae.pdf',
    tags: [
      'MBA (Queen Margaret University)',
      'B.Sc. CS (Kathmandu University)',
      'Co-Founder & Ideator',
      'Senior Software Engineer',
      'Bagisha (Cofounded- Self sustaining +7 years)',
      'Lumasha App (iOS & Android)'
    ]
  },

  // ==========================================================================
  // 📱 2. FEATURED PRODUCTS (BAGISHA, LUMASHA & COMPREHENSIVE PORTFOLIO)
  // ==========================================================================
  products: [
    {
      id: 'bagisha-operations',
      title: 'Bagisha Reading Room',
      subtitle: 'Commercial Workspace Sanctuary Scaled to 100% Autopilot',
      tagline: 'Urban study sanctuary scaled from ground-up ideation into self-sustaining autopilot operations',
      category: 'Ventures',
      badge: '100% Autopilot Venture',
      photo: bagishaPhoto,
      websiteUrl: 'https://www.bagishareadingroom.com/',
      liveDemoUrl: 'https://www.bagishareadingroom.com/',
      metrics: [
        { label: 'Operating Model', value: '100% Autopilot' },
        { label: 'Revenue Model', value: 'Recurring Subscriptions' },
        { label: 'Founder Ingress', value: 'Zero Daily Intervention' },
        { label: 'Facility Usage', value: 'Full Capacity Optimization' }
      ],
      tags: ['Operations Scaling', 'Autopilot SOPs', 'Subscription Tiers', 'Seat Allocation Engine', 'CRM Automation', 'P&L Strategy'],
      keyHighlights: [
        'Co-founded and scaled an urban study sanctuary from idea to profitable commercial operations.',
        'Engineered tiered monthly subscription packages securing predictable, recurring monthly cashflow.',
        'Designed real-time seat allocation workflows and automated self-check-in to maximize peak occupancy.',
        'Authored standardized SOP playbooks enabling on-site staff to run customer management and facility care.'
      ],
      recording: {
        title: 'Bagisha Autopilot Operation & Seat Allocation System',
        duration: '0:40',
        steps: [
          {
            title: 'Real-Time Seat Matrix Engine',
            description: 'Dynamic seating map allocating quiet pods, collaborative desks, and power stations.',
            badgeText: 'Seat Allocation Engine',
            visualType: 'seat-matrix'
          },
          {
            title: 'Automated SOPs & Self-Check-in',
            description: 'Self-serve access control, automated membership renewals, and real-time CRM updates.',
            badgeText: 'Autopilot Workflow',
            visualType: 'seat-matrix'
          }
        ]
      }
    },
    {
      id: 'lumasha-app',
      title: 'Lumasha Language App',
      subtitle: 'Learn Local, Speak Global',
      tagline: 'Published worldwide on Google Play Store & Apple App Store with physical kits on Etsy',
      category: 'Mobile & Web',
      badge: 'Live on Google Play & App Store',
      photo: lumashaPhoto,
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.yash048.lumasha&hl=en_CA',
      appStoreUrl: 'https://apps.apple.com/ca/app/lumasha/id6749781997',
      websiteUrl: 'https://lumasha.com/',

      metrics: [
       
      ],
      tags: ['React Native', 'TypeScript', 'Expo Audio / AV', 'Mobile Architecture', 'Google Play Console', 'App Store Connect'],
      keyHighlights: [
        'Live in Canada and globally across both Apple App Store and Google Play Store.',
        'Integrated native audio engine with one-tap acoustic replay for authentic pronunciation.',
        'High-contrast visual memory retention cards engineered for diaspora youth and children.',
        'Omnichannel model connecting mobile digital learning with physical flashcard sets on Etsy.'
      ],
      recording: {
        title: 'Lumasha Mobile Interactive Screen Recording',
        duration: '0:35',
        steps: [
          {
            title: 'Multilingual Curriculum Dashboard',
            description: 'Engaging category picker: Nepali, Gujarati, Punjabi & Hindi language pathways.',
            badgeText: 'Language Selector',
            visualType: 'flashcards'
          },
          {
            title: 'Interactive Audio Pronunciation',
            description: 'Native audio synthesis engine with one-tap acoustic replay for phonetic mastery.',
            badgeText: 'Audio Engine',
            visualType: 'flashcards'
          },
          {
            title: 'Visual Memory Retention Flashcards',
            description: 'High-contrast illustrated flashcards engineered for children & diaspora youth.',
            badgeText: 'Gamified Cards',
            visualType: 'flashcards'
          }
        ]
      }
    },
    {
      id: 'dlytica-operations',
      title: 'Dlytica Academy Workforce System',
      subtitle: 'Multi-Program Student Lifecycle & Enterprise CRM in Toronto',
      tagline: 'End-to-end academy operations, cross-functional coaching, and hiring partner pipelines',
      category: 'Enterprise Systems',
      badge: 'Toronto Enterprise Operations',
      photo: bagishaPhoto,
      websiteUrl: 'https://kharelyash.com.np/',
      liveDemoUrl: 'https://kharelyash.com.np/',
      metrics: [
        { label: 'Location', value: 'Toronto, ON' },
        { label: 'Operational Hub', value: 'Centralized CRM' },
        { label: 'Cohort Delivery', value: 'Multi-Program' },
        { label: 'Outcome', value: 'Workforce Placement' }
      ],
      tags: ['Workforce Enablement', 'CRM Pipelines', 'Cohort Analytics', 'Angular / TypeScript', 'Employer Partnerships'],
      keyHighlights: [
        'Supervised cross-functional instructors and coordinators across concurrent technology training cohorts.',
        'Built enterprise CRM workflows managing the candidate journey from intake to graduation and job placement.',
        'Expanded institutional relationships with corporate employers and community partners across Ontario.',
        'Constructed operational KPI dashboards giving leadership real-time visibility into attendance and outcomes.'
      ],
      recording: {
        title: 'Dlytica Cohort Analytics & CRM Telemetry Portal',
        duration: '0:30',
        steps: [
          {
            title: 'Student Lifecycle Tracking Pipeline',
            description: 'Real-time telemetry showing candidate progression through coursework and employer interviews.',
            badgeText: 'Cohort CRM',
            visualType: 'terminal'
          },
          {
            title: 'KPI Dashboards & Placement Telemetry',
            description: 'Automated executive metrics tracking graduation rates and partner hiring velocity.',
            badgeText: 'Operational KPIs',
            visualType: 'web-browser'
          }
        ]
      }
    },
    {
      id: 'java-microservice',
      title: 'High-Throughput Booking Microservice',
      subtitle: 'Enterprise Java 17 & Spring Boot Concurrency Architecture',
      tagline: 'Thread-safe inventory allocation guaranteeing zero double-bookings during concurrency bursts',
      category: 'Enterprise Systems',
      badge: 'Java 17 & Spring Boot 3 Core',
      photo: lumashaPhoto,
      githubUrl: 'https://github.com/yash048',
      websiteUrl: 'https://kharelyash.com.np/',
      metrics: [
        { label: 'Language', value: 'Java 17' },
        { label: 'Framework', value: 'Spring Boot 3' },
        { label: 'Database', value: 'PostgreSQL' },
        { label: 'Integrity', value: 'ACID Transactions' }
      ],
      tags: ['Java 17', 'Spring Boot', 'PostgreSQL', 'Docker', 'REST APIs', 'Concurrency', 'Flyway'],
      keyHighlights: [
        'Thread-safe resource allocation preventing race conditions and double-bookings under peak traffic.',
        'Spring Security architecture with stateless JWT authentication and role-based permissions (RBAC).',
        'Relational data modeling with PostgreSQL and automated schema migration via Flyway.',
        'High test coverage with JUnit and containerized deployment with Docker.'
      ],
      recording: {
        title: 'Java 17 Concurrency & ACID Microservice Engine',
        duration: '0:30',
        steps: [
          {
            title: 'Thread-Safe Seat Allocation Lock',
            description: 'Optimistic & pessimistic locking preventing conflicting transactions.',
            badgeText: 'Locking Engine',
            visualType: 'terminal'
          },
          {
            title: 'Stateless JWT Security & RBAC',
            description: 'Microservice authentication layer protecting administrative and booking endpoints.',
            badgeText: 'Spring Security',
            visualType: 'terminal'
          }
        ]
      }
    },
    {
      id: 'personal-hub',
      title: 'Personal Web Headquarters',
      subtitle: 'Official Online Hub at kharelyash.com.np',
      tagline: 'High-speed reactive web architecture serving international recruiters and partners',
      category: 'Mobile & Web',
      badge: 'Official Web Presence',
      photo: lumashaPhoto,
      websiteUrl: 'https://kharelyash.com.np/',
      liveDemoUrl: 'https://kharelyash.com.np/',
      githubUrl: 'https://github.com/yash048',
      metrics: [
        { label: 'Domain', value: 'kharelyash.com.np' },
        { label: 'Performance', value: 'Sub-second Load' },
        { label: 'Availability', value: '100% Global' },
        { label: 'Stack', value: 'React + TypeScript' }
      ],
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Motion', 'Cloudflare CDN'],
      keyHighlights: [
        'Established online headquarters recognized across Canadian, UK, and global professional networks.',
        'Single-file JSON configuration allowing live updates without altering presentation logic.',
        'Vibrant blue-green interactive palette with hardware-accelerated animations and Web Audio feedback.'
      ],
      recording: {
        title: 'kharelyash.com.np Interactive Web Hub',
        duration: '0:25',
        steps: [
          {
            title: 'Single-Source Data Architecture',
            description: 'One-click resume export, social links, and live product updates.',
            badgeText: 'JSON / TS Driven',
            visualType: 'web-browser'
          },
          {
            title: 'Interactive Audio & Visual Controls',
            description: 'Subtle sound feedback and smooth responsive navigation on all viewports.',
            badgeText: 'Modern UX',
            visualType: 'web-browser'
          }
        ]
      }
    },
    {
      id: 'angular-portal',
      title: 'Reactive Enterprise Operations Portal',
      subtitle: 'Angular SPA with RxJS Asynchronous Streams & Real-Time Telemetry',
      tagline: 'Modular single-page application with complex data grids and executive KPI aggregation',
      category: 'Enterprise Systems',
      badge: 'Angular & RxJS Architecture',
      photo: bagishaPhoto,
      githubUrl: 'https://github.com/yash048',
      websiteUrl: 'https://kharelyash.com.np/',
      metrics: [
        { label: 'Framework', value: 'Angular' },
        { label: 'Streams', value: 'RxJS Pipelines' },
        { label: 'Type Safety', value: 'Strict TypeScript' },
        { label: 'Routing', value: 'Modular Lazy Load' }
      ],
      tags: ['Angular', 'TypeScript', 'RxJS', 'SCSS', 'REST APIs', 'Reactive Forms'],
      keyHighlights: [
        'RxJS reactive stream pipelines delivering fluid live updates without unnecessary component re-renders.',
        'Modular lazy-loaded architecture ensuring rapid initial paint times across desktop and mobile.',
        'Granular administrative routing guards protecting sensitive organizational metrics and financial summaries.'
      ],
      recording: {
        title: 'Angular Reactive Telemetry & Stream Visualizer',
        duration: '0:30',
        steps: [
          {
            title: 'RxJS Reactive Stream Pipelines',
            description: 'Continuous asynchronous state feeds driving real-time KPI card updates.',
            badgeText: 'Reactive Stream',
            visualType: 'terminal'
          },
          {
            title: 'Dynamic Filtering & Data Grid',
            description: 'Instant multi-parameter filtering across cohort tables and financial rows.',
            badgeText: 'Data Grid',
            visualType: 'web-browser'
          }
        ]
      }
    }
  ],

  // ==========================================================================
  // 💼 3. COMPREHENSIVE JOBS LIST ("WHAT I HAVE DONE")
  // ==========================================================================
  jobs: [
    {
      id: 'lumasha',
      role: 'Business Development Officer',
      company: 'Lumasha',
      location: 'Edmonton, AB, Canada',
      period: 'April 2025 - Present',
      isCurrent: true,
      category: 'Ventures & BD',
      badge: 'Live App & Omnichannel Retail',
      summary:
        'Leading business development initiatives to accelerate organizational revenue, deepen distribution channels, and forge high-value retail and institutional partnerships across the region.',
      bulletPoints: [
        'Lead business development and operational initiatives to drive organizational growth, improve efficiency, and support strategic objectives.',
        'Manage retail partnerships, distribution channels, and customer relationships to increase sales, market reach, and revenue performance.',
        'Coordinate with suppliers, vendors, distributors, and internal teams to align supply and demand, optimize inventory planning, and ensure operational effectiveness.',
        'Develop and execute go-to-market strategies, marketing campaigns, and customer acquisition initiatives across multiple channels.',
        'Oversee operational planning, KPI tracking, reporting, process improvement, and resource allocation to support business objectives.',
        'Build and maintain strategic partnerships with educational institutions, community organizations, retailers, and external stakeholders.',
        'Analyze market trends, customer insights, and business performance data to identify growth opportunities and support decision-making.'
      ],
      keyMetrics: [
        { label: 'Partnerships', value: 'Retail & B2B' },
        { label: 'GTM Strategy', value: 'Omnichannel' },
        { label: 'Operations', value: 'Supply Aligned' }
      ],
      tags: ['Business Development', 'Go-To-Market', 'Distribution Channels', 'Inventory Planning', 'Vendor Relations', 'Retail Growth']
    },
    {
      id: 'dlytica',
      role: 'Academy Manager | Business Development & Operations',
      company: 'Dlytica Inc',
      location: 'Toronto, ON, Canada',
      period: 'July 2023 - June 2024',
      category: 'Operations',
      badge: 'Enterprise Program Leadership',
      summary:
        'Directed operational governance, program delivery, and workforce enablement for educational and corporate cohorts at Dlytica Inc in Toronto.',
      bulletPoints: [
        'Managed day-to-day operations, program delivery, and stakeholder engagement to ensure organizational effectiveness and service quality.',
        'Supervised staff and cross-functional teams, providing leadership, coaching, performance management, and professional development support.',
        'Led recruitment, onboarding, workforce planning, and employee engagement initiatives to support organizational growth.',
        'Developed operational processes, performance metrics, and reporting systems to improve efficiency and accountability.',
        'Coordinated multiple projects and programs while managing resources, timelines, budgets, and stakeholder expectations.',
        'Established partnerships with educational institutions, employers, and industry stakeholders to support organizational objectives.',
        'Implemented CRM systems, data tracking processes, and reporting tools to improve operational visibility and decision-making.'
      ],
      keyMetrics: [
        { label: 'Governance', value: 'Multi-Program' },
        { label: 'Visibility', value: 'CRM Driven' },
        { label: 'Team Leadership', value: 'Cross-functional' }
      ],
      tags: ['Operations Management', 'Program Delivery', 'CRM Systems', 'Workforce Planning', 'Stakeholder Alignment']
    },
    {
      id: 'bagisha',
      role: 'Co-Founder & Business Development Officer',
      company: 'Bagisha Reading Room',
      location: 'Kathmandu, Nepal',
      period: 'December 2019 - Present',
      isCurrent: true,
      category: 'Ventures & BD',
      badge: '100% Autopilot Self-Sustaining Venture',
      summary:
        'Founded, structured, and scaled a premier study space enterprise from initial market validation into a profitable, recurring-revenue business running on automated autopilot.',
      bulletPoints: [
        'Founded and scaled a study space business from initial concept and market validation to a fully operational, self-sustaining business model with streamlined processes and recurring revenue generation.',
        'Led end-to-end business operations, including business planning, financial management, customer acquisition, facility operations, team coordination, and continuous process improvement.',
        'Developed and implemented scalable operational systems, workflows, and automation processes to transition the business from founder-driven operations to an autopilot management model.',
        'Defined growth strategies, revenue models, pricing structures, and customer engagement initiatives to increase occupancy, membership retention, and long-term profitability.',
        'Managed business development activities by identifying market opportunities, building strategic partnerships, and establishing relationships with schools, colleges, coaching institutes, and local organizations.',
        'Built and executed sales and marketing strategies across SEO, Google Ads, Meta Ads, social media campaigns, and community outreach to drive customer acquisition and brand growth.',
        'Led technology adoption initiatives, including online booking, digital seat management, and customer management systems to improve operational efficiency.'
      ],
      keyMetrics: [
        { label: 'Operating Model', value: '100% Autopilot' },
        { label: 'Revenue Model', value: 'Recurring Subscriptions' },
        { label: 'Digital Systems', value: 'Online Booking & CRM' }
      ],
      tags: ['Venture Founder', 'P&L Management', 'Autopilot Operations', 'Digital Marketing', 'Customer Lifecycle', 'SOP Development']
    },
    {
      id: 'microsoft',
      role: 'Microsoft Student Partner',
      company: 'Microsoft Innovation Center',
      location: 'Kathmandu, Nepal',
      period: 'June 2015 - June 2016',
      category: 'Leadership & Tech',
      badge: 'Technology Evangelism & Outreach',
      summary:
        'Promoted Microsoft technology initiatives, organized rural digital literacy workshops (Hour of Code), and coordinated university developer communities.',
      bulletPoints: [
        'Promoted Microsoft products, programs, and technology initiatives by building relationships with universities, student communities, and external partners.',
        'Developed collaboration opportunities with academic institutions and community organizations to expand Microsoft engagement programs.',
        'Coordinated technology outreach initiatives, including the Hour of Code program in rural schools, supporting digital literacy and technology awareness.',
        'Managed stakeholder communication, event coordination, and partnership activities to successfully deliver Microsoft-led programs and initiatives.',
        'Represented Microsoft at community and university events, delivering presentations and supporting brand awareness initiatives.'
      ],
      keyMetrics: [
        { label: 'Outreach', value: 'Hour of Code' },
        { label: 'Ecosystem', value: 'University Tech Hub' }
      ],
      tags: ['Tech Evangelism', 'Community Outreach', 'Partner Relations', 'Public Speaking']
    },
    {
      id: 'hult-prize',
      role: 'Event Operations Committee Member',
      company: 'Hult Prize (Kathmandu University - Clinton Global Initiative)',
      location: 'Kathmandu, Nepal',
      period: '2017',
      category: 'Leadership & Tech',
      badge: 'Global Social Entrepreneurship',
      summary:
        'Supported operations, partner sponsorships, and logistics for the global student social entrepreneurship pitching competition.',
      bulletPoints: [
        'Supported the organization of the Hult Prize Idea Pitching Competition, a global student entrepreneurship initiative supported by the Hult Prize Foundation and the Clinton Global Initiative.',
        'Managed event operations, logistics, and coordination to ensure smooth execution from planning through final presentations.',
        'Built relationships with sponsors, partners, and stakeholders to support event success and participant engagement.',
        'Coordinated with organizing teams to manage registrations, communications, marketing activities, and on-ground execution.'
      ],
      keyMetrics: [
        { label: 'Initiative', value: 'Clinton Global Partner' },
        { label: 'Partnerships', value: 'Corporate Sponsorships' }
      ],
      tags: ['Social Entrepreneurship', 'Event Operations', 'Sponsorship Management', 'Logistics Planning']
    },
    {
      id: 'it-meet',
      role: 'Business Development, Sponsorship & Operations Lead',
      company: 'IT Meet (Kathmandu University)',
      location: 'Kathmandu, Nepal',
      period: '2017',
      category: 'Ventures & BD',
      badge: 'Tech Convention Operations & Sponsorship',
      summary:
        'Secured enterprise commercial sponsorships, coordinated financial resource planning, and led operational delivery for the annual technology convention.',
      bulletPoints: [
        'Managed sponsor relationships, partnership coordination, and external communications to secure event support.',
        'Led logistics planning, vendor coordination, and operational execution for a large-scale technology event.',
        'Managed financial coordination and resource planning while collaborating with multiple teams.',
        'Supported content strategy, promotional activities, and audience engagement initiatives.'
      ],
      keyMetrics: [
        { label: 'Scale', value: 'Annual Convention' },
        { label: 'Funding', value: 'Commercial Pipeline' }
      ],
      tags: ['Sponsorship Acquisition', 'Financial Planning', 'Vendor Coordination', 'Audience Engagement']
    },
    {
      id: 'world-wood-day',
      role: 'Event Operations & International Relations Volunteer',
      company: 'World Wood Day',
      location: 'Kathmandu, Nepal',
      period: '2015',
      category: 'Operations',
      badge: 'International Cultural Exhibition',
      summary:
        'Facilitated logistics, exhibition setup, and delegate coordination for an international cultural showcase featuring global artisans.',
      bulletPoints: [
        'Supported operational planning and execution for an international craftsmanship showcase featuring global artists and participants.',
        'Coordinated exhibition setup, product displays, and event logistics to ensure smooth showcase operations.',
        'Managed visitor experience, crowd handling, and coordination support for international guests.',
        'Assisted artisans and participants in presenting their craftsmanship and products effectively to attendees.'
      ],
      keyMetrics: [
        { label: 'Audience', value: 'Global Delegates' },
        { label: 'Focus', value: 'Exhibition Logistics' }
      ],
      tags: ['International Relations', 'Event Logistics', 'Stakeholder Support']
    }
  ],

  // ==========================================================================
  // 🛠️ 4. ENGINEERING STACK - ONLY ICONS WITH CLEAN HOVER DETAILS
  // ==========================================================================
  techStackIcons: [
    {
      id: 'java',
      name: 'Java & Spring Boot',
      category: 'Core',
      color: '#EA580C',
      bgGlow: 'rgba(234, 88, 12, 0.15)',
      iconName: 'Server'
    },
    {
      id: 'angular',
      name: 'Angular & RxJS',
      category: 'Frontend',
      color: '#E11D48',
      bgGlow: 'rgba(225, 29, 72, 0.15)',
      iconName: 'Layers'
    },
    {
      id: 'react',
      name: 'React & React Native',
      category: 'Frontend',
      color: '#0891B2',
      bgGlow: 'rgba(8, 145, 178, 0.15)',
      iconName: 'Smartphone'
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      category: 'Core',
      color: '#2563EB',
      bgGlow: 'rgba(37, 99, 235, 0.15)',
      iconName: 'Code2'
    },
    {
      id: 'python',
      name: 'Python',
      category: 'Backend',
      color: '#059669',
      bgGlow: 'rgba(5, 150, 105, 0.15)',
      iconName: 'Terminal'
    },
    {
      id: 'sql',
      name: 'SQL & PostgreSQL',
      category: 'Backend',
      color: '#0D9488',
      bgGlow: 'rgba(13, 148, 136, 0.15)',
      iconName: 'Database'
    },
    {
      id: 'tailwind',
      name: 'Tailwind CSS',
      category: 'Frontend',
      color: '#06B6D4',
      bgGlow: 'rgba(6, 182, 212, 0.15)',
      iconName: 'Cpu'
    },
    {
      id: 'docker',
      name: 'Docker & Containers',
      category: 'Cloud & Tools',
      color: '#0284C7',
      bgGlow: 'rgba(2, 132, 199, 0.15)',
      iconName: 'Box'
    },
    {
      id: 'git',
      name: 'Git & CI/CD',
      category: 'Cloud & Tools',
      color: '#DC2626',
      bgGlow: 'rgba(220, 38, 38, 0.15)',
      iconName: 'GitBranch'
    }
  ],

  // ==========================================================================
  // 🎓 5. EDUCATION CREDENTIALS
  // ==========================================================================
  education: [
    {
      id: 'mba',
      degree: 'Master of Business Administration (MBA)',
      institution: 'Queen Margaret University',
      location: 'Edinburgh, Scotland, UK',
      period: '2020 - 2022',
      credentials: 'Master of Business Administration (MBA)',
      summary:
        'Postgraduate executive mastery in strategic leadership, international business, operational optimization, financial analysis, and organizational scaling.',
      courseworkAndFocus: [
        'Strategic Management & Business Planning',
        'Financial Analysis & Capital Budgeting',
        'Global Operations & Supply Chain Dynamics',
        'Marketing Strategy & Brand Positioning',
        'Change Management & Organizational Behavior',
        'Data-Driven Decision Making & Business Analytics'
      ]
    },
    {
      id: 'bcs',
      degree: 'Bachelor of Science in Computer Science (B.Sc. CS)',
      institution: 'Kathmandu University',
      location: 'Kathmandu, Nepal',
      period: '2013 - 2017',
      credentials: 'Bachelor of Science in Computer Science (B.Sc. CS)',
      summary:
        'Rigorous undergraduate engineering curriculum in computer science theory, algorithms, distributed systems, and scalable full-stack application development.',
      courseworkAndFocus: [
        'Object-Oriented Programming (Java, C++)',
        'Data Structures & Algorithm Design',
        'Database Management Systems & Relational SQL',
        'Operating Systems & Concurrent Programming',
        'Software Engineering & System Architecture',
        'Computer Networks & Web Technologies'
      ]
    }
  ]
};
