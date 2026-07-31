#!/usr/bin/env node
'use strict';
const fs = require('fs');
const text = process.argv[2] ? fs.readFileSync(process.argv[2], 'utf8') : fs.readFileSync(0, 'utf8');
const g = { feat: [], fix: [], docs: [], chore: [], other: [] };
for (const raw of text.split(/\r?\n/)) {
  const line = raw.replace(/^[a-f0-9]+\s+/i, '').trim();
  if (!line) continue;
  const m = line.match(/^(feat|fix|docs|chore)(\(.+?\))?:\s*(.+)$/i);
  if (m) g[m[1].toLowerCase()].push(m[3] || line);
  else g.other.push(line);
}
for (const [k, arr] of Object.entries(g)) {
  if (!arr.length) continue;
  console.log('###', k);
  arr.forEach((x) => console.log('-', x));
  console.log('');
}
