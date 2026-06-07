import * as CANNON from 'cannon-es';

export class PhysicsWorld {
  constructor() {
    this.world = new CANNON.World();
    this.world.gravity.set(0, -9.82, 0); // Not really used for Sokoban but good to have
    
    this.bodies = new Map(); // Map Three.js mesh to Cannon.js body
  }

  addBox(mesh, mass = 0, isTrigger = false) {
    const box = mesh.geometry.parameters;
    const shape = new CANNON.Box(new CANNON.Vec3(box.width / 2, box.height / 2, box.depth / 2));
    const body = new CANNON.Body({
      mass: mass,
      position: new CANNON.Vec3(mesh.position.x, mesh.position.y, mesh.position.z),
      shape: shape,
      type: mass === 0 ? CANNON.Body.STATIC : CANNON.Body.DYNAMIC
    });

    if (isTrigger) {
      body.collisionResponse = false;
    }

    this.world.addBody(body);
    this.bodies.set(mesh, body);
    return body;
  }

  updateBody(mesh) {
    const body = this.bodies.get(mesh);
    if (body) {
      body.position.set(mesh.position.x, mesh.position.y, mesh.position.z);
    }
  }

  getObjectAt(x, z, radius = 0.1) {
    const targetPos = new CANNON.Vec3(x, 0.9, z); // Assuming Y=0.9 for player/blocks
    for (const [mesh, body] of this.bodies) {
      const dist = body.position.distanceTo(targetPos);
      if (dist < radius) {
        return { mesh, body };
      }
    }
    return null;
  }

  step() {
    this.world.fixedStep();
  }
}
