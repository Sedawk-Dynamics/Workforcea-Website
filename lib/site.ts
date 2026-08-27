import {
  Crown,
  Users,
  Code2,
  Globe2,
  Workflow,
  LineChart,
  type LucideIcon,
} from 'lucide-react'

export const SITE = {
  name: 'Workforcea Talent Solutions LLP',
  shortName: 'Workforcea',
  tagline: 'Connecting Talent, Enabling Growth',
  url: 'https://www.workforcea.com',
  email: 'sunil@workforcea.com',
  phone: '+91 91364 13386',
  phoneHref: 'tel:+919136413386',
  address:
    "Level 4, D' Wing, MBC InfoTech Park, Ghodbunder Road, Kasarwadavali, Thane, Maharashtra – 400615",
  hours: 'Mon – Sat, 9:30 AM – 6:30 PM IST',
  linkedin: 'https://www.linkedin.com/company/workforcea-talent-solutions-llp',
  instagram: 'https://www.instagram.com/workforcea_global',
  newsletterTitle: 'TA Leadership | Beyond Resume',
}

export type Service = {
  slug: string
  title: string
  short: string
  icon: LucideIcon
  description: string
  headline: string
  intro: string
  whoItsFor: string[]
  whatWeSolve: { title: string; description: string }[]
  howWeWork: string[]
  rolesCovered: string[]
  engagement: { title: string; description: string }[]
  whyWorkforcea: string[]
}

export const SERVICES: Service[] = [
  {
    slug: 'executive-search',
    title: 'Executive Search',
    short: 'Executive Search',
    icon: Crown,
    description:
      'Confidential, senior-led search for CXO and board-level mandates, backed by structured assessment and full market mapping.',
    headline: 'Executive search for the hires you cannot get wrong',
    intro:
      'When a single appointment shapes the next three years of the business, the search has to be run by someone who has done it before. Every Workforcea executive mandate is led personally by our founder, with a mapped market, a documented assessment process and complete confidentiality.',
    whoItsFor: [
      'Founders and boards appointing a CXO or business head',
      'PE and VC-backed companies strengthening the leadership bench before a scale-up or raise',
      'Global organizations appointing a country or GCC head in India',
      'Companies replacing a critical leader discreetly, without signalling to the market',
    ],
    whatWeSolve: [
      {
        title: 'Thin or biased shortlists',
        description:
          'Most leadership shortlists come from whoever answered the phone. We map the full addressable market first, so you see the people who were never looking.',
      },
      {
        title: 'Unstructured evaluation',
        description:
          'We agree the success profile with you up front and assess every candidate against it, so the final decision compares like with like.',
      },
      {
        title: 'Confidentiality risk',
        description:
          'Sensitive replacements are handled on a no-name basis until you choose to disclose, protecting both the incumbent and the brand.',
      },
    ],
    howWeWork: [
      'Calibration: we agree the mandate, success profile and compensation range with the hiring stakeholders.',
      'Market map: we build a full picture of the relevant talent pool and share it with you before approaching anyone.',
      'Approach: senior-led, discreet outreach to the shortlist of target leaders.',
      'Assessment: structured competency and leadership evaluation against the agreed profile.',
      'Close: we manage offer, negotiation, notice period and onboarding through to day one.',
    ],
    rolesCovered: [
      'CEO / Managing Director',
      'CTO / CIO / CPO',
      'CHRO & TA Leadership',
      'CFO & Finance Leadership',
      'Business & Country Heads',
      'GCC Site Leaders',
    ],
    engagement: [
      {
        title: 'Retained search',
        description:
          'Exclusive, milestone-based engagement for board and CXO mandates where market coverage and confidentiality matter most.',
      },
      {
        title: 'Exclusive search',
        description:
          'A single-partner engagement for senior appointments, with the full mapping process at a lighter commercial structure.',
      },
    ],
    whyWorkforcea: [
      'Every mandate is led by a talent acquisition leader with 15 years of experience, not handed to a junior researcher.',
      'You see the market map, not just the shortlist.',
      'Structured assessment means the decision is documented and defensible.',
    ],
  },
  {
    slug: 'leadership-hiring',
    title: 'Leadership Hiring',
    short: 'Leadership Hiring',
    icon: Users,
    description:
      'Identifying and engaging the VP, director and head-of-function talent that carries delivery continuity as you scale.',
    headline: 'The layer of leaders that turns strategy into delivery',
    intro:
      'Below the C-suite sits the layer that actually runs the business — VPs, directors, engineering and product leaders. It is the hardest layer to hire well and the most expensive to get wrong. We recruit it as a specialist discipline, not as senior-level volume hiring.',
    whoItsFor: [
      'Scale-ups building their first real management layer',
      'Technology organizations hiring engineering, product or data leadership',
      'Companies where a function has outgrown its current leader',
      'GCCs appointing function heads as they move from build to run',
    ],
    whatWeSolve: [
      {
        title: 'Great individual contributors, poor leaders',
        description:
          'We assess for the things that actually differentiate at this level — team building, stakeholder management, and judgement under ambiguity.',
      },
      {
        title: 'Long, drifting processes',
        description:
          'Leadership candidates disengage when a process stalls. We run to an agreed timeline and keep candidates warm throughout.',
      },
      {
        title: 'Compensation misalignment',
        description:
          'We benchmark the role against live market data before the search starts, so offers land rather than get countered.',
      },
    ],
    howWeWork: [
      'Understand: we sit with the hiring manager to define the mandate, the team context and the first-year outcomes.',
      'Map: we identify the relevant leadership pools across comparable organizations.',
      'Engage: structured, senior-led approaches with a clear articulation of the opportunity.',
      'Deliver: competency-based assessment, reference validation and offer management.',
      'Build: we stay engaged through onboarding and the first ninety days.',
    ],
    rolesCovered: [
      'VP / Director of Engineering',
      'Head of Product',
      'Head of Data / Analytics',
      'Delivery & Program Leadership',
      'Functional Business Heads',
      'TA & HR Leadership',
    ],
    engagement: [
      {
        title: 'Exclusive engagement',
        description:
          'Single-partner search with agreed timelines and milestone reviews — the model we recommend for leadership roles.',
      },
      {
        title: 'Contingent search',
        description:
          'Success-based hiring for leadership roles where you are running a parallel process.',
      },
    ],
    whyWorkforcea: [
      'Fifteen years of hiring and leading technology teams means we assess leaders on substance, not on job titles.',
      'We have led recruitment teams ourselves, so we know what good delivery leadership looks like from the inside.',
      'Senior oversight on every shortlist.',
    ],
  },
  {
    slug: 'it-recruitment',
    title: 'IT Recruitment',
    short: 'IT Recruitment',
    icon: Code2,
    description:
      'Specialist technology and product hiring across engineering, cloud, data, security and platform roles at every seniority.',
    headline: 'Technology hiring by people who understand the roles',
    intro:
      'Technology recruitment fails when the recruiter cannot tell a strong engineer from a strong résumé. Our team has spent fifteen years hiring across engineering, cloud, data and security — so screening happens before the profiles reach you, not after.',
    whoItsFor: [
      'Product and technology companies hiring across the engineering stack',
      'Enterprises modernizing platform, cloud or data capability',
      'GCCs scaling delivery teams in India',
      'Companies that need niche skills their internal team cannot reach',
    ],
    whatWeSolve: [
      {
        title: 'Volume without relevance',
        description:
          'You should not be the first technical filter. We screen for depth against the actual stack and seniority before anything is submitted.',
      },
      {
        title: 'Scarce and niche skills',
        description:
          'Specialist networks across cloud, data engineering, cybersecurity and AI/ML reach candidates who are not on job boards.',
      },
      {
        title: 'Slow time-to-offer',
        description:
          'Structured pipelines and weekly reporting keep hiring managers moving and candidates engaged.',
      },
    ],
    howWeWork: [
      'Understand: role calibration with the engineering or product leader, including the real must-haves.',
      'Map: targeted sourcing across the relevant technology talent pools.',
      'Engage: technical screening and structured evaluation before submission.',
      'Deliver: interview coordination, feedback loops and offer closure.',
      'Build: for ongoing demand, we move you to a dedicated pod or RPO model.',
    ],
    rolesCovered: [
      'Software Engineering (all levels)',
      'Cloud & DevOps / SRE',
      'Data Engineering & Analytics',
      'Cybersecurity',
      'AI & Machine Learning',
      'Infrastructure & Platform',
      'QA & Automation',
      'Product Management',
    ],
    engagement: [
      {
        title: 'Contingent hiring',
        description:
          'Success-based recruitment for individual technology roles — you pay on placement.',
      },
      {
        title: 'Dedicated pod',
        description:
          'A named recruiter or team working exclusively on your requisitions at a monthly rate, for sustained hiring volume.',
      },
      {
        title: 'Contract staffing',
        description:
          'Contract and contract-to-hire technology talent for project-based and surge requirements.',
      },
    ],
    whyWorkforcea: [
      'Technical screening happens before submission, so your engineers interview fewer and better candidates.',
      'We reach passive engineers through referral and community networks, not just a keyword search of a database.',
      'Weekly pipeline reporting you can actually plan against.',
    ],
  },
  {
    slug: 'gcc-hiring',
    title: 'GCC Hiring',
    short: 'GCC Hiring',
    icon: Globe2,
    description:
      'End-to-end talent build-out for Global Capability Centers — from the founding leadership team to a scaled delivery organization.',
    headline: 'Building Global Capability Centers from the first hire',
    intro:
      'Setting up a GCC in India is a talent problem before it is anything else. The first ten hires determine whether the centre becomes a strategic capability or an offshore cost line. We help global organizations plan, hire and scale that team.',
    whoItsFor: [
      'Global organizations establishing a first capability centre in India',
      'Existing GCCs scaling from delivery execution to product ownership',
      'Companies consolidating vendor-managed work into an owned centre',
      'Parent organizations appointing site or function leadership in India',
    ],
    whatWeSolve: [
      {
        title: 'No local market knowledge',
        description:
          'We bring ground-level intelligence on talent availability, compensation benchmarks and competitor hiring in each Indian market.',
      },
      {
        title: 'Getting the founding team wrong',
        description:
          'The first leadership hires set the culture and the hiring bar. We treat them as executive search, not as volume recruitment.',
      },
      {
        title: 'Scaling without structure',
        description:
          'We build the hiring plan, the process and the assessment bar alongside the headcount, so quality holds as the numbers grow.',
      },
    ],
    howWeWork: [
      'Understand: capability charter, target operating model and headcount plan with the parent organization.',
      'Map: location, talent availability and compensation benchmarking across target Indian markets.',
      'Engage: founding leadership appointments, run as senior-led search.',
      'Deliver: phased hiring of the delivery organization against the agreed plan.',
      'Build: we hand over a working hiring engine, or run it for you under an RPO model.',
    ],
    rolesCovered: [
      'GCC / Site Leadership',
      'Engineering & Delivery Leadership',
      'Product & Platform Teams',
      'Data & Analytics',
      'Cloud, Infrastructure & Security',
      'Support Functions (HR, Finance, Ops)',
    ],
    engagement: [
      {
        title: 'GCC build-out',
        description:
          'A phased, project-based engagement covering leadership search through to the scaled delivery organization.',
      },
      {
        title: 'Embedded hiring team',
        description:
          'A dedicated recruitment team operating as your in-house TA function through the scale-up phase.',
      },
    ],
    whyWorkforcea: [
      'Experience hiring across US, India and global talent markets.',
      'Leadership search and volume delivery hiring from one partner, on one plan.',
      'Market intelligence on compensation and availability before you commit to a location.',
    ],
  },
  {
    slug: 'rpo',
    title: 'Recruitment Process Outsourcing',
    short: 'RPO',
    icon: Workflow,
    description:
      'Flexible RPO models that embed our hiring capability directly inside your talent function for sustained, predictable scale.',
    headline: 'Your hiring engine, run by people who have built one',
    intro:
      'RPO works when the partner has actually run a recruitment function — not just supplied candidates to one. We embed a recruitment team inside your organization, working your process, your systems and your employer brand.',
    whoItsFor: [
      'Companies hiring at sustained volume without the internal TA headcount',
      'Organizations whose hiring is unpredictable quarter to quarter',
      'Businesses that want to rebuild an underperforming TA function',
      'GCCs and scale-ups moving from ad-hoc agency use to a managed process',
    ],
    whatWeSolve: [
      {
        title: 'Unpredictable cost per hire',
        description:
          'A fixed monthly model replaces variable agency fees, making hiring cost forecastable against the headcount plan.',
      },
      {
        title: 'No process, no data',
        description:
          'We install a structured process with real reporting — pipeline health, conversion, time-to-offer and source effectiveness.',
      },
      {
        title: 'Capability that leaves with the vendor',
        description:
          'We build process and documentation that stays with you, so you can take the function back in-house whenever you want to.',
      },
    ],
    howWeWork: [
      'Understand: audit the current hiring process, systems, data and pain points.',
      'Map: agree the headcount plan, service levels and reporting model.',
      'Engage: deploy an embedded recruitment team under your employer brand.',
      'Deliver: run the process end to end, with weekly and monthly reporting.',
      'Build: document and hand over a hiring capability that outlasts the engagement.',
    ],
    rolesCovered: [
      'Technology & Engineering',
      'Product & Design',
      'Corporate & Support Functions',
      'Leadership & Management',
      'Contract & Contingent Workforce',
      'Campus & Early Careers',
    ],
    engagement: [
      {
        title: 'Full RPO',
        description:
          'End-to-end ownership of the recruitment function across all hiring.',
      },
      {
        title: 'Project RPO',
        description:
          'A defined team for a defined hiring programme — a new site, a product launch, a funded scale-up.',
      },
      {
        title: 'Recruiter on demand',
        description:
          'Named recruiters embedded in your team for a fixed period, to absorb a spike in demand.',
      },
    ],
    whyWorkforcea: [
      'We have led and scaled recruitment teams of 50+ recruiters, so we run RPO as operators rather than as a vendor.',
      'Technology-enabled sourcing and screening built into the process, not sold as an add-on.',
      'Transparent reporting from week one.',
    ],
  },
  {
    slug: 'workforce-strategy',
    title: 'Workforce Strategy Advisory',
    short: 'Workforce Advisory',
    icon: LineChart,
    description:
      'Demand planning, market intelligence and hiring frameworks that make the headcount plan achievable before you commit to it.',
    headline: 'Know whether the hiring plan is achievable — before you commit',
    intro:
      'Most headcount plans are built in a spreadsheet and tested in the market a quarter too late. We bring real talent market data to the plan while it is still a plan: what exists, where, at what cost, and how long it will take.',
    whoItsFor: [
      'Leadership teams building an annual or multi-year headcount plan',
      'Companies deciding where to locate a new team or centre',
      'Organizations whose hiring consistently misses its targets',
      'HR and TA leaders who need to make a case with data',
    ],
    whatWeSolve: [
      {
        title: 'Plans built without market reality',
        description:
          'We test the plan against actual talent availability and compensation data before budgets are locked.',
      },
      {
        title: 'Hiring that misses its dates',
        description:
          'Realistic time-to-hire modelling by role and market, so delivery commitments are based on when people can actually start.',
      },
      {
        title: 'No shared hiring standard',
        description:
          'We help define the assessment bar, the interview process and the decision criteria so hiring quality is consistent across teams.',
      },
    ],
    howWeWork: [
      'Understand: business plan, delivery commitments and the headcount implied by both.',
      'Map: talent availability, compensation benchmarks and competitor activity in the target markets.',
      'Engage: stress-test the plan with the leadership team and identify the constraints.',
      'Deliver: a costed, sequenced hiring plan with realistic timelines by role.',
      'Build: hiring process, assessment frameworks and reporting to run against it.',
    ],
    rolesCovered: [
      'Annual & multi-year headcount planning',
      'Location & market strategy',
      'Compensation benchmarking',
      'Talent market intelligence',
      'Interview & assessment design',
      'TA process and reporting design',
    ],
    engagement: [
      {
        title: 'Advisory project',
        description:
          'A scoped, fixed-fee engagement delivering a specific plan, benchmark or framework.',
      },
      {
        title: 'Ongoing advisory',
        description:
          'A retained arrangement giving your leadership team continuous access to market intelligence and hiring guidance.',
      },
    ],
    whyWorkforcea: [
      'Advice from a practitioner who still runs live searches, not from a slide deck.',
      'Real compensation and availability data from current mandates.',
      'Every recommendation is something we can then help you execute.',
    ],
  },
]

export function getService(slug: string) {
  return SERVICES.find((service) => service.slug === slug)
}

export const HIRING_TYPES = [
  'Permanent Hiring',
  'Executive Search',
  'Contract Staffing',
  'RPO',
  'GCC Build',
  'Workforce Advisory',
]

export const POSITION_COUNTS = ['1', '2-5', '6-20', '21-50', '50+']
