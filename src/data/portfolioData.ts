import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  name: 'Yash Kharel',
  headline: 'Co-Founder | Business Development | Senior Software Engineer | Ideator',
  subheadline:
    'MBA (Queen Margaret University, BSC computer science Kathmandu Univeristy). 8+ years scaling ventures, establishing high-value partnerships, and building resilient operational engines across Canadian and global ecosystems.',
  location: 'Edmonton, AB, Canada',
  email: 'yash048339@gmail.com',
  phone: '548-881-7339',
  linkedinUrl: 'https://www.linkedin.com/in/yashkharel',
  githubUrl: 'https://github.com/YashKharel19',
  originalSiteUrl: 'https://kharelyash.com.np/',
  summary:
    'Entrepreneurship Program, Business Development, and Operations professional with 8+ years of experience designing and coordinating programs, building strategic partnerships, engaging diverse stakeholders, and supporting organizations through growth and change. Experienced across startup, education, technology, and community environments, with hands-on experience in program delivery, recruitment, stakeholder engagement, performance measurement, and continuous improvement. MBA with a Computer Science background and practical experience building businesses, connecting organizations with partners, and turning ideas into actionable programs and outcomes.',
  
  stats: [
    {
      value: '8+ Years',
      label: 'Professional Experience',
      description: 'Business development, operations scaling & program leadership'
    },
    {
      value: 'MBA + CS',
      label: 'Dual Strategic Edge',
      description: 'Queen Margaret University (Edinburgh) & Kathmandu University'
    },
    {
      value: '100% Autopilot',
      label: 'Venture Scaled',
      description: 'Built Bagisha from concept into automated self-sustaining operation'
    },
    {
      value: 'End-to-End',
      label: 'GTM & Revenue Growth',
      description: 'Proven track record across retail, academy tech, and B2B/B2C pipelines'
    }
  ],

  projects: [
    {
      id: 'lumasha-app',
      title: 'Lumasha: Learn Local, Speak Global',
      tagline: 'Heritage Language Learning Mobile App & Digital Education Ecosystem',
      category: 'mobile-app',
      description:
        'Cross-platform mobile application launched by Yash Kharel on both Apple App Store and Google Play Store. Designed to help children and diaspora families reconnect with their heritage languages through interactive flashcards, native audio pronunciations, and visual storytelling.',
      badge: 'Live on Google Play & App Store',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.yash048.lumasha&hl=en_CA',
      appStoreUrl: 'https://apps.apple.com/ca/app/lumasha/id6749781997',
      websiteUrl: 'https://lumasha.com/',
      tags: ['React Native', 'TypeScript', 'Google Play (com.yash048.lumasha)', 'Apple App Store', 'Audio Pronunciation', 'Mobile UX', 'GTM'],
      features: [
        'Published globally on Google Play Store (Package: com.yash048.lumasha) and Apple App Store (ID: 6749781997).',
        'Interactive digital flashcards with authentic native audio pronunciation guides for Nepali, Gujarati, Punjabi, and Hindi.',
        'Gamified learning tracks, visual heritage cards, and memory retention mechanics designed for children & diaspora youth.',
        'Integrated omnichannel ecosystem spanning digital mobile apps and physical flashcard kits with international shipping.'
      ],
      metrics: [
        { label: 'Platforms', value: 'iOS + Android' },
        { label: 'Google Play', value: 'Live in Store' },
        { label: 'Apple Store', value: 'Live in Store' },
        { label: 'Brand Slogan', value: 'Learn Local, Speak Global' }
      ],
      techStack: ['React Native', 'TypeScript', 'Expo Audio / AV', 'Tailwind / NativeWind', 'Mobile Architecture', 'App Store Connect'],
      colorGradient: 'from-teal-500 via-emerald-500 to-cyan-600',
      accentColor: 'teal',
      featured: true
    },
    {
      id: 'bagisha-platform',
      title: 'Bagisha Reading Room & Autopilot Operations',
      tagline: 'Commercial Workspace Sanctuary Scaled into 100% Autopilot Self-Sustaining Operations',
      category: 'venture',
      description:
        'Co-founded and scaled an urban reading and focused study center from ground-up ideation to fully automated commercial viability. Implemented recurring membership tiers, real-time seat reservation technology, and comprehensive SOP playbooks that enabled operations to run without day-to-day founder involvement.',
      badge: '100% Autopilot Venture',
      liveUrl: 'https://kharelyash.com.np/',
      websiteUrl: 'https://kharelyash.com.np/',
      tags: ['Operations Scaling', 'Autopilot SOPs', 'Subscription Model', 'Seat Allocation Engine', 'CRM Automation', 'P&L Strategy'],
      features: [
        'Engineered tiered monthly subscription packages securing stable, recurring monthly cash flow.',
        'Designed real-time seat allocation and booking workflows maximizing facility density during peak hours.',
        'Created standardized operational playbooks (SOPs) enabling staff to handle customer support, renewals, and facility upkeep.',
        'Executed multi-channel digital acquisition across Google Ads, Meta Ads, and academic partnerships.'
      ],
      metrics: [
        { label: 'Operation Model', value: '100% Autopilot' },
        { label: 'Revenue Model', value: 'Recurring Subscriptions' },
        { label: 'Facility', value: 'Full Capacity Seat Optimization' },
        { label: 'Founder Ingress', value: 'Zero Daily Intervention' }
      ],
      techStack: ['Process Automation', 'Digital CRM', 'Web Booking', 'SOP Playbooks', 'Financial Governance'],
      colorGradient: 'from-blue-600 to-indigo-600',
      accentColor: 'blue',
      featured: true
    },
    {
      id: 'dlytica-operations',
      title: 'Dlytica Academy Workforce & Cohort Operations System',
      tagline: 'Multi-Program Student Lifecycle Tracking & Enterprise CRM Integration in Toronto',
      category: 'enterprise-system',
      description:
        'Directed end-to-end academy operations in Toronto, Ontario. Structured cross-functional team delivery, built centralized CRM pipelines to monitor student progress, and accelerated corporate employer partnerships for workforce placement.',
      badge: 'Toronto Enterprise Operations',
      tags: ['Workforce Enablement', 'CRM Pipelines', 'Cohort Analytics', 'Angular / TypeScript', 'Employer Partnerships'],
      features: [
        'Built enterprise CRM workflows managing the complete candidate lifecycle from enrollment to graduation and job placement.',
        'Supervised cross-functional instructors and coordinators across multiple concurrent tech training cohorts.',
        'Expanded institutional relationships with employers, colleges, and community stakeholders across Ontario.',
        'Designed operational KPI dashboards providing real-time visibility into student attendance and placement rates.'
      ],
      metrics: [
        { label: 'Location', value: 'Toronto, ON' },
        { label: 'Focus', value: 'Multi-Program Delivery' },
        { label: 'Data Hub', value: 'Centralized CRM' },
        { label: 'Impact', value: 'Workforce Enablement' }
      ],
      techStack: ['Angular', 'TypeScript', 'CRM Systems', 'Process Architecture', 'Analytics'],
      colorGradient: 'from-emerald-600 to-teal-600',
      accentColor: 'emerald',
      featured: true
    },
    {
      id: 'personal-hub',
      title: 'Personal Web Presence & Digital Innovation Hub',
      tagline: 'Official Online Headquarters at kharelyash.com.np',
      category: 'web-platform',
      description:
        'The established digital nexus at kharelyash.com.np serving international recruiters, corporate partners, and collaborators. Engineered for lightning performance, international discoverability, and clean responsive interaction.',
      badge: 'Official Web Presence',
      websiteUrl: 'https://kharelyash.com.np/',
      liveUrl: 'https://kharelyash.com.np/',
      tags: ['React', 'TypeScript', 'Web Architecture', 'Global CDN', 'Brand Presence'],
      features: [
        'Official personal domain recognized across Canadian, UK, and global professional networks.',
        'Interactive showcase of professional credentials, case studies, and business impact.',
        'Mobile-first responsive architecture with smooth client navigation and accessible design.'
      ],
      metrics: [
        { label: 'Live Domain', value: 'kharelyash.com.np' },
        { label: 'Availability', value: '100% Global' },
        { label: 'Performance', value: 'Sub-second Load' },
        { label: 'Audience', value: 'Global Stakeholders' }
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Cloudflare CDN'],
      colorGradient: 'from-cyan-600 to-blue-700',
      accentColor: 'cyan',
      featured: false
    },
    {
      id: 'java-microservice',
      title: 'High-Throughput Booking & Inventory Microservice',
      tagline: 'Enterprise Java 17 & Spring Boot Concurrency Architecture',
      category: 'enterprise-system',
      description:
        'Architected an enterprise-grade backend service utilizing Java 17 and Spring Boot. Implements thread-safe resource allocation, optimistic & pessimistic database locking for high-volume seat reservations, and JWT security for multi-tenant access.',
      badge: 'Java & Spring Boot Core',
      tags: ['Java 17', 'Spring Boot', 'PostgreSQL', 'Docker', 'REST APIs', 'Concurrency'],
      features: [
        'Thread-safe inventory allocation guaranteeing zero double-bookings during high concurrency bursts.',
        'Spring Security integration with stateless JWT authentication and role-based permissions (RBAC).',
        'Relational database modeling with PostgreSQL and automated schema versioning with Flyway.',
        'Standardized OpenAPI documentation and comprehensive integration test coverage.'
      ],
      metrics: [
        { label: 'Language', value: 'Java 17' },
        { label: 'Framework', value: 'Spring Boot 3' },
        { label: 'Database', value: 'PostgreSQL' },
        { label: 'Safety', value: 'ACID Transactions' }
      ],
      techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Maven', 'JUnit'],
      colorGradient: 'from-amber-600 to-orange-700',
      accentColor: 'orange',
      featured: false
    },
    {
      id: 'angular-portal',
      title: 'Reactive Enterprise Operations Portal',
      tagline: 'Angular SPA with RxJS Asynchronous Streams & Real-time KPI Telemetry',
      category: 'web-platform',
      description:
        'Single-page application engineered in Angular with TypeScript and RxJS. Features complex data grids, dynamic filtering, real-time KPI aggregations, and modular lazy-loaded routes tailored for executive operations tracking.',
      badge: 'Angular Enterprise Architecture',
      tags: ['Angular', 'TypeScript', 'RxJS', 'Reactive Forms', 'Data Visualization'],
      features: [
        'RxJS reactive stream pipelines delivering fluid live updates without unnecessary component re-renders.',
        'Modular lazy-loaded architecture ensuring rapid initial paint times across desktop and mobile.',
        'Granular administrative routing guards protecting sensitive organizational metrics and financial summaries.'
      ],
      metrics: [
        { label: 'Framework', value: 'Angular' },
        { label: 'Reactivity', value: 'RxJS Streams' },
        { label: 'Typing', value: 'Strict TypeScript' },
        { label: 'Architecture', value: 'Modular Lazy Loading' }
      ],
      techStack: ['Angular', 'TypeScript', 'RxJS', 'SCSS', 'REST APIs'],
      colorGradient: 'from-red-600 to-rose-700',
      accentColor: 'rose',
      featured: false
    }
  ],

  techLanguages: [
    {
      id: 'react-stack',
      name: 'React & React Native',
      category: 'frameworks',
      badge: 'Cross-Platform & Mobile',
      level: 'Production Master',
      years: 'Web & App Stores (iOS / Android)',
      summary:
        'Architect of cross-platform apps including Lumasha on Apple App Store & Google Play Store. Highly skilled in component lifecycles, hooks, gesture handlers, and responsive animations.',
      color: 'text-cyan-600',
      bgLight: 'bg-cyan-50',
      borderColor: 'border-cyan-300',
      iconName: 'Smartphone',
      strengths: [
        'React Native cross-platform mobile compilation',
        'State management & custom hook abstractions',
        'Native audio APIs & responsive UI gestures',
        'App Store Connect & Google Play Console releases'
      ],
      codeSample: {
        filename: 'LumashaFlashcard.tsx',
        language: 'tsx',
        code: `// React Native Component used in Lumasha Language App
export const LumashaFlashcard = ({ card, onCorrect }: CardProps) => {
  const [flipped, setFlipped] = useState(false);

  const playNativePronunciation = async () => {
    const { sound } = await Audio.Sound.createAsync({ uri: card.audioUrl });
    await sound.playAsync();
  };

  return (
    <Animated.View style={[styles.card, flipped && styles.flipped]}>
      <Pressable onPress={() => setFlipped(!flipped)}>
        <Text style={styles.nativeWord}>{card.nativeWord}</Text>
        <Text style={styles.phonetic}>{card.phonetic}</Text>
      </Pressable>
      <AudioPill onPress={playNativePronunciation} label="Native Voice" />
    </Animated.View>
  );
};`
      },
      featuredProject: 'Lumasha Mobile App (Apple App Store & Google Play)'
    },
    {
      id: 'java-stack',
      name: 'Java & Spring Boot',
      category: 'languages',
      badge: 'Enterprise Backend',
      level: 'Advanced Core',
      years: 'Computer Science Foundation & Microservices',
      summary:
        'Rock-solid computer science engineering background in Java, Object-Oriented Design (OOP), Spring framework, multithreading, and enterprise backend architectures.',
      color: 'text-amber-600',
      bgLight: 'bg-amber-50',
      borderColor: 'border-amber-300',
      iconName: 'Coffee',
      strengths: [
        'Object-Oriented Architecture (OOP) & Clean Code',
        'Spring Boot RESTful microservices & DI',
        'Concurrency, Thread-safety & Database Locking',
        'Relational ORM (Hibernate, JPA) & Transactions'
      ],
      codeSample: {
        filename: 'SeatBookingService.java',
        language: 'java',
        code: `// Java Enterprise Service with Spring Concurrency Locking
@Service
@Transactional
public class SeatBookingService {
    @Autowired
    private FacilitySlotRepository slotRepo;

    public synchronized ReservationReceipt bookSeat(UUID slotId, Member member) {
        FacilitySlot slot = slotRepo.findByIdForUpdate(slotId)
            .orElseThrow(() -> new EntityNotFoundException("Slot unavailable"));
        
        if (slot.isOccupied()) {
            throw new SlotConflictException("Seat already booked for requested timeframe");
        }
        
        slot.assignMember(member);
        slot.setStatus(SlotStatus.CONFIRMED);
        slotRepo.save(slot);
        
        return new ReservationReceipt(slot.getCode(), member.getId(), LocalDateTime.now());
    }
}`
      },
      featuredProject: 'High-Throughput Booking & Inventory Microservice'
    },
    {
      id: 'angular-stack',
      name: 'Angular',
      category: 'frameworks',
      badge: 'Enterprise Single-Page Apps',
      level: 'Senior Architecture',
      years: 'Enterprise Dashboards & RxJS',
      summary:
        'Specialized in building large-scale, modular Angular SPAs with strict TypeScript, dependency injection, reactive forms, and complex RxJS telemetry pipelines.',
      color: 'text-rose-600',
      bgLight: 'bg-rose-50',
      borderColor: 'border-rose-300',
      iconName: 'Layers',
      strengths: [
        'RxJS Observables & Asynchronous Stream Handling',
        'Dependency Injection & Modular Lazy Routing',
        'TypeScript Interfaces & Reactive Form Validation',
        'High-density Enterprise Data Tables & Telemetry'
      ],
      codeSample: {
        filename: 'cohort-analytics.component.ts',
        language: 'typescript',
        code: `// Angular Component with RxJS Observables & Reactive State
@Component({
  selector: 'app-cohort-analytics',
  templateUrl: './cohort-analytics.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CohortAnalyticsComponent implements OnInit {
  private readonly operationsService = inject(OperationsService);

  readonly kpis$ = this.operationsService.getLiveCohortData().pipe(
    map(cohorts => this.calculateRetention(cohorts)),
    shareReplay(1)
  );

  onDateFilterChange(range: DateRange): void {
    this.operationsService.setRange(range);
  }
}`
      },
      featuredProject: 'Dlytica Operations & Telemetry Portal'
    },
    {
      id: 'typescript-stack',
      name: 'TypeScript',
      category: 'languages',
      badge: 'Full-Stack Safety',
      level: 'Everyday Standard',
      years: 'Production Standard',
      summary:
        'Unified typing layer connecting client-side React/Angular frontends with backend APIs, ensuring compile-time guarantees, zero runtime type errors, and maintainable systems.',
      color: 'text-blue-600',
      bgLight: 'bg-blue-50',
      borderColor: 'border-blue-300',
      iconName: 'Shield',
      strengths: [
        'Static typing, Generics & Discriminated Unions',
        'Shared client-server API contract interfaces',
        'Enhanced IDE tooling, code completion & refactoring',
        'High maintainability in team environments'
      ],
      codeSample: {
        filename: 'domainContracts.ts',
        language: 'typescript',
        code: `// Type-Safe Operational Domain Definition
export type PartnershipStage = 'prospect' | 'negotiation' | 'active' | 'renewed';

export interface EnterpriseAccount<TStage extends PartnershipStage> {
  readonly id: string;
  readonly partnerName: string;
  readonly currentStage: TStage;
  readonly annualContractValue: number;
  readonly activeSLA: TStage extends 'active' ? { guaranteedUptime: number } : never;
}`
      },
      featuredProject: 'Lumasha Mobile App & Executive Portals'
    },
    {
      id: 'python-stack',
      name: 'Python',
      category: 'languages',
      badge: 'Data & Process ETL',
      level: 'Applied Analytical',
      years: 'Data Automation & Pipelines',
      summary:
        'Utilized for data wrangling, automated CSV/CRM sync jobs, ETL scripts, supply-demand forecasting calculations, and automated report generation.',
      color: 'text-emerald-600',
      bgLight: 'bg-emerald-50',
      borderColor: 'border-emerald-300',
      iconName: 'Terminal',
      strengths: [
        'Pandas & NumPy data manipulation',
        'Automated CRM sync & ETL ingestion scripts',
        'Rapid prototyping of computational models',
        'Web scraping & automated market intelligence'
      ],
      codeSample: {
        filename: 'supply_forecast.py',
        language: 'python',
        code: `import pandas as pd
import numpy as np

def compute_inventory_reorder_point(sales_csv: str, lead_time_days: int = 14):
    df = pd.read_csv(sales_csv)
    avg_daily_velocity = df['units_sold'].mean()
    demand_std_dev = df['units_sold'].std()
    
    # 95% service level factor
    safety_stock = 1.65 * demand_std_dev * np.sqrt(lead_time_days)
    reorder_point = (avg_daily_velocity * lead_time_days) + safety_stock
    return round(reorder_point)`
      },
      featuredProject: 'Automated Demand Forecasting & CRM Data Sync'
    },
    {
      id: 'sql-stack',
      name: 'SQL & Relational Databases',
      category: 'systems',
      badge: 'Data Architecture',
      level: 'Relational Specialist',
      years: 'PostgreSQL, MySQL & Data Modeling',
      summary:
        'Relational schema design, ACID transactions, financial auditing queries, multi-table joins, indexing optimization, and business metric aggregations.',
      color: 'text-teal-600',
      bgLight: 'bg-teal-50',
      borderColor: 'border-teal-300',
      iconName: 'Database',
      strengths: [
        'Relational schema design (3NF/BCNF)',
        'Complex aggregations & window functions',
        'Indexes, query optimization & EXPLAIN analysis',
        'ACID transactions & data integrity constraints'
      ],
      codeSample: {
        filename: 'mrr_retention_audit.sql',
        language: 'sql',
        code: `-- Recurring Monthly Revenue & Churn Analysis
SELECT 
    DATE_TRUNC('month', created_at) AS join_month,
    COUNT(DISTINCT member_id) AS active_subscribers,
    SUM(monthly_rate) AS monthly_recurring_revenue,
    ROUND(AVG(facility_hours_used), 2) AS avg_hours_per_member
FROM active_memberships
WHERE status = 'ACTIVE'
GROUP BY 1
ORDER BY 1 DESC;`
      },
      featuredProject: 'Bagisha Membership Database & Financial Analytics'
    }
  ],

  skills: [
    {
      id: 'business-development',
      title: 'Business Development & Growth',
      icon: 'TrendingUp',
      description: 'Strategic pipeline generation, B2B/B2C growth strategy, and high-impact partnership acquisition.',
      skills: [
        'Revenue Growth & Expansion',
        'Go-To-Market (GTM) Strategy',
        'B2B & B2C Sales Strategy',
        'Strategic Partnerships',
        'Key Account Management',
        'Customer Acquisition (CAC)',
        'Lead Generation Pipelines',
        'Market Development & Entry'
      ]
    },
    {
      id: 'operations-scaling',
      title: 'Operations & Process Scaling',
      icon: 'Sliders',
      description: 'Building repeatable systems, optimizing costs, tracking KPIs, and driving operational efficiency.',
      skills: [
        'Operations Management',
        'Startup Scaling & Autopilot Systems',
        'Process Improvement & Automation',
        'KPI Development & Dashboards',
        'Budget & Financial Planning',
        'Vendor & Supplier Management',
        'Resource Allocation',
        'Change Management'
      ]
    },
    {
      id: 'marketing-analytics',
      title: 'Performance Marketing & CRM',
      icon: 'BarChart3',
      description: 'Data-backed multi-channel customer acquisition, funnel conversion, and CRM intelligence.',
      skills: [
        'Performance Marketing',
        'Digital Marketing Campaigns',
        'Google Ads & Meta Ads',
        'SEO & Organic Acquisition',
        'Email & Lifecycle Marketing',
        'CRM System Architecture',
        'Customer Retention Programs',
        'Marketing Analytics & Attribution'
      ]
    },
    {
      id: 'leadership-management',
      title: 'Leadership & Stakeholder Management',
      icon: 'Users',
      description: 'Cross-functional orchestration, consensus-building, executive pitching, and client relationship mastery.',
      skills: [
        'Cross-Functional Team Leadership',
        'Stakeholder Engagement',
        'Contract & Terms Negotiation',
        'Client Relationship Management',
        'Investor & Partner Pitching',
        'Workforce Planning & Coaching',
        'Conflict Resolution',
        'Business Analysis'
      ]
    },
    {
      id: 'program-management',
      title: 'Program & Project Delivery',
      icon: 'Layers',
      description: 'Delivering complex multi-stakeholder programs on schedule, within budget, and with high accountability.',
      skills: [
        'Agile & Scrum Methodologies',
        'Project Lifecycle Execution',
        'Risk Management & Mitigation',
        'Timeline & Milestone Tracking',
        'Resource Coordination',
        'Program Delivery & Evaluation',
        'Governance & Documentation',
        'Quality Assurance & Reviews'
      ]
    },
    {
      id: 'technology-digital',
      title: 'Technical Acumen & Systems',
      icon: 'Terminal',
      description: 'Computer science foundation enabling fluid communication between engineering, product, and C-suite.',
      skills: [
        'Computer Science Degree (B.Sc.)',
        'CRM & ERP Systems Deployment',
        'Workflow & Tool Automation',
        'React, TypeScript & Modern Web',
        'Data Tracking & Reporting Tools',
        'Digital Booking & Seat Engines',
        'Database & System Architecture',
        'Tech-Enabled Retail Operations'
      ]
    }
  ],

  caseStudies: [
    {
      id: 'bagisha-scaling',
      title: 'From 0 to Self-Sustaining Autopilot Operation',
      subtitle: 'Founding & Scaling Bagisha Reading Room into a Thriving Recurring Revenue Business',
      organization: 'Bagisha Reading Room',
      role: 'Co-Founder & Business Development Officer',
      period: 'December 2019 - Present',
      location: 'Kathmandu, Nepal',
      badge: 'Venture Building & Operations Scaling',
      overview:
        'Conceived, validated, and scaled a premium modern study and workspace venture. Designed the physical and digital infrastructure, established multi-channel customer acquisition funnels, and engineered operating systems to transition day-to-day management onto automated autopilot.',
      challenge:
        'High commercial real estate overheads and competitive density required achieving rapid occupancy, high member retention, and low operating costs without burning founder bandwidth.',
      strategy: [
        'Engineered dynamic tiered pricing and membership subscription models to lock in recurring monthly cash flow.',
        'Forged strategic institutional partnerships with colleges, coaching academies, and student community organizations.',
        'Executed multi-channel digital acquisition funnels across SEO, Google Ads, Meta Ads, and localized community activations.',
        'Pioneered technology adoption including online reservation portals, automated check-in, and CRM tracking to optimize space utilization.',
        'Developed standardized SOPs and management playbooks so on-site staff run daily operations independently.'
      ],
      results: [
        'Achieved full operational self-sustainability with consistent recurring revenue generation.',
        'Transitioned from founder-dependent daily oversight to an automated autopilot management model.',
        'Built durable brand equity with strong word-of-mouth referral rates and sustained high occupancy.'
      ],
      impactMetrics: [
        { label: 'Operating Model', value: '100% Autopilot', context: 'Transitioned off founder daily involvement' },
        { label: 'Revenue Model', value: 'Recurring', context: 'Predictable recurring subscription cashflow' },
        { label: 'Digital Adoption', value: 'Full Stack', context: 'Integrated online booking & CRM tracking' }
      ],
      tags: ['Startup Scaling', 'Business Modeling', 'Process Automation', 'Partnerships', 'P&L Management']
    },
    {
      id: 'dlytica-academy',
      title: 'Operational Overhaul & Program Excellence',
      subtitle: 'Leading Multi-Program Operations, Workforce Enablement & Stakeholder Partnerships',
      organization: 'Dlytica Inc',
      role: 'Academy Manager | Business Development & Operations',
      period: 'July 2023 - June 2024',
      location: 'Toronto, ON, Canada',
      badge: 'Program & Academy Leadership',
      overview:
        'Directed operational governance, program delivery, and workforce enablement for educational and corporate cohorts at Dlytica Inc. Aligned business development objectives with structured operational frameworks to maximize participant outcomes and organizational throughput.',
      challenge:
        'Managing cross-functional program delivery across diverse stakeholders, tight budgets, and shifting timelines while maintaining strict quality benchmarks and scaling cohort intake.',
      strategy: [
        'Structured operational processes, performance metrics, and automated KPI reporting to improve accountability.',
        'Supervised and mentored cross-functional instructional and operational teams, spearheading talent onboarding and reviews.',
        'Implemented enterprise CRM workflows and data pipelines for end-to-end visibility on student lifecycles and partner engagements.',
        'Established formal institutional partnerships with educational bodies, corporate employers, and industry associations.'
      ],
      results: [
        'Streamlined multi-program coordination and eliminated workflow bottlenecks across remote and on-site delivery.',
        'Enhanced institutional transparency and cross-departmental agility via centralized CRM reporting.',
        'Delivered high participant satisfaction metrics while strictly maintaining budget allocations.'
      ],
      impactMetrics: [
        { label: 'Governance', value: 'Multi-Program', context: 'Managed simultaneous academy streams' },
        { label: 'Visibility', value: 'CRM Driven', context: 'Real-time cohort performance tracking' },
        { label: 'Team Leadership', value: 'Cross-functional', context: 'Workforce planning & career coaching' }
      ],
      tags: ['Operations Management', 'Program Delivery', 'CRM Deployment', 'Team Leadership', 'Stakeholder Alignment']
    },
    {
      id: 'lumasha-retail',
      title: 'Channel Expansion & Supply-Demand Optimization',
      subtitle: 'Accelerating Retail Partnerships, Go-To-Market Execution & Multi-Channel Distribution',
      organization: 'Lumasha',
      role: 'Business Development Officer',
      period: 'April 2025 - Present',
      location: 'Edmonton, AB, Canada',
      badge: 'Retail Growth & Strategic BD',
      overview:
        'Leading business development initiatives to accelerate organizational revenue, deepen distribution channels, and forge high-value retail and institutional partnerships across the region.',
      challenge:
        'Balancing rapid customer acquisition with supply chain forecasting, inventory planning, and multi-stakeholder partner coordination in dynamic retail markets.',
      strategy: [
        'Designing and executing multi-channel go-to-market (GTM) campaigns and targeted acquisition drives.',
        'Managing retail partner relationships and distribution networks to expand shelf presence and wholesale margins.',
        'Synchronizing internal supply chain teams, vendors, and distributors to maintain optimal inventory turnover.',
        'Conducting data-driven customer sentiment and market trend analyses to inform new product launch sequences.'
      ],
      results: [
        'Expanded retail network reach and improved distribution consistency across partner channels.',
        'Reduced supply-demand mismatch through disciplined KPI tracking and operational communication loops.',
        'Successfully supported new product rollouts with aligned marketing and customer service touchpoints.'
      ],
      impactMetrics: [
        { label: 'Strategy', value: 'Omni-Channel GTM', context: 'Integrated retail & digital acquisition' },
        { label: 'Operations', value: 'Supply Aligned', context: 'Optimized inventory and vendor delivery' },
        { label: 'Partnerships', value: 'Retail & B2B', context: 'Durable institutional and distributor accounts' }
      ],
      tags: ['Business Development', 'Go-To-Market', 'Distribution Channels', 'Inventory Planning', 'Vendor Relations']
    }
  ],

  experiences: [
    {
      id: 'lumasha',
      role: 'Business Development Officer',
      company: 'Lumasha',
      location: 'Edmonton, AB, Canada',
      period: 'April 2025 - Present',
      isCurrent: true,
      category: 'business-development',
      summary:
        'Driving organizational growth, retail partnerships, supply-demand alignment, and multi-channel go-to-market strategies.',
      bulletPoints: [
        'Lead business development and operational initiatives to drive organizational growth, improve efficiency, and support strategic objectives.',
        'Manage retail partnerships, distribution channels, and customer relationships to increase sales, market reach, and revenue performance.',
        'Coordinate with suppliers, vendors, distributors, and internal teams to align supply and demand, optimize inventory planning, and ensure operational effectiveness.',
        'Develop and execute go-to-market strategies, marketing campaigns, and customer acquisition initiatives across multiple channels.',
        'Oversee operational planning, KPI tracking, reporting, process improvement, and resource allocation to support business objectives.',
        'Build and maintain strategic partnerships with educational institutions, community organizations, retailers, and external stakeholders.',
        'Analyze market trends, customer insights, and business performance data to identify growth opportunities and support decision-making.',
        'Collaborate across departments to improve customer experience, streamline operations, and successfully launch new products and services.'
      ],
      keyMetrics: [
        { value: 'Strategic', label: 'Retail & B2B Partnerships' },
        { value: 'GTM', label: 'Multi-Channel Execution' },
        { value: 'Operations', label: 'Inventory & KPI Alignment' }
      ],
      tags: ['GTM Strategy', 'Retail Partnerships', 'Operations', 'KPI Tracking', 'Inventory Planning', 'Vendor Management']
    },
    {
      id: 'dlytica',
      role: 'Academy Manager | Business Development & Operations',
      company: 'Dlytica Inc',
      location: 'Toronto, ON, Canada',
      period: 'July 2023 - June 2024',
      category: 'operations',
      summary:
        'Oversaw end-to-end academy operations, cross-functional staff supervision, program delivery, and enterprise CRM implementation.',
      bulletPoints: [
        'Managed day-to-day operations, program delivery, and stakeholder engagement to ensure organizational effectiveness and service quality.',
        'Supervised staff and cross-functional teams, providing leadership, coaching, performance management, and professional development support.',
        'Led recruitment, onboarding, workforce planning, and employee engagement initiatives to support organizational growth.',
        'Developed operational processes, performance metrics, and reporting systems to improve efficiency and accountability.',
        'Coordinated multiple projects and programs while managing resources, timelines, budgets, and stakeholder expectations.',
        'Established partnerships with educational institutions, employers, and industry stakeholders to support organizational objectives.',
        'Implemented CRM systems, data tracking processes, and reporting tools to improve operational visibility and decision-making.',
        'Supported strategic planning, business development initiatives, and continuous improvement efforts across the organization.'
      ],
      keyMetrics: [
        { value: 'Multi-Program', label: 'Operations Leadership' },
        { value: 'CRM', label: 'Visibility & Analytics' },
        { value: 'Cross-functional', label: 'Team Governance' }
      ],
      tags: ['Operations Management', 'Program Delivery', 'CRM Systems', 'Workforce Planning', 'Stakeholder Engagement']
    },
    {
      id: 'bagisha',
      role: 'Co-Founder & Business Development Officer',
      company: 'Bagisha Reading Room',
      location: 'Kathmandu, Nepal',
      period: 'December 2019 - Present',
      isCurrent: true,
      category: 'entrepreneurship',
      summary:
        'Founded, structured, and scaled a premier study space enterprise from initial market validation into a profitable autopilot business.',
      bulletPoints: [
        'Founded and scaled a study space business from initial concept and market validation to a fully operational, self-sustaining business model with streamlined processes and recurring revenue generation.',
        'Led end-to-end business operations, including business planning, financial management, customer acquisition, facility operations, team coordination, and continuous process improvement.',
        'Developed and implemented scalable operational systems, workflows, and automation processes to transition the business from founder-driven operations to an autopilot management model.',
        'Defined growth strategies, revenue models, pricing structures, and customer engagement initiatives to increase occupancy, membership retention, and long-term profitability.',
        'Managed business development activities by identifying market opportunities, building strategic partnerships, and establishing relationships with schools, colleges, coaching institutes, and local organizations.',
        'Built and executed sales and marketing strategies across SEO, Google Ads, Meta Ads, social media campaigns, and community outreach to drive customer acquisition and brand growth.',
        'Managed the complete customer lifecycle, including lead generation, sales conversion, onboarding, customer experience, retention strategies, and referral programs.',
        'Established operational KPIs and performance tracking systems to monitor occupancy, revenue growth, customer satisfaction, and business efficiency.',
        'Managed vendor relationships, budgeting, resource allocation, and operational decision-making to optimize costs and improve profitability.',
        'Led technology adoption initiatives, including online booking, digital seat management, and customer management systems to improve operational efficiency and enhance user experience.',
        'Developed the brand identity, promotional strategies, and community engagement initiatives to establish market presence and create a strong local customer base.',
        'Built repeatable processes and management frameworks that enabled sustainable growth with reduced dependency on daily founder involvement.'
      ],
      keyMetrics: [
        { value: '100% Autopilot', label: 'Sustainable Operations' },
        { value: 'End-to-End', label: 'P&L & Marketing Funnel' },
        { value: 'Full Stack', label: 'Tech & Digital Systems' }
      ],
      tags: ['Venture Founder', 'P&L Management', 'Autopilot Operations', 'Digital Marketing', 'Customer Lifecycle', 'SOP Development']
    },
    {
      id: 'microsoft',
      role: 'Microsoft Student Partner',
      company: 'Microsoft Innovation Center',
      location: 'Kathmandu, Nepal',
      period: 'June 2015 - June 2016',
      category: 'leadership',
      summary:
        'Evangelized Microsoft technology initiatives, led rural digital literacy outreach (Hour of Code), and fostered university partnerships.',
      bulletPoints: [
        'Promoted Microsoft products, programs, and technology initiatives by building relationships with universities, student communities, and external partners.',
        'Developed collaboration opportunities with academic institutions and community organizations to expand Microsoft engagement programs.',
        'Coordinated technology outreach initiatives, including the Hour of Code program in rural schools, supporting digital literacy and technology awareness.',
        'Managed stakeholder communication, event coordination, and partnership activities to successfully deliver Microsoft-led programs and initiatives.',
        'Represented Microsoft at community and university events, delivering presentations and supporting brand awareness initiatives.'
      ],
      keyMetrics: [
        { value: 'Hour of Code', label: 'Rural Digital Outreach' },
        { value: 'Ecosystem', label: 'Academic & Tech Partnerships' }
      ],
      tags: ['Tech Evangelism', 'Community Outreach', 'Partner Relations', 'Public Speaking']
    },
    {
      id: 'hult-prize',
      role: 'Event Operations Committee Member',
      company: 'Hult Prize (Kathmandu University - Clinton Global Initiative)',
      location: 'Kathmandu, Nepal',
      period: '2017',
      category: 'leadership',
      summary:
        'Orchestrated operations, partner sponsorship acquisition, and logistical delivery for global social entrepreneurship pitching.',
      bulletPoints: [
        'Supported the organization of the Hult Prize Idea Pitching Competition, a global student entrepreneurship initiative supported by the Hult Prize Foundation and the Clinton Global Initiative.',
        'Managed event operations, logistics, and coordination to ensure smooth execution from planning through final presentations.',
        'Built relationships with sponsors, partners, and stakeholders to support event success and participant engagement.',
        'Coordinated with organizing teams to manage registrations, communications, marketing activities, and on-ground execution.',
        'Supported promotion and outreach initiatives to increase student participation and awareness of entrepreneurship opportunities.'
      ],
      keyMetrics: [
        { value: 'Global Initiative', label: 'Clinton Global Initiative Partner' },
        { value: 'Sponsorships', label: 'Corporate & Partner Relations' }
      ],
      tags: ['Social Entrepreneurship', 'Event Operations', 'Sponsorship Management', 'Logistics Planning']
    },
    {
      id: 'it-meet',
      role: 'Business Development, Sponsorship & Operations Lead',
      company: 'IT Meet (Kathmandu University)',
      location: 'Kathmandu, Nepal',
      period: '2017',
      category: 'business-development',
      summary:
        'Secured enterprise sponsorships, coordinated financial resource planning, and executed operations for a premier tech convention.',
      bulletPoints: [
        'Managed sponsor relationships, partnership coordination, and external communications to secure event support.',
        'Led logistics planning, vendor coordination, and operational execution for a large-scale technology event.',
        'Managed financial coordination and resource planning while collaborating with multiple teams.',
        'Supported content strategy, promotional activities, and audience engagement initiatives.'
      ],
      keyMetrics: [
        { value: 'Large-scale', label: 'Annual Tech Convention' },
        { value: 'Sponsorship', label: 'Commercial Partner Pipeline' }
      ],
      tags: ['Sponsorship Acquisition', 'Financial Planning', 'Vendor Coordination', 'Audience Engagement']
    },
    {
      id: 'world-wood-day',
      role: 'Event Operations & International Relations Volunteer',
      company: 'World Wood Day',
      location: 'Kathmandu, Nepal',
      period: '2015',
      category: 'operations',
      summary:
        'Facilitated operational logistics, exhibition staging, and international guest coordination for a global cultural showcase.',
      bulletPoints: [
        'Supported operational planning and execution for an international craftsmanship showcase featuring global artists and participants.',
        'Coordinated exhibition setup, product displays, and event logistics to ensure smooth showcase operations.',
        'Managed visitor experience, crowd handling, and coordination support for international guests.',
        'Assisted artisans and participants in presenting their craftsmanship and products effectively to attendees.'
      ],
      keyMetrics: [
        { value: 'International', label: 'Global Artisans & Delegates' },
        { value: 'Exhibition', label: 'Logistics & Crowd Operations' }
      ],
      tags: ['International Relations', 'Event Logistics', 'Stakeholder Support']
    }
  ],

  education: [
    {
      id: 'mba',
      degree: 'Masters in Business Administration (MBA)',
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
      degree: 'Bachelors in Computer Science (B.Sc. CS)',
      institution: 'Kathmandu University',
      location: 'Kathmandu, Nepal',
      period: '2013 - 2017',
      credentials: 'B.Sc. in Computer Science',
      summary:
        'Rigorous technical foundation in computer science, system architecture, database design, software development lifecycles, and computational logic.',
      courseworkAndFocus: [
        'Software Engineering & Agile Methodologies',
        'Database Management Systems & SQL',
        'Algorithms, Data Structures & Optimization',
        'Web Technologies & Distributed Systems',
        'Project Management & Systems Analysis',
        'Digital Product Prototyping & Design'
      ]
    }
  ],

  timeline: [
    {
      id: 'cs-degree',
      year: '2013',
      endYear: '2017',
      title: 'The Computational & Engineering Foundation',
      roleOrDegree: 'B.Sc. in Computer Science',
      organization: 'Kathmandu University',
      location: 'Kathmandu, Nepal',
      phase: 'foundation',
      badge: 'Software Architecture & Logic',
      story:
        'Established deep technical roots studying computational theory, database systems, and software engineering. This four-year engineering immersion shaped an algorithmic, data-first mindset that now differentiates Yash in executive business analysis and process automation.',
      achievements: [
        'Mastered core systems engineering, relational databases, data structures, and web technologies.',
        'Collaborated on multi-disciplinary engineering projects utilizing agile and scrum workflows.',
        'Developed intuition for software technical constraints, API integrations, and digital feasibility.'
      ],
      corePillar: 'Technical Acumen & Systems',
      metrics: [
        { label: 'Degree', value: 'B.Sc. CS' },
        { label: 'Duration', value: '4 Years' },
        { label: 'Foundation', value: 'Algorithms & Architecture' }
      ],
      colorGradient: 'from-cyan-500 to-blue-600',
      icon: 'Code'
    },
    {
      id: 'microsoft-partner',
      year: '2015',
      endYear: '2016',
      title: 'Global Tech Outreach & Community Evangelism',
      roleOrDegree: 'Microsoft Student Partner',
      organization: 'Microsoft Innovation Center',
      location: 'Kathmandu, Nepal',
      phase: 'leadership',
      badge: 'Tech Evangelism & Partnerships',
      story:
        'Selected to represent Microsoft across universities and tech communities. Spearheaded cross-institutional outreach, managed partner communications, and brought digital literacy to rural schools through the global "Hour of Code" movement.',
      achievements: [
        'Coordinated the Hour of Code digital literacy program in underserved rural schools.',
        'Organized university developer hackathons and partner workshops promoting Microsoft tools.',
        'Forged early collaborative bridges between academic faculties, student developers, and enterprise sponsors.'
      ],
      corePillar: 'Community & Stakeholder Outreach',
      metrics: [
        { label: 'Initiative', value: 'Hour of Code' },
        { label: 'Scope', value: 'Nationwide' },
        { label: 'Partner', value: 'Microsoft Innovation Center' }
      ],
      colorGradient: 'from-blue-500 to-indigo-600',
      icon: 'Globe'
    },
    {
      id: 'hult-prize-it-meet',
      year: '2017',
      endYear: '2017',
      title: 'Large-Scale Event Operations & Venture Pitching',
      roleOrDegree: 'Sponsorship Lead & Operations Member',
      organization: 'Hult Prize (Clinton Global Initiative) & IT Meet',
      location: 'Kathmandu, Nepal',
      phase: 'leadership',
      badge: 'P&L, Logistics & Corporate Sponsors',
      story:
        'Orchestrated large-scale event operations for two flagship technology and social venture platforms. Managed sponsor relations, secured corporate backing, managed financial planning, and ran on-ground event logistics for hundreds of international and local delegates.',
      achievements: [
        'Secured corporate sponsorship packages by designing high-value visibility and partner benefits.',
        'Managed end-to-end event logistics, vendor contracts, registration pipelines, and venue coordination.',
        'Supported the Hult Prize Idea Pitching Competition for social entrepreneurship backed by the Clinton Global Initiative.'
      ],
      corePillar: 'Event Logistics & Sponsor Relations',
      metrics: [
        { label: 'Platform', value: 'Hult Prize / IT Meet' },
        { label: 'Scope', value: 'Large-Scale Convention' },
        { label: 'Impact', value: 'Corporate Sponsorships' }
      ],
      colorGradient: 'from-amber-500 to-orange-600',
      icon: 'Award'
    },
    {
      id: 'bagisha-founding',
      year: '2019',
      endYear: 'Present',
      title: 'Founding & Scaling Bagisha to 100% Autopilot',
      roleOrDegree: 'Co-Founder & Business Development Officer',
      organization: 'Bagisha Reading Room',
      location: 'Kathmandu, Nepal',
      phase: 'venture',
      badge: 'Venture Scaling & Autopilot Operations',
      story:
        'Identified a high-potential market gap in urban study and work environments. Validated the concept, secured premises, designed physical and digital experiences, and engineered automated workflows that allowed the business to achieve recurring profitability without daily founder intervention.',
      achievements: [
        'Structured tiered membership subscription models ensuring steady recurring monthly cash flow.',
        'Implemented digital booking, automated seat allocation, and integrated CRM to optimize facility occupancy.',
        'Executed multi-channel digital campaigns across SEO, Google Ads, and Meta Ads alongside institutional tie-ups.',
        'Authored comprehensive SOP playbooks and management frameworks enabling on-site staff to run operations on autopilot.'
      ],
      corePillar: 'Entrepreneurship & Scaled Operations',
      metrics: [
        { label: 'Operating Model', value: '100% Autopilot' },
        { label: 'Revenue', value: 'Recurring Subscriptions' },
        { label: 'Technology', value: 'Digital Booking & CRM' }
      ],
      colorGradient: 'from-emerald-500 to-teal-600',
      icon: 'Rocket'
    },
    {
      id: 'mba-edinburgh',
      year: '2020',
      endYear: '2022',
      title: 'Executive Business Administration & Strategy (UK)',
      roleOrDegree: 'Masters in Business Administration (MBA)',
      organization: 'Queen Margaret University',
      location: 'Edinburgh, Scotland, UK',
      phase: 'executive',
      badge: 'Advanced Strategic Leadership',
      story:
        'Pursued intensive executive postgraduate studies in the UK, mastering corporate strategy, international business development, quantitative financial analysis, and organizational change. Solidified the framework for scaling companies through structured operational governance.',
      achievements: [
        'Analyzed global corporate market entries, cross-border supply chains, and capital allocation frameworks.',
        'Completed research in data-driven decision making, customer lifetime value modeling, and organizational agility.',
        'Graduated with honors-level synthesis uniting commercial business discipline with technological innovation.'
      ],
      corePillar: 'Executive Strategy & P&L Mastery',
      metrics: [
        { label: 'Credential', value: 'MBA Postgraduate' },
        { label: 'Institution', value: 'Queen Margaret Univ, UK' },
        { label: 'Focus', value: 'Strategy, Finance & Operations' }
      ],
      colorGradient: 'from-purple-500 to-violet-600',
      icon: 'GraduationCap'
    },
    {
      id: 'dlytica-toronto',
      year: '2023',
      endYear: '2024',
      title: 'Academy Management & Cross-Functional Operations',
      roleOrDegree: 'Academy Manager | Business Development & Operations',
      organization: 'Dlytica Inc',
      location: 'Toronto, ON, Canada',
      phase: 'executive',
      badge: 'Workforce Enablement & CRM Overhaul',
      story:
        'Directed end-to-end academy operations in the competitive Canadian tech ecosystem. Supervised cross-functional instructors and coordinators, established employer partnerships, and deployed centralized CRM reporting for full visibility on student and partner lifecycles.',
      achievements: [
        'Supervised cross-functional teams, driving recruitment, onboarding, and workforce performance reviews.',
        'Built enterprise CRM workflows that tracked student progress, partner engagements, and operational KPIs.',
        'Expanded institutional relationships with employers, colleges, and community stakeholders across Ontario.'
      ],
      corePillar: 'Operations Management & Workforce Enablement',
      metrics: [
        { label: 'Location', value: 'Toronto, Canada' },
        { label: 'Focus', value: 'Multi-Program Delivery' },
        { label: 'Systems', value: 'CRM & Data Pipelines' }
      ],
      colorGradient: 'from-rose-500 to-pink-600',
      icon: 'Briefcase'
    },
    {
      id: 'lumasha-edmonton',
      year: '2025',
      endYear: 'Present',
      title: 'Retail Channel Growth & Strategic BD Leadership',
      roleOrDegree: 'Business Development Officer',
      organization: 'Lumasha',
      location: 'Edmonton, AB, Canada',
      phase: 'expansion',
      badge: 'Retail Distribution & GTM Acceleration',
      story:
        'Leading business development initiatives in Alberta, orchestrating retail partnerships, distribution channels, and customer acquisition. Aligns inventory demand with suppliers while spearheading data-informed go-to-market strategies for new product rollouts.',
      achievements: [
        'Accelerating retail partner networks and wholesale distribution channels across the Canadian market.',
        'Harmonizing supply-demand forecasting with distributors and internal teams to minimize inventory holding costs.',
        'Formulating multi-channel marketing campaigns and building institutional relationships with educational and community groups.'
      ],
      corePillar: 'Go-To-Market & Revenue Acceleration',
      metrics: [
        { label: 'Location', value: 'Edmonton, AB' },
        { label: 'Scope', value: 'Retail & Distribution' },
        { label: 'Focus', value: 'Supply Alignment & GTM' }
      ],
      colorGradient: 'from-teal-400 to-emerald-500',
      icon: 'TrendingUp'
    }
  ]
};
