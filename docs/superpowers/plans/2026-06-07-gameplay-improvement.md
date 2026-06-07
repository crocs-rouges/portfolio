# Gameplay Improvement and Debug Cleanup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove debug elements and increase puzzle difficulty by redesigning the level layout with offsets and walls.

**Architecture:** 
- Cleanup `SceneManager.js` by removing the `testCube` mesh and its update logic.
- Redesign `GridController.js` level initialization to stagger logic pads and data crates.
- Add strategic walls to create Sokoban-style corridors.

**Tech Stack:** JavaScript, Three.js, GSAP

---

### Task 1: Remove Debug Cube from SceneManager

**Files:**
- Modify: `js/SceneManager.js`

- [ ] **Step 1: Remove testCube creation**

```javascript
// Remove these lines in constructor
const testCube = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2),
  new THREE.MeshStandardMaterial({ color: 0xff0000 })
);
testCube.position.set(0, 5, 0); // High up
this.scene.add(testCube);
this.testCube = testCube;
```

- [ ] **Step 2: Remove testCube update logic**

```javascript
// Remove these lines in update()
if (this.testCube) {
  this.testCube.rotation.y += 0.01;
  this.testCube.rotation.x += 0.005;
}
```

- [ ] **Step 3: Commit**

```bash
git add js/SceneManager.js
git commit -m "chore: remove debug test cube"
```

### Task 2: Redesign Project Layout in GridController

**Files:**
- Modify: `js/GridController.js`

- [ ] **Step 1: Update initProjects logic to stagger pads and crates**

We need to change how `px`, `pz`, `cx`, `cz` are calculated to create more distance and non-linear paths.

```javascript
// New logic inside projectData.forEach loop
// Position pad adjacent to billboard (towards center)
let px = data.x;
let pz = data.z;

// Offset pad slightly differently for each
if (Math.abs(data.x) >= Math.abs(data.z)) {
  px -= Math.sign(data.x);
  pz += (Math.random() > 0.5 ? 1 : -1); // Side offset
} else {
  pz -= Math.sign(data.z);
  px += (Math.random() > 0.5 ? 1 : -1); // Side offset
}

pad.position.set(px, 0.6, pz);

// Create Data Crate (further away and offset)
let cx = px - Math.sign(data.x) * 2;
let cz = pz - Math.sign(data.z) * 2;
if (data.x === 0) cx += (Math.random() > 0.5 ? 2 : -2);
if (data.z === 0) cz += (Math.random() > 0.5 ? 2 : -2);

this.createBlock(cx, cz, 0x64ffda);
```

- [ ] **Step 2: Add strategic walls to create corridors**

Add a series of `createWall` calls after `initProjects` or within it to constrain movement.

```javascript
// Add these to create a boundary or inner walls
for (let i = -10; i <= 10; i++) {
  this.createWall(i, -10);
  this.createWall(i, 10);
  this.createWall(-10, i);
  this.createWall(10, i);
}

// Inner walls to create actual corridors
this.createWall(2, 2);
this.createWall(2, 4);
this.createWall(4, 2);
this.createWall(-2, -2);
this.createWall(-2, -4);
this.createWall(-4, -2);
```

- [ ] **Step 3: Commit**

```bash
git add js/GridController.js
git commit -m "feat(gameplay): increase puzzle difficulty and add walls"
```

### Task 3: Final Verification

- [ ] **Step 1: Run the application and verify no errors in console**
- [ ] **Step 2: Verify player can push crates and unlock billboards**
- [ ] **Step 3: Final commit for any adjustments**

```bash
git add .
git commit -m "feat(gameplay): final adjustments to level design"
```
