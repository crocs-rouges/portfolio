import './script.js';
import { SceneManager } from './SceneManager.js';

let sceneManager;

function init() {
  console.log("Main: Initializing...");
  try {
    sceneManager = new SceneManager();

    function animate() {
      requestAnimationFrame(animate);
      if (sceneManager) {
        sceneManager.update();
      }
    }
    animate();
    console.log("Main: Animation loop started.");
  } catch (e) {
    console.error("Main: Initialization error:", e);
    const debug = document.getElementById('debug-info');
    if (debug) debug.innerHTML += `MAIN ERROR: ${e.message}<br>`;
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
