import * as THREE from 'three';
import gsap from 'gsap';
import { ProjectBillboard } from './ProjectBillboard.js';
import { AssetFactory } from './AssetFactory.js';

export class GridController {
  constructor(scene, physicsWorld) {
    this.scene = scene;
    this.physicsWorld = physicsWorld;
    this.gridSize = 1;
    this.isMoving = false;
    this.objects = []; // Track all objects for disposal
    this.billboards = [];
    this.logicPads = [];
    this.currentLang = localStorage.getItem('lang') || 'fr';
    this.activeBillboard = null; // Track billboard player is near
    this.isModalOpen = false;

    this.history = [];
    this.redoStack = [];

    // Modal elements
    this.modal = document.getElementById('project-modal');
    this.modalClose = document.getElementById('modal-close');
    this.modalTitle = document.getElementById('modal-title');
    this.modalBody = document.getElementById('modal-body');
    this.modalGallery = document.getElementById('modal-gallery');

    if (this.modalClose) {
      this.modalClose.addEventListener('click', () => this.closeModal());
    }
    window.addEventListener('click', (e) => {
      if (e.target === this.modal) this.closeModal();
    });

    // Player setup
    this.player = new THREE.Group();
    this.player.position.set(0, 0.6, 0);
    this.player.userData.type = 'player';
    this.scene.add(this.player);
    this.objects.push(this.player);

    this.robotModel = AssetFactory.createRobot();
    this.player.add(this.robotModel);
    this.objects.push(this.robotModel);

    // Shadow setup
    const shadowGeo = new THREE.CircleGeometry(0.3, 32);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide
    });
    this.shadow = new THREE.Mesh(shadowGeo, shadowMat);
    this.shadow.rotation.x = -Math.PI / 2;
    this.shadow.position.y = -0.59; // Floor is at -0.6 relative to group center (0.6)
    this.player.add(this.shadow);
    this.objects.push(this.shadow);

    this.physicsWorld.addBox(this.player, 0, true, 0.6, 1.2, 0.6);

    // Hover animation
    gsap.to(this.robotModel.position, {
      y: "+=0.1",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    gsap.to(this.shadow.scale, {
      x: 0.8,
      y: 0.8,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Project Billboards
    this.initProjects();

    this._onKeyDown = (e) => this.handleKeyDown(e);
    window.addEventListener('keydown', this._onKeyDown);
  }

  initProjects() {
    const projectData = [
      { 
        id: 'shmup', 
        titleKey: 'p_shmup_title', 
        descKey: 'p_shmup_desc', 
        image: 'assets/SHMUP/special feature.jpg', 
        gallery: ['assets/SHMUP/special feature.jpg'],
        x: 3, z: 3 
      },
      { 
        id: 'zelda', 
        titleKey: 'p_zelda_title', 
        descKey: 'p_zelda_desc', 
        image: 'assets/zelda/2024-12-03 18-27-17.00_00_32_17.Still001.jpg', 
        gallery: ['assets/zelda/2024-12-03 18-27-17.00_00_32_17.Still001.jpg'],
        x: -3, z: 3 
      },
      { 
        id: 'puissance4', 
        titleKey: 'p_puissance4_title', 
        descKey: 'p_puissance4_desc', 
        image: "assets/puissance/Capture d'écran 2024-11-30 160129.png", 
        gallery: ["assets/puissance/Capture d'écran 2024-11-30 160129.png"],
        x: 3, z: -3 
      },
      { 
        id: 'mario', 
        titleKey: 'p_mario_title', 
        descKey: 'p_mario_desc', 
        image: "assets/mario_python/Capture d'écran 2024-11-11 193851.png", 
        gallery: [
          "assets/mario_python/Capture d'écran 2024-11-11 193851.png",
          "assets/mario_python/Capture d'écran 2024-11-11 193118.png",
          "assets/mario_python/Capture d'écran 2024-11-11 193750.png",
          "assets/mario_python/Capture d'écran 2024-11-11 193808.png",
          "assets/mario_python/Capture d'écran 2024-11-11 193915.png"
        ],
        x: -3, z: -3 
      },
      { 
        id: 'unreal', 
        titleKey: 'p_unreal_title', 
        descKey: 'p_unreal_desc', 
        image: "assets/unreal/Capture d'écran 2024-12-03 180842.png", 
        gallery: [
          "assets/unreal/Capture d'écran 2024-12-03 180842.png",
          "assets/unreal/Capture d'écran 2024-12-03 181059.png"
        ],
        x: 6, z: 0 
      },
      { 
        id: 'portfolio', 
        titleKey: 'p_portfolio_title', 
        descKey: 'p_portfolio_desc', 
        image: "assets/porfolio-images/Capture d'écran 2024-12-02 222438.png", 
        gallery: [
          "assets/porfolio-images/Capture d'écran 2024-12-02 222438.png",
          "assets/porfolio-images/Capture d'écran 2024-12-02 222448.png",
          "assets/porfolio-images/Capture d'écran 2024-12-02 222457.png"
        ],
        x: -6, z: 0 
      },
      { 
        id: 'yt', 
        titleKey: 'p_yt_title', 
        descKey: 'p_yt_desc', 
        image: "assets/yt_schedule/Capture d’écran 2024-12-02 091005.png", 
        gallery: [
          "assets/yt_schedule/Capture d’écran 2024-12-02 091005.png",
          "assets/yt_schedule/2024-11-28 19-57-12.00_03_53_17.Still001.jpg"
        ],
        x: 0, z: 6 
      },
      { 
        id: 'short', 
        titleKey: 'p_short_title', 
        descKey: 'p_short_desc', 
        image: "assets/short_creation/VideoClipperPro.png", 
        gallery: ["assets/short_creation/VideoClipperPro.png"],
        x: 0, z: -6 
      },
      { 
        id: 'cloud', 
        titleKey: 'p_cloud_title', 
        descKey: 'p_cloud_desc1', 
        image: "assets/cloud/cloud.png", 
        gallery: ["assets/cloud/cloud.png"],
        x: 6, z: 6 
      },
      { 
        id: 'isart', 
        titleKey: 'p_isart_title', 
        descKey: 'p_isart_desc1', 
        image: "assets/isart-summer/2024-11-28 19-57-12.00_00_17_03.Still002.jpg", 
        gallery: ["assets/isart-summer/2024-11-28 19-57-12.00_00_17_03.Still002.jpg"],
        x: -6, z: -6 
      }
    ];

    projectData.forEach(data => {
      const billboard = new ProjectBillboard(this.scene, data, new THREE.Vector3(data.x, 0, data.z));
      this.billboards.push(billboard);
      
      // Add a physical base or marker for the billboard
      const base = new THREE.Mesh(
        new THREE.BoxGeometry(0.5, 0.2, 0.5),
        new THREE.MeshStandardMaterial({ color: 0x888888 })
      );
      base.position.set(data.x, 0.1, data.z);
      base.userData.type = 'billboard_base';
      this.scene.add(base);
      this.objects.push(base);
      this.physicsWorld.addBox(base, 0, false);

      // Create Logic Pad
      const pad = AssetFactory.createLogicPad();
      // Staggered pad position: offset from billboard
      let px = data.x;
      let pz = data.z;
      
      // Move pad 1 unit towards center but with a side offset to increase difficulty
      if (Math.abs(data.x) >= Math.abs(data.z)) {
        px -= Math.sign(data.x);
        pz += (data.z >= 0 ? 1 : -1); 
      } else {
        pz -= Math.sign(data.z);
        px += (data.x >= 0 ? 1 : -1);
      }
      
      pad.position.set(px, 0.6, pz); 
      pad.userData.associatedBillboard = billboard;
      this.scene.add(pad);
      this.objects.push(pad);
      this.logicPads.push(pad);

      // Create Data Crate at a more distant and non-obvious location
      let cx = px - Math.sign(px) * 2;
      let cz = pz - Math.sign(pz) * 2;
      
      // Further staggering based on coordinates
      if (data.x === 0) cx += (data.z > 0 ? -3 : 3);
      if (data.z === 0) cz += (data.x > 0 ? 3 : -3);
      
      this.createBlock(cx, cz, 0x64ffda); 
    });

    // Add Boundary Walls
    for (let i = -10; i <= 10; i++) {
      this.createWall(i, -10);
      this.createWall(i, 10);
      this.createWall(-10, i);
      this.createWall(10, i);
    }

    // Strategic walls for corridors and corners
    const walls = [
      {x: 2, z: 2}, {x: 2, z: 4}, {x: 4, z: 2},
      {x: -2, z: 2}, {x: -2, z: 4}, {x: -4, z: 2},
      {x: 2, z: -2}, {x: 2, z: -4}, {x: 4, z: -2},
      {x: -2, z: -2}, {x: -2, z: -4}, {x: -4, z: -2},
      {x: 0, z: 3}, {x: 0, z: -3}, {x: 3, z: 0}, {x: -3, z: 0}
    ];
    walls.forEach(w => this.createWall(w.x, w.z));

    this.initialState = this.saveState();
  }

  createBlock(x, z, color) {
    const mesh = AssetFactory.createDataCrate(color);
    mesh.position.set(x, 0.4, z);
    mesh.userData.type = 'block';
    this.scene.add(mesh);
    this.objects.push(mesh);
    this.physicsWorld.addBox(mesh, 1, false);
  }

  checkLogicPads() {
    this.logicPads.forEach(pad => {
      if (pad.userData.isActive) return;

      const occupant = this.physicsWorld.getObjectAt(pad.position.x, pad.position.z);
      if (occupant && occupant.mesh.userData.type === 'block') {
        // Win!
        pad.userData.isActive = true;
        pad.userData.padMesh.material.emissive.set(0x00ff00);
        pad.userData.padMesh.material.emissiveIntensity = 2;
        
        if (pad.userData.associatedBillboard) {
          pad.userData.associatedBillboard.unlock();
        }
      }
    });
  }

  createWall(x, z) {
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1.5, 1),
      new THREE.MeshStandardMaterial({ color: 0x444444 })
    );
    mesh.position.set(x, 0.75, z);
    mesh.userData.type = 'wall';
    this.scene.add(mesh);
    this.objects.push(mesh);
    this.physicsWorld.addBox(mesh, 0, false);
  }

  dispose() {
    window.removeEventListener('keydown', this._onKeyDown);
    
    if (this.player) {
      gsap.killTweensOf(this.player.position);
    }
    if (this.robotModel) {
      gsap.killTweensOf(this.robotModel.position);
    }
    if (this.shadow) {
      gsap.killTweensOf(this.shadow.scale);
    }

    this.billboards.forEach(b => b.dispose());
    this.billboards = [];
    this.logicPads = [];

    for (const obj of this.objects) {
      gsap.killTweensOf(obj.position);
      this.scene.remove(obj);
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (Array.isArray(obj.material)) {
          obj.material.forEach(m => m.dispose());
        } else {
          obj.material.dispose();
        }
      }
    }
    this.objects = [];
    this.player = null;
  }

  handleKeyDown(e) {
    if (this.isModalOpen) {
      if (e.key === 'Escape') this.closeModal();
      return;
    }

    if (this.isMoving) return;

    // Undo/Redo/Reset
    const isCtrl = e.ctrlKey || e.metaKey;
    if (e.key.toLowerCase() === 'u' || (isCtrl && e.key.toLowerCase() === 'z')) {
      this.undo();
      return;
    }
    if (e.key.toLowerCase() === 'y' || (isCtrl && e.key.toLowerCase() === 'y')) {
      this.redo();
      return;
    }
    if (e.key.toLowerCase() === 'r') {
      this.reset();
      return;
    }

    // Trigger project modal
    if (e.key === 'Enter' || e.key === ' ') {
      if (this.activeBillboard && !this.activeBillboard.isLocked) {
        this.openModal(this.activeBillboard);
      }
      return;
    }

    const move = { x: 0, z: 0 };
    if (e.key === 'ArrowUp' || e.key === 'w') move.z = -1;
    else if (e.key === 'ArrowDown' || e.key === 's') move.z = 1;
    else if (e.key === 'ArrowLeft' || e.key === 'a') move.x = -1;
    else if (e.key === 'ArrowRight' || e.key === 'd') move.x = 1;

    if (move.x !== 0 || move.z !== 0) {
      this.tryMove(move.x, move.z);
    }
  }

  saveState() {
    const blocks = this.objects
      .filter(obj => obj.userData.type === 'block')
      .map(block => ({
        mesh: block,
        x: block.position.x,
        z: block.position.z
      }));

    return {
      player: {
        x: this.player.position.x,
        z: this.player.position.z,
        rotationY: this.player.rotation.y
      },
      blocks: blocks
    };
  }

  undo() {
    if (this.history.length === 0 || this.isMoving) return;
    this.redoStack.push(this.saveState());
    const state = this.history.pop();
    this.restoreState(state);
  }

  redo() {
    if (this.redoStack.length === 0 || this.isMoving) return;
    this.history.push(this.saveState());
    const state = this.redoStack.pop();
    this.restoreState(state);
  }

  reset() {
    if (this.isMoving) return;
    this.restoreState(this.initialState);
    this.history = [];
    this.redoStack = [];
  }

  restoreState(state) {
    this.isMoving = true;
    
    let totalAnims = state.blocks.length + 1;
    let completedAnims = 0;
    const checkAllDone = () => {
      completedAnims++;
      if (completedAnims === totalAnims) {
        this.isMoving = false;
        // Re-check logic pads after all objects moved
        this.resetLogicPads();
        this.checkLogicPads();
      }
    };

    // Restore player
    gsap.to(this.player.position, {
      x: state.player.x,
      z: state.player.z,
      duration: 0.3,
      onComplete: () => {
        this.physicsWorld.updateBody(this.player);
        checkAllDone();
      }
    });
    gsap.to(this.player.rotation, {
      y: state.player.rotationY,
      duration: 0.3
    });

    // Restore blocks
    state.blocks.forEach(b => {
      gsap.to(b.mesh.position, {
        x: b.x,
        z: b.z,
        duration: 0.3,
        onComplete: () => {
          this.physicsWorld.updateBody(b.mesh);
          checkAllDone();
        }
      });
    });
  }

  resetLogicPads() {
    this.logicPads.forEach(pad => {
      pad.userData.isActive = false;
      if (pad.userData.padMesh) {
        pad.userData.padMesh.material.emissive.set(0x000000);
        pad.userData.padMesh.material.emissiveIntensity = 0;
      }
      if (pad.userData.associatedBillboard) {
        pad.userData.associatedBillboard.lock();
      }
    });
  }

  openModal(billboard) {
    if (!billboard || billboard.isLocked) return;
    
    this.isModalOpen = true;
    const data = billboard.data;
    const lang = this.currentLang;
    const projectTranslations = (lang === 'fr' ? billboard.translations.fr : billboard.translations.en) || {};

    this.modalTitle.textContent = projectTranslations[data.titleKey] || 'Project';
    
    // Build body (handle multiple descriptions)
    let bodyHtml = '';
    const descKeys = [data.descKey, 'p_' + data.id + '_desc1', 'p_' + data.id + '_desc2', 'p_' + data.id + '_desc3'];
    const seenDescs = new Set();
    
    descKeys.forEach(key => {
      const text = projectTranslations[key];
      if (text && !seenDescs.has(text)) {
        bodyHtml += `<p>${text}</p>`;
        seenDescs.add(text);
      }
    });
    this.modalBody.innerHTML = bodyHtml;

    // Build gallery
    this.modalGallery.innerHTML = '';
    if (data.gallery && data.gallery.length > 0) {
      data.gallery.forEach(imgSrc => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.className = 'gallery-item';
        img.alt = data.id;
        img.onclick = () => window.open(imgSrc, '_blank');
        this.modalGallery.appendChild(img);
      });
    } else if (data.image) {
      const img = document.createElement('img');
      img.src = data.image;
      img.className = 'gallery-item';
      img.alt = data.id;
      img.onclick = () => window.open(data.image, '_blank');
      this.modalGallery.appendChild(img);
    }

    this.modal.classList.add('active');
  }

  closeModal() {
    this.isModalOpen = false;
    this.modal.classList.remove('active');
  }

  tryMove(dx, dz) {
    if (this.isMoving) return;

    const targetX = Math.round(this.player.position.x + dx * this.gridSize);
    const targetZ = Math.round(this.player.position.z + dz * this.gridSize);

    // Rotate player towards direction
    const targetRotation = Math.atan2(dx, dz);
    gsap.to(this.player.rotation, {
      y: targetRotation,
      duration: 0.2,
      ease: "power2.out"
    });

    // Use excludeMesh: this.player to avoid self-collision
    const occupant = this.physicsWorld.getObjectAt(targetX, targetZ, 0.4, this.player);

    if (!occupant) {
      // Empty cell, move player
      this.history.push(this.saveState());
      this.redoStack = [];
      this.movePlayer(targetX, targetZ);
    } else if (occupant.mesh.userData.type === 'block') {
      // It's a block, check if we can push it
      const blockTargetX = Math.round(targetX + dx * this.gridSize);
      const blockTargetZ = Math.round(targetZ + dz * this.gridSize);

      // Check if block's target is empty
      const blockPathOccupant = this.physicsWorld.getObjectAt(blockTargetX, blockTargetZ, 0.4, occupant.mesh);

      if (!blockPathOccupant) {
        // We can push the block
        this.history.push(this.saveState());
        this.redoStack = [];
        this.isMoving = true;
        let animationsComplete = 0;
        const checkBothComplete = () => {
          animationsComplete++;
          if (animationsComplete === 2) {
            this.isMoving = false;
            this.checkLogicPads();
          }
        };

        this.pushBlock(occupant.mesh, blockTargetX, blockTargetZ, checkBothComplete);
        this.movePlayer(targetX, targetZ, checkBothComplete);
      }
    }
  }

  movePlayer(tx, tz, onCompleteCallback) {
    this.isMoving = true;
    gsap.to(this.player.position, {
      x: tx,
      z: tz,
      duration: 0.3,
      onComplete: () => {
        this.physicsWorld.updateBody(this.player);
        if (onCompleteCallback) onCompleteCallback();
        else this.isMoving = false;
      }
    });
  }

  pushBlock(blockMesh, btx, btz, onCompleteCallback) {
    gsap.to(blockMesh.position, {
      x: btx,
      z: btz,
      duration: 0.3,
      onComplete: () => {
        this.physicsWorld.updateBody(blockMesh);
        this.checkLogicPads();
        if (onCompleteCallback) onCompleteCallback();
      }
    });
  }

  update(camera) {
    if (!this.player) return;

    // Check language once per frame for all billboards
    const newLang = localStorage.getItem('lang') || 'fr';
    if (newLang !== this.currentLang) {
      this.currentLang = newLang;
      this.billboards.forEach(billboard => billboard.updateLanguage(newLang));
    }

    let nearestBillboard = null;
    let minDist = Infinity;

    this.billboards.forEach(billboard => {
      billboard.update(camera);
      
      const dist = this.player.position.distanceTo(billboard.position);
      if (dist < 1.5) {
        billboard.show();
        if (dist < minDist) {
          minDist = dist;
          nearestBillboard = billboard;
        }
      } else {
        billboard.hide();
      }
    });

    this.activeBillboard = nearestBillboard;

    // Optional: Add visual hint to open if unlocked
    if (this.activeBillboard && !this.activeBillboard.isLocked && !this.isModalOpen) {
      const openLabel = this.currentLang === 'fr' ? 'OUVRIR' : 'OPEN';
      const prompt = `\n\n<span style="color: var(--primary-color); font-family: 'SF Mono', monospace; font-size: 12px; display: block; text-align: center; margin-top: 10px;">[ENTER / SPACE] ${openLabel}</span>`;
      if (!this.activeBillboard.infoElement.innerHTML.includes(openLabel)) {
        this.activeBillboard.infoElement.innerHTML += prompt;
      }
    }
  }
}
