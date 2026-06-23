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
        p_mario_title: "Mario 2D",
        p_mario_desc: "Création d'un niveau de Mario avec des tableaux 2D et un système de mouvement par manipulation de matrices.",
        p_godot_title: "Peach Multiplayer",
        p_godot_desc: "Remake de Super Mario World sur SNES avec Peach. Apprentissage du GDscript et du Multiplayer local sur Godot.",
        p_yt_title: "Youtube Uploader",
        p_yt_desc_short: "Script Python automatisé pour l'upload de vidéos via l'API officielle de YouTube.",
        p_unreal_title: "Unreal Engine Project",
        p_unreal_desc_short: "Création d'un système de vie et de mécaniques d'escalade via les Blueprints d'Unreal Engine.",
        
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
        p_mario_title: "Mario 2D",
        p_mario_desc: "Creation of a Mario level using 2D arrays, with an innovative movement system based on matrix manipulation.",
        p_godot_title: "Peach Multiplayer",
        p_godot_desc: "Remake of Super Mario World on SNES with Peach. Aimed at learning GDscript and local Multiplayer basics.",
        p_yt_title: "Youtube Uploader",
        p_yt_desc_short: "Automated Python script for uploading videos via the official YouTube API.",
        p_unreal_title: "Unreal Engine Project",
        p_unreal_desc_short: "Creation of a health system and climbing mechanics via Unreal Engine Blueprints.",
        
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
});