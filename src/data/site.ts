// All site copy, packages, capacity and integration links live here.

export const brand = {
  name: 'Handled', // product name; shown lowercase with the accent dot
  parent: 'RemotoLabs', // logo: public/brand/remotolabs.png
  parentUrl: '#', // TODO: RemotoLabs website URL
  parentLine: 'AI systems by',
  theme: 'pitch' as 'pitch' | 'void' | 'black' | 'green', // style: pitch = Pitch (default), void = Void, black = Graphite, green = Pine
  email: 'hello@handled.studio', // TODO: real inbox
};

// RemotoLabs product family (cross-links on every site).
export const family = [
  { key: 'shipped', name: 'shipped.', line: 'Websites, fixed price', url: 'https://n333k0.github.io/shipped/' },
  { key: 'queued', name: 'queued.', line: 'Design on subscription', url: 'https://n333k0.github.io/queued/' },
  { key: 'handled', name: 'handled.', line: 'AI systems for your business', url: 'https://n333k0.github.io/handled/' },
];

// Integrations. Paste real links here; everything works with the fallbacks.
export const links = {
  calendly: '', // e.g. 'https://calendly.com/remotolabs/audit' — empty shows a booking preview
  checkout: '#book', // Stripe Payment Link for the Audit
  portal: '#',
};

export const showPlaceholderTags = false;

// Capacity: we only run a few builds at once.
export const capacity = { total: 4, taken: 3 };
export const spotsOpen = Math.max(0, capacity.total - capacity.taken);

// ---------------------------------------------------------------------------
// Leak calculator defaults
// ---------------------------------------------------------------------------

export const calc = {
  team: 8, // people
  hours: 6, // manual hours per person per week
  rate: 40, // fully loaded $/hour
  tools: ['HubSpot', 'Google Workspace', 'Slack', 'Notion', 'QuickBooks', 'Shopify', 'Airtable', 'Zendesk', 'Salesforce', 'Monday'],
  toolCost: 1800, // yearly hidden cost per disconnected tool (re-keying, reconciling)
};

// ---------------------------------------------------------------------------
// Sections
// ---------------------------------------------------------------------------

export const pains = [
  { title: 'You’re scaling faster than your systems', body: 'Revenue is up, so you keep hiring. Each new seat does routing, data entry and chasing approvals a system should run.' },
  { title: 'Your team runs on copy-paste', body: 'Re-keying between tools, reading documents by hand, rebuilding the same report every Monday.' },
  { title: 'You’ve tried software before', body: 'A CRM used as a phone book. A project tool nobody opens. Nobody mapped it to how you actually work.' },
  { title: 'You know AI matters, not where to start', body: 'Your data is scattered across apps that don’t talk. You need a plan before another subscription.' },
];

export const steps = [
  { n: '01', title: 'Audit', sub: 'A costed workflow map', body: 'We map your operation end to end: every workflow, handoff and recurring task, priced. You see what to fix first.', time: '1–2 weeks' },
  { n: '02', title: 'Document', sub: 'Your business, in context', body: 'SOPs, tools, data and the unwritten rules only your team knows, turned into the knowledge your agents run on.', time: '1 week' },
  { n: '03', title: 'Automate', sub: 'Live AI workflows', body: 'We build the agents on that context, plug them into the tools you already pay for and roll them out with your team.', time: '3–4 weeks to first workflow' },
];

export const os = [
  { area: 'Sales', agents: ['Lead scoring', 'Inbound qualification', 'Proposal writer', 'Deal follow-up', 'CRM hygiene', 'Call notes & next steps'] },
  { area: 'Marketing', agents: ['Content engine', 'Social scheduler', 'Newsletter drafts', 'SEO briefs', 'Ad variations', 'Campaign reports'] },
  { area: 'Finance', agents: ['Invoice chasing', 'Expense tracking', 'Reconciliation', 'Cash-flow forecast', 'Payroll prep', 'Monthly close pack'] },
  { area: 'Operations', agents: ['Support triage', 'Doc processing', 'Onboarding checklists', 'Scheduling', 'Vendor follow-ups', 'Status updates'] },
];

export const agents = [
  { name: 'Lead Intelligence', body: 'Reads calls and emails to score leads, track sentiment and hand reps the context to close.', area: 'Sales' },
  { name: 'Proposal Agent', body: 'Drafts tailored proposals from call notes and past deals, so quotes go out the same day.', area: 'Sales' },
  { name: 'Content Engine', body: 'Turns one idea into a week of on-brand posts, captions and emails.', area: 'Marketing' },
  { name: 'Inbox Triage', body: 'Sorts and routes inbound messages and drafts replies, so nothing sits unanswered.', area: 'Operations' },
  { name: 'Research Agent', body: 'Researches prospects, accounts or markets on demand and surfaces what matters.', area: 'Sales' },
  { name: 'Document Agent', body: 'Contracts, forms, applications: extracted, checked, routed and filed.', area: 'Operations' },
];

export const stack = ['HubSpot', 'Salesforce', 'Pipedrive', 'Google Workspace', 'Microsoft 365', 'Slack', 'WhatsApp', 'Notion', 'Airtable', 'Monday', 'ClickUp', 'QuickBooks', 'Xero', 'Stripe', 'Shopify', 'Zendesk', 'Intercom', 'Calendly', 'Typeform', 'Zapier', 'Make', 'n8n'];

export const packages = [
  {
    name: 'Audit',
    price: '$1,900',
    unit: 'one-time',
    best: 'Find the leaks before you build anything.',
    points: ['Workflow cost audit', 'Prioritised AI roadmap', 'Build plan with costs and timeline', 'Delivered within 48h of the session', 'Credited 100% to your Build'],
    cta: 'Book the audit',
    featured: true,
  },
  {
    name: 'Build',
    price: 'from $9,500',
    unit: 'per system',
    best: 'Your first AI workflows, live.',
    points: ['Custom agents on your context', 'Integrations with your stack', 'Dashboard and controls for your team', 'Team training and documentation', 'First workflow live in 3–4 weeks'],
    cta: 'Talk about a build',
  },
  {
    name: 'Operate',
    price: '$1,500',
    unit: '/month',
    best: 'We keep it running and improving.',
    points: ['Monitoring and fixes', 'Monthly improvements', 'New workflows as you grow', 'Usage and savings reports', 'Cancel anytime'],
    cta: 'Ask about Operate',
  },
];

export const deliverables = [
  { n: '01', title: 'Workflow cost audit', body: 'Every manual workflow mapped and costed. You see which tasks bleed money, and by how much.' },
  { n: '02', title: 'Prioritised AI roadmap', body: 'A diagram of your AI operating system: what it handles, what it connects to, what it removes from your team.' },
  { n: '03', title: 'Costed build plan', body: 'What we’d build first, what it costs, how long it takes. Yours to keep, whether you build with us or not.' },
];

export const faq: { group: string; items: { q: string; a: string }[] }[] = [
  {
    group: 'Getting started',
    items: [
      { q: 'Where do we start?', a: 'With the audit. We map your workflows, tools, data, bottlenecks and costs before proposing a build.' },
      { q: 'Why pay for an audit if I already know what to automate?', a: 'Because the highest-ROI automation is often not the first one people guess. And the audit fee is credited in full to your build.' },
      { q: 'How fast can something go live?', a: 'Most businesses have a first workflow live 3–4 weeks after the audit and documentation.' },
      { q: 'What does it cost?', a: 'Audit $1,900. Builds start at $9,500 per system, depending on depth, integrations and risk. You get a costed plan before you commit to anything.' },
    ],
  },
  {
    group: 'How it works',
    items: [
      { q: 'How is this different from a chatbot or an AI tool?', a: 'It’s a system built around your actual workflows, tools, context and controls, not a generic assistant your team has to remember to open.' },
      { q: 'Do we need a technical team?', a: 'No. We design around your operators and existing stack, then document how your team uses it.' },
      { q: 'Does it work with the tools we already use?', a: 'Yes. We automate the stack you already pay for instead of replacing it.' },
      { q: 'Which AI models do you use?', a: 'Whatever fits the job. We’re model-agnostic, so you’re never locked in to one vendor.' },
      { q: 'Is our data secure?', a: 'We design for least access and clear permissions, inside the security posture of your existing infrastructure.' },
    ],
  },
  {
    group: 'RemotoLabs',
    items: [
      { q: 'Can you also design and build our website or brand?', a: 'Yes, through our sister products: shipped. for fixed-price websites and queued. for design on subscription.' },
    ],
  },
];
