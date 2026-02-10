# Specification

## Summary
**Goal:** Add a backend-only data structure to index schools by exact school name for fast, exact Text lookups.

**Planned changes:**
- In `backend/main.mo`, introduce a Map (or equivalent) keyed by school name (`Text`) with values as a `School` record containing at minimum `schoolId : Nat`.
- Ensure school lookup uses exact `Text` equality only (no trimming, case normalization, fuzzy/partial matching).
- Keep existing school/class storage intact and compiling; do not require any frontend changes.

**User-visible outcome:** No visible UI changes; backend gains the ability to look up schools by exact school name while existing functionality continues to work.
