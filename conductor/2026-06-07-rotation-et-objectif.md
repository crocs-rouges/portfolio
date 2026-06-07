# Plan d'Implémentation : Rotation et Objectif du Jeu

**Goal:** Améliorer le feedback visuel (rotation du robot) et ajouter des mécaniques de jeu claires (dalles logiques) pour débloquer les projets, avec des instructions UI mises à jour.

**Architecture:** Ajout d'une méthode de rotation avec `GSAP` dans le contrôleur de mouvement. Création d'entités "Logic Pad" (dalles de pression) dans l'usine d'assets. Modification du système de billboards pour lier leur activation à la résolution d'un puzzle Sokoban local.

**Tech Stack:** Three.js, GSAP, HTML/CSS.

---

## Task 1: Mise à jour des Instructions (UI)

**Files:**
- Modify: `index.html`

**Step 1: Modifier le panneau d'instructions**
Mettre à jour la section `div#instructions` pour inclure un "Objectif" clair.

```html
        <div style="margin: 30px 0; padding: 20px; background: rgba(0,0,0,0.3); border-radius: 4px; text-align: left;">
          <p style="font-family: 'SF Mono', monospace; font-size: 0.9rem; color: var(--primary-color); margin-bottom: 10px;">
            > OBJECTIF_
          </p>
          <p style="font-family: 'SF Mono', monospace; font-size: 0.85rem; line-height: 1.6; margin-bottom: 20px;">
            Les projets sont verrouillés. Poussez les **Caisses de Données** sur les **Dalles Logiques** pour rétablir le courant et débloquer les informations.
          </p>
          <p style="font-family: 'SF Mono', monospace; font-size: 0.9rem; color: var(--primary-color); margin-bottom: 10px;">
            > CONTROLES_
          </p>
          <p style="font-family: 'SF Mono', monospace; font-size: 0.85rem; line-height: 1.6;">
            [Z Q S D] ou [Flèches] pour se déplacer<br>
          </p>
        </div>
```

---

## Task 2: Rotation du Personnage

**Files:**
- Modify: `js/GridController.js`

**Step 1: Ajouter la logique de rotation**
Dans `GridController.js`, lors de l'appel à `movePlayer(tx, tz)`, calculer l'angle de rotation souhaité et l'animer avec GSAP.

```javascript
  // Inside tryMove before calling movePlayer
  const angle = Math.atan2(dx, dz);
  
  // Create a specific rotation method
  rotatePlayer(angle) {
    // Determine shortest path for rotation to avoid spinning the wrong way
    let currentRotation = this.playerContainer.rotation.y;
    // Normalize angles
    // ... logic to animate rotation smoothly ...
    gsap.to(this.playerContainer.rotation, {
      y: angle,
      duration: 0.2,
      ease: "power1.inOut"
    });
  }
```

---

## Task 3: Dalles Logiques (Logic Pads)

**Files:**
- Modify: `js/AssetFactory.js`
- Modify: `js/GridController.js`

**Step 1: Créer le modèle de Dalle Logique**
Dans `AssetFactory.js`, ajouter `createLogicPad()`. C'est un plan posé au sol avec un contour luminescent.

```javascript
  static createLogicPad() {
    const group = new THREE.Group();
    const padGeo = new THREE.PlaneGeometry(0.8, 0.8);
    const padMat = new THREE.MeshStandardMaterial({ 
      color: 0x444444, 
      emissive: 0xff0000, 
      emissiveIntensity: 0.5,
      side: THREE.DoubleSide
    });
    const pad = new THREE.Mesh(padGeo, padMat);
    pad.rotation.x = -Math.PI / 2;
    pad.position.y = 0.01; // Slightly above ground
    
    group.add(pad);
    group.userData.type = 'logic_pad';
    group.userData.isActive = false;
    group.userData.padMesh = pad; // Ref for color changing
    return group;
  }
```

**Step 2: Placer les dalles dans le monde**
Dans `GridController.js`, lors de la création des `billboards`, générer un `logic_pad` adjacent à chaque projet et une `data_crate` un peu plus loin. Stocker les dalles dans un tableau `this.logicPads`.

**Step 3: Vérification de victoire**
Dans `GridController.js`, après chaque mouvement de caisse (`pushBlock`), vérifier si une caisse est exactement au-dessus d'une dalle logique (tolérance de distance faible).
Si oui :
- Changer la couleur émissive de la dalle (ex: de rouge à vert `0x00ff00`).
- Activer le panneau `ProjectBillboard` correspondant (lui passer un flag `isUnlocked = true`).

---

## Task 4: Verrouillage des Projets

**Files:**
- Modify: `js/ProjectBillboard.js`
- Modify: `js/GridController.js`

**Step 1: Gérer l'état verrouillé**
Dans `ProjectBillboard.js`, initialiser le panneau comme "Verrouillé". S'il est verrouillé, ne pas afficher l'image du projet, afficher un cadenas ou le texte "ACCÈS REFUSÉ - RÉTABLIR LOGIQUE".

**Step 2: Déverrouillage**
Ajouter une méthode `unlock()` qui restaure l'affichage normal du projet lorsque la dalle associée est activée.
