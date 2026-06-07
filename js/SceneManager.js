import * as THREE from 'three';
import { GridController } from './GridController.js';
import { PhysicsWorld } from './PhysicsWorld.js';

export class SceneManager {
  constructor() {
    this.canvas = document.querySelector('#bg-canvas');
    if (!this.canvas) {
      console.error("CRITICAL: Canvas #bg-canvas NOT FOUND in DOM");
      const errInfo = document.getElementById('debug-info');
      if (errInfo) errInfo.innerHTML += "CANVAS NOT FOUND<br>";
      return;
    }
    
    console.log("Three.js: Initializing Renderer...");
    
    try {
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0x0a192f);
      
      this.renderer = new THREE.WebGLRenderer({ 
        canvas: this.canvas, 
        antialias: true,
        alpha: true,
        powerPreference: "high-performance"
      });
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setClearColor(0x0a192f, 1);
      
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      this.camera.position.set(10, 10, 10);
      this.camera.lookAt(0, 0, 0);

      // Lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
      this.scene.add(ambientLight);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
      directionalLight.position.set(5, 10, 7);
      this.scene.add(directionalLight);

      // Ground
      this.ground = new THREE.Mesh(
        new THREE.PlaneGeometry(100, 100),
        new THREE.MeshStandardMaterial({ color: 0x1a2b4a })
      );
      this.ground.rotation.x = -Math.PI / 2;
      this.scene.add(this.ground);
      
      // Grid Helper
      const gridHelper = new THREE.GridHelper(100, 100, 0x64ffda, 0x233554);
      this.scene.add(gridHelper);
      
      // Physics
      console.log("Three.js: Initializing Physics...");
      this.physicsWorld = new PhysicsWorld();
      
      console.log("Three.js: Initializing Grid Controller...");
      this.gridController = new GridController(this.scene, this.physicsWorld);

      this.resizeHandler = this.onResize.bind(this);
      window.addEventListener('resize', this.resizeHandler);
      
      console.log("Three.js: SceneManager READY.");
    } catch (e) {
      console.error("Three.js initialization failed:", e);
      const errInfo = document.getElementById('debug-info');
      if (errInfo) errInfo.innerHTML += `INIT FAILED: ${e.message}<br>`;
    }
  }

  onResize() {
    if (!this.renderer || !this.camera) return;
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
  }

  update() {
    if (!this.renderer || !this.scene || !this.camera) return;
    
    try {
      if (this.physicsWorld) this.physicsWorld.step();
      if (this.gridController) this.gridController.update(this.camera);

      // Camera follow player
      if (this.gridController && this.gridController.player) {
        const playerPos = this.gridController.player.position;
        const offset = new THREE.Vector3(5, 8, 5);
        const targetPos = playerPos.clone().add(offset);
        this.camera.position.lerp(targetPos, 0.05);
        this.camera.lookAt(playerPos);
      }

      this.renderer.render(this.scene, this.camera);
    } catch (e) {
      console.error("Render loop failed:", e);
      // Disable update to prevent spamming errors
      this.renderer = null; 
      const errInfo = document.getElementById('debug-info');
      if (errInfo) errInfo.innerHTML += `RENDER ERROR: ${e.message}<br>`;
    }
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
