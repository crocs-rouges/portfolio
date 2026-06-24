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
        p_sokoban_desc: "Made in GDP1. Réinterprétation du Sokoban sur le thème du casino. Intègre une mécanique de dé roulant, architecture propre (Command pattern, A*) et Juiciness.",
        p_mobile_title: "Mobile Mini Game OFG",
        p_mobile_desc: "Réalisé en GDP1. One Finger Game inspiré de MUCHO PARTY. Un jeu 2 joueurs sur un seul téléphone (split screen ou full screen partagé), réalisé en 1 mois.",
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
        p_sokoban_desc: "Made in GDP1. Casino-themed reinterpretation of Sokoban. Features a rolling dice mechanic, clean architecture (Command pattern, A*), and Juiciness.",
        p_mobile_title: "Mobile Mini Game OFG",
        p_mobile_desc: "Made in GDP1. One Finger Game inspired by MUCHO PARTY. A 2-player game on a single phone (split or shared full screen), developed in 1 month.",
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

    function applyMatrixDecodeEffect(element, finalString) {
        // Only run if it's a hero element
        if (!element.classList.contains('hero-intro') && 
            !element.classList.contains('hero-title') && 
            !element.classList.contains('hero-subtitle') && 
            !element.classList.contains('hero-description')) {
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
    // 2. GAME MODE LOGIC
    // ==========================================
    function triggerLocalTextShake() {
        // Disabled in favor of canvas particle explosion
    }

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

    const gameModeBtn = document.getElementById('game-mode-toggle');
    const body = document.body;
    let isGameMode = false;

    gameModeBtn.addEventListener('click', () => {
        isGameMode = !isGameMode;
        triggerLocalTextShake();
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

                if (p.explodedAt !== undefined) {
                    const timeSinceExplode = elapsed - p.explodedAt;
                    if (timeSinceExplode > 0.1 && timeSinceExplode < 0.6) {
                        // Disappear instantly
                        if (timeSinceExplode > 0.55 && timeSinceExplode < 0.58 && !p.repositioned) {
                            p.x = p.targetX + (Math.random() - 0.5) * 400;
                            p.y = p.targetY + (Math.random() - 0.5) * 400;
                            p.vx = 0;
                            p.vy = 0;
                            p.repositioned = true;
                        }
                        return; // skip rendering
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

        // ASCII Explosion on click
        canvas.addEventListener("mousedown", (e) => {
            const rect = canvas.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;
            
            // Explode the adjacent HTML text in the global canvas!
            explodeHeroText(e.clientX, e.clientY);
            
            const now = (performance.now() - startTime) / 1000;
            particles.forEach((p) => {
                const dx = p.x - clickX;
                const dy = p.y - clickY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < size * 0.5) {
                    const force = (1 - dist / (size * 0.5)) * 40;
                    p.vx += (dx / dist) * force;
                    p.vy += (dy / dist) * force;
                }
                p.explodedAt = now;
                p.repositioned = false;
            });
        });

        draw();
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
    // 6. PHASE 2: CUSTOM CURSOR, AMBIENT, XP BAR
    // ==========================================
    
    // XP Scroll Bar
    const xpBarFill = document.querySelector('.xp-bar-fill');
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        if(xpBarFill) {
            xpBarFill.style.width = scrollPercentage + '%';
        }
    });

    // Custom Cursor
    const cursor = document.getElementById('cursor');
    const cursorFollower = document.getElementById('cursor-follower');
    
    // Check if device supports hover (ignore mobile)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (!isTouchDevice && cursor && cursorFollower) {
        let mouseX = 0, mouseY = 0;
        let followerX = 0, followerY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Instantly move the small dot
            cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
            
            // Move ambient glow if it exists
            const ambientGlow = document.querySelector('.ambient-glow');
            if(ambientGlow) {
                ambientGlow.style.left = `${mouseX}px`;
                ambientGlow.style.top = `${mouseY}px`;
            }
        });

        // Smooth follow for the larger circle
        function animateFollower() {
            let dx = mouseX - followerX;
            let dy = mouseY - followerY;
            
            followerX += dx * 0.15; // Easing factor
            followerY += dy * 0.15;
            
            cursorFollower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
            requestAnimationFrame(animateFollower);
        }
        animateFollower();

        // Add hover effect to interactive elements
        const interactives = document.querySelectorAll('a, button, .folder-card, .featured-img-container');
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
        
        // Mouse interaction
        let bgMouse = {
            x: null,
            y: null,
            radius: 150
        };

        window.addEventListener('mousemove', (event) => {
            bgMouse.x = event.clientX;
            bgMouse.y = event.clientY;
        });
        
        // 5. ✨ Particules au Clic (Click Sparks)
        window.addEventListener('mousedown', (e) => {
            if (!window.clickSparks) window.clickSparks = [];
            const count = 12 + Math.random() * 8;
            const colors = ['#eb6f92', '#9ccfd8', '#f6c177', '#c4a7e7']; // Rose Pine theme colors
            for (let i = 0; i < count; i++) {
                const angle = Math.random() * Math.PI * 2;
                const velocity = 2 + Math.random() * 5;
                window.clickSparks.push({
                    x: e.clientX,
                    y: e.clientY,
                    vx: Math.cos(angle) * velocity,
                    vy: Math.sin(angle) * velocity,
                    life: 1.0,
                    decay: 0.015 + Math.random() * 0.03,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    size: 1 + Math.random() * 3
                });
            }
        });

        // Resize canvas
        function resizeBg() {
            width = bgCanvas.width = window.innerWidth;
            height = bgCanvas.height = window.innerHeight;
            initBgParticles();
        }
        window.addEventListener('resize', resizeBg);

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
                if(bgMouse.x != null) {
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
            let numberOfParticles = (width * height) / 9000; // Density
            for (let i = 0; i < numberOfParticles; i++) {
                let size = (Math.random() * 2) + 1;
                let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
                let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
                let dx = (Math.random() - 0.5) * 1;
                let dy = (Math.random() - 0.5) * 1;
                bgParticles.push(new BgParticle(x, y, dx, dy, size));
            }
        }

        // Draw connecting lines
        function connectBg() {
            let opacityValue = 1;
            for (let a = 0; a < bgParticles.length; a++) {
                for (let b = a; b < bgParticles.length; b++) {
                    let distance = ((bgParticles[a].x - bgParticles[b].x) * (bgParticles[a].x - bgParticles[b].x))
                                 + ((bgParticles[a].y - bgParticles[b].y) * (bgParticles[a].y - bgParticles[b].y));
                    if (distance < (width / 7) * (height / 7)) {
                        opacityValue = 1 - (distance / 20000);
                        ctx.strokeStyle = `rgba(235, 111, 146, ${opacityValue * 0.2})`; // Theme green
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(bgParticles[a].x, bgParticles[a].y);
                        ctx.lineTo(bgParticles[b].x, bgParticles[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animateBg() {
            requestAnimationFrame(animateBg);
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
            
            // Draw Sparks
            if (window.clickSparks && window.clickSparks.length > 0) {
                for (let i = window.clickSparks.length - 1; i >= 0; i--) {
                    let s = window.clickSparks[i];
                    s.x += s.vx;
                    s.y += s.vy;
                    // Physics
                    s.vy += 0.15; // gravity
                    s.vx *= 0.96; // friction
                    s.vy *= 0.96; // friction
                    s.life -= s.decay;
                    
                    if (s.life <= 0) {
                        window.clickSparks.splice(i, 1);
                        continue;
                    }
                    
                    ctx.beginPath();
                    ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
                    ctx.fillStyle = s.color;
                    ctx.globalAlpha = s.life;
                    ctx.fill();
                    ctx.globalAlpha = 1;
                }
            }
        }

        resizeBg();
        animateBg();
        
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

            card.addEventListener('mouseenter', () => {
                card.style.transition = 'transform 0s';
                glare.style.transition = 'opacity 0.3s ease';
            });

            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                // Calculate rotation (max 10 degrees)
                const rotateX = ((y - centerY) / centerY) * -10;
                const rotateY = ((x - centerX) / centerX) * 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                
                // Move glare
                const glareX = (x / rect.width) * 100;
                const glareY = (y / rect.height) * 100;
                glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.1) 0%, transparent 60%)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transition = 'transform 0.4s ease-out';
                glare.style.transition = 'opacity 0.4s ease';
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
                glare.style.background = `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)`;
            });
        });
    }

});