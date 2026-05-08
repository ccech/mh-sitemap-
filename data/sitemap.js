// Phase 3: Sitemap v2 — loaded from Figma (Modern-Health_IA_Project, node 15:274)
// Source: https://www.figma.com/design/ny1NTdldHNxwV8HEqlFAvo/Modern-Health_IA_Project?node-id=15-274
// Extracted via Figma MCP on 2026-05-07
// Full rebuild from Site Mapv2 Figma node:
//   - New "Solutions" top-level nav (Care Modalities + Care for Every Challenge)
//   - Members moved to tier 2 under Who We Serve
//   - Responsible AI, Care Modalities, Care for Every Challenge restructured
//   - 22 individual challenge detail pages (replaces single :slug template)
//   - Insights simplified: Past Webinars + Gated Content replace Resources hub
//   - Removed: sustainable-pricing, global-care-network, resources hub, deib, footer-contact
//   - Renamed: mh-by-your-side → partnering-with-your-team, circles → mh-circles, pathways → mh-pathways
//   - pageContent stubs marked "pending content map" await PDF review
window.SITEMAP = {
  "status": "loaded",
  "source": "Figma — Modern-Health_IA_Project (node 15:274)",
  "pages": [

    // ─────────────────────────────────────────────
    // HOME
    // ─────────────────────────────────────────────
    {
      "id": "home",
      "name": "Home",
      "url": "/",
      "navTier": 0,
      "parent": null,
      "pageContent": {
        "purpose": "Routing layer for all personas — reads the visitor and directs them to the highest-value page for their context, not a brand statement.",
        "primaryAudiences": [
          "hr-benefits-manager",
          "benefits-consultant",
          "member",
          "provider",
          "partner",
          "finance-leader"
        ],
        "keyContent": [
          "Persona-split routing messaging above the fold",
          "Primary demo CTA for HR buyers",
          "Secondary paths for members, brokers, and partners",
          "Social proof strip — client logos and outcome stats"
        ],
        "conversionActions": [
          "Request a Demo",
          "Activate Benefit",
          "Partner with Us"
        ],
        "toneNote": null
      },
      "crossLinks": [
        { "toId": "nav-demo-request", "context": "Primary above-fold CTA" },
        { "toId": "nav-member-login", "context": "Secondary action for returning members" },
        { "toId": "employers", "context": "Employer / HR buyer routing path" },
        { "toId": "members", "context": "Member / employee routing path" }
      ],
      "contentClusterCTAs": [
        { "toId": "case-studies", "label": "See client outcomes" },
        { "toId": "care-every-challenge", "label": "Explore care for every challenge" }
      ]
    },

    // ─────────────────────────────────────────────
    // NAV UTILITY — CTAs & Logins
    // ─────────────────────────────────────────────
    {
      "id": "nav-admin-login",
      "name": "Admin Login",
      "url": "/login/admin",
      "navTier": 1,
      "parent": "home",
      "type": "nav-cta",
      "pageContent": {
        "purpose": "Admin and employer portal access — for HR and benefits admins managing their organization's Modern Health account.",
        "primaryAudiences": ["hr-benefits-manager", "total-rewards-professional"],
        "keyContent": ["Admin portal login", "Account recovery"],
        "conversionActions": ["Log In"],
        "toneNote": null
      }
    },
    {
      "id": "nav-provider-login",
      "name": "Provider Login",
      "url": "/login/provider",
      "navTier": 1,
      "parent": "home",
      "type": "nav-cta",
      "pageContent": {
        "purpose": "Persistent nav entry point for credentialed providers — routes to the provider portal for session management and client records.",
        "primaryAudiences": ["provider"],
        "keyContent": ["Provider portal login", "Account recovery"],
        "conversionActions": ["Log In"],
        "toneNote": null
      }
    },
    {
      "id": "nav-member-login",
      "name": "Member Login",
      "url": "/login/member",
      "navTier": 1,
      "parent": "home",
      "type": "nav-cta",
      "pageContent": {
        "purpose": "Persistent nav entry point for existing members — routes to the product app login; critical for returning employees accessing their benefit.",
        "primaryAudiences": ["member"],
        "keyContent": ["Login form or redirect to product app", "Forgot password / account recovery"],
        "conversionActions": ["Log In"],
        "toneNote": "Keep it frictionless. One click should get a member to their session."
      }
    },
    {
      "id": "nav-demo-request",
      "name": "Request a Demo",
      "url": "/request-demo",
      "navTier": 1,
      "parent": "home",
      "type": "nav-cta",
      "pageContent": {
        "purpose": "Primary conversion CTA in the persistent nav bar — surfaces at all times for HR buyers who are ready to talk to sales.",
        "primaryAudiences": ["hr-benefits-manager", "finance-leader", "total-rewards-professional"],
        "keyContent": ["Demo request form", "Calendar or scheduling integration"],
        "conversionActions": ["Submit Demo Request"],
        "toneNote": null
      }
    },

    // ─────────────────────────────────────────────
    // WHO WE SERVE
    // ─────────────────────────────────────────────
    {
      "id": "who-we-serve",
      "name": "Who We Serve",
      "url": null,
      "navTier": 1,
      "parent": "home",
      "type": "nav-dropdown"
    },
    {
      "id": "employers",
      "name": "Employers",
      "url": "/who-we-serve/employers",
      "navTier": 2,
      "parent": "who-we-serve",
      "pageContent": {
        "purpose": "Primary landing page for HR buyers and benefits managers — validates enterprise fit and drives demo requests.",
        "primaryAudiences": ["hr-benefits-manager", "total-rewards-professional"],
        "keyContent": [
          "Enterprise outcomes and ROI summary",
          "Implementation support overview",
          "Client logos and case study links",
          "EAP differentiation messaging"
        ],
        "conversionActions": ["Request a Demo"],
        "toneNote": null
      },
      "crossLinks": [
        { "toId": "partnering-with-your-team", "context": "How we support your team through launch and beyond" },
        { "toId": "adaptive-care", "context": "How our clinical model differs from a legacy EAP" },
        { "toId": "case-studies", "context": "See how companies like yours have seen results" }
      ],
      "contentClusterCTAs": [
        { "toId": "case-studies", "label": "See how companies like yours measure up" },
        { "toId": "gated-content", "label": "Employee communication and launch toolkits" }
      ]
    },
    {
      "id": "consultants",
      "name": "Consultants",
      "url": "/who-we-serve/consultants",
      "navTier": 2,
      "parent": "who-we-serve",
      "pageContent": {
        "purpose": "Dedicated section for benefits consultants — must be a content destination with differentiation evidence and a broker-specific contact CTA, not a generic dead end.",
        "primaryAudiences": ["benefits-consultant"],
        "keyContent": [
          "EAP vs. Modern Health differentiation evidence",
          "Clinical outcomes data and third-party validation",
          "Shareable client materials and downloadable resources",
          "Consultant relations contact CTA (not a generic demo request)"
        ],
        "conversionActions": ["Connect with Consultant Relations", "Download Case Study"],
        "toneNote": null
      },
      "crossLinks": [
        { "toId": "adaptive-care", "context": "Clinical differentiation evidence for client conversations" },
        { "toId": "clinical-outcomes", "context": "Outcomes data and third-party validation to share with clients" },
        { "toId": "case-studies", "context": "Shareable case study PDFs for employer prospects" },
        { "toId": "economic-roi", "context": "ROI benchmarks to support the business case" }
      ],
      "contentClusterCTAs": [
        { "toId": "case-studies", "label": "Shareable client case studies for your prospects" },
        { "toId": "clinical-research", "label": "Peer-reviewed clinical evidence" }
      ]
    },
    {
      "id": "members",
      "name": "Members",
      "url": "/who-we-serve/members",
      "navTier": 2,
      "parent": "who-we-serve",
      "pageContent": {
        "purpose": "Warm entry point for employees — explains care options without clinical jargon, reduces stigma, and drives benefit activation or login.",
        "primaryAudiences": ["member"],
        "keyContent": [
          "Overview of care types in plain, approachable language",
          "Prominent login / benefit activation CTA",
          "Privacy and confidentiality assurance",
          "What to expect from the first experience"
        ],
        "conversionActions": ["Activate Benefit / Log In"],
        "toneNote": "Warm, human, stigma-free. Avoid clinical or corporate language. Lead with empathy, not features or product specs."
      },
      "crossLinks": [
        { "toId": "care-modalities", "context": "Explore all the care types available to you" },
        { "toId": "care-every-challenge", "context": "Find support for your specific situation" },
        { "toId": "nav-member-login", "context": "Already have an account? Log in here" }
      ],
      "contentClusterCTAs": [
        { "toId": "care-every-challenge", "label": "Find support for your situation" },
        { "toId": "blog", "label": "Stories and perspectives" }
      ]
    },
    {
      "id": "health-plans",
      "name": "Health Plans",
      "url": "/who-we-serve/health-plans",
      "navTier": 2,
      "parent": "who-we-serve",
      "pageContent": {
        "purpose": "Landing page for health plan administrators and enterprise partners evaluating Modern Health as an embedded or white-labeled solution.",
        "primaryAudiences": ["partner"],
        "keyContent": [
          "Hero — integrated mental health for health plans",
          "Need for integrated mental health care in health plan offerings",
          "How Modern Health fits within a health plan portfolio",
          "What makes Modern Health enterprise-ready — links to Global Capabilities, Provider Network",
          "How it works in practice — link to Adaptive Care",
          "Outcomes and cost impact — links to Clinical Outcomes, Economic Value",
          "Partnerships and integration approach — link to Partnering with Your Team",
          "CTA — book a demo"
        ],
        "conversionActions": ["Connect with Partnerships Team"],
        "toneNote": null
      },
      "crossLinks": [
        { "toId": "channel-partners", "context": "Explore co-sell and channel partnership models" },
        { "toId": "clinical-outcomes", "context": "Clinical quality evidence for partner due diligence" }
      ],
      "contentClusterCTAs": [
        { "toId": "clinical-research", "label": "Clinical quality evidence for partner due diligence" },
        { "toId": "case-studies", "label": "Enterprise client outcomes at scale" }
      ]
    },
    {
      "id": "channel-partners",
      "name": "Channel Partners",
      "url": "/who-we-serve/channel-partners",
      "navTier": 2,
      "parent": "who-we-serve",
      "pageContent": {
        "purpose": "Partnership models and co-selling information for brokers and strategic partners — needs a dedicated BD contact CTA distinct from the employer demo request.",
        "primaryAudiences": ["partner", "benefits-consultant"],
        "keyContent": [
          "Hero — partnership framing and entry CTA",
          "Why mental health is critical to partner offerings",
          "How Modern Health fits into your product or service portfolio",
          "What makes Modern Health partner-ready",
          "How the partnership operates in practice — links to Adaptive Care, Global Capabilities",
          "Where partners see impact — links to Care for Every Challenge",
          "Proof and validation — links to Clinical Outcomes, Economic Value, Case Studies",
          "Partnership experience and support — links to Partnering with Your Team",
          "CTA — book a demo"
        ],
        "conversionActions": ["Connect with Partnerships Team"],
        "toneNote": null
      },
      "contentClusterCTAs": [
        { "toId": "case-studies", "label": "Client outcomes to share with partners" },
        { "toId": "past-webinars", "label": "Educational content for your clients" }
      ]
    },

    // ─────────────────────────────────────────────
    // OUR APPROACH
    // ─────────────────────────────────────────────
    {
      "id": "our-approach",
      "name": "Our Approach",
      "url": null,
      "navTier": 1,
      "parent": "home",
      "type": "nav-dropdown"
    },
    {
      "id": "global-capabilities",
      "name": "Global Capabilities",
      "url": "/our-approach/global-capabilities",
      "navTier": 2,
      "parent": "our-approach",
      "pageContent": {
        "purpose": "Details international deployment capabilities for HR buyers with distributed workforces and partner evaluators assessing global scale.",
        "primaryAudiences": ["hr-benefits-manager", "partner"],
        "keyContent": [
          "Multi-region deployment support",
          "Language and localization capabilities",
          "Regional compliance (GDPR, HIPAA equivalents)",
          "Named global enterprise client examples"
        ],
        "conversionActions": ["Request a Demo"],
        "toneNote": null
      },
      "contentClusterCTAs": [
        { "toId": "case-studies", "label": "How global enterprises use Modern Health" },
        { "toId": "clinical-research", "label": "Global outcomes data" }
      ]
    },
    {
      "id": "provider-network",
      "name": "Provider Network",
      "url": "/our-approach/provider-network",
      "navTier": 2,
      "parent": "our-approach",
      "pageContent": {
        "purpose": "Demonstrates Modern Health's global clinical provider network — quality standards, credentialing, network size, and coverage for enterprise and partner evaluators.",
        "primaryAudiences": ["partner", "hr-benefits-manager", "provider", "benefits-consultant"],
        "keyContent": [
          "Coverage map and country/region availability",
          "Clinical quality standards and credentialing process",
          "Network size and provider type breakdown",
          "Global compliance and privacy certifications"
        ],
        "conversionActions": ["Join Our Network"],
        "toneNote": null
      },
      "crossLinks": [
        { "toId": "adaptive-care", "context": "Understand the clinical model this network delivers" },
        { "toId": "provider-opportunities", "context": "Join our global provider network" }
      ],
      "contentClusterCTAs": [
        { "toId": "clinical-research", "label": "Published evidence behind our network quality" },
        { "toId": "past-webinars", "label": "Learn more about our care model" }
      ]
    },
    {
      "id": "partnering-with-your-team",
      "name": "Partnering with Your Team",
      "url": "/our-approach/partnering-with-your-team",
      "navTier": 2,
      "parent": "our-approach",
      "pageContent": {
        "purpose": "Client success management approach — highlighting dedicated partnership throughout implementation and beyond to drive adoption and outcomes.",
        "primaryAudiences": ["hr-benefits-manager"],
        "keyContent": [
          "Dedicated client success management model",
          "Onboarding and launch timeline",
          "Workplace tools and launch resources for HR teams",
          "Ongoing utilization and adoption support",
          "Success metrics and engagement tracking tools"
        ],
        "conversionActions": ["Request Implementation Consultation"],
        "toneNote": null
      },
      "crossLinks": [
        { "toId": "gated-content", "context": "Download employee communication and launch toolkits" },
        { "toId": "employers", "context": "Back to the full employer overview" }
      ],
      "contentClusterCTAs": [
        { "toId": "gated-content", "label": "Download launch and communication toolkits" },
        { "toId": "past-webinars", "label": "Implementation and adoption webinars" }
      ]
    },
    {
      "id": "adaptive-care",
      "name": "Adaptive Care",
      "url": "/our-approach/adaptive-care",
      "navTier": 2,
      "parent": "our-approach",
      "pageContent": {
        "purpose": "Core clinical differentiation page — explains the evidence-based adaptive care model and directly contrasts it with traditional EAP approaches.",
        "primaryAudiences": ["hr-benefits-manager", "benefits-consultant", "total-rewards-professional"],
        "keyContent": [
          "Evidence-based adaptive care pathway explanation",
          "Differentiation from EAP on clinical depth and utilization",
          "Care pathway overview: therapy, coaching, self-guided, Circles, Pathways"
        ],
        "conversionActions": ["Request a Demo", "Download Clinical Overview"],
        "toneNote": null
      },
      "crossLinks": [
        { "toId": "clinical-outcomes", "context": "See the outcomes evidence behind this model" },
        { "toId": "care-every-challenge", "context": "Browse the full breadth of supported challenges" },
        { "toId": "provider-network", "context": "Meet the provider network delivering this care" },
        { "toId": "provider-opportunities", "context": "Clinicians: interested in joining our network?" }
      ],
      "contentClusterCTAs": [
        { "toId": "clinical-research", "label": "Published research behind our clinical model" },
        { "toId": "case-studies", "label": "See these outcomes in enterprise practice" }
      ]
    },
    {
      "id": "clinical-quality-standards",
      "name": "Clinical Quality and Standards",
      "url": "/our-approach/clinical-quality-standards",
      "navTier": 2,
      "parent": "our-approach",
      "pageContent": {
        "purpose": "Establishes clinical credibility for skeptical buyers and clinical stakeholders — covers the standards, protocols, and oversight that govern care quality across the Modern Health platform.",
        "primaryAudiences": ["hr-benefits-manager", "benefits-consultant", "partner", "provider"],
        "keyContent": [
          "Hero — our clinical quality commitment",
          "Our clinical philosophy and evidence base",
          "How quality is defined, measured, and maintained",
          "Provider standards, vetting, and credentialing",
          "How care decisions are guided — link to Adaptive Care Model",
          "Measurement and outcomes — links to Clinical Outcomes, Research",
          "Global quality consistency — link to Global Capabilities",
          "CTA — link to Research detail page"
        ],
        "conversionActions": ["Explore Our Research"],
        "toneNote": null
      },
      "contentClusterCTAs": [
        { "toId": "clinical-research", "label": "Published evidence behind our standards" },
        { "toId": "clinical-outcomes", "label": "Outcomes delivered under these standards" }
      ]
    },
    {
      "id": "responsible-ai",
      "name": "Responsible AI",
      "url": "/our-approach/responsible-ai",
      "navTier": 2,
      "parent": "our-approach",
      "pageContent": {
        "purpose": "AI governance and clinical safety page — addresses privacy, accountability, and AI ethics concerns for enterprise buyers and partners.",
        "primaryAudiences": ["hr-benefits-manager", "partner"],
        "keyContent": [
          "AI model governance and human oversight protocols",
          "Clinical safety and accountability framework",
          "Privacy and data protection practices",
          "Regulatory compliance and relevant certifications"
        ],
        "conversionActions": [],
        "toneNote": null
      },
      "contentClusterCTAs": [
        { "toId": "clinical-research", "label": "Our clinical evidence and governance standards" },
        { "toId": "case-studies", "label": "How enterprise clients trust our platform" }
      ]
    },

    // ─────────────────────────────────────────────
    // SOLUTIONS (new top-level nav)
    // ─────────────────────────────────────────────
    {
      "id": "solutions",
      "name": "Solutions",
      "url": null,
      "navTier": 1,
      "parent": "home",
      "type": "nav-dropdown"
    },

    // — Care Modalities —
    {
      "id": "care-modalities",
      "name": "Care Modalities",
      "url": "/solutions/care-modalities",
      "navTier": 2,
      "parent": "solutions",
      "pageContent": {
        "purpose": "Explains all care delivery formats in plain language — for members deciding how to engage and benefits managers explaining the benefit to employees.",
        "primaryAudiences": ["member", "hr-benefits-manager"],
        "keyContent": [
          "Therapy: licensed therapist video sessions",
          "Coaching: goal-oriented sessions with certified coaches",
          "Circles: facilitated peer support communities with certified facilitators",
          "Pathways: structured self-guided care journeys",
          "Self-serve digital resources: evidence-based tools and exercises"
        ],
        "conversionActions": ["Activate Benefit / Log In"],
        "toneNote": "Jargon-free. Emphasize variety and accessibility — there is something for everyone regardless of need severity."
      },
      "contentClusterCTAs": [
        { "toId": "care-every-challenge", "label": "Find support for your specific challenge" },
        { "toId": "past-webinars", "label": "See care modalities in action" }
      ]
    },
    {
      "id": "mh-circles",
      "name": "Modern Health Circles",
      "url": "/solutions/care-modalities/circles",
      "navTier": 3,
      "parent": "care-modalities",
      "pageContent": {
        "purpose": "Marketing introduction to Circles — community-based group support sessions facilitated by certified coaches.",
        "primaryAudiences": ["member"],
        "keyContent": [
          "What Circles are and how group sessions work",
          "Available circle topics (grief, stress, relationships, etc.)",
          "How to join or request a circle",
          "Peer connection and belonging benefits"
        ],
        "conversionActions": ["Activate Benefit / Log In"],
        "toneNote": "Warm, peer-focused, community-oriented. Emphasize belonging, not clinical treatment."
      },
      "contentClusterCTAs": [
        { "toId": "care-every-challenge", "label": "Find support beyond community sessions" },
        { "toId": "blog", "label": "Stories about connection and community" }
      ]
    },
    {
      "id": "mh-pathways",
      "name": "Modern Health Pathways",
      "url": "/solutions/care-modalities/pathways",
      "navTier": 3,
      "parent": "care-modalities",
      "pageContent": {
        "purpose": "Structured care journey guide — helps members understand how to move from first contact to the right care type through self-guided programs.",
        "primaryAudiences": ["member"],
        "keyContent": [
          "How self-guided pathways work",
          "Available pathway topics and what to expect",
          "How to get started and progress through the content"
        ],
        "conversionActions": ["Activate Benefit / Log In"],
        "toneNote": "Reassuring and clear. Reduce anxiety about the unknown first steps."
      },
      "contentClusterCTAs": [
        { "toId": "care-every-challenge", "label": "Browse all support topics" },
        { "toId": "blog", "label": "Member stories and resources" }
      ]
    },

    // — Care for Every Challenge —
    {
      "id": "care-every-challenge",
      "name": "Care for Every Challenge",
      "url": "/solutions/care-for-every-challenge",
      "navTier": 2,
      "parent": "solutions",
      "pageContent": {
        "purpose": "Care category index — shows members and HR buyers the full breadth of support topics available on the platform.",
        "primaryAudiences": ["member", "hr-benefits-manager"],
        "keyContent": [
          "Challenge categories: Everyday Mental Health, Life Stages, Workforce & Organizational Needs, Population-Specific Needs, Clinical & Complex Needs",
          "Brief description of support available per topic",
          "Links to specific care challenge detail pages"
        ],
        "conversionActions": ["Activate Benefit / Log In", "Request a Demo"],
        "toneNote": "Warm and approachable. Emphasize that help exists for a wide range of human experiences — not just clinical diagnoses."
      },
      "crossLinks": [
        { "toId": "care-modalities", "context": "Learn how care is delivered for each of these challenges" },
        { "toId": "members", "context": "Get started — activate your benefit" }
      ],
      "contentClusterCTAs": [
        { "toId": "blog", "label": "Workplace mental health perspectives" },
        { "toId": "past-webinars", "label": "Live and on-demand support sessions" }
      ]
    },

    // Category: Everyday Mental Health & Well-being
    {
      "id": "everyday-mental-health",
      "name": "Everyday Mental Health & Well-being",
      "url": "/solutions/care-for-every-challenge/everyday-mental-health",
      "navTier": 3,
      "parent": "care-every-challenge",
      "type": "challenge-category",
      "pageContent": {
        "purpose": "Challenge category hub for day-to-day mental health and well-being topics — surfaces the breadth of everyday support available to employees.",
        "primaryAudiences": ["member", "hr-benefits-manager"],
        "keyContent": [
          "Hero — why everyday support matters",
          "Common areas of need — Burnout & Workplace Stress, Financial Stress, Preventative & Early Support",
          "How support shows up in practice — link to Care Modalities",
          "Preventing escalation over time — link to Adaptive Care",
          "Connection to workforce outcomes — links to Workforce Performance, Employee Retention"
        ],
        "conversionActions": ["Activate Benefit / Log In"],
        "toneNote": null
      }
    },
    {
      "id": "burnout-workplace-stress",
      "name": "Burnout & Workplace Stress",
      "url": "/solutions/care-for-every-challenge/burnout-workplace-stress",
      "navTier": 4,
      "parent": "everyday-mental-health",
      "pageContent": {
        "purpose": "Challenge page for burnout and workplace stress — normalizes the experience, explains care options, and connects the business impact to HR buyers.",
        "primaryAudiences": ["member", "hr-benefits-manager"],
        "keyContent": [
          "Hero — empathy-led headline naming burnout and stress directly",
          "What burnout looks like at work — recognition and normalization",
          "Why burnout is difficult to address — cultural and organizational barriers",
          "How Modern Health supports burnout and stress — care modalities overview",
          "Supporting employees early and over time — adaptive care model",
          "Impact on workforce outcomes — links to Workforce Performance, Employee Retention",
          "Related challenges — Financial Stress & Well-being, Caregiving, Life Transitions",
          "CTA — dual track: 'Get support now' (member) + 'Learn how we help employers' (buyer)"
        ],
        "conversionActions": ["Activate Benefit / Log In", "Request a Demo"],
        "toneNote": "Empathetic and validating. Normalize the experience before introducing solutions."
      },
      "crossLinks": [
        { "toId": "care-modalities", "context": "How Modern Health supports burnout and stress" },
        { "toId": "adaptive-care", "context": "Supporting employees early and over time" },
        { "toId": "workforce-performance", "context": "Impact on productivity and presenteeism" },
        { "toId": "employee-retention", "context": "Impact on retention and engagement" },
        { "toId": "financial-stress-wellbeing", "context": "Related challenge" },
        { "toId": "caregiving", "context": "Related challenge" },
        { "toId": "life-transitions", "context": "Related challenge" }
      ],
      "contentClusterCTAs": [
        { "toId": "care-every-challenge", "label": "Explore all supported challenges" },
        { "toId": "employers", "label": "Learn how employers use Modern Health" }
      ]
    },
    {
      "id": "financial-stress-wellbeing",
      "name": "Financial Stress & Well-Being",
      "url": "/solutions/care-for-every-challenge/financial-stress-wellbeing",
      "navTier": 4,
      "parent": "everyday-mental-health",
      "pageContent": {
        "purpose": "Challenge page for financial stress — addresses the mental health impact of financial anxiety and how Modern Health supports employees holistically.",
        "primaryAudiences": ["member", "hr-benefits-manager"],
        "keyContent": [
          "Hero — financial stress as a real mental health challenge, not just a money problem",
          "How financial stress shows up at work — focus, absenteeism, relationship conflict",
          "Why it's difficult to address — stigma and employer uncertainty about scope",
          "How Modern Health supports financial well-being — links to Care Modalities, Pathways",
          "Supporting employees holistically — link to Adaptive Care Model",
          "Impact on workforce outcomes — links to Workforce Performance, Employee Retention",
          "Related challenges — Burnout & Workplace Stress, Caregiving, Life Transitions",
          "CTA — dual track: member activation + employer demo"
        ],
        "conversionActions": ["Activate Benefit / Log In", "Request a Demo"],
        "toneNote": "Non-judgmental. Meet people where they are on the financial stress spectrum — not everyone wants to discuss money openly."
      },
      "crossLinks": [
        { "toId": "care-modalities", "context": "How Modern Health supports financial well-being" },
        { "toId": "mh-pathways", "context": "Structured pathways for financial stress and resilience" },
        { "toId": "adaptive-care", "context": "Supporting employees holistically across challenges" },
        { "toId": "workforce-performance", "context": "Impact on workforce productivity" },
        { "toId": "employee-retention", "context": "Impact on retention and engagement" },
        { "toId": "burnout-workplace-stress", "context": "Related challenge" },
        { "toId": "caregiving", "context": "Related challenge" },
        { "toId": "life-transitions", "context": "Related challenge" }
      ],
      "contentClusterCTAs": [
        { "toId": "care-every-challenge", "label": "Explore all supported challenges" },
        { "toId": "employers", "label": "Learn how employers use Modern Health" }
      ]
    },
    {
      "id": "preventative-early-support",
      "name": "Preventative & Early Support",
      "url": "/solutions/care-for-every-challenge/preventative-early-support",
      "navTier": 4,
      "parent": "everyday-mental-health",
      "pageContent": {
        "purpose": "Challenge page for preventative and early-intervention mental health support — makes the case for proactive care before issues escalate.",
        "primaryAudiences": ["member", "hr-benefits-manager"],
        "keyContent": [
          "Hero — the case for early intervention: why waiting for crisis is too late",
          "Why early support matters — prevention is more effective and less costly than crisis response",
          "What prevention looks like in practice — self-guided tools, coaching, Circles, Pathways",
          "How Modern Health enables early intervention — link to Care Modalities",
          "Adapting as needs change over time — link to Adaptive Care Model",
          "Impact on workforce outcomes — links to Economic Value, Workforce Performance",
          "Related challenges — Burnout & Workplace Stress, Financial Stress, Life Transitions",
          "CTA — dual track: member activation + employer demo"
        ],
        "conversionActions": ["Activate Benefit / Log In", "Request a Demo"],
        "toneNote": "Optimistic and empowering. Frame prevention as a strength, not a sign of weakness."
      },
      "crossLinks": [
        { "toId": "care-modalities", "context": "How Modern Health enables early intervention" },
        { "toId": "adaptive-care", "context": "How care adapts as employee needs change" },
        { "toId": "economic-roi", "context": "The economic case for prevention over crisis response" },
        { "toId": "workforce-performance", "context": "Impact on productivity and presenteeism" },
        { "toId": "burnout-workplace-stress", "context": "Related challenge — where prevention makes the biggest difference" },
        { "toId": "financial-stress-wellbeing", "context": "Related challenge" },
        { "toId": "life-transitions", "context": "Related challenge" }
      ],
      "contentClusterCTAs": [
        { "toId": "care-every-challenge", "label": "Explore all supported challenges" },
        { "toId": "economic-roi", "context": "The ROI case for preventative mental health investment" }
      ]
    },

    // Category: Life Stages & Personal Challenges
    {
      "id": "life-stages",
      "name": "Life Stages & Personal Challenges",
      "url": "/solutions/care-for-every-challenge/life-stages",
      "navTier": 3,
      "parent": "care-every-challenge",
      "type": "challenge-category",
      "pageContent": {
        "purpose": "Challenge category hub for life-stage transitions and personal challenges — shows employees that Modern Health supports the whole human experience.",
        "primaryAudiences": ["member", "hr-benefits-manager"],
        "keyContent": [
          "Hero — why life context matters",
          "Common life stages and challenges — Caregiving, Parenting & Dependents, Serious or Chronic Illness, Grief, Life Transitions, Women's Health",
          "How support shows up in practice — link to Care Modalities",
          "Supporting employees through change — link to Adaptive Care Model",
          "Connection to workforce outcomes — links to Employee Retention, Workforce Performance"
        ],
        "conversionActions": ["Activate Benefit / Log In"],
        "toneNote": null
      }
    },
    {
      "id": "caregiving",
      "name": "Caregiving",
      "url": "/solutions/care-for-every-challenge/caregiving",
      "navTier": 4,
      "parent": "life-stages",
      "pageContent": {
        "purpose": "Challenge page for employees managing caregiving responsibilities — addresses the mental health toll of caring for aging parents, children with needs, or ill family members alongside work.",
        "primaryAudiences": ["member", "hr-benefits-manager"],
        "keyContent": [
          "Hero — caregiving as a workforce reality, not just a personal matter",
          "What caregiving looks like today — sandwich generation, elder care, children with complex needs",
          "Why it's difficult to manage alongside work — time pressure, cognitive load, financial strain",
          "How Modern Health supports caregivers — link to Care Modalities",
          "Supporting caregivers over time as needs evolve — link to Adaptive Care Model",
          "Impact on workforce outcomes — links to Workforce Performance, Employee Retention",
          "Related challenges — Financial Stress & Well-being, Burnout & Workplace Stress, Life Transitions",
          "CTA — dual track: member activation + employer demo"
        ],
        "conversionActions": ["Activate Benefit / Log In", "Request a Demo"],
        "toneNote": "Warm and validating. Caregivers often feel invisible — acknowledge the weight of the role before introducing solutions."
      },
      "crossLinks": [
        { "toId": "care-modalities", "context": "How Modern Health supports caregivers" },
        { "toId": "adaptive-care", "context": "Supporting caregivers over time as needs evolve" },
        { "toId": "workforce-performance", "context": "Impact on workforce productivity and presenteeism" },
        { "toId": "employee-retention", "context": "Impact on retention and engagement" },
        { "toId": "financial-stress-wellbeing", "context": "Related challenge" },
        { "toId": "burnout-workplace-stress", "context": "Related challenge" },
        { "toId": "life-transitions", "context": "Related challenge" }
      ],
      "contentClusterCTAs": [
        { "toId": "care-every-challenge", "label": "Explore all supported challenges" },
        { "toId": "employers", "label": "How employers support caregiving employees" }
      ]
    },
    {
      "id": "parenting-dependents",
      "name": "Parenting & Dependents",
      "url": "/solutions/care-for-every-challenge/parenting-dependents",
      "navTier": 4,
      "parent": "life-stages",
      "pageContent": {
        "purpose": "Challenge page for employees navigating parenting and dependent care — covers children's mental health support and what the benefit covers for eligible dependents.",
        "primaryAudiences": ["member", "hr-benefits-manager"],
        "keyContent": [
          "Hero — parenting challenges and their impact on work and family well-being",
          "What children's mental health challenges look like today — anxiety, ADHD, behavioral challenges",
          "Why it's difficult to navigate alongside work — availability, cost, stigma, wait times",
          "How Modern Health supports children and eligible dependents — link to Care Modalities",
          "Supporting families as needs evolve over time — link to Adaptive Care Model",
          "Impact on workforce outcomes — links to Workforce Performance, Employee Retention",
          "Related challenges — Caregiving, Financial Stress & Well-being, Life Transitions",
          "CTA — dual track: member activation + employer demo"
        ],
        "conversionActions": ["Activate Benefit / Log In", "Request a Demo"],
        "toneNote": "Warm and practical. Parents want to know what's covered and how it works — keep the path to answers short."
      },
      "crossLinks": [
        { "toId": "care-modalities", "context": "How Modern Health supports parents and dependent family members" },
        { "toId": "adaptive-care", "context": "Supporting families as mental health needs evolve" },
        { "toId": "workforce-performance", "context": "Impact on workforce productivity" },
        { "toId": "employee-retention", "context": "Impact on retention and engagement" },
        { "toId": "caregiving", "context": "Related challenge" },
        { "toId": "financial-stress-wellbeing", "context": "Related challenge" },
        { "toId": "life-transitions", "context": "Related challenge" }
      ],
      "contentClusterCTAs": [
        { "toId": "care-every-challenge", "label": "Explore all supported challenges" },
        { "toId": "members", "label": "What the member experience looks like" }
      ]
    },
    {
      "id": "serious-chronic-illness",
      "name": "Serious or Chronic Illness",
      "url": "/solutions/care-for-every-challenge/serious-chronic-illness",
      "navTier": 4,
      "parent": "life-stages",
      "pageContent": {
        "purpose": "Challenge page for employees managing serious or chronic illness — addresses the psychological impact of diagnosis, long-term treatment, and the uncertainty that accompanies chronic conditions.",
        "primaryAudiences": ["member", "hr-benefits-manager"],
        "keyContent": [
          "Hero — serious and chronic illness as a whole-person experience that affects work",
          "What this looks like for employees — diagnosis, treatment side effects, uncertainty, identity shift",
          "Why it's difficult to navigate — absence, disclosure fears, long-term mental health impact",
          "How Modern Health supports employees with illness — link to Care Modalities",
          "Supporting whole-person health over time — link to Adaptive Care Model",
          "Impact on workforce outcomes — links to Workforce Performance, Employee Retention",
          "Related challenges — Caregiving, Grief, Life Transitions",
          "CTA — dual track: member activation + employer demo"
        ],
        "conversionActions": ["Activate Benefit / Log In", "Request a Demo"],
        "toneNote": "Sensitive and human. Emphasize clinical depth available for complex situations. Do not minimize the experience."
      },
      "crossLinks": [
        { "toId": "care-modalities", "context": "How Modern Health supports employees with serious illness" },
        { "toId": "adaptive-care", "context": "Supporting whole-person health over time" },
        { "toId": "workforce-performance", "context": "Impact on productivity and presenteeism" },
        { "toId": "employee-retention", "context": "Impact on retention and engagement" },
        { "toId": "caregiving", "context": "Related challenge" },
        { "toId": "grief", "context": "Related challenge — grief and loss in chronic illness" },
        { "toId": "life-transitions", "context": "Related challenge" }
      ],
      "contentClusterCTAs": [
        { "toId": "care-every-challenge", "label": "Explore all supported challenges" },
        { "toId": "clinical-outcomes", "label": "Clinical outcomes for complex conditions" }
      ]
    },
    {
      "id": "grief",
      "name": "Grief",
      "url": "/solutions/care-for-every-challenge/grief",
      "navTier": 4,
      "parent": "life-stages",
      "pageContent": {
        "purpose": "Challenge page for employees experiencing loss and grief — normalizes grief as a workplace reality and explains how Modern Health supports people through it.",
        "primaryAudiences": ["member", "hr-benefits-manager"],
        "keyContent": [
          "Hero — grief as a universal human experience that shows up at work",
          "How grief shows up at work — performance, focus, social withdrawal, physical symptoms",
          "Why grief is often unsupported — cultural discomfort, short bereavement policies, stigma",
          "How Modern Health supports employees through grief — therapy, coaching, and Circles",
          "Supporting employees through difficult moments — link to Adaptive Care Model",
          "Impact on workforce outcomes — links to Workforce Performance, Employee Retention",
          "Related challenges — Life Transitions, Serious or Chronic Illness, Caregiving",
          "CTA — dual track: member activation + employer demo"
        ],
        "conversionActions": ["Activate Benefit / Log In", "Request a Demo"],
        "toneNote": "Highly empathetic. Meet people where they are. Do not rush to solutions or minimize the experience."
      },
      "crossLinks": [
        { "toId": "care-modalities", "context": "Care types available for grief support, including Circles and therapy" },
        { "toId": "mh-circles", "context": "Community-based grief support through facilitated Circles" },
        { "toId": "adaptive-care", "context": "Supporting employees through difficult moments over time" },
        { "toId": "workforce-performance", "context": "Impact on workforce productivity" },
        { "toId": "employee-retention", "context": "Impact on retention and engagement" },
        { "toId": "life-transitions", "context": "Related challenge" },
        { "toId": "serious-chronic-illness", "context": "Related challenge" },
        { "toId": "caregiving", "context": "Related challenge" }
      ],
      "contentClusterCTAs": [
        { "toId": "care-every-challenge", "label": "Explore all supported challenges" },
        { "toId": "mh-circles", "label": "Community-based grief support through Circles" }
      ]
    },
    {
      "id": "life-transitions",
      "name": "Life Transitions & Major Changes",
      "url": "/solutions/care-for-every-challenge/life-transitions",
      "navTier": 4,
      "parent": "life-stages",
      "pageContent": {
        "purpose": "Challenge page for employees navigating major life changes — divorce, relocation, career shifts, loss, and other transitions that affect mental health and work.",
        "primaryAudiences": ["member", "hr-benefits-manager"],
        "keyContent": [
          "Hero — major life changes and their impact on work and well-being",
          "What life transitions look like — divorce, relocation, job change, family changes, retirement",
          "Why transitions are difficult to navigate — uncertainty, loss of identity, support system gaps",
          "How Modern Health supports employees through change — link to Care Modalities",
          "Supporting employees through uncertainty — link to Adaptive Care Model",
          "Impact on workforce outcomes — links to Workforce Performance, Employee Retention",
          "Related challenges — Grief, Caregiving, Financial Stress & Well-being",
          "CTA — dual track: member activation + employer demo"
        ],
        "conversionActions": ["Activate Benefit / Log In", "Request a Demo"],
        "toneNote": "Grounding and steady. People in transition need stability and clarity — not cheerfulness or urgency."
      },
      "crossLinks": [
        { "toId": "care-modalities", "context": "How Modern Health supports employees through change" },
        { "toId": "adaptive-care", "context": "Supporting employees through uncertainty and transition" },
        { "toId": "workforce-performance", "context": "Impact on workforce productivity" },
        { "toId": "employee-retention", "context": "Impact on retention and engagement" },
        { "toId": "grief", "context": "Related challenge — grief and loss within transitions" },
        { "toId": "caregiving", "context": "Related challenge" },
        { "toId": "financial-stress-wellbeing", "context": "Related challenge" }
      ],
      "contentClusterCTAs": [
        { "toId": "care-every-challenge", "label": "Explore all supported challenges" },
        { "toId": "members", "label": "What the member experience looks like" }
      ]
    },
    {
      "id": "womens-health",
      "name": "Women's Health",
      "url": "/solutions/care-for-every-challenge/womens-health",
      "navTier": 4,
      "parent": "life-stages",
      "pageContent": {
        "purpose": "Challenge page for women's mental health — covers reproductive health, perimenopause, postpartum, and gender-specific stressors as workplace equity and retention issues.",
        "primaryAudiences": ["member", "hr-benefits-manager"],
        "keyContent": [
          "Hero — women's mental health as a workplace equity and retention issue",
          "What women's health challenges include — reproductive health, perimenopause, postpartum, gender-specific stress",
          "Why support is often lacking — gaps in EAP coverage, clinical dismissal, workplace stigma",
          "How Modern Health supports women's health — link to Care Modalities",
          "Supporting employees across life stages — link to Adaptive Care Model",
          "Impact on workforce outcomes — links to Employee Retention, Workforce Performance",
          "Related challenges — Life Transitions, Caregiving, Burnout & Workplace Stress",
          "CTA — dual track: member activation + employer demo"
        ],
        "conversionActions": ["Activate Benefit / Log In", "Request a Demo"],
        "toneNote": "Respectful and specific. Women's health is not a niche — frame it as a business imperative and a care equity issue."
      },
      "crossLinks": [
        { "toId": "care-modalities", "context": "Care types available for women's health challenges" },
        { "toId": "adaptive-care", "context": "Supporting women across different life stages" },
        { "toId": "employee-retention", "context": "Impact on retention and engagement" },
        { "toId": "workforce-performance", "context": "Impact on workforce productivity" },
        { "toId": "life-transitions", "context": "Related challenge — life stages and transitions" },
        { "toId": "caregiving", "context": "Related challenge" },
        { "toId": "burnout-workplace-stress", "context": "Related challenge" }
      ],
      "contentClusterCTAs": [
        { "toId": "care-every-challenge", "label": "Explore all supported challenges" },
        { "toId": "employers", "label": "How employers support women's health" }
      ]
    },
    {
      "id": "neurodivergent-support",
      "name": "Neurodivergent Employee Support",
      "url": "/solutions/care-for-every-challenge/neurodivergent-support",
      "navTier": 4,
      "parent": "population-specific-needs",
      "pageContent": {
        "purpose": "Challenge page for neurodivergent employees — demonstrates that Modern Health's care model adapts to different cognitive styles and working needs.",
        "primaryAudiences": ["member", "hr-benefits-manager"],
        "keyContent": [
          "Hero — neurodivergence in the workforce as a strength and a support need",
          "Neurodivergence in the workforce — ADHD, autism, dyslexia, and what this means for mental health",
          "Where traditional support falls short — one-size-fits-all approaches don't work for neurodivergent employees",
          "How Modern Health supports neurodivergent employees — link to Care Modalities",
          "Supporting different ways of working and thinking — link to Adaptive Care Model",
          "Impact on workforce outcomes — engagement, performance, and psychological safety",
          "Related challenges — Leadership & Manager Support, Workforce Performance, Burnout & Workplace Stress",
          "CTA — dual track: member activation + employer demo"
        ],
        "conversionActions": ["Activate Benefit / Log In", "Request a Demo"],
        "toneNote": "Affirming and specific. Neurodivergent employees often feel unseen by standard wellness programs — acknowledge the gap before introducing solutions."
      },
      "crossLinks": [
        { "toId": "care-modalities", "context": "How Modern Health supports neurodivergent employees" },
        { "toId": "adaptive-care", "context": "Supporting different ways of working and thinking" },
        { "toId": "leadership-manager-support", "context": "Related challenge — manager support for neurodiverse teams" },
        { "toId": "workforce-performance", "context": "Related challenge — performance and presenteeism" },
        { "toId": "burnout-workplace-stress", "context": "Related challenge — burnout in neurodivergent employees" }
      ],
      "contentClusterCTAs": [
        { "toId": "care-every-challenge", "label": "Explore all supported challenges" },
        { "toId": "employers", "label": "How employers support neurodivergent workforce populations" }
      ]
    },

    // Category: Workforce & Organizational Needs
    {
      "id": "workforce-org-needs",
      "name": "Workforce & Organizational Needs",
      "url": "/solutions/care-for-every-challenge/workforce-organizational",
      "navTier": 3,
      "parent": "care-every-challenge",
      "type": "challenge-category",
      "pageContent": {
        "purpose": "Challenge category hub for workforce and organizational mental health topics — speaks to HR buyers and benefits managers about systemic employee needs.",
        "primaryAudiences": ["hr-benefits-manager", "total-rewards-professional", "benefits-consultant"],
        "keyContent": [
          "Hero — why workforce mental health matters for organizations",
          "Key workforce priorities — Leadership & Manager Support, Workforce Performance, Employee Retention, Crisis Preparedness, Career Growth, Leave of Absence",
          "How support shows up in practice — link to Care Modalities",
          "Connecting mental health to business outcomes — links to Economic Value, Clinical Outcomes",
          "Supporting organizations over time — links to Adaptive Care, Partnering with Your Team"
        ],
        "conversionActions": ["Request a Demo"],
        "toneNote": null
      }
    },
    {
      "id": "leadership-manager-support",
      "name": "Leadership & Manager Support",
      "url": "/solutions/care-for-every-challenge/leadership-manager-support",
      "navTier": 4,
      "parent": "workforce-org-needs",
      "pageContent": {
        "purpose": "Challenge page for manager and leadership mental health — addresses the dual role managers play: supporting their teams while managing their own well-being.",
        "primaryAudiences": ["member", "hr-benefits-manager"],
        "keyContent": [
          "Hero — managers are the mental health front line, and they need support too",
          "Why managers are under pressure — team expectations, escalating employee needs, their own mental health",
          "Where gaps show up — managers feel unprepared, unsupported, and isolated in the role",
          "How Modern Health supports managers — links to Care Modalities, Pathways",
          "Building manager confidence and capability over time — link to Adaptive Care Model",
          "Impact on team and business outcomes — links to Employee Retention, Workforce Performance",
          "Related challenges — Burnout & Workplace Stress, Career Growth & Development, Crisis Preparedness",
          "CTA — dual track: member support + employer learning"
        ],
        "conversionActions": ["Activate Benefit / Log In", "Request a Demo"],
        "toneNote": "Respect the dual role — managers don't want to be seen as struggling. Frame support as building capability, not addressing weakness."
      },
      "crossLinks": [
        { "toId": "care-modalities", "context": "How Modern Health supports managers" },
        { "toId": "mh-pathways", "context": "Structured pathways for leadership and management skills" },
        { "toId": "adaptive-care", "context": "Building manager confidence and capability over time" },
        { "toId": "employee-retention", "context": "Impact on team retention and engagement" },
        { "toId": "workforce-performance", "context": "Impact on team performance and productivity" },
        { "toId": "burnout-workplace-stress", "context": "Related challenge — manager burnout" },
        { "toId": "career-growth", "context": "Related challenge — career growth and development" },
        { "toId": "crisis-preparedness", "context": "Related challenge — manager role in crisis preparedness" }
      ],
      "contentClusterCTAs": [
        { "toId": "care-every-challenge", "label": "Explore all supported challenges" },
        { "toId": "employers", "label": "How employers invest in manager well-being" }
      ]
    },
    {
      "id": "workforce-performance",
      "name": "Workforce Performance & Presenteeism",
      "url": "/solutions/care-for-every-challenge/workforce-performance-presenteeism",
      "navTier": 4,
      "parent": "workforce-org-needs",
      "pageContent": {
        "purpose": "Challenge page connecting mental health investment to workforce performance — makes the business case for HR, finance, and total rewards stakeholders.",
        "primaryAudiences": ["hr-benefits-manager", "finance-leader", "total-rewards-professional"],
        "keyContent": [
          "Hero — the hidden cost of untreated mental health on workforce performance",
          "What performance challenges look like — absenteeism, presenteeism, errors, disengagement",
          "Why performance issues are often overlooked — mental health isn't on the performance dashboard",
          "How Modern Health supports workforce performance — link to Care Modalities",
          "Addressing issues before they escalate — links to Preventative & Early Support, Adaptive Care",
          "Business impact — quantified productivity and absenteeism data — link to Economic Value",
          "Related challenges — Burnout & Workplace Stress, Financial Stress & Well-being",
          "CTA — links to Economic Value, Employers page, Request a Demo"
        ],
        "conversionActions": ["Request a Demo"],
        "toneNote": "Data-focused for the HR and finance audience. Tie mental health to measurable business performance metrics."
      },
      "crossLinks": [
        { "toId": "care-modalities", "context": "How Modern Health supports workforce performance" },
        { "toId": "preventative-early-support", "context": "Addressing performance issues before they escalate" },
        { "toId": "adaptive-care", "context": "Adaptive care for sustained performance improvement" },
        { "toId": "economic-roi", "context": "The business impact of mental health on productivity" },
        { "toId": "burnout-workplace-stress", "context": "Related challenge — burnout and stress as performance drivers" },
        { "toId": "financial-stress-wellbeing", "context": "Related challenge" }
      ],
      "contentClusterCTAs": [
        { "toId": "economic-roi", "label": "Model the ROI of mental health investment" },
        { "toId": "employers", "label": "How employers partner with Modern Health" }
      ]
    },
    {
      "id": "employee-retention",
      "name": "Employee Retention & Engagement",
      "url": "/solutions/care-for-every-challenge/employee-retention-engagement",
      "navTier": 4,
      "parent": "workforce-org-needs",
      "pageContent": {
        "purpose": "Challenge page connecting mental health benefits to retention and engagement outcomes — positions Modern Health as a measurable retention tool for HR and finance audiences.",
        "primaryAudiences": ["hr-benefits-manager", "finance-leader", "total-rewards-professional"],
        "keyContent": [
          "Hero — mental health benefits as a measurable retention and engagement lever",
          "Why retention is challenging today — workforce expectations, competition, burnout, life-stage pressures",
          "Where disengagement shows up — turnover signals, quiet quitting, absenteeism patterns",
          "How Modern Health supports retention and engagement — link to Care Modalities",
          "Driving meaningful engagement over time — link to Adaptive Care Model",
          "Impact on business outcomes — links to Economic Value, Case Studies",
          "Related challenges — Burnout & Workplace Stress, Caregiving, Life Transitions",
          "CTA — links to Care for Every Challenge, Employers page, Request a Demo"
        ],
        "conversionActions": ["Request a Demo"],
        "toneNote": "Frame retention as financial risk management, not just culture. Finance leaders respond to turnover cost data."
      },
      "crossLinks": [
        { "toId": "care-modalities", "context": "How Modern Health drives employee engagement" },
        { "toId": "adaptive-care", "context": "Driving meaningful engagement over time" },
        { "toId": "economic-roi", "context": "The financial cost of turnover vs. mental health investment" },
        { "toId": "case-studies", "context": "How enterprise clients have improved retention with Modern Health" },
        { "toId": "burnout-workplace-stress", "context": "Related challenge — burnout as a primary driver of turnover" },
        { "toId": "caregiving", "context": "Related challenge" },
        { "toId": "life-transitions", "context": "Related challenge" }
      ],
      "contentClusterCTAs": [
        { "toId": "economic-roi", "label": "Model the financial impact of retention" },
        { "toId": "case-studies", "label": "Enterprise retention outcomes" }
      ]
    },
    {
      "id": "crisis-preparedness",
      "name": "Crisis Preparedness & Response",
      "url": "/solutions/care-for-every-challenge/crisis-preparedness-response",
      "navTier": 4,
      "parent": "workforce-org-needs",
      "pageContent": {
        "purpose": "Challenge page for organizational crisis preparedness — addresses how employers can be ready to respond when critical incidents affect their workforce.",
        "primaryAudiences": ["hr-benefits-manager", "total-rewards-professional"],
        "keyContent": [
          "Hero — organizational crisis readiness as a workforce stability investment",
          "Why crisis readiness matters — workplace violence, mass trauma, sudden loss, natural disasters",
          "Where organizations struggle — reactive-only approaches, no infrastructure for post-incident support",
          "How Modern Health supports crisis response — link to Partnering with Your Team",
          "Supporting stabilization and recovery over time — links to Care Modalities, Adaptive Care",
          "Impact on workforce stability — maintaining cohesion and performance after critical incidents",
          "Related challenges — Grief, Life Transitions, Workforce Performance",
          "CTA — links to Partnering with Your Team, Request a Demo"
        ],
        "conversionActions": ["Request a Demo"],
        "toneNote": "Calm and authoritative. HR needs confidence that Modern Health is a reliable partner in crisis, not a promise."
      },
      "crossLinks": [
        { "toId": "partnering-with-your-team", "context": "How Modern Health supports crisis response alongside your team" },
        { "toId": "care-modalities", "context": "Care types available during and after a crisis" },
        { "toId": "adaptive-care", "context": "Supporting stabilization and long-term recovery" },
        { "toId": "grief", "context": "Related challenge — grief and loss in crisis situations" },
        { "toId": "life-transitions", "context": "Related challenge — major change after a critical incident" },
        { "toId": "workforce-performance", "context": "Related challenge — workforce stability and performance after crisis" }
      ],
      "contentClusterCTAs": [
        { "toId": "partnering-with-your-team", "label": "How Modern Health partners with your team in crisis" },
        { "toId": "employers", "label": "Full employer partnership overview" }
      ]
    },
    {
      "id": "career-growth",
      "name": "Career Growth & Development",
      "url": "/solutions/care-for-every-challenge/career-growth-development",
      "navTier": 4,
      "parent": "workforce-org-needs",
      "pageContent": {
        "purpose": "Challenge page connecting coaching and development to career growth — positions Modern Health's coaching and Pathways as a meaningful career development benefit.",
        "primaryAudiences": ["member", "hr-benefits-manager"],
        "keyContent": [
          "Hero — career development as a mental health and engagement investment",
          "What growth challenges look like — stagnation, skill gaps, imposter syndrome, unclear paths",
          "Why support is often limited — development is deprioritized when crisis care takes center stage",
          "How Modern Health supports growth and development — links to Care Modalities, Pathways",
          "Building skills and resilience over time — link to Adaptive Care Model",
          "Impact on workforce outcomes — links to Employee Retention, Workforce Performance",
          "Related challenges — Leadership & Manager Support, Burnout & Workplace Stress",
          "CTA — links to Care for Every Challenge, Employers page"
        ],
        "conversionActions": ["Activate Benefit / Log In", "Request a Demo"],
        "toneNote": "Aspirational but grounded. Career growth is a legitimate mental health investment — not a nice-to-have."
      },
      "crossLinks": [
        { "toId": "care-modalities", "context": "How Modern Health supports career growth — coaching and self-guided tools" },
        { "toId": "mh-pathways", "context": "Structured pathways for skill-building and career development" },
        { "toId": "adaptive-care", "context": "Building skills and resilience over time" },
        { "toId": "employee-retention", "context": "How career growth investment drives retention" },
        { "toId": "workforce-performance", "context": "Impact on performance and productivity" },
        { "toId": "leadership-manager-support", "context": "Related challenge — leadership development" },
        { "toId": "burnout-workplace-stress", "context": "Related challenge — burnout as a signal of development gaps" }
      ],
      "contentClusterCTAs": [
        { "toId": "care-every-challenge", "label": "Explore all supported challenges" },
        { "toId": "employers", "label": "How employers use coaching as a retention benefit" }
      ]
    },
    {
      "id": "leave-absence-accommodations",
      "name": "Leave of Absence & Accommodations",
      "url": "/solutions/care-for-every-challenge/leave-absence-accommodations",
      "navTier": 4,
      "parent": "workforce-org-needs",
      "pageContent": {
        "purpose": "Challenge page for mental health-related leave of absence and accommodations — addresses the intersection of mental health care and HR compliance, and how Modern Health supports continuity during and after leave.",
        "primaryAudiences": ["member", "hr-benefits-manager", "total-rewards-professional"],
        "keyContent": [
          "Hero — LOA and accommodations as mental health infrastructure, not just compliance",
          "The state of leaves of absence and accommodations — rising frequency, manager uncertainty, legal complexity",
          "The role of mental health in LOA — most extended leaves have a mental health component",
          "How Modern Health helps — links to Care Modalities, Life Transitions support",
          "Supporting reintegration and continuity of care during and after leave — link to Adaptive Care Model",
          "Impact on workforce outcomes — retention, legal exposure, employee experience",
          "Related challenges — Serious or Chronic Illness, Grief, Caregiving",
          "CTA — links to Employers page, Request a Demo"
        ],
        "conversionActions": ["Activate Benefit / Log In", "Request a Demo"],
        "toneNote": "Balanced — speak to both the employee experience and the employer's compliance and care responsibility."
      },
      "crossLinks": [
        { "toId": "care-modalities", "context": "How Modern Health supports employees on leave and during reintegration" },
        { "toId": "life-transitions", "context": "Mental health support through major workplace transitions" },
        { "toId": "adaptive-care", "context": "Supporting reintegration and continuity of care" },
        { "toId": "serious-chronic-illness", "context": "Related challenge — illness-related leave" },
        { "toId": "grief", "context": "Related challenge — bereavement leave and grief support" },
        { "toId": "caregiving", "context": "Related challenge — family and caregiving leave" }
      ],
      "contentClusterCTAs": [
        { "toId": "partnering-with-your-team", "label": "How Modern Health partners with your HR team" },
        { "toId": "employers", "label": "Full employer partnership overview" }
      ]
    },
    {
      "id": "frontline-workforce",
      "name": "Frontline & Deskless Workforce Support",
      "url": "/solutions/care-for-every-challenge/frontline-deskless-workforce",
      "navTier": 4,
      "parent": "population-specific-needs",
      "pageContent": {
        "purpose": "Challenge page for frontline and deskless workers — demonstrates how Modern Health reaches populations that traditional desk-first benefits consistently fail.",
        "primaryAudiences": ["hr-benefits-manager", "member"],
        "keyContent": [
          "Hero — frontline workers have unique mental health needs that standard benefits miss",
          "What challenges look like for frontline workers — high demand, low flexibility, limited benefit access",
          "Why traditional benefits don't reach this group — desk-first delivery, language barriers, scheduling",
          "How Modern Health supports frontline employees — link to Care Modalities",
          "Meeting employees where they are — mobile-first, flexible, accessible — link to Adaptive Care",
          "Impact on workforce outcomes — links to Burnout & Workplace Stress, Financial Stress",
          "Related challenges — Burnout & Workplace Stress, Financial Stress & Well-being",
          "CTA — dual track: member activation + employer demo"
        ],
        "conversionActions": ["Activate Benefit / Log In", "Request a Demo"],
        "toneNote": "Practical and direct. Frontline employees are often skeptical of employer benefits — lead with accessibility and ease of use."
      },
      "crossLinks": [
        { "toId": "care-modalities", "context": "How Modern Health reaches frontline and deskless employees" },
        { "toId": "adaptive-care", "context": "Meeting employees where they are — flexible, mobile-accessible care" },
        { "toId": "global-capabilities", "context": "Reaching distributed and geographically dispersed workforces" },
        { "toId": "burnout-workplace-stress", "context": "Related challenge — burnout in high-demand roles" },
        { "toId": "financial-stress-wellbeing", "context": "Related challenge — financial pressure in frontline roles" }
      ],
      "contentClusterCTAs": [
        { "toId": "care-every-challenge", "label": "Explore all supported challenges" },
        { "toId": "employers", "label": "How employers support frontline workforce populations" }
      ]
    },
    {
      "id": "multicultural-workforce",
      "name": "Multicultural Workforce Support",
      "url": "/solutions/care-for-every-challenge/multicultural-workforce",
      "navTier": 4,
      "parent": "population-specific-needs",
      "pageContent": {
        "purpose": "Challenge page for multicultural workforce mental health — demonstrates culturally and linguistically responsive care as a business imperative and care equity commitment.",
        "primaryAudiences": ["hr-benefits-manager", "total-rewards-professional", "member"],
        "keyContent": [
          "Hero — culturally responsive care as a business imperative, not a nice-to-have",
          "What cultural differences mean for mental health — stigma, expression, help-seeking norms",
          "Where gaps exist today — culturally incompetent care, language barriers, lack of representation",
          "How Modern Health supports diverse populations — links to Global Capabilities, Provider Network",
          "Delivering care across regions and cultures — link to Adaptive Care Model",
          "Impact on engagement and outcomes — global engagement research evidence",
          "Related challenges — Caregiving, Life Transitions",
          "CTA — dual track: member activation + employer demo"
        ],
        "conversionActions": ["Activate Benefit / Log In", "Request a Demo"],
        "toneNote": "Specific and respectful. Multicultural support is not a feature — it's a clinical and equity requirement. Avoid vague DEI language."
      },
      "crossLinks": [
        { "toId": "global-capabilities", "context": "How Modern Health supports culturally diverse populations globally" },
        { "toId": "provider-network", "context": "Culturally and linguistically diverse provider network" },
        { "toId": "adaptive-care", "context": "Delivering care across regions and cultures" },
        { "toId": "caregiving", "context": "Related challenge" },
        { "toId": "life-transitions", "context": "Related challenge" }
      ],
      "contentClusterCTAs": [
        { "toId": "global-capabilities", "label": "Global care capabilities and cultural responsiveness" },
        { "toId": "provider-network", "label": "Our diverse global provider network" }
      ]
    },

    // ──────────────────────────────────────────────────
    // Population-Specific Needs detail pages
    // (category hub is inline above; detail pages grouped here)
    // ──────────────────────────────────────────────────
    // Note: neurodivergent-support, frontline-workforce, multicultural-workforce
    // are defined under their old sections but now point to population-specific-needs as parent.
    // first-responders is new.
    {
      "id": "first-responders",
      "name": "First Responders & Healthcare Workforce",
      "url": "/solutions/care-for-every-challenge/first-responders-healthcare-workforce",
      "navTier": 4,
      "parent": "population-specific-needs",
      "pageContent": {
        "purpose": "Challenge page for first responders and healthcare workers — high-stress, high-acuity populations who face unique mental health barriers and stigma around help-seeking in their professions.",
        "primaryAudiences": ["member", "hr-benefits-manager"],
        "keyContent": [
          "What challenges look like in these roles",
          "Why traditional support falls short for first responders and healthcare workers",
          "How Modern Health supports these populations",
          "Supporting resilience and recovery over time",
          "Impact on workforce stability"
        ],
        "conversionActions": ["Activate Benefit / Log In", "Request a Demo"],
        "toneNote": "Respect the stigma around help-seeking in these professions. Lead with resilience framing rather than vulnerability."
      },
      "crossLinks": [
        { "toId": "care-modalities", "context": "How care is delivered for this population" },
        { "toId": "adaptive-care", "context": "Supporting resilience and recovery over time" },
        { "toId": "burnout-workplace-stress", "context": "Related challenge: burnout in high-stress roles" },
        { "toId": "grief", "context": "Related challenge: grief and loss in these professions" },
        { "toId": "crisis-preparedness", "context": "Related challenge: crisis preparedness and response" }
      ],
      "contentClusterCTAs": [
        { "toId": "care-every-challenge", "label": "Explore all supported challenges" },
        { "toId": "employers", "label": "How employers support this workforce" }
      ]
    },

    // Category: Population-Specific Needs (NEW — from content map, 5th challenge category)
    {
      "id": "population-specific-needs",
      "name": "Population-Specific Needs",
      "url": "/solutions/care-for-every-challenge/population-specific-needs",
      "navTier": 3,
      "parent": "care-every-challenge",
      "type": "challenge-category",
      "pageContent": {
        "purpose": "Challenge category hub for population-specific mental health needs — demonstrates Modern Health's ability to serve diverse, specialized workforce populations beyond generic EAP coverage.",
        "primaryAudiences": ["hr-benefits-manager", "partner"],
        "keyContent": [
          "Why population-specific support matters",
          "Key populations we support: Neurodivergent employees, Frontline & deskless workers, Multicultural workforce, First responders & healthcare workers",
          "How support adapts to different populations",
          "Delivering relevant and accessible care — global capabilities and provider network",
          "Impact on engagement and outcomes — clinical and economic evidence"
        ],
        "conversionActions": ["Request a Demo"],
        "toneNote": null
      },
      "crossLinks": [
        { "toId": "adaptive-care", "context": "How care adapts to different populations" },
        { "toId": "global-capabilities", "context": "Delivering relevant and accessible care globally" },
        { "toId": "provider-network", "context": "Cultural and linguistic coverage for diverse populations" },
        { "toId": "clinical-outcomes", "context": "Impact on engagement and outcomes" }
      ],
      "contentClusterCTAs": [
        { "toId": "employers", "label": "How employers support diverse workforces" },
        { "toId": "nav-demo-request", "label": "Request a demo" }
      ]
    },

    // Category: Clinical & Complex Needs
    {
      "id": "clinical-complex-needs",
      "name": "Clinical & Complex Needs",
      "url": "/solutions/care-for-every-challenge/clinical-complex",
      "navTier": 3,
      "parent": "care-every-challenge",
      "type": "challenge-category",
      "pageContent": {
        "purpose": "Challenge category hub for clinical-level and complex mental health needs — demonstrates Modern Health's capacity for high-acuity care beyond EAP.",
        "primaryAudiences": ["hr-benefits-manager", "benefits-consultant", "provider"],
        "keyContent": [
          "Hero — why clinical support matters",
          "Where gaps exist today in traditional EAP and benefits coverage",
          "Key areas of support — Substance Use, Disordered Eating, Depression & Anxiety, Crisis & Acute Mental Health",
          "How support is delivered — link to Care Modalities",
          "Supporting employees across levels of need — link to Adaptive Care Model",
          "Impact on workforce outcomes — links to Clinical Outcomes, Economic Value"
        ],
        "conversionActions": ["Request a Demo"],
        "toneNote": null
      }
    },
    {
      "id": "substance-use",
      "name": "Substance Use",
      "url": "/solutions/care-for-every-challenge/substance-use",
      "navTier": 4,
      "parent": "clinical-complex-needs",
      "pageContent": {
        "purpose": "Challenge page for substance use support — demonstrates Modern Health's clinical capacity for evidence-based substance use care beyond standard EAP.",
        "primaryAudiences": ["member", "hr-benefits-manager"],
        "keyContent": [
          "Hero — substance use support as part of whole-person care, not a separate program",
          "What substance use challenges look like — alcohol, opioids, and other dependencies in the workplace",
          "Why support is often delayed or limited — stigma, inadequate EAP coverage, fear of job consequences",
          "How Modern Health provides care for substance use concerns — link to Care Modalities",
          "Connecting to appropriate levels of care — link to Adaptive Care Model",
          "Impact on workforce outcomes — links to Workforce Performance, Economic Value",
          "Related challenges — Depression & Anxiety Support, Grief, Life Transitions",
          "CTA — dual track: member activation + employer demo"
        ],
        "conversionActions": ["Activate Benefit / Log In", "Request a Demo"],
        "toneNote": "Non-stigmatizing. Use person-first, recovery-affirming language throughout. Avoid clinical labels as headlines."
      },
      "crossLinks": [
        { "toId": "care-modalities", "context": "How Modern Health provides care for substance use concerns" },
        { "toId": "adaptive-care", "context": "Connecting to appropriate levels of care" },
        { "toId": "workforce-performance", "context": "Impact on workforce performance and productivity" },
        { "toId": "economic-roi", "context": "Economic impact of untreated substance use" },
        { "toId": "depression-anxiety", "context": "Related challenge — co-occurring depression and anxiety" },
        { "toId": "grief", "context": "Related challenge" },
        { "toId": "life-transitions", "context": "Related challenge" }
      ],
      "contentClusterCTAs": [
        { "toId": "care-every-challenge", "label": "Explore all supported challenges" },
        { "toId": "clinical-outcomes", "label": "Clinical outcomes for substance use support" }
      ]
    },
    {
      "id": "disordered-eating",
      "name": "Disordered Eating",
      "url": "/solutions/care-for-every-challenge/disordered-eating",
      "navTier": 4,
      "parent": "clinical-complex-needs",
      "pageContent": {
        "purpose": "Challenge page for disordered eating — addresses a critical, often overlooked clinical need with deep empathy and clear pathways to care.",
        "primaryAudiences": ["member", "hr-benefits-manager"],
        "keyContent": [
          "Hero — disordered eating support as a critical need, delivered with empathy not clinical distance",
          "What disordered eating can look like — restrictive eating, binge-purge cycles, compulsive eating",
          "Why it's often overlooked — clinical complexity, provider shortages, shame and secrecy",
          "How Modern Health supports employees experiencing disordered eating — link to Care Modalities",
          "Supporting early intervention and escalation when needed — link to Adaptive Care Model",
          "Impact on well-being and performance — connections to depression, chronic illness, life transitions",
          "Related challenges — Depression & Anxiety Support, Serious or Chronic Illness, Life Transitions",
          "CTA — dual track: member activation + employer demo"
        ],
        "conversionActions": ["Activate Benefit / Log In", "Request a Demo"],
        "toneNote": "Deeply empathetic. Avoid clinical detachment. Never diet-culture language. Never frame eating or weight as health goals."
      },
      "crossLinks": [
        { "toId": "care-modalities", "context": "How Modern Health supports disordered eating" },
        { "toId": "adaptive-care", "context": "Supporting early intervention and escalation when needed" },
        { "toId": "depression-anxiety", "context": "Related challenge — co-occurring depression and anxiety" },
        { "toId": "serious-chronic-illness", "context": "Related challenge — serious physical health impact" },
        { "toId": "life-transitions", "context": "Related challenge" }
      ],
      "contentClusterCTAs": [
        { "toId": "care-every-challenge", "label": "Explore all supported challenges" },
        { "toId": "clinical-outcomes", "label": "Clinical outcomes for disordered eating support" }
      ]
    },
    {
      "id": "depression-anxiety",
      "name": "Depression & Anxiety Support",
      "url": "/solutions/care-for-every-challenge/depression-anxiety",
      "navTier": 4,
      "parent": "clinical-complex-needs",
      "pageContent": {
        "purpose": "Challenge page for depression and anxiety — the highest-volume clinical need on the platform; normalizes the experience and demonstrates the breadth of Modern Health's clinical support.",
        "primaryAudiences": ["member", "hr-benefits-manager"],
        "keyContent": [
          "Hero — depression and anxiety as the most common mental health challenges at work",
          "How these challenges show up at work — concentration, relationships, absenteeism, productivity loss",
          "Why support is often inconsistent — EAP wait times, provider shortages, fragmented care",
          "How Modern Health supports employees with depression and anxiety — link to Care Modalities",
          "Supporting employees across levels of need — link to Adaptive Care Model",
          "Impact on workforce outcomes — links to Workforce Performance, Employee Retention",
          "Related challenges — Burnout & Workplace Stress, Financial Stress & Well-being",
          "CTA — dual track: member activation + employer demo"
        ],
        "conversionActions": ["Activate Benefit / Log In", "Request a Demo"],
        "toneNote": "Warm and validating. Normalize the experience. Avoid clinical language in headlines. Use everyday language, not diagnostic terms."
      },
      "crossLinks": [
        { "toId": "care-modalities", "context": "How Modern Health supports depression and anxiety" },
        { "toId": "adaptive-care", "context": "Supporting employees across levels of clinical need" },
        { "toId": "workforce-performance", "context": "Impact on workforce productivity and presenteeism" },
        { "toId": "employee-retention", "context": "Impact on retention and engagement" },
        { "toId": "burnout-workplace-stress", "context": "Related challenge — burnout as a gateway to depression" },
        { "toId": "financial-stress-wellbeing", "context": "Related challenge" }
      ],
      "contentClusterCTAs": [
        { "toId": "care-every-challenge", "label": "Explore all supported challenges" },
        { "toId": "clinical-outcomes", "label": "Clinical outcomes for depression and anxiety" }
      ]
    },
    {
      "id": "crisis-acute-mental-health",
      "name": "Crisis & Acute Mental Health Support",
      "url": "/solutions/care-for-every-challenge/crisis-acute-mental-health",
      "navTier": 4,
      "parent": "clinical-complex-needs",
      "pageContent": {
        "purpose": "Challenge page for acute crisis and high-acuity mental health situations — safety resources lead, followed by explanation of Modern Health's crisis response model and employer partnership.",
        "primaryAudiences": ["member", "hr-benefits-manager"],
        "keyContent": [
          "Hero — crisis resources above the fold, then context and support options below",
          "What crisis situations can include — suicidal ideation, acute psychiatric episodes, trauma response",
          "Why timely support is critical — delays in crisis response lead to worse outcomes",
          "How Modern Health responds to crisis — links to Care Modalities, Crisis Preparedness & Response",
          "Supporting stabilization and long-term recovery — link to Adaptive Care Model",
          "Impact on work stability and safety — workforce protection and employer liability reduction",
          "Related challenges — Grief, Depression & Anxiety Support, Workforce Performance",
          "CTA — links to Employers page, Request a Demo"
        ],
        "conversionActions": ["Activate Benefit / Log In", "Request a Demo"],
        "toneNote": "Immediate, clear, and safety-first. Lead with crisis resources and hotlines above any product content. Never gate safety information."
      },
      "crossLinks": [
        { "toId": "care-modalities", "context": "Crisis-level care types available through Modern Health" },
        { "toId": "crisis-preparedness", "context": "Organizational crisis preparedness and response support" },
        { "toId": "adaptive-care", "context": "Supporting stabilization and long-term recovery" },
        { "toId": "grief", "context": "Related challenge" },
        { "toId": "depression-anxiety", "context": "Related challenge — clinical conditions that can escalate to crisis" },
        { "toId": "workforce-performance", "context": "Related challenge — workforce stability after a crisis" }
      ],
      "contentClusterCTAs": [
        { "toId": "crisis-preparedness", "label": "Organizational crisis preparedness support" },
        { "toId": "employers", "label": "How employers partner with Modern Health for crisis response" }
      ]
    },

    // ─────────────────────────────────────────────
    // OUTCOMES
    // ─────────────────────────────────────────────
    {
      "id": "outcomes",
      "name": "Outcomes",
      "url": null,
      "navTier": 1,
      "parent": "home",
      "type": "nav-dropdown"
    },
    {
      "id": "case-studies",
      "name": "Case Studies Index",
      "url": "/outcomes/case-studies",
      "navTier": 2,
      "parent": "outcomes",
      "pageContent": {
        "purpose": "Enterprise proof index — named client case studies with measurable business outcomes for HR buyers and CFOs validating peer adoption.",
        "primaryAudiences": ["hr-benefits-manager", "finance-leader"],
        "keyContent": [
          "Named enterprise clients with company names visible (not anonymized)",
          "Quantified outcomes: retention, absenteeism, productivity, ROI",
          "Industry and company size filters",
          "Downloadable case study PDFs"
        ],
        "conversionActions": ["Request a Demo", "Download Case Study"],
        "toneNote": null
      },
      "crossLinks": [
        { "toId": "economic-roi", "context": "Model the broader financial ROI beyond individual case studies" }
      ],
      "contentClusterCTAs": [
        { "toId": "clinical-research", "label": "The clinical evidence behind these results" },
        { "toId": "gated-content", "label": "Business case and ROI resources" }
      ]
    },
    {
      "id": "case-study-detail",
      "name": "Case Study Detail Pages",
      "url": "/outcomes/case-studies/:slug",
      "navTier": 3,
      "parent": "case-studies",
      "pageContent": {
        "purpose": "Individual enterprise case study — specific client story with financial impact and business outcomes for CFO-level validation.",
        "primaryAudiences": ["hr-benefits-manager", "finance-leader"],
        "keyContent": [
          "Named client and company background",
          "Challenge and solution narrative",
          "Quantified business outcomes (financial and clinical impact)",
          "Quote from the HR or benefits decision maker"
        ],
        "conversionActions": ["Request a Demo"],
        "toneNote": null
      },
      "contentClusterCTAs": [
        { "toId": "clinical-research", "label": "Clinical evidence behind these results" },
        { "toId": "past-webinars", "label": "Hear directly from our clinical team" }
      ]
    },
    {
      "id": "economic-roi",
      "name": "Economic Value / ROI",
      "url": "/outcomes/economic-value",
      "navTier": 2,
      "parent": "outcomes",
      "pageContent": {
        "purpose": "Financial ROI page for CFOs and HR buyers — ROI calculator, cost benchmarks, and financial impact data, ungated and without a demo-request wall.",
        "primaryAudiences": ["finance-leader", "hr-benefits-manager"],
        "keyContent": [
          "ROI calculator or benchmark comparison tool",
          "Cost vs. legacy EAP spend comparison",
          "Productivity and absenteeism financial impact data",
          "Total cost of untreated mental health at work"
        ],
        "conversionActions": ["Request a Demo"],
        "toneNote": "Data-first. No wellness language. Respect the financial expertise and analytical mindset of this audience."
      },
      "crossLinks": [
        { "toId": "case-studies", "context": "See how real companies measured their return" },
        { "toId": "clinical-outcomes", "context": "See the clinical results that drive the financial impact" }
      ],
      "contentClusterCTAs": [
        { "toId": "case-studies", "label": "See how peer companies measured their return" },
        { "toId": "gated-content", "label": "Business case resources and toolkits" }
      ]
    },
    {
      "id": "clinical-outcomes",
      "name": "Clinical Outcomes",
      "url": "/outcomes/clinical",
      "navTier": 2,
      "parent": "outcomes",
      "pageContent": {
        "purpose": "Clinical evidence hub — peer-reviewed results across outcome areas, published studies, and third-party validation for evaluators assessing clinical credibility.",
        "primaryAudiences": ["benefits-consultant", "hr-benefits-manager", "provider"],
        "keyContent": [
          "Sleep outcomes data",
          "Co-occurring conditions outcomes",
          "Loneliness and social connection outcomes",
          "Physical activity outcomes",
          "Coaching effectiveness outcomes",
          "Global outcomes data and engagement metrics",
          "Downloadable clinical outcomes report"
        ],
        "conversionActions": ["Download Clinical Outcomes Report", "Connect with Consultant Relations"],
        "toneNote": null
      },
      "crossLinks": [
        { "toId": "economic-roi", "context": "Translate clinical results into financial impact for the business case" },
        { "toId": "provider-opportunities", "context": "Join the network delivering these clinical outcomes" },
        { "toId": "adaptive-care", "context": "Understand the care model behind the results" }
      ],
      "contentClusterCTAs": [
        { "toId": "clinical-research", "label": "Published research behind these outcomes" },
        { "toId": "past-webinars", "label": "Clinical outcomes webinars" }
      ]
    },
    {
      "id": "clinical-research",
      "name": "Clinical Research Index",
      "url": "/outcomes/clinical/research",
      "navTier": 3,
      "parent": "clinical-outcomes",
      "pageContent": {
        "purpose": "Index of published research studies — academic credibility layer for providers and brokers requiring peer-reviewed evidence.",
        "primaryAudiences": ["benefits-consultant", "provider"],
        "keyContent": [
          "List of published studies with citations and abstracts",
          "Research methodology and sample size summaries",
          "Filter by condition, topic, or intervention type"
        ],
        "conversionActions": ["Download Research Report"],
        "toneNote": null
      },
      "contentClusterCTAs": [
        { "toId": "case-studies", "label": "See research outcomes in enterprise practice" },
        { "toId": "past-webinars", "label": "Research and clinical discussion webinars" }
      ]
    },
    {
      "id": "clinical-research-dp",
      "name": "Clinical Research Detail Pages",
      "url": "/outcomes/clinical/research/:slug",
      "navTier": 4,
      "parent": "clinical-research",
      "pageContent": {
        "purpose": "Individual research study page — full details of a specific published study for clinical evaluators.",
        "primaryAudiences": ["provider", "benefits-consultant"],
        "keyContent": [
          "Study methodology and sample size",
          "Key findings with statistical significance",
          "Clinical implications and practice relevance",
          "Link to full published paper"
        ],
        "conversionActions": [],
        "toneNote": null
      },
      "contentClusterCTAs": [
        { "toId": "case-studies", "label": "Enterprise outcomes that apply this research" },
        { "toId": "past-webinars", "label": "Research and clinical webinars" }
      ]
    },

    // ─────────────────────────────────────────────
    // INSIGHTS
    // ─────────────────────────────────────────────
    {
      "id": "insights",
      "name": "Insights",
      "url": null,
      "navTier": 1,
      "parent": "home",
      "type": "nav-dropdown"
    },
    {
      "id": "events",
      "name": "Events Index",
      "url": "/insights/events",
      "navTier": 2,
      "parent": "insights",
      "pageContent": {
        "purpose": "Events and conference calendar — engagement touchpoint for brokers and HR buyers discovering Modern Health at industry events.",
        "primaryAudiences": ["benefits-consultant", "hr-benefits-manager"],
        "keyContent": [
          "Upcoming live events and conference appearances",
          "Speaking engagements",
          "Event registration CTAs"
        ],
        "conversionActions": ["Register for Event", "Request a Demo"],
        "toneNote": null
      },
      "contentClusterCTAs": [
        { "toId": "past-webinars", "label": "Can't make it? Watch on-demand" },
        { "toId": "case-studies", "label": "Resources to share after the event" }
      ]
    },
    {
      "id": "events-detail",
      "name": "Events Detail Pages",
      "url": "/insights/events/:slug",
      "navTier": 3,
      "parent": "events",
      "pageContent": {
        "purpose": "Individual event or conference landing page — specific event details, speakers, and registration.",
        "primaryAudiences": ["benefits-consultant", "hr-benefits-manager"],
        "keyContent": [
          "Event description and agenda",
          "Speaker bios and credentials",
          "Registration CTA",
          "Related resources and follow-up content"
        ],
        "conversionActions": ["Register for Event"],
        "toneNote": null
      },
      "contentClusterCTAs": [
        { "toId": "past-webinars", "label": "More on-demand sessions" },
        { "toId": "clinical-research", "label": "Supporting research and evidence" }
      ]
    },
    {
      "id": "past-webinars",
      "name": "Past Webinars Index",
      "url": "/insights/past-webinars",
      "navTier": 2,
      "parent": "insights",
      "pageContent": {
        "purpose": "On-demand webinar library — educational content for brokers and HR buyers exploring Modern Health's clinical model and market evidence.",
        "primaryAudiences": ["benefits-consultant", "hr-benefits-manager"],
        "keyContent": [
          "On-demand webinar recordings",
          "Topic filters: clinical outcomes, EAP differentiation, implementation, workforce trends",
          "Watch CTAs"
        ],
        "conversionActions": ["Watch On-Demand"],
        "toneNote": null
      },
      "contentClusterCTAs": [
        { "toId": "case-studies", "label": "Client proof and outcomes" },
        { "toId": "clinical-research", "label": "Research referenced in our sessions" }
      ]
    },
    {
      "id": "past-webinars-dp",
      "name": "Past Webinars Detail Pages",
      "url": "/insights/past-webinars/:slug",
      "navTier": 3,
      "parent": "past-webinars",
      "pageContent": {
        "purpose": "Individual on-demand webinar page — recording, description, speakers, and related resources.",
        "primaryAudiences": ["benefits-consultant", "hr-benefits-manager"],
        "keyContent": [
          "Webinar recording embed",
          "Speaker bios and credentials",
          "Key takeaways and related content"
        ],
        "conversionActions": ["Watch Recording", "Request a Demo"],
        "toneNote": null
      },
      "contentClusterCTAs": [
        { "toId": "case-studies", "label": "Client outcomes referenced in this session" },
        { "toId": "clinical-research", "label": "Research behind the discussion" }
      ]
    },
    {
      "id": "blog",
      "name": "Blog Index",
      "url": "/insights/blog",
      "navTier": 2,
      "parent": "insights",
      "pageContent": {
        "purpose": "Thought leadership editorial hub — content for SEO and brand awareness primarily serving awareness-stage visitors.",
        "primaryAudiences": ["hr-benefits-manager", "benefits-consultant"],
        "keyContent": [
          "Recent blog posts with category filters",
          "Featured articles on workplace wellbeing and mental health trends",
          "Author profiles"
        ],
        "conversionActions": [],
        "toneNote": null
      },
      "contentClusterCTAs": [
        { "toId": "case-studies", "label": "Client outcomes and proof points" },
        { "toId": "past-webinars", "label": "On-demand educational sessions" }
      ]
    },
    {
      "id": "blog-pages",
      "name": "Blog Detail Pages",
      "url": "/insights/blog/:slug",
      "navTier": 3,
      "parent": "blog",
      "pageContent": {
        "purpose": "Individual blog articles — deep editorial content on mental health, workplace wellbeing, and benefits strategy.",
        "primaryAudiences": ["hr-benefits-manager", "benefits-consultant"],
        "keyContent": [
          "Article content with expert perspective",
          "Author bio and credentials",
          "Related articles and resources",
          "CTA linking to relevant product or resource page"
        ],
        "conversionActions": ["Request a Demo", "Explore Resources"],
        "toneNote": null
      },
      "contentClusterCTAs": [
        { "toId": "case-studies", "label": "See client outcomes" },
        { "toId": "past-webinars", "label": "Related educational sessions" }
      ]
    },
    {
      "id": "gated-content",
      "name": "Gated Content Index",
      "url": "/insights/gated-content",
      "navTier": 2,
      "parent": "insights",
      "pageContent": {
        "purpose": "Pending content map review — downloadable gated resources hub including guides, toolkits, reports, and case studies for brokers and HR buyers.",
        "primaryAudiences": ["benefits-consultant", "hr-benefits-manager"],
        "keyContent": [
          "Downloadable guides and toolkits",
          "Reports and whitepapers",
          "Filtered by audience and topic"
        ],
        "conversionActions": ["Download Resource"],
        "toneNote": null
      },
      "contentClusterCTAs": [
        { "toId": "case-studies", "label": "Client proof and outcomes" },
        { "toId": "past-webinars", "label": "On-demand sessions" }
      ]
    },
    {
      "id": "gated-content-dp",
      "name": "Gated Content Detail Pages",
      "url": "/insights/gated-content/:slug",
      "navTier": 3,
      "parent": "gated-content",
      "pageContent": {
        "purpose": "Pending content map review — individual gated resource page with download form and related content.",
        "primaryAudiences": ["benefits-consultant", "hr-benefits-manager"],
        "keyContent": [
          "Resource description and preview",
          "Gated download form",
          "Related resources"
        ],
        "conversionActions": ["Download Resource"],
        "toneNote": null
      },
      "contentClusterCTAs": [
        { "toId": "case-studies", "label": "Client outcomes" },
        { "toId": "past-webinars", "label": "Related sessions" }
      ]
    },

    // ─────────────────────────────────────────────
    // COMPANY
    // ─────────────────────────────────────────────
    {
      "id": "company",
      "name": "Company",
      "url": null,
      "navTier": 1,
      "parent": "home",
      "type": "nav-dropdown"
    },
    {
      "id": "about-us",
      "name": "About Us",
      "url": "/company/about",
      "navTier": 2,
      "parent": "company",
      "pageContent": {
        "purpose": "Brand story and company values — provides context for vendor evaluation; relevant for HR buyers and benefits managers assessing culture fit.",
        "primaryAudiences": ["hr-benefits-manager", "total-rewards-professional"],
        "keyContent": [
          "Company mission and founding story",
          "Leadership team and clinical advisory board",
          "Company values and culture overview"
        ],
        "conversionActions": [],
        "toneNote": null
      },
      "contentClusterCTAs": [
        { "toId": "case-studies", "label": "Client outcomes and trust signals" },
        { "toId": "clinical-research", "label": "Our clinical credibility and published research" }
      ]
    },
    {
      "id": "press",
      "name": "Press",
      "url": "/company/press",
      "navTier": 2,
      "parent": "company",
      "pageContent": {
        "purpose": "Third-party media credibility — press coverage and awards that validate Modern Health's market position and enterprise legitimacy.",
        "primaryAudiences": ["hr-benefits-manager", "finance-leader"],
        "keyContent": [
          "Press coverage from major outlets (WSJ, Forbes, etc.)",
          "Industry awards and analyst recognition",
          "PR contact for media inquiries"
        ],
        "conversionActions": [],
        "toneNote": null
      },
      "contentClusterCTAs": [
        { "toId": "case-studies", "label": "Client outcomes beyond press coverage" },
        { "toId": "clinical-research", "label": "Published clinical research" }
      ]
    },
    {
      "id": "work-with-us",
      "name": "Work with Us",
      "url": "/company/careers",
      "navTier": 2,
      "parent": "company",
      "pageContent": {
        "purpose": "Careers hub and provider network entry point — serves job seekers and clinicians evaluating the provider network.",
        "primaryAudiences": ["provider"],
        "keyContent": [
          "Open job positions",
          "Provider network inquiry pathway",
          "Company culture and benefits for candidates"
        ],
        "conversionActions": ["Submit Provider Inquiry", "Apply for Job"],
        "toneNote": null
      },
      "contentClusterCTAs": [
        { "toId": "clinical-research", "label": "Our clinical model and research base" },
        { "toId": "past-webinars", "label": "Learn about our care approach" }
      ]
    },
    {
      "id": "job-posting",
      "name": "Job Posting",
      "url": "/company/careers/jobs/:id",
      "navTier": 3,
      "parent": "work-with-us",
      "pageContent": {
        "purpose": "Individual job listing — specific role description and requirements for job applicants.",
        "primaryAudiences": [],
        "keyContent": [
          "Role description and responsibilities",
          "Requirements and qualifications",
          "Application CTA"
        ],
        "conversionActions": ["Apply Now"],
        "toneNote": null
      },
      "contentClusterCTAs": [
        { "toId": "blog", "label": "Life at Modern Health" },
        { "toId": "clinical-research", "label": "Our clinical mission and evidence" }
      ]
    },
    {
      "id": "provider-opportunities",
      "name": "Provider Opportunities",
      "url": "/company/careers/providers",
      "navTier": 3,
      "parent": "work-with-us",
      "pageContent": {
        "purpose": "Apply to join the Modern Health provider network — entry point for clinicians evaluating the network and its clinical model.",
        "primaryAudiences": ["provider"],
        "keyContent": [
          "Provider network overview and value proposition",
          "Application or inquiry form",
          "What to expect after applying",
          "Clinical model and values alignment information"
        ],
        "conversionActions": ["Submit Provider Inquiry"],
        "toneNote": null
      },
      "crossLinks": [
        { "toId": "adaptive-care", "context": "Understand the clinical model you would be delivering" },
        { "toId": "provider-network", "context": "See the global network you would be joining" }
      ],
      "contentClusterCTAs": [
        { "toId": "clinical-research", "label": "The clinical model you would be delivering" },
        { "toId": "past-webinars", "label": "Learn about our care approach" }
      ]
    }

  ]
};
