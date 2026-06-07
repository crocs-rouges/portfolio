import * as THREE from 'three';

export class SceneManager {
  constructor() {
    this.canvas = document.querySelector('canvas') || document.createElement('canvas');
    if (!document.querySelector('canvas')) document.body.appendChild(this.canvas);
    
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(5, 5, 5);
    this.camera.lookAt(0, 0, 0);
    
    this.resizeHandler = this.onResize.bind(this);
    this.onResize();
    window.addEventListener('resize', this.resizeHandler);
  }

  onResize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
  }

  update() {
    this.renderer.render(this.scene, this.camera);
  }

  dispose() {
    window.removeEventListener('resize', this.resizeHandler);
    this.renderer.dispose();
  }
}
