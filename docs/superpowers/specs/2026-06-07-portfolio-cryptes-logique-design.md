# Design Spec: Futuristic Data Crates (Sokoban Blocks)

## Overview
Transform the basic red and blue cubes into stylized "Data Crates" that fit the low-poly futuristic aesthetic of the portfolio. These crates are the primary interactable elements in the Sokoban-style grid puzzles.

## Visual Design
The crate will be an assembly of multiple meshes to create a detailed, low-poly look without complex textures.

### Components
1. **Core:** A slightly smaller cube than the grid size (0.7m for a 0.8m block) to allow for reinforcements.
   - Material: Dark Grey Metallic (`color: 0x222222`, `metalness: 0.8`, `roughness: 0.2`).
2. **Corner Guards:** 8 small cubes (0.2m) at each corner.
   - Material: Light Grey Metallic (`color: 0x444444`, `metalness: 0.9`, `roughness: 0.1`).
3. **Data Stripes:** Emissive strips on each side face.
   - Material: Emissive material using the block's theme color (Red: `0xff0000`, Blue: `0x0000ff`).
   - `emissiveIntensity`: 2.0 to 5.0 for a glowing effect.

## Implementation Plan
### AssetFactory.js
- Add `static createDataCrate(color)` method.
- Return a `THREE.Group` containing the core, corner guards, and emissive strips.

### GridController.js
- Update `createBlock(x, z, color)` to use `AssetFactory.createDataCrate(color)`.
- Ensure the physics body still matches the overall block bounds (0.8m cube).

## Success Criteria
- Red blocks look like futuristic red data crates.
- Blue blocks look like futuristic blue data crates.
- Pushing logic remains functional.
- Aesthetic is consistent with the `createRobot` style.
