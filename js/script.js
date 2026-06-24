// ==========================================
// TRANSLATION SYSTEM
// ==========================================
const translations = {
    fr: {
        nav_about: "About",
        nav_software: "Software",
        nav_contact: "Contact",
        game_mode_btn: "GAME MODE",
        
        hero_intro: "salut, moi c'est romain.",
        hero_title: "Game Designer & Programmer.",
        hero_subtitle: "Je crée des mondes interactifs.",
        hero_desc_minimal: "Étudiant à ISART Digital. Passionné par l'architecture logicielle, la création d'univers immersifs et le Gameplay Programming. Je code principalement en C# (Unity/Godot) et Python.",
        btn_say_hi: "Say hi!",
        
        about_title: "about me",
        moti_p1: "Je suis actuellement étudiant en première année de Game Design & Programming à ISART Digital. Passionné depuis toujours par les jeux vidéo et la richesse de leurs univers, j'ai orienté mon parcours vers la conception vidéoludique.",
        moti_p2: "En parallèle de ma formation, je développe mes compétences en autodidacte sur différents langages et moteurs. Mon ambition est d'exercer le métier de Gameplay Programmer.",
        tech_intro: "Voici quelques technologies avec lesquelles je travaille :",
        
        software_title: "software",
        featured_overline: "Projet Phare",
        p_shmup_title: "AEGIS OVERDRIVE (SHMUP)",
        p_shmup_desc: "Shoot 'em up réalisé lors de ma première année à ISART Digital. Ce projet de 2 mois, entièrement développé sur Godot en C#, est axé sur l'intégration d'effets de 'Juiciness' et une architecture de code rigoureuse.",
        
        p_zelda_title: "Remake Zelda",
        p_zelda_desc: "Réalisation de Link's Awakening sur Unity avec système de combat, inventaire et sauvegarde JSON, système d'inventaire et de swap d'armes.",
        p_puissance4_title: "Puissance 4",
        p_puissance4_desc: "Un jeu de Puissance 4 développé avec Pygame, incluant une adaptation automatique de la taille, gestion des erreurs et système de victoire.",
        p_mario_title: "Python Mario",
        p_mario_desc: "Création d'un niveau de Mario avec des tableaux 2D et un système de mouvement par manipulation de matrices.",
        p_godot_title: "Peach Multiplayer",
        p_godot_desc: "Remake de Super Mario World sur SNES avec Peach. Apprentissage du GDscript et du Multiplayer local sur Godot.",
        p_yt_title: "Youtube Uploader",
        p_yt_desc_short: "Script Python automatisé pour l'upload de vidéos via l'API officielle de YouTube.",
        p_unreal_title: "Unreal Engine Project",
        p_unreal_desc_short: "Création d'un système de vie et de mécaniques d'escalade via les Blueprints d'Unreal Engine.",
        p_sokoban_title: "SOKOBAN (GDP1)",
        p_sokoban_desc: "Réinterprétation du Sokoban sur le thème du casino. Intègre une mécanique de dé roulant, architecture propre (Command pattern, A*) et Juiciness.",
        p_mobile_title: "Mobile Mini Game OFG",
        p_mobile_desc: "One Finger Game inspiré de MUCHO PARTY. Un jeu 2 joueurs sur un seul téléphone (split screen ou full screen partagé), réalisé en 1 mois.",
        p_rider_title: "Rider Skate",
        p_rider_desc: "Jeu d'arcade mobile 2.5D alliant la fluidité de Rider et la technicité du skate. Physique 2D avec visuels 3D, système de tricks et rails dynamiques.",
        view_all_projects: "Voir tous les projets",
        
        contact_overline: "04. Et ensuite ?",
        contact_title: "Get In Touch",
        contact_text: "Si mon profil correspond à vos recherches ou si vous souhaitez échanger autour du Game Dev, n'hésitez pas à me contacter. Je suis toujours ouvert à de nouvelles opportunités."
    },
    en: {
        nav_about: "About",
        nav_software: "Software",
        nav_contact: "Contact",
        game_mode_btn: "GAME MODE",
        
        hero_intro: "hi, romain here.",
        hero_title: "Game Designer & Programmer.",
        hero_subtitle: "I build interactive digital worlds.",
        hero_desc_minimal: "Student at ISART Digital. Passionate about software architecture, creating immersive worlds, and Gameplay Programming. I mainly code in C# (Unity/Godot) and Python.",
        btn_say_hi: "Say hi!",
        
        about_title: "about me",
        moti_p1: "I am currently a first-year student in Game Design & Programming at ISART Digital. Always passionate about video games and their rich universes, I oriented my path towards game design.",
        moti_p2: "Alongside my studies, I develop my skills self-taught on various languages and engines. My ambition is to work as a Gameplay Programmer.",
        tech_intro: "Here are some technologies I have been working with:",
        
        software_title: "software",
        featured_overline: "Featured Project",
        p_shmup_title: "AEGIS OVERDRIVE (SHMUP)",
        p_shmup_desc: "Shoot 'em up created during my first year at ISART Digital. This 2-month project, fully developed on Godot using C#, focuses on implementing 'Juiciness' effects and rigorous code architecture.",
        
        p_zelda_title: "Zelda Remake",
        p_zelda_desc: "Recreation of Link's Awakening on Unity with combat system, inventory, JSON save, and weapon swapping.",
        p_puissance4_title: "Connect 4",
        p_puissance4_desc: "A Connect 4 game developed with Pygame, including automatic size adaptation, error management and victory system.",
        p_mario_title: "Python Mario",
        p_mario_desc: "Creation of a Mario level using 2D arrays, with an innovative movement system based on matrix manipulation.",
        p_godot_title: "Peach Multiplayer",
        p_godot_desc: "Remake of Super Mario World on SNES with Peach. Aimed at learning GDscript and local Multiplayer basics.",
        p_yt_title: "Youtube Uploader",
        p_yt_desc_short: "Automated Python script for uploading videos via the official YouTube API.",
        p_unreal_title: "Unreal Engine Project",
        p_unreal_desc_short: "Creation of a health system and climbing mechanics via Unreal Engine Blueprints.",
        p_sokoban_title: "SOKOBAN (GDP1)",
        p_sokoban_desc: "Casino-themed reinterpretation of Sokoban. Features a rolling dice mechanic, clean architecture (Command pattern, A*), and Juiciness.",
        p_mobile_title: "Mobile Mini Game OFG",
        p_mobile_desc: "One Finger Game inspired by MUCHO PARTY. A 2-player game on a single phone (split or shared full screen), developed in 1 month.",
        p_rider_title: "Rider Skate",
        p_rider_desc: "2.5D mobile arcade game combining Rider's fluidity and skateboarding techniques. 2D physics with 3D visuals, trick system, and dynamic rails.",
        view_all_projects: "View All Projects",
        
        contact_overline: "04. What's Next?",
        contact_title: "Get In Touch",
        contact_text: "If my profile matches your search or if you want to chat about Game Dev, feel free to contact me. My inbox is always open."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. TRANSLATION LOGIC
    // ==========================================
    const langToggle = document.getElementById('language-toggle');
    let currentLang = localStorage.getItem('lang') || 'fr';

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
                    element.innerHTML = translations[lang][key];
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
    // 2. GAME MODE LOGIC
    // ==========================================
    const gameModeBtn = document.getElementById('game-mode-toggle');
    const body = document.body;
    let isGameMode = false;

    gameModeBtn.addEventListener('click', () => {
        isGameMode = !isGameMode;
        if (isGameMode) {
            body.classList.add('game-mode');
        } else {
            body.classList.remove('game-mode');
        }
    });

    // ==========================================
    // 3. NAV SCROLL EFFECT
    // ==========================================
    let lastScrollTop = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scroll Down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scroll Up
            header.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });
    // ==========================================
    // 4. ASCII PORTRAIT LOGIC
    // ==========================================
    const initAsciiPortrait = () => {
        const canvas = document.getElementById("ascii-canvas");
        if (!canvas) return;

        const calculateSize = (width) => {
            if (width <= 480) return Math.min(320, width - 40);
            if (width <= 768) return Math.min(500, width - 60);
            return 800; // Will use largest available
        };

        let size = calculateSize(window.innerWidth);
        let particles = [];
        let dataReady = false;
        let animationId;
        const mouse = { x: -1000, y: -1000, active: false };
        const mouseTarget = { x: -1000, y: -1000 };
        let startTime = 0;

        const createParticlesFromRaw = (rawParticles, isMobileSize) => {
            const fontSize = isMobileSize ? 4 : 5;
            return rawParticles.map((p) => ({
                x: p.x + (Math.random() - 0.5) * 400,
                y: p.y + (Math.random() - 0.5) * 400,
                targetX: p.x,
                targetY: p.y,
                vx: 0,
                vy: 0,
                char: p.char,
                fontSize: fontSize,
                baseAlpha: p.alpha,
                currentAlpha: 0,
                delay: Math.random() * 0.4,
                shimmer: Math.random() * Math.PI * 2,
            }));
        };

        const setupCanvas = () => {
            const isMobileSize = size <= 320;
            let dataSize = "500";
            if (size <= 320) dataSize = "320";
            else if (size <= 500) dataSize = "500";
            else dataSize = "800";

            const rawData = asciiData[dataSize] || asciiData[Object.keys(asciiData)[0]];
            if (rawData) {
                particles = createParticlesFromRaw(rawData, isMobileSize);
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

        window.addEventListener("resize", () => {
            size = calculateSize(window.innerWidth);
            ctx = setupCanvas();
        });

        const draw = () => {
            animationId = requestAnimationFrame(draw);
            ctx.clearRect(0, 0, size, size);

            if (!dataReady || particles.length === 0) return;

            const elapsed = (performance.now() - startTime) / 1000;

            mouse.x += (mouseTarget.x - mouse.x) * 0.15;
            mouse.y += (mouseTarget.y - mouse.y) * 0.15;

            const isMobileSize = size <= 320;
            const fontSize = isMobileSize ? 4 : 5;
            ctx.font = `${fontSize}px monospace`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            // Grab the CSS variable color for dynamic theme support
            const style = getComputedStyle(document.body);
            let colorStr = style.getPropertyValue('--green').trim() || '#eb6f92'; 
            // the variable in Gazi layout is --green, which we set to the Rose Pine highlight

            // A tiny helper to parse hex and use alpha
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
            let rgbColor = colorStr.startsWith('#') ? hexToRgb(colorStr) : '235, 111, 146';

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
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const maxDist = size * 0.2;

                    if (dist < maxDist && dist > 0) {
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

                ctx.fillStyle = `rgba(${rgbColor}, ${p.currentAlpha})`;
                ctx.fillText(p.char, p.x, p.y);
            });
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseTarget.x = e.clientX - rect.left;
            mouseTarget.y = e.clientY - rect.top;
            mouse.active = true;
        };

        const handleTouchMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            const touch = e.touches[0];
            mouseTarget.x = touch.clientX - rect.left;
            mouseTarget.y = touch.clientY - rect.top;
            mouse.active = true;
            if (e.cancelable) e.preventDefault();
        };

        const handleLeave = () => {
            mouse.active = false;
            mouseTarget.x = -1000;
            mouseTarget.y = -1000;
        };

        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseleave", handleLeave);
        canvas.addEventListener("touchmove", handleTouchMove, { passive: false });
        canvas.addEventListener("touchend", handleLeave);

        draw();
    };

    initAsciiPortrait();

});