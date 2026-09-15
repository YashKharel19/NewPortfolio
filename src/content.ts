// ============================================================================
// 📁 SINGLE SOURCE OF TRUTH FOR YASH KHAREL'S PORTFOLIO
// Easily edit text, links, photos, products, and jobs in this single file.
// ============================================================================

import yashPhoto from './assets/images/YK.JPG';
import lumashaPhoto from './assets/images/lumasha.png';
import bagishaPhoto from './assets/images/bagisha.png';
import ojaswiPhoto from './assets/images/ojaswi.png';
import ojaswiVideo from './assets/images/ojaswi.mp4';
import bagishaVideo from './assets/images/bagisha.mp4';
import lumashaVideo from './assets/images/lumashawebsite.mp4';

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
  // Real product video — optional
  // If no video exists, ProductShowcase automatically shows a placeholder.
  video?: {
    src: string;
    title: string;
    description?: string;
    poster?: string;
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
  // 📱 2. FEATURED PRODUCTS & PROJECTS
  // ==========================================================================
products: [
  {
    id: 'lumasha-app',
    title: 'Lumasha Language App',
    subtitle: 'Mobile App',
    tagline: 'Learn Local, Speak Global',
    category: 'Ventures',
    badge: 'Live Product',
    photo: lumashaPhoto,
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.yash048.lumasha',
    appStoreUrl: 'https://apps.apple.com/ca/app/lumasha/id6749781997',
    websiteUrl: 'https://lumasha.com/',
    metrics: [
      'Multiple language learning',
      'Interactive flashcards',
      'Cultural learning for children',
    ],
    tags: ['React Native', 'TypeScript', 'Expo', 'Mobile App'],
    keyHighlights: [
      'Built a child-focused language learning experience for Nepali and cultural education.',
      'Designed interactive flashcards and audio-based learning experiences.',
      'Developed and prepared the application for Android and iOS distribution.',
    ],
    video: {
    src: lumashaVideo,
    title: 'Lumasha App Demo',
    description:'A walkthrough of the Lumasha language learning app, including interactive flashcards and learning experiences.',
    poster: lumashaPhoto,
  },
  },

  {
    id: 'lumasha-website',
    title: 'Lumasha Website',
    subtitle: 'Ecommerce Website',
    tagline: 'A digital storefront for language, culture & learning',
    category: 'Mobile & Web',
    badge: 'Live Website',
    photo: lumashaPhoto,
    websiteUrl: 'https://lumasha.com/',
    metrics: [
      'Ecommerce platform',
      'Digital product showcase',
      'Customer-focused storefront',
    ],
    tags: ['React', 'Node.js', 'PostgreSQL', 'Heroku', 'Resend'],
    keyHighlights: [
      'Built the ecommerce website for Lumasha.',
      'Created a product-focused experience for educational and cultural products.',
      'Integrated frontend, backend, database and email functionality.',
    ],
    video: {
    src: lumashaVideo,
    title: 'Lumasha App Demo',
    description:'A walkthrough of the Lumasha language learning app, including interactive flashcards and learning experiences.',
    poster: lumashaPhoto,
    },
  },

  {
    id: 'bagisha-reading-room',
    title: 'Bagisha Reading Room',
    subtitle: 'Reading Room Platform',
    tagline: 'A peaceful space to read, focus and belong',
    category: 'Ventures',
    badge: 'Venture',
    photo: bagishaPhoto,
    websiteUrl: 'https://www.bagishareadingroom.com/',
    metrics: [
      'Central Kathmandu location',
      'High-speed internet',
      'Community-focused study environment',
    ],
    tags: ['PHP', 'CSS', 'Web Development', 'Operations'],
    keyHighlights: [
      'Created a peaceful environment where individuals can study independently while remaining part of a communal learning atmosphere.',
      'Designed a personalized and orderly physical study environment for focused reading and quiet contemplation.',
      'Provided high-speed internet for online reading, research and browsing.',
      'Built a friendly and welcoming space supported by approachable staff.',
      'Located in the heart of Kathmandu for students, researchers and readers.',
      'Recognized as an Idea Studio Season 7 Finalist for its innovative approach and commitment to reading culture.',
    ],
   video: {
    src: bagishaVideo,
    title: 'Lumasha App Demo',
    description:
      'A walkthrough of the Lumasha language learning app, including interactive flashcards and learning experiences.',
    poster: bagishaPhoto,
  },
  },

  {
    id: 'connectex-vpp',
    title: 'Connectex Virtual Power Plant',
    subtitle: 'Enterprise Energy Platform',
    tagline: 'Turning complex energy data into operational decisions',
    category: 'Enterprise Systems',
    badge: 'Professional Project',
    photo: ojaswiPhoto,
    metrics: [
      'Virtual Power Plant',
      'Real-time operations',
      'AWS cloud platform',
    ],
    tags: [
      'Java',
      'Spring Boot',
      'React',
      'Vue.js',
      'AWS',
      'SQL',
      'MongoDB',
    ],
    keyHighlights: [
      'Acted as the bridge between product managers, developers and business stakeholders throughout the VPP product lifecycle.',
      'Translated business and technical requirements into functional specifications, technical documentation and implementation plans.',
      'Designed and developed dashboards and operational reporting tools for monitoring, forecasting and data-driven decision making.',
      'Worked with AWS EC2, Lambda, Redshift, Cognito and API Gateway.',
      'Worked with SQL, MongoDB and high-volume real-time operational data.',
      'Coordinated UAT and SIT, including issue tracking, validation and stakeholder reporting.',
      'Applied Lean and Six Sigma principles to identify process gaps and improve operational efficiency.',
      'Supported implementation, training, troubleshooting and post-deployment optimization.',
    ],
    video: {
      src: ojaswiVideo,
      title: 'Lumasha App Demo',
      description:'A walkthrough of the Lumasha language learning app, including interactive flashcards and learning experiences.',
      poster: ojaswiPhoto,
    },
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio',
    subtitle: 'Web Project',
    tagline: 'Personal portfolio for an interior designer',
    category: 'Mobile & Web',
    badge: 'Web Project',
    photo: ojaswiPhoto,
    websiteUrl: 'https://ojaswirijal.com.np/',
    metrics: ['Personal portfolio website'],
    tags: ['HTML5', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery'],
    keyHighlights: [
      'Designed and developed a personal portfolio website for an interior designer.',
      'Focused on presenting work through a clean and responsive web experience.',
    ],
    video: {
      src: ojaswiVideo,
      title: 'Lumasha App Demo',
      description:'A walkthrough of the Lumasha language learning app, including interactive flashcards and learning experiences.',
      poster: ojaswiPhoto,
    },
  },

  {
    id: 'dlfn',
    title: 'Dalit Liberation Front of Nepal',
    subtitle: 'Organization Website',
    tagline: 'Official website platform',
    category: 'Mobile & Web',
    badge: 'Web Project',
    photo: ojaswiPhoto,
    websiteUrl: 'https://dlfn.org/',
    metrics: ['Official organization website'],
    tags: ['Angular 6', 'CSS'],
    keyHighlights: [
      'Developed the official website for Dalit Liberation Front of Nepal.',
      'Built the frontend using Angular and responsive styling.',
    ],
    video: {
      src: ojaswiVideo,
      title: 'Lumasha App Demo',
      description:'A walkthrough of the Lumasha language learning app, including interactive flashcards and learning experiences.',
      poster:ojaswiPhoto,
    },
  },

  {
    id: 'oag-report',
    title: 'OAG REPORT',
    subtitle: 'Financial Reporting System',
    tagline: 'Financial reporting for the Office of the Auditor General, Nepal',
    category: 'Enterprise Systems',
    badge: 'Confidential',
    photo: ojaswiPhoto,
    metrics: ['Government financial reporting'],
    tags: ['Angular 6', 'Java', 'CSS'],
    keyHighlights: [
      'Financial Reporting System for the Office of the Auditor General, Nepal.',
      'Developed enterprise reporting functionality using Angular and Java.',
    ],
  
  },

  {
    id: 'malepa-report',
    title: 'MALEPA REPORT',
    subtitle: 'Financial Reporting System',
    tagline: 'Reporting system for the Financial Comptroller General Office',
    category: 'Enterprise Systems',
    badge: 'Confidential',
    photo: ojaswiPhoto,
    metrics: ['Government financial reporting'],
    tags: ['Angular 6', 'Java', 'CSS'],
    keyHighlights: [
      'Developed a reporting system for the Financial Comptroller General Office.',
      'Worked on Angular and Java-based enterprise reporting functionality.',
    ],
   
  },

  {
    id: 'cas',
    title: 'CAS',
    subtitle: 'Centralized Accounting System',
    tagline: 'Centralized accounting for the Ministry of Foreign Affairs, Nepal',
    category: 'Enterprise Systems',
    badge: 'Confidential',
    photo: ojaswiPhoto,
    metrics: ['Government accounting system'],
    tags: ['Angular 6', 'Java', 'CSS'],
    keyHighlights: [
      'Centralized Accounting System for the Ministry of Foreign Affairs, Nepal.',
      'Developed enterprise accounting functionality using Angular and Java.',
    ],
    
  },

  {
    id: 'cgas',
    title: 'CGAS',
    subtitle: 'Government Accounting System',
    tagline: 'Computerized Government Accounting System',
    category: 'Enterprise Systems',
    badge: 'Government System',
    photo: ojaswiPhoto,
    metrics: [
      'Government accounting',
      'Financial reporting',
      'Enterprise system',
    ],
    tags: ['Angular 6', 'Java', 'CSS'],
    keyHighlights: [
      'Worked on the Computerized Government Accounting System for the Financial Comptroller General Office.',
      'Supported accounting and financial reporting workflows within a government enterprise environment.',
      'Built and maintained frontend functionality using Angular and backend functionality using Java.',
    ],
    
  },

  {
    id: 'rafr-system',
    title: 'RAFR System',
    subtitle: 'Revenue, Accounting & Financial Reporting',
    tagline: 'Financial operations for the Ministry of Foreign Affairs',
    category: 'Enterprise Systems',
    badge: 'Confidential',
    photo: ojaswiPhoto,
    metrics: ['Revenue and financial reporting'],
    tags: ['Angular 6', 'Java', 'CSS'],
    keyHighlights: [
      'Revenue, Accounting & Financial Reporting System for the Ministry of Foreign Affairs.',
      'Worked on enterprise financial workflows and reporting functionality.',
    ],
    
  },

  {
    id: 'license-module',
    title: 'License Module',
    subtitle: 'File & Data Integration',
    tagline: 'Turning uploaded files and form data into usable documents',
    category: 'Enterprise Systems',
    badge: 'Confidential',
    photo: ojaswiPhoto,
    metrics: ['File processing', 'API integration'],
    tags: ['React', 'CSS', '.NET Core API'],
    keyHighlights: [
      'Built functionality to upload files and integrate them with form data.',
      'Generated new files through a .NET Core API.',
      'Developed the frontend experience using React.',
    ],
    
  },

  {
    id: 'integrated-ict',
    title: 'Integrated ICT',
    subtitle: 'Company Website',
    tagline: 'A responsive digital presence built for a technology company',
    category: 'Mobile & Web',
    badge: 'Professional Project',
    photo: ojaswiPhoto,
    liveDemoUrl:
      'https://safe-fjord-65589.herokuapp.com/?fbclid=IwAR3aLhu3bmXxsGvxCFptk5JGxUtn5OwZm_dJjRYM2sdSRMxYhgu7r_77rLU#/',
    metrics: [
      'Corporate website',
      'Responsive interface',
      'Client-focused design',
    ],
    tags: ['React', 'CSS', 'JavaScript', 'Responsive Web'],
    keyHighlights: [
      'Developed the website for Integrated ICT Pvt. Ltd.',
      'Created a flexible website design that could adapt to the company content and business requirements.',
      'Worked on responsive frontend development using React and CSS.',
    ],
    
  },

  {
    id: 'semantro',
    title: 'Semantro',
    subtitle: 'Company Website',
    tagline: 'A responsive digital presence for Semantro Pvt. Ltd.',
    category: 'Mobile & Web',
    badge: 'Web Project',
    photo: ojaswiPhoto,
    websiteUrl: 'https://www.semantro.com',
    metrics: ['Corporate website'],
    tags: ['React', 'CSS'],
    keyHighlights: [
      'Developed the website for Semantro Pvt. Ltd.',
      'Designed the website according to company content and requirements.',
      'Built the frontend using React and CSS.',
    ],
    
  },

  {
    id: 'tea-nepal',
    title: 'Tea Nepal',
    subtitle: 'Event Showcase Website',
    tagline: 'Showcasing an international tea event',
    category: 'Mobile & Web',
    badge: 'Web Project',
    photo: ojaswiPhoto,
    liveDemoUrl:
      'https://calm-inlet-98561.herokuapp.com/?fbclid=IwAR2VY9slzRuM3X_xoaUYE6YyMI-cGdvy8dxRwwUc6I8O4AxBCaC57BXQlYU',
    metrics: ['Event showcase website'],
    tags: ['React', 'CSS'],
    keyHighlights: [
      'Developed a showcase website for the International Tea Event.',
      'Presented event information through a responsive React-based experience.',
    ],
    
  },

  {
    id: 'bits-innovation',
    title: 'Bits Innovation',
    subtitle: 'Company Website',
    tagline: 'Showcasing a technology company through the web',
    category: 'Mobile & Web',
    badge: 'Web Project',
    photo: ojaswiPhoto,
    websiteUrl: 'http://www.bitsinnovation.com/',
    metrics: ['Corporate showcase website'],
    tags: ['React', 'CSS'],
    keyHighlights: [
      'Developed a showcase website for Bits Innovation.',
      'Created the frontend using React and CSS.',
    ],
  },
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
      tags: [
        'Business Development',
        'Go-To-Market',
        'Distribution Channels',
        'Inventory Planning',
        'Vendor Relations',
        'Retail Growth'
      ]
    },

    {
      id: 'connectex',
      role: 'Senior Software Developer / Technical Business Analyst',
      company: 'Connectex Inc.',
      location: 'Calgary, AB, Canada',
      period: 'July 2024 - March 2025',
      category: 'Leadership & Tech',
      badge: 'VPP Platform & Technical Analysis',
      summary:
        'Bridged product, engineering, and business teams on a Virtual Power Plant platform, combining software engineering, technical analysis, cloud architecture, operational reporting, and process improvement.',
      bulletPoints: [
        'Acted as the bridge between product managers, developers, and business stakeholders on the Virtual Power Plant (VPP) platform, supporting technical analysis, product enhancements, and operational improvements.',
        'Gathered and analyzed business and technical requirements, translating stakeholder needs into functional specifications, technical documentation, and implementation plans.',
        'Designed and developed dashboards and operational reporting tools to support monitoring, forecasting, and data-driven decision-making.',
        'Created workflow diagrams, process documentation, and reporting structures to improve operational visibility and cross-team collaboration.',
        'Applied Lean process improvement and Six Sigma principles to identify inefficiencies, reduce process gaps, and improve operational workflows.',
        'Participated in Agile delivery processes including sprint planning, backlog refinement, stakeholder reviews, and release coordination.',
        'Led and coordinated User Acceptance Testing (UAT) and System Integration Testing (SIT), including issue tracking, validation, and stakeholder reporting.',
        'Worked on software and business systems initiatives involving Java, Spring Boot, React, SQL, and cloud-based solutions.',
        'Supported implementation, user training, troubleshooting, and post-deployment optimization activities on cloud-based systems using AWS.',
        'Designed and developed cloud infrastructure using AWS services including EC2, Lambda, Redshift, Cognito, and API Gateway.',
        'Developed backend services using Adonis.js and supported high-volume data processing and real-time platform operations.',
        'Designed and optimized SQL and MongoDB databases for high-performance storage, retrieval, reporting, and analytics.'
      ],
      keyMetrics: [
        { label: 'Platform', value: 'Virtual Power Plant' },
        { label: 'Cloud', value: 'AWS' },
        { label: 'Delivery', value: 'UAT / SIT / Agile' }
      ],
      tags: [
        'Technical Business Analysis',
        'Java',
        'Spring Boot',
        'React',
        'Vue.js',
        'AWS',
        'SQL',
        'MongoDB',
        'Process Improvement',
        'UAT / SIT'
      ]
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
      tags: [
        'Operations Management',
        'Program Delivery',
        'CRM Systems',
        'Workforce Planning',
        'Stakeholder Alignment'
      ]
    },

    {
      id: 'simply-software',
      role: 'Software Developer',
      company: 'Simply Software Technology',
      location: 'Kathmandu, Nepal',
      period: 'June 2020 - May 2023',
      category: 'Leadership & Tech',
      badge: 'Full-Stack Software Development',
      summary:
        'Developed scalable web applications and enterprise systems across frontend, backend, APIs, databases, and responsive user experiences using modern Java and JavaScript technologies.',
      bulletPoints: [
        'Developed responsive user interfaces using Angular, React, HTML, and CSS, ensuring cross-browser compatibility and mobile responsiveness.',
        'Built scalable web applications using Java, Spring Boot, and Hibernate, integrating frontend and backend components for reliable application performance.',
        'Designed and developed RESTful APIs to enable seamless communication between frontend and backend systems.',
        'Wrote optimized SQL queries for fast and accurate data retrieval while maintaining data integrity and consistency.',
        'Integrated jQuery to implement dynamic form validation, event handling, animations, and enhanced website interactivity.',
        'Developed and maintained enterprise and government-focused software systems requiring structured reporting, accounting, and data management.',
        'Worked on the Integrated ICT company website using React and CSS, creating a responsive website whose presentation could adapt to changing content requirements.',
        'Followed Agile development practices including sprint planning, daily standups, task tracking, and collaborative development.',
        'Managed source control using Git and participated in code reviews to maintain clean, maintainable, and reliable code.'
      ],
      keyMetrics: [
        { label: 'Backend', value: 'Java / Spring Boot' },
        { label: 'Frontend', value: 'Angular / React' },
        { label: 'Database', value: 'SQL' }
      ],
      tags: [
        'Java',
        'Spring Boot',
        'Hibernate',
        'Angular',
        'React',
        'REST APIs',
        'SQL',
        'Git',
        'Agile'
      ]
    },

    {
      id: 'bagisha',
      role: 'Co-Founder & Business Development Officer',
      company: 'Bagisha Reading Room',
      location: 'Kathmandu, Nepal',
      period: 'December 2019 - Present',
      isCurrent: true,
      category: 'Ventures & BD',
      badge: 'Study Space Venture',
      summary:
        'Co-founded and developed a reading room focused on providing a peaceful, personalized, connected, and accessible environment for students, researchers, and readers.',
      bulletPoints: [
        'Co-founded Bagisha Reading Room and developed the concept around creating a focused yet communal environment for students and readers.',
        'Designed a personalized study experience allowing patrons to choose their preferred seating while maintaining an orderly environment for quiet study and contemplation.',
        'Focused on customer experience by creating a safe, friendly, and welcoming space for students, researchers, and readers.',
        'Provided high-speed internet to improve browsing, online learning, digital research, and access to electronic resources.',
        'Managed business development, customer relationships, marketing initiatives, and operational activities.',
        'Established Bagisha in the heart of Kathmandu to provide convenient access to a central study and reading environment.',
        'Recognized as a finalist in Idea Studio Season 7, reflecting the venture’s innovative approach to improving reading culture and learning spaces.',
        'Led technology adoption including online booking, digital seat management, and customer management systems.'
      ],
      keyMetrics: [
        { label: 'Location', value: 'Heart of Kathmandu' },
        { label: 'Recognition', value: 'Idea Studio Season 7 Finalist' },
        { label: 'Experience', value: 'Peaceful & Personalized' }
      ],
      tags: [
        'Business Development',
        'Operations',
        'Customer Experience',
        'Digital Marketing',
        'Online Booking',
        'Venture Development'
      ]
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
      tags: [
        'Tech Evangelism',
        'Community Outreach',
        'Partner Relations',
        'Public Speaking'
      ]
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
      tags: [
        'Social Entrepreneurship',
        'Event Operations',
        'Sponsorship Management',
        'Logistics Planning'
      ]
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
      tags: [
        'Sponsorship Acquisition',
        'Financial Planning',
        'Vendor Coordination',
        'Audience Engagement'
      ]
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
      tags: [
        'International Relations',
        'Event Logistics',
        'Stakeholder Support'
      ]
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
      iconName: 'Java'
    },
    {
      id: 'angular',
      name: 'Angular & RxJS',
      category: 'Frontend',
      color: '#E11D48',
      bgGlow: 'rgba(225, 29, 72, 0.15)',
      iconName: 'Angular'
    },
    {
      id: 'react',
      name: 'React & React Native',
      category: 'Frontend',
      color: '#0891B2',
      bgGlow: 'rgba(8, 145, 178, 0.15)',
      iconName: 'React'
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
      iconName: 'Python'
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
