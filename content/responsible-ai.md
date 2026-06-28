# Responsible AI — Page Content

_Source of truth: `data/page-content.js` (`PAGE_CONTENT['responsible-ai']`); view it in `content-wireframe.html`. Each section uses a layout **pattern** matched to its job (noted in brackets). Drafted via `content/PROCESS.md`._

> **Audience:** Clinical evaluators, legal/compliance teams, and enterprise procurement reviewers who need to understand specifically how Modern Health uses AI and what guardrails are in place. Voice: transparent and specific — names the AI assistant (Skye), lists its four defined functions, and makes the human oversight model explicit. Conversion: Request a Demo (framed as a governance walkthrough).
>
> **Key frame:** "Human oversight, not AI capability" per the brief. This page leads with what AI cannot do (make clinical decisions alone) before explaining what it can do. The anchor stat is `0` — clinical decisions executed by AI without human review.
>
> **AI assistant name:** Skye — Modern Health's AI layer, always optional for members. Drawn from mh-brand-context.md Skye AI Assistant section.
>
> **Content gaps closed:** Specific AI use cases explained plainly (four functions), human oversight model (design constraint framing), bias audit process (provider network as structural foundation), data privacy in AI context (de-identified training data, HIPAA, SOC 2).
>
> **Placeholder flag:** Social-proof testimonial is a **PLACEHOLDER** — no AI-governance-specific quote sourced. A quote from an enterprise HR leader, clinical officer, or legal/procurement reviewer about Modern Health's AI transparency during their evaluation would be the strongest possible anchor. Needed before final.

---

## SEO Brief (the content follows this)

- **Primary keyword:** responsible AI in mental health
- **Secondary keywords:** AI mental health safety · ethical AI mental health · AI mental health benefits
- **Title tag (47/60):** `Responsible AI in Mental Health | Modern Health`
- **Meta description (143/155):** `Modern Health's approach to responsible AI — clinical oversight, bias mitigation, transparency, and human-in-the-loop safeguards at every step.`
- **Recommended H1:** Responsible AI in Mental Health: Our Principles and Safeguards
- **Search intent:** Clinical evaluators, legal, and procurement teams assessing how Modern Health uses AI responsibly and what safeguards are in place.
- **Primary audiences:** HR / Benefits Manager · Partner
- **Key questions the page must answer:**
  1. How does Modern Health use AI in its platform?
  2. What safeguards prevent AI from making clinical decisions alone?
  3. How does Modern Health address bias in AI-driven matching?
  4. What is the role of human clinicians alongside AI?
- **Primary conversion:** Request a Demo · **Cross-links out:** `clinical-quality-standards`, `clinical-outcomes`, `provider-network`, `case-studies`, `clinical-research`

---

## Page Copy

### [HERO] — Our Approach · Responsible AI

**H1:** Responsible AI in Mental Health: Our Principles and Safeguards

Modern Health uses AI to support care — not replace it. Every AI feature is optional, member-controlled, and subject to clinician review. Here's exactly how it works.

**CTAs:** Request a Demo · See our clinical quality framework

> _Why:_ Per brief: "Lead with human oversight, not AI capability." The subhead is structured as three commitments (optional, member-controlled, clinician-reviewed) before promising full explanation — frames the page as a disclosure, not a pitch.

---

### [STAT BAND]

**0** — clinical decisions made by AI without human review — AI flags, humans decide  ·  **100+** — peer-reviewed publications informing the clinical evidence base Skye draws from  ·  **Always optional** — Skye AI can be declined at any point without affecting access to care  ·  **SOC 2** — Type II certified — AI operates within the same data security framework as the full platform

> _Why:_ Four procurement-facing facts: human oversight (0 autonomous decisions), evidence grounding (100+), member control (always optional), compliance (SOC 2). "0 clinical decisions without human review" is the anchor stat — names the most important safeguard in the most direct possible way.

---

### [SPLIT / ZIGZAG] — What Skye Does

**Four specific uses — each with a human check** _(text left · "Skye: four functions, each with human review gate" diagram right)_

Skye is Modern Health's AI assistant. It serves four defined functions, and only those four. No autonomous action — every output is a recommendation, a draft, or a flag that a human then reviews.

**Adaptive care plan creation:** when a member completes the intake assessment, Skye proposes a starting point — coaching, therapy, a Pathway, or a combination. The member decides. **Care plan monitoring:** Skye monitors engagement patterns and assessment scores over time, and surfaces updates to the care team when a member's needs appear to have shifted — no re-routing without clinician review. **Content recommendations:** between sessions, Skye surfaces relevant Pathways modules and self-guided exercises based on care history. Members can dismiss any suggestion. **Provider documentation:** Skye drafts session summaries and care notes for providers. Providers review, edit, and approve all AI-drafted content before it becomes part of the care record.

_Cross-link:_ → The clinical quality standards AI operates within (/our-approach/clinical-quality-standards)

> _Why:_ Closes the primary content gap from the brief: "specific AI use cases explained plainly." Four functions named with their human check. "Four defined functions, and only those four" limits scope explicitly — the trust-building move on a page read by procurement.

---

### [FEATURE GRID] — Four Governance Principles

**The design constraints that govern every AI feature we build**

_Lead:_ Responsible AI isn't a policy document — it's a set of design constraints applied before a feature ships and audited after.

- **👤 Human in the loop:** Every AI action that affects clinical care requires human review before it takes effect. AI flags and drafts; clinicians and members decide. No clinical recommendation, care escalation, or crisis response is automated.
- **🔘 Member control:** Skye is always optional. Members can decline any AI feature — care plan suggestions, content recommendations, matching support — at any point, without losing access to human care.
- **🔒 Privacy-first training:** Skye's models are trained exclusively on de-identified clinical outcomes data — never on identifiable member information. HIPAA compliance is maintained across all AI operations, with no identifiable data used in model training.
- **⚖️ Bias mitigation:** Matching factors are audited for demographic bias on an ongoing basis. The 46% BIPOC provider network and 80+ language coverage are the structural foundation — the matching algorithm can only recommend what the network contains, and the network is built to reflect real workforce diversity.

_Cross-link:_ → The provider network the matching AI draws from (/our-approach/provider-network)

> _Why:_ Closes three content gaps from the brief: human oversight model (feature 1), data privacy in AI context (feature 3), bias audit process (feature 4). "Design constraints applied before a feature ships" is more credible than a policy statement — it says this is structural, not aspirational.

---

### [COMPARISON TABLE] — Governance Models

**AI as decision-support — not decision-maker**

_Lead:_ Enterprise procurement increasingly distinguishes between platforms where AI decides and platforms where AI informs. Here's where Modern Health sits.

| Dimension | AI-Decides Model | Modern Health's Model |
|---|---|---|
| Clinical decisions | AI generates and implements recommendations autonomously | AI generates; clinician reviews and approves before any action |
| Crisis response | Automated escalation — no human in the loop | Care team notified; human follow-up required before any escalation |
| Provider matching | Algorithm selects provider | Algorithm proposes; member chooses from presented options |
| Model training data | User data — often identifiable | De-identified clinical outcomes only — no identifiable member data |
| Member opt-out | Opt-out available, but affects features | Always optional — declining AI never affects access to human care |

_Cross-link:_ → Clinical outcomes this governance model produces (/our-approach/clinical-outcomes)

> _Why:_ Answers key question #2 (safeguards against AI making clinical decisions alone). Frames the governance spectrum without naming competitors. Each row is a procurement evaluation criterion — the five most common AI due diligence questions.

---

### [CALLOUT BAND] — The Non-Negotiable

**Skye is always optional — and never the decision-maker**

**0** clinical decisions executed by AI without human review

No matter how confident Skye's recommendation is, the member decides whether to follow it, and the clinician decides whether to act on it. This isn't a feature toggle — it's a design constraint that governs every AI function Modern Health builds. If a function can't be built within that constraint, it doesn't ship.

_Cross-link:_ → The clinical standards this constraint enforces (/our-approach/clinical-quality-standards)

> _Why:_ "It doesn't ship" is a stronger commitment than "we have safeguards" — names the consequence of violating the constraint. The 0 stat repeated here gives visual weight to the most important claim on the page.

---

### [SOCIAL PROOF] — Enterprise clients who evaluated — and approved — the full governance model

**Logos:** Atlassian · CEBT · WTW · Rubrik

- **CEBT** — 37,000 members — Full AI governance and data privacy review completed during procurement
- **Atlassian** — 52% registration rate — Global AI governance reviewed by international privacy and legal teams
- **WTW** — Named advisory reference — Joe Deba — recommending Modern Health to enterprise clients through rigorous AI evaluation

> **⚠️ PLACEHOLDER:** No AI-governance-specific testimonial sourced. A quote from an enterprise HR leader, clinical officer, or legal/procurement reviewer about Modern Health's AI transparency during evaluation would be the strongest possible anchor for this page. Needed before final.

_Cross-link:_ → See all enterprise client outcomes (/case-studies)

> _Why:_ Proof framed around enterprise evaluation — not "clients love Skye," but "clients with rigorous procurement ran the AI governance gauntlet and approved." Right frame for a page read by legal/compliance teams.

---

### [ACCORDION FAQ] — What clinical evaluators and legal teams ask about AI

**Q: How does Modern Health use AI in its platform?**
Modern Health's AI assistant, Skye, serves four defined functions: creating an adaptive care plan recommendation based on member intake data; surfacing personalized content and Pathways recommendations between sessions; drafting administrative documentation (session summaries, care notes) for provider review; and monitoring engagement patterns to flag members who may need additional support for care team follow-up. Every function is optional for members and subject to clinician review — Skye informs decisions, it does not make them.

**Q: What safeguards prevent AI from making clinical decisions alone?**
Every AI action that affects clinical care requires human review before it takes effect. Skye drafts; clinicians approve. Skye flags; the care team follows up. Crisis escalation is never automated — a human care team member reviews all escalation signals before any outreach. This is a design constraint, not a policy: Modern Health does not ship AI features that execute clinical actions without a human review gate.

**Q: How does Modern Health address bias in AI-driven matching?**
Matching factors are audited for demographic bias on an ongoing basis — including language, cultural background, specialty preference, and access patterns by population segment. The structural foundation for bias mitigation is the provider network itself: 46% of providers identify as BIPOC and the network supports 80+ languages, which means the matching algorithm has genuinely diverse options to recommend. AI-driven matching cannot overcome a homogeneous provider network — which is why the network diversity is built first.

**Q: What is the role of human clinicians alongside AI?**
Human clinicians are the final authority on all clinical decisions. Skye operates in a support and documentation role — it prepares information for the clinician, not from the clinician. Providers use Skye primarily to reduce administrative burden (session documentation, care plan drafting), freeing more time for the clinical relationship itself. The 4.9/5 average provider rating reflects the outcome of that human relationship. AI handles paperwork; clinicians handle care.

> _Why:_ All four SEO brief keyQuestions answered verbatim. Q3 explicitly connects bias mitigation to the provider network's structural diversity — closes the "bias audit process" content gap. Q2 uses "design constraint, not a policy" to make the safeguard structural rather than aspirational.

---

### [CONTENT CTAs] — Go deeper on governance and evidence

- **Research library:** Our clinical evidence and governance standards → Clinical Research (/our-approach/clinical-research)
- **Case studies:** How enterprise clients evaluated and trust our platform → Case Studies (/case-studies)

> _Why:_ **Process** — two CTAs matching sitemap contentClusterCTAs for responsible-ai (clinical-research + case-studies). Framed for a procurement evaluator going deeper on evidence and peer references.

---

### [CTA BAND] — AI governance you can show to your legal team — and your clinical officers

Request a walkthrough of Modern Health's AI governance model — the human oversight protocols, the privacy architecture, the bias audit process, and what SOC 2 Type II certification means for your data in practice.

**CTAs:** Request a Demo · See clinical outcomes under this model

> _Why:_ Body frames the demo as a governance walkthrough — three specific review items (oversight protocols, privacy, bias audit) reduce the commitment threshold for a legal/compliance buyer. Secondary CTA routes to clinical-outcomes — shows what the governance model produces in practice.
