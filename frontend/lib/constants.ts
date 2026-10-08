import {
  Code2,
  Smartphone,
  Megaphone,
  BrainCircuit,
  Cloud,
  Search,
  Workflow,
  Boxes,
  Layers,
  MessageSquare,
  Zap,
  Database,
  Headphones,
  Award,
  type LucideIcon,
} from "lucide-react";


export const BRAND = {
  name: "Nygrow",
  fullName: "Nygrow Digital Pvt Ltd",
  tagline: "Crafting Tomorrow's Technology, Today",
  headline: "Reimagining IT Services with Purpose",
  description:
    "Nygrow Digital Pvt Ltd is a leading IT services and technology solution provider, helping businesses digitally transform and scale. With deep domain expertise and a passion for solving real-world problems, we're trusted by enterprises in Chennai, Bangalore, and Coimbatore to engineer impactful, custom IT solutions.",
  promise:
    "At Nygrow, we don't just deliver projects — we build lasting partnerships. Every solution we create starts with understanding your vision and translating it into real, measurable success. Whether you're a startup shaping your first digital footprint or an enterprise scaling globally, we stand beside you as your trusted technology partner — helping you innovate boldly, build smarter, and grow with confidence.",
  vision:
    "To be a globally recognized technology partner that helps businesses evolve through innovation, intelligence, and digital transformation in a constantly changing marketplace.",
  mission:
    "To deliver end-to-end IT solutions that combine strategy, creativity, and technology — helping organizations build smarter systems, enhance customer experiences, and achieve measurable growth.",
  copyright: "© 2025 Nygrow Digital Pvt Ltd. All rights reserved.",
  founded: "2022",
  hq: "Coimbatore",
  locations: ["Coimbatore", "Chennai", "Bangalore"],
} as const;

export const CONTACT = {
  info: {
    email: "info@nygrow.co.in",
    phone: "+91 89036 91770",
    location: "Coimbatore, India",
  },
  sales: {
    email: "sales@nygrow.co.in",
    phone: "+91 82209 99940",
  },
  careers: {
    email: "careers@nygrow.co.in",
    phone: "+91 90926 06770",
  },
  social: {
    instagram: "https://www.instagram.com/nygrowdigital",
    linkedin: "#",
    twitter: "https://x.com/NygrowDigital",
    facebook: "https://www.facebook.com/profile.php?id=61579758592523",
  },
} as const;

export type NavLink = { label: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "/#services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Partners", href: "/#partners" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline?: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  /** optional brand logo shown instead of the icon (light theme) */
  logo?: string;
  /** optional brand logo shown instead of the icon (dark theme) */
  logoInverted?: string;
  color: string;
  gradient: string;
  ctaText?: string;
  features: string[];
  subServices?: { title: string; description: string }[];
  processSteps?: { title: string; description: string }[];
  technologies?: string[];
  industries?: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "web-development",
    title: "Website Design & Development",
    shortTitle: "Web Development",
    tagline: "leading website development company",
    description:
      "Nygrow is a trusted website design and development company serving Coimbatore, Chennai, Bengaluru, and clients worldwide. We craft modern, responsive, SEO-friendly websites that elevate brands and accelerate growth — built for performance, security, and scale.",
    longDescription:
      "A website today is more than a digital brochure — it's the engine that powers your brand's growth. At Nygrow, we merge cutting-edge development, scalable architecture, and impactful design to build websites and web applications that are fast, secure, mobile-ready, and SEO-optimized, from corporate sites and high-performing e-commerce stores to enterprise-grade applications.",
    icon: Code2,
    color: "#16A34A",
    gradient: "from-emerald-500 to-green-600",
    ctaText: "Design My Site",
    features: [
      "Expertise across front-end and back-end development",
      "SEO-friendly architecture that drives traffic and rankings",
      "Mobile-first, responsive design for every device",
      "Secure coding practices with enterprise-level data protection",
      "Transparent pricing, no hidden costs",
      "24/7 technical support",
    ],
    subServices: [
      { title: "Custom Web Application Development", description: "Scalable, secure applications tailored to your workflows, from dashboards and portals to industry-specific apps." },
      { title: "Enterprise Web Application Development", description: "Clean-architecture, high-security applications for complex operations at scale." },
      { title: "E-Commerce Development", description: "Conversion-driven stores with secure payments and mobile-first design." },
      { title: "CMS Web Development", description: "WordPress, Joomla, or Drupal platforms that are easy to update and SEO-friendly." },
      // { title: "ERP Software Development", description: "Custom ERP solutions integrating finance, HR, supply chain, and operations into a unified, automated platform." },
      { title: "Website Design & UI/UX", description: "Visually engaging, accessible interfaces built to convert." },
      { title: "Landing Page Design", description: "fast, conversion-optimized pages for campaigns and lead generation." },
    ],
    processSteps: [
      { title: "Consultation & Strategy", description: "We begin by understanding your goals and crafting a clear roadmap for success." },
      { title: "Design & Architecture", description: "Creating intuitive designs and scalable architectures tailored to your business." },
      { title: "Development", description: "Building robust, high-performance solutions using modern technologies." },
      { title: "Testing", description: "Rigorous QA ensures your product is secure, reliable, and bug-free." },
      { title: "Deployment", description: "Smooth rollout with minimal downtime and maximum impact." },
      { title: "Maintenance & Support", description: "Ongoing updates, monitoring, and 24/7 support to keep you growing." },
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Angular", "Vue", "Node.js", "PHP", "Python", "Laravel", "Django", "MySQL", "PostgreSQL", "MongoDB", "WordPress", "Shopify", "WooCommerce", "Magento", "Figma", "Adobe XD"],
    industries: ["Healthcare", "Manufacturing", "Retail", "Telecom", "Education", "B2B Enterprises", "Logistics", "Professional Services", "Hospitality", "Non-profits", "Utilities & Travel"],
  },
  {
    slug: "mobile-app",
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    tagline: "Crafting Apps That Engage, Experiences That Convert",
    description:
      "Mobile apps drive sales, streamline workflows, and boost engagement. Nygrow builds custom mobile experiences — native iOS and Android, hybrid, and cross-platform — that are scalable, secure, and designed to deliver measurable business results for clients in Chennai, Coimbatore, and beyond.",
    longDescription:
      "Mobile apps are reshaping industries — driving sales, streamlining workflows, and boosting customer engagement. At Nygrow, we deliver custom mobile app development services tailored to your unique goals. Our expert app designers and developers create visually striking, performance-driven mobile applications that are scalable, secure, and designed to deliver measurable business results.",
    icon: Smartphone,
    color: "#FBBF24",
    gradient: "from-amber-400 to-orange-500",
    ctaText: "Build My App",
    features: [
      "Affordable development without compromising quality",
      "Dedicated app developers and round-the-clock support",
      "Agile delivery with native and cross-platform expertise",
      "App Store Optimization included to maximize reach",
      "Transparent pricing with on-time delivery",
    ],
    subServices: [
      { title: "iOS App Development", description: "High-performance apps built to Apple's standards, with seamless UX and data security." },
      { title: "Android App Development", description: "Feature-rich apps optimized across the Android ecosystem, including tablets and wearables." },
      { title: "Cross-Platform Development", description: "Flutter and React Native apps that cut cost and time-to-market without sacrificing quality." },
      { title: "Progressive Web Apps (PWA) Development", description: "Offline-capable, push-notification-ready apps combining web reach with native feel." },
      { title: "Mobile UI/UX Design", description: "Human-centric interfaces focused on usability and retention." },
      { title: "Mobile App Testing & QA", description: "Functionality, usability, security, and performance testing before every launch." },
      { title: "App Maintenance & Support", description: "Ongoing updates, monitoring, and feature enhancements post-launch." },
      { title: "Enterprise Mobility Solutions", description: "Internal tools and customer-facing platforms built to scale." },
    ],
    processSteps: [
      { title: "Strategy & Analysis", description: "We begin by understanding your goals, target audience, and defining a clear roadmap." },
      { title: "Design & Wireframing", description: "Crafting intuitive wireframes and engaging designs for seamless user experiences." },
      { title: "Agile Development", description: "Iterative, agile-driven development ensures faster delivery and adaptability." },
      { title: "Testing & QA", description: "Rigorous testing guarantees performance, security, and bug-free apps." },
      { title: "Deployment & ASO", description: "Smooth rollout to app stores with optimization for visibility and downloads." },
      { title: "Ongoing Support", description: "Continuous monitoring, updates, and support to keep your app thriving." },
    ],
    technologies: ["Java", "Kotlin", "Swift UI", "React Native", "Flutter", "Objective-C", "AI/ML", "IoT", "AR", "Blockchain", "Figma", "Sketch", "Adobe XD", "GitHub."],
    industries: ["Enterprise & Compliance", "Supply Chain & Logistics", "M-Commerce & Retail", "Healthcare & Telemedicine", "Fitness & Wellness", "Fintech & Banking", "Travel & Hospitality", "Events & Ticketing", "Real Estate", "Government & Public Services", "Non-Profit", "Entertainment & Media"],
  },
/* ─────────────────────────────────────────────────────────────
   * Digital Marketing & SEO services are temporarily hidden.
   * Uncomment the block below to re-enable them on the site.
   * ─────────────────────────────────────────────────────────────
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortTitle: "Marketing",
    tagline: "Drive Traffic. Build Engagement. Maximize Conversions.",
    description:
      " Nygrow is a data-driven digital marketing agency in Coimbatore, combining SEO, PPC, social media, email marketing, and content strategy to help brands drive qualified traffic, deepen engagement, and grow consistently across every channel.",
    longDescription:
      "Digital marketing is the backbone of modern business growth. As a leading digital marketing company in Coimbatore, Nygrow combines data-driven insights with innovative strategies to deliver scalable results. From boosting organic visibility with SEO to generating instant impact with PPC and paid campaigns, building brand loyalty through social media and email marketing, or optimizing conversion funnels — we integrate innovative ideas with a data-driven approach to build your brand presence, drive traffic, and increase conversions.",
    icon: Megaphone,
    color: "#F97316",
    gradient: "from-orange-400 to-red-500",
    ctaText: "Free Marketing Audit",
    features: [
      "Full-funnel expertise — SEO, PPC, social, email, and CRO under one roof",
      "Certified Google, Meta, and LinkedIn specialists",
      "Custom strategies tailored to your industry and goals",
      "Transparent reporting with real-time dashboards",
      "24/7 dedicated support from strategy through scaling",
    ],
    subServices: [
      { title: "Search Engine Optimization (SEO)", description: "Technical, on-page, off-page, and local SEO that drives sustainable organic growth." },
      { title: "Pay-Per-Click (PPC)", description: "ROI-focused campaigns across Google, Meta, LinkedIn, and YouTube — from strategy to ad copy and optimization." },
      { title: "Social Media Marketing", description: "Content, creative, and paid strategies that grow audience, boost engagement, and build loyalty." },
      { title: "Content Marketing", description: "Blogs, videos, infographics, and case studies that establish authority and drive traffic." },
      { title: "Email & Marketing Automation", description: "Segmented, automated campaigns that improve open rates, CTR, and ROI." },
      { title: "Conversion Rate Optimization (CRO)", description: "Behavior analysis, funnel optimization, and A/B testing to maximize conversions." },
      { title: "Analytics & Performance Tracking", description: "GA4 setup, advanced tagging, and custom dashboards for real-time insights." },
      { title: "Brand Recognition", description: "Cross-channel visibility, storytelling, and influencer tie-ins to strengthen brand presence." },
      { title: "SMS Marketing", description: "Targeted, personalized SMS campaigns for promotions, updates, and reminders." },
    ],
    processSteps: [
      { title: "Audit", description: "Comprehensive review of your current digital presence, campaigns, and performance metrics." },
      { title: "Strategic Planning", description: "Developing a tailored roadmap with channel mix, targeting, and creative direction." },
      { title: "Launch", description: "Executing campaigns across SEO, PPC, social, and email with precision." },
      { title: "Optimization & Scaling", description: "Continuous A/B testing, budget optimization, and scaling successful campaigns." },
      { title: "Review & Expansion", description: "Analyzing results, refining strategies, and expanding into new growth opportunities." },
    ],
    technologies: ["SEMrush", "Ahrefs", "HubSpot", "Google Analytics", "Data Studio"],
    industries: ["E-commerce", "B2B/SaaS", "Healthcare", "Education", "Real Estate", "Finance", "Hospitality", "Manufacturing", "Local Services"],
  },
  {
    slug: "seo",
    title: "Search Engine Optimization",
    shortTitle: "SEO",
    tagline: "Rank. Drive. Convert.",
    description:
      "Nygrow is a results-driven SEO agency in Coimbatore, helping startups and enterprises boost visibility, build authority, and drive high-intent traffic. With 93% of online experiences starting with a search engine, we cover on-page, off-page, technical, voice, and local SEO to give your business a complete advantage — locally, nationally, or globally.",
    longDescription:
      "At Nygrow, we power brands with bold, results-driven SEO. As a leading SEO agency in Coimbatore, we offer tailored strategies for both startups and enterprises. With 93% of online experiences starting with a search engine, your visibility determines your growth. We specialize in On-page SEO, Off-page SEO, Technical SEO, voice search optimization, and local search — giving your business a comprehensive advantage.",
    icon: Search,
    color: "#60A5FA",
    gradient: "from-sky-400 to-blue-500",
    ctaText: "Free SEO Audit",
    features: [
      "Proven performance — average 120% increase in organic traffic within 6–9 months",
      "Higher ROI — clients see up to 3x more leads and 2.5x higher conversions",
      "Advanced tools — Ahrefs, SEMrush, and Google Analytics for precision execution",
      "Custom-tailored strategies — no one-size-fits-all tactics",
      "Full transparency — real-time dashboards and reporting",
      "White-hat, scalable techniques for long-term, sustainable growth",
    ],
    subServices: [
      { title: "Site Audit", description: "Full technical, on-page, and UX review with clear recommendations and ongoing monitoring." },
      { title: "Competitive Analysis", description: "Deep dive into competitor rankings, backlinks, and keyword targeting to uncover growth opportunities." },
      { title: "Keyword Research", description: "High-intent, low-competition keyword targeting that shapes your content and SEO strategy." },
      { title: "Page Optimization", description: "Meta tags, headings, internal linking, speed, and mobile responsiveness improvements." },
      { title: "Content Creation", description: "SEO-driven blogs, landing pages, and website copy aligned with keyword goals to build authority." },
      { title: "Impactful Reporting", description: "Transparent reporting on rankings, traffic, and conversions with actionable insights." },
      { title: "Site Health Maintenance", description: "Ongoing technical monitoring and fast issue resolution to keep your site optimized." },
      { title: "SEO Consulting", description: "One-on-one strategy audits, performance analysis, and tailored roadmaps for in-house teams." },
    ],
    processSteps: [
      { title: "Discovery & Goals", description: "Understanding your business objectives and defining SEO success metrics." },
      { title: "Site Audit & Fixes", description: "Comprehensive technical and on-page audit with immediate fixes for site health." },
      { title: "Keyword & Content Strategy", description: "Building a keyword-driven content roadmap to capture high-intent traffic." },
      { title: "On-Page & Off-Page Optimization", description: "Optimizing site elements and building authoritative backlinks for ranking growth." },
      { title: "Reporting & Iteration", description: "Transparent reporting with continuous refinement based on performance data." },
    ],
    technologies: ["Google Analytics", "Search Console", "Tag Manager", "SEMrush", "Ahrefs", "Moz", "Screaming Frog", "SurferSEO", "Clearscope", "WordPress", "GTmetrix", "PageSpeed Insights", "Hotjar", "Looker", "HubSpot",],
  },
  ───────────────────────────────────────────────────────────── */
  {
    slug: "ai-ml",
    title: "AI / ML Solutions",
    shortTitle: "AI / ML",
    tagline: "Transform Ideas into Intelligent Solutions",
    description:
      "Strategy, custom model development, NLP, computer vision, and generative AI that turns your data into a competitive advantage.",
    longDescription:
      "Nygrow is an AI/ML development company in Coimbatore delivering AI and machine learning solutions for businesses in Chennai, Bengaluru, and globally — engineered for real business value, not novelty.",
    icon: BrainCircuit,
    color: "#EF4444",
    gradient: "from-rose-400 to-pink-500",
    ctaText: "Start AI Project",
    features: [
      "Deep expertise across AI, ML, NLP, computer vision, and generative AI",
      "Custom-built systems, not one-size-fits-all models",
      "Enterprise-grade, secure, scalable architecture",
      "Agile delivery for faster time-to-market",
      "End-to-end support from strategy through MLOps",
      "Transparent collaboration with measurable KPIs",
    ],
    subServices: [
      { title: "AI Strategy & Consulting", description: "Readiness assessment, use-case prioritization, and technology stack selection." },
      { title: "Data Collection & Annotation", description: "Clean, unbiased, production-ready datasets." },
      { title: "Custom AI/ML Model Development", description: "Predictive analytics, recommendation engines, demand forecasting, risk analysis." },
      { title: "Natural Language Processing", description: "Sentiment analysis, chatbots, summarization, entity extraction." },
      { title: "Computer Vision", description: "Image recognition, object detection, quality inspection, visual analytics." },
      { title: "Generative AI", description: "Content, image, audio/video generation, and conversational AI." },
      { title: "AI-Powered Agents & Automation", description: "Customer support bots and back-office RPA." },
      { title: "MLOps & Deployment", description: "Versioning, monitoring, and production-grade scaling." },
      { title: "AI-Powered Analytics", description: "Predictive models and advanced dashboards." },
    ],
    processSteps: [
      { title: "Discovery & Strategy", description: "We begin by identifying business goals, defining AI opportunities, and creating a clear roadmap." },
      { title: "Data Analysis & Preparation", description: "Curating, cleaning, and structuring datasets to ensure accuracy, fairness, and readiness for modeling." },
      { title: "Model Design & Development", description: "Building predictive, generative, or analytical models tailored to your workflows and industry." },
      { title: "Testing & Validation", description: "Rigorous evaluation to ensure performance, accuracy, and compliance with business requirements." },
      { title: "Deployment & Integration", description: "Seamless rollout into production environments with integration into your existing systems." },
      { title: "Monitoring & Optimization", description: "Continuous tracking of model performance with fine-tuning for accuracy and efficiency." },
      { title: "Ongoing Support & Scaling", description: "Lifecycle support, updates, and scaling strategies to keep your AI solutions future-ready." },
    ],
    technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Kafka", "Snowflake", "Spark", "PyTorch", "TensorFlow", "LangChain", "LlamaIndex", "OpenAI", "Hugging Face", "MLflow"],
    industries: ["Healthcare & Life Sciences", "Finance & Fintech", "Retail & E-Commerce", "Logistics", "Manufacturing", "Media", "Education", "Public Sector"],
  },
  {
    slug: "cloud-server",
    title: "Cloud & Server Infrastructure",
    shortTitle: "Cloud Infra",
    tagline: "Reliable. Scalable. Secure.",
    description:
      "Nygrow designs, deploys, and manages cloud and on-premises infrastructure that keeps your business fast, secure, and always on — from server setup and cloud hosting on AWS, Azure, and Google Cloud, to zero-downtime migrations, 24/7 security monitoring, and performance optimization.",
    longDescription:
      "At Nygrow, we design, deploy, and manage cloud and on-premises infrastructure that keeps your business fast, secure, and always on. From server setup & configuration to cloud hosting on AWS, Azure, and Google Cloud, zero-downtime migrations, 24/7 security monitoring, and performance optimization — our certified engineers deliver enterprise-grade uptime, tighter protection, and lower running costs.",
    icon: Cloud,
    color: "#A78BFA",
    gradient: "from-violet-400 to-purple-500",
    ctaText: "Get Cloud Audit",
    features: [
      "99.99% uptime you can count on",
      "Scalable infrastructure that grows without re-architecture",
      "Enterprise-grade security and compliance management",
      "Cost-optimized architecture planning to maximize ROI",
      "24/7 expert support from certified engineers",
    ],
    subServices: [
      { title: "Server Setup & Configuration", description: "Dedicated, VPS, hybrid, and cloud environments tailored to your workload and security needs." },
      { title: "Cloud Hosting (AWS, Azure, Google Cloud)", description: "Scalable, cost-efficient, multi-cloud deployments." },
      { title: "Server Migration & Data Transfer", description: "Zero-downtime migration with full data integrity." },
      { title: "Server Security & Monitoring", description: "Firewalls, intrusion detection, DDoS protection, and real-time monitoring." },
      { title: "Performance Optimization", description: "CPU, memory, and storage tuning for lower latency and higher availability." },
      { title: "24/7 Server Support", description: "Certified engineers on standby for routine checks and critical incidents." },
    ],
    processSteps: [
      { title: "Assessment & Planning", description: "We start by analyzing your current infrastructure, identifying gaps, and creating a tailored cloud strategy." },
      { title: "Implementation & Setup", description: "Provisioning servers, configuring environments, and setting up secure cloud architecture." },
      { title: "Migration & Data Transfer", description: "Seamless migration of applications, workloads, and data with minimal downtime." },
      { title: "Optimization & Automation", description: "Fine-tuning performance, cost optimization, and automating repetitive tasks for efficiency." },
      { title: "Monitoring & Support", description: "Continuous monitoring, proactive issue resolution, and 24/7 support to ensure reliability." },
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Jenkins", "GitHub Actions (CI/CD & DevOps)"],
  },
  {
    slug: "zoho",
    title: "Zoho Setup & Customization",
    shortTitle: "Zoho Partner",
    tagline: "Streamline. Automate. Scale.",
    description:
      "Nygrow is a trusted Zoho Authorized Partner helping businesses in Coimbatore, Chennai, and surrounding regions streamline operations with end-to-end Zoho implementation, customization, integration, and support — across healthcare, travel, e-commerce, manufacturing, real estate, and more.",
    longDescription:
      "As an authorized Zoho partner, Nygrow streamlines and automates your workflows through expert Zoho setup and customization. From CRM implementation to advanced business process automation, we help you maximize productivity and efficiency. Our team ensures seamless app integration across the Zoho suite and third-party platforms, enabling unified operations throughout your organization.",
    icon: Workflow,
    logo: "/logos/zoho-logo.svg",
    logoInverted: "/logos/zoho-logo-inverted.svg",
    color: "#DC2626",
    gradient: "from-red-500 to-rose-600",
    ctaText: "Get Zoho Consultation",
    features: [
      "24/7 dedicated technical support",
      "Transparent communication and pricing — no hidden costs",
      "Certified Zoho developers with deep application expertise",
      "Flexible, highly adaptable customization options",
      "99.9% implementation accuracy across projects",
      "Secure migration with zero data loss",
    ],
    subServices: [
      { title: "Zoho CRM", description: "Lead management and automated sales pipelines to streamline your sales process." },
      { title: "Zoho Books", description: "Accounting, GST compliance, and financial tracking for smarter business decisions." },
      { title: "Zoho People Plus", description: "HR, attendance, payroll, and performance tracking in one unified platform." },
      { title: "Zoho CRM Plus", description: "Unified sales, marketing, support, and analytics for end‑to‑end customer engagement." },
      { title: "Zoho Creator", description: "Custom business applications and workflow automation tailored to your needs." },
      { title: "Zoho Analytics", description: "Interactive dashboards and real‑time reporting to uncover actionable insights." },
      { title: "Zoho One", description: "The full Zoho ecosystem — all apps connected on one platform." },
      { title: "Zoho Desk", description: "Organized ticketing, SLAs, and multichannel support for better customer service." },
      { title: "Zoho Inventory, Projects & Payroll", description: "Inventory management, project tracking, and payroll processing made simple." },
      { title: "Custom Zoho Applications", description: "Bespoke workflows and modules built around your unique business requirements." },
    ],
    processSteps: [
      { title: "Business Discovery", description: "We begin by understanding your business goals, workflows, and pain points to align Zoho solutions with your needs." },
      { title: "Requirement Analysis", description: "Detailed analysis of processes and requirements to identify the right Zoho apps and customizations." },
      { title: "Expert Team Allocation", description: "Assigning certified Zoho developers and consultants to ensure specialized expertise for your project." },
      { title: "Custom Implementation", description: "Configuring Zoho applications, tailoring modules, and building custom workflows to fit your operations." },
      { title: "Testing & QA", description: "Rigorous testing to validate functionality, integrations, and performance before deployment." },
      { title: "Deployment & Ongoing Support", description: "Seamless rollout with continuous monitoring, training, and long-term support to keep your Zoho ecosystem optimized." },
    ],
    industries: ["Healthcare", "Travel & Tourism", "E-Commerce", "Manufacturing", "Real Estate", "Retail", "Education", "Logistics", "Professional Services", "Startups & SMEs",],
    technologies: ["Zoho CRM", "Zoho One", "Zoho Books", "Zoho Desk", "Zoho Creator", "Zoho Flow", "Zoho Analytics"],
  },
  {
    slug: "odoo",
    title: "Odoo Implementation",
    shortTitle: "Odoo Partner",
    tagline: "Unified ERP. Unlimited Possibilities.",
    description:
      "Nygrow helps businesses simplify operations and accelerate growth with powerful Odoo ERP solutions, serving Coimbatore, Chennai, and surrounding regions across manufacturing, retail, healthcare, e-commerce, logistics, real estate, and education.",
    longDescription:
      "As a certified Odoo partner, Nygrow delivers end-to-end Odoo ERP implementation tailored to your business. From accounting and inventory to manufacturing, HR, and e-commerce — we configure, customize, and integrate Odoo modules to unify your operations. Our team handles everything from migration and module development to user training and ongoing support, helping you maximize Odoo's full potential.",
    icon: Boxes,
    logo: "/logos/odoo-logo.png",
    logoInverted: "/logos/odoo-logo-inverted.png",
    color: "#7C3AED",
    gradient: "from-purple-500 to-indigo-600",
    ctaText: "Get Odoo Consultation",
    features: [
      "24/7 dedicated technical support",
      "Transparent communication and pricing — no hidden costs",
      "Experienced, certified Odoo consultants",
      "Flexible, scalable customization options",
      "99.9% implementation accuracy across projects",
      "Secure migration with zero data loss",
    ],
    subServices: [
      { title: "Odoo CRM", description: "Centralized lead, opportunity, and pipeline management." },
      { title: "Odoo Sales", description: "Automated quotations, orders, and invoicing." },
      { title: "Odoo Accounting", description: "Automated compliance, invoicing, and real-time reporting." },
      { title: "Odoo Inventory", description: "Full visibility into stock, warehouse, and procurement." },
      { title: "Odoo Purchase", description: "Automated vendor and procurement workflows." },
      { title: "Odoo Manufacturing (MRP)", description: "Production planning and BOM tracking." },
      { title: "Odoo Human Resources", description: "Attendance, leave, recruitment, and payroll." },
      { title: "Odoo Project Management", description: "Task, timesheet, and resource planning." },
      { title: "Odoo Helpdesk", description: "Ticketing, SLAs, and support workflows." },
      { title: "Odoo E-Commerce & POS", description: "Integrated online and in-store retail operations." },
      { title: "Custom Odoo Applications", description: "Modules built around your exact processes." },
    ],
    processSteps: [
      { title: "Business Discovery", description: "Understanding your business goals, workflows, and challenges to align Odoo solutions." },
      { title: "Requirement Analysis", description: "Detailed analysis of processes and requirements to identify the right Odoo modules." },
      { title: "Solution Design", description: "Architecting tailored Odoo workflows, integrations, and customizations." },
      { title: "Development & Customization", description: "Building and customizing modules to fit your exact business needs." },
      { title: "Testing & QA", description: "Rigorous validation of functionality, performance, and compliance." },
      { title: "Deployment & Continuous Support", description: "Seamless rollout with ongoing monitoring, training, and support." },
    ],

    technologies: ["Odoo 17", "Odoo Studio", "Python", "PostgreSQL", "XML-RPC", "REST APIs"],
    industries: ["Manufacturing", "Retail", "E-Commerce", "Healthcare", "Real Estate", "Logistics & Supply Chain", "Education", "Hospitality", "Professional Services", "Startups & SMEs",],

  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const PROCESS: ProcessStep[] = [
  { number: "01", title: "Discovery & Strategy", description: " Align on goals, industry landscape, and user needs to define the right roadmap." },
  { number: "02", title: "Design Thinking", description: "Prototype practical, usable solutions with empathy and data." },
  { number: "03", title: "Engineering Excellence", description: "Build robust, scalable systems using agile methods." },
  { number: "04", title: "Launch & Optimize", description: "Test, measure, and iterate so the investment keeps paying off." },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  image?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "From design to delivery, Nygrow exceeded expectations. We've worked with several IT services companies before, but none brought the clarity and collaboration they do.",
    name: "Full Name",
    role: "Title",
    company: "Company, Chennai",
    image: "/images/testimonial/priya.jpg"
  },
  {
    quote: "We needed to migrate our servers fast. Nygrow handled it seamlessly and provided ongoing support that made a huge difference to our operations.",
    name: "Full Name",
    role: "Title",
    company: "Company, UAE",
  },
];

export const INDUSTRIES = [
  "Fintech & Insurance",
  "Oil, Gas & Mining",
  "Education",
  "Retail & E-commerce",
  "Energy & Utilities",
  "Logistics & Distribution",
  "Healthcare",
  "Travel & Hospitality",
  "Media & Entertainment",
  "Public Sector",
];

export const CORE_VALUES = [
  "Solve real problems, not just deliver tech",
  "Design with users in mind, always",
  "Build systems that grow with your business",
  "Collaborate openly and transparently",
  "Stay curious, stay practical",
  "Optimize beyond launch day",
  "Keep ethics and inclusivity at the core",
];

export const NYGROW_DIFFERENCE = [
  {
    icon: Layers,
    title: "Complete in-house expertise",
    desc: "From concept to deployment, we handle every step with precision."
  },
  {
    icon: MessageSquare,
    title: "Transparent communication",
    desc: "A client-first mindset ensures clarity and trust at every stage."
  },
  {
    icon: Zap,
    title: "Agile process",
    desc: "Built for speed and precision, adapting quickly to your needs."
  },
  {
    icon: Database,
    title: "Future-ready architecture",
    desc: "Designed for growth, not just launch — scalable and secure."
  },
  {
    icon: Headphones,
    title: "24/7 dedicated support",
    desc: "Round-the-clock technical assistance whenever you need it."
  },
  {
    icon: Award,
    title: "Certified, skilled team",
    desc: "Proven expertise with real client retention to show for it."
  }
];

export const PARTNERS = [
  { name: "Google Cloud", category: "Cloud" },
  { name: "Microsoft Azure", category: "Cloud" },
  { name: "AWS", category: "Cloud" },
  { name: "Zoho", category: "CRM" },
  { name: "Salesforce", category: "CRM" },
  { name: "Meta Ads", category: "Marketing" },
  { name: "Google Ads", category: "Marketing" },
  { name: "OpenAI", category: "AI" },
  { name: "TensorFlow", category: "AI" },
  { name: "HubSpot", category: "Marketing" },
  { name: "Shopify", category: "E-Commerce" },
  { name: "WooCommerce", category: "E-Commerce" },
  { name: "WordPress", category: "CMS" },
  { name: "Drupal", category: "CMS" },
];
