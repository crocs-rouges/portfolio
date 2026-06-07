import * as THREE from 'three';
import { GridController } from './GridController.js';
import { PhysicsWorld } from './PhysicsWorld.js';

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

    // Physics
    this.physicsWorld = new PhysicsWorld();

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7);
    this.scene.add(directionalLight);

    // Ground
    this.ground = new THREE.Mesh(
      new THREE.PlaneGeometry(20, 20),
      new THREE.MeshStandardMaterial({ color: 0x333333 })
    );
    this.ground.rotation.x = -Math.PI / 2;
    this.scene.add(this.ground);
    
    this.gridController = new GridController(this.scene, this.physicsWorld);

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
    this.physicsWorld.step();
    this.gridController.update(this.camera);
    this.renderer.render(this.scene, this.camera);
  }

  dispose() {
    window.removeEventListener('resize', this.resizeHandler);
    
    this.gridController.dispose();
    this.physicsWorld.dispose();

    // Dispose of ground
    this.scene.remove(this.ground);
    this.ground.geometry.dispose();
    this.ground.material.dispose();

    // Dispose of lights and other scene objects
    this.scene.traverse((object) => {
      if (object.isMesh) {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach(m => m.dispose());
          } else {
            object.material.dispose();
          }
        }
      }
    });

    this.renderer.dispose();
  }
}
