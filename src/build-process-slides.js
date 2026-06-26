'use strict';
// Generates MH-Process-Overview.pptx — 2 slides explaining the strategy process

const fs   = require('fs');
const path = require('path');
const pptx = require('pptxgenjs');

const HEAT   = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/heat-map.json'), 'utf8'));
const PERSONAS = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/personas.json'), 'utf8'));

const prs = new pptx();
prs.layout = 'LAYOUT_WIDE'; // 13.33" × 7.5"

const W      = 13.33;
const H      = 7.5;
const MARGIN = 0.45;
const BLUE   = '1E3A8A';
const BLUE2  = '2563EB';
const SLATE  = '374151';
const MUTED  = '6B7280';
const BORDER = 'E5E7EB';

// ── Shared helpers ────────────────────────────────────────────────────────────
function rect(slide, x, y, w, h, fill, line) {
  slide.addShape(prs.ShapeType.rect, {
    x, y, w, h,
    fill: { color: fill },
    line: { color: line || fill },
  });
}

function txt(slide, text, x, y, w, h, opts = {}) {
  slide.addText(text, {
    x, y, w, h,
    fontFace: 'Calibri',
    ...opts,
  });
}

// ──────────────────────────────────────────────────────────────────────────────
// SLIDE 1 — The Process
// ──────────────────────────────────────────────────────────────────────────────
{
  const slide = prs.addSlide();

  // Background
  slide.background = { color: 'FFFFFF' };

  // Top accent bar
  rect(slide, 0, 0, W, 0.06, BLUE2);

  // Slide title
  txt(slide, 'How We Got Here', MARGIN, 0.22, 8, 0.55, {
    fontSize: 28, bold: true, color: BLUE,
  });
  txt(slide, 'From audience research to a validated sitemap and heat-scored page priorities', MARGIN, 0.78, 9, 0.35, {
    fontSize: 13, color: MUTED,
  });

  // ── Process steps ──────────────────────────────────────────────────────────
  const steps = [
    {
      num: '1',
      title: 'Personas',
      body: 'Defined 8 buying group roles — who visits the site, what job each person is trying to do, and what success looks like for them.',
      color: '2563EB',
      light: 'EFF6FF',
    },
    {
      num: '2',
      title: 'User Stories',
      body: '3 stories per persona (30 total). Each story captures a specific job-to-be-done and flags where the current site fails to support it.',
      color: '7C3AED',
      light: 'F5F3FF',
    },
    {
      num: '3',
      title: 'Sitemap +\nContent Map',
      body: '73-page sitemap paired with the content map — establishing exactly what pages exist and what content actually lives on each one.',
      color: '0891B2',
      light: 'ECFEFF',
    },
    {
      num: '4',
      title: 'User Journey\nMapping',
      body: 'Traced how each persona moves through the sitemap step by step — from entry point to conversion — based on their user stories.',
      color: '059669',
      light: 'F0FDF4',
    },
    {
      num: '5',
      title: 'Scoring &\nAnalysis',
      body: 'Every page scored across 5 signals: story coverage, conversion proximity, entry frequency, drop-off risk, and audience overlap.',
      color: 'B45309',
      light: 'FFFBEB',
    },
  ];

  const stepCount = steps.length;
  const arrowW = 0.28;
  const totalArrows = stepCount - 1;
  const available = W - MARGIN * 2;
  const stepW = (available - totalArrows * arrowW) / stepCount;
  const stepY = 1.3;
  const stepH = H - stepY - 0.32;

  steps.forEach((step, i) => {
    const x = MARGIN + i * (stepW + arrowW);

    // Card shadow effect
    rect(slide, x + 0.04, stepY + 0.06, stepW, stepH, 'F3F4F6', 'F3F4F6');

    // Card background
    rect(slide, x, stepY, stepW, stepH, 'FFFFFF', BORDER);

    // Top color bar
    rect(slide, x, stepY, stepW, 0.06, step.color);

    // Number circle background
    rect(slide, x + 0.15, stepY + 0.16, 0.38, 0.38, step.light, step.light);
    txt(slide, step.num, x + 0.15, stepY + 0.16, 0.38, 0.38, {
      fontSize: 16, bold: true, color: step.color, align: 'center', valign: 'middle',
    });

    // Step title
    txt(slide, step.title, x + 0.15, stepY + 0.6, stepW - 0.3, 0.55, {
      fontSize: 13.5, bold: true, color: SLATE,
      lineSpacingMultiple: 1.15,
    });

    // Step body
    txt(slide, step.body, x + 0.15, stepY + 1.22, stepW - 0.3, stepH - 1.38, {
      fontSize: 10.5, color: MUTED, lineSpacingMultiple: 1.35, valign: 'top', wrap: true,
    });

    // Arrow between steps
    if (i < stepCount - 1) {
      const ax = x + stepW + 0.04;
      const ay = stepY + stepH / 2 - 0.14;
      slide.addShape(prs.ShapeType.rightArrow, {
        x: ax, y: ay, w: arrowW - 0.08, h: 0.28,
        fill: { color: 'D1D5DB' },
        line: { color: 'D1D5DB' },
      });
    }
  });

  // Footer
  txt(slide, 'Modern Health · Website Redesign Strategy', MARGIN, H - 0.22, W - MARGIN * 2, 0.2, {
    fontSize: 8, color: 'D1D5DB',
  });
}

// ──────────────────────────────────────────────────────────────────────────────
// SLIDE 2 — What It Gives Us
// ──────────────────────────────────────────────────────────────────────────────
{
  const slide = prs.addSlide();
  slide.background = { color: 'FFFFFF' };

  rect(slide, 0, 0, W, 0.06, BLUE2);

  txt(slide, 'What It Gives Us', MARGIN, 0.22, 9, 0.55, {
    fontSize: 28, bold: true, color: BLUE,
  });
  txt(slide, 'Three outputs that make every content and design decision audience-driven instead of assumed', MARGIN, 0.78, 10, 0.35, {
    fontSize: 13, color: MUTED,
  });

  // ── Three output cards ─────────────────────────────────────────────────────
  const outputs = [
    {
      num: '01',
      title: 'Validated Sitemap',
      color: '2563EB',
      light: 'EFF6FF',
      headline: 'Every page tested against every audience.',
      body: 'By mapping all 8 personas through the 73-page sitemap, we can see which pages are carrying the evaluation, which are being skipped entirely, and where the IA creates dead ends for specific buyers. The sitemap is no longer a guess — it\'s been stress-tested.',
      stat: '73',
      statLabel: 'pages validated',
      stat2: '8',
      stat2Label: 'personas mapped',
    },
    {
      num: '02',
      title: 'Strategic Heat Map',
      color: 'DC2626',
      light: 'FEF2F2',
      headline: 'Clear view of where to invest.',
      body: 'Every page scored across 5 weighted signals. High-heat pages are where buyers spend time, where deals stall, and where design and content investment will have the most impact. Low-heat pages are valid in the nav — they\'re just not worth homepage real estate.',
      stat: String(HEAT.summary.high),
      statLabel: 'high-heat pages',
      stat2: String(HEAT.summary.medium),
      stat2Label: 'medium-heat pages',
    },
    {
      num: '03',
      title: 'Homepage Routing Brief',
      color: '059669',
      light: 'F0FDF4',
      headline: 'The homepage is a routing layer, not a brand statement.',
      body: 'The heat map tells us which pages earn above-the-fold visibility and which CTAs belong at the top of the page. A refreshed homepage routes each persona to their highest-value destination in as few clicks as possible — grounded in how they actually navigate, not how the team imagines they do.',
      stat: '5',
      statLabel: 'above-fold pages',
      stat2: '2',
      stat2Label: 'primary paths',
    },
  ];

  const cardW = (W - MARGIN * 2 - 0.24) / 3;
  const cardY = 1.26;
  const cardH = H - cardY - 0.7;

  outputs.forEach((out, i) => {
    const x = MARGIN + i * (cardW + 0.12);

    // Shadow
    rect(slide, x + 0.04, cardY + 0.05, cardW, cardH, 'F3F4F6', 'F3F4F6');

    // Card
    rect(slide, x, cardY, cardW, cardH, 'FFFFFF', BORDER);

    // Left accent
    rect(slide, x, cardY, 0.06, cardH, out.color);

    // Header area
    rect(slide, x, cardY, cardW, 0.62, out.light, out.light);

    // Number
    txt(slide, out.num, x + 0.18, cardY + 0.1, 0.5, 0.42, {
      fontSize: 18, bold: true, color: out.color, valign: 'middle',
    });

    // Title
    txt(slide, out.title, x + 0.18, cardY + 0.12, cardW - 0.3, 0.4, {
      fontSize: 15, bold: true, color: out.color, valign: 'middle',
    });

    let yOff = cardY + 0.76;

    // Headline
    txt(slide, out.headline, x + 0.18, yOff, cardW - 0.3, 0.38, {
      fontSize: 11.5, bold: true, color: SLATE, lineSpacingMultiple: 1.2,
    });
    yOff += 0.44;

    // Body
    txt(slide, out.body, x + 0.18, yOff, cardW - 0.3, 1.7, {
      fontSize: 10.5, color: MUTED, lineSpacingMultiple: 1.4, valign: 'top', wrap: true,
    });
    yOff += 1.78;

    // Stats row
    rect(slide, x + 0.12, yOff, cardW - 0.24, 0.01, BORDER, BORDER);
    yOff += 0.12;

    const statW = (cardW - 0.36) / 2;
    [[out.stat, out.statLabel], [out.stat2, out.stat2Label]].forEach(([num, label], j) => {
      const sx = x + 0.18 + j * (statW + 0.06);
      txt(slide, num, sx, yOff, statW, 0.42, {
        fontSize: 26, bold: true, color: out.color,
      });
      txt(slide, label, sx, yOff + 0.4, statW, 0.22, {
        fontSize: 9.5, color: MUTED,
      });
    });
  });

  // Bottom statement
  const bY = H - 0.56;
  rect(slide, MARGIN, bY, W - MARGIN * 2, 0.36, 'F9FAFB', BORDER);
  txt(slide,
    'Before this process, the site was built on assumptions — no defined personas, no user stories, no validated paths. Now every page, every CTA, and every homepage decision has an audience behind it.',
    MARGIN + 0.2, bY + 0.05, W - MARGIN * 2 - 0.4, 0.28, {
      fontSize: 10.5, color: SLATE, italic: true, align: 'center',
    });

  txt(slide, 'Modern Health · Website Redesign Strategy', MARGIN, H - 0.18, W - MARGIN * 2, 0.18, {
    fontSize: 8, color: 'D1D5DB',
  });
}

// ── Write ─────────────────────────────────────────────────────────────────────
const out = path.join(__dirname, '../MH-Process-Overview.pptx');
prs.writeFile({ fileName: out }).then(() => {
  console.log(`Written: ${out}`);
}).catch(err => { console.error(err); process.exit(1); });
