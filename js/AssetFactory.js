import * as THREE from 'three';

export class AssetFactory {
  static createRobot() {
    const group = new THREE.Group();
    
    // Body
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(0.6, 0.8, 0.5),
      new THREE.MeshStandardMaterial({ color: 0x64ffda, metalness: 0.5, roughness: 0.2 })
    );
    body.position.y = -0.2; // Centered at 0.6 height relative to floor, so 0.4 - 0.6 = -0.2
    group.add(body);
    
    // Head
    const head = new THREE.Mesh(
      new THREE.BoxGeometry(0.4, 0.35, 0.4),
      new THREE.MeshStandardMaterial({ color: 0xccd6f6 })
    );
    head.position.y = 0.4; // 1.0 - 0.6 = 0.4
    group.add(head);
    
    // Eyes (Emissive)
    const eyeGeo = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0x00ffff, emissive: 0x00ffff, emissiveIntensity: 2 });
    
    const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    leftEye.position.set(-0.1, 0.4, 0.2);
    group.add(leftEye);
    
    const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    rightEye.position.set(0.1, 0.4, 0.2);
    group.add(rightEye);
    
    return group;
  }
}
