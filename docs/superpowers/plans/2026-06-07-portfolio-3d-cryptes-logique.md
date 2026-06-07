# Cryptes de la Logique - 3D Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the static portfolio into an interactive 3D "Logic Crypt" using Three.js and Cannon-es, featuring Sokoban puzzles.

**Architecture:** Grid-based 3D environment with a state machine for room transitions. Physics-based block pushing integrated with a grid-snapping system.

**Tech Stack:** Three.js, Cannon-es, GSAP, Vanilla JavaScript (ESM).

---

## Task 1: Environment & Project Setup

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Modify: `index.html`

- [ ] **Step 1: Initialize NPM and install dependencies**

Run: `npm init -y && npm install three cannon-es gsap vite`

- [ ] **Step 2: Create Vite configuration**

```javascript
// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  publicDir: 'assets',
  build: {
    outDir: 'dist',
  }
});
```

- [ ] **Step 3: Update index.html for module support**

```html
<!-- Replace script tag -->
<script type="module" src="js/main.js"></script>
```

- [ ] **Step 4: Commit**

```bash
git add package.json vite.config.js index.html
git commit -m "chore: setup vite and three.js environment"
```

---

## Task 2: Core 3D Scene Boilerplate

**Files:**
- Create: `js/main.js`
- Create: `js/SceneManager.js`

- [ ] **Step 1: Create SceneManager class**

```javascript
import * as THREE from 'three';

export class SceneManager {
  constructor() {
    this.canvas = document.querySelector('canvas') || document.createElement('canvas');
    if (!document.querySelector('canvas')) document.body.appendChild(this.canvas);
    
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true });
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(5, 5, 5);
    this.camera.lookAt(0, 0, 0);
    
    this.onResize();
    window.addEventListener('resize', () => this.onResize());
  }

  onResize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
  }

  update() {
    this.renderer.render(this.scene, this.camera);
  }
}
```

- [ ] **Step 2: Initialize in main.js**

```javascript
import { SceneManager } from './SceneManager.js';

const sceneManager = new SceneManager();

function animate() {
  requestAnimationFrame(animate);
  sceneManager.update();
}
animate();
```

- [ ] **Step 3: Commit**

```bash
git add js/main.js js/SceneManager.js
git commit -m "feat: add basic 3D scene boilerplate"
```

---

## Task 3: Grid & Character Controller

**Files:**
- Create: `js/GridController.js`
- Modify: `js/SceneManager.js`

- [ ] **Step 1: Implement Grid-snapping Movement**

```javascript
export class GridController {
  constructor(scene) {
    this.gridSize = 1;
    this.player = new THREE.Mesh(
      new THREE.BoxGeometry(0.8, 1.8, 0.8),
      new THREE.MeshStandardMaterial({ color: 0x00ff00 })
    );
    scene.add(this.player);
    this.player.position.set(0, 0.9, 0);
    
    window.addEventListener('keydown', (e) => this.handleKeyDown(e));
  }

  handleKeyDown(e) {
    const move = { x: 0, z: 0 };
    if (e.key === 'ArrowUp' || e.key === 'w') move.z = -1;
    if (e.key === 'ArrowDown' || e.key === 's') move.z = 1;
    if (e.key === 'ArrowLeft' || e.key === 'a') move.x = -1;
    if (e.key === 'ArrowRight' || e.key === 'd') move.x = 1;
    
    this.player.position.x += move.x * this.gridSize;
    this.player.position.z += move.z * this.gridSize;
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add js/GridController.js
git commit -m "feat: implement basic grid character movement"
```

---

## Task 4: Sokoban Physics (Block Pushing)

**Files:**
- Create: `js/PhysicsWorld.js`
- Modify: `js/GridController.js`

- [ ] **Step 1: Setup Cannon-es World**
- [ ] **Step 2: Implement Block Collision Detection**
- [ ] **Step 3: Animate Block Pushing with GSAP**

- [ ] **Step 4: Commit**

```bash
git commit -m "feat: add physics-based block pushing"
```

---

## Task 5: Content Display (3D Billboards)

**Files:**
- Modify: `js/SceneManager.js`
- Create: `js/ProjectBillboard.js`

- [ ] **Step 1: Link existing translation data**
- [ ] **Step 2: Create interactive 3D labels for projects**

- [ ] **Step 3: Commit**

```bash
git commit -m "feat: integrate project content into 3D billboards"
```
