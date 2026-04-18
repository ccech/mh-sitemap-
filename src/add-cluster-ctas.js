/**
 * add-cluster-ctas.js
 * Injects contentClusterCTAs onto every content page in sitemap.js/json.
 * These represent the two above-footer content cluster CTA slots on each page.
 * Run: node src/add-cluster-ctas.js
 */

const fs  = require('fs');
const path = require('path');
const vm  = require('vm');

const ROOT = path.join(__dirname, '..');

// Load current sitemap
const src = fs.readFileSync(path.join(ROOT, 'data', 'sitemap.js'), 'utf8');
const ctx = vm.createContext({ window: {} });
vm.runInContext(src, ctx);
const sitemap = ctx.window.SITEMAP;

// ── Content cluster destination IDs ─────────────────────────────────────────
const C = {
  CARE:     'care-every-challenge',
  BLOG:     'blog',
  CASES:    'case-studies',
  MHITW:   'res-mh-workplace',
  WEBINARS: 'webinars',
  RESEARCH: 'clinical-research',
};

const cta = (toId, label) => ({ toId, label });

// ── CTA assignments ──────────────────────────────────────────────────────────
// Logic:
//   Buyer pages (hr-buyer, cfo, benefits-manager) → Case Studies + MHITW or Research
//   Clinical / evidence pages                      → Clinical Research + Case Studies
//   Broker pages                                   → Case Studies + Research or Webinars
//   Member pages                                   → Care for Every Challenge + Blog
//   Provider pages                                 → Clinical Research + Webinars
//   Partner pages                                  → Clinical Research + Case Studies
//   Content cluster pages themselves               → cross-promote to other clusters (never self-link)

const CTA_MAP = {

  // ── HOME ──────────────────────────────────────────────────────────────────
  'home': [
    cta(C.CASES,    'See client outcomes'),
    cta(C.CARE,     'Explore care for every challenge'),
  ],

  // ── WHO WE SERVE ──────────────────────────────────────────────────────────
  'employers': [
    cta(C.CASES,   'See how companies like yours measure up'),
    cta(C.MHITW,   'Employee communication and launch toolkits'),
  ],
  'consultants': [
    cta(C.CASES,    'Shareable client case studies for your prospects'),
    cta(C.RESEARCH, 'Peer-reviewed clinical evidence'),
  ],
  'health-plans': [
    cta(C.RESEARCH, 'Clinical quality evidence for partner due diligence'),
    cta(C.CASES,    'Enterprise client outcomes at scale'),
  ],
  'channel-partners': [
    cta(C.CASES,    'Client outcomes to share with partners'),
    cta(C.WEBINARS, 'Educational content for your clients'),
  ],
  'members': [
    cta(C.CARE,   'Find support for your situation'),
    cta(C.BLOG,   'Stories and perspectives'),
  ],

  // ── OUR APPROACH ──────────────────────────────────────────────────────────
  'sustainable-pricing': [
    cta(C.CASES,  'See what peer companies invested and gained'),
    cta(C.MHITW,  'Business case and communication resources'),
  ],
  'global-care-network': [
    cta(C.RESEARCH, 'Published evidence behind our network quality'),
    cta(C.WEBINARS, 'Learn more about our care model'),
  ],
  'global-capabilities': [
    cta(C.CASES,    'How global enterprises use Modern Health'),
    cta(C.RESEARCH, 'Global outcomes data'),
  ],
  'mh-by-your-side': [
    cta(C.MHITW,   'Download launch and communication toolkits'),
    cta(C.WEBINARS, 'Implementation and adoption webinars'),
  ],
  'adaptive-care': [
    cta(C.RESEARCH, 'Published research behind our clinical model'),
    cta(C.CASES,    'See these outcomes in enterprise practice'),
  ],
  'care-every-challenge': [
    // IS a cluster page — link to other clusters only
    cta(C.BLOG,     'Workplace mental health perspectives'),
    cta(C.WEBINARS, 'Live and on-demand support sessions'),
  ],
  'care-every-challenge-dp': [
    cta(C.BLOG,     'More perspectives on this topic'),
    cta(C.WEBINARS, 'Live support and community sessions'),
  ],
  'responsible-ai': [
    cta(C.RESEARCH, 'Our clinical evidence and governance standards'),
    cta(C.CASES,    'How enterprise clients trust our platform'),
  ],
  'care-modalities': [
    cta(C.CARE,     'Find support for your specific challenge'),
    cta(C.WEBINARS, 'See care modalities in action'),
  ],
  'pathways': [
    cta(C.CARE, 'Browse all support topics'),
    cta(C.BLOG, 'Member stories and resources'),
  ],
  'circles-marketing': [
    cta(C.CARE, 'Find support beyond community sessions'),
    cta(C.BLOG, 'Stories about connection and community'),
  ],
  'circles-product': [
    cta(C.CARE,     'Explore other care options'),
    cta(C.WEBINARS, 'Join a live support session'),
  ],

  // ── OUTCOMES ──────────────────────────────────────────────────────────────
  'case-studies': [
    // IS a cluster page — link to other clusters only
    cta(C.RESEARCH, 'The clinical evidence behind these results'),
    cta(C.MHITW,    'Business case and ROI resources'),
  ],
  'case-study-detail': [
    cta(C.RESEARCH, 'Clinical evidence behind these results'),
    cta(C.WEBINARS, 'Hear directly from our clinical team'),
  ],
  'economic-roi': [
    cta(C.CASES,  'See how peer companies measured their return'),
    cta(C.MHITW,  'Business case resources and toolkits'),
  ],
  'clinical-outcomes': [
    cta(C.RESEARCH, 'Published research behind these outcomes'),
    cta(C.WEBINARS, 'Clinical outcomes webinars'),
  ],
  'clinical-research': [
    // IS a cluster page — link to other clusters only
    cta(C.CASES,    'See research outcomes in enterprise practice'),
    cta(C.WEBINARS, 'Research and clinical discussion webinars'),
  ],
  'clinical-research-dp': [
    cta(C.CASES,    'Enterprise outcomes that apply this research'),
    cta(C.WEBINARS, 'Research and clinical webinars'),
  ],

  // ── INSIGHTS ──────────────────────────────────────────────────────────────
  'events': [
    cta(C.WEBINARS, "Can't make it? Watch on-demand"),
    cta(C.CASES,    'Resources to share after the event'),
  ],
  'events-detail': [
    cta(C.WEBINARS, 'More on-demand sessions'),
    cta(C.RESEARCH, 'Supporting research and evidence'),
  ],
  'blog': [
    // IS a cluster page — link to other clusters only
    cta(C.CASES,    'Client outcomes and proof points'),
    cta(C.WEBINARS, 'On-demand educational sessions'),
  ],
  'blog-pages': [
    cta(C.CASES,    'See client outcomes'),
    cta(C.WEBINARS, 'Related educational sessions'),
  ],
  'resources': [
    cta(C.WEBINARS, 'Browse all on-demand webinars'),
    cta(C.CASES,    'Browse all client case studies'),
  ],
  'res-clinical-research': [
    // IS a cluster page — link to other clusters only
    cta(C.CASES,    'Enterprise outcomes that apply this research'),
    cta(C.WEBINARS, 'Clinical discussion webinars'),
  ],
  'res-clinical-res-dp': [
    cta(C.CASES,    'Enterprise outcomes in practice'),
    cta(C.WEBINARS, 'Related clinical webinars'),
  ],
  'res-care-challenge': [
    // IS a cluster page — link to other clusters only
    cta(C.BLOG,     'Member perspectives and stories'),
    cta(C.WEBINARS, 'Live and on-demand support sessions'),
  ],
  'res-care-challenge-dp': [
    cta(C.BLOG,     'More on this topic'),
    cta(C.WEBINARS, 'Live support and community sessions'),
  ],
  'res-mh-workplace': [
    // IS a cluster page — link to other clusters only
    cta(C.CASES,    'See what other companies have achieved'),
    cta(C.WEBINARS, 'HR and benefits-focused webinars'),
  ],
  'res-mh-workplace-dp': [
    cta(C.CASES,    'Company outcomes from similar programs'),
    cta(C.WEBINARS, 'HR-focused on-demand sessions'),
  ],
  'res-case-study': [
    // IS a cluster page — link to other clusters only
    cta(C.RESEARCH, 'Clinical evidence behind these outcomes'),
    cta(C.WEBINARS, 'Educational content to share with clients'),
  ],
  'res-case-study-dp': [
    cta(C.RESEARCH, 'The clinical evidence behind these results'),
    cta(C.WEBINARS, 'Shareable educational sessions'),
  ],
  'res-blog': [
    // IS a cluster page — link to other clusters only
    cta(C.CASES,    'Client outcomes and proof'),
    cta(C.WEBINARS, 'On-demand educational sessions'),
  ],
  'webinars': [
    // IS a cluster page — link to other clusters only
    cta(C.CASES,    'Client proof and outcomes'),
    cta(C.RESEARCH, 'Research referenced in our sessions'),
  ],

  // ── COMPANY ───────────────────────────────────────────────────────────────
  'about-us': [
    cta(C.CASES,    'Client outcomes and trust signals'),
    cta(C.RESEARCH, 'Our clinical credibility and published research'),
  ],
  'press': [
    cta(C.CASES,    'Client outcomes beyond press coverage'),
    cta(C.RESEARCH, 'Published clinical research'),
  ],
  'work-with-us': [
    cta(C.RESEARCH, 'Our clinical model and research base'),
    cta(C.WEBINARS, 'Learn about our care approach'),
  ],
  'job-posting': [
    cta(C.BLOG,     'Life at Modern Health'),
    cta(C.RESEARCH, 'Our clinical mission and evidence'),
  ],
  'provider-inquiry': [
    cta(C.RESEARCH, 'The clinical model you would be delivering'),
    cta(C.WEBINARS, 'Learn about our care approach'),
  ],
  'deib': [
    cta(C.BLOG,  'Perspectives on inclusive workplace wellbeing'),
    cta(C.CASES, 'How enterprises build inclusive benefits programs'),
  ],
};

// ── Inject into pages ────────────────────────────────────────────────────────
let updated = 0;
for (const page of sitemap.pages) {
  if (CTA_MAP[page.id]) {
    page.contentClusterCTAs = CTA_MAP[page.id];
    updated++;
  }
}

// ── Write outputs ────────────────────────────────────────────────────────────
const today = new Date().toISOString().split('T')[0];
const jsOut = `// Phase 3: Sitemap — loaded from Figma (Modern-Health_IA_Project, node 1:2)
// Source: https://www.figma.com/design/ny1NTdldHNxwV8HEqlFAvo/Modern-Health_IA_Project?node-id=1-2
// Extracted via Figma MCP on 2026-04-16
// pageContent added 2026-04-16 — derived from JTBD navImplications and user story analysis
// Updated 2026-04-16 — reconciled against updated Figma IA + Content Map PDF
// Updated ${today} — contentClusterCTAs added (above-footer content cluster CTA pairs per page)
window.SITEMAP = ${JSON.stringify(sitemap, null, 2)};
`;

fs.writeFileSync(path.join(ROOT, 'data', 'sitemap.js'), jsOut);
fs.writeFileSync(path.join(ROOT, 'data', 'sitemap.json'), JSON.stringify(sitemap, null, 2));

console.log(`contentClusterCTAs added to ${updated} pages.`);
console.log('Wrote data/sitemap.js and data/sitemap.json');
