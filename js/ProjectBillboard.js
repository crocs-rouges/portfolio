import * as THREE from 'three';
import { translations } from './script.js';

export class ProjectBillboard {
  constructor(scene, projectData, position) {
    this.scene = scene;
    this.data = projectData;
    this.position = position;
    
    // Default language or currently selected one
    this.lang = localStorage.getItem('lang') || 'fr';
    
    this.mesh = this.createMesh();
    this.mesh.position.copy(position);
    this.mesh.position.y = 1.2; // Floating height
    this.scene.add(this.mesh);
    
    this.infoElement = this.createInfoElement();
    this.isVisible = false;
  }

  createMesh() {
    // Billboard plane
    const geometry = new THREE.PlaneGeometry(1.2, 0.8);
    const material = new THREE.MeshStandardMaterial({ 
      color: 0xffffff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.9
    });
    
    // Frame
    const frameGeo = new THREE.PlaneGeometry(1.3, 0.9);
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x444444 });
    const frame = new THREE.Mesh(frameGeo, frameMat);
    frame.position.z = -0.01;
    
    const group = new THREE.Group();
    const poster = new THREE.Mesh(geometry, material);
    group.add(poster);
    group.add(frame);

    // Load texture if image exists
    if (this.data.image) {
      const loader = new THREE.TextureLoader();
      loader.load(this.data.image, (texture) => {
        material.map = texture;
        material.needsUpdate = true;
      }, undefined, (err) => {
        console.warn('Failed to load project image:', this.data.image);
      });
    }

    group.userData.type = 'billboard';
    group.userData.projectId = this.data.id;
    return group;
  }

  createInfoElement() {
    const el = document.createElement('div');
    el.className = 'project-billboard-info';
    el.style.position = 'absolute';
    el.style.display = 'none';
    el.style.backgroundColor = 'rgba(17, 34, 64, 0.9)'; // Matches .project-content bg
    el.style.color = 'var(--text-color)';
    el.style.padding = '15px';
    el.style.borderRadius = '4px';
    el.style.border = '1px solid var(--primary-color)';
    el.style.boxShadow = '0 10px 30px -15px rgba(2, 12, 27, 0.7)';
    el.style.pointerEvents = 'none';
    el.style.zIndex = '1000';
    el.style.maxWidth = '250px';
    el.style.fontFamily = 'Calibre, Inter, system-ui, sans-serif';
    el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    el.style.opacity = '0';
    
    this.updateContent(this.infoElement, this.lang);
    
    document.body.appendChild(el);
    return el;
  }

  updateContent(element = this.infoElement, lang = this.lang) {
    const title = translations[lang][this.data.titleKey] || 'Project';
    const desc = translations[lang][this.data.descKey] || '';
    
    element.innerHTML = `
      <h3 style="margin: 0 0 10px 0; color: var(--heading-color); font-size: 18px;">${title}</h3>
      <p style="margin: 0; font-size: 14px; line-height: 1.4; color: var(--text-color);">${desc}</p>
    `;
  }

  update(camera) {
    // Face the camera (billboard effect)
    this.mesh.lookAt(camera.position.x, this.mesh.position.y, camera.position.z);
    
    if (this.isVisible) {
      // Update screen position
      const vector = this.mesh.position.clone();
      vector.y += 0.6; // Show above the mesh
      vector.project(camera);
      
      const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
      const y = (-(vector.y * 0.5) + 0.5) * window.innerHeight;
      
      this.infoElement.style.left = `${x}px`;
      this.infoElement.style.top = `${y}px`;
      this.infoElement.style.transform = 'translate(-50%, -100%)';
    }
  }

  updateLanguage(lang) {
    if (this.lang !== lang) {
      this.lang = lang;
      this.updateContent();
    }
  }

  show() {
    if (this.isVisible) return;
    this.isVisible = true;
    this.infoElement.style.display = 'block';
    // Force a reflow for transition
    this.infoElement.offsetHeight;
    this.infoElement.style.opacity = '1';
  }

  hide() {
    if (!this.isVisible) return;
    this.isVisible = false;
    this.infoElement.style.opacity = '0';
    setTimeout(() => {
      if (!this.isVisible) {
        this.infoElement.style.display = 'none';
      }
    }, 300);
  }

  dispose() {
    this.scene.remove(this.mesh);
    this.mesh.traverse(child => {
      if (child.isMesh) {
        child.geometry.dispose();
        if (child.material.map) child.material.map.dispose();
        child.material.dispose();
      }
    });
    if (this.infoElement.parentNode) {
      this.infoElement.parentNode.removeChild(this.infoElement);
    }
  }
}
