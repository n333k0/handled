# handled. by RemotoLabs

AI systems for your business: audit → document → automate. Third RemotoLabs product, next to [shipped.](https://n333k0.github.io/shipped/) (fixed-price websites) and [queued.](https://n333k0.github.io/queued/) (design on subscription).

Live: https://n333k0.github.io/handled/ (deploys on push to `main`).

```sh
npm install
npm run dev      # http://localhost:4321/handled/
npm run build
```

| What | File |
|---|---|
| Copy, packages, agents, stack, FAQ, calculator defaults | `src/data/site.ts` |
| **Calendly / Stripe links** | `links` in `src/data/site.ts` |
| Leak calculator | `src/components/Leak.astro` |
| Sections | `src/components/*.astro` |
| Styles (Void / Graphite / Pine) | `src/styles/global.css`, `../_design/STYLES.md` |

Origin: adapts the MoP AI Systems Offer (mop-ai-systems-offer.vercel.app) and ideas from comando-ai.com. Hero videos in `public/media/` come from that offer (Higgsfield); replace with our own.

## Before launch
- [ ] `links.calendly` (30-min leak call) and `links.checkout` (Stripe link for the $1,500 Audit)
- [ ] `brand.email`, `brand.parentUrl`
- [ ] Confirm package prices (Audit $1,500, Build from $9,500, Operate $1,500/mo)
