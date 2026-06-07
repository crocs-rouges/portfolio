# Design Spec: Cryptes de la Logique - Interactive 3D Portfolio

**Date:** 2026-06-07
**Author:** Gemini CLI (Agent)
**Status:** Draft

## 1. Overview
A playable 3D meta-portfolio where the user explores a "Logic Crypt". Navigation is gated by Sokoban-style puzzles using programming metaphors. This demonstrates both **Game Design** (mechanics, progression, UX) and **Game Programming** (Three.js, physics, state management).

## 2. Technical Stack
- **Engine:** Three.js (WebGL rendering).
- **Physics:** Cannon-es (lightweight, robust for Sokoban logic).
- **Logic:** Vanilla JavaScript or TypeScript.
- **Animation:** GSAP (camera transitions and UI juice).
- **Assets:** Low-poly models (GLTF/GLB) with baked lighting for performance.

## 3. Core Mechanics
### 3.1 Movement
- Top-down / isometric view.
- WASD or Arrow keys to move the character.
- Character snaps to a grid for precise Sokoban alignment.

### 3.2 Sokoban Puzzles
- **Blocks:** Styled as "Code Blocks" (e.g., `Update()`, `If/Else`, `Loop`, `Array`).
- **Goal Slots:** Labeled "Execution Slots" or "Memory Addresses".
- **Logic:** Pushing a specific block onto a specific slot "executes" the logic, opening doors or revealing content.

## 4. World Structure
### 4.1 The Central Hub
- Starting point.
- Three locked gates: **Projects**, **Skills/Experience**, **Contact**.

### 4.2 The Room of Projects
- **Puzzle:** Push the `void Update()` block to power the "Project Terminal".
- **Display:** Once solved, 3D billboards appear. Walking near one zooms the camera and shows project details (Video/Image/Description) pulled from the current `translations` system.

### 4.3 The Memory Chamber (Experience & Skills)
- **Puzzle:** An array-indexing puzzle. Push three `Experience` blocks into slots marked `[0]`, `[1]`, and `[2]` in chronological order.
- **Display:** A scrollable UI overlay showing the user's CV and education.

### 4.4 The Contact Altar
- Simple interaction to display email, phone, and social links.

## 5. Visuals & Audio
- **Aesthetic:** Dark crypt atmosphere with glowing neon "code" accents.
- **Juice:** Screen shake on block collision, particle effects when a puzzle is solved.
- **Sound:** Low ambient drone, mechanical "clunk" for block moves, success chime.

## 6. Implementation Strategy
1. Setup Three.js boilerplate + Physics grid.
2. Implement basic character movement and grid-based Sokoban logic.
3. Integrate low-poly assets and basic lighting.
4. Create the state machine for transitions between Rooms.
5. Link existing data (from `js/script.js`) into the 3D UI overlays.
