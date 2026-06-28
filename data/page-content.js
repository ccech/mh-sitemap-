'use strict';
// Page Content — drafted marketing copy, keyed by sitemap page id.
// Source of truth for content-wireframe.html (Wireframe + Document modes).
// Each page = { pageId, blocks: [ ...typed blocks ] }.
//
// Block / layout patterns (vary the rhythm — match the pattern to the section's job):
//   hero | stats | comparison | cards | callout | split | feature-grid |
//   section | social-proof | faq | content-ctas | cta
// `annotation` fields are internal notes (which keyword/question/proof a block serves);
// shown only in Document mode and content/<page>.md — never in the visual wireframe.
window.PAGE_CONTENT = {

  'employers': {
    pageId: 'employers',
    status: 'draft',
    blocks: [

      {
        type: 'hero',
        eyebrow: 'For Employers & HR Leaders',
        h1: 'Employee Mental Health Benefits for Your Entire Workforce',
        subhead: 'Modern Health goes beyond the EAP — an adaptive mental health benefit that meets every employee where they are, proves its return, and deploys across 200+ countries. The benefit your people will actually use.',
        primaryCta: { label: 'Request a Demo', toId: 'nav-demo-request' },
        secondaryCta: { label: 'See the ROI', toId: 'economic-roi' },
        annotation: 'H1 from SEO brief; primary keyword "employee mental health benefits" up front. Opens with the EAP-replacement frame (content gap: EAP frame above the fold) + adaptive + global + the engagement promise.',
      },

      {
        type: 'stats',
        items: [
          { value: '$2.39', label: 'Returned for every $1 invested' },
          { value: '20%', label: 'Workforce engagement (vs. 2–4% for EAPs)' },
          { value: '200+', label: 'Countries supported' },
          { value: '<1 day', label: 'To first provider' },
        ],
        annotation: 'Proof bar high on the page (content gap: proof early). Hits keyQuestions #2 and #5 before the buyer scrolls.',
      },

      {
        type: 'comparison',
        eyebrow: 'Beyond the EAP',
        heading: 'Not another EAP. A benefit your people actually use.',
        lead: 'Traditional EAPs were built for crisis, capped at a handful of sessions, and used by just 2–4% of employees. Modern Health is different by design — one platform across the full spectrum of mental health, there long before a crisis and for as long as it\'s needed.',
        columns: { left: 'Traditional EAP', right: 'Modern Health' },
        rows: [
          { dimension: 'Employee engagement', eap: '2–4% of employees', mh: '~20% of your workforce' },
          { dimension: 'Scope of support', eap: 'Crisis-only, capped sessions', mh: 'Full spectrum — everyday stress to complex clinical needs' },
          { dimension: 'Care path', eap: 'One-size-fits-all, often straight to therapy', mh: 'Adaptive — matched to need, evolves over time' },
          { dimension: 'When it helps', eap: 'After something breaks', mh: 'Proactively, long before a crisis' },
        ],
        link: { label: 'See the clinical outcomes', toId: 'clinical-outcomes' },
        annotation: 'COMPARISON pattern. Answers keyQuestions #1 and #5; addresses HR pain "low EAP utilization." Carries the "EAP replacement" frame. Proof: 20% vs 2–4%. Links to clinical-outcomes (not adaptive-care) so it doesn\'t duplicate the next section\'s link.',
      },

      {
        type: 'cards',
        eyebrow: 'The Adaptive Care Model',
        heading: 'The right care, the moment it\'s needed — and it adapts as needs change',
        lead: 'Every employee is matched to the right level and type of support based on what they actually need — not a one-size-fits-all path to therapy.',
        cards: [
          { icon: '💬', title: 'Coaching', text: 'Goal-oriented support from certified coaches, for everyday stress and growth.' },
          { icon: '🧠', title: 'Therapy', text: 'Licensed clinical care for higher-acuity and complex needs.' },
          { icon: '👥', title: 'Circles', text: 'Facilitator-led peer communities that reduce isolation and stigma.' },
          { icon: '📱', title: 'Pathways', text: 'Structured, self-guided programs available anytime, in any language.' },
        ],
        footnote: 'As needs change, care changes with them — no re-enrollment, no starting over. 80% of members improve or maintain their well-being.',
        link: { label: 'Explore the Adaptive Care Model', toId: 'adaptive-care' },
        annotation: 'CARDS pattern (the four modalities). Answers keyQuestion #3 — the core differentiator vs. the EAP category and vs. Spring/Lyra. Proof: 80% improve/maintain.',
      },

      {
        type: 'callout',
        eyebrow: 'The Business Case',
        heading: 'A business case your CFO will approve',
        bigStat: { value: '$2.39', label: 'returned for every $1 invested — actuarially validated, not estimated' },
        body: 'What makes it durable: 60% of those savings come from employees with moderate needs, supported early, before challenges escalate into claims, absence, or turnover. That\'s the difference between a benefit that costs money and one that pays for itself — by reducing absenteeism, presenteeism, and the downstream medical spend untreated mental health drives.',
        link: { label: 'See the full ROI picture', toId: 'economic-roi' },
        annotation: 'CALLOUT pattern (giant stat band). Answers keyQuestion #2; addresses CFO-ROI pressure. Proof: $2.39, actuarially validated, 60% from moderate-need. Works secondary keywords "absenteeism"/"presenteeism".',
      },

      {
        type: 'split',
        eyebrow: 'Global by Design',
        heading: 'One benefit for your entire global workforce',
        body: [
          'Deploy Modern Health across 200+ countries and 80+ languages from a single contract — with care that\'s localized, not just translated. Every employee, wherever they are, gets support that fits their language, culture, and context.',
          'Quality holds at scale: a globally vetted provider network rated 4.9/5, with 46% BIPOC providers and language-matched care, so employees can find someone who understands their lived experience.',
        ],
        media: { kind: 'map', label: '🌍  200+ countries · 80+ languages' },
        mediaSide: 'right',
        link: { label: 'Explore global capabilities', toId: 'global-capabilities' },
        annotation: 'SPLIT / zigzag pattern (text + map visual). Answers keyQuestion #4; serves Total Rewards "global workforce" criteria. Proof: 200+ countries, 80+ languages, 4.9/5, 46% BIPOC. Differentiates on concrete global numbers + equity.',
      },

      {
        type: 'feature-grid',
        eyebrow: 'Partnership, Not a Portal',
        heading: 'You won\'t roll this out alone',
        lead: 'Low adoption usually isn\'t a product problem — it\'s a launch problem. Modern Health partners with your team from day one to drive utilization, not just access.',
        features: [
          { icon: '🚀', title: 'Launch strategy', text: 'A go-live plan built hand-in-hand with your team.' },
          { icon: '🎓', title: 'Manager training', text: 'Equip managers to recognize needs and point the way to support.' },
          { icon: '📣', title: 'Employee comms', text: 'Awareness campaigns that drive sign-ups, not just announcements.' },
          { icon: '📈', title: 'Ongoing engagement', text: 'Continuous nudges and reporting to sustain utilization over time.' },
        ],
        footnote: 'It works: Atlassian reached 52% employee registration; Rubrik hit 63% — the kind of numbers that only come from a partner who owns the rollout with you.',
        link: { label: 'How we partner with your team', toId: 'partnering-with-your-team' },
        annotation: 'FEATURE-GRID pattern (what\'s included). Addresses HR pain "previous launches had poor rollout support" + emotional job "feel supported through implementation." Proof: Atlassian 52%, Rubrik 63%.',
      },

      {
        type: 'social-proof',
        heading: 'Trusted by leading enterprises',
        logos: ['Atlassian', 'Autodesk', 'Lyft', 'Nextdoor', 'Coinbase', 'Gusto'],
        outcomes: [
          { client: 'Atlassian', stat: '94%', detail: 'improved or maintained well-being (52% registration)' },
          { client: 'Autodesk', stat: '3x', detail: 'engagement vs. their previous solution' },
          { client: 'Midland States Bank', stat: '$110K', detail: 'reduction in mental health–related costs' },
          { client: 'CEBT', stat: '89%', detail: 'improved well-being across 37,000 members' },
        ],
        testimonial: {
          quote: 'Getting matched to a therapist in under two days pays for itself when you consider employee mental wellness.',
          attribution: 'David Hanrahan, Chief Human Resources Officer',
        },
        link: { label: 'See all client stories', toId: 'case-studies' },
        annotation: 'SOCIAL-PROOF pattern (logo wall + outcome stats + pull-quote). Serves HR success criteria "recognizable enterprise clients in named case studies." Links to the case-studies index so the proof is browsable.',
      },

      {
        type: 'faq',
        heading: 'Questions HR leaders ask',
        items: [
          {
            q: 'How is Modern Health different from an EAP — and can it replace one?',
            a: 'EAPs are crisis-oriented and capped at a few sessions, with 2–4% engagement. Modern Health covers the full spectrum of mental health through the Adaptive Care Model, reaches around 20% of your workforce, and can replace or supplement your EAP entirely.',
          },
          {
            q: 'What ROI have enterprise clients seen in year one?',
            a: '$2.39 for every $1 invested, actuarially validated — with 60% of savings coming from moderate-need employees supported early. Clients like Midland States Bank have cut mental health–related costs by $110K.',
          },
          {
            q: 'What does the Adaptive Care Model mean in practice for HR teams?',
            a: 'Every employee is routed to the right support — coaching, therapy, Circles peer groups, or Pathways self-guided programs — and their care adapts as their needs change, without re-enrollment or starting over.',
          },
          {
            q: 'How does Modern Health deploy across a global, multilingual workforce?',
            a: '200+ countries and 80+ languages from a single contract, with localized care and a provider network rated 4.9/5 — including 46% BIPOC providers and language-matched care.',
          },
          {
            q: 'What does utilization and engagement actually look like vs. a traditional EAP?',
            a: 'Around 20% of your workforce engages with Modern Health, compared with the typical 2–4% for EAPs — driven by the breadth of support and a launch partnership built to drive adoption.',
          },
        ],
        annotation: 'FAQ accordion pattern. Directly answers all five SEO-brief keyQuestions — buyer reassurance plus SEO (FAQ schema candidate).',
      },

      {
        type: 'content-ctas',
        heading: 'Keep exploring',
        items: [
          { kind: 'Blog post', label: '7 Signs Your EAP Needs a Modern Upgrade', toId: 'blog' },
          { kind: 'Case Study', label: 'Midland States Bank: $110K in reduced mental-health costs', toId: 'case-studies' },
        ],
        annotation: 'PROCESS — every page ends (just above the conversion CTA) with two CTAs into supporting content clusters (blog / case study / care-for-every-challenge / guides) to keep not-yet-ready buyers engaged and build internal-linking topical authority. The case study is a specific featured story, distinct from the "See all client stories" index link in the social-proof block. Broad suggestions — exact assets TBD.',
      },

      {
        type: 'cta',
        heading: 'See Modern Health for your workforce',
        body: 'Book a demo to see the platform, the outcomes, and the ROI model in action — or start a formal evaluation with our enterprise team.',
        primaryCta: { label: 'Request a Demo', toId: 'nav-demo-request' },
        secondaryCta: { label: 'Start an enterprise evaluation', toId: 'nav-demo-request' },
        annotation: 'CTA band. Serves user story hr-03 (frictionless demo from any page) and bp-03 (benefits-buyer/procurement: a formal enterprise-evaluation path, not a generic sales form).',
      },

    ],
  },

  'consultants': {
    pageId: 'consultants',
    status: 'draft',
    blocks: [

      {
        type: 'hero',
        eyebrow: 'For Benefits Consultants & Brokers',
        h1: 'The Mental Health Benefits Platform You Can Recommend with Confidence',
        subhead: 'Defensible ROI, peer-reviewed evidence, and client-ready proof — everything you need to position Modern Health alongside or instead of the platforms your clients already know.',
        primaryCta: { label: 'Connect with Consultant Relations', toId: 'nav-demo-request' },
        secondaryCta: { label: 'Download the case studies', toId: 'case-studies' },
        annotation: 'H1 from SEO brief; primary keyword "mental health benefits platform." Speaks to the consultant\'s real job — a recommendation that holds up. NOTE: primary CTA is consultant-specific ("Connect with Consultant Relations"), NOT a generic demo (persona pain + user story co-03). GAP: no dedicated consultant-relations contact page exists in the sitemap; routed to nav-demo-request as a placeholder destination.',
      },

      {
        type: 'stats',
        items: [
          { value: '$2.39', label: 'ROI per $1 — actuarially validated' },
          { value: '100+', label: 'Peer-reviewed studies' },
          { value: '200+', label: 'Countries supported' },
          { value: '20%', label: 'Engagement (vs. 2–4% for EAPs)' },
        ],
        annotation: 'The RFP-defensible numbers a consultant drops straight into a client recommendation. Answers keyQuestion #2 (ROI/outcome data to share).',
      },

      {
        type: 'feature-grid',
        eyebrow: 'Recommend with Confidence',
        heading: 'Everything you need to make the case to a client',
        lead: 'Modern Health is built to be recommended — with proof that stands up to RFP scrutiny and materials you can put in front of a client today.',
        features: [
          { icon: '📊', title: 'Defensible ROI', text: '$2.39 returned per $1, actuarially validated — a number that survives CFO review.' },
          { icon: '🔬', title: 'Clinical evidence', text: '100+ peer-reviewed studies behind the care model, not marketing claims.' },
          { icon: '🌍', title: 'Global coverage', text: '200+ countries and 80+ languages for multinational client portfolios.' },
          { icon: '📄', title: 'Shareable materials', text: 'Client-ready case studies, outcome data, and data sheets you can forward.' },
        ],
        link: { label: 'Explore the clinical evidence', toId: 'clinical-outcomes' },
        annotation: 'FEATURE-GRID. Maps to the consultant functionalJobs + the "shareable client materials" need (persona pain: hard to find client-ready PDFs). Secondary keyword "questions employers should ask mental health vendor" lives in this evaluation framing.',
      },

      {
        type: 'comparison',
        eyebrow: 'The Evaluation',
        heading: 'What to look for in a mental health vendor',
        lead: 'The criteria that separate a benefit your clients\' employees actually use from one that sits unused. Use it to frame any RFP.',
        columns: { left: 'Legacy EAP / point solution', right: 'Modern Health' },
        rows: [
          { dimension: 'Engagement', eap: '2–4%, or a single modality', mh: '~20% across the full spectrum of care' },
          { dimension: 'Evidence base', eap: 'Claims, few published studies', mh: '100+ peer-reviewed studies' },
          { dimension: 'Care model', eap: 'Fixed sessions or one-size-fits-all', mh: 'Adaptive — matched to need, evolves over time' },
          { dimension: 'Global + equity', eap: 'Limited reach, generic matching', mh: '200+ countries, 80+ languages, 46% BIPOC providers' },
        ],
        link: { label: 'How the Adaptive Care Model differs', toId: 'adaptive-care' },
        annotation: 'COMPARISON. Answers keyQuestion #1 + #3 intent and the persona\'s "competitive positioning clarity" need — but frames the contrast as evaluation criteria vs. "legacy EAP / point solution" rather than naming Spring/Lyra (brand rule: compete on frame, not call-outs). Secondary keyword "mental health vendor comparison." Routes to adaptive-care per user story co-01.',
      },

      {
        type: 'callout',
        eyebrow: 'The Number You Can Share',
        heading: 'Proof your clients\' CFOs will accept',
        bigStat: { value: '$2.39', label: 'returned for every $1 invested — actuarially validated, with 60% of savings from moderate-need employees caught early' },
        body: 'It\'s the kind of figure that survives a procurement review and anchors a business case. Pair it with named client outcomes and you have a recommendation that\'s hard to argue with.',
        link: { label: 'See the full ROI picture', toId: 'economic-roi' },
        annotation: 'CALLOUT. Answers keyQuestion #2 — gives consultants a defensible, shareable ROI anchor. Proof: $2.39, actuarially validated, 60% moderate-need.',
      },

      {
        type: 'split',
        eyebrow: 'Built for the Recommendation',
        heading: 'Client-ready materials, not a sales pitch',
        body: [
          'Modern Health treats consultants as partners, not leads. You get shareable case studies, outcome data sheets, and clinical evidence formatted to forward straight to a client — so your recommendation looks as rigorous as it is.',
          'And when you\'re ready, you reach a dedicated consultant relations team — not a generic demo queue.',
        ],
        media: { kind: 'document', label: '📄  Client-ready case study & data sheet' },
        mediaSide: 'left',
        link: { label: 'Browse downloadable resources', toId: 'gated-content' },
        annotation: 'SPLIT. Answers keyQuestion #5 + contentGap "RFP toolkit / consultant resource download." Addresses persona pains "no dedicated consultant contact" and "hard to find shareable materials." Links to gated-content (downloadables) to diversify from the case-studies link in social-proof.',
      },

      {
        type: 'social-proof',
        heading: 'The proof you can put in front of a client',
        logos: ['Atlassian', 'Autodesk', 'Lyft', 'Nextdoor', 'Coinbase', 'Gusto'],
        outcomes: [
          { client: 'Autodesk', stat: '3x', detail: 'engagement vs. their previous solution' },
          { client: 'CEBT', stat: '89%', detail: 'improved well-being across 37,000 members' },
          { client: 'Atlassian', stat: '94%', detail: 'improved or maintained well-being (52% registration)' },
          { client: 'Midland States Bank', stat: '$110K', detail: 'reduction in mental health–related costs' },
        ],
        testimonial: {
          quote: '[Consultant testimonial to source — WTW\'s Joe Deba is a named Modern Health consultant reference.]',
          attribution: 'Benefits Consultant (placeholder)',
        },
        link: { label: 'See all client stories', toId: 'case-studies' },
        annotation: 'SOCIAL-PROOF. Named, shareable outcomes (persona wants client-ready proof). Testimonial is a flagged PLACEHOLDER — do not fabricate a quote for a real named person; source a real consultant quote (Joe Deba / WTW) before publish. Links to case-studies index.',
      },

      {
        type: 'faq',
        heading: 'Questions consultants ask',
        items: [
          {
            q: 'How does Modern Health compare to other mental health platforms and legacy EAPs for RFP purposes?',
            a: 'Modern Health competes on engagement (~20% vs. 2–4% for EAPs), a published evidence base (100+ peer-reviewed studies), an adaptive care model that spans the full spectrum, and global reach (200+ countries, 80+ languages). The evaluation table above gives you the criteria to frame any RFP.',
          },
          {
            q: 'What ROI data and outcome metrics can I share with clients?',
            a: '$2.39 returned per $1 invested (actuarially validated), 80% of members improve or maintain well-being, and named client outcomes like Autodesk (3x engagement) and CEBT (89% improved well-being across 37,000 members) — all available as shareable materials.',
          },
          {
            q: 'How does Modern Health fit alongside or replace an existing EAP?',
            a: 'It can do either. Many clients replace an underused EAP outright; others run Modern Health alongside one during transition. The Adaptive Care Model covers everything an EAP does and the full spectrum beyond it.',
          },
          {
            q: 'What does the contracting and implementation process look like?',
            a: 'A single global contract, with a partnership team that owns launch strategy, manager training, employee communications, and ongoing engagement — the drivers behind enterprise registration rates of 52–63%.',
          },
          {
            q: 'What resources does Modern Health provide to support consultant recommendations?',
            a: 'Client-ready case studies, outcome data sheets, peer-reviewed clinical evidence, and a dedicated consultant relations team — not a generic demo queue.',
          },
        ],
        annotation: 'FAQ. Answers brief keyQuestions #2–#5 verbatim; keyQuestion #1 is reworded to avoid naming Spring/Lyra/Headspace (brand rule) — so the verifier will read 4/5 by exact match; the 5th is intentionally reframed, not missing.',
      },

      {
        type: 'content-ctas',
        heading: 'Keep exploring',
        items: [
          { kind: 'Blog post', label: 'How Consultants Evaluate Mental Health Benefits', toId: 'blog' },
          { kind: 'Research', label: 'Peer-reviewed clinical evidence behind the care model', toId: 'clinical-research' },
        ],
        annotation: 'PROCESS — two supporting-content CTAs. A directly-relevant blog post (real MH asset, ~2,871 impressions) and the peer-reviewed research cluster (matches the sitemap contentClusterCTAs for consultants). Diversified from the case-studies index link in social-proof.',
      },

      {
        type: 'cta',
        heading: 'Let\'s build your recommendation together',
        body: 'Connect with a dedicated consultant relations team for client-ready materials, competitive positioning, and support on your next RFP.',
        primaryCta: { label: 'Connect with Consultant Relations', toId: 'nav-demo-request' },
        secondaryCta: { label: 'Download a case study', toId: 'case-studies' },
        annotation: 'CTA band. Serves user story co-03 — a consultant-specific contact, not a generic demo. Same GAP flag: routed to nav-demo-request until a dedicated consultant-relations destination exists.',
      },

    ],
  },

  'members': {
    pageId: 'members',
    status: 'draft',
    blocks: [

      {
        type: 'hero',
        eyebrow: 'Who We Serve · Members',
        h1: 'Employee Mental Wellbeing, at Every Stage of the Journey',
        subhead: 'See the experience Modern Health gives your people — coaching, therapy, community, and self-guided support for the whole of life. The kind of benefit employees actually use.',
        primaryCta: { label: 'Request a Demo', toId: 'nav-demo-request' },
        secondaryCta: { label: 'Explore the care options', toId: 'care-modalities' },
        annotation: 'PRIMARY audience = employer/HR evaluating the member experience and the value to their people. H1 keeps primary keyword "employee mental wellbeing." Subhead describes what employees get + the engagement payoff ("actually use"). Member is a secondary audience served by the login band + the experience described.',
      },

      {
        type: 'login-callout',
        heading: 'Are you a member?',
        body: 'Log in to Modern Health to book a session, join a Circle, or pick up a Pathway where you left off.',
        cta: { label: 'Log in to Modern Health', toId: 'nav-member-login' },
        annotation: 'SECONDARY-audience path (requested module). A slim, self-selecting band so members who land here peel off to the product login (nav-member-login = /login/member) without disrupting the employer-facing narrative. Satisfies user story mb-03 (returning-member login, distinct from activation).',
      },

      {
        type: 'callout',
        eyebrow: 'Private by Design',
        heading: 'Confidential — which is exactly why people use it',
        bigStat: { value: '🔒', label: 'An employee\'s usage is never visible to their employer' },
        body: 'Employees see only their own private space; you see only anonymous, aggregate insights. That trust is what turns a benefit into one people actually open up to — and a big reason engagement runs far above EAP norms.',
        annotation: 'CALLOUT (privacy). Framed as BOTH member value (confidentiality) AND employer value (trust → engagement). Answers keyQuestion #3 (will employees trust it enough to use it). Privacy is the member\'s #1 concern and the employer\'s engagement lever.',
      },

      {
        type: 'cards',
        eyebrow: 'Support, Their Way',
        heading: 'Many ways for your people to feel better — not just therapy',
        lead: 'Your employees are all different, so their support should be too. Modern Health meets each person where they are:',
        cards: [
          { icon: '💬', title: 'Coaching', text: 'Goal-oriented support from certified coaches, for everyday stress and growth.' },
          { icon: '🧠', title: 'Therapy', text: 'Licensed clinical care for when an employee needs it.' },
          { icon: '👥', title: 'Circles', text: 'Facilitator-led peer communities that build connection and reduce stigma.' },
          { icon: '📱', title: 'Pathways', text: 'Self-guided programs employees can use anytime, in any language, at their own pace.' },
        ],
        link: { label: 'Explore all the care options', toId: 'care-modalities' },
        annotation: 'CARDS. Answers keyQuestion #2 — the breadth of what your people can access, in plain language. Reinforces "value in many ways, not just clinical care," which is what drives engagement.',
      },

      {
        type: 'split',
        eyebrow: 'For All of It',
        heading: 'Wellbeing for everyday life, not just the hard days',
        body: [
          'Your people\'s wellbeing isn\'t only about crisis — it\'s new roles, new parenthood, caregiving, money stress, and the ordinary weeks in between. Because Modern Health supports all of it, employees engage long before a problem becomes a crisis.',
          'And care adapts as their needs change — the right support at the right moment, without starting over. That breadth is why engagement reaches around 20%, not the 2–4% of a typical EAP.',
        ],
        media: { kind: 'journey', label: '🌱  Support that grows with each employee' },
        mediaSide: 'right',
        link: { label: 'How the Adaptive Care Model works', toId: 'adaptive-care' },
        annotation: 'SPLIT. The core positioning — culture of wellbeing across the whole employee journey — framed as the driver of engagement (employer value). Answers keyQuestion #1 and #5.',
      },

      {
        type: 'feature-grid',
        eyebrow: 'The Member Experience',
        heading: 'Simple for your people to start',
        lead: 'No referrals, no waitlists — friction is the enemy of adoption.',
        features: [
          { icon: '1️⃣', title: 'Activate', text: 'Employees sign up with their work email in about a minute.' },
          { icon: '2️⃣', title: 'Check in', text: 'A few quick questions about what\'s on their mind.' },
          { icon: '3️⃣', title: 'Get matched', text: 'Routed to the right support for their situation.' },
          { icon: '4️⃣', title: 'Start today', text: 'Connect in 80+ languages, often the same day.' },
        ],
        link: { label: 'Care in your people\'s language, anywhere', toId: 'global-capabilities' },
        annotation: 'FEATURE-GRID as numbered steps. Answers keyQuestion #4 (getting started + language) and shows why adoption is high — low friction.',
      },

      {
        type: 'stats',
        items: [
          { value: '20%', label: 'Workforce engagement (vs. 2–4% for EAPs)' },
          { value: '80%', label: 'Of members improve or maintain well-being' },
          { value: '<1 day', label: 'To an employee\'s first session' },
          { value: '80+', label: 'Languages' },
        ],
        annotation: 'STATS — the value an employer cares about: engagement (the headline differentiator vs EAPs) and outcomes, plus speed and reach. Answers keyQuestion #3 (will employees use it).',
      },

      {
        type: 'faq',
        heading: 'What HR leaders ask about the member experience',
        items: [
          {
            q: 'What experience do employees actually get with Modern Health?',
            a: 'A single place for the whole spectrum of support — coaching and self-guided Pathways for everyday wellbeing, Circles for community, and therapy for clinical needs — matched to each person and adapting over time.',
          },
          {
            q: 'What kinds of support can your people access — coaching, therapy, community, self-guided tools?',
            a: 'All of them, in one platform: 1:1 coaching, licensed therapy, facilitator-led Circles, and self-guided Pathways — so every employee finds a way in that fits.',
          },
          {
            q: 'Will employees actually use it — and is it private enough that they trust it?',
            a: 'Yes — engagement reaches around 20% (vs. 2–4% for EAPs), driven by breadth and by privacy: an employee\'s usage is never visible to their employer, only anonymous, aggregate data.',
          },
          {
            q: 'How quickly and easily can employees get started, and in what languages?',
            a: 'Employees sign up with a work email, answer a few questions, and get matched — often the same day, with support in 80+ languages.',
          },
          {
            q: 'How does support adapt to each employee\'s needs over time?',
            a: 'The Adaptive Care Model moves each person between coaching, therapy, Circles, and Pathways as their needs change — no re-enrollment, no starting over.',
          },
        ],
        annotation: 'FAQ. Answers all five SEO-brief keyQuestions verbatim (now employer-voiced). Reinforces engagement + privacy + breadth — the member-experience story an employer is evaluating.',
      },

      {
        type: 'content-ctas',
        heading: 'Keep exploring',
        items: [
          { kind: 'Care for Every Challenge', label: 'The full breadth of support your people can access', toId: 'care-every-challenge' },
          { kind: 'Blog post', label: 'What actually drives mental health benefit engagement', toId: 'blog' },
        ],
        annotation: 'PROCESS — two supporting-content CTAs, matching the sitemap contentClusterCTAs for members (care-every-challenge + blog), framed for the employer audience.',
      },

      {
        type: 'cta',
        heading: 'See the experience your people will actually use',
        body: 'Book a demo to walk through the member experience, the engagement data, and how Modern Health fits your workforce.',
        primaryCta: { label: 'Request a Demo', toId: 'nav-demo-request' },
        secondaryCta: { label: 'Member login', toId: 'nav-member-login' },
        annotation: 'CTA band. Primary conversion is now the employer demo; member login retained as a secondary path for any members who reach the bottom.',
      },

    ],
  },

  'health-plans': {
    pageId: 'health-plans',
    status: 'draft',
    blocks: [

      {
        type: 'hero',
        eyebrow: 'For Health Plan Administrators',
        h1: 'Mental Health Benefits Designed to Work With Your Health Plan',
        subhead: 'Modern Health delivers integrated behavioral health that reduces claims, closes access gaps, and meets members where they are — in 200+ countries, in 80+ languages, with the clinical evidence base plan partners require.',
        primaryCta: { label: 'Connect with Partnerships Team', toId: 'nav-demo-request' },
        secondaryCta: { label: 'See clinical outcomes', toId: 'clinical-outcomes' },
        annotation: 'H1 = brief recommendedH1. Opens with the three things health plan buyers prioritize: claims reduction, access equity, evidence base. Primary CTA uses partnership language — distinct from the employer demo request.',
      },

      {
        type: 'stats',
        items: [
          { value: '$2.39', label: 'return per $1 invested — actuarially validated' },
          { value: '60%', label: 'of savings come from moderate-need members (early intervention)' },
          { value: '80%', label: 'of members improve or maintain well-being' },
          { value: '200+', label: 'countries with credentialed provider access' },
        ],
        annotation: 'Four stats relevant to a plan buyer: ROI (commercial case), 60% moderate-need (the early-intervention story), outcomes (clinical quality), and global scale (network breadth). Drawn from mh-brand-context.md.',
      },

      {
        type: 'callout',
        eyebrow: 'The Behavioral Health Opportunity',
        heading: '60% of savings come from moderate-need members — not crisis cases',
        bigStat: { value: '60%', label: 'of actuarially validated savings from moderate-need members' },
        body: 'The largest opportunity in behavioral health isn\'t crisis care — it\'s the broad population of members with moderate needs who go unsupported until their condition escalates into high-cost claims. Modern Health\'s Adaptive Care Model reaches them early, through coaching, digital Pathways, and peer support that don\'t require a clinical threshold to access. That early-intervention mechanism is what drives the $2.39 return.',
        link: { label: 'See the economic model', toId: 'economic-roi' },
        annotation: 'Addresses the counterintuitive ROI insight from the brief — positions MH as a claims-reduction tool, not just a clinical supplement. Answers the implicit health-plan question: where does the savings actually come from?',
      },

      {
        type: 'split',
        eyebrow: 'Integration Model',
        heading: 'Beyond the carve-out — behavioral health that fits within your plan',
        body: [
          'Traditional behavioral health carve-outs create a fragmented member experience: a separate portal, a separate enrollment, and no clinical continuity with the rest of the plan. Members fall through the gap — often the members with the highest need.',
          'Modern Health works as a complementary mental health layer within your existing plan structure. Employers deploy it through the same benefits ecosystem; members access it through a single, private portal. Aggregate outcomes data flows to plan administrators in standard reporting formats — protecting member privacy while giving your team the utilization and clinical quality metrics you need.',
        ],
        mediaSide: 'right',
        media: { kind: 'diagram', label: 'Integration model: health plan → employer → member portal' },
        link: { label: 'How the Adaptive Care Model works', toId: 'adaptive-care' },
        annotation: 'Answers key question #1 (integration). Addresses carve-out framing in brief notes and explains how MH fits alongside a plan without replacing the plan structure.',
      },

      {
        type: 'comparison',
        eyebrow: 'Health Plan Evaluation',
        heading: 'Integrated Mental Health vs. Behavioral Health Carve-Out',
        lead: 'Health plans with a separate behavioral health carve-out face a predictable set of problems. Modern Health solves them.',
        columns: { left: 'Behavioral Health Carve-Out', right: 'Modern Health Integrated' },
        rows: [
          { dimension: 'Member experience', eap: 'Separate portal, separate enrollment', mh: 'Single activation with existing plan access' },
          { dimension: 'Claims data', eap: 'Limited to high-acuity utilization', mh: 'Aggregate outcomes reporting across care levels' },
          { dimension: 'Provider access', eap: 'Regional shortages, long wait times', mh: '200+ countries, <1 day to first session' },
          { dimension: 'Member engagement', eap: '2–4% of covered population', mh: '20% workforce engagement at enterprise clients' },
          { dimension: 'Early intervention', eap: 'Crisis-triggered only', mh: 'Proactive support for moderate and low-acuity need' },
        ],
        link: { label: 'Clinical outcomes evidence', toId: 'clinical-outcomes' },
        annotation: 'Answers key question #3 (complement/replace behavioral carve-outs). Frames the evaluation on MH\'s differentiators without naming competitors.',
      },

      {
        type: 'feature-grid',
        eyebrow: 'What Health Plan Partners Receive',
        heading: 'Built for enterprise partnership, not just point-of-sale',
        lead: 'Modern Health is designed to operate at plan scale — with the clinical infrastructure, data standards, and implementation support that health plan relationships require.',
        features: [
          { icon: '📊', title: 'Aggregate outcomes reporting', text: 'PHQ-9 and GAD-7 outcome trends, utilization patterns, and engagement data — anonymized and delivered in plan-standard reporting formats.' },
          { icon: '🌍', title: 'Global provider coverage', text: 'Credentialed providers in 200+ countries with local language support in 80+ languages. One contract, one platform, one vendor relationship.' },
          { icon: '🤝', title: 'Implementation and integration support', text: 'Dedicated implementation team. Integration with existing plan administration systems. Launch communications and member activation built in.' },
          { icon: '⚖️', title: 'Equity-built provider network', text: '46% BIPOC providers, language-matched care, and culturally responsive clinical support — designed for health equity and DEI plan requirements.' },
        ],
        footnote: 'Reporting formats and integration scope confirmed at contracting.',
        link: { label: 'Global network and capabilities', toId: 'global-capabilities' },
        annotation: 'Answers key question #2 (claims data and reporting). Addresses DEI requirements and global scale called out in brief notes.',
      },

      {
        type: 'social-proof',
        heading: 'Enterprise outcomes at plan scale',
        logos: ['CEBT', 'Autodesk', 'Midland States Bank', 'Atlassian'],
        outcomes: [
          { client: 'CEBT', stat: '89% improved well-being', detail: 'Across 37,000 members' },
          { client: 'Midland States Bank', stat: '$110K cost reduction', detail: 'Mental health-related costs in year one' },
          { client: 'Atlassian', stat: '94% improved well-being', detail: '52% registration rate at launch' },
        ],
        testimonial: {
          quote: 'PLACEHOLDER — No named health plan administrator testimonial sourced yet. WTW\'s Joe Deba (partner/advisor context) is the nearest named reference. Real quote needed before final.',
          attribution: 'Health plan partner testimonial — PLACEHOLDER',
        },
        link: { label: 'See all client outcomes', toId: 'case-studies' },
        annotation: 'Social proof section. Testimonial is a PLACEHOLDER — no named health plan testimonial in brand context. Outcomes drawn from mh-brand-context.md named client references.',
      },

      {
        type: 'faq',
        heading: 'What health plan partners ask',
        items: [
          {
            q: 'How does Modern Health integrate with existing health plans?',
            a: 'Modern Health deploys as a complementary mental health layer — employers activate it through their existing benefits ecosystem and members access it through a single, private portal. Aggregate outcomes data integrates with plan reporting in standard formats. No separate carve-out enrollment required.',
          },
          {
            q: 'What claims data and reporting is available to health plan partners?',
            a: 'Plan administrators receive aggregate, anonymized outcomes reporting: PHQ-9 and GAD-7 clinical improvement trends, engagement rates, utilization by care level, and demographic access data. Individual member data is never shared with employers or plan administrators, protecting member privacy.',
          },
          {
            q: 'How does Modern Health complement or replace behavioral health carve-outs?',
            a: 'Modern Health works alongside existing plan structures as an integrated mental health benefit — no separate carve-out enrollment, broader access (200+ countries, 80+ languages), and proactive reach into the moderate-need population that carve-outs rarely serve. The result: 20% member engagement vs. 2–4% for carve-out models, and actuarially validated savings of $2.39 per $1 invested.',
          },
        ],
        annotation: 'All three SEO brief keyQuestions answered verbatim. Reinforces integration simplicity, reporting transparency, and the carve-out replacement case.',
      },

      {
        type: 'content-ctas',
        heading: 'For your due diligence',
        items: [
          { kind: 'Research library', label: 'Peer-reviewed clinical evidence — 100+ published studies', toId: 'clinical-research' },
          { kind: 'Case studies', label: 'Enterprise client outcomes across industries and scale', toId: 'case-studies' },
        ],
        annotation: 'PROCESS — two supporting-content CTAs matching sitemap contentClusterCTAs for health-plans (clinical-research + case-studies). Framed for a plan buyer doing due diligence.',
      },

      {
        type: 'cta',
        heading: 'Ready to bring better behavioral health into your plan?',
        body: 'Connect with our partnerships team to explore how Modern Health integrates with your existing plan structure, coverage model, and member population.',
        primaryCta: { label: 'Connect with Partnerships Team', toId: 'nav-demo-request' },
        secondaryCta: { label: 'See clinical outcomes', toId: 'clinical-outcomes' },
        annotation: 'Final conversion. Primary CTA uses partnership language. Secondary keeps clinical proof path open for buyers still evaluating.',
      },

    ],
  },

  'channel-partners': {
    pageId: 'channel-partners',
    status: 'draft',
    blocks: [

      {
        type: 'hero',
        eyebrow: 'Channel Partners & Co-Sell',
        h1: 'Partner with Modern Health to Expand Your Benefits Portfolio',
        subhead: 'Modern Health equips PEOs, brokers, benefits platforms, and co-sell partners to bring evidence-based mental health to more employers — without building it yourself. Clinical credibility, global scale, and the commercial proof your clients ask for.',
        primaryCta: { label: 'Connect with Partnerships Team', toId: 'nav-demo-request' },
        secondaryCta: { label: 'See client outcomes', toId: 'case-studies' },
        annotation: 'H1 = brief recommendedH1. Names partner types immediately (PEOs, brokers, platforms) so the page self-selects in the first sentence. Partnership-first CTA distinguishes this from the employer demo request.',
      },

      {
        type: 'stats',
        items: [
          { value: '20%', label: 'workforce engagement (vs. 2–4% for EAPs) — what you can promise employer clients' },
          { value: '$2.39', label: 'return per $1 invested — the ROI story that closes every RFP' },
          { value: '200+', label: 'countries — global coverage your clients increasingly require' },
          { value: '100+', label: 'peer-reviewed publications — clinical credibility for procurement scrutiny' },
        ],
        annotation: 'Four stats a partner needs to sell MH to employers: engagement proof, ROI number, global scale, clinical credibility. Drawn from mh-brand-context.md.',
      },

      {
        type: 'cards',
        eyebrow: 'Partnership Models',
        heading: 'Who we partner with',
        lead: 'Modern Health works with partners at every layer of the benefits ecosystem — from distribution to platform integration.',
        cards: [
          { icon: '🏢', title: 'PEOs & Benefit Administrators', text: 'Embed Modern Health in your standard benefits package — clinical credibility that differentiates your offering to employer clients at every size.' },
          { icon: '🤝', title: 'Brokers & Consultants', text: 'Add Modern Health to the platforms you recommend — with RFP-defensible outcomes data and dedicated advisor support for every client conversation.' },
          { icon: '💻', title: 'Benefits Platforms', text: 'Integrate Modern Health into your benefits ecosystem — APIs, single sign-on, and a member experience that feels native to your platform.' },
          { icon: '🌍', title: 'Resellers & Co-Sell Partners', text: 'Bring Modern Health to the employers you serve — with co-sell support, partner enablement resources, and shared commercial upside.' },
        ],
        link: { label: 'Explore the consultant partnership model', toId: 'consultants' },
        annotation: 'Answers key question #1 (what partnership types). Establishes the four partner archetypes and orients the rest of the page. Link to consultants for the adjacent RFP/advisory use case called out in brief notes.',
      },

      {
        type: 'split',
        eyebrow: 'The Mental Health Gap',
        heading: 'Mental health is the benefits gap your employer clients can\'t ignore',
        body: [
          '84% of employers say mental health is a priority — but the EAP most of them offer reaches only 2–4% of the workforce. That\'s the gap your clients are increasingly asked to close, and the question every RFP now includes.',
          'Modern Health replaces that conversation. A platform with 20% engagement, 200+ countries, and $2.39 in actuarially validated ROI per $1 invested gives every employer in your portfolio a credible, defensible answer — and gives you a benefit that earns the recommendation.',
        ],
        mediaSide: 'left',
        media: { kind: 'chart', label: 'EAP utilization vs. Modern Health engagement gap' },
        link: { label: 'Why the EAP model falls short', toId: 'care-every-challenge' },
        annotation: 'Answers the unspoken partner question: why does MH belong in the portfolio? Uses the engagement gap to frame the commercial opportunity, not just the clinical one.',
      },

      {
        type: 'feature-grid',
        eyebrow: 'What Makes Modern Health Partner-Ready',
        heading: 'Built for distribution, not just direct',
        lead: 'Modern Health is designed to scale through partners — with the infrastructure, enablement materials, and commercial model to make every relationship work.',
        features: [
          { icon: '📋', title: 'RFP-ready documentation', text: 'Clinical outcomes data, security certifications, and named case studies — the materials your clients ask for at every stage of evaluation.' },
          { icon: '🔗', title: 'Platform integration', text: 'APIs and SSO for embedding Modern Health into your existing benefits stack. White-label options available for platform partners.' },
          { icon: '📚', title: 'Partner enablement', text: 'Sales materials, co-branded webinars, and advisor training so your team can recommend Modern Health confidently in any client conversation.' },
          { icon: '🌎', title: 'Global deployment', text: 'One contract, one platform — deploy across your entire employer portfolio in 200+ countries and 80+ languages.' },
        ],
        link: { label: 'How implementation works with clients', toId: 'partnering-with-your-team' },
        annotation: 'Answers key question #3 (partner resources and support). Covers the four partner-readiness dimensions: documentation, integration, enablement, global scale.',
      },

      {
        type: 'callout',
        eyebrow: 'The Commercial Case',
        heading: 'Add $2.39 in value for every $1 your clients invest',
        bigStat: { value: '$2.39', label: 'return per $1 invested — actuarially validated' },
        body: 'The number that comes up in every RFP, every client conversation, every budget justification. Modern Health\'s $2.39 ROI is actuarially validated — not a case study average, but a model built on actual claims and utilization data. The mechanism: reaching the 60% of the opportunity that lives in moderate-need employees, long before they become high-cost claims.',
        link: { label: 'The full economic model', toId: 'economic-roi' },
        annotation: 'Answers key question #2 (commercial model). Gives partners the core selling proof point and explains the counterintuitive mechanism (moderate-need, not crisis).',
      },

      {
        type: 'social-proof',
        heading: 'The outcomes your clients will ask for',
        logos: ['Autodesk', 'Atlassian', 'CEBT', 'Midland States Bank', 'WTW'],
        outcomes: [
          { client: 'Autodesk', stat: '3x engagement', detail: 'vs. prior mental health solution' },
          { client: 'CEBT', stat: '89% improved well-being', detail: 'Across 37,000 members' },
          { client: 'Midland States Bank', stat: '$110K cost reduction', detail: 'Mental health-related costs in year one' },
        ],
        testimonial: {
          quote: 'PLACEHOLDER — WTW\'s Joe Deba is a named Modern Health reference (advisor / partner context). Real quote needed before final.',
          attribution: 'Joe Deba, WTW — PLACEHOLDER',
        },
        link: { label: 'See all client outcomes', toId: 'case-studies' },
        annotation: 'Social proof. WTW included as partner-context reference. Testimonial is PLACEHOLDER — Joe Deba named in brand context but no real quote sourced. Outcomes drawn from mh-brand-context.md.',
      },

      {
        type: 'faq',
        heading: 'What partners ask before we start',
        items: [
          {
            q: 'What types of partnerships does Modern Health support?',
            a: 'PEOs and benefit administrators (embed in your standard package), brokers and consultants (add to your recommendation portfolio), benefits platforms (API/SSO integration), and co-sell/resell partners (shared commercial model). The structure adapts to how you work — not the other way around.',
          },
          {
            q: 'How does the channel partner model work commercially?',
            a: 'Partnerships are structured around your distribution model — co-sell revenue sharing, embedded pricing within existing packages, or reseller arrangements. Contract terms, pricing mechanics, and white-label options are discussed with our partnerships team; no one-size model.',
          },
          {
            q: 'What resources and support do partners receive?',
            a: 'RFP documentation, clinical outcomes data, co-branded materials, partner webinars, and sales enablement training. A dedicated partner success contact. Implementation and activation support for every employer client you bring on.',
          },
        ],
        annotation: 'All three SEO brief keyQuestions answered verbatim. Reinforces flexibility (partner types), commercial transparency (no fixed model), and partner enablement depth.',
      },

      {
        type: 'content-ctas',
        heading: 'Resources for your portfolio conversations',
        items: [
          { kind: 'Case studies', label: 'Client outcomes to share with every employer you advise', toId: 'case-studies' },
          { kind: 'Webinars', label: 'On-demand educational sessions for your team and clients', toId: 'past-webinars' },
        ],
        annotation: 'PROCESS — two supporting-content CTAs matching sitemap contentClusterCTAs for channel-partners (case-studies + past-webinars). Framed for a partner arming themselves for client conversations.',
      },

      {
        type: 'cta',
        heading: 'Let\'s talk about adding Modern Health to your portfolio',
        body: 'Connect with our partnerships team to explore the model that fits — co-sell, embed, integrate, or resell.',
        primaryCta: { label: 'Connect with Partnerships Team', toId: 'nav-demo-request' },
        secondaryCta: { label: 'Explore client outcomes', toId: 'case-studies' },
        annotation: 'Final conversion band. Partner language throughout. Secondary keeps the case study path open for partners still building their internal case.',
      },

    ],
  },

};
