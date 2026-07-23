# Design Spec: Isaac Tracker Dashboard Stats & Filtering Redesign

Date: 2026-07-23

## Overview
Redesign the Isaac Tracker frontend dashboard (`dashboard/`) to transform it into a useful, analytical overview of player runs. The home page will feature global win rate statistics, win streaks, average run duration, top winning items, run filtering by status and character, and a compact run card layout. Detailed item/trinket/boss lists remain isolated to the dedicated run detail page (`/runs/[id]`).

---

## Architecture & Data Flow

### 1. Global Stats Calculation (`dashboard/app/lib/stats.ts`)
Compute aggregate statistics dynamically from the list of fetched runs (`Run[]`):
- **Win Rate (%)**: `(victories / totalRuns) * 100` (or 0% if totalRuns is 0).
- **Total Victories / Deaths**: Counts of `isVictory === true` vs `false`.
- **Current Win Streak**: Count of consecutive `isVictory === true` runs starting from the most recent run (ordered by `id` descending).
- **Average Duration**: Sum of `duration` / total runs in minutes and seconds format.
- **Top Winning Items**: Calculate item frequency strictly among winning runs (`isVictory === true`). Select top 5 most frequent items, linking them with `itemObjects` metadata.

### 2. Dashboard Filtering & Search (`dashboard/components/RunFilters.tsx`)
Interactive controls placed above the run list:
- **Result Filter**: All / Victory / Death.
- **Character Filter**: Dropdown menu populated from available characters in runs.
- **Seed Search**: Search input filtering runs by matching seed string (case-insensitive).

### 3. Compact Run Cards (`dashboard/components/RunCard.tsx`)
Simplified summary view of each run on the home page:
- Character name + Tainted badge if `isTainted`.
- Player username & Seed.
- Victory / Death badge.
- Grid summary stats: Duration (mm:ss), Items count, Trinkets count, Bosses count.
- Link navigating to `/runs/[id]`.

### 4. Comprehensive Stats Banner (`dashboard/components/StatsBanner.tsx`)
Top banner component on `/` rendering key player performance metrics and top winning items preview.

---

## Component Hierarchy
- `app/page.tsx`
  - `Header`
  - `StatsBanner` (Win rate %, streak, total runs, top items)
  - `RunFilters` (Result toggle, character select, search)
  - `RunGrid`
    - `RunCard` (multiple, filtered & limited)
- `app/runs/[id]/page.tsx` (Detailed run view with deduplicated items, trinkets, bosses).

---

## Verification Plan
1. Type checking: `npm run build` in `dashboard/` with zero TypeScript or Next.js build errors.
2. React state & rendering: Ensure statistics accurately update when new runs arrive.
3. Filtering tests: Verify filtering by Victory/Death status, character, and seed works correctly.
