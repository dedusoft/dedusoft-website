import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
const read = (p) => readFileSync(new URL(`../${p}`, import.meta.url), "utf8");
test("the static export configuration is enabled",()=>{const c=read("next.config.mjs");assert.match(c,/output:\s*['"]export['"]/);});
test("case studies explicitly label product development stage",()=>{const content=read("src/lib/site.ts");assert.match(content,/In development/);assert.match(content,/Public distribution/);});
test("contact page does not claim an unimplemented form",()=>{const content=read("src/app/contact/page.tsx");assert.match(content,/inquiry form will be added/);});
test("custom domain is configured",()=>{assert.equal(read("public/CNAME").trim(),"dedusoft.com");});

test("approved DeduSoft brand assets exist and are valid SVGs",()=>{
  for (const file of ["public/brand/dedusoft-logo.svg","public/brand/dedusoft-logo-inverse.svg","public/brand/dedusoft-symbol.svg","src/app/icon.svg"]) {
    const content=read(file);
    assert.match(content,/<svg\b/);
    assert.match(content,/<\/svg>/);
    assert.match(content,/<title\b/);
  }
});
test("header and footer reference approved SVG identity",()=>{
  assert.match(read("src/components/header.tsx"),/\/brand\/dedusoft-logo\.svg/);
  assert.match(read("src/components/footer.tsx"),/\/brand\/dedusoft-logo-inverse\.svg/);
});
