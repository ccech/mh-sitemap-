INPUTS FOLDER
=============

Drop raw client input files here.

Expected files:
  sitemap.*      — Client sitemap (CSV, JSON, Excel export, or paste as text)
  jtbd.*         — Jobs-to-be-Done document (once provided)

After adding sitemap:
1. Parse pages into data/sitemap.json (id, name, url, navTier, parent)
2. Assign pageIds[] in data/user-stories.json for each user story
3. Run: npm run build
4. Open index.html to review heat map
