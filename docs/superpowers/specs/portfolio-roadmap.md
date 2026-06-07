# Portfolio Roadmap: Cryptes de la Logique

Ce document détaille les 10 axes d'amélioration pour transformer le portfolio 3D interactif en une expérience de niveau professionnel (Masterclass Style Bruno Simon).

---

## 1. Modélisation Low-Poly & Animations (En cours ✅)
**État :** Robot et Caisses de données implémentés via primitives Three.js.
**Améliorations futures :**
- **Animations procédurales :** Ajouter un mouvement de "balancier" à la tête du robot quand il tourne.
- **Feedback de poussée :** Le robot doit se pencher légèrement vers l'avant quand il pousse une caisse.
- **Modèles externes :** Remplacer les primitives par des modèles `.glb` optimisés (Draco compression) pour plus de détails.

## 2. Brouillard & Post-processing (Atmosphère)
**Concept :** Créer une ambiance mystérieuse et technologique.
**Détails techniques :**
- **Fog :** Utiliser `THREE.FogExp2` avec une couleur sombre (`#0a192f`) pour masquer l'horizon.
- **Bloom (Néon) :** Intégrer `UnrealBloomPass` via `EffectComposer`. Faire briller intensément les bandes émissives des caisses et des dalles logiques.
- **Vignette :** Assombrir les bords de l'écran pour focaliser l'attention sur le robot.

## 3. Matériaux "Data-Flow" (Shaders)
**Concept :** Les murs et le sol doivent respirer le code.
**Détails techniques :**
- **Scrolling Texture :** Créer un shader (`ShaderMaterial`) qui fait défiler des lignes de code ou des caractères binaires sur les murs de la crypte.
- **Pulsation :** Faire pulser les dalles logiques avec un effet de "respiration" lumineuse via GSAP ou un Uniform de temps dans un shader.

## 4. Éclairage Dynamique
**Concept :** Rendre la scène vivante avec des ombres et des lumières vacillantes.
**Détails techniques :**
- **Point Lights :** Placer des "torches néons" sur les murs qui projettent des ombres dynamiques (`castShadow = true`).
- **Flicker Effect :** Utiliser GSAP pour faire varier aléatoirement l'intensité lumineuse (`intensity`) afin de simuler un système électrique instable.

## 5. Salles Thématiques (World Building)
**Concept :** Structurer le portfolio par expertises.
**Détails techniques :**
- **Rooms :** Créer des zones distinctes : "Salle des Moteurs" (Unity/Godot), "Laboratoire Scripting" (Python), "Autel du Contact".
- **Portails :** Utiliser les puzzles Sokoban pour ouvrir des portes physiques menant à ces nouvelles zones.

## 6. Écrans Holographiques (Visuals)
**Concept :** Les panneaux de projets ne sont pas de simples images, mais des hologrammes.
**Détails techniques :**
- **Transparency :** Utiliser des textures semi-transparentes avec un effet de scanlines.
- **Glitch Effect :** Appliquer une distorsion aléatoire sur les panneaux quand le joueur s'en approche (via `displacementMap` animée).

## 7. Transitions Caméra Cinématiques (Basic ✅)
**État :** Caméra suit le joueur avec un léger retard (Lerp).
**Améliorations futures :**
- **Focus Zoom :** Lors de l'ouverture d'un projet (`Enter`), la caméra doit se déplacer vers un point de vue fixe optimal devant le panneau 3D.
- **Shake :** Ajouter une légère secousse de caméra quand une caisse heurte un mur ou quand un puzzle est résolu.

## 8. Puzzles de Circuits Logiques (Fait ✅)
**État :** Dalles de pression débloquent les billboards.
**Améliorations futures :**
- **Portes Logiques :** Créer des énigmes où il faut activer 2 dalles en même temps (Porte AND) ou l'une des deux (Porte OR) pour ouvrir une grande porte.
- **Indicateurs au sol :** Tracer des lignes lumineuses au sol qui s'allument progressivement depuis la dalle vers la porte quand le puzzle est résolu.

## 9. Collectibles "Memory Snippets"
**Concept :** Récompenser l'exploration.
**Détails techniques :**
- **Items :** Placer des disquettes ou des éclats de cristal 3D dans des coins cachés.
- **Unlocks :** Ramasser 5 snippets débloque une version PDF "Gold" du CV ou un projet secret "Easter Egg".

## 10. Sound Design & Juice (Sensation)
**Concept :** Faire ressentir la physicalité de la crypte.
**Détails techniques :**
- **Audio :** Utiliser `THREE.AudioListener`. Sons de pas (métallique), bruit de frottement de pierre/métal pour les caisses, "ping" de succès harmonique.
- **Particules :** Utiliser des systèmes de particules (`THREE.Points`) pour créer des étincelles lors des collisions ou une poussière magique sur les dalles activées.
