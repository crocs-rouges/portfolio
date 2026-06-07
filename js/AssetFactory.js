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

  static createLogicPad() {
    const group = new THREE.Group();
    const padGeo = new THREE.PlaneGeometry(0.8, 0.8);
    const padMat = new THREE.MeshStandardMaterial({ 
      color: 0x444444, 
      emissive: 0xff0000, 
      emissiveIntensity: 1,
      transparent: true,
      opacity: 0.8,
      side: THREE.DoubleSide
    });
    const pad = new THREE.Mesh(padGeo, padMat);
    pad.rotation.x = -Math.PI / 2;
    pad.position.y = -0.59; // Flat on the floor (relative to grid center y=0.6, floor is at -0.6)
    
    group.add(pad);
    group.userData.type = 'logic_pad';
    group.userData.isActive = false;
    group.userData.padMesh = pad; // Ref for color changing
    return group;
  }
}
