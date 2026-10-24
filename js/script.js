// ==========================================
// TRANSLATION SYSTEM
// ==========================================
const translations = {
    fr: {
        nav_about: "About",
        nav_software: "Software",
        nav_art: "Art",
        nav_video: "Vidéo",
        nav_contact: "Contact",
        game_mode_btn: "GAME MODE",
        
        hero_intro_start: "salut, moi c'est ",
        hero_intro_name: "romain",
        hero_intro_end: ".",
        hero_subtitle: "Passionné par la conception et la création de jeux vidéo.",
        hero_desc_merged: "Game Designer & Programmer. Je crée des mondes interactifs. Étudiant à ISART Digital passionné par l'architecture logicielle et le Gameplay Programming. Je code principalement en C# (Unity/Godot) et Python.",
        btn_say_hi: "Say hi!",
        
        about_title: "about me",
        moti_p1: "Je suis actuellement étudiant en première année de Game Design & Programming à ISART Digital. Passionné depuis toujours par les jeux vidéo et la richesse de leurs univers, j'ai orienté mon parcours vers la conception vidéoludique.",
        moti_p2: "En parallèle de ma formation, je développe mes compétences en autodidacte sur différents langages et moteurs. Mon ambition est d'exercer le métier de Gameplay Programmer.",
        philo_title: "Ma Vision & Philosophie",
        philo_1: "<strong>La Force Silencieuse :</strong> Puissance sans besoin de validation, l'action prime sur les mots.",
        philo_2: "<strong>L'Excellence par l'Habitude :</strong> Faire de la qualité une répétition, pas un acte isolé.",
        philo_3: "<strong>Design Systems :</strong> <em>\"Créer des systèmes qui résistent au joueur pour valoriser son intelligence et son effort.\"</em>",
        tech_intro: "Voici quelques technologies avec lesquelles je travaille :",
        tech_prog: "Gameplay Programming",
        tech_archi: "Architecture (Design Patterns)",
        tech_gd: "Game Design & UX",
        tech_loops: "Théorie des boucles & 3C",
        
        software_title: "software",
        pfilter_all: "Tout",
        pfilter_unity: "Unity & C#",
        pfilter_godot: "Godot & C#",
        pfilter_python: "Python & Outils",
        featured_overline: "Projet Phare",
        p_terrain_title: "Génération Procédurale 3D",
        p_terrain_desc: "Générateur de terrain 3D procédural et modulaire temps réel développé sous <strong>Unity 6 (URP)</strong> en C#. Implémentation d'un bruit de Perlin fractal multi-octaves (<strong>fBm</strong> : octaves, persistance, lacunarité), remapping d'élévation non-linéaire par <strong>AnimationCurve</strong>, baking dynamique de textures de biomes (eau, sable, roche, neige) et génération de maillage 3D temps réel (<strong>MeshData</strong>) avec <strong>MeshCollider</strong> dynamique et <strong>Custom Editor</strong> interactif.",
        p_shmup_title: "AEGIS OVERDRIVE (SHMUP)",
        p_shmup_desc: "Shoot 'em up développé sur Godot en C# avec une architecture rigoureuse basée sur le <strong>Command Pattern</strong>. Focus majeur sur le <strong>Game Feel</strong> et la <strong>Juiciness</strong> : <em>Hit Stop</em> dynamique sur impact, secousses d'écran adaptatives, patterns de tirs rythmés et pooling d'entités sans GC.",
        
        p_zelda_title: "Remake Zelda",
        p_zelda_desc: "Refactor solo sur Unity avec une architecture robuste : <strong>State Machine</strong> pour le joueur et le combat, <strong>Stateless Behavior Tree</strong> pour l'IA ennemie, et contrat <strong>IDataPersistence</strong> avec persistance chiffrée sur disque. Inventaire scriptable et caméra de Koholint.",
        p_puissance4_title: "Puissance 4",
        p_puissance4_desc: "Un jeu de Puissance 4 développé avec Pygame, incluant une adaptation automatique de la taille, gestion des erreurs et système de victoire.",
        p_mario_title: "Python Mario",
        p_mario_desc: "Création d'un niveau de Mario avec des tableaux 2D et un système de mouvement par manipulation de matrices.",
        p_godot_title: "Peach Multiplayer",
        p_godot_desc: "Remake de Super Mario World sur SNES avec Peach. Apprentissage du GDscript et du Multiplayer local sur Godot.",
        p_yt_title: "Youtube Uploader",
        p_yt_desc_short: "Script Python automatisé pour l'upload de vidéos via l'API officielle de YouTube.",
        p_unreal_title: "Unreal Engine Project",
        p_unreal_desc_short: "Prototypage de mécaniques 3D : système de santé modulaire et mécanique d'escalade procédurale via les Blueprints d'Unreal Engine.",
        p_sokoban_title: "SOKOBAN (Fake 3D in 2D)",
        p_sokoban_desc: "Réinterprétation casino de Sokoban. Mécanique de dé roulant avec physique discrète, architecture rigoureuse via <strong>Command Pattern</strong> (Undo/Redo illimité), pathfinding <strong>A*</strong> et feedbacks visuels satisfaisants.",
        p_mobile_title: "Mobile Mini Game OFG",
        p_mobile_desc: "One Finger Game multijoueur local (2 joueurs sur un seul écran tactile). Conception mathématique avec <strong>Systèmes Polaires</strong> et <strong>Trigonométrie appliquée</strong> pour des interactions physiques fluides.",
        p_rider_title: "Rider Skate",
        p_rider_desc: "Runner arcade mobile 2.5D combinant physique 2D déterministe et rendu 3D dynamique (URP). Architecture en <strong>State Machine</strong> et approche <strong>Data-Driven</strong> (ScriptableObjects). Simulation custom : accélération tangentielle locale, force vectorielle <strong>Ground Stick</strong> pour l'adhérence aux loopings, grinds magnétiques sur <strong>Splines Bézier</strong> avec <strong>Pumping</strong>, réceptions <strong>Perfect Stomp</strong> (&plusmn;5&deg;) et système de <strong>Quêtes Procédurales</strong> avec persistance.",
        p_short_title: "Short Création",
        p_short_desc: "Outil de production vidéo automatisé découpant des formats longs en 9/16 pour YouTube Shorts / TikTok. Pipeline accéléré par <strong>GPU NVIDIA (CUDA)</strong>, multiprocessing et interface Tkinter.",
        p_isart_title: "ISART Summer School Project",
        p_isart_desc1: "Jeu d'action top-down 2D réalisé sous Unity. Système de combat projectiles/arc, gestion de vagues d'ennemis et State Machine de pattern de boss.",
        view_all_projects: "Voir tous les projets",
        
        art_title: "art gallery",
        art_desc: "Une collection de mes œuvres numériques et traditionnelles, explorant différents styles et médiums.",
        filter_all: "Tout",
        filter_art: "Dessin",
        filter_photo: "Photographie",
        art_btn_more: "Voir plus",
        art_btn_less: "Voir moins",
        
        video_title: "video gallery",
        video_desc: "Mes montages vidéo, motion design et trailers de gameplay.",
        v_terrain_title: "Générateur de Monde 3D (Unity)",
        v_terrain_desc: "Devlog sur la création d'un générateur de terrain procédural temps réel sous Unity 6.",
        v_trailer1_title: "Zelda Remake (Unity)",
        v_trailer1_desc: "Devlog sur la création d'un remake de Zelda Link's Awakening sur Unity.",
        v_trailer2_title: "Best Of REPO",
        v_trailer2_desc: "Montage dynamique d'une session hilarante entre amis sur REPO.",
        v_shmup_title: "SHMUP Walkthrough",
        v_shmup_desc: "Aperçu complet du gameplay de Aegis Overdrive.",
        
        contact_overline: "04. Et ensuite ?",
        contact_title: "Get In Touch",
        contact_text: "Si mon profil correspond à vos recherches ou si vous souhaitez échanger autour du Game Dev, n'hésitez pas à me contacter. Je suis toujours ouvert à de nouvelles opportunités.",
        achievement_title: "SUCCÈS DÉVERROUILLÉ !",
        achievement_desc: "Maître Rétro : Konami Code exécuté ! (+5000 XP)"
    },
    en: {
        nav_about: "About",
        nav_software: "Software",
        nav_art: "Art",
        nav_video: "Video",
        nav_contact: "Contact",
        game_mode_btn: "GAME MODE",
        
        hero_intro_start: "hi, ",
        hero_intro_name: "romain",
        hero_intro_end: " here.",
        hero_subtitle: "Passionate about designing and creating video games.",
        hero_desc_merged: "Game Designer & Programmer. I build interactive digital worlds. Student at ISART Digital passionate about software architecture and Gameplay Programming. I mainly code in C# (Unity/Godot) and Python.",
        btn_say_hi: "Say hi!",
        
        about_title: "about me",
        moti_p1: "I am currently a first-year student in Game Design & Programming at ISART Digital. Always passionate about video games and their rich universes, I oriented my path towards game design.",
        moti_p2: "Alongside my studies, I develop my skills self-taught on various languages and engines. My ambition is to work as a Gameplay Programmer.",
        philo_title: "My Vision & Philosophy",
        philo_1: "<strong>Silent Strength :</strong> Power without the need for validation, action speaks louder than words.",
        philo_2: "<strong>Excellence by Habit :</strong> Making quality a repetition, not an isolated act.",
        philo_3: "<strong>Design Systems :</strong> <em>\"Create systems that resist the player to highlight their intelligence and effort.\"</em>",
        tech_intro: "Here are some technologies I have been working with:",
        tech_prog: "Gameplay Programming",
        tech_archi: "Architecture (Design Patterns)",
        tech_gd: "Game Design & UX",
        tech_loops: "Loop Theory & 3C",
        
        software_title: "software",
        pfilter_all: "All",
        pfilter_unity: "Unity & C#",
        pfilter_godot: "Godot & C#",
        pfilter_python: "Python & Tools",
        featured_overline: "Featured Project",
        p_terrain_title: "3D Procedural Terrain",
        p_terrain_desc: "Modular real-time procedural 3D terrain generator built in <strong>Unity 6 (URP)</strong> with C#. Features multi-octave fractal Perlin noise (<strong>fBm</strong>: octaves, persistence, lacunarity), non-linear height redistribution via <strong>AnimationCurve</strong>, dynamic biome texture baking (water, sand, rock, snow), and real-time procedural 3D mesh synthesis (<strong>MeshData</strong>) with dynamic colliders and interactive <strong>Custom Editor</strong>.",
        p_shmup_title: "AEGIS OVERDRIVE (SHMUP)",
        p_shmup_desc: "Shoot 'em up built in Godot with C# featuring a rigorous <strong>Command Pattern</strong> architecture. Heavy focus on <strong>Game Feel</strong> and <strong>Juiciness</strong>: dynamic <em>Hit Stop</em> on impact, adaptive screen shake, rhythm-synced procedural bullet patterns, and zero-GC entity pooling.",
        
        p_zelda_title: "Zelda Remake",
        p_zelda_desc: "Solo refactor in Unity with robust architecture: <strong>State Machine</strong> for player combat states, <strong>Stateless Behavior Tree</strong> for enemy AI, and <strong>IDataPersistence</strong> contract with encrypted disk saves. Scriptable inventory system and Koholint camera follow.",
        p_puissance4_title: "Connect 4",
        p_puissance4_desc: "A Connect 4 game developed with Pygame, including automatic size adaptation, error management and victory system.",
        p_mario_title: "Python Mario",
        p_mario_desc: "Creation of a Mario level using 2D arrays, with an innovative movement system based on matrix manipulation.",
        p_godot_title: "Peach Multiplayer",
        p_godot_desc: "Remake of Super Mario World on SNES with Peach. Aimed at learning GDscript and local Multiplayer basics.",
        p_yt_title: "Youtube Uploader",
        p_yt_desc_short: "Automated Python script for uploading videos via the official YouTube API.",
        p_unreal_title: "Unreal Engine Project",
        p_unreal_desc_short: "3D mechanics prototyping: modular health system and procedural climbing mechanics using Unreal Engine Blueprints.",
        p_sokoban_title: "SOKOBAN (Fake 3D in 2D)",
        p_sokoban_desc: "Casino-themed reimagining of Sokoban. Rolling dice discrete physics, <strong>Command Pattern</strong> architecture for infinite Undo/Redo, <strong>A*</strong> pathfinding, and juicy visual feedbacks.",
        p_mobile_title: "Mobile Mini Game OFG",
        p_mobile_desc: "One Finger Game local multiplayer (2 players on a single touchscreen). Advanced mathematical design using <strong>Polar Coordinate Systems</strong> and <strong>applied trigonometry</strong> for seamless touch interactions.",
        p_rider_title: "Rider Skate",
        p_rider_desc: "Hybrid 2.5D mobile arcade runner pairing deterministic 2D physics with dynamic 3D rendering (URP). Modular <strong>State Machine</strong> and <strong>Data-Driven</strong> architecture (ScriptableObjects). Custom simulation: local tangential acceleration, vector <strong>Ground Stick</strong> for extreme looping adherence, magnetic grinds on <strong>Bézier Splines</strong> with <strong>Pumping</strong>, skill-based <strong>Perfect Stomp</strong> (&plusmn;5&deg;) landings, and a persistent <strong>Procedural Quest System</strong>.",
        p_short_title: "Short Creation Engine",
        p_short_desc: "Automated video clipping engine transforming long videos into 9/16 Shorts/TikToks. Accelerated by <strong>NVIDIA GPUs (CUDA)</strong>, multiprocessing, and a Tkinter GUI.",
        p_isart_title: "ISART Summer School Project",
        p_isart_desc1: "Top-down 2D action game built in Unity. Bow and projectile combat system, enemy wave manager, and boss AI pattern State Machine.",
        view_all_projects: "View All Projects",
        
        art_title: "art gallery",
        art_desc: "A collection of my digital and traditional artwork, exploring different styles and mediums.",
        filter_all: "All",
        filter_art: "Drawing",
        filter_photo: "Photography",
        art_btn_more: "Show more",
        art_btn_less: "Show less",
        
        video_title: "video gallery",
        video_desc: "My video edits, motion design, and gameplay trailers.",
        v_terrain_title: "3D World Generator (Unity)",
        v_terrain_desc: "Full devlog covering the creation of a real-time procedural terrain generator in Unity 6.",
        v_trailer1_title: "Zelda Remake (Unity)",
        v_trailer1_desc: "Devlog on the creation of a Zelda Link's Awakening remake in Unity.",
        v_trailer2_title: "Best Of REPO",
        v_trailer2_desc: "Fun and dynamic gaming montage of a REPO session with friends.",
        v_shmup_title: "SHMUP Walkthrough",
        v_shmup_desc: "Complete gameplay overview of Aegis Overdrive.",
        
        contact_overline: "04. What's Next?",
        contact_title: "Get In Touch",
        contact_text: "If my profile matches your search or if you want to chat about Game Dev, feel free to contact me. My inbox is always open.",
        achievement_title: "ACHIEVEMENT UNLOCKED!",
        achievement_desc: "Retro Master: Konami Code Executed! (+5000 XP)"
    }
};

// ==========================================
// SOUND MANAGER (Procedural Web Audio)
// ==========================================
const SoundManager = {
    ctx: null,
    
    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    },
    
    playHover() {
        if (!this.ctx || this.ctx.state === 'suspended') return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'sine'; 
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        const now = this.ctx.currentTime;
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + 0.05);
        
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.05, now + 0.01); // very subtle
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
        
        osc.start(now);
        osc.stop(now + 0.1);
    },
    
    playClick() {
        if (!this.ctx || this.ctx.state === 'suspended') return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'square';
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        const now = this.ctx.currentTime;
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.exponentialRampToValueAtTime(50, now + 0.03);
        
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.15, now + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        
        osc.start(now);
        osc.stop(now + 0.05);
        
        // Mechanical noise
        const bufferSize = this.ctx.sampleRate * 0.02;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }
        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;
        
        const noiseFilter = this.ctx.createBiquadFilter();
        noiseFilter.type = 'highpass';
        noiseFilter.frequency.value = 1000;
        
        const noiseGain = this.ctx.createGain();
        noiseGain.gain.setValueAtTime(0.1, now);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.02);
        
        noise.connect(noiseFilter);
        noiseFilter.connect(noiseGain);
        noiseGain.connect(this.ctx.destination);
        
        noise.start(now);
    },
    
    playStartup() {
        if (!this.ctx || this.ctx.state === 'suspended') return;
        const osc1 = this.ctx.createOscillator();
        const osc2 = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc1.type = 'square';
        osc2.type = 'sawtooth';
        
        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(this.ctx.destination);
        
        const now = this.ctx.currentTime;
        
        // Retro startup sweep
        osc1.frequency.setValueAtTime(150, now);
        osc1.frequency.exponentialRampToValueAtTime(600, now + 0.1);
        osc1.frequency.setValueAtTime(600, now + 0.1);
        osc1.frequency.exponentialRampToValueAtTime(1200, now + 0.3);
        
        osc2.frequency.setValueAtTime(152, now);
        osc2.frequency.exponentialRampToValueAtTime(605, now + 0.1);
        osc2.frequency.setValueAtTime(605, now + 0.1);
        osc2.frequency.exponentialRampToValueAtTime(1205, now + 0.3);
        
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.08, now + 0.05);
        gain.gain.setValueAtTime(0.08, now + 0.3);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
        
        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 0.8);
        osc2.stop(now + 0.8);
    },
    
    playShutdown() {
        if (!this.ctx || this.ctx.state === 'suspended') return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'sawtooth';
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        const now = this.ctx.currentTime;
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(50, now + 0.3);
        
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.1, now + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        
        osc.start(now);
        osc.stop(now + 0.4);
    },
    
    playProjectHover() {
        if (!this.ctx || this.ctx.state === 'suspended') return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'triangle'; // Warmer, rounder sound
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        const now = this.ctx.currentTime;
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.exponentialRampToValueAtTime(450, now + 0.1);
        
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.08, now + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
        
        osc.start(now);
        osc.stop(now + 0.15);
    },
    
    playExplosion() {
        if (!this.ctx || this.ctx.state === 'suspended') return;
        const now = this.ctx.currentTime;
        
        // Bass drop
        const osc = this.ctx.createOscillator();
        const oscGain = this.ctx.createGain();
        osc.type = 'square';
        
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.exponentialRampToValueAtTime(20, now + 0.5);
        
        oscGain.gain.setValueAtTime(0, now);
        oscGain.gain.linearRampToValueAtTime(0.2, now + 0.05);
        oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
        
        osc.connect(oscGain);
        oscGain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.5);
        
        // White noise crash
        const bufferSize = this.ctx.sampleRate * 0.5;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }
        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;
        
        const noiseFilter = this.ctx.createBiquadFilter();
        noiseFilter.type = 'lowpass';
        noiseFilter.frequency.setValueAtTime(3000, now);
        noiseFilter.frequency.exponentialRampToValueAtTime(100, now + 0.5);
        
        const noiseGain = this.ctx.createGain();
        noiseGain.gain.setValueAtTime(0, now);
        noiseGain.gain.linearRampToValueAtTime(0.3, now + 0.02);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
        
        noise.connect(noiseFilter);
        noiseFilter.connect(noiseGain);
        noiseGain.connect(this.ctx.destination);
        
        noise.start(now);
    },

    playFanfare() {
        if (!this.ctx) this.init();
        if (this.ctx.state === 'suspended') this.ctx.resume();
        const now = this.ctx.currentTime;
        
        // Zelda Secret & Triumph 8-bit Fanfare (G5, F#5, D#5, A4, G#4, E5, G#5, C6)
        const notes = [
            { freq: 783.99, duration: 0.11 },
            { freq: 739.99, duration: 0.11 },
            { freq: 622.25, duration: 0.11 },
            { freq: 440.00, duration: 0.11 },
            { freq: 415.30, duration: 0.11 },
            { freq: 659.25, duration: 0.11 },
            { freq: 830.61, duration: 0.12 },
            { freq: 1046.50, duration: 0.55 }
        ];
        
        let noteTime = now + 0.02;
        notes.forEach((note) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            
            osc.type = 'square';
            osc.frequency.setValueAtTime(note.freq, noteTime);
            
            gain.gain.setValueAtTime(0, noteTime);
            gain.gain.linearRampToValueAtTime(0.14, noteTime + 0.01);
            gain.gain.exponentialRampToValueAtTime(0.001, noteTime + note.duration);
            
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            
            osc.start(noteTime);
            osc.stop(noteTime + note.duration);
            
            noteTime += note.duration * 0.95;
        });
    }
};

window.addEventListener('mousedown', () => SoundManager.init(), { once: true });
window.addEventListener('keydown', () => SoundManager.init(), { once: true });

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. TRANSLATION LOGIC
    // ==========================================
    const langToggle = document.getElementById('language-toggle');
    let currentLang = localStorage.getItem('lang') || 'fr';

    function applyMatrixDecodeEffect(element, finalString) {
        // Only run if it's inside the hero-text
        if (!element.closest('.hero-text')) {
            element.innerHTML = finalString;
            return;
        }

        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
        let iterations = 0;
        const isLongText = finalString.length > 50;
        const speed = isLongText ? 15 : 30; 
        const charsPerIter = isLongText ? 2.5 : 1;
        
        let interval = setInterval(() => {
            let currentString = "";
            let lockedCount = Math.floor(iterations * charsPerIter);
            for (let i = 0; i < finalString.length; i++) {
                if (i < lockedCount) {
                    currentString += finalString[i];
                } else if (finalString[i] === ' ' || finalString[i] === '\n') {
                    currentString += finalString[i];
                } else {
                    currentString += chars[Math.floor(Math.random() * chars.length)];
                }
            }
            element.textContent = currentString;
            
            if (lockedCount >= finalString.length) {
                clearInterval(interval);
                element.innerHTML = finalString; 
            }
            iterations++;
        }, speed);
    }

    function setLanguage(lang) {
        document.documentElement.lang = lang;
        langToggle.textContent = lang === 'fr' ? 'EN' : 'FR';
        localStorage.setItem('lang', lang);
        
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'A' && element.children.length === 0) {
                     element.textContent = translations[lang][key];
                } else {
                    applyMatrixDecodeEffect(element, translations[lang][key]);
                }
            }
        });
    }

    setLanguage(currentLang);
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'fr' ? 'en' : 'fr';
        setLanguage(currentLang);
    });

    // ==========================================
    // 2. SCREEN SHAKE & TACTILE JUICE
    // ==========================================
    function triggerScreenShake(duration = 350) {
        document.body.classList.remove('screen-shake');
        void document.body.offsetWidth; // Force DOM reflow
        document.body.classList.add('screen-shake');
        setTimeout(() => {
            document.body.classList.remove('screen-shake');
        }, duration);
    }

    // ==========================================
    // 2.5 KONAMI CODE EASTER EGG (Juiciness & Gamification)
    // ==========================================
    function triggerKonamiEasterEgg() {
        SoundManager.playFanfare();
        triggerScreenShake(600);

        // Turn on Game Mode if not already active
        if (!isGameMode && gameModeBtn) {
            gameModeBtn.click();
        }

        // Boost XP Bar to 100% with animated rainbow glow
        const xpContainer = document.querySelector('.xp-bar-container');
        const xpBarFill = document.querySelector('.xp-bar-fill');
        if (xpContainer && xpBarFill) {
            xpContainer.classList.add('xp-bar-boosted');
            xpBarFill.style.width = '100%';
            setTimeout(() => {
                xpContainer.classList.remove('xp-bar-boosted');
            }, 6000);
        }

        // Show Achievement Toast
        const toast = document.getElementById('achievement-toast');
        if (toast) {
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 4500);
        }

        // Cyber fireworks particles across screen
        if (!window.clickSparks) window.clickSparks = [];
        const chars = ['★', '◆', 'XP', '1UP', '100%', '✦', '▲'];
        const colors = ['#eb6f92', '#f6c177', '#9ccfd8', '#c4a7e7', '#31748f'];
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        for (let i = 0; i < 50; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 12 + 3;
            window.clickSparks.push({
                x: centerX + (Math.random() - 0.5) * 200,
                y: centerY + (Math.random() - 0.5) * 200,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                char: chars[Math.floor(Math.random() * chars.length)],
                color: colors[Math.floor(Math.random() * colors.length)],
                life: 1.0,
                decay: Math.random() * 0.015 + 0.01
            });
        }
    }

    // Sequence: ↑ ↑ ↓ ↓ ← → ← → B A
    const konamiSequence = [
        'arrowup', 'arrowup',
        'arrowdown', 'arrowdown',
        'arrowleft', 'arrowright',
        'arrowleft', 'arrowright',
        'b', 'a'
    ];
    let konamiPointer = 0;

    window.addEventListener('keydown', (e) => {
        SoundManager.init();
        const key = e.key.toLowerCase();
        if (key === konamiSequence[konamiPointer]) {
            konamiPointer++;
            if (konamiPointer === konamiSequence.length) {
                konamiPointer = 0;
                triggerKonamiEasterEgg();
            }
        } else {
            konamiPointer = (key === konamiSequence[0]) ? 1 : 0;
        }
    });

    function explodeHeroText(clickX, clickY) {
        if (window.explodingLetters && window.explodingLetters.length > 0) return; // already exploding

        const textContainer = document.querySelector('.hero-text');
        if (!textContainer) return;
        
        const textElements = document.querySelectorAll('.hero-intro, .hero-title, .hero-subtitle, .hero-description');
        const letters = [];
        
        // Extract exact coordinates of each letter without modifying DOM
        textElements.forEach(el => {
            const style = window.getComputedStyle(el);
            const color = style.color;
            const font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
            
            function getTextNodes(node) {
                let nodes = [];
                if (node.nodeType === Node.TEXT_NODE) {
                    nodes.push(node);
                } else {
                    for (let child of node.childNodes) {
                        nodes = nodes.concat(getTextNodes(child));
                    }
                }
                return nodes;
            }
            
            const textNodes = getTextNodes(el);
            textNodes.forEach(node => {
                const text = node.textContent;
                for (let i = 0; i < text.length; i++) {
                    if (text[i].trim() === '') continue; // skip whitespace
                    
                    const range = document.createRange();
                    try {
                        range.setStart(node, i);
                        range.setEnd(node, i + 1);
                        const rect = range.getBoundingClientRect();
                        
                        if (rect.width > 0 && rect.height > 0) {
                            letters.push({
                                char: text[i],
                                x: rect.left,
                                y: rect.top + rect.height * 0.8, // approximate baseline
                                targetX: rect.left,
                                targetY: rect.top + rect.height * 0.8,
                                color: color,
                                font: font
                            });
                        }
                    } catch (e) {
                        // ignore range errors
                    }
                }
            });
        });
        
        // Hide DOM text
        textContainer.style.transition = 'none';
        textContainer.style.opacity = '0';
        
        // Initialize explosion physics
        const now = performance.now() / 1000;
        window.explodingLetters = letters.map(l => {
            const dx = l.x - clickX;
            const dy = l.y - clickY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            // Strong force originating from click
            const force = Math.max(0, 1 - dist / 800) * 45;
            return {
                ...l,
                vx: (dx / (dist || 1)) * force + (Math.random() - 0.5) * 15,
                vy: (dy / (dist || 1)) * force + (Math.random() - 0.5) * 15,
                explodedAt: now,
                repositioned: false
            };
        });
    }

    // Hook up sounds
    const interactiveElements = document.querySelectorAll('a, button, .interactive');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => SoundManager.playHover());
    });
    
    const projectCards = document.querySelectorAll('.featured-project, .folder-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => SoundManager.playProjectHover());
    });
    
    const sayHiBtn = document.querySelector('.btn-primary');
    if (sayHiBtn) {
        sayHiBtn.addEventListener('mousedown', () => SoundManager.playClick());
    }

    const gameModeBtn = document.getElementById('game-mode-toggle');
    const body = document.body;
    let isGameMode = false;

    gameModeBtn.addEventListener('click', () => {
        isGameMode = !isGameMode;
        triggerScreenShake(300);
        if (isGameMode) {
            body.classList.add('game-mode');
            body.classList.add('animating-crt');
            SoundManager.playStartup();
            // Remove animation class after 400ms to destroy containing block (fixes position: fixed cursor scroll bug)
            setTimeout(() => {
                body.classList.remove('animating-crt');
            }, 400);
        } else {
            body.classList.remove('game-mode');
            body.classList.remove('animating-crt');
            SoundManager.playShutdown();
        }
    });

    // ==========================================
    // 3. NAV SCROLL EFFECT & MOBILE MENU
    // ==========================================
    let lastScrollTop = 0;
    const header = document.querySelector('.header');

    let isNavTicking = false;

    window.addEventListener('scroll', () => {
        if (!isNavTicking) {
            window.requestAnimationFrame(() => {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                if (scrollTop > lastScrollTop && scrollTop > 100) {
                    // Scroll Down
                    header.style.transform = 'translateY(-100%)';
                } else {
                    // Scroll Up
                    header.style.transform = 'translateY(0)';
                }
                lastScrollTop = scrollTop;
                isNavTicking = false;
            });
            isNavTicking = true;
        }
    }, { passive: true });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            const isActive = navLinks.classList.toggle('active');
            body.classList.toggle('menu-open', isActive);
            mobileMenuBtn.setAttribute('aria-expanded', isActive);
            
            // Update icon
            if (isActive) {
                mobileMenuBtn.innerHTML = '<i data-feather="x"></i>';
            } else {
                mobileMenuBtn.innerHTML = '<i data-feather="menu"></i>';
            }
            if (window.feather) feather.replace();
        });
        
        // Close menu when clicking a link
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('active');
                body.classList.remove('menu-open');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                mobileMenuBtn.innerHTML = '<i data-feather="menu"></i>';
                if (window.feather) feather.replace();
            });
        });
    }
    // ==========================================
    // 4. ASCII PORTRAIT LOGIC
    // ==========================================
    const initAsciiPortrait = () => {
        const canvas = document.getElementById("ascii-canvas");
        if (!canvas) return;

        const calculateSize = (width) => {
            if (width <= 480) return Math.min(300, Math.max(260, width - 40));
            if (width <= 768) return Math.min(420, width - 60);
            return 800; // Will use largest available
        };

        let size = calculateSize(window.innerWidth);
        let particles = [];
        let dataReady = false;
        let animationId;
        const mouse = { x: -1000, y: -1000, active: false };
        const mouseTarget = { x: -1000, y: -1000 };
        let startTime = 0;
        let staticAsciiCanvas = null;
        let lastActiveTime = 0;

        const createParticlesFromRaw = (rawParticles, isMobileSize, scaleFactor = 1, offsetX = 0, offsetY = 0) => {
            // Keep 50% density for buttery smooth 60fps performance on all devices
            const filteredParticles = rawParticles.filter((_, index) => index % 2 === 0);
            
            // Scaled font size
            const baseFontSize = isMobileSize ? 5 : 6;
            const fontSize = Math.max(3, Math.round(baseFontSize * scaleFactor));
            
            return filteredParticles.map((p) => {
                const tx = p.x * scaleFactor + offsetX;
                const ty = p.y * scaleFactor + offsetY;
                return {
                    x: tx + (Math.random() - 0.5) * (isMobileSize ? 100 : 400),
                    y: ty + (Math.random() - 0.5) * (isMobileSize ? 100 : 400),
                    targetX: tx,
                    targetY: ty,
                    vx: 0,
                    vy: 0,
                    char: p.char,
                    fontSize: fontSize,
                    baseAlpha: p.alpha,
                    currentAlpha: 0,
                    delay: Math.random() * 0.35,
                    shimmer: Math.random() * Math.PI * 2,
                };
            });
        };

        let rgbColor = '235, 111, 146';
        
        const updateCachedColor = () => {
            const style = getComputedStyle(document.body);
            let colorStr = style.getPropertyValue('--green').trim() || '#eb6f92'; 
            const hexToRgb = (hex) => {
                let r = 0, g = 0, b = 0;
                if (hex.length == 4) {
                    r = parseInt(hex[1]+hex[1], 16);
                    g = parseInt(hex[2]+hex[2], 16);
                    b = parseInt(hex[3]+hex[3], 16);
                } else if (hex.length == 7) {
                    r = parseInt(hex.substring(1,3), 16);
                    g = parseInt(hex.substring(3,5), 16);
                    b = parseInt(hex.substring(5,7), 16);
                }
                return `${r}, ${g}, ${b}`;
            };
            rgbColor = colorStr.startsWith('#') ? hexToRgb(colorStr) : '235, 111, 146';
        };

        const setupCanvas = () => {
            staticAsciiCanvas = null;
            updateCachedColor();
            const isMobileSize = size <= 420;
            let dataSize = "500";
            if (size <= 320) dataSize = "320";
            else if (size <= 500) dataSize = "500";
            else dataSize = "800";

            const rawData = asciiData[dataSize] || asciiData[Object.keys(asciiData)[0]];
            if (rawData) {
                const baseWidth = dataSize === "320" ? 320 : (dataSize === "500" ? 500 : 800);
                const scaleFactor = isMobileSize ? (size / baseWidth) : 1;

                // Center drawing inside canvas for mobile
                let offsetX = 0;
                let offsetY = 0;
                if (isMobileSize && dataSize === "320") {
                    const contentCenterX = ((82 + 291) / 2) * scaleFactor;
                    const contentCenterY = ((81 + 371) / 2) * scaleFactor;
                    offsetX = (size / 2) - contentCenterX;
                    offsetY = (size / 2) - contentCenterY;
                }

                particles = createParticlesFromRaw(rawData, isMobileSize, scaleFactor, offsetX, offsetY);
                dataReady = true;
                startTime = performance.now();
            }

            const dpr = window.devicePixelRatio || 1;
            canvas.width = size * dpr;
            canvas.height = size * dpr;
            canvas.style.width = `${size}px`;
            canvas.style.height = `${size}px`;

            const ctx = canvas.getContext("2d");
            ctx.scale(dpr, dpr);
            return ctx;
        };

        let ctx = setupCanvas();

        const gameBtn = document.getElementById('game-mode-toggle');
        if (gameBtn) {
            gameBtn.addEventListener('click', () => {
                setTimeout(() => {
                    updateCachedColor();
                    staticAsciiCanvas = null;
                    wakeAscii();
                }, 50);
            });
        }

        let isAsciiVisible = true;
        let isAsciiAnimating = false;

        const wakeAscii = () => {
            if (!isAsciiVisible || document.hidden) return;
            if (!isAsciiAnimating) {
                isAsciiAnimating = true;
                if (animationId) cancelAnimationFrame(animationId);
                animationId = requestAnimationFrame(draw);
            }
        };

        const sleepAscii = () => {
            isAsciiAnimating = false;
            if (animationId) {
                cancelAnimationFrame(animationId);
                animationId = null;
            }
        };

        let resizeAsciiTimeout;
        window.addEventListener("resize", () => {
            clearTimeout(resizeAsciiTimeout);
            resizeAsciiTimeout = setTimeout(() => {
                const newSize = calculateSize(window.innerWidth);
                if (newSize !== size) {
                    size = newSize;
                    ctx = setupCanvas();
                }
                wakeAscii();
            }, 200);
        });

        const draw = () => {
            if (!isAsciiVisible || document.hidden) {
                sleepAscii();
                return;
            }

            ctx.clearRect(0, 0, size, size);

            if (!dataReady || particles.length === 0) {
                animationId = requestAnimationFrame(draw);
                return;
            }

            const elapsed = (performance.now() - startTime) / 1000;

            if (mouse.active) {
                lastActiveTime = elapsed;
            }

            mouse.x += (mouseTarget.x - mouse.x) * 0.15;
            mouse.y += (mouseTarget.y - mouse.y) * 0.15;

            // Cache static portrait and SLEEP loop once settled to consume 0% CPU/GPU
            const isMobile = size <= 420;
            const settleDelay = isMobile ? 1.5 : 2.5;
            const minTime = isMobile ? 2.5 : 4.5;
            const isSettled = !mouse.active && (elapsed - lastActiveTime > settleDelay) && (elapsed > minTime) && (elapsed - (window.lastAsciiExplosionTime || 0) > 2.0);

            if (isSettled) {
                if (!staticAsciiCanvas) {
                    staticAsciiCanvas = document.createElement('canvas');
                    staticAsciiCanvas.width = canvas.width;
                    staticAsciiCanvas.height = canvas.height;
                    const sCtx = staticAsciiCanvas.getContext('2d');
                    const dpr = window.devicePixelRatio || 1;
                    sCtx.scale(dpr, dpr);
                    
                    const sampleFontSize = (particles[0] && particles[0].fontSize) ? particles[0].fontSize : (isMobile ? 5 : 6);
                    sCtx.font = `${sampleFontSize}px monospace`;
                    sCtx.textAlign = "center";
                    sCtx.textBaseline = "middle";
                    sCtx.fillStyle = `rgb(${rgbColor})`;
                    
                    particles.forEach((p) => {
                        sCtx.globalAlpha = p.baseAlpha;
                        sCtx.fillText(p.char, p.targetX, p.targetY);
                    });
                }
                ctx.drawImage(staticAsciiCanvas, 0, 0, size, size);
                sleepAscii();
                return;
            } else {
                staticAsciiCanvas = null;
            }

            const currentFontSize = (particles[0] && particles[0].fontSize) ? particles[0].fontSize : (isMobile ? 5 : 6);
            ctx.font = `${currentFontSize}px monospace`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillStyle = `rgb(${rgbColor})`;

            particles.forEach((p) => {
                const particleTime = elapsed - p.delay;
                if (particleTime < 0) return;

                const fadeProgress = Math.min(particleTime / 1.5, 1);
                const easedFade = 1 - Math.pow(1 - fadeProgress, 2);
                
                const isActive = mouse.active || particleTime < 3.0;
                const shimmerVal = isActive ? Math.sin(elapsed * 2 + p.shimmer) * 0.1 : 0;
                p.currentAlpha = Math.max(0, p.baseAlpha * easedFade + shimmerVal);

                const moveProgress = Math.min(particleTime / 2.5, 1);
                const easedMove = 1 - Math.pow(1 - moveProgress, 3);

                if (mouse.active) {
                    const dx = p.x - mouse.x;
                    const dy = p.y - mouse.y;
                    const maxDist = size * 0.2;
                    const distSq = dx * dx + dy * dy;

                    if (distSq < maxDist * maxDist && distSq > 0) {
                        const dist = Math.sqrt(distSq);
                        const force = (1 - dist / maxDist) * 4;
                        p.vx += (dx / dist) * force;
                        p.vy += (dy / dist) * force;
                    }
                }

                const dx = p.targetX - p.x;
                const dy = p.targetY - p.y;

                const pullStrength = 0.01 + easedMove * 0.08;
                p.vx += dx * pullStrength;
                p.vy += dy * pullStrength;

                if (isActive) {
                    const breathX = Math.sin(elapsed * 0.5 + p.targetY * 0.1) * 0.15;
                    const breathY = Math.cos(elapsed * 0.5 + p.targetX * 0.1) * 0.15;
                    p.vx += breathX;
                    p.vy += breathY;
                    p.vx *= 0.92;
                    p.vy *= 0.92;
                } else {
                    p.vx *= 0.85;
                    p.vy *= 0.85;
                    
                    if (particleTime > 4.0 && Math.abs(dx) < 0.01 && Math.abs(dy) < 0.01) {
                        p.x = p.targetX;
                        p.y = p.targetY;
                        p.vx = 0;
                        p.vy = 0;
                    }
                }

                p.x += p.vx;
                p.y += p.vy;

                if (p.explodedAt !== undefined) {
                    const timeSinceExplode = elapsed - p.explodedAt;
                    if (timeSinceExplode > 0.1 && timeSinceExplode < 0.6) {
                        if (timeSinceExplode > 0.55 && timeSinceExplode < 0.58 && !p.repositioned) {
                            p.x = p.targetX + (Math.random() - 0.5) * 400;
                            p.y = p.targetY + (Math.random() - 0.5) * 400;
                            p.vx = 0;
                            p.vy = 0;
                            p.repositioned = true;
                        }
                        return;
                    }
                    if (timeSinceExplode >= 0.6) {
                        if (timeSinceExplode > 2.0) {
                            p.explodedAt = undefined;
                            p.repositioned = false;
                        } else {
                            const progress = Math.min((timeSinceExplode - 0.6) / 1.0, 1);
                            p.currentAlpha = p.baseAlpha * progress;
                        }
                    }
                }

                ctx.globalAlpha = p.currentAlpha;
                ctx.fillText(p.char, p.x, p.y);
            });
            ctx.globalAlpha = 1;

            animationId = requestAnimationFrame(draw);
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseTarget.x = e.clientX - rect.left;
            mouseTarget.y = e.clientY - rect.top;
            mouse.active = true;
            wakeAscii();
        };

        const handleTouchMove = (e) => {
            if (!e.touches || e.touches.length === 0) return;
            const rect = canvas.getBoundingClientRect();
            const touch = e.touches[0];
            mouseTarget.x = touch.clientX - rect.left;
            mouseTarget.y = touch.clientY - rect.top;
            mouse.active = true;
            wakeAscii();
            // NEVER call preventDefault so user can scroll and pinch-zoom freely!
        };

        const handleTouchStart = (e) => {
            if (!e.touches || e.touches.length === 0) return;
            const rect = canvas.getBoundingClientRect();
            const touch = e.touches[0];
            mouseTarget.x = touch.clientX - rect.left;
            mouseTarget.y = touch.clientY - rect.top;
            mouse.active = true;
            wakeAscii();
        };

        const handleLeave = () => {
            mouse.active = false;
            mouseTarget.x = -1000;
            mouseTarget.y = -1000;
        };

        canvas.addEventListener("mousemove", handleMouseMove, { passive: true });
        canvas.addEventListener("mouseleave", handleLeave, { passive: true });
        canvas.addEventListener("touchstart", handleTouchStart, { passive: true });
        canvas.addEventListener("touchmove", handleTouchMove, { passive: true });
        canvas.addEventListener("touchend", handleLeave, { passive: true });
        canvas.addEventListener("touchcancel", handleLeave, { passive: true });

        // ASCII Explosion on click / tap
        const triggerExplosionAt = (clientX, clientY) => {
            wakeAscii();
            const rect = canvas.getBoundingClientRect();
            const clickX = clientX - rect.left;
            const clickY = clientY - rect.top;
            
            triggerScreenShake(300);
            window.lastAsciiExplosionTime = (performance.now() - startTime) / 1000;

            explodeHeroText(clientX, clientY);
            
            const now = (performance.now() - startTime) / 1000;
            particles.forEach((p) => {
                const dx = p.x - clickX;
                const dy = p.y - clickY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < size * 0.4) {
                    const force = (1 - dist / (size * 0.4)) * 25;
                    const angle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 0.5;
                    p.vx = Math.cos(angle) * force;
                    p.vy = Math.sin(angle) * force;
                    p.explodedAt = now;
                    p.repositioned = false;
                }
            });
        };

        canvas.addEventListener("mousedown", (e) => {
            triggerExplosionAt(e.clientX, e.clientY);
        });

        // IntersectionObserver - wake/sleep loop when scrolling into/out of view
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                isAsciiVisible = true;
                wakeAscii();
            } else {
                isAsciiVisible = false;
                sleepAscii();
            }
        }, { threshold: 0.1 });
        observer.observe(canvas);

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                sleepAscii();
            } else {
                wakeAscii();
            }
        });

        wakeAscii();
    };

    initAsciiPortrait();
    // ==========================================
    // 5. SCROLL ANIMATIONS & JUICINESS
    // ==========================================
    const setupAnimations = () => {
        // Initial setup for Hero section elements to stagger in
        const heroElements = document.querySelectorAll('.hero-intro, .hero-title, .hero-subtitle, .hero-description, .btn-primary');
        heroElements.forEach((el, index) => {
            el.classList.add('reveal-up');
            el.style.transitionDelay = `${index * 0.1}s`;
            // Trigger reflow to apply classes instantly
            void el.offsetWidth;
            el.classList.add('visible');
        });

        // Intersection Observer for other elements
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements with .reveal-up that are not hero elements
        const revealElements = document.querySelectorAll('.reveal-up:not(.visible)');
        revealElements.forEach(el => observer.observe(el));

        // Observe stagger containers
        const staggerContainers = document.querySelectorAll('.stagger-container');
        staggerContainers.forEach(container => observer.observe(container));
    };

    // Run setup after a small delay to allow initial rendering
    setTimeout(setupAnimations, 100);

    // ==========================================
    // 5.4 SOFTWARE PROJECT FILTER LOGIC
    // ==========================================
    const projectFilterBtns = document.querySelectorAll('.project-filters .project-filter-btn');
    const projectItemsToFilter = document.querySelectorAll('.featured-project, .folder-card');

    projectFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (typeof SoundManager !== 'undefined') SoundManager.playClick();

            projectFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectItemsToFilter.forEach(card => {
                const tech = card.getAttribute('data-tech') || '';
                if (filterValue === 'all' || tech.toLowerCase().includes(filterValue.toLowerCase())) {
                    card.classList.remove('project-hidden');
                } else {
                    card.classList.add('project-hidden');
                }
            });
        });
    });

    // ==========================================
    // 5.5 GALLERY FILTER & "VOIR PLUS" LOGIC
    // ==========================================
    const filterBtns = document.querySelectorAll('.gallery-filters .filter-btn');
    const artCards = document.querySelectorAll('#art-gallery-grid .gallery-card');
    const galleryMoreContainer = document.getElementById('gallery-more-container');
    const galleryMoreBtn = document.getElementById('gallery-more-btn');

    const GALLERY_VISIBLE_LIMIT = 6;
    let isGalleryExpanded = false;
    let currentGalleryFilter = 'all';

    function updateGalleryItems() {
        let matchingCount = 0;
        const activeLang = localStorage.getItem('lang') || 'fr';

        artCards.forEach(card => {
            const category = card.getAttribute('data-category');
            const matchesFilter = (currentGalleryFilter === 'all' || category === currentGalleryFilter);

            if (!matchesFilter) {
                card.classList.add('hidden');
                card.classList.remove('gallery-overflow');
            } else {
                card.classList.remove('hidden');
                matchingCount++;

                if (!isGalleryExpanded && matchingCount > GALLERY_VISIBLE_LIMIT) {
                    card.classList.add('gallery-overflow');
                } else {
                    card.classList.remove('gallery-overflow');
                }
            }
        });

        // Show/hide the "Voir plus" button based on total matching count
        if (galleryMoreContainer) {
            if (matchingCount > GALLERY_VISIBLE_LIMIT) {
                galleryMoreContainer.style.display = 'flex';
            } else {
                galleryMoreContainer.style.display = 'none';
            }
        }

        // Update button text and state
        if (galleryMoreBtn) {
            const textSpan = galleryMoreBtn.querySelector('.btn-more-text');
            if (isGalleryExpanded) {
                galleryMoreBtn.classList.add('expanded');
                galleryMoreBtn.setAttribute('aria-expanded', 'true');
                if (textSpan) {
                    textSpan.setAttribute('data-i18n', 'art_btn_less');
                    textSpan.textContent = translations[activeLang]?.art_btn_less || (activeLang === 'fr' ? 'Voir moins' : 'Show less');
                }
            } else {
                galleryMoreBtn.classList.remove('expanded');
                galleryMoreBtn.setAttribute('aria-expanded', 'false');
                if (textSpan) {
                    textSpan.setAttribute('data-i18n', 'art_btn_more');
                    textSpan.textContent = translations[activeLang]?.art_btn_more || (activeLang === 'fr' ? 'Voir plus' : 'Show more');
                }
            }
        }
    }

    if (galleryMoreBtn) {
        galleryMoreBtn.addEventListener('click', () => {
            if (typeof SoundManager !== 'undefined') SoundManager.playClick();
            isGalleryExpanded = !isGalleryExpanded;
            updateGalleryItems();

            if (!isGalleryExpanded) {
                const artSection = document.getElementById('art');
                if (artSection) {
                    artSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (typeof SoundManager !== 'undefined') SoundManager.playClick();

            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            currentGalleryFilter = btn.getAttribute('data-filter') || 'all';
            isGalleryExpanded = false; // Reset to 6 visible when changing filter
            updateGalleryItems();
        });
    });

    // Initial setup: limit to 6 visible photos on load
    updateGalleryItems();

    // ==========================================
    // 6. PHASE 2: CUSTOM CURSOR, AMBIENT, XP BAR
    // ==========================================
    
    // XP Scroll Bar
    const xpBarFill = document.querySelector('.xp-bar-fill');
    let cachedScrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let isXpTicking = false;
    
    window.addEventListener('resize', () => {
        cachedScrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    }, { passive: true });

    window.addEventListener('scroll', () => {
        if (!isXpTicking) {
            window.requestAnimationFrame(() => {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const scrollPercentage = (scrollTop / cachedScrollHeight) * 100;
                if(xpBarFill) {
                    xpBarFill.style.width = scrollPercentage + '%';
                }
                isXpTicking = false;
            });
            isXpTicking = true;
        }
    }, { passive: true });

    // Custom Cursor
    const cursor = document.getElementById('cursor');
    const cursorFollower = document.getElementById('cursor-follower');
    
    // Check if device is primarily touch (using standard media query instead of maxTouchPoints which breaks on hybrid laptops)
    const isTouchDevice = (window.matchMedia("(any-pointer: coarse)").matches && !window.matchMedia("(any-pointer: fine)").matches) || (window.innerWidth <= 768);
    
    let cursorMouseX = 0, cursorMouseY = 0;
    let followerX = 0, followerY = 0;
    const ambientGlow = document.querySelector('.ambient-glow');

    if (!isTouchDevice && cursor && cursorFollower) {
        let cursorAnimId = null;

        function updateCursorDOM() {
            // Instantly move the small dot
            cursor.style.transform = `translate3d(${cursorMouseX}px, ${cursorMouseY}px, 0)`;
            
            // Move ambient glow if it exists
            if (ambientGlow) {
                ambientGlow.style.left = `${cursorMouseX}px`;
                ambientGlow.style.top = `${cursorMouseY}px`;
            }

            let dx = cursorMouseX - followerX;
            let dy = cursorMouseY - followerY;
            
            followerX += dx * 0.15; // Easing factor
            followerY += dy * 0.15;
            
            cursorFollower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;

            // Keep ticking while follower is moving towards cursor
            if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
                cursorAnimId = requestAnimationFrame(updateCursorDOM);
            } else {
                cursorAnimId = null;
            }
        }

        function requestCursorTick() {
            if (!cursorAnimId) {
                cursorAnimId = requestAnimationFrame(updateCursorDOM);
            }
        }

        document.addEventListener('mousemove', (e) => {
            cursorMouseX = e.clientX;
            cursorMouseY = e.clientY;
            requestCursorTick();
        }, { passive: true });

        // Add hover effect to interactive elements
        const interactives = document.querySelectorAll('a, button, .folder-card, .featured-img-container, .gallery-card');
        interactives.forEach(el => {
            el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
            el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
        });
    }

    // ==========================================
    // 7. INTERACTIVE CANVAS BACKGROUND
    // ==========================================
    const bgCanvas = document.getElementById('bg-canvas');
    if (bgCanvas && !isTouchDevice) {
        const ctx = bgCanvas.getContext('2d');
        let width, height;
        let bgParticles = [];
        let bgAnimationId = null;
        let isBgRunning = false;
        
        // Mouse interaction
        let bgMouse = {
            x: null,
            y: null,
            radius: 150
        };

        window.addEventListener('mousemove', (event) => {
            bgMouse.x = event.clientX;
            bgMouse.y = event.clientY;
        }, { passive: true });
        
        window.addEventListener('mousedown', (e) => {
            // Text explosion triggers sound
            if (window.explodingLetters && !window.explodingLetters.some(l => !l.repositioned)) {
                SoundManager.playExplosion();
                triggerScreenShake(300);
            }
            explodeHeroText(e.clientX, e.clientY);
            
            if (!window.clickRipples) window.clickRipples = [];
            
            // Cyber Ripple (expanding diamond)
            window.clickRipples.push({
                x: e.clientX,
                y: e.clientY,
                size: 2,
                life: 1.0
            });
        });

        // Resize canvas (debounced)
        let resizeTimeout;
        function resizeBg() {
            width = bgCanvas.width = window.innerWidth;
            height = bgCanvas.height = window.innerHeight;
            initBgParticles();
        }
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(resizeBg, 200);
        });

        // Particle Class
        class BgParticle {
            constructor(x, y, dx, dy, size) {
                this.x = x;
                this.y = y;
                this.dx = dx;
                this.dy = dy;
                this.size = size;
                this.baseX = this.x;
                this.baseY = this.y;
                this.density = (Math.random() * 30) + 1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(235, 111, 146, 0.5)'; // Using theme green (pinkish)
                ctx.fill();
            }

            update() {
                // Bounce off edges
                if (this.x > width || this.x < 0) this.dx = -this.dx;
                if (this.y > height || this.y < 0) this.dy = -this.dy;

                // Move
                this.x += this.dx;
                this.y += this.dy;

                // Mouse interactivity (Repel)
                if (bgMouse.x != null) {
                    let dx = bgMouse.x - this.x;
                    let dy = bgMouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    let forceDirectionX = dx / distance;
                    let forceDirectionY = dy / distance;
                    
                    const maxDistance = bgMouse.radius;
                    let force = (maxDistance - distance) / maxDistance;
                    if (force < 0) force = 0;
                    
                    let directionX = forceDirectionX * force * this.density;
                    let directionY = forceDirectionY * force * this.density;

                    if (distance < bgMouse.radius) {
                        this.x -= directionX;
                        this.y -= directionY;
                    } else {
                        if (this.x !== this.baseX) {
                            let dx = this.x - this.baseX;
                            this.x -= dx / 10;
                        }
                        if (this.y !== this.baseY) {
                            let dy = this.y - this.baseY;
                            this.y -= dy / 10;
                        }
                    }
                }

                this.draw();
            }
        }

        function initBgParticles() {
            bgParticles = [];
            const isMobile = window.innerWidth <= 768;
            // Adaptive particle density: ~20 on mobile, ~50 on desktop
            const maxParticles = isMobile ? 22 : 55;
            const divisor = isMobile ? 35000 : 25000;
            const numberOfParticles = Math.min(maxParticles, Math.max(15, Math.floor((width * height) / divisor)));
            
            for (let i = 0; i < numberOfParticles; i++) {
                let size = (Math.random() * 2) + 1;
                let x = (Math.random() * ((width - size * 2) - (size * 2)) + size * 2);
                let y = (Math.random() * ((height - size * 2) - (size * 2)) + size * 2);
                let dx = (Math.random() - 0.5) * 1.2;
                let dy = (Math.random() - 0.5) * 1.2;
                bgParticles.push(new BgParticle(x, y, dx, dy, size));
            }
        }

        // Draw connecting lines with O(N^2) spatial bounding box optimization
        function connectBg() {
            // Skip connecting lines on mobile screens to save GPU/battery
            if (window.innerWidth <= 768) return;

            const maxDist = 120;
            const maxDistSq = maxDist * maxDist;
            
            ctx.lineWidth = 1.0;
            ctx.beginPath();
            let hasLines = false;
            
            for (let a = 0; a < bgParticles.length; a++) {
                const pA = bgParticles[a];
                for (let b = a + 1; b < bgParticles.length; b++) {
                    const pB = bgParticles[b];
                    
                    // Fast bounding box rejection (skips ~80% of multiplications)
                    const dx = Math.abs(pA.x - pB.x);
                    if (dx > maxDist) continue;
                    const dy = Math.abs(pA.y - pB.y);
                    if (dy > maxDist) continue;
                    
                    const distSq = dx * dx + dy * dy;
                    if (distSq > maxDistSq) continue;
                    
                    ctx.moveTo(pA.x, pA.y);
                    ctx.lineTo(pB.x, pB.y);
                    hasLines = true;
                }
            }
            if (hasLines) {
                ctx.strokeStyle = 'rgba(235, 111, 146, 0.15)';
                ctx.stroke();
            }
        }

        function animateBg() {
            if (!isBgRunning) return;
            bgAnimationId = requestAnimationFrame(animateBg);
            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < bgParticles.length; i++) {
                bgParticles[i].update();
            }
            connectBg();
            
            // Draw Exploding Hero Text (if active)
            if (window.explodingLetters && window.explodingLetters.length > 0) {
                const now = performance.now() / 1000;
                let allDone = true;
                
                window.explodingLetters.forEach(l => {
                    const timeSince = now - l.explodedAt;
                    let currentAlpha = 1;
                    
                    if (timeSince < 0.15) {
                        // Flying outwards
                        currentAlpha = 1;
                        allDone = false;
                    } else if (timeSince < 0.6) {
                        // Disappeared
                        currentAlpha = 0;
                        if (!l.repositioned && timeSince > 0.55) {
                            l.x = l.targetX + (Math.random() - 0.5) * 400;
                            l.y = l.targetY + (Math.random() - 0.5) * 400;
                            l.vx = 0;
                            l.vy = 0;
                            l.repositioned = true;
                        }
                        allDone = false;
                    } else if (timeSince < 2.0) {
                        // Rebuilding
                        const buildProgress = Math.min((timeSince - 0.6) / 1.4, 1);
                        currentAlpha = 1 - Math.pow(1 - buildProgress, 2); // ease out
                        
                        // Physics pull
                        const dx = l.targetX - l.x;
                        const dy = l.targetY - l.y;
                        l.vx += dx * 0.04;
                        l.vy += dy * 0.04;
                        l.vx *= 0.85;
                        l.vy *= 0.85;
                        allDone = false;
                    } else {
                        // Done
                        currentAlpha = 1;
                        l.x = l.targetX;
                        l.y = l.targetY;
                    }
                    
                    l.x += l.vx;
                    l.y += l.vy;
                    
                    if (currentAlpha > 0) {
                        ctx.font = l.font;
                        ctx.fillStyle = l.color;
                        ctx.globalAlpha = currentAlpha;
                        ctx.fillText(l.char, l.x, l.y);
                        ctx.globalAlpha = 1; // reset
                    }
                });
                
                // Cleanup when animation finished
                if (allDone) {
                    window.explodingLetters = [];
                    const textContainer = document.querySelector('.hero-text');
                    if (textContainer) {
                        textContainer.style.transition = 'opacity 0.5s ease';
                        textContainer.style.opacity = '1';
                    }
                }
            }
            
            // Draw Digital Ripples
            if (window.clickRipples && window.clickRipples.length > 0) {
                for (let i = window.clickRipples.length - 1; i >= 0; i--) {
                    let r = window.clickRipples[i];
                    r.size += 2.5;
                    r.life -= 0.04;
                    if (r.life <= 0) {
                        window.clickRipples.splice(i, 1);
                        continue;
                    }
                    ctx.strokeStyle = '#eb6f92';
                    ctx.globalAlpha = r.life * 0.6;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    // Diamond shape
                    ctx.moveTo(r.x, r.y - r.size);
                    ctx.lineTo(r.x + r.size, r.y);
                    ctx.lineTo(r.x, r.y + r.size);
                    ctx.lineTo(r.x - r.size, r.y);
                    ctx.closePath();
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                }
            }
            
            // Draw ASCII Sparks
            if (window.clickSparks && window.clickSparks.length > 0) {
                for (let i = window.clickSparks.length - 1; i >= 0; i--) {
                    let s = window.clickSparks[i];
                    s.x += s.vx;
                    s.y += s.vy;
                    // Digital friction (no gravity for cyber feel)
                    s.vx *= 0.92; 
                    s.vy *= 0.92; 
                    s.life -= s.decay;
                    
                    if (s.life <= 0) {
                        window.clickSparks.splice(i, 1);
                        continue;
                    }
                    
                    ctx.font = "14px 'Courier New', Courier, monospace";
                    ctx.fillStyle = s.color;
                    ctx.globalAlpha = s.life;
                    ctx.fillText(s.char, s.x, s.y);
                    ctx.globalAlpha = 1;
                }
            }
        }

        function startBgLoop() {
            if (!isBgRunning && !document.hidden) {
                isBgRunning = true;
                bgAnimationId = requestAnimationFrame(animateBg);
            }
        }

        function stopBgLoop() {
            if (isBgRunning) {
                isBgRunning = false;
                if (bgAnimationId) {
                    cancelAnimationFrame(bgAnimationId);
                    bgAnimationId = null;
                }
            }
        }

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                stopBgLoop();
            } else {
                startBgLoop();
            }
        });

        resizeBg();
        startBgLoop();
        
        // Mouse out event to release particles
        window.addEventListener('mouseout', () => {
            bgMouse.x = null;
            bgMouse.y = null;
        });
    }

    // ==========================================
    // 8. 3D PARALLAX TILT EFFECT
    // ==========================================
    if (!isTouchDevice) {
        const tiltCards = document.querySelectorAll('.folder-card');
        
        tiltCards.forEach(card => {
            // Create glare element
            const glare = document.createElement('div');
            glare.classList.add('tilt-glare');
            card.appendChild(glare);

            let tiltFrameId = null;

            card.addEventListener('mouseenter', () => {
                card.style.transition = 'transform 0s';
                glare.style.transition = 'opacity 0.3s ease';
            });

            card.addEventListener('mousemove', (e) => {
                if (tiltFrameId) {
                    window.cancelAnimationFrame(tiltFrameId);
                }
                
                tiltFrameId = window.requestAnimationFrame(() => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    // Calculate rotation (max 10 degrees)
                    const rotateX = ((y - centerY) / centerY) * -10;
                    const rotateY = ((x - centerX) / centerX) * 10;
                    
                    card.style.transform = `perspective(1000px) translateY(-7px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                    
                    // Move glare
                    const glareX = (x / rect.width) * 100;
                    const glareY = (y / rect.height) * 100;
                    glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.1) 0%, transparent 60%)`;
                    tiltFrameId = null;
                });
            });

            card.addEventListener('mouseleave', () => {
                if (tiltFrameId) {
                    window.cancelAnimationFrame(tiltFrameId);
                    tiltFrameId = null;
                }
                // Restore original CSS transition
                card.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                glare.style.transition = 'opacity 0.4s ease';
                // Remove inline transform so CSS takes over
                card.style.transform = '';
                glare.style.background = `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)`;
                
                // Clear the inline transition after it completes to avoid inline specificity issues later
                setTimeout(() => {
                    card.style.transition = '';
                }, 400);
            });
        });
    }

    // ==========================================
    // 9. VIDEO MODAL LOGIC
    // ==========================================
    const videoModal = document.getElementById('video-modal');
    const modalVideoContainer = document.querySelector('.modal-video-container');
    const closeModalBtn = document.querySelector('.close-modal');
    const videoCards = document.querySelectorAll('.video-card');

    if (videoModal && modalVideoContainer && closeModalBtn) {
        function openModal(type, src) {
            modalVideoContainer.innerHTML = '';
            
            if (type === 'youtube') {
                modalVideoContainer.innerHTML = `<iframe src="${src}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            } else if (type === 'local') {
                modalVideoContainer.innerHTML = `<video controls autoplay style="width: 100%; height: 100%; object-fit: contain;"><source src="${src}" type="video/mp4">Your browser does not support the video tag.</video>`;
            }
            
            videoModal.classList.add('show');
            document.body.style.overflow = 'hidden'; 
        }

        function closeModal() {
            videoModal.classList.remove('show');
            document.body.style.overflow = '';
            
            setTimeout(() => {
                modalVideoContainer.innerHTML = '';
            }, 300);
        }

        videoCards.forEach(card => {
            card.addEventListener('click', () => {
                const type = card.getAttribute('data-type');
                const src = card.getAttribute('data-src');
                if (type && src) {
                    if (typeof SoundManager !== 'undefined') SoundManager.playClick();
                    openModal(type, src);
                }
            });
            card.style.cursor = 'pointer';
        });

        closeModalBtn.addEventListener('click', closeModal);
        
        window.addEventListener('click', (e) => {
            if (e.target === videoModal) {
                closeModal();
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && videoModal.classList.contains('show')) {
                closeModal();
            }
        });
    }

    // ==========================================
    // 9.5 IMAGE LIGHTBOX MODAL LOGIC
    // ==========================================
    const imageModal = document.getElementById('image-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeImageModalBtn = document.getElementById('close-image-modal');
    const galleryCards = document.querySelectorAll('#art-gallery-grid .gallery-card');

    if (imageModal && lightboxImg && lightboxCaption && closeImageModalBtn) {
        function openImageModal(src, alt) {
            lightboxImg.src = src;
            lightboxImg.alt = alt || '';
            lightboxCaption.textContent = alt || '';
            imageModal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }

        function closeImageModal() {
            imageModal.classList.remove('show');
            document.body.style.overflow = '';
            setTimeout(() => {
                lightboxImg.src = '';
                lightboxCaption.textContent = '';
            }, 300);
        }

        galleryCards.forEach(card => {
            card.addEventListener('click', () => {
                const img = card.querySelector('img');
                if (img) {
                    if (typeof SoundManager !== 'undefined') SoundManager.playClick();
                    openImageModal(img.src, img.alt);
                }
            });
        });

        closeImageModalBtn.addEventListener('click', closeImageModal);

        window.addEventListener('click', (e) => {
            if (e.target === imageModal) {
                closeImageModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && imageModal.classList.contains('show')) {
                closeImageModal();
            }
        });
    }

});