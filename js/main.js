import './script.js';
import { SceneManager } from './SceneManager.js';

const sceneManager = new SceneManager();

function animate() {
  requestAnimationFrame(animate);
  sceneManager.update();
}
animate();
