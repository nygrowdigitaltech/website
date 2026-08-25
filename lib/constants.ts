import {
  Code2,
  Smartphone,
  Megaphone,
  BrainCircuit,
  Cloud,
  Search,
  Workflow,
  Boxes,
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
    "At Nygrow, we don't just deliver projects, we build lasting partnerships. Every solution we create is rooted in understanding your vision and translating it into real, measurable success.",
  vision:
    "To be a globally recognized technology partner that helps businesses evolve through innovation, intelligence, and digital transformation in a constantly evolving marketplace.",
  mission:
    "To deliver end-to-end IT solutions that combine strategy, creativity, and technology, helping organizations build smarter systems, enhance customer experiences, and achieve measurable growth.",
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
    twitter: "#",
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
  color: string;
  gradient: string;
  features: string[];
  subServices?: { title: string; description: string }[];
  technologies?: string[];
  industries?: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "web-development",
    title: "Website Design & Development",
    shortTitle: "Web Development",
    tagline: "Building Websites That Perform, Scale, and Convert",
    description:
      "Custom web apps, enterprise platforms, eCommerce stores, and CMS websites that are fast, secure, and SEO-ready.",
    longDescription:
      "Nygrow is the most trusted website design and development company in Coimbatore, serving clients across Chennai, Bengaluru, and worldwide. We merge cutting-edge development, scalable architecture, and impactful design to create websites and web applications that are fast, secure, mobile-ready, and SEO-optimized. From sleek corporate sites and high-performing e-commerce stores to enterprise-grade applications, our solutions are built to strengthen your brand, capture leads, and deliver measurable results.",
    icon: Code2,
    color: "#16A34A",
    gradient: "from-emerald-500 to-green-600",
    features: [
      "Expertise in front-end & back-end development",
      "SEO-friendly architecture",
      "Mobile-first responsive layouts",
      "Enterprise-level data protection",
      "Agile, full-stack delivery",
      "Transparent pricing, 24/7 support",
    ],
    subServices: [
      { title: "Custom Web Application Development", description: "Scalable, feature-rich, and secure web applications tailored to your workflows — dashboards, portals, and industry-specific apps." },
      { title: "Enterprise Web Application Development", description: "Enterprise-grade applications with clean architecture and robust security, engineered to handle complex business needs at scale." },
      { title: "E-Commerce Development", description: "Conversion-driven online stores with intuitive navigation, secure payment gateways, and mobile-first design." },
      { title: "CMS Web Development", description: "WordPress, Joomla, Drupal platforms that are easy to update, SEO-friendly, and secure — giving you full control." },
      { title: "ERP Software Development", description: "Custom ERP solutions integrating finance, HR, supply chain, and operations into a unified, automated platform." },
      { title: "Website Design & UI/UX", description: "Visually stunning, user-focused websites with modern design, usability, and accessibility built in." },
      { title: "Landing Page Design", description: "Conversion-optimized pages with compelling CTAs, fast load speeds, and engaging visuals for lead generation." },
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Angular", "Vue", "Node.js", "PHP", "Python", "Laravel", "Django", "MySQL", "PostgreSQL", "MongoDB", "WordPress", "Shopify", "WooCommerce", "Magento", "Figma", "Adobe XD"],
    industries: ["Healthcare", "Manufacturing", "Retail", "Telecom", "Education", "B2B Enterprises", "Logistics", "Food & Hospitality", "Non-profits", "Travel"],
  },
  {
    slug: "mobile-app",
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    tagline: "Crafting Apps That Engage, Experiences That Convert",
    description:
      "Powerful iOS, Android, cross-platform, and PWA experiences that are fast, intuitive, and built to scale.",
    longDescription:
      "Mobile apps are reshaping industries — driving sales, streamlining workflows, and boosting customer engagement. At Nygrow, we deliver custom mobile app development services tailored to your unique goals. Our expert app designers and developers create visually striking, performance-driven mobile applications that are scalable, secure, and designed to deliver measurable business results.",
    icon: Smartphone,
    color: "#FBBF24",
    gradient: "from-amber-400 to-orange-500",
    features: [
      "Affordable without compromising quality",
      "99% client retention",
      "Dedicated developers + 24/7 support",
      "Agile, scalable processes",
      "Native + cross-platform expertise",
      "App store optimization",
      "Transparent pricing, on-time delivery",
    ],
    subServices: [
      { title: "iOS App Development", description: "High-performance iOS apps that comply with Apple's standards — premium experiences across iPhone and iPad." },
      { title: "Android App Development", description: "Feature-rich apps optimized for smartphones, tablets, and wearables across the wide Android ecosystem." },
      { title: "Cross-Platform Development", description: "Flutter and React Native apps that deliver consistent functionality across iOS and Android with faster time-to-market." },
      { title: "Progressive Web Apps (PWA)", description: "Lightweight, fast apps with offline capability, push notifications, and mobile-like responsiveness." },
      { title: "Mobile UI/UX Design", description: "Engaging, human-centric interfaces with intuitive navigation and appealing visuals that keep users engaged." },
      { title: "Mobile App Testing & QA", description: "Rigorous QA for functionality, usability, security, and performance — delivering bug-free, launch-ready apps." },
      { title: "App Maintenance & Support", description: "Continuous updates, performance monitoring, feature enhancements, and quick troubleshooting post-launch." },
      { title: "Enterprise Mobility Solutions", description: "Scalable, secure enterprise apps for productivity, workflow automation, and digital transformation." },
    ],
    technologies: ["Java", "Kotlin", "Swift UI", "React Native", "Flutter", "Objective-C", "AI/ML", "IoT", "AR", "Blockchain", "Figma", "Sketch"],
    industries: ["Enterprise", "Logistics", "M-commerce", "Healthcare", "Fitness", "Fintech", "Travel", "Events", "Real Estate", "Government", "Public Safety", "Entertainment"],
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
      "Data-driven campaigns across social, paid, and content channels — engineered to engage, convert, and amplify.",
    longDescription:
      "Digital marketing is the backbone of modern business growth. As a leading digital marketing company in Coimbatore, Nygrow combines data-driven insights with innovative strategies to deliver scalable results. From boosting organic visibility with SEO to generating instant impact with PPC and paid campaigns, building brand loyalty through social media and email marketing, or optimizing conversion funnels — we integrate innovative ideas with a data-driven approach to build your brand presence, drive traffic, and increase conversions.",
    icon: Megaphone,
    color: "#F97316",
    gradient: "from-orange-400 to-red-500",
    features: [
      "Affordable, high-ROI solutions",
      "Certified Google, Meta, LinkedIn experts",
      "Custom strategies per industry",
      "24/7 dedicated support",
      "Real-time data-driven campaigns",
      "End-to-end service",
      "Transparent reporting",
    ],
    subServices: [
      { title: "Search Engine Optimization", description: "Technical, on-page, off-page, and local SEO that drives sustainable organic growth." },
      { title: "Pay-Per-Click (PPC)", description: "ROI-focused ad campaigns across Google, Meta, LinkedIn, and YouTube — strategy, ad copy, optimization." },
      { title: "Social Media Marketing", description: "Data-driven strategies to grow your audience, boost engagement, and turn followers into customers." },
      { title: "Content Marketing", description: "High-quality blogs, videos, infographics, and case studies that build authority and drive traffic." },
      { title: "Email & Automation", description: "Targeted email campaigns with smart segmentation, automated workflows, and real-time analytics." },
      { title: "Conversion Rate Optimization", description: "User behavior analysis, A/B testing, and optimization of landing pages to maximize revenue per session." },
      { title: "Analytics & Tracking", description: "GA4 setup, advanced tagging, custom dashboards — accurate, real-time insights." },
      { title: "Brand Recognition", description: "Consistent visibility across channels through targeted campaigns, storytelling, and influencer tie-ins." },
      { title: "SMS Marketing", description: "Targeted, personalized SMS campaigns for promotions, updates, and reminders." },
    ],
    technologies: ["SEMrush", "Ahrefs", "HubSpot", "Google Analytics", "Data Studio", "Meta Ads", "LinkedIn Ads", "Klaviyo", "Mailchimp"],
    industries: ["E-commerce", "B2B/SaaS", "Healthcare", "Education", "Real Estate", "Finance", "Hospitality", "Manufacturing"],
  },
  {
    slug: "seo",
    title: "Search Engine Optimization",
    shortTitle: "SEO",
    tagline: "Rank. Drive. Convert.",
    description:
      "Bold, results-driven SEO that boosts visibility, establishes authority, and drives high-intent traffic.",
    longDescription:
      "At Nygrow, we power brands with bold, results-driven SEO. As a leading SEO agency in Coimbatore, we offer tailored strategies for both startups and enterprises. With 93% of online experiences starting with a search engine, your visibility determines your growth. We specialize in On-page SEO, Off-page SEO, Technical SEO, voice search optimization, and local search — giving your business a comprehensive advantage.",
    icon: Search,
    color: "#60A5FA",
    gradient: "from-sky-400 to-blue-500",
    features: [
      "Rank higher, faster with white-hat techniques",
      "Drive quality leads with precision targeting",
      "Engage & convert with optimized UX and content",
      "Scale with data-driven, transparent strategies",
      "Build lasting authority and trust",
    ],
    subServices: [
      { title: "Site Audit", description: "Identify and fix SEO issues — site functionality, health, UX, technical SEO, on-page SEO, content quality." },
      { title: "Competitive Analysis", description: "Deep-dive into competitors — ranking strategies, backlinks, keyword targeting, market positioning." },
      { title: "Keyword Research", description: "In-depth keyword analysis to discover high-intent, relevant, low-competition keywords." },
      { title: "Page Optimization", description: "Enhance meta tags, headings, internal linking, page speed, mobile responsiveness, and content structures." },
      { title: "Content Creation", description: "SEO-driven blogs, landing pages, and website copy aligned with keyword goals to build authority." },
      { title: "Impactful Reporting", description: "Clear, transparent reports showcasing rankings, traffic, conversions, and actionable insights." },
      { title: "Site Health Maintenance", description: "Continuous monitoring to keep your site optimized, secure, and search-engine friendly." },
      { title: "SEO Consulting", description: "One-on-one consulting — strategy audits, performance analysis, and tailored roadmaps." },
    ],
    technologies: ["Google Analytics", "Search Console", "SEMrush", "Ahrefs", "Moz", "Screaming Frog", "SurferSEO", "GTmetrix", "PageSpeed Insights", "Hotjar"],
  },
  ───────────────────────────────────────────────────────────── */
  {
    slug: "ai-ml",
    title: "AI / ML Solutions",
    shortTitle: "AI / ML",
    tagline: "Transform Ideas into Intelligent Solutions",
    description:
      "Strategy, custom models, NLP, computer vision, and generative AI — turning data into autonomous action.",
    longDescription:
      "Nygrow is a trusted AI/ML development company in Coimbatore, delivering cutting-edge artificial intelligence and machine learning solutions to businesses in Chennai, Bengaluru, and across the globe. We engineer intelligent, scalable, and secure AI/ML solutions designed to deliver real business value. Whether you need to optimize operations, uncover actionable insights, or create data-driven customer journeys, our end-to-end AI development services make it possible.",
    icon: BrainCircuit,
    color: "#EF4444",
    gradient: "from-rose-400 to-pink-500",
    features: [
      "Expertise across AI, ML, NLP, Computer Vision, GenAI",
      "Custom solutions tailored to your industry",
      "Scalable, secure, enterprise-grade architecture",
      "Proven results across startups & enterprises",
      "Agile approach, rapid prototyping",
      "Full lifecycle support: ideation to MLOps",
    ],
    subServices: [
      { title: "AI Strategy & Consulting", description: "Readiness assessment, use-case prioritization, technology stack selection aligned with your business goals." },
      { title: "Data Collection & Annotation", description: "Curate, clean, and annotate datasets for accurate, unbiased, production-ready AI models." },
      { title: "Custom AI/ML Model Development", description: "Predictive analytics, recommendation engines, demand forecasting, risk analysis tailored to your workflows." },
      { title: "Natural Language Processing", description: "Sentiment analysis, voice assistants, text summarization, chatbots, entity extraction." },
      { title: "Computer Vision Services", description: "Image recognition, object detection, facial recognition, quality inspection, visual analytics." },
      { title: "Generative AI Solutions", description: "AI-driven content, image generation, audio/video synthesis, and conversational AI." },
      { title: "AI-Powered Agents & RPA", description: "Customer support bots, back-office automation — reduce costs and boost productivity." },
      { title: "MLOps & Deployment", description: "End-to-end deployment, versioning, monitoring, and optimization in production." },
      { title: "AI-Powered Analytics", description: "Predictive models, advanced dashboards, deep analytics for informed decisions." },
    ],
    technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Kafka", "Snowflake", "Spark", "PyTorch", "TensorFlow", "LangChain", "LlamaIndex", "OpenAI", "Hugging Face", "MLflow"],
    industries: ["Healthcare", "Finance & Fintech", "Retail & E-Commerce", "Logistics", "Manufacturing", "Media", "Education", "Public Sector"],
  },
  {
    slug: "cloud-server",
    title: "Cloud & Server Infrastructure",
    shortTitle: "Cloud Infra",
    tagline: "Reliable. Scalable. Secure.",
    description:
      "AWS, Azure, GCP setup and management with zero-downtime migrations, 24/7 monitoring, and rock-solid uptime.",
    longDescription:
      "At Nygrow, we design, deploy, and manage cloud and on-premises infrastructure that keeps your business fast, secure, and always on. From server setup & configuration to cloud hosting on AWS, Azure, and Google Cloud, zero-downtime migrations, 24/7 security monitoring, and performance optimization — our certified engineers deliver enterprise-grade uptime, tighter protection, and lower running costs.",
    icon: Cloud,
    color: "#A78BFA",
    gradient: "from-violet-400 to-purple-500",
    features: [
      "99.99% uptime",
      "Cost-optimized architecture",
      "Scalable as you grow",
      "Enterprise-grade security",
      "24/7 expert support",
      "Future-ready, adaptable systems",
    ],
    subServices: [
      { title: "Server Setup & Configuration", description: "Dedicated servers, VPS, hybrid and cloud setups tailored to your workload and security needs." },
      { title: "Cloud Hosting (AWS, Azure, GCP)", description: "Scalable web hosting, enterprise cloud, multi-cloud strategies optimized for speed and cost." },
      { title: "Server Migration & Data Transfer", description: "Zero-downtime migration — planning, backup, execution, and verification for smooth transitions." },
      { title: "Security & Monitoring", description: "Advanced firewalls, intrusion detection, DDoS protection, patching, real-time monitoring." },
      { title: "Performance Optimization", description: "In-depth audits to optimize CPU, memory, storage — reducing latency, enhancing responsiveness." },
      { title: "24/7 Server Support", description: "Certified engineers on standby for routine checks and critical emergencies alike." },
    ],
    technologies: ["AWS", "Microsoft Azure", "Google Cloud", "Jenkins", "GitHub Actions", "Docker", "Kubernetes", "Terraform"],
  },
  {
    slug: "zoho",
    title: "Zoho Setup & Customization",
    shortTitle: "Zoho Partner",
    tagline: "Streamline. Automate. Scale.",
    description:
      "Authorized Zoho partner — CRM implementation, business process automation, and seamless app integrations.",
    longDescription:
      "As an authorized Zoho partner, Nygrow streamlines and automates your workflows through expert Zoho setup and customization. From CRM implementation to advanced business process automation, we help you maximize productivity and efficiency. Our team ensures seamless app integration across the Zoho suite and third-party platforms, enabling unified operations throughout your organization.",
    icon: Workflow,
    color: "#DC2626",
    gradient: "from-red-500 to-rose-600",
    features: [
      "Authorized Zoho partner",
      "End-to-end CRM implementation",
      "Custom workflow automation",
      "Seamless Zoho suite integration",
      "Third-party app integrations",
      "Training and ongoing support",
    ],
    subServices: [
      { title: "Zoho CRM Implementation", description: "Set up Zoho CRM tailored to your sales process — pipelines, automation, reporting." },
      { title: "Zoho One Suite Setup", description: "Deploy and configure the complete Zoho One suite across teams." },
      { title: "Business Process Automation", description: "Automate routine workflows, approvals, and notifications with custom Zoho Flow scripts." },
      { title: "Custom Module Development", description: "Build custom modules, fields, and layouts to match your unique business needs." },
      { title: "Third-Party Integrations", description: "Connect Zoho with your existing tools — payment gateways, ERPs, marketing platforms." },
      { title: "Migration & Data Import", description: "Move data from Salesforce, HubSpot, or spreadsheets to Zoho with zero loss." },
      { title: "Training & Support", description: "Onboard your team with hands-on training and continuous support." },
    ],
    technologies: ["Zoho CRM", "Zoho One", "Zoho Books", "Zoho Desk", "Zoho Creator", "Zoho Flow", "Zoho Analytics"],
  },
  {
    slug: "odoo",
    title: "Odoo Implementation",
    shortTitle: "Odoo Partner",
    tagline: "Unified ERP. Unlimited Possibilities.",
    description:
      "Certified Odoo partner — end-to-end ERP implementation, customization, and ongoing support.",
    longDescription:
      "As a certified Odoo partner, Nygrow delivers end-to-end Odoo ERP implementation tailored to your business. From accounting and inventory to manufacturing, HR, and e-commerce — we configure, customize, and integrate Odoo modules to unify your operations. Our team handles everything from migration and module development to user training and ongoing support, helping you maximize Odoo's full potential.",
    icon: Boxes,
    color: "#7C3AED",
    gradient: "from-purple-500 to-indigo-600",
    features: [
      "Certified Odoo partner",
      "Full ERP implementation",
      "Custom module development",
      "Multi-company, multi-currency support",
      "Migration from legacy systems",
      "End-user training and support",
    ],
    subServices: [
      { title: "Odoo ERP Implementation", description: "Configure Odoo to match your business — accounting, sales, inventory, manufacturing, HR." },
      { title: "Custom Module Development", description: "Build bespoke Odoo modules for industry-specific workflows and requirements." },
      { title: "Odoo Customization", description: "Tailor existing modules with custom fields, reports, dashboards, and automations." },
      { title: "Odoo Migration", description: "Migrate from older Odoo versions or legacy ERPs with zero downtime." },
      { title: "Third-Party Integrations", description: "Connect Odoo with e-commerce, payment gateways, shipping, and external APIs." },
      { title: "Training & Support", description: "Empower your team with structured training, documentation, and ongoing technical support." },
    ],
    technologies: ["Odoo 17", "Odoo Studio", "Python", "PostgreSQL", "XML-RPC", "REST APIs"],
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const PROCESS: ProcessStep[] = [
  { number: "01", title: "Discovery & Strategy", description: "We align with your business goals, understand your industry, and map user needs to identify the right problems to solve." },
  { number: "02", title: "Design Thinking", description: "With empathy and data, we ideate and prototype solutions — from seamless UI/UX to platform architecture." },
  { number: "03", title: "Engineering Excellence", description: "Agile development with robust back-ends, scalable cloud deployments, and clean front-end interfaces." },
  { number: "04", title: "Launch & Optimize", description: "Go-live is just the beginning. Continuous testing, analytics, and iteration deliver long-term value." },
];

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "From design to delivery, Nygrow exceeded expectations. We've worked with several IT services companies before, but none brought the clarity and collaboration they do.",
    author: "Marketing Head",
    role: "Marketing Head",
    company: "Retail Brand, Chennai",
  },
  {
    quote: "We needed to migrate our servers fast. Nygrow handled it seamlessly and provided ongoing support that made a huge difference to our operations.",
    author: "IT Manager",
    role: "IT Manager",
    company: "Logistics Company, UAE",
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
  "Complete in-house expertise from concept to deployment",
  "Innovative, scalable, and secure digital solutions",
  "Transparent communication and client-first mindset",
  "Agile process ensuring speed and precision",
  "Future-ready architecture built for growth",
  "24/7 dedicated technical support",
  "99% client retention through trust and results",
  "Skilled team of certified professionals",
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
