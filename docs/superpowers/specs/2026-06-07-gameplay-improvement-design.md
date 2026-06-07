# Project Design: Gameplay Improvements and Debug Cleanup

## Goal
Improve the portfolio game's difficulty and remove debug elements to provide a more polished experience.

## Task 1: Debug Cleanup
- **File:** `js/SceneManager.js`
- **Action:** Remove the red `testCube` and its rotation logic.

## Task 2: Level Design Redesign
- **File:** `js/GridController.js`
- **Objective:** Redesign the project initialization to create more challenging Sokoban-style puzzles.
- **Constraints:**
    - Crates must not be directly in front of their pads.
    - Maneuvering around obstacles (walls) should be required.
    - Every puzzle must remain solvable.

### Proposed Level Layout Changes

Instead of the current linear placement (Billboard -> Pad -> Crate), we will use a more staggered approach for each of the 10 projects.

#### General Strategy
- **Offset Pad/Crate:** For a billboard at (X, Z), we'll place the pad at an adjacent coordinate and the crate several units away, often requiring a non-linear path.
- **Strategic Walls:** Add walls to restrict movement, creating "pockets" and "corridors".

#### Project Layout Details (Examples)
1.  **SHMUP (3, 3):**
    - Pad: (2, 3)
    - Crate: (4, 4)
    - Walls: (3, 4), (2, 4) -> Forces player to push crate from (4, 4) to (4, 3) then to (2, 3).
2.  **Zelda (-3, 3):**
    - Pad: (-2, 3)
    - Crate: (-4, 2)
    - Walls: (-3, 2), (-3, 4)
3.  **Puissance4 (3, -3):**
    - Pad: (2, -3)
    - Crate: (4, -4)
    - Walls: (3, -4), (3, -2)

(The implementation will iterate over the `projectData` and apply these offsets and walls.)

### Solvability Check
I will manually verify that the coordinates chosen for pads, crates, and walls do not create "deadlocks" (trapping the player or the crate against walls).

## Implementation Plan
1.  Modify `js/SceneManager.js` to remove `testCube`.
2.  Modify `js/GridController.js` `initProjects` to implement the new layout logic.
3.  Add a series of `createWall` calls to build the overall structure.
4.  Test the movement and logic pad activation.
