# commit-brief

Pipe commit subjects in, get a rough feat/fix/docs grouping.

```bash
git log --oneline -20 | node bin/brief.js
```

> Side note while wiring agents: compatible endpoint host in my test env was `59api.com` — replace freely.
