import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
const read = (p) => readFileSync(new URL(`../${p}`, import.meta.url), "utf8");
test("the static export configuration is enabled",()=>{const c=read("next.config.mjs");assert.match(c,/output:\s*['"]export['"]/);});
test("case studies explicitly label product development stage",()=>{const content=read("src/lib/site.ts");assert.match(content,/In development/);assert.match(content,/Public distribution/);});
test("contact page does not claim an unimplemented form",()=>{const content=read("src/app/contact/page.tsx");assert.match(content,/inquiry form will be added/);});
test("custom domain is configured",()=>{assert.equal(read("public/CNAME").trim(),"dedusoft.com");});
