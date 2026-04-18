// Phase 2: User Story Development
// Source: ModernHealth_JTBD.pdf — top 3 functional jobs per persona
// 3 stories per persona × 7 personas = 21 stories total.
// Content gaps noted inline where JTBD doc signals missing pages or weak paths.
window.USER_STORIES = {
  schema: {
    fields: ["id", "personaId", "jobToBeDone", "jobSource", "entryChannel", "priority", "successMetric", "pageIds", "contentGapNote"],
    priorities: { 1: "Must have", 2: "High", 3: "Medium", 4: "Low" }
  },
  userStories: [

    // ── HR / BENEFITS LEADER (BUYER) — TOP 3 ─────────────────────────────
    // Source: Persona 01 "The Buyer" functional jobs + success criteria

    {
      id: "us-hr-01",
      personaId: "hr-buyer",
      jobToBeDone: "Validate outcomes and build a business case for leadership",
      jobSource: "JTBD: 'Understand ROI and utilization data' + 'Find case studies from companies similar to mine'",
      entryChannel: "Paid search / Peer referral",
      priority: 1,
      successMetric: "Finds credible ROI benchmarks and recognizable enterprise case studies within 2 clicks from the homepage",
      pageIds: ["home", "outcomes", "economic-roi", "case-studies"],
      contentGapNote: null
    },
    {
      id: "us-hr-02",
      personaId: "hr-buyer",
      jobToBeDone: "Understand how Modern Health differs from a traditional EAP and assess clinical credibility",
      jobSource: "JTBD: 'Evaluate Modern Health against existing EAP or competitors' + emotional job: 'Feel confident I am choosing a best-in-class solution'",
      entryChannel: "Conference follow-up / Direct navigation",
      priority: 1,
      successMetric: "Finds clear EAP differentiation messaging and clinical outcomes data — leaves feeling this is enterprise-grade",
      pageIds: ["home", "our-approach", "adaptive-care", "clinical-outcomes"],
      contentGapNote: null
    },
    {
      id: "us-hr-03",
      personaId: "hr-buyer",
      jobToBeDone: "Request a demo without friction from any point in the site",
      jobSource: "JTBD: 'Request a demo or speak with sales' + success criteria: 'Clear path to requesting a demo without friction' + nav implication: 'CTA should be visible at all times in nav'",
      entryChannel: "Any — returning visitor post-research",
      priority: 1,
      successMetric: "Reaches demo request form within 1 click from any page and submits",
      pageIds: ["home", "employers", "nav-demo-request"],
      contentGapNote: null
    },

    // ── BENEFITS MANAGER — TOP 3 ─────────────────────────────────────────
    // Source: Persona 02 "The Benefits Manager" functional jobs + success criteria

    {
      id: "us-bm-01",
      personaId: "benefits-manager",
      jobToBeDone: "Understand the member experience and all available care modalities",
      jobSource: "JTBD: 'Understand the member experience end-to-end' + 'Evaluate care modalities (therapy, coaching, self-guided, community)'",
      entryChannel: "Direct navigation / CHRO direction",
      priority: 1,
      successMetric: "Finds a clear, jargon-free breakdown of all care modalities (therapy, coaching, self-guided, Circles) within 2 clicks from Our Approach",
      pageIds: ["home", "our-approach", "adaptive-care", "care-modalities"],
      contentGapNote: null
    },
    {
      id: "us-bm-02",
      personaId: "benefits-manager",
      jobToBeDone: "Learn about implementation support and how Modern Health integrates with the existing benefits stack",
      jobSource: "JTBD: 'Learn about implementation support and onboarding' + 'Understand how Modern Health fits with existing benefits stack' + nav implication: 'Modern Health by Your Side page directly serves this audience'",
      entryChannel: "Email / CHRO direction",
      priority: 1,
      successMetric: "Finds implementation support details and client success model from the Employers or Our Approach section within 2 clicks",
      pageIds: ["home", "who-we-serve", "employers", "our-approach", "mh-by-your-side"],
      contentGapNote: null
    },
    {
      id: "us-bm-03",
      personaId: "benefits-manager",
      jobToBeDone: "Access toolkits and resources to communicate the benefit to employees",
      jobSource: "JTBD: 'Find resources to communicate the benefit to employees' + nav implication: 'Resources section should include employer-facing toolkits'",
      entryChannel: "Direct navigation",
      priority: 2,
      successMetric: "Locates and downloads an employee communication toolkit or awareness resource within 3 clicks from the homepage",
      pageIds: ["home", "insights", "resources", "res-mh-workplace"],
      contentGapNote: null
    },

    // ── BENEFITS CONSULTANT (BROKER) — TOP 3 ─────────────────────────────
    // Source: Persona 03 "The Benefits Consultant" functional jobs + success criteria

    {
      id: "us-br-01",
      personaId: "broker",
      jobToBeDone: "Find clear differentiation from legacy EAPs to recommend Modern Health with confidence",
      jobSource: "JTBD: 'Find differentiated positioning vs. legacy EAPs and competitors' + emotional job: 'Feel credible and well-informed when recommending to clients'",
      entryChannel: "Partner referral",
      priority: 1,
      successMetric: "Finds specific, evidence-backed differentiation vs. EAPs within 2 clicks — leaves with a clear answer to 'why Modern Health?'",
      pageIds: ["home", "who-we-serve", "consultants", "our-approach", "adaptive-care"],
      contentGapNote: "GAP: The Consultants page must carry substantive broker-specific content — clear EAP differentiation, clinical evidence, and shareable proof points. Cross-links to supporting pages exist, but if the page itself is thin or generic, brokers won't find the 'why Modern Health' answer they need before following any link."
    },
    {
      id: "us-br-02",
      personaId: "broker",
      jobToBeDone: "Access and download clinical outcomes data and ROI evidence to share with employer clients",
      jobSource: "JTBD: 'Access ROI data and clinical outcomes to share with clients' + success criteria: 'Can access clinical outcomes data and third-party validation'",
      entryChannel: "Event follow-up / Direct navigation",
      priority: 1,
      successMetric: "Downloads a clinical outcomes report, case study, or ROI data sheet from Resources hub or Outcomes section",
      pageIds: ["home", "outcomes", "clinical-outcomes", "resources", "res-case-study"],
      contentGapNote: null
    },
    {
      id: "us-br-03",
      personaId: "broker",
      jobToBeDone: "Connect with a dedicated Modern Health consultant relations contact — not a generic demo request form",
      jobSource: "JTBD: 'Connect with a Modern Health consultant relations contact' + nav implication: 'Direct CTA for consultant outreach (not just generic demo request)' + emotional job: 'Feel like Modern Health values the consultant relationship'",
      entryChannel: "Partner referral / Direct navigation",
      priority: 2,
      successMetric: "Reaches a consultant-specific contact form or named consultant relations contact from the Consultants page",
      pageIds: ["home", "who-we-serve", "consultants"],
      contentGapNote: "GAP: No consultant-specific outreach CTA exists. The Consultants page currently routes brokers to the same generic demo request used by HR buyers — brokers expect a dedicated contact path that signals Modern Health values the consultant relationship, not a generic sales form."
    },

    // ── MEMBER — TOP 3 ────────────────────────────────────────────────────
    // Source: Persona 04 "The Member" functional jobs + success criteria

    {
      id: "us-mb-01",
      personaId: "member",
      jobToBeDone: "Understand what types of care are available without feeling overwhelmed by clinical language",
      jobSource: "JTBD: 'Understand what types of care are available (therapy, coaching, self-guided, community)' + emotional job: 'Feel safe and not judged for seeking help' + success criteria: 'Can quickly understand care options without jargon'",
      entryChannel: "Employer email / Benefits portal",
      priority: 1,
      successMetric: "Finds a warm, jargon-free explanation of all care options within 3 clicks — leaves feeling there is something right for them",
      pageIds: ["home", "who-we-serve", "members", "our-approach", "care-modalities"],
      contentGapNote: null
    },
    {
      id: "us-mb-02",
      personaId: "member",
      jobToBeDone: "Activate the benefit or log in to an existing account",
      jobSource: "JTBD: 'Log in or activate their account' + success criteria: 'Easy path to log in or activate benefit' + nav implication: 'Login / member access CTA must be prominent and not buried'",
      entryChannel: "Employer email / Benefits portal link",
      priority: 1,
      successMetric: "Reaches a login or benefit activation CTA within 2 clicks from the homepage",
      pageIds: ["home", "who-we-serve", "members", "nav-member-login"],
      contentGapNote: "NOTE: The Members page should clearly distinguish between new member activation (first-time via employer benefit) and returning member login — these may route to different destinations and the CTA copy needs to reflect that."
    },
    {
      id: "us-mb-03",
      personaId: "member",
      jobToBeDone: "Find support for a specific personal challenge (stress, relationships, family, substance use)",
      jobSource: "JTBD: 'Find support for a specific need' + emotional job: 'Feel hopeful that support is accessible and actually helpful'",
      entryChannel: "Search / Employer referral",
      priority: 2,
      successMetric: "Finds a relevant care challenge topic and feels confident that Modern Health addresses their specific situation",
      pageIds: ["home", "our-approach", "adaptive-care", "care-every-challenge"],
      contentGapNote: null
    },

    // ── PROVIDER — TOP 3 ──────────────────────────────────────────────────
    // Source: Persona 05 "The Provider" functional jobs + success criteria

    {
      id: "us-pv-01",
      personaId: "provider",
      jobToBeDone: "Understand Modern Health's clinical model and how the provider network operates",
      jobSource: "JTBD: 'Understand how the Modern Health provider network works' + 'Learn about the referral and matching process' + emotional job: 'Feel that Modern Health shares their clinical values'",
      entryChannel: "Network recruitment / Peer referral",
      priority: 1,
      successMetric: "Finds a clear explanation of the clinical model, referral process, and network structure within 2 clicks from Our Approach",
      pageIds: ["home", "our-approach", "adaptive-care", "global-care-network"],
      contentGapNote: null
    },
    {
      id: "us-pv-02",
      personaId: "provider",
      jobToBeDone: "Review clinical outcomes evidence and assess Modern Health's research credibility",
      jobSource: "JTBD: 'Understand the technology platform' + success criteria: 'Sees evidence of Modern Health's clinical credibility' + nav implication: 'Clinical Specialties and Global Care Network pages are relevant'",
      entryChannel: "Direct navigation",
      priority: 2,
      successMetric: "Finds peer-reviewed research and published clinical outcomes data within 2 clicks from Outcomes",
      pageIds: ["home", "outcomes", "clinical-outcomes", "clinical-research"],
      contentGapNote: null
    },
    {
      id: "us-pv-03",
      personaId: "provider",
      jobToBeDone: "Apply or express interest in joining the Modern Health provider network",
      jobSource: "JTBD: 'Apply or express interest in joining the network' + success criteria: 'Easy path to apply or get more information' + nav implication: 'Provider entry point should be discoverable — currently surfaced under Who We Serve'",
      entryChannel: "Network recruitment / Direct navigation",
      priority: 1,
      successMetric: "Reaches the provider inquiry form within 2 clicks of deciding to apply",
      pageIds: ["home", "company", "work-with-us", "provider-inquiry"],
      contentGapNote: "GAP: Provider inquiry is 3 tiers deep under Company > Work With Us. Cross-links from Adaptive Care, Global Care Network, and Clinical Outcomes now make this page discoverable from the clinical sections where providers naturally browse. Remaining gap: no provider-specific entry point under 'Who We Serve' — providers who navigate by audience type won't find a dedicated path in the main nav."
    },

    // ── STRATEGIC PARTNER — TOP 3 ─────────────────────────────────────────
    // Source: Persona 06 "The Partner" functional jobs + success criteria

    {
      id: "us-pt-01",
      personaId: "partner",
      jobToBeDone: "Understand Modern Health's global clinical infrastructure and care coverage at scale",
      jobSource: "JTBD: 'Understand Modern Health's global care network and coverage' + success criteria: 'Global Care Network page demonstrates reach and quality'",
      entryChannel: "Conference / Executive referral",
      priority: 1,
      successMetric: "Finds global care network scope and clinical quality standards from the Health Plans or Our Approach section within 2 clicks",
      pageIds: ["home", "who-we-serve", "health-plans", "our-approach", "global-care-network"],
      contentGapNote: null
    },
    {
      id: "us-pt-02",
      personaId: "partner",
      jobToBeDone: "Evaluate clinical outcomes and quality standards before committing to a partnership conversation",
      jobSource: "JTBD: 'Evaluate clinical outcomes and quality standards' + success criteria: 'Clinical Outcomes data is accessible and compelling'",
      entryChannel: "Direct navigation",
      priority: 1,
      successMetric: "Finds accessible, compelling clinical outcomes data and research validation within 2 clicks from Outcomes",
      pageIds: ["home", "outcomes", "clinical-outcomes", "clinical-research"],
      contentGapNote: null
    },
    {
      id: "us-pt-03",
      personaId: "partner",
      jobToBeDone: "Connect with a business development or partnerships contact",
      jobSource: "JTBD: 'Connect with a partnerships or business development contact' + nav implication: 'Partnership CTA should feel different from the standard employer demo request'",
      entryChannel: "Conference / Executive referral",
      priority: 2,
      successMetric: "Reaches a partnership-specific contact form or business development CTA — not a generic employer demo request form",
      pageIds: ["home", "who-we-serve", "health-plans", "channel-partners"],
      contentGapNote: "GAP: No dedicated partnerships or BD contact path exists. The Channel Partners page is present but routes to the same generic demo request used by HR buyers — strategic partners expect an outreach option that reflects the weight and nature of a partnership conversation, not a standard sales form."
    },

    // ── CFO — TOP 3 ───────────────────────────────────────────────────────
    // Source: Persona 07 "The CFO" functional jobs + success criteria

    {
      id: "us-cf-01",
      personaId: "cfo",
      jobToBeDone: "Find credible ROI data and financial outcome benchmarks quickly — without a sales conversation",
      jobSource: "JTBD: 'Find ROI calculators and financial outcome data quickly' + nav implication: 'Avoid burying financial content behind demo-request gates'",
      entryChannel: "CHRO direction / Internal briefing",
      priority: 1,
      successMetric: "Finds an ROI calculator or credible financial benchmark within 2 clicks — no demo request wall encountered",
      pageIds: ["home", "outcomes", "economic-roi"],
      contentGapNote: null
    },
    {
      id: "us-cf-02",
      personaId: "cfo",
      jobToBeDone: "See peer enterprise case studies with quantified business impact metrics",
      jobSource: "JTBD: 'Validate that peer companies of similar size and sector have adopted Modern Health' + success criteria: 'Sees recognizable enterprise clients and peer case studies'",
      entryChannel: "CHRO direction",
      priority: 1,
      successMetric: "Finds named enterprise client case studies with measurable business outcomes (productivity, retention, absenteeism) within 2 clicks",
      pageIds: ["home", "outcomes", "case-studies"],
      contentGapNote: null
    },
    {
      id: "us-cf-03",
      personaId: "cfo",
      jobToBeDone: "Understand the pricing model without needing to speak to sales",
      jobSource: "JTBD: 'Understand total cost of ownership vs. current EAP spend' + success criteria: 'Understands pricing model without needing to talk to sales first' + nav implication: 'Avoid burying financial content behind demo-request gates'",
      entryChannel: "CHRO direction / Board preparation",
      priority: 1,
      successMetric: "Finds clear pricing model or cost structure without being gated behind a demo request form",
      pageIds: ["home", "outcomes", "economic-roi", "our-approach", "sustainable-pricing"],
      contentGapNote: "NOTE: Sustainable Pricing lives under Our Approach in the nav hierarchy — a CFO browsing the Outcomes dropdown will not see it listed there. The cross-link from Economic Value addresses discoverability. Design consideration: pricing and ROI content should feel co-located, and pricing must remain fully ungated."
    }

  ]
};
