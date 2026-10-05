const { createRequire } = require("node:module");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const local = createRequire(__filename);
let playwright;
try { playwright = local("playwright"); }
catch { playwright = createRequire("/Users/maysafonseca/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/package.json")("playwright"); }
const base = process.env.QA_BASE_URL || "http://127.0.0.1:3002";
async function main() {
  await fs.mkdir("qa", { recursive: true });
  const browser = await playwright.chromium.launch({ headless: true, channel: "chrome" });
  const errors = [];
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    page.on("pageerror", e => errors.push(e.message));
    await page.goto(base);
    await page.waitForLoadState("networkidle");
    assert.equal(await page.locator("h1").count(), 1);
    assert.equal(new URL(await page.locator('link[rel="canonical"]').getAttribute("href")).origin, "https://braz-consultoria-landing.vercel.app");
    const schemas = await page.locator('script[type="application/ld+json"]').allTextContents();
    schemas.forEach(s => JSON.parse(s));
    assert.equal(await page.locator(".service-card").count(), 8);
    const links = await page.locator(".service-card").evaluateAll(nodes => nodes.map(n => n.getAttribute("href")));
    await page.screenshot({ path: "qa/desktop.png" });
    await page.screenshot({ path: "qa/desktop-full.png", fullPage: true });
    for (const route of [...links, "/privacidade", "/robots.txt", "/sitemap.xml"]) {
      const response = await page.request.get(base + route);
      assert.equal(response.status(), 200, route);
      if (route.startsWith("/servicos")) {
        const html = await response.text();
        assert.ok(html.includes('application/ld+json'), route);
        assert.ok(html.includes('rel="canonical"'), route);
      }
    }
    await page.goto(base + links[0]);
    await page.screenshot({ path: "qa/service-desktop.png", fullPage: true });
    for (const width of [375, 390, 768]) {
      await page.setViewportSize({ width, height: 844 });
      await page.goto(base);
      await page.waitForLoadState("networkidle");
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), "Horizontal overflow at " + width);
      assert.ok(await page.locator(".hero-photo img").evaluate(img => img.complete && img.naturalWidth > 0), "Hero image loaded");
      await page.screenshot({ path: "qa/mobile-" + width + ".png" });
      if (width === 390) {
        await page.getByRole("button", { name: "Abrir menu" }).click();
        assert.equal(await page.getByRole("button", { name: "Fechar menu" }).getAttribute("aria-expanded"), "true");
        await page.getByRole("navigation", { name: "Navegação principal" }).getByRole("link", { name: "Dúvidas" }).click();
        assert.equal(await page.getByRole("button", { name: "Abrir menu" }).getAttribute("aria-expanded"), "false");
        await page.locator(".faq-list summary").first().click();
        assert.ok(await page.locator(".faq-list details").first().evaluate(d => d.open), "FAQ opens");
        await page.locator("#servicos").scrollIntoViewIfNeeded();
        await page.screenshot({ path: "qa/mobile-services.png" });
        await page.locator("#sobre").scrollIntoViewIfNeeded();
        await page.screenshot({ path: "qa/mobile-about.png" });
        await page.goto(base + links[0]);
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), "Service mobile overflow");
        await page.screenshot({ path: "qa/service-mobile.png", fullPage: true });
      }
    }
    assert.deepEqual(errors, [], "Browser errors");
    await fs.writeFile("qa/result.json", JSON.stringify({ passed: true, routes: links.length + 4, widths: [1440, 768, 390, 375], errors }, null, 2));
    console.log("Visual and SEO checks passed: desktop, mobile, 8 services, sitemap, robots, canonical, JSON-LD, menu and FAQ.");
  } finally { await browser.close(); }
}
main().catch(e => { console.error(e); process.exitCode = 1; });
