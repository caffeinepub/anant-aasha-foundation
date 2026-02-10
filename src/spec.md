# Specification

## Summary
**Goal:** Refactor the internal Motoko resolve-or-create school helper and related backend call sites to improve code quality without changing any external behavior.

**Planned changes:**
- Simplify and deduplicate the private resolve-or-create-by-exact-school-name helper implementation while preserving exact Text equality lookup and school creation behavior.
- Refactor the manager-assignment logic used during school auto-creation to improve readability while keeping identical persisted effects and trapping behavior for invalid school IDs.
- Update backend entry points that accept a school name (Text) to consistently delegate to the shared resolve-or-create helper, removing duplicated authorization and resolve/create logic at call sites.

**User-visible outcome:** No user-facing changes; backend behavior remains identical, but the Motoko code is cleaner and the project continues to compile successfully.
