# Page Content Drafting — Process & Handoff

How to draft marketing copy for a sitemap page, render it, and verify it. Built on the Employers pilot. Follow this end-to-end for each new page (Consultants, Members, Adaptive Care, etc.). Designed so any model or person can repeat it consistently.

---

## 0. What you're producing (per page)

| Deliverable | File | Role |
|---|---|---|
| Structured copy | `data/page-content.js` → `PAGE_CONTENT['<pageId>']` | **Source of truth.** The wireframe + the review doc both read from here. |
| Visual + document view | `content-wireframe.html` | Pick the page → **Wireframe** mode (page mockup) or **Document** mode (SEO brief + copy + a "Copy doc (Markdown)" button). No edits needed — it renders whatever is in `page-content.js`. |
| Review doc | `content/<pageId>.md` | SEO brief recap + full copy + a "Why" note per section. For offline review/markup. Mirror of `page-content.js`. |

`page-content.js` is authoritative. When copy changes, edit it there, then re-sync `content/<pageId>.md`.

---

## 1. Assemble the source bundle

For the target page, pull from the existing dashboard data — do **not** invent facts:

- **SEO brief** — `data/seo.js` → `SEO_DATA.pages['<pageId>']`: `primaryKeyword`, `secondaryKeywords`, `searchIntent`, `recommendedH1`, `titleTag`, `metaDescription`, `keyQuestions`, `brief.notes`, `brief.contentGaps`, `linksIn`/`linksOut`.
- **Page scaffold** — `data/sitemap.js` → the page's `pageContent`: `purpose`, `primaryAudiences`, `keyContent` (the section skeleton), `conversionActions`, `toneNote`, `crossLinks`, `contentClusterCTAs`.
- **Personas** — `data/personas.js`: for each `primaryAudience`, pull `jobStatement`, `functionalJobs`, `emotionalJobs`, `painPoints`, `successCriteria`, `anxieties`, `conversionAction`.
- **User stories** — `data/user-stories.js`: any story whose `pageIds` includes this page → what journeys route through it and what they need (e.g., a frictionless demo, a formal evaluation path).
- **Brand voice + proof + competitors** — `mh-brand-context.md`, including the **Competitive Landscape** section (Spring Health, Lyra, and how MH differentiates). Use real proof points; don't fabricate stats.

---

## 2. Draft

1. **Outline** the sections from `keyContent` + `keyQuestions` + `brief.contentGaps`, ordered for the buyer journey:
   hero → proof/stat bar → differentiation → the model/how it works → business case → global/scope → implementation → social proof → FAQ → keep-exploring → final CTA.
2. **Match a pattern to each section's job** (see §3). Vary the rhythm — no uniform eyebrow/headline/paragraph down the page.
3. **Write each section** in brand voice: work the **primary keyword** into the H1 + early body, secondaries where natural; answer the `keyQuestions`; speak to persona **pains/anxieties**; cite real proof points.
4. **Reuse** the page's `titleTag` (≤60) and `metaDescription` (≤155) straight from the SEO brief.

### Standing rules (from the client)
- **Two content-cluster CTAs near the bottom** (a `content-ctas` block, just above the final conversion CTA): broad suggestions into supporting content — `Blog post`, `Case Study`, `Care for Every Challenge`, or a guide. Phrase as a suggestion (e.g., "Blog post: 7 Signs Your EAP Needs a Modern Upgrade"); exact assets TBD.
- **Never link two adjacent sections to the same page.** If two neighbors both want the same target, send one elsewhere (the verifier checks this).
- **Social-proof links to the case-study index** ("See all client stories" → `case-studies`). If a `content-ctas` item is also a case study, make it a *specific* featured story so it's distinct from the index link.
- **Compete on frame, not call-outs** — don't name Spring Health / Lyra in customer-facing copy; differentiate on the category ("not another EAP") and on MH's adaptive/preventative/equitable/global story.

---

## 3. Pattern library (block types)

Each block is an object with a `type` and an optional `annotation` (internal "why" — shown only in Document mode + the `.md`, never in the visual wireframe). Cross-links use `{ label, toId }` where `toId` is a sitemap page id.

| `type` | Shape (key fields) | Use for |
|---|---|---|
| `hero` | `eyebrow, h1, subhead, primaryCta, secondaryCta` | Top of page. `h1` = brief's `recommendedH1`. |
| `stats` | `items:[{value,label}]` (4) | Proof bar high on the page. |
| `comparison` | `eyebrow, heading, lead, columns:{left,right}, rows:[{dimension,eap,mh}], link` | Us-vs-them (e.g., EAP vs Modern Health). |
| `cards` | `eyebrow, heading, lead, cards:[{icon,title,text}], footnote, link` | A set of parallel things (the 4 care modalities). |
| `callout` | `eyebrow, heading, bigStat:{value,label}, body, link` | Give one number visual weight (e.g., $2.39). |
| `split` | `eyebrow, heading, body:[..], media:{kind,label}, mediaSide:'left'|'right', link` | Text + visual zigzag (alternate `mediaSide` between split sections). |
| `feature-grid` | `eyebrow, heading, lead, features:[{icon,title,text}], footnote, link` | "What's included" (e.g., implementation support). |
| `section` | `eyebrow, heading, body:[..], link` | Plain prose. Use **sparingly** — it's the monotonous one. |
| `social-proof` | `heading, logos:[..], outcomes:[{client,stat,detail}], testimonial:{quote,attribution}, link` | Logo wall + named outcomes + pull-quote. |
| `faq` | `heading, items:[{q,a}]` | Answer the brief's `keyQuestions` verbatim. |
| `login-callout` | `heading, body, cta:{label,toId}` | Slim band for returning users (e.g. members → product login at `nav-member-login`). |
| `content-ctas` | `heading, items:[{kind,label,toId}]` (2) | The two supporting-content CTAs (standing rule). |
| `cta` | `heading, body, primaryCta, secondaryCta` | Final conversion band. |

Patterns mirror the live MH pages (icon grids, stat band, zigzag, feature carousel, accordion). `comparison` is the one "explore-beyond" addition — strong for differentiation.

The renderer in `content-wireframe.html` already supports all of these. Adding a brand-new pattern type means adding a case in three places there: `renderWireframe`, `blockToDoc`, and `toMarkdown`.

---

## 4. Add a page (mechanically)

1. Add `PAGE_CONTENT['<pageId>'] = { pageId, status:'draft', blocks:[ ... ] }` to `data/page-content.js`.
2. Create `content/<pageId>.md`: copy the structure of `content/employers.md` — SEO brief recap, then each section with its pattern label and a "Why" note.
3. Open `content-wireframe.html`, select the page, check both modes.
4. Run the verifier (§5). Fix anything it flags.

---

## 5. Verify (run before calling a page done)

From the `MH_Sitemap/` directory:

```bash
node -e "
const vm=require('vm'),fs=require('fs');const ctx={window:{}};vm.createContext(ctx);
['data/sitemap.js','data/seo.js','data/page-content.js'].forEach(f=>vm.runInContext(fs.readFileSync(f,'utf8'),ctx));
const PC=ctx.window.PAGE_CONTENT,SM=ctx.window.SITEMAP,SEO=ctx.window.SEO_DATA;
const byId={};SM.pages.forEach(p=>byId[p.id]=p);
const id=process.argv[1]||'employers';const page=PC[id];
if(!page){console.log('NO CONTENT for',id);process.exit(1);}
const types=page.blocks.map(b=>b.type);
console.log(id,'blocks:',types.join(' · '));
let adj=[];for(let i=1;i<types.length;i++)if(types[i]===types[i-1])adj.push(types[i]);
console.log('adjacent duplicate patterns:',adj.join(',')||'none');
const all=[];page.blocks.forEach(b=>{['link','primaryCta','secondaryCta'].forEach(k=>{if(b[k])all.push(b[k].toId);});(b.items||[]).forEach(it=>{if(it.toId)all.push(it.toId);});});
console.log('unresolved links:',[...new Set(all)].filter(x=>!byId[x]).join(',')||'none');
const links=page.blocks.map(b=>b.link?b.link.toId:null);
let ld=[];for(let i=1;i<links.length;i++)if(links[i]&&links[i]===links[i-1])ld.push(links[i]);
console.log('adjacent duplicate link targets:',ld.join(',')||'none');
const faq=page.blocks.find(b=>b.type==='faq');const kq=(SEO.pages[id]||{}).keyQuestions||[];
if(faq)console.log('keyQuestions answered in FAQ:',kq.filter(q=>faq.items.some(it=>it.q===q)).length+'/'+kq.length);
const s=SEO.pages[id]||{};
console.log('titleTag',(s.titleTag||'').length+'/60, meta',(s.metaDescription||'').length+'/155');
const cc=page.blocks.filter(b=>b.type==='content-ctas');
console.log('content-ctas blocks:',cc.length,'(expect 1, with 2 items:',cc[0]?cc[0].items.length:0,')');
" <pageId>
```

**Pass criteria:**
- `adjacent duplicate patterns: none`
- `unresolved links: none`
- `adjacent duplicate link targets: none`
- `keyQuestions answered in FAQ: N/N` (all answered)
- `titleTag ≤60, meta ≤155`
- exactly **1** `content-ctas` block with **2** items
- Proof points (stats, %s, $ figures) trace back to `mh-brand-context.md` — no invented numbers.

---

## 6. Status field

Each page carries `status` (`'draft'` → `'review'` → `'final'`), surfaced as a badge in the wireframe. Bump it as the page moves through review.
