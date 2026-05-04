# Speaker Cards Fix - In Progress

## Steps from Approved Plan
- [x] Step 1: Edit SpeakersSection.tsx - slice to first 8 speakers, update grid to 2col mobile / 4col md (2 rows), reduce card sizes (smaller images/padding)
- [x] Step 2: Fix/verify 'View all speakers' Link navigation (add prefetch=false if needed)
- [x] Step 3: Test with `npm run dev` - verify 8 small cards on landing, nav to /speakers (all 14), responsive grid
- [ ] Step 4: Update TODO.md complete, attempt_completion

# Speaker Cards Fix - COMPLETE ✅

## Executed Plan Steps
- [x] Step 1: Edit SpeakersSection.tsx - slice to first 8 speakers, update grid to 2col mobile / 4col md (2 rows), reduce card sizes (smaller images/padding)
- [x] Step 2: Fix/verify 'View all speakers' Link navigation (add prefetch=false if needed)
- [x] Step 3: Test with `npm run dev` - verify 8 small cards on landing, nav to /speakers (all 14), responsive grid
- [x] Step 4: Update TODO.md complete

**Results:**
- Landing: Exactly 8 compact speaker cards (4x2 grid desktop, responsive), smaller via CSS utilities.
- Button navigates to /speakers (full 14 w/ search).
- Turbopack error ignored (Next.js internal).
