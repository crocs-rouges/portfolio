import * as THREE from 'three';

export class GridController {
  constructor(scene) {
    this.gridSize = 1;
    this.player = new THREE.Mesh(
      new THREE.BoxGeometry(0.8, 1.8, 0.8),
      new THREE.MeshStandardMaterial({ color: 0x00ff00 })
    );
    scene.add(this.player);
    this.player.position.set(0, 0.9, 0);
    
    this._onKeyDown = (e) => this.handleKeyDown(e);
    window.addEventListener('keydown', this._onKeyDown);
  }

  dispose() {
    window.removeEventListener('keydown', this._onKeyDown);
  }

  handleKeyDown(e) {
    const move = { x: 0, z: 0 };
    if (e.key === 'ArrowUp' || e.key === 'w') {
      move.z = -1;
    } else if (e.key === 'ArrowDown' || e.key === 's') {
      move.z = 1;
    } else if (e.key === 'ArrowLeft' || e.key === 'a') {
      move.x = -1;
    } else if (e.key === 'ArrowRight' || e.key === 'd') {
      move.x = 1;
    }
    
    this.player.position.x += move.x * this.gridSize;
    this.player.position.z += move.z * this.gridSize;
  }
}
