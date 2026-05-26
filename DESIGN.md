# Design Brief: Love Letter Generator

## Concept
An intimate, romantic tool for generating personalized love letters. Aesthetic evokes handwritten correspondence with deep rose accents, warm cream backgrounds, and elegant serif typography. Personal, not generic — like a luxury stationery brand.

## Visual Direction
**Tone:** Romantic, intimate, elegant, personal. **Palette dominance:** Warm rose primary (52L 0.16C 8H), cream background (97L 0.01C 30H). **Differentiation:** Heart icon in header, smooth fade transitions between letters, bordered cream cards, handwritten aesthetic via serif typography.

## Color Palette

| Token | OKLCH | Purpose |
|-------|-------|---------|
| primary | 0.52 0.16 8 | Deep rose, CTAs, accents, heart icon |
| secondary | 0.65 0.12 22 | Warm pink, gentle highlights |
| background | 0.97 0.01 30 | Soft cream |
| card | 0.98 0.01 28 | White cream, letter containers |
| foreground | 0.2 0.02 10 | Deep charcoal text |
| border | 0.88 0.02 28 | Subtle rose-tinted dividers |
| muted | 0.92 0.01 30 | Light backgrounds for secondary UI |
| accent | 0.52 0.16 8 | Rose, same as primary for consistency |

## Typography

| Role | Font | Weight | Scale |
|------|------|--------|-------|
| Display (H1, H2) | Fraunces | 600 (SemiBold) | 2.5rem–1.75rem |
| Body (paragraphs, labels) | Lora | 400–500 | 1rem–0.875rem |
| Mono (code, UI hints) | GeneralSans | 500 | 0.875rem |

## Elevation & Depth
**Header:** bg-background with subtle bottom border (border-rose-tinted). **Cards (letter container):** bg-card with sm shadow (rose-tinted, 0 2px 8px RGBA(201,124,124,0.08)). **Modals/popovers:** md shadow (0 4px 16px RGBA(201,124,124,0.12)). Shadows carry rose tint to reinforce aesthetic.

## Structural Zones

| Zone | Treatment | Notes |
|------|-----------|-------|
| Header/Nav | bg-background, border-b border-border | Heart icon left, app title center-left |
| Main Content | bg-background, centered max-w-2xl | Letter card (bg-card, border border-border, md shadow) |
| Controls | bg-muted/40, rounded-lg, below letter | Tone, length, theme selectors + generate button |
| Footer | bg-muted/30, border-t border-border | Attribution or spacing only |

## Spacing & Rhythm
**Margins:** 2rem (header), 1.5rem (main sections), 1rem (card padding). **Gap:** 1rem between input controls. Tight spacing reinforces intimacy; generous outer margins prevent claustrophobia on mobile.

## Component Patterns
**Buttons:** primary bg-rose (primary), secondary bg-muted with text-foreground. **Inputs:** bg-input (light rose-tinted), border-border, focus:ring-2 ring-primary. **Letters:** bg-card, px-6 py-8, rounded-md, shadow-sm, serif body font. **Heart icon:** Fraunces weight 700, rose-colored, 1.5rem, in header.

## Motion
**Fade-in:** 0.4s ease-out on letter generation (animate-fadeIn). **Smooth transitions:** all 0.3s cubic-bezier(0.4, 0, 0.2, 1) on hover states. **Hover buttons:** subtle scale-105 or opacity shift, no jarring effects.

## Dark Mode
**Background:** 0.15L (near black), **card:** 0.2L (charcoal), **foreground:** 0.93L (off-white). Rose primary softened to 0.72L for readability. Maintains intimacy while preserving contrast. All shadow tints preserved.

## Constraints
- No generic blue or purple. Rose-only accent system.
- No full-page gradients; depth via layers and subtle tints.
- Serif typefaces (Fraunces + Lora) mandatory — defines romantic tone.
- Border radius: 0.5rem (8px) consistently — soft, not sharp.
- All shadows carry rose tint — no neutral grey shadows.
- Heart motif required in header or CTA.

## Signature Detail
**Handwritten aesthetic:** Letter output rendered in serif body font (Lora 1.1rem line-height) with generous padding to evoke a physical letter. Subtle cream card background with rose-tinted border creates a "stationery" feel. Fade-in transition mimics the reveal of a letter being read.
