import * as CANNON from 'cannon-es';

export class PhysicsWorld {
  constructor() {
    this.world = new CANNON.World();
    this.world.gravity.set(0, -9.82, 0);
    
    this.bodies = new Map();

    // Add static ground to physics world
    const groundShape = new CANNON.Plane();
    const groundBody = new CANNON.Body({ mass: 0 });
    groundBody.addShape(groundShape);
    groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
    this.world.addBody(groundBody);
  }

  addBox(mesh, mass = 0, isTrigger = false, w, h, d) {
    let width, height, depth;
    
    if (w !== undefined && h !== undefined && d !== undefined) {
      width = w;
      height = h;
      depth = d;
    } else if (mesh.geometry && mesh.geometry.parameters) {
      const params = mesh.geometry.parameters;
      width = params.width || 1;
      height = params.height || 1;
      depth = params.depth || 1;
    } else {
      // For Groups or meshes without parameters, use a default size
      width = 1; height = 1; depth = 1;
    }

    const shape = new CANNON.Box(new CANNON.Vec3(width / 2, height / 2, depth / 2));
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
      // Reset velocity to prevent dynamic bodies from sliding after being pushed
      body.velocity.set(0, 0, 0);
      body.angularVelocity.set(0, 0, 0);
    }
  }

  getObjectAt(x, z, radius = 0.4, excludeMesh = null) {
    for (const [mesh, body] of this.bodies) {
      if (mesh === excludeMesh) continue;

      const dx = body.position.x - x;
      const dz = body.position.z - z;
      const distSq = dx * dx + dz * dz;
      
      if (distSq < radius * radius) {
        return { mesh, body };
      }
    }
    return null;
  }

  step() {
    this.world.fixedStep();
  }

  dispose() {
    // Clear the map and remove all bodies from the world
    for (const body of this.bodies.values()) {
      this.world.removeBody(body);
    }
    this.bodies.clear();
  }
}
