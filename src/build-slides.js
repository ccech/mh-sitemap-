// Generates MH-Personas-UserStories.pptx from personas.json + user-stories.json
'use strict';

const fs      = require('fs');
const path    = require('path');
const pptx    = require('pptxgenjs');

const PERSONAS = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/personas.json'), 'utf8'));
const STORIES  = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/user-stories.json'), 'utf8'));

const prs = new pptx();

// ── Slide dimensions & shared constants ──────────────────────────────────────
prs.layout = 'LAYOUT_WIDE'; // 13.33" × 7.5"

const W      = 13.33;
const H      = 7.5;
const MARGIN = 0.45;
const BRAND  = '1E3A8A'; // dark blue fallback

function hex(str) { return str.replace('#', ''); }

// ── 1. Title slide ───────────────────────────────────────────────────────────
{
  const slide = prs.addSlide();
  slide.background = { color: '1E3A8A' };

  slide.addText('Modern Health', {
    x: MARGIN, y: 2.4, w: W - MARGIN * 2, h: 0.5,
    fontSize: 16, bold: false, color: 'FFFFFF', align: 'center', transparency: 40,
    fontFace: 'Calibri',
  });
  slide.addText('Personas & User Stories', {
    x: MARGIN, y: 2.95, w: W - MARGIN * 2, h: 0.9,
    fontSize: 42, bold: true, color: 'FFFFFF', align: 'center',
    fontFace: 'Calibri',
  });
  slide.addText('Website Redesign · Strategy Dashboard', {
    x: MARGIN, y: 3.9, w: W - MARGIN * 2, h: 0.4,
    fontSize: 14, color: 'FFFFFF', align: 'center', transparency: 45,
    fontFace: 'Calibri',
  });
  slide.addText(`8 buying group personas · 30 user stories`, {
    x: MARGIN, y: 6.6, w: W - MARGIN * 2, h: 0.35,
    fontSize: 12, color: 'FFFFFF', align: 'center', transparency: 55,
    fontFace: 'Calibri',
  });
}

// ── Helpers ──────────────────────────────────────────────────────────────────
function wrap(text, maxLen) {
  if (!text || text.length <= maxLen) return text || '';
  const words = text.split(' ');
  let line = '', out = '';
  for (const w of words) {
    if ((line + ' ' + w).trim().length > maxLen) {
      out += (out ? '\n' : '') + line.trim();
      line = w;
    } else {
      line = (line + ' ' + w).trim();
    }
  }
  if (line) out += (out ? '\n' : '') + line.trim();
  return out;
}

function bulletList(items, opts = {}) {
  return items.map(text => ({
    text: text,
    options: {
      bullet: { type: 'bullet', indent: opts.indent || 14 },
      fontSize: opts.fontSize || 11,
      color: opts.color || '374151',
      fontFace: 'Calibri',
      breakLine: true,
      paraSpaceAfter: opts.paraSpaceAfter || 4,
    },
  }));
}

// ── Per-persona slides ───────────────────────────────────────────────────────
for (const persona of PERSONAS.personas) {
  const stories = STORIES.userStories.filter(s => s.personaId === persona.id);
  const pColor  = hex(persona.color);
  const pLight  = hex(persona.colorLight);

  // ── Slide A: Persona overview ──────────────────────────────────────────────
  {
    const slide = prs.addSlide();

    // Left accent bar
    slide.addShape(prs.ShapeType.rect, {
      x: 0, y: 0, w: 0.08, h: H,
      fill: { color: pColor },
      line: { color: pColor },
    });

    // Top color band
    slide.addShape(prs.ShapeType.rect, {
      x: 0, y: 0, w: W, h: 1.4,
      fill: { color: pColor },
      line: { color: pColor },
    });

    // Persona number tag
    const num = String(PERSONAS.personas.indexOf(persona) + 1).padStart(2, '0');
    slide.addText(`Persona ${num}`, {
      x: MARGIN, y: 0.14, w: 2, h: 0.28,
      fontSize: 10, color: 'FFFFFF', transparency: 45, bold: true,
      fontFace: 'Calibri', charSpacing: 1.5,
    });

    // Icon + Name
    slide.addText(persona.icon, {
      x: MARGIN, y: 0.36, w: 0.7, h: 0.7,
      fontSize: 32, fontFace: 'Segoe UI Emoji',
    });
    slide.addText(persona.name, {
      x: MARGIN + 0.72, y: 0.36, w: 7, h: 0.48,
      fontSize: 26, bold: true, color: 'FFFFFF',
      fontFace: 'Calibri',
    });
    slide.addText(`${persona.role}  ·  ${persona.decisionPower}`, {
      x: MARGIN + 0.72, y: 0.84, w: 7, h: 0.3,
      fontSize: 12, color: 'FFFFFF', transparency: 35,
      fontFace: 'Calibri',
    });

    // Conversion pill (top right)
    slide.addShape(prs.ShapeType.roundRect, {
      x: W - 3.2, y: 0.42, w: 2.75, h: 0.5,
      fill: { color: 'FFFFFF', transparency: 80 },
      line: { color: 'FFFFFF', transparency: 50, width: 0.5 },
      rectRadius: 0.12,
    });
    slide.addText(`→ ${persona.conversionAction}`, {
      x: W - 3.2, y: 0.42, w: 2.75, h: 0.5,
      fontSize: 10, bold: true, color: 'FFFFFF', align: 'center',
      fontFace: 'Calibri',
    });

    // Job statement box
    slide.addShape(prs.ShapeType.rect, {
      x: MARGIN, y: 1.55, w: W - MARGIN * 2, h: 1.15,
      fill: { color: pLight },
      line: { color: pColor, width: 0.5 },
    });
    slide.addText([
      { text: 'Job To Be Done  ', options: { bold: true, fontSize: 9, color: pColor, charSpacing: 1, fontFace: 'Calibri' } },
      { text: '\n' + persona.jobStatement, options: { fontSize: 11, color: '1f2937', fontFace: 'Calibri', italic: true, lineSpacingMultiple: 1.2 } },
    ], {
      x: MARGIN + 0.18, y: 1.62, w: W - MARGIN * 2 - 0.36, h: 1.0,
      valign: 'top',
    });

    // Three columns: Pain Points / Success Criteria / Entry Points
    const colW  = (W - MARGIN * 2 - 0.3) / 3;
    const colY  = 2.88;
    const colH  = H - colY - 0.25;

    const cols = [
      { label: 'Pain Points',      items: persona.painPoints.slice(0, 4) },
      { label: 'Success on Site',  items: persona.successCriteria.slice(0, 4) },
      { label: 'Entry Points',     items: persona.entryPoints },
    ];

    cols.forEach((col, i) => {
      const x = MARGIN + i * (colW + 0.15);

      // Column header rule
      slide.addShape(prs.ShapeType.rect, {
        x, y: colY, w: colW, h: 0.03,
        fill: { color: pColor },
        line: { color: pColor },
      });
      slide.addText(col.label.toUpperCase(), {
        x, y: colY + 0.07, w: colW, h: 0.25,
        fontSize: 9, bold: true, color: pColor, charSpacing: 1,
        fontFace: 'Calibri',
      });

      // Items
      slide.addText(bulletList(col.items, { fontSize: 11, color: '374151', paraSpaceAfter: 5 }), {
        x: x + 0.04, y: colY + 0.36, w: colW - 0.04, h: colH - 0.36,
        valign: 'top',
      });
    });

    // Slide footer
    slide.addText(`Modern Health · Website Redesign Strategy  |  ${persona.name}`, {
      x: MARGIN, y: H - 0.22, w: W - MARGIN * 2, h: 0.2,
      fontSize: 8, color: '9ca3af', fontFace: 'Calibri',
    });
  }

  // ── Slide B: User stories ──────────────────────────────────────────────────
  {
    const slide = prs.addSlide();

    // Left accent bar
    slide.addShape(prs.ShapeType.rect, {
      x: 0, y: 0, w: 0.08, h: H,
      fill: { color: pColor },
      line: { color: pColor },
    });

    // Header band
    slide.addShape(prs.ShapeType.rect, {
      x: 0, y: 0, w: W, h: 0.75,
      fill: { color: pColor },
      line: { color: pColor },
    });
    slide.addText(`${persona.icon}  ${persona.name}  —  User Stories`, {
      x: MARGIN, y: 0.1, w: W - MARGIN * 2 - 1, h: 0.55,
      fontSize: 20, bold: true, color: 'FFFFFF',
      fontFace: 'Calibri',
    });

    // Story cards
    const cardW = (W - MARGIN * 2 - 0.24) / 3;
    const cardX = [MARGIN, MARGIN + cardW + 0.12, MARGIN + (cardW + 0.12) * 2];
    const cardY = 0.9;
    const cardH = H - cardY - 0.3;

    stories.slice(0, 3).forEach((story, i) => {
      const x = cardX[i];
      const priorityLabel = story.priority === 1 ? 'Priority 1 — Must Have' : 'Priority 2 — Should Have';
      const priorityColor = story.priority === 1 ? pColor : '6b7280';

      // Card background
      slide.addShape(prs.ShapeType.rect, {
        x, y: cardY, w: cardW, h: cardH,
        fill: { color: 'f9fafb' },
        line: { color: 'd1d5db', width: 0.5 },
      });

      // Priority strip at top of card
      slide.addShape(prs.ShapeType.rect, {
        x, y: cardY, w: cardW, h: 0.06,
        fill: { color: priorityColor },
        line: { color: priorityColor },
      });

      let yOffset = cardY + 0.14;

      // Story ID + priority label
      slide.addText(`${story.id.toUpperCase()}  ·  ${priorityLabel}`, {
        x: x + 0.12, y: yOffset, w: cardW - 0.24, h: 0.22,
        fontSize: 8.5, bold: true, color: priorityColor, charSpacing: 0.5,
        fontFace: 'Calibri',
      });
      yOffset += 0.24;

      // JTBD heading rule
      slide.addShape(prs.ShapeType.rect, {
        x: x + 0.12, y: yOffset, w: cardW - 0.24, h: 0.02,
        fill: { color: 'e5e7eb' },
        line: { color: 'e5e7eb' },
      });
      yOffset += 0.1;

      // JTBD text
      slide.addText(story.jobToBeDone, {
        x: x + 0.12, y: yOffset, w: cardW - 0.24, h: 0.9,
        fontSize: 11.5, bold: true, color: '111827',
        fontFace: 'Calibri', lineSpacingMultiple: 1.2, valign: 'top',
        wrap: true,
      });
      yOffset += 0.98;

      // Entry channel
      slide.addText([
        { text: 'Entry  ', options: { bold: true, fontSize: 9, color: '6b7280', fontFace: 'Calibri' } },
        { text: story.entryChannel, options: { fontSize: 9, color: '6b7280', fontFace: 'Calibri' } },
      ], {
        x: x + 0.12, y: yOffset, w: cardW - 0.24, h: 0.28,
        valign: 'top', wrap: true,
      });
      yOffset += 0.34;

      // Success metric label
      slide.addShape(prs.ShapeType.rect, {
        x: x + 0.12, y: yOffset, w: cardW - 0.24, h: 0.02,
        fill: { color: 'e5e7eb' },
        line: { color: 'e5e7eb' },
      });
      yOffset += 0.1;
      slide.addText('Success Metric', {
        x: x + 0.12, y: yOffset, w: cardW - 0.24, h: 0.2,
        fontSize: 8.5, bold: true, color: '6b7280', charSpacing: 0.5,
        fontFace: 'Calibri',
      });
      yOffset += 0.2;
      slide.addText(story.successMetric, {
        x: x + 0.12, y: yOffset, w: cardW - 0.24, h: 0.85,
        fontSize: 10.5, color: '374151', fontFace: 'Calibri',
        lineSpacingMultiple: 1.2, valign: 'top', wrap: true, italic: true,
      });
      yOffset += 0.92;

      // Content gap note (if exists)
      if (story.contentGapNote) {
        const isGap = story.contentGapNote.startsWith('GAP:');
        const gapText = story.contentGapNote.replace(/^(GAP|NOTE):\s*/, '');
        const gapColor = isGap ? 'fef2f2' : 'fffbeb';
        const gapBorder = isGap ? 'fca5a5' : 'fde68a';
        const gapTextColor = isGap ? '7f1d1d' : '78350f';
        const gapLabel = isGap ? '⚠ Gap' : '● Note';
        const gapLabelColor = isGap ? 'dc2626' : 'd97706';
        const remaining = cardY + cardH - yOffset - 0.12;

        if (remaining > 0.3) {
          slide.addShape(prs.ShapeType.rect, {
            x: x + 0.12, y: yOffset, w: cardW - 0.24, h: Math.min(remaining, 1.2),
            fill: { color: gapColor },
            line: { color: gapBorder, width: 0.5 },
          });
          slide.addText([
            { text: gapLabel + '  ', options: { bold: true, fontSize: 8.5, color: gapLabelColor, fontFace: 'Calibri' } },
            { text: gapText, options: { fontSize: 9.5, color: gapTextColor, fontFace: 'Calibri', lineSpacingMultiple: 1.15 } },
          ], {
            x: x + 0.2, y: yOffset + 0.07, w: cardW - 0.4, h: Math.min(remaining, 1.2) - 0.1,
            valign: 'top', wrap: true,
          });
        }
      }
    });

    // Footer
    slide.addText(`Modern Health · Website Redesign Strategy  |  ${persona.name} — User Stories`, {
      x: MARGIN, y: H - 0.22, w: W - MARGIN * 2, h: 0.2,
      fontSize: 8, color: '9ca3af', fontFace: 'Calibri',
    });
  }
}

// ── Last slide: secondary audiences ─────────────────────────────────────────
{
  const slide = prs.addSlide();
  slide.background = { color: 'f9fafb' };

  slide.addShape(prs.ShapeType.rect, {
    x: 0, y: 0, w: 0.08, h: H,
    fill: { color: '9ca3af' }, line: { color: '9ca3af' },
  });
  slide.addText('Secondary Audiences', {
    x: MARGIN, y: 0.55, w: W - MARGIN * 2, h: 0.6,
    fontSize: 28, bold: true, color: '374151', fontFace: 'Calibri',
  });
  slide.addText('Not part of the buying committee — referenced in site content for audience targeting.', {
    x: MARGIN, y: 1.2, w: W - MARGIN * 2, h: 0.35,
    fontSize: 13, color: '6b7280', fontFace: 'Calibri',
  });

  PERSONAS.secondaryAudiences.forEach((p, i) => {
    const x = MARGIN + i * ((W - MARGIN * 2) / 2 + 0.1);
    const y = 1.8;
    const w = (W - MARGIN * 2) / 2 - 0.1;

    slide.addShape(prs.ShapeType.rect, {
      x, y, w, h: 2.0,
      fill: { color: 'FFFFFF' },
      line: { color: 'd1d5db', width: 0.5 },
    });
    slide.addShape(prs.ShapeType.rect, {
      x, y, w, h: 0.06,
      fill: { color: '9ca3af' }, line: { color: '9ca3af' },
    });
    slide.addText(p.name, {
      x: x + 0.18, y: y + 0.16, w: w - 0.36, h: 0.35,
      fontSize: 16, bold: true, color: '374151', fontFace: 'Calibri',
    });
    slide.addText(p.role, {
      x: x + 0.18, y: y + 0.52, w: w - 0.36, h: 0.25,
      fontSize: 11, color: '6b7280', fontFace: 'Calibri',
    });
    slide.addText(p.note, {
      x: x + 0.18, y: y + 0.88, w: w - 0.36, h: 1.0,
      fontSize: 11, color: '4b5563', fontFace: 'Calibri',
      lineSpacingMultiple: 1.3, valign: 'top', wrap: true,
    });
  });

  slide.addText(`Modern Health · Website Redesign Strategy  |  Secondary Audiences`, {
    x: MARGIN, y: H - 0.22, w: W - MARGIN * 2, h: 0.2,
    fontSize: 8, color: '9ca3af', fontFace: 'Calibri',
  });
}

// ── Write file ───────────────────────────────────────────────────────────────
const outPath = path.join(__dirname, '../MH-Personas-UserStories.pptx');
prs.writeFile({ fileName: outPath }).then(() => {
  console.log(`Written: ${outPath}`);
}).catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
