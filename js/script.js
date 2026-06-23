// ==========================================
// TRANSLATION SYSTEM
// ==========================================
const translations = {
    fr: {
        nav_about: "À propos",
        nav_projects: "Projets",
        nav_cv: "CV",
        nav_motivation: "Motivations",
        nav_recommendation: "Recommandation",
        nav_contact: "Contact",
        
        hero_greeting: "Bonjour, je suis",
        hero_subtitle: "passionné par la conception et la création de jeux vidéo.",
        hero_desc: "Actuellement étudiant en Game Design & Programming à ISART Digital, je me spécialise dans le Gameplay Programming. Passionné par la technique et la création d'univers immersifs, je développe mes compétences sur Unity, Unreal Engine et divers langages de programmation.",
        
        about_title: "À propos de moi",
        about_job_title: "Métier souhaité",
        about_job_desc: "Je souhaite exercer le métier de Gameplay Programmer. Ce rôle est pour moi le point de convergence idéal entre la technique et le design, permettant de donner vie aux mécaniques de jeu et de concrétiser la vision créative.",
        about_softskills: "Savoir-être & Intérêts",
        about_softskill_1: "Passionné par l'architecture des jeux, j'aime décortiquer les mécaniques complexes et relever des défis techniques (programmation, optimisation).",
        about_softskill_2: "Curieux de nature, je m'intéresse aux sciences (physique quantique, IA) et à la culture japonaise, langue que j'apprends depuis 3 ans.",
        about_softskill_3: "Persévérant et rigoureux, je m'investis pleinement dans la résolution de problèmes pour aboutir à des solutions propres et fonctionnelles.",
        
        skills_title: "Compétences",
        skills_cat_languages: "Langages",
        skills_cat_engines: "Moteurs & Outils",
        
        projects_title: "Projets notables",
        p_shmup_title: "AEGIS OVERDRIVE (SHMUP)",
        p_shmup_desc: "Shoot 'em up réalisé lors de ma première année à ISART Digital. Ce projet de 2 mois, entièrement développé sur Godot en C#, est axé sur l'intégration d'effets de 'Juiciness' et une architecture de code rigoureuse.",
        p_puissance4_title: "Puissance 4",
        p_puissance4_desc: "Un jeu de Puissance 4 développé avec Pygame, incluant une adaptation automatique de la taille, gestion des erreurs et système de victoire, mode 2 joueurs avec un changement de couleurs.",
        p_mario_title: "Mario en 2D",
        p_mario_desc: "Réalisation d'un niveau de Mario en utilisant des tableaux 2D, avec un système de mouvement innovant basé sur la manipulation de matrices.",
        p_zelda_title: "Remake Zelda",
        p_zelda_desc: "Réalisation de Link's Awakening sur Unity avec système de combat, inventaire et sauvegarde JSON, système d'inventaire et de swap d'armes à la Zelda.",
        p_short_title: "Short Création",
        p_short_desc: "Application pour couper de longues vidéos au format 9/16 avec tkinter, python et cuda pour utiliser la puissance des GPU nvidia et le multiprocessing.",
        p_isart_title: "ISART Summer School Project",
        p_isart_desc1: "Réalisation d'un jeu sur unity en 2D top down en visual scripting.",
        p_isart_desc2: "Le but du jeu est de battre tous les ennemis et affronter le grand méchant avec des pierres et un arc.",
        p_cloud_title: "Cloud File Explorer",
        p_cloud_desc1: "Application de sauvegarde de dossiers sécurisés par login, contenant des documents.",
        p_cloud_desc2: "Réalisé en groupe dans le cadre scolaire.",
        p_portfolio_title: "Le Portfolio",
        p_portfolio_desc: "Réalisation d'un portfolio pour montrer mes réalisations et mes compétences.",
        p_unreal_title: "Unreal Engine Project",
        p_unreal_desc: "Projet débuté en 2022. Création d'un système de barre de vie (nombre de cœurs) et d'un personnage qui fait de l'escalade via Blueprint.",
        p_yt_title: "Youtube Uploader",
        p_yt_desc: "Script python permettant de mettre en ligne des vidéos via l'api officielle de youtube et un projet google cloud.",
        p_tiktok_title: "TikTok Creation Upload",
        p_tiktok_desc: "Script python utilisant des hashtags pour télécharger des vidéos tiktok et programmer des publications sur 10 jours.",
        p_godot_title: "Peach Multiplayer in Godot",
        p_godot_desc: "Remake de Super Mario World sur SNES avec Peach. Apprentissage du GDscript et des bases du Multiplayer local sur Godot.",
        
        moti_title: "Mes Motivations",
        moti_p1: "Je suis actuellement étudiant en première année de Game Design & Programming à ISART Digital. Passionné depuis toujours par les jeux vidéo et la richesse de leurs univers, j'ai orienté mon parcours vers la conception vidéoludique.",
        moti_p2: "En parallèle de ma formation, je développe mes compétences en autodidacte sur différents langages et moteurs (C#, Unity, Python, Unreal Engine, JavaScript). Ma curiosité s'étend également aux sciences, à la physique quantique et à la culture japonaise.",
        moti_p3: "Mon ambition est d'exercer le métier de Gameplay Programmer. Ce rôle représente pour moi l'opportunité de combiner technique et design, en participant concrètement à la réalisation du jeu.",
        moti_p4: "J'ai pu confirmer cette vocation à travers divers projets et expériences, notamment lors de la Summer School d'ISART Digital en juillet 2024. Aujourd'hui, je m'investis pleinement dans mes études et mes projets.",
        moti_lang_prog: "Langages de programmation",
        moti_lang_other: "Autres compétences",
        
        cv_title: "CV",
        cv_download_btn: "Télécharger mon CV (PDF)",
        contact_title: "Contact",
        contact_email: "Vous pouvez me joindre par mail à l'adresse suivante : romain.chevalier40@gmail.com",
        contact_phone: "Mon numéro de téléphone est : 06 09 13 48 80"
    },
    en: {
        nav_about: "About",
        nav_projects: "Projects",
        nav_cv: "CV",
        nav_motivation: "Motivations",
        nav_recommendation: "Recommendation",
        nav_contact: "Contact",
        
        hero_greeting: "Hello, I am",
        hero_subtitle: "passionate about video game design and creation.",
        hero_desc: "Currently a Game Design & Programming student at ISART Digital, I specialize in Gameplay Programming. Passionate about technology and creating immersive worlds, I am developing my skills in Unity, Unreal Engine, and various programming languages.",
        
        about_title: "About me",
        about_job_title: "Desired Job",
        about_job_desc: "I aim to work as a Gameplay Programmer. For me, this role is the perfect bridge between technology and design, allowing me to bring game mechanics to life and realize the creative vision.",
        about_softskills: "Soft Skills & Interests",
        about_softskill_1: "Passionate about game architecture, I enjoy breaking down complex mechanics and tackling technical challenges (programming, optimization).",
        about_softskill_2: "Curious by nature, I am interested in science (quantum physics, AI) and Japanese culture, a language I have been learning for 3 years.",
        about_softskill_3: "Perseverant and rigorous, I fully invest myself in problem-solving to deliver clean and functional solutions.",
        
        skills_title: "Skills",
        skills_cat_languages: "Languages",
        skills_cat_engines: "Engines & Tools",
        
        projects_title: "Notable Projects",
        p_shmup_title: "AEGIS OVERDRIVE (SHMUP)",
        p_shmup_desc: "Shoot 'em up created during my first year at ISART Digital. This 2-month project, fully developed on Godot using C#, focuses on implementing 'Juiciness' effects and rigorous code architecture.",
        p_puissance4_title: "Connect 4",
        p_puissance4_desc: "A Connect 4 game developed with Pygame, including automatic size adaptation, error management and victory system, 2-player mode with color change.",
        p_mario_title: "Mario 2D",
        p_mario_desc: "Creation of a Mario level using 2D arrays, with an innovative movement system based on matrix manipulation.",
        p_zelda_title: "Zelda Remake",
        p_zelda_desc: "Recreation of Link's Awakening on Unity with combat system, inventory, and JSON save, inventory system and weapon swapping.",
        p_short_title: "Short Creation",
        p_short_desc: "Application used to cut long videos into 9/16 format with tkinter, python, and cuda to use nvidia GPUs and multiprocessing.",
        p_isart_title: "ISART Summer School Project",
        p_isart_desc1: "Creation of a 2D top-down game on Unity using visual scripting.",
        p_isart_desc2: "The goal of the game is to defeat all enemies and face the big bad guy with stones and a bow.",
        p_cloud_title: "Cloud File Explorer",
        p_cloud_desc1: "Secure folder backup application project by login, containing documents.",
        p_cloud_desc2: "Realized in a group within the school framework.",
        p_portfolio_title: "The Portfolio",
        p_portfolio_desc: "Creation of a portfolio to show my achievements and skills.",
        p_unreal_title: "Unreal Engine Project",
        p_unreal_desc: "Project started in 2022 to discover blueprints. Focuses on creating a health bar system and a climbing character.",
        p_yt_title: "Youtube Uploader",
        p_yt_desc: "Python script that allows uploading videos to youtube using the official API and Google Cloud.",
        p_tiktok_title: "TikTok Creation Upload",
        p_tiktok_desc: "Python script that uses hashtags to download tiktok videos and schedule posts over 10 days.",
        p_godot_title: "Peach Multiplayer in Godot",
        p_godot_desc: "Remake of Super Mario World on SNES with Peach. Aimed at learning GDscript and local Multiplayer basics.",
        
        moti_title: "My Motivations",
        moti_p1: "I am currently a first-year student in Game Design & Programming at ISART Digital. Passionate about video games and the richness of their universes, I oriented my path towards video game design.",
        moti_p2: "In parallel with my training, I am developing my skills as an autodidact on different languages and engines (C#, Unity, Python, Unreal Engine, JavaScript). My curiosity also extends to sciences, quantum physics, and Japanese culture.",
        moti_p3: "My ambition is to work as a Gameplay Programmer. This role represents for me the opportunity to combine technique and design, by concretely participating in the realization of the game.",
        moti_p4: "I was able to confirm this vocation through various projects and experiences, notably during the ISART Digital Summer School in July 2024. Today, I am fully invested in my studies and projects.",
        moti_lang_prog: "Programming Languages",
        moti_lang_other: "Other Skills",
        
        cv_title: "CV",
        cv_download_btn: "Download my CV (PDF)",
        contact_title: "Contact",
        contact_email: "You can reach me by email at: romain.chevalier40@gmail.com",
        contact_phone: "My phone number is: 06 09 13 48 80"
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
                if(element.tagName === 'A' && element.querySelector('span')) {
                     element.querySelector('span').textContent = translations[lang][key];
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
    // 2. CUSTOM CURSOR
    // ==========================================
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
        const interactives = document.querySelectorAll('a, button, .project-card, .devicons');
        interactives.forEach(el => {
            el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
            el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
        });
    }

    // ==========================================
    // 3. SCROLL REVEAL (Intersection Observer)
    // ==========================================
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOptions = {
        threshold: 0.15, // Trigger when 15% visible
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('active');
            // Stop observing once revealed
            observer.unobserve(entry.target);
        });
    }, revealOptions);

    revealElements.forEach(el => revealObserver.observe(el));

    // ==========================================
    // 4. INTERACTIVE CANVAS BACKGROUND
    // ==========================================
    const canvas = document.getElementById('bg-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        
        // Mouse interaction
        let mouse = {
            x: null,
            y: null,
            radius: 150
        };

        window.addEventListener('mousemove', (event) => {
            mouse.x = event.x;
            mouse.y = event.y;
        });

        // Resize canvas
        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initParticles();
        }
        window.addEventListener('resize', resize);

        // Particle Class
        class Particle {
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
                ctx.fillStyle = 'rgba(100, 255, 218, 0.5)';
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
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;
                
                const maxDistance = mouse.radius;
                let force = (maxDistance - distance) / maxDistance;
                if (force < 0) force = 0;
                
                let directionX = forceDirectionX * force * this.density;
                let directionY = forceDirectionY * force * this.density;

                if (distance < mouse.radius) {
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

                this.draw();
            }
        }

        function initParticles() {
            particles = [];
            let numberOfParticles = (width * height) / 9000; // Density
            for (let i = 0; i < numberOfParticles; i++) {
                let size = (Math.random() * 2) + 1;
                let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
                let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
                let dx = (Math.random() - 0.5) * 1;
                let dy = (Math.random() - 0.5) * 1;
                particles.push(new Particle(x, y, dx, dy, size));
            }
        }

        // Draw connecting lines
        function connect() {
            let opacityValue = 1;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x))
                                 + ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
                    if (distance < (width / 7) * (height / 7)) {
                        opacityValue = 1 - (distance / 20000);
                        ctx.strokeStyle = `rgba(100, 255, 218, ${opacityValue * 0.2})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animate() {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, width, height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
            }
            connect();
        }

        resize();
        animate();
        
        // Mouse out event to release particles
        window.addEventListener('mouseout', () => {
            mouse.x = undefined;
            mouse.y = undefined;
        });
    }
});