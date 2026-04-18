// Phase 3: Sitemap — loaded from Figma (Modern-Health_IA_Project, node 1:2)
// Source: https://www.figma.com/design/ny1NTdldHNxwV8HEqlFAvo/Modern-Health_IA_Project?node-id=1-2
// Extracted via Figma MCP on 2026-04-16
// pageContent added 2026-04-16 — derived from JTBD navImplications and user story analysis
// Updated 2026-04-16 — reconciled against updated Figma IA + Content Map PDF
// Updated 2026-04-18 — contentClusterCTAs added (above-footer content cluster CTA pairs per page)
window.SITEMAP = {
  "status": "loaded",
  "source": "Figma — Modern-Health_IA_Project (node 1:2)",
  "pages": [
    {
      "id": "home",
      "name": "Home",
      "url": "/",
      "navTier": 0,
      "parent": null,
      "pageContent": {
        "purpose": "Routing layer for all 7 personas — reads the visitor and directs them to the highest-value page for their context, not a brand statement.",
        "primaryAudiences": [
          "hr-buyer",
          "benefits-manager",
          "broker",
          "member",
          "provider",
          "partner",
          "cfo"
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
        {
          "toId": "nav-demo-request",
          "context": "Primary above-fold CTA"
        },
        {
          "toId": "nav-member-login",
          "context": "Secondary action for returning members"
        },
        {
          "toId": "employers",
          "context": "Employer / HR buyer routing path"
        },
        {
          "toId": "members",
          "context": "Member / employee routing path"
        }
      ],
      "contentClusterCTAs": [
        {
          "toId": "case-studies",
          "label": "See client outcomes"
        },
        {
          "toId": "care-every-challenge",
          "label": "Explore care for every challenge"
        }
      ]
    },
    {
      "id": "who-we-serve",
      "name": "Who We Serve",
      "url": null,
      "navTier": 1,
      "parent": "home",
      "type": "nav-dropdown"
    },
    {
      "id": "our-approach",
      "name": "Our Approach",
      "url": null,
      "navTier": 1,
      "parent": "home",
      "type": "nav-dropdown"
    },
    {
      "id": "outcomes",
      "name": "Outcomes",
      "url": null,
      "navTier": 1,
      "parent": "home",
      "type": "nav-dropdown"
    },
    {
      "id": "insights",
      "name": "Insights",
      "url": null,
      "navTier": 1,
      "parent": "home",
      "type": "nav-dropdown"
    },
    {
      "id": "company",
      "name": "Company",
      "url": null,
      "navTier": 1,
      "parent": "home",
      "type": "nav-dropdown"
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
        "primaryAudiences": [
          "hr-buyer",
          "cfo",
          "benefits-manager"
        ],
        "keyContent": [
          "Demo request form",
          "Calendar or scheduling integration"
        ],
        "conversionActions": [
          "Submit Demo Request"
        ],
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
        "primaryAudiences": [
          "member"
        ],
        "keyContent": [
          "Login form or redirect to product app",
          "Forgot password / account recovery"
        ],
        "conversionActions": [
          "Log In"
        ],
        "toneNote": "Keep it frictionless. One click should get a member to their session."
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
        "primaryAudiences": [
          "provider"
        ],
        "keyContent": [
          "Provider portal login",
          "Account recovery"
        ],
        "conversionActions": [
          "Log In"
        ],
        "toneNote": null
      }
    },
    {
      "id": "nav-admin-login",
      "name": "Admin Login",
      "url": "/login/admin",
      "navTier": 1,
      "parent": "home",
      "type": "nav-cta",
      "pageContent": {
        "purpose": "Admin and employer portal access — for HR and benefits admins managing their organization's Modern Health account.",
        "primaryAudiences": [
          "benefits-manager",
          "hr-buyer"
        ],
        "keyContent": [
          "Admin portal login",
          "Account recovery"
        ],
        "conversionActions": [
          "Log In"
        ],
        "toneNote": null
      }
    },
    {
      "id": "footer-contact",
      "name": "Contact Us",
      "url": "/contact",
      "navTier": 1,
      "parent": "home",
      "type": "footer-cta",
      "pageContent": {
        "purpose": "Universal low-friction contact touchpoint that surfaces above the footer on every page — catches visitors who are not ready to request a demo but want to start a conversation, ask a question, or reach the right team.",
        "primaryAudiences": [
          "hr-buyer",
          "benefits-manager",
          "broker",
          "partner",
          "provider",
          "cfo"
        ],
        "keyContent": [
          "General inquiry form",
          "Routing options for different contact types (sales, support, partnerships, media)",
          "Response time expectation"
        ],
        "conversionActions": [
          "Submit Inquiry"
        ],
        "toneNote": "Warm and low-pressure. This is the soft conversion for visitors who are not yet demo-ready — do not let it feel like a sales trap."
      }
    },
    {
      "id": "employers",
      "name": "Employers",
      "url": "/who-we-serve/employers",
      "navTier": 2,
      "parent": "who-we-serve",
      "pageContent": {
        "purpose": "Primary landing page for HR buyers and benefits managers — validates enterprise fit and drives demo requests.",
        "primaryAudiences": [
          "hr-buyer",
          "benefits-manager"
        ],
        "keyContent": [
          "Enterprise outcomes and ROI summary",
          "Implementation support overview",
          "Client logos and case study links",
          "EAP differentiation messaging"
        ],
        "conversionActions": [
          "Request a Demo"
        ],
        "toneNote": null
      },
      "crossLinks": [
        {
          "toId": "mh-by-your-side",
          "context": "How we support your team through launch and beyond"
        },
        {
          "toId": "adaptive-care",
          "context": "How our clinical model differs from a legacy EAP"
        },
        {
          "toId": "case-studies",
          "context": "See how companies like yours have seen results"
        },
        {
          "toId": "res-mh-workplace",
          "context": "Employee communication toolkits for your rollout"
        }
      ],
      "contentClusterCTAs": [
        {
          "toId": "case-studies",
          "label": "See how companies like yours measure up"
        },
        {
          "toId": "res-mh-workplace",
          "label": "Employee communication and launch toolkits"
        }
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
        "primaryAudiences": [
          "broker"
        ],
        "keyContent": [
          "EAP vs. Modern Health differentiation evidence",
          "Clinical outcomes data and third-party validation",
          "Shareable client materials and downloadable resources",
          "Consultant relations contact CTA (not a generic demo request)"
        ],
        "conversionActions": [
          "Connect with Consultant Relations",
          "Download Case Study"
        ],
        "toneNote": null
      },
      "crossLinks": [
        {
          "toId": "adaptive-care",
          "context": "Clinical differentiation evidence for client conversations"
        },
        {
          "toId": "clinical-outcomes",
          "context": "Outcomes data and third-party validation to share with clients"
        },
        {
          "toId": "res-case-study",
          "context": "Shareable case study PDFs for employer prospects"
        },
        {
          "toId": "economic-roi",
          "context": "ROI benchmarks to support the business case"
        }
      ],
      "contentClusterCTAs": [
        {
          "toId": "case-studies",
          "label": "Shareable client case studies for your prospects"
        },
        {
          "toId": "clinical-research",
          "label": "Peer-reviewed clinical evidence"
        }
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
        "primaryAudiences": [
          "partner"
        ],
        "keyContent": [
          "Global care network summary and coverage map",
          "Integration and API capabilities overview",
          "Partnership and co-branding models",
          "Business development contact CTA"
        ],
        "conversionActions": [
          "Connect with Partnerships Team"
        ],
        "toneNote": null
      },
      "crossLinks": [
        {
          "toId": "global-care-network",
          "context": "Full global coverage scope and quality standards"
        },
        {
          "toId": "channel-partners",
          "context": "Explore co-sell and channel partnership models"
        },
        {
          "toId": "clinical-outcomes",
          "context": "Clinical quality evidence for partner due diligence"
        }
      ],
      "contentClusterCTAs": [
        {
          "toId": "clinical-research",
          "label": "Clinical quality evidence for partner due diligence"
        },
        {
          "toId": "case-studies",
          "label": "Enterprise client outcomes at scale"
        }
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
        "primaryAudiences": [
          "partner",
          "broker"
        ],
        "keyContent": [
          "Channel and co-sell partnership models",
          "Partner program benefits",
          "Partner contact CTA distinct from employer demo"
        ],
        "conversionActions": [
          "Connect with Partnerships Team"
        ],
        "toneNote": null
      },
      "contentClusterCTAs": [
        {
          "toId": "case-studies",
          "label": "Client outcomes to share with partners"
        },
        {
          "toId": "webinars",
          "label": "Educational content for your clients"
        }
      ]
    },
    {
      "id": "members",
      "name": "Members",
      "url": "/who-we-serve/members",
      "navTier": 3,
      "parent": "employers",
      "pageContent": {
        "purpose": "Warm entry point for employees — explains care options without clinical jargon, reduces stigma, and drives benefit activation or login.",
        "primaryAudiences": [
          "member"
        ],
        "keyContent": [
          "Overview of care types in plain, approachable language",
          "Prominent login / benefit activation CTA",
          "Privacy and confidentiality assurance",
          "What to expect from the first experience"
        ],
        "conversionActions": [
          "Activate Benefit / Log In"
        ],
        "toneNote": "Warm, human, stigma-free. Avoid clinical or corporate language. Lead with empathy, not features or product specs."
      },
      "crossLinks": [
        {
          "toId": "care-modalities",
          "context": "Explore all the care types available to you"
        },
        {
          "toId": "care-every-challenge",
          "context": "Find support for your specific situation"
        },
        {
          "toId": "nav-member-login",
          "context": "Already have an account? Log in here"
        }
      ],
      "contentClusterCTAs": [
        {
          "toId": "care-every-challenge",
          "label": "Find support for your situation"
        },
        {
          "toId": "blog",
          "label": "Stories and perspectives"
        }
      ]
    },
    {
      "id": "sustainable-pricing",
      "name": "Sustainable Pricing",
      "url": "/our-approach/sustainable-pricing",
      "navTier": 2,
      "parent": "our-approach",
      "pageContent": {
        "purpose": "Transparent pricing approach for buyers — similar to the economic value page but focused on pricing model and structure rather than ROI metrics; no sales gate required.",
        "primaryAudiences": [
          "cfo",
          "hr-buyer"
        ],
        "keyContent": [
          "Pricing model and cost structure explained clearly",
          "How Modern Health prices vs. legacy per-session or per-employee EAP models",
          "Cost predictability and scalability for enterprise buyers",
          "No demo-request gate — pricing accessible without a sales conversation"
        ],
        "conversionActions": [],
        "toneNote": "Data-driven and direct. Respect financial intelligence — no wellness language or vague claims. Focus on pricing approach and model clarity, not ROI value."
      },
      "crossLinks": [
        {
          "toId": "economic-roi",
          "context": "Model the full financial ROI case alongside pricing"
        }
      ],
      "contentClusterCTAs": [
        {
          "toId": "case-studies",
          "label": "See what peer companies invested and gained"
        },
        {
          "toId": "res-mh-workplace",
          "label": "Business case and communication resources"
        }
      ]
    },
    {
      "id": "global-care-network",
      "name": "Global Care Network",
      "url": "/our-approach/global-care-network",
      "navTier": 2,
      "parent": "our-approach",
      "pageContent": {
        "purpose": "Demonstrates Modern Health's global clinical footprint and quality standards for enterprise and partner evaluators.",
        "primaryAudiences": [
          "partner",
          "hr-buyer",
          "provider"
        ],
        "keyContent": [
          "Coverage map and country/region availability",
          "Clinical quality standards and credentialing process",
          "Network size and provider type breakdown",
          "Global compliance and privacy certifications"
        ],
        "conversionActions": [],
        "toneNote": null
      },
      "crossLinks": [
        {
          "toId": "adaptive-care",
          "context": "Understand the clinical model this network delivers"
        },
        {
          "toId": "provider-inquiry",
          "context": "Join our global provider network"
        },
        {
          "toId": "health-plans",
          "context": "Enterprise and health plan partnership overview"
        }
      ],
      "contentClusterCTAs": [
        {
          "toId": "clinical-research",
          "label": "Published evidence behind our network quality"
        },
        {
          "toId": "webinars",
          "label": "Learn more about our care model"
        }
      ]
    },
    {
      "id": "global-capabilities",
      "name": "Global Capabilities",
      "url": "/our-approach/global-capabilities",
      "navTier": 2,
      "parent": "our-approach",
      "pageContent": {
        "purpose": "Details international deployment capabilities for HR buyers with distributed workforces and partner evaluators assessing global scale.",
        "primaryAudiences": [
          "hr-buyer",
          "partner"
        ],
        "keyContent": [
          "Multi-region deployment support",
          "Language and localization capabilities",
          "Regional compliance (GDPR, HIPAA equivalents)",
          "Named global enterprise client examples"
        ],
        "conversionActions": [
          "Request a Demo"
        ],
        "toneNote": null
      },
      "contentClusterCTAs": [
        {
          "toId": "case-studies",
          "label": "How global enterprises use Modern Health"
        },
        {
          "toId": "clinical-research",
          "label": "Global outcomes data"
        }
      ]
    },
    {
      "id": "mh-by-your-side",
      "name": "Modern Health by Your Side",
      "url": "/our-approach/modern-health-by-your-side",
      "navTier": 2,
      "parent": "our-approach",
      "pageContent": {
        "purpose": "Client success management approach — content drawn from current workplace tools page, highlighting dedicated partnership throughout implementation and beyond.",
        "primaryAudiences": [
          "benefits-manager"
        ],
        "keyContent": [
          "Dedicated client success management model",
          "Onboarding and launch timeline",
          "Workplace tools and launch resources for HR teams",
          "Ongoing utilization and adoption support",
          "Success metrics and engagement tracking tools"
        ],
        "conversionActions": [
          "Request Implementation Consultation"
        ],
        "toneNote": null
      },
      "crossLinks": [
        {
          "toId": "res-mh-workplace",
          "context": "Download employee communication and launch toolkits"
        },
        {
          "toId": "employers",
          "context": "Back to the full employer overview"
        }
      ],
      "contentClusterCTAs": [
        {
          "toId": "res-mh-workplace",
          "label": "Download launch and communication toolkits"
        },
        {
          "toId": "webinars",
          "label": "Implementation and adoption webinars"
        }
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
        "primaryAudiences": [
          "hr-buyer",
          "broker",
          "benefits-manager"
        ],
        "keyContent": [
          "20-60-20 model overview (20% clinical care, 60% coaching/self-guided, 20% community)",
          "Evidence-based adaptive care pathway explanation",
          "Differentiation from EAP on clinical depth and utilization",
          "Care pathway overview: therapy, coaching, self-guided, Circles, Pathways"
        ],
        "conversionActions": [
          "Request a Demo",
          "Download Clinical Overview"
        ],
        "toneNote": null
      },
      "crossLinks": [
        {
          "toId": "clinical-outcomes",
          "context": "See the outcomes evidence behind this model"
        },
        {
          "toId": "care-every-challenge",
          "context": "Browse the full breadth of supported challenges"
        },
        {
          "toId": "global-care-network",
          "context": "Meet the provider network delivering this care"
        },
        {
          "toId": "provider-inquiry",
          "context": "Clinicians: interested in joining our network?"
        }
      ],
      "contentClusterCTAs": [
        {
          "toId": "clinical-research",
          "label": "Published research behind our clinical model"
        },
        {
          "toId": "case-studies",
          "label": "See these outcomes in enterprise practice"
        }
      ]
    },
    {
      "id": "care-every-challenge",
      "name": "Care for Every Challenge",
      "url": "/our-approach/care-for-every-challenge",
      "navTier": 3,
      "parent": "adaptive-care",
      "pageContent": {
        "purpose": "Care category index — shows members and HR buyers the full breadth of support topics available on the platform.",
        "primaryAudiences": [
          "member",
          "hr-buyer"
        ],
        "keyContent": [
          "Care categories: stress, relationships, family, substance use, work pressure, grief, etc.",
          "Brief description of support available per topic",
          "Links to specific care challenge detail pages"
        ],
        "conversionActions": [
          "Activate Benefit / Log In",
          "Request a Demo"
        ],
        "toneNote": "Warm and approachable. Emphasize that help exists for a wide range of human experiences — not just clinical diagnoses."
      },
      "crossLinks": [
        {
          "toId": "care-modalities",
          "context": "Learn how care is delivered for each of these challenges"
        },
        {
          "toId": "members",
          "context": "Get started — activate your benefit"
        }
      ],
      "contentClusterCTAs": [
        {
          "toId": "blog",
          "label": "Workplace mental health perspectives"
        },
        {
          "toId": "webinars",
          "label": "Live and on-demand support sessions"
        }
      ]
    },
    {
      "id": "care-every-challenge-dp",
      "name": "Care for Every Challenge Detail Pages",
      "url": "/our-approach/care-for-every-challenge/:slug",
      "navTier": 4,
      "parent": "care-every-challenge",
      "pageContent": {
        "purpose": "Individual challenge detail — deep, empathetic content validating that Modern Health specifically addresses that challenge.",
        "primaryAudiences": [
          "member"
        ],
        "keyContent": [
          "Challenge description in accessible language",
          "Types of care available for this specific challenge",
          "Relevant member stories or testimonials",
          "CTA to activate benefit or find a provider",
          "Named topic areas: Substance Use Disorder (SUD), Neurodivergence, Caregivers"
        ],
        "conversionActions": [
          "Activate Benefit / Log In"
        ],
        "toneNote": "Highly empathetic and first-person. Never clinical or diagnostic. Validates the human experience."
      },
      "contentClusterCTAs": [
        {
          "toId": "blog",
          "label": "More perspectives on this topic"
        },
        {
          "toId": "webinars",
          "label": "Live support and community sessions"
        }
      ]
    },
    {
      "id": "responsible-ai",
      "name": "Responsible AI",
      "url": "/our-approach/responsible-ai",
      "navTier": 3,
      "parent": "adaptive-care",
      "pageContent": {
        "purpose": "AI governance and clinical safety page — addresses privacy, accountability, and AI ethics concerns for enterprise buyers and partners.",
        "primaryAudiences": [
          "hr-buyer",
          "partner"
        ],
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
        {
          "toId": "clinical-research",
          "label": "Our clinical evidence and governance standards"
        },
        {
          "toId": "case-studies",
          "label": "How enterprise clients trust our platform"
        }
      ]
    },
    {
      "id": "care-modalities",
      "name": "Care Modalities",
      "url": "/our-approach/care-modalities",
      "navTier": 3,
      "parent": "adaptive-care",
      "pageContent": {
        "purpose": "Explains all care delivery formats in plain language — for members deciding how to engage and benefits managers explaining the benefit to employees.",
        "primaryAudiences": [
          "member",
          "benefits-manager"
        ],
        "keyContent": [
          "Therapy: licensed therapist video sessions",
          "Coaching: goal-oriented sessions with certified coaches",
          "Circles: facilitated peer support communities with certified facilitators",
          "Pathways: structured self-guided care journeys",
          "Self-serve digital resources: evidence-based tools and exercises"
        ],
        "conversionActions": [
          "Activate Benefit / Log In"
        ],
        "toneNote": "Jargon-free. Emphasize variety and accessibility — there is something for everyone regardless of need severity."
      },
      "contentClusterCTAs": [
        {
          "toId": "care-every-challenge",
          "label": "Find support for your specific challenge"
        },
        {
          "toId": "webinars",
          "label": "See care modalities in action"
        }
      ]
    },
    {
      "id": "pathways",
      "name": "Pathways",
      "url": "/our-approach/pathways",
      "navTier": 4,
      "parent": "care-modalities",
      "pageContent": {
        "purpose": "Structured care journey guide — helps members understand how to move from first contact to the right care type without feeling lost.",
        "primaryAudiences": [
          "member"
        ],
        "keyContent": [
          "Step-by-step onboarding pathway",
          "How the initial assessment and matching process works",
          "What to expect at each stage of care"
        ],
        "conversionActions": [
          "Activate Benefit / Log In"
        ],
        "toneNote": "Reassuring and clear. Reduce anxiety about the unknown first steps."
      },
      "contentClusterCTAs": [
        {
          "toId": "care-every-challenge",
          "label": "Browse all support topics"
        },
        {
          "toId": "blog",
          "label": "Member stories and resources"
        }
      ]
    },
    {
      "id": "circles-marketing",
      "name": "Circles (Marketing Page)",
      "url": "/circles",
      "navTier": 4,
      "parent": "care-modalities",
      "pageContent": {
        "purpose": "Marketing introduction to Circles — community-based group support sessions facilitated by certified coaches.",
        "primaryAudiences": [
          "member"
        ],
        "keyContent": [
          "What Circles are and how group sessions work",
          "Available circle topics (grief, stress, relationships, etc.)",
          "How to join or request a circle",
          "Peer connection and belonging benefits"
        ],
        "conversionActions": [
          "Activate Benefit / Log In"
        ],
        "toneNote": "Warm, peer-focused, community-oriented. Emphasize belonging, not clinical treatment."
      },
      "contentClusterCTAs": [
        {
          "toId": "care-every-challenge",
          "label": "Find support beyond community sessions"
        },
        {
          "toId": "blog",
          "label": "Stories about connection and community"
        }
      ]
    },
    {
      "id": "circles-product",
      "name": "Circles (Product Page)",
      "url": "/circles/product",
      "navTier": 5,
      "parent": "circles-marketing",
      "pageContent": {
        "purpose": "In-depth product walkthrough of the Circles feature for members ready to use the platform.",
        "primaryAudiences": [
          "member"
        ],
        "keyContent": [
          "Feature walkthrough and how-it-works steps",
          "How to find, join, and schedule circles",
          "Facilitator backgrounds and coaching credentials"
        ],
        "conversionActions": [
          "Activate Benefit / Log In"
        ],
        "toneNote": null
      },
      "contentClusterCTAs": [
        {
          "toId": "care-every-challenge",
          "label": "Explore other care options"
        },
        {
          "toId": "webinars",
          "label": "Join a live support session"
        }
      ]
    },
    {
      "id": "case-studies",
      "name": "Case Studies Index",
      "url": "/outcomes/case-studies",
      "navTier": 2,
      "parent": "outcomes",
      "pageContent": {
        "purpose": "Enterprise proof index — named client case studies with measurable business outcomes for HR buyers and CFOs validating peer adoption.",
        "primaryAudiences": [
          "hr-buyer",
          "cfo"
        ],
        "keyContent": [
          "Named enterprise clients with company names visible (not anonymized)",
          "Quantified outcomes: retention, absenteeism, productivity, ROI",
          "Industry and company size filters",
          "Downloadable case study PDFs"
        ],
        "conversionActions": [
          "Request a Demo",
          "Download Case Study"
        ],
        "toneNote": null
      },
      "crossLinks": [
        {
          "toId": "economic-roi",
          "context": "Model the broader financial ROI beyond individual case studies"
        },
        {
          "toId": "res-case-study",
          "context": "Download PDF versions to share with leadership"
        }
      ],
      "contentClusterCTAs": [
        {
          "toId": "clinical-research",
          "label": "The clinical evidence behind these results"
        },
        {
          "toId": "res-mh-workplace",
          "label": "Business case and ROI resources"
        }
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
        "primaryAudiences": [
          "hr-buyer",
          "cfo"
        ],
        "keyContent": [
          "Named client and company background",
          "Challenge and solution narrative",
          "Quantified business outcomes (financial and clinical impact)",
          "Quote from the HR or benefits decision maker"
        ],
        "conversionActions": [
          "Request a Demo"
        ],
        "toneNote": null
      },
      "contentClusterCTAs": [
        {
          "toId": "clinical-research",
          "label": "Clinical evidence behind these results"
        },
        {
          "toId": "webinars",
          "label": "Hear directly from our clinical team"
        }
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
        "primaryAudiences": [
          "cfo",
          "hr-buyer"
        ],
        "keyContent": [
          "ROI calculator or benchmark comparison tool",
          "Cost vs. legacy EAP spend comparison",
          "Productivity and absenteeism financial impact data",
          "Total cost of untreated mental health at work"
        ],
        "conversionActions": [
          "Request a Demo"
        ],
        "toneNote": "Data-first. No wellness language. Respect the financial expertise and analytical mindset of this audience."
      },
      "crossLinks": [
        {
          "toId": "sustainable-pricing",
          "context": "Understand the pricing model behind the ROI numbers"
        },
        {
          "toId": "case-studies",
          "context": "See how real companies measured their return"
        },
        {
          "toId": "clinical-outcomes",
          "context": "See the clinical results that drive the financial impact"
        }
      ],
      "contentClusterCTAs": [
        {
          "toId": "case-studies",
          "label": "See how peer companies measured their return"
        },
        {
          "toId": "res-mh-workplace",
          "label": "Business case resources and toolkits"
        }
      ]
    },
    {
      "id": "clinical-outcomes",
      "name": "Clinical Outcomes",
      "url": "/outcomes/clinical",
      "navTier": 2,
      "parent": "outcomes",
      "pageContent": {
        "purpose": "Clinical evidence hub — peer-reviewed results across 7 outcome areas, published studies, and third-party validation for evaluators assessing clinical credibility.",
        "primaryAudiences": [
          "broker",
          "hr-buyer",
          "provider"
        ],
        "keyContent": [
          "Sleep outcomes data",
          "Co-occurring conditions outcomes",
          "Loneliness and social connection outcomes",
          "Physical activity outcomes",
          "Coaching effectiveness outcomes",
          "Global outcomes data",
          "Global engagement metrics",
          "Downloadable clinical outcomes report"
        ],
        "conversionActions": [
          "Download Clinical Outcomes Report",
          "Connect with Consultant Relations"
        ],
        "toneNote": null
      },
      "crossLinks": [
        {
          "toId": "economic-roi",
          "context": "Translate clinical results into financial impact for the business case"
        },
        {
          "toId": "res-case-study",
          "context": "Download client case studies that quantify these outcomes"
        },
        {
          "toId": "provider-inquiry",
          "context": "Join the network delivering these clinical outcomes"
        },
        {
          "toId": "adaptive-care",
          "context": "Understand the care model behind the results"
        }
      ],
      "contentClusterCTAs": [
        {
          "toId": "clinical-research",
          "label": "Published research behind these outcomes"
        },
        {
          "toId": "webinars",
          "label": "Clinical outcomes webinars"
        }
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
        "primaryAudiences": [
          "broker",
          "provider"
        ],
        "keyContent": [
          "List of published studies with citations and abstracts",
          "Research methodology and sample size summaries",
          "Filter by condition, topic, or intervention type"
        ],
        "conversionActions": [
          "Download Research Report"
        ],
        "toneNote": null
      },
      "contentClusterCTAs": [
        {
          "toId": "case-studies",
          "label": "See research outcomes in enterprise practice"
        },
        {
          "toId": "webinars",
          "label": "Research and clinical discussion webinars"
        }
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
        "primaryAudiences": [
          "provider",
          "broker"
        ],
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
        {
          "toId": "case-studies",
          "label": "Enterprise outcomes that apply this research"
        },
        {
          "toId": "webinars",
          "label": "Research and clinical webinars"
        }
      ]
    },
    {
      "id": "events",
      "name": "Events",
      "url": "/insights/events",
      "navTier": 2,
      "parent": "insights",
      "pageContent": {
        "purpose": "Events and conference calendar — engagement touchpoint for brokers and HR buyers discovering Modern Health at industry events.",
        "primaryAudiences": [
          "broker",
          "hr-buyer"
        ],
        "keyContent": [
          "Upcoming webinars and live events",
          "Conference appearances and speaking engagements",
          "On-demand webinar recordings",
          "Event registration CTAs"
        ],
        "conversionActions": [
          "Register for Event",
          "Request a Demo"
        ],
        "toneNote": null
      },
      "contentClusterCTAs": [
        {
          "toId": "webinars",
          "label": "Can't make it? Watch on-demand"
        },
        {
          "toId": "case-studies",
          "label": "Resources to share after the event"
        }
      ]
    },
    {
      "id": "events-detail",
      "name": "Events Detail Pages",
      "url": "/insights/events/:slug",
      "navTier": 3,
      "parent": "events",
      "pageContent": {
        "purpose": "Individual event or webinar landing page — specific event details, speakers, and registration for brokers and HR buyers.",
        "primaryAudiences": [
          "broker",
          "hr-buyer"
        ],
        "keyContent": [
          "Event description and agenda",
          "Speaker bios and credentials",
          "Registration or watch-on-demand CTA",
          "Related resources and follow-up content"
        ],
        "conversionActions": [
          "Register for Event",
          "Watch Recording"
        ],
        "toneNote": null
      },
      "contentClusterCTAs": [
        {
          "toId": "webinars",
          "label": "More on-demand sessions"
        },
        {
          "toId": "clinical-research",
          "label": "Supporting research and evidence"
        }
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
        "primaryAudiences": [
          "hr-buyer",
          "broker"
        ],
        "keyContent": [
          "Recent blog posts with category filters",
          "Featured articles on workplace wellbeing and mental health trends",
          "Author profiles"
        ],
        "conversionActions": [],
        "toneNote": null
      },
      "contentClusterCTAs": [
        {
          "toId": "case-studies",
          "label": "Client outcomes and proof points"
        },
        {
          "toId": "webinars",
          "label": "On-demand educational sessions"
        }
      ]
    },
    {
      "id": "blog-pages",
      "name": "Blog Pages",
      "url": "/insights/blog/:slug",
      "navTier": 3,
      "parent": "blog",
      "pageContent": {
        "purpose": "Individual blog articles — deep editorial content on mental health, workplace wellbeing, and benefits strategy.",
        "primaryAudiences": [
          "hr-buyer",
          "broker"
        ],
        "keyContent": [
          "Article content with expert perspective",
          "Author bio and credentials",
          "Related articles and resources",
          "CTA linking to relevant product or resource page"
        ],
        "conversionActions": [
          "Request a Demo",
          "Explore Resources"
        ],
        "toneNote": null
      },
      "contentClusterCTAs": [
        {
          "toId": "case-studies",
          "label": "See client outcomes"
        },
        {
          "toId": "webinars",
          "label": "Related educational sessions"
        }
      ]
    },
    {
      "id": "resources",
      "name": "Resources",
      "url": "/insights/resources",
      "navTier": 2,
      "parent": "insights",
      "pageContent": {
        "purpose": "Content hub aggregating all resource clusters — each cluster is surfaced with a link to its index page plus the 3 most recent items. Covers clinical research, care content, workplace tools, case studies, blog, and webinars.",
        "primaryAudiences": [
          "broker",
          "benefits-manager"
        ],
        "keyContent": [
          "Clinical Research — index link + 3 most recent",
          "Care for Every Challenge — index link + 3 most recent",
          "Mental Health in the Workplace — index link + 3 most recent",
          "Case Studies — index link + 3 most recent",
          "Blog — index link + 3 most recent articles",
          "Webinars — index link + 3 most recent"
        ],
        "conversionActions": [
          "Download Report",
          "Download Case Study",
          "Watch Webinar"
        ],
        "toneNote": null
      },
      "crossLinks": [
        {
          "toId": "res-mh-workplace",
          "context": "Employee communication and launch toolkits"
        },
        {
          "toId": "res-case-study",
          "context": "Client case study PDFs"
        },
        {
          "toId": "res-clinical-research",
          "context": "Published research and clinical validation"
        },
        {
          "toId": "webinars",
          "context": "On-demand and upcoming webinars"
        }
      ],
      "contentClusterCTAs": [
        {
          "toId": "webinars",
          "label": "Browse all on-demand webinars"
        },
        {
          "toId": "case-studies",
          "label": "Browse all client case studies"
        }
      ]
    },
    {
      "id": "res-clinical-research",
      "name": "Clinical Research Index (Resources)",
      "url": "/insights/resources/clinical-research",
      "navTier": 3,
      "parent": "resources",
      "pageContent": {
        "purpose": "Downloadable clinical research library for brokers and providers needing shareable peer-reviewed evidence.",
        "primaryAudiences": [
          "broker",
          "provider"
        ],
        "keyContent": [
          "Downloadable research papers and summaries",
          "Study abstracts and key findings",
          "Filter by condition or topic"
        ],
        "conversionActions": [
          "Download Research Report"
        ],
        "toneNote": null
      },
      "contentClusterCTAs": [
        {
          "toId": "case-studies",
          "label": "Enterprise outcomes that apply this research"
        },
        {
          "toId": "webinars",
          "label": "Clinical discussion webinars"
        }
      ]
    },
    {
      "id": "res-clinical-res-dp",
      "name": "Clinical Research Detail Pages (Resources)",
      "url": "/insights/resources/clinical-research/:slug",
      "navTier": 4,
      "parent": "res-clinical-research",
      "pageContent": {
        "purpose": "Downloadable version of a specific research study — formatted for easy sharing with clients or leadership.",
        "primaryAudiences": [
          "broker",
          "provider"
        ],
        "keyContent": [
          "Study summary and key findings",
          "Citation and methodology",
          "Download link for full paper or summary PDF"
        ],
        "conversionActions": [
          "Download Research Paper"
        ],
        "toneNote": null
      },
      "contentClusterCTAs": [
        {
          "toId": "case-studies",
          "label": "Enterprise outcomes in practice"
        },
        {
          "toId": "webinars",
          "label": "Related clinical webinars"
        }
      ]
    },
    {
      "id": "res-care-challenge",
      "name": "Care for Every Challenge Index (Resources)",
      "url": "/insights/resources/care-for-every-challenge",
      "navTier": 3,
      "parent": "resources",
      "pageContent": {
        "purpose": "Care challenge content in resource format — downloadable guides for specific challenges like stress, relationships, and burnout.",
        "primaryAudiences": [
          "member",
          "hr-buyer"
        ],
        "keyContent": [
          "Downloadable care guides by challenge topic",
          "Employer awareness materials per challenge area",
          "Easy download CTAs"
        ],
        "conversionActions": [
          "Download Guide"
        ],
        "toneNote": null
      },
      "contentClusterCTAs": [
        {
          "toId": "blog",
          "label": "Member perspectives and stories"
        },
        {
          "toId": "webinars",
          "label": "Live and on-demand support sessions"
        }
      ]
    },
    {
      "id": "res-care-challenge-dp",
      "name": "Care for Every Challenge Detail (Resources)",
      "url": "/insights/resources/care-for-every-challenge/:slug",
      "navTier": 4,
      "parent": "res-care-challenge",
      "pageContent": {
        "purpose": "Individual care challenge resource — detailed downloadable guide for a specific topic (e.g., grief, burnout, anxiety).",
        "primaryAudiences": [
          "member",
          "hr-buyer"
        ],
        "keyContent": [
          "Challenge description in plain language",
          "Available care types and interventions",
          "Employer communication tips for this challenge",
          "Download CTA"
        ],
        "conversionActions": [
          "Download Guide"
        ],
        "toneNote": null
      },
      "contentClusterCTAs": [
        {
          "toId": "blog",
          "label": "More on this topic"
        },
        {
          "toId": "webinars",
          "label": "Live support and community sessions"
        }
      ]
    },
    {
      "id": "res-mh-workplace",
      "name": "Mental Health in the Workplace Index",
      "url": "/insights/resources/mental-health-workplace",
      "navTier": 3,
      "parent": "resources",
      "pageContent": {
        "purpose": "Employee communication and workplace mental health resource hub — employer toolkits and manager training materials currently buried 3 tiers deep.",
        "primaryAudiences": [
          "benefits-manager"
        ],
        "keyContent": [
          "Employee awareness and communication toolkits for launch",
          "Manager training resources for mental health conversations",
          "Stigma-reduction materials and guides",
          "Workplace mental health trend reports"
        ],
        "conversionActions": [
          "Download Toolkit"
        ],
        "toneNote": null
      },
      "contentClusterCTAs": [
        {
          "toId": "case-studies",
          "label": "See what other companies have achieved"
        },
        {
          "toId": "webinars",
          "label": "HR and benefits-focused webinars"
        }
      ]
    },
    {
      "id": "res-mh-workplace-dp",
      "name": "MH in the Workplace Detail Pages",
      "url": "/insights/resources/mental-health-workplace/:slug",
      "navTier": 4,
      "parent": "res-mh-workplace",
      "pageContent": {
        "purpose": "Individual workplace mental health resource — a specific toolkit, guide, or article for benefits managers running a rollout.",
        "primaryAudiences": [
          "benefits-manager"
        ],
        "keyContent": [
          "Topic-specific toolkit or practical guide",
          "Implementation tips and recommended steps",
          "Download CTA"
        ],
        "conversionActions": [
          "Download Toolkit"
        ],
        "toneNote": null
      },
      "contentClusterCTAs": [
        {
          "toId": "case-studies",
          "label": "Company outcomes from similar programs"
        },
        {
          "toId": "webinars",
          "label": "HR-focused on-demand sessions"
        }
      ]
    },
    {
      "id": "res-case-study",
      "name": "Case Study Index (Resources)",
      "url": "/insights/resources/case-studies",
      "navTier": 3,
      "parent": "resources",
      "pageContent": {
        "purpose": "Downloadable case study library for brokers and HR buyers — shareable PDFs of named enterprise client stories.",
        "primaryAudiences": [
          "broker",
          "hr-buyer"
        ],
        "keyContent": [
          "Case study PDFs filterable by industry and company size",
          "Key outcome statistics preview for each study",
          "Prominent download CTAs"
        ],
        "conversionActions": [
          "Download Case Study"
        ],
        "toneNote": null
      },
      "contentClusterCTAs": [
        {
          "toId": "clinical-research",
          "label": "Clinical evidence behind these outcomes"
        },
        {
          "toId": "webinars",
          "label": "Educational content to share with clients"
        }
      ]
    },
    {
      "id": "res-case-study-dp",
      "name": "Case Study Detail Pages (Resources)",
      "url": "/insights/resources/case-studies/:slug",
      "navTier": 4,
      "parent": "res-case-study",
      "pageContent": {
        "purpose": "Individual downloadable case study — PDF-formatted version of a specific client story for sharing with employer clients.",
        "primaryAudiences": [
          "broker",
          "hr-buyer",
          "cfo"
        ],
        "keyContent": [
          "Client story summary and key outcome data",
          "Shareable statistics and quotes",
          "Download link for PDF"
        ],
        "conversionActions": [
          "Download Case Study"
        ],
        "toneNote": null
      },
      "contentClusterCTAs": [
        {
          "toId": "clinical-research",
          "label": "The clinical evidence behind these results"
        },
        {
          "toId": "webinars",
          "label": "Shareable educational sessions"
        }
      ]
    },
    {
      "id": "res-blog",
      "name": "Blog Index (Resources)",
      "url": "/insights/resources/blog",
      "navTier": 3,
      "parent": "resources",
      "pageContent": {
        "purpose": "Editorial content in resource format — blog articles formatted for easy sharing and download.",
        "primaryAudiences": [
          "hr-buyer",
          "broker"
        ],
        "keyContent": [
          "Featured articles formatted as shareable resources",
          "Topic and audience filters"
        ],
        "conversionActions": [],
        "toneNote": null
      },
      "contentClusterCTAs": [
        {
          "toId": "case-studies",
          "label": "Client outcomes and proof"
        },
        {
          "toId": "webinars",
          "label": "On-demand educational sessions"
        }
      ]
    },
    {
      "id": "webinars",
      "name": "Webinars",
      "url": "/insights/resources/webinars",
      "navTier": 3,
      "parent": "resources",
      "pageContent": {
        "purpose": "On-demand and upcoming webinar library — educational content for brokers and HR buyers exploring Modern Health's clinical model and market evidence.",
        "primaryAudiences": [
          "broker",
          "hr-buyer",
          "benefits-manager"
        ],
        "keyContent": [
          "On-demand webinar recordings",
          "Upcoming live webinar calendar",
          "Topic filters: clinical outcomes, EAP differentiation, implementation, workforce trends",
          "Registration and watch CTAs"
        ],
        "conversionActions": [
          "Register for Webinar",
          "Watch On-Demand"
        ],
        "toneNote": null
      },
      "contentClusterCTAs": [
        {
          "toId": "case-studies",
          "label": "Client proof and outcomes"
        },
        {
          "toId": "clinical-research",
          "label": "Research referenced in our sessions"
        }
      ]
    },
    {
      "id": "about-us",
      "name": "About Us",
      "url": "/company/about",
      "navTier": 2,
      "parent": "company",
      "pageContent": {
        "purpose": "Brand story and company values — provides context for vendor evaluation; relevant for HR buyers and benefits managers assessing culture fit.",
        "primaryAudiences": [
          "hr-buyer",
          "benefits-manager"
        ],
        "keyContent": [
          "Company mission and founding story",
          "Leadership team and clinical advisory board",
          "Company values and culture overview"
        ],
        "conversionActions": [],
        "toneNote": null
      },
      "contentClusterCTAs": [
        {
          "toId": "case-studies",
          "label": "Client outcomes and trust signals"
        },
        {
          "toId": "clinical-research",
          "label": "Our clinical credibility and published research"
        }
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
        "primaryAudiences": [
          "hr-buyer",
          "cfo"
        ],
        "keyContent": [
          "Press coverage from major outlets (WSJ, Forbes, etc.)",
          "Industry awards and analyst recognition",
          "PR contact for media inquiries"
        ],
        "conversionActions": [],
        "toneNote": null
      },
      "contentClusterCTAs": [
        {
          "toId": "case-studies",
          "label": "Client outcomes beyond press coverage"
        },
        {
          "toId": "clinical-research",
          "label": "Published clinical research"
        }
      ]
    },
    {
      "id": "work-with-us",
      "name": "Work with Us",
      "url": "/company/careers",
      "navTier": 2,
      "parent": "company",
      "pageContent": {
        "purpose": "Careers hub and provider network entry point — serves job seekers and clinicians evaluating the provider network (though the provider path is buried here).",
        "primaryAudiences": [
          "provider"
        ],
        "keyContent": [
          "Open job positions",
          "Provider network inquiry pathway",
          "Company culture and benefits for candidates"
        ],
        "conversionActions": [
          "Submit Provider Inquiry",
          "Apply for Job"
        ],
        "toneNote": null
      },
      "contentClusterCTAs": [
        {
          "toId": "clinical-research",
          "label": "Our clinical model and research base"
        },
        {
          "toId": "webinars",
          "label": "Learn about our care approach"
        }
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
        "conversionActions": [
          "Apply Now"
        ],
        "toneNote": null
      },
      "contentClusterCTAs": [
        {
          "toId": "blog",
          "label": "Life at Modern Health"
        },
        {
          "toId": "clinical-research",
          "label": "Our clinical mission and evidence"
        }
      ]
    },
    {
      "id": "provider-inquiry",
      "name": "Provider Inquiry",
      "url": "/company/careers/providers",
      "navTier": 3,
      "parent": "work-with-us",
      "pageContent": {
        "purpose": "Apply to join the Modern Health provider network — currently not discoverable from the clinical sections where providers would naturally navigate.",
        "primaryAudiences": [
          "provider"
        ],
        "keyContent": [
          "Provider network overview and value proposition",
          "Application or inquiry form",
          "What to expect after applying",
          "Clinical model and values alignment information"
        ],
        "conversionActions": [
          "Submit Provider Inquiry"
        ],
        "toneNote": null
      },
      "crossLinks": [
        {
          "toId": "adaptive-care",
          "context": "Understand the clinical model you would be delivering"
        },
        {
          "toId": "global-care-network",
          "context": "See the global network you would be joining"
        }
      ],
      "contentClusterCTAs": [
        {
          "toId": "clinical-research",
          "label": "The clinical model you would be delivering"
        },
        {
          "toId": "webinars",
          "label": "Learn about our care approach"
        }
      ]
    },
    {
      "id": "deib",
      "name": "DEIB",
      "url": "/company/deib",
      "navTier": 4,
      "parent": "work-with-us",
      "pageContent": {
        "purpose": "Diversity, equity, inclusion, and belonging page — relevant for HR buyers and benefits managers assessing vendor culture alignment and inclusive care delivery.",
        "primaryAudiences": [
          "hr-buyer",
          "benefits-manager"
        ],
        "keyContent": [
          "DEIB commitments and programs",
          "Workforce diversity data and goals",
          "Cultural competency in clinical care delivery",
          "Inclusive platform design principles"
        ],
        "conversionActions": [],
        "toneNote": null
      },
      "contentClusterCTAs": [
        {
          "toId": "blog",
          "label": "Perspectives on inclusive workplace wellbeing"
        },
        {
          "toId": "case-studies",
          "label": "How enterprises build inclusive benefits programs"
        }
      ]
    }
  ]
};
