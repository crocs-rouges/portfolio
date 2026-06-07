# Futuristic Data Crates Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform basic red/blue cubes into futuristic data crates with corner guards and emissive stripes.

**Architecture:** Use a `THREE.Group` in `AssetFactory` to assemble the crate from multiple meshes (core, corner guards, data strips). Update `GridController` to use this factory method.

**Tech Stack:** Three.js, JavaScript (ES6).

---

### Task 1: Enhance AssetFactory with createDataCrate

**Files:**
- Modify: `js/AssetFactory.js`

- [ ] **Step 1: Add createDataCrate method**

```javascript
  static createDataCrate(color) {
    const group = new THREE.Group();
    
    // Main Core
    const coreGeo = new THREE.BoxGeometry(0.7, 0.7, 0.7);
    const coreMat = new THREE.MeshStandardMaterial({ 
      color: 0x222222, 
      metalness: 0.8, 
      roughness: 0.2 
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    group.add(core);
    
    // Corner Guards
    const guardGeo = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    const guardMat = new THREE.MeshStandardMaterial({ 
      color: 0x444444, 
      metalness: 0.9, 
      roughness: 0.1 
    });
    
    const positions = [
      [0.3, 0.3, 0.3], [0.3, 0.3, -0.3], [0.3, -0.3, 0.3], [0.3, -0.3, -0.3],
      [-0.3, 0.3, 0.3], [-0.3, 0.3, -0.3], [-0.3, -0.3, 0.3], [-0.3, -0.3, -0.3]
    ];
    
    positions.forEach(pos => {
      const guard = new THREE.Mesh(guardGeo, guardMat);
      guard.position.set(...pos);
      group.add(guard);
    });
    
    // Data Strips (Emissive)
    const stripeGeo = new THREE.BoxGeometry(0.75, 0.05, 0.05);
    const stripeMat = new THREE.MeshStandardMaterial({ 
      color: color, 
      emissive: color, 
      emissiveIntensity: 3 
    });
    
    // Horizontal strips on 4 sides
    const stripeConfigs = [
      { pos: [0, 0.2, 0.35], rot: [0, 0, 0] },
      { pos: [0, -0.2, 0.35], rot: [0, 0, 0] },
      { pos: [0, 0.2, -0.35], rot: [0, 0, 0] },
      { pos: [0, -0.2, -0.35], rot: [0, 0, 0] },
      { pos: [0.35, 0.2, 0], rot: [0, Math.PI / 2, 0] },
      { pos: [0.35, -0.2, 0], rot: [0, Math.PI / 2, 0] },
      { pos: [-0.35, 0.2, 0], rot: [0, Math.PI / 2, 0] },
      { pos: [-0.35, -0.2, 0], rot: [0, Math.PI / 2, 0] }
    ];
    
    stripeConfigs.forEach(config => {
      const stripe = new THREE.Mesh(stripeGeo, stripeMat);
      stripe.position.set(...config.pos);
      stripe.rotation.set(...config.rot);
      group.add(stripe);
    });
    
    return group;
  }
```

- [ ] **Step 2: Commit AssetFactory changes**

```bash
git add js/AssetFactory.js
git commit -m "feat: implement createDataCrate in AssetFactory"
```

### Task 2: Update GridController to use Data Crates

**Files:**
- Modify: `js/GridController.js`

- [ ] **Step 1: Update createBlock method**

```javascript
  createBlock(x, z, color) {
    const mesh = AssetFactory.createDataCrate(color);
    mesh.position.set(x, 0.4, z);
    mesh.userData.type = 'block';
    this.scene.add(mesh);
    this.objects.push(mesh);
    this.physicsWorld.addBox(mesh, 1, false);
  }
```

- [ ] **Step 2: Commit GridController changes**

```bash
git add js/GridController.js
git commit -m "feat: use stylized data crates for blocks"
```
