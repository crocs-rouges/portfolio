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
    this.currentLang = localStorage.getItem('lang') || 'fr';

    // Player setup
    this.player = AssetFactory.createRobot();
    this.player.position.set(0, 0.6, 0); // Robot is ~1.2m high, centered at 0.6
    this.player.userData.type = 'player';
    this.scene.add(this.player);
    this.objects.push(this.player);
    this.physicsWorld.addBox(this.player, 0, true, 0.6, 1.2, 0.6);

    // Initial test blocks
    this.createBlock(2, 2, 0xff0000);
    this.createBlock(-2, -2, 0x0000ff);
    
    // Some walls for testing
    this.createWall(5, 0);
    this.createWall(5, 1);
    this.createWall(5, -1);

    // Project Billboards
    this.initProjects();

    this._onKeyDown = (e) => this.handleKeyDown(e);
    window.addEventListener('keydown', this._onKeyDown);
  }

  initProjects() {
    const projectData = [
      { id: 'shmup', titleKey: 'p_shmup_title', descKey: 'p_shmup_desc', image: 'assets/SHMUP/special feature.jpg', x: 3, z: 3 },
      { id: 'zelda', titleKey: 'p_zelda_title', descKey: 'p_zelda_desc', image: 'assets/zelda/2024-12-03 18-27-17.00_00_32_17.Still001.jpg', x: -3, z: 3 },
      { id: 'puissance4', titleKey: 'p_puissance4_title', descKey: 'p_puissance4_desc', image: "assets/puissance/Capture d'écran 2024-11-30 160129.png", x: 3, z: -3 },
      { id: 'mario', titleKey: 'p_mario_title', descKey: 'p_mario_desc', image: "assets/mario_python/Capture d'écran 2024-11-11 193851.png", x: -3, z: -3 },
      { id: 'unreal', titleKey: 'p_unreal_title', descKey: 'p_unreal_desc', image: "assets/unreal/Capture d'écran 2024-12-03 180842.png", x: 6, z: 0 },
      { id: 'portfolio', titleKey: 'p_portfolio_title', descKey: 'p_portfolio_desc', image: "assets/porfolio-images/Capture d'écran 2024-12-02 222438.png", x: -6, z: 0 },
      { id: 'yt', titleKey: 'p_yt_title', descKey: 'p_yt_desc', image: "assets/yt_schedule/Capture d’écran 2024-12-02 091005.png", x: 0, z: 6 },
      { id: 'short', titleKey: 'p_short_title', descKey: 'p_short_desc', image: "assets/short_creation/VideoClipperPro.png", x: 0, z: -6 },
      { id: 'cloud', titleKey: 'p_cloud_title', descKey: 'p_cloud_desc1', image: "assets/cloud/cloud.png", x: 6, z: 6 },
      { id: 'isart', titleKey: 'p_isart_title', descKey: 'p_isart_desc1', image: "assets/isart-summer/2024-11-28 19-57-12.00_00_17_03.Still002.jpg", x: -6, z: -6 }
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
    });
  }

  createBlock(x, z, color) {
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(0.8, 0.8, 0.8),
      new THREE.MeshStandardMaterial({ color: color })
    );
    mesh.position.set(x, 0.4, z);
    mesh.userData.type = 'block';
    this.scene.add(mesh);
    this.objects.push(mesh);
    this.physicsWorld.addBox(mesh, 1, false);
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

    this.billboards.forEach(b => b.dispose());
    this.billboards = [];

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
    if (this.isMoving) return;

    const move = { x: 0, z: 0 };
    if (e.key === 'ArrowUp' || e.key === 'w') move.z = -1;
    else if (e.key === 'ArrowDown' || e.key === 's') move.z = 1;
    else if (e.key === 'ArrowLeft' || e.key === 'a') move.x = -1;
    else if (e.key === 'ArrowRight' || e.key === 'd') move.x = 1;

    if (move.x !== 0 || move.z !== 0) {
      this.tryMove(move.x, move.z);
    }
  }

  tryMove(dx, dz) {
    const targetX = this.player.position.x + dx * this.gridSize;
    const targetZ = this.player.position.z + dz * this.gridSize;

    const occupant = this.physicsWorld.getObjectAt(targetX, targetZ);

    if (!occupant) {
      // Empty cell, move player
      this.movePlayer(targetX, targetZ);
    } else if (occupant.mesh.userData.type === 'block') {
      // It's a block, check if we can push it
      const blockTargetX = targetX + dx * this.gridSize;
      const blockTargetZ = targetZ + dz * this.gridSize;

      const blockPathOccupant = this.physicsWorld.getObjectAt(blockTargetX, blockTargetZ);

      if (!blockPathOccupant) {
        // We can push the block
        this.isMoving = true;
        let animationsComplete = 0;
        const checkBothComplete = () => {
          animationsComplete++;
          if (animationsComplete === 2) {
            this.isMoving = false;
          }
        };

        this.pushBlock(occupant.mesh, blockTargetX, blockTargetZ, checkBothComplete);
        this.movePlayer(targetX, targetZ, checkBothComplete);
      }
    }
    // If it's a wall or a block we can't push, do nothing
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

    this.billboards.forEach(billboard => {
      billboard.update(camera);
      
      // Proximity check (adjacent cell)
      const dist = this.player.position.distanceTo(billboard.position);
      if (dist < 1.5) {
        billboard.show();
      } else {
        billboard.hide();
      }
    });
  }
}
