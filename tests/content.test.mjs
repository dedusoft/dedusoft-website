import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
const read = (p) => readFileSync(new URL(`../${p}`, import.meta.url), "utf8");
test("the static export configuration is enabled",()=>{const c=read("next.config.mjs");assert.match(c,/output:\s*['"]export['"]/);});
test("case studies explicitly label product development stage",()=>{const content=read("src/lib/site.ts");assert.match(content,/In development/);assert.match(content,/Public distribution/);});
test("contact page does not claim an unimplemented form",()=>{const content=read("src/app/contact/page.tsx");assert.match(content,/inquiry form will be added/);});
test("custom domain is configured",()=>{assert.equal(read("public/CNAME").trim(),"dedusoft.com");});

test("homepage organization schema uses verified public values",()=>{
  const content=read("src/app/page.tsx");
  assert.match(content,/https:\/\/schema\.org/);
  assert.match(content,/"@type": "Organization"/);
  assert.match(content,/sameAs: \[site\.github\]/);
  assert.doesNotMatch(content,/streetAddress|telephone|foundingDate|aggregateRating/);
});
test("robots and sitemap are statically exported and site-owned",()=>{
  assert.match(read("src/app/robots.ts"),/sitemap:/);
  assert.match(read("src/app/robots.ts"),/force-static/);
  assert.match(read("src/app/sitemap.ts"),/force-static/);
});
