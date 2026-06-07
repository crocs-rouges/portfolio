import * as THREE from 'three';
import gsap from 'gsap';

export class GridController {
  constructor(scene, physicsWorld) {
    this.scene = scene;
    this.physicsWorld = physicsWorld;
    this.gridSize = 1;
    this.isMoving = false;

    // Player setup
    this.player = new THREE.Mesh(
      new THREE.BoxGeometry(0.8, 1.8, 0.8),
      new THREE.MeshStandardMaterial({ color: 0x00ff00 })
    );
    this.player.position.set(0, 0.9, 0);
    this.player.userData.type = 'player';
    this.scene.add(this.player);
    this.physicsWorld.addBox(this.player, 0, true);

    // Initial test blocks
    this.createBlock(2, 2, 0xff0000);
    this.createBlock(-2, -2, 0x0000ff);
    
    // Some walls for testing
    this.createWall(5, 0);
    this.createWall(5, 1);
    this.createWall(5, -1);

    this._onKeyDown = (e) => this.handleKeyDown(e);
    window.addEventListener('keydown', this._onKeyDown);
  }

  createBlock(x, z, color) {
    const block = new THREE.Mesh(
      new THREE.BoxGeometry(0.9, 0.9, 0.9),
      new THREE.MeshStandardMaterial({ color: color })
    );
    block.position.set(x, 0.45, z);
    block.userData.type = 'block';
    this.scene.add(block);
    this.physicsWorld.addBox(block, 0, true);
  }

  createWall(x, z) {
    const wall = new THREE.Mesh(
      new THREE.BoxGeometry(1, 2, 1),
      new THREE.MeshStandardMaterial({ color: 0x555555 })
    );
    wall.position.set(x, 1, z);
    wall.userData.type = 'wall';
    this.scene.add(wall);
    this.physicsWorld.addBox(wall, 0, false);
  }

  dispose(scene) {
    window.removeEventListener('keydown', this._onKeyDown);
    if (this.player) {
      scene.remove(this.player);
      this.player.geometry.dispose();
      this.player.material.dispose();
    }
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

  update() {
    // Any per-frame logic for GridController
  }
}
