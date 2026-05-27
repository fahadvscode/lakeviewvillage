# Lakeview Village Townhomes — SEO Audit & Site Overview

**Date:** March 2025  
**Site:** lakeviewvillagetownhome.ca  
**Type:** Real estate / pre-construction townhomes (local business)

---

## 1. Full Site Picture

### 1.1 Site Architecture

```
Homepage (/)
├── About (/about) — Community overview, master plan, districts
├── Pier House (/pier-house) — Branthaven 3-storey townhomes
├── Aura Towns (/aura-towns) — Caivan 2-storey condo towns
├── Compare (/compare) — Side-by-side project comparison
├── Lifestyle (/lifestyle) — Waterfront living, investment, amenities
├── Discovery Centre (/discovery-centre) — Sales centre, address, hours, builders
└── FAQ (/faq) — FAQ accordion, registration CTA
```

**Depth:** 2 levels (flat). All key pages are 1 click from the homepage.

### 1.2 Navigation Structure

| Location | Items |
|----------|-------|
| **Header** | About, Pier House, Aura Towns, Compare, Lifestyle, Discovery Centre, FAQ + Register CTA |
| **Footer** | Projects (Pier House, Aura Towns, Compare), Community (About, Lifestyle, Discovery Centre, FAQ), Connect (Register, Contact) |

### 1.3 Key Business Info

- **Products:** Pier House Towns (Branthaven), Aura Towns (Caivan)
- **Location:** Lakeview Village, Mississauga, ON — 177-acre waterfront master plan
- **Discovery Centre:** 985 Jim Tovey Boulevard, Mississauga, ON L5E 0A8  
  Hours: Mon–Thu 12–7pm, Sat–Sun 12–5pm, Fri closed
- **Primary CTA:** Register for VIP Access (leads to Supabase)

---

## 2. What’s Already Done Well

| Area | Status | Notes |
|------|--------|-------|
| **Metadata** | ✅ | Unique titles & descriptions per page, keywords, Open Graph |
| **Canonicals** | ✅ | Self-referencing canonicals on all pages |
| **Schema** | ✅ | WebSite, RealEstateAgent, Place, Product (home), FAQPage (FAQ), Breadcrumb |
| **AI SEO** | ✅ | AIAnswerSection (sr-only Q&A), AI bots allowed in robots.txt |
| **Sitemap** | ✅ | XML sitemap with priorities, referenced in robots.txt |
| **Robots** | ✅ | Allows Google, GPTBot, PerplexityBot, Anthropic-AI, Google-Extended |
| **Images** | ✅ | Next.js Image, alt text, hero images present |
| **Mobile** | ✅ | Responsive, mobile nav, viewport configured |
| **Internal linking** | ✅ | Footer, header, contextual links between pages |

---

## 3. SEO Audit Findings

### 3.1 Technical SEO

| Issue | Impact | Evidence | Fix |
|-------|--------|----------|-----|
| **SearchAction URL may 404** | Medium | WebSite schema points to `/search?q={search_term_string}` — no search route exists | Remove SearchAction or add a simple search page |
| **Domain consistency** | Low | site-config uses `lakeviewvillagetownhome.ca` (singular); Vercel shows `lakeviewvillagetownhomes.ca` | Confirm canonical domain and ensure all config matches |
| **Breadcrumb schema** | Medium | BreadcrumbSchema exists but only used on Home and FAQ | Add BreadcrumbSchema to pier-house, aura-towns, compare, lifestyle, discovery-centre, about |

### 3.2 On-Page SEO

| Issue | Impact | Evidence | Fix |
|-------|--------|----------|-----|
| **Lifestyle title keyword focus** | Low | Title: "Lifestyle & Investment | Is Lakeview Village a Good Investment?" — dual intent | Consider splitting or tightening to one primary intent |
| **Pier House / Aura schema** | Medium | TownhomeProductSchema only on homepage | Add Product schema to pier-house and aura-towns pages |
| **Discovery Centre schema** | Medium | No LocalBusiness schema for the sales centre | Add LocalBusiness schema with address, hours, geo |

### 3.3 Content & Structure

| Issue | Impact | Evidence | Fix |
|-------|--------|----------|-----|
| **H1 usage** | Low | Verify one H1 per page with primary keyword | Audit each page for single H1, keyword in H1 |
| **Definition blocks** | Low | AI answer blocks are sr-only; visible FAQ is good | Ensure key "What is Lakeview Village?"-style answers appear in visible content |
| **Freshness** | Low | No "Last updated" dates on key pages | Add visible "Last updated: [date]" to About, FAQ, Lifestyle |

### 3.4 AI SEO (GEO / AEO)

| Issue | Impact | Evidence | Fix |
|-------|--------|----------|-----|
| **Statistics with sources** | Medium | Some stats ($275M, 177 acres) lack cited sources | Add "According to [source]" for key figures |
| **Structured comparison** | Low | Compare page has tables — good | Consider FAQPage schema for compare page Q&As if applicable |
| **Extractability** | Low | AI blocks are well-structured | Keep 40–60 word answer blocks; add more for high-value queries |

---

## 4. Prioritized Action Plan

> **Updated:** The following recommended next steps have been implemented:
> - Domain consistency noted in site-config
> - "Last updated" dates added to About, FAQ, Lifestyle
> - Programmatic neighborhood pages: `/neighborhoods`, `/neighborhoods/long-branch`, `/neighborhoods/port-credit`, `/neighborhoods/south-mississauga`

### Critical (Do First)

1. **Fix or remove SearchAction**  
   - Option A: Add `/search` route (even a simple stub)  
   - Option B: Remove `potentialAction` from WebSite schema

2. **Add Product schema to Pier House and Aura Towns**  
   - Use existing TownhomeProductSchema component  
   - Ensures product-specific rich results and clearer entity understanding

3. **Add LocalBusiness schema for Discovery Centre**  
   - Full address: 985 Jim Tovey Boulevard  
   - Hours, geo, contact info  
   - Supports local search and Knowledge Panel

### High Impact

4. **Add BreadcrumbSchema to all pages**  
   - Improves navigation understanding  
   - Possible breadcrumb rich results

5. **Add "Last updated" dates**  
   - E.g. About, FAQ, Lifestyle  
   - Helps freshness and AI trust

6. **Verify canonical domain**  
   - Align site-config, Vercel domain, and canonicals  
   - Avoid split signals between townhome vs townhomes

### Quick Wins

7. **Add NAP (Name, Address, Phone) to footer**  
   - Use Discovery Centre address (already there)  
   - Add phone if available; ensures consistent local NAP

8. **Review meta description lengths**  
   - Aim for 150–160 chars  
   - Adjust any that are cut off in SERPs

9. **Add FAQ schema to Compare page**  
   - If there are clear Q&As (e.g. "Which is better for families?")  
   - Enables FAQ rich results

### Long-Term

10. **Programmatic SEO**  
    - Neighborhood pages (e.g. Long Branch, Port Credit, Lakeview)  
    - "Townhomes in [area]" landing pages  
    - Use programmatic-seo skill for templates

11. **Content hub**  
    - "Lakeview Village Guide" hub with spokes for transit, amenities, schools, investment  
    - Internal linking from product pages

12. **AI visibility monitoring**  
    - Track queries like "Lakeview Village townhomes", "Pier House vs Aura" in ChatGPT, Perplexity, AI Overviews  
    - Adjust content based on who gets cited

---

## 5. Schema Checklist (Current vs Recommended)

| Page | Current Schema | Recommended Addition |
|------|----------------|---------------------|
| Home | WebSite, RealEstateAgent, Place, Product×2, Breadcrumb | — |
| Pier House | (inherits layout) | Product, Breadcrumb |
| Aura Towns | (inherits layout) | Product, Breadcrumb |
| Compare | (inherits layout) | Breadcrumb, ItemList (comparison) |
| About | (inherits layout) | Breadcrumb |
| Lifestyle | (inherits layout) | Breadcrumb |
| Discovery Centre | (inherits layout) | LocalBusiness, Breadcrumb |
| FAQ | FAQPage, Breadcrumb | — |

---

## 6. Keyword Coverage (Current)

| Priority Keyword | Primary Page | Status |
|------------------|--------------|--------|
| Lakeview Village townhomes | Home | ✅ |
| Pier House Towns | pier-house | ✅ |
| Aura Towns Caivan | aura-towns | ✅ |
| Lakeview Village Mississauga | Multiple | ✅ |
| Compare Pier House Aura | compare | ✅ |
| Lakeview Village Discovery Centre | discovery-centre | ✅ |
| Lakeview Village investment | lifestyle | ✅ |
| Lakeview Village FAQ | faq | ✅ |

---

## 7. Summary

The site has a solid SEO and AI-ready foundation: metadata, schema, sitemap, robots, and AI answer blocks are in place. The main improvements are:

1. Fix SearchAction or remove it  
2. Extend schema (Product on project pages, LocalBusiness for Discovery Centre, Breadcrumb everywhere)  
3. Add freshness signals and clearer local NAP  
4. Consider programmatic pages for neighborhoods and intent variants  

Implementing the Critical and High Impact items will address most technical and on-page gaps.
