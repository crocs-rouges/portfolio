# Low-Poly Stylization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace placeholder cubes with stylized 3D models constructed from Three.js primitives (Robot for player, Data Crates for blocks).

**Architecture:** Create factory-like methods in `GridController` (or a new `AssetFactory` class) to assemble hierarchical groups of meshes. Use emissive materials for glowing accents.

**Tech Stack:** Three.js, GSAP.

---

## Task 1: Create the Robot Player

**Files:**
- Create: `js/AssetFactory.js`
- Modify: `js/GridController.js`

- [ ] **Step 1: Implement Robot Construction in AssetFactory**

```javascript
import * as THREE from 'three';

export class AssetFactory {
  static createRobot() {
    const group = new THREE.Group();
    
    // Body
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(0.6, 0.8, 0.5),
      new THREE.MeshStandardMaterial({ color: 0x64ffda, metalness: 0.5, roughness: 0.2 })
    );
    body.position.y = 0.4;
    group.add(body);
    
    // Head
    const head = new THREE.Mesh(
      new THREE.BoxGeometry(0.4, 0.35, 0.4),
      new THREE.MeshStandardMaterial({ color: 0xccd6f6 })
    );
    head.position.y = 1.0;
    group.add(head);
    
    // Eyes (Emissive)
    const eyeGeo = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0x00ffff, emissive: 0x00ffff, emissiveIntensity: 2 });
    
    const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    leftEye.position.set(-0.1, 1.0, 0.2);
    group.add(leftEye);
    
    const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    rightEye.position.set(0.1, 1.0, 0.2);
    group.add(rightEye);
    
    return group;
  }
}
```

- [ ] **Step 2: Update GridController to use the Robot**

- [ ] **Step 3: Commit**

---

## Task 2: Create Data Crates (Sokoban Blocks)

**Files:**
- Modify: `js/AssetFactory.js`
- Modify: `js/GridController.js`

- [ ] **Step 1: Implement createDataCrate in AssetFactory**
- [ ] **Step 2: Update createBlock method in GridController**

---

## Task 3: Visual Polish & Hover Effect

**Files:**
- Modify: `js/GridController.js`

- [ ] **Step 1: Add a floating animation to the Robot using GSAP**
- [ ] **Step 2: Add a small shadow/glow beneath the robot**

- [ ] **Step 3: Commit**
