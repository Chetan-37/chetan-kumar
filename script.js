/* --------------------------------------------------------------------------
   1. CONFIGURATION & CONSTANTS
   -------------------------------------------------------------------------- */
const SNAKE_SPEED = 40;       
const TYPING_SPEED = 80;      
const IMPACT_DELAY = 100;     
const EXPLOSION_POWER = 400;  
const SCROLL_SPREAD = 240;    

// Timing offsets for section animations (0.0 to 1.0 within the section track)
const ABOUT_TITLE_START = 0.1; 
const ABOUT_BOX_START = 0.3;   
const ABOUT_CONTENT_START = 0.5; 

const EDU_TITLE_START = 0.1;   
const EDU_CONTENT_START = 0.2; 
const EDU_TYPE_TRIGGER = 0.3;  

const SKILLS_ENTRY_START = 0.1; 
const SKILLS_LINE_START = 0.3;
const SKILLS_CARDS_START = 0.4;
const SKILLS_TEXT_START = 0.6;

const GALLERY_ENTRY_START = 0.1;
const GALLERY_DECK_START = 0.3;

/* --------------------------------------------------------------------------
   2. DATA SETS
   -------------------------------------------------------------------------- */

// Projects/Creations Data
const CREATIONS_DATA = {
    shorts: [
        {
            title: "To Be Free",
            desc: "A quiet, dark-toned visual of solitude—simple tea-making moments reflecting a longing for freedom.<br><br><span class='music-credit'>🎵 Audio Credits: <span>ig - makidacusinn</span></span>",
            img: "assets/videos/thumbnails/short/to_be_free.png",
            link: "https://drive.google.com/file/d/1vnLRtj0arKjhSM6k7wXOSz7jCW75ZoKp/view?usp=drive_link"
        },
        {
            title: "Lets Make A Reel",
            desc: "Dynamic forward-reverse edits of nature scenes, reflecting movement, travel passion, and raw outdoor energy.<br><br><span class='music-credit'>🎵 Audio: <span>Knock Knock - KR$NA and PHENOM</span></span>",
            img: "assets/videos/thumbnails/short/reel.png",
            link: "https://drive.google.com/file/d/1BcSL0o98lBfvbWBKG2BGwq7R2-PjwJDU/view?usp=drive_link"
        },
        {
            title: "Cold",
            desc: "Dark-toned cinematic journey through solitude, travel, and quiet appreciation of nature’s beauty.<br><br><span class='music-credit'>🎵 Audio: <span>this is what winter feels like - JVKE </span></span>",
            img: "assets/videos/thumbnails/short/cold.png",
            link: "https://drive.google.com/file/d/1BcSL0o98lBfvbWBKG2BGwq7R2-PjwJDU/view?usp=drive_link"
        },
        {
            title: "Mandi",
            desc: "Wide skies and sunset landscapes of Mandi, reflecting travel, warmth, and hope for shared journeys.<br><br><span class='music-credit'>🎵 Audio: <span>Dooron Dooron - Meghdeep Bose, Paresh Pahuja, and shiv </span></span>",
            img: "assets/videos/thumbnails/short/mandi.png",
            link: "https://drive.google.com/file/d/1XcYb9IKJRc67SVTSbYUmZelUJYdNEydU/view?usp=drive_link"
        },
        {
            title: "Palampur",
            desc: "A warm visual memory of Palampur—tea gardens, mountain shadows, and quiet moments of home.<br><br><span class='music-credit'>🎵 Audio: <span>Paro - Aditya Rikhari and UNPLG'd </span></span>",
            img: "assets/videos/thumbnails/short/himachal.png",
            link: "https://drive.google.com/file/d/1HEAmWI_J7vuSzHbrlczBKyp2X5y9T7lE/view?usp=drive_link"
        },
        {
            title: "Baijnath",
            desc: "Peaceful temple landscapes of Baijnath, reflecting devotion, nature’s beauty, and joyful spiritual calm.<br><br><span class='music-credit'>🎵 Audio: <span>Pehli Dafa - Atif Aslam</span></span>",
            img: "assets/videos/thumbnails/short/baijnath.png",
            link: "https://drive.google.com/file/d/17oryOU09iCHYygASRQNFzWTOJoXLX9xb/view?usp=drive_link"
        },
        {
            title: "Season Ends",
            desc: "Foggy, rain-soaked nature scenes reflecting solitude, peace, and the end of a past self.<br><br><span class='music-credit'>🎵 Audio: <span>Heat Waves - Glass Animals </span></span>",
            img: "assets/videos/thumbnails/short/season_ends.png",
            link: "https://drive.google.com/file/d/1J16d6fyiJnQs6T2vuK1U6OQniLI7Vd3v/view?usp=drive_link"
        }
    ],
    //for now linkedin posts links are there for long videos
    longs: [
        {
            title: "PRIZE DISTRIBUTION 2k26",
            desc: "A cinematic reflection of a year of sports and cultural events, celebrating teamwork, participation, and true sportsmanship, honoring every effort offered with sincerity and devotion to HIM.<br><br><span class='music-credit'>🎵 Audio: <span>Vikramas Shauryas - NDG Tapes </span></span>",
            img: "assets/videos/thumbnails/long/pd.png",
            link: "https://www.linkedin.com/posts/sssihl-ndg_sssihl-prizedistribution-ase-activity-7425068438580244481-nMhT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFVLpZQBTJAKqpEqyce4ZGdB4j4ihqOhdpg"
        },
        {
            title: "Sai-Cyling 4 SAI",
            desc: "A visual glimpse of S.A.I-CLING practice rides, capturing dedication, teamwork, and devotion during the cycling journey for HIM.<br><br><span class='music-credit'>🎵 Audio: <span>What's Up Danger - Black Caviar and Blackway </span></span>",
            img: "assets/videos/thumbnails/long/sai-clying.png",
            link: "https://www.linkedin.com/posts/sssihl-ndg_sssihl-saicling4sai-ndg-activity-7387777052009082880-dZ8A?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFVLpZQBTJAKqpEqyce4ZGdB4j4ihqOhdpg"
        },
        {
            title: "SPORTS MEET 2k26",
            desc: "A cinematic glimpse of Sports Meet 2026 at SSSIHL, celebrating discipline, teamwork, and wholehearted effort offered with devotion and dedication.<br><br><span class='music-credit'>🎵 Audio: <span>Shiv Shakti - NDG Tapes </span></span>",
            img: "assets/videos/thumbnails/long/sm26.png",
            link: "https://www.linkedin.com/posts/sssihl-ndg_sssihl-sportsmeet-jan11-ugcPost-7427968859619610627-qSFH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFVLpZQBTJAKqpEqyce4ZGdB4j4ihqOhdpg"
        }
    ]
};

// Skills Data for Carousel
const SKILLS_DATA = [
    { title: "Programming & Development", desc: "Python, C, C++, HTML, CSS, JavaScript." },
    { title: "Core CS", desc: "Data Structures & Algorithms, OOPs, DBMS." },
    { title: "Databases", desc: "MySQL and relational data management." },
    { title: "Tools", desc: "Git, GitHub, VS Code, and AI Prompt Engineering." },
    { title: "Video Editing", desc: "Professional editing & grading in DaVinci Resolve." },
    { title: "Visual Design", desc: "Graphic creation and photography using Photoshop & Canva." },
    { title: "Leadership", desc: "Event Coordinator for Eco Einstein Club & Former Head Boy." },
    { title: "AI Prompting", desc: "Certified in ChatGPT Prompt Engineering by DeepLearning.AI." },
    { title: "Web Development", desc: "Pursuing Full Stack Web Development mastery." },
    { title: "Evolving Skillset", desc: "New technical integrations currently in progress." }
];

// Gallery Images
const GALLERY_IMAGES = [
    "assets/gallery/pic (3).jpg", "assets/gallery/pic (9).webp", "assets/gallery/pic (2).webp", 
    "assets/gallery/pic (4).webp", "assets/gallery/pic (5).webp", "assets/gallery/pic (6).webp", 
    "assets/gallery/pic (7).webp", "assets/gallery/pic (8).webp", "assets/gallery/pic (14).webp", 
    "assets/gallery/pic (16).webp","assets/gallery/pic (15).webp", "assets/gallery/pic (17).webp", 
    "assets/gallery/pic (18).webp", "assets/gallery/pic (13).webp", "assets/gallery/pic (19).webp", 
    "assets/gallery/pic (23).webp", "assets/gallery/pic (10).webp"
];

/* --------------------------------------------------------------------------
   3. DOM ELEMENT CACHING
   -------------------------------------------------------------------------- */

// Intro & Layout
const introLayer = document.getElementById('intro-layer');
const gridContainer = document.getElementById('grid-container');

// Custom Cursor
const cursorInner = document.querySelector('.custom-cursor-inner');
const cursorOuter = document.querySelector('.custom-cursor-outer');

// Hero Section Elements
const heroMainImg = document.getElementById('hero-main-img');
const heroText = document.getElementById('hero-text');
const taglineRow = document.querySelector('.tagline-row');
const lineL = document.querySelector('.line-l');
const lineR = document.querySelector('.line-r');
const scrollPrompt = document.getElementById('scroll-prompt');
const heroImages = {
    l1: document.querySelector('.left-1'), l2: document.querySelector('.left-2'), l3: document.querySelector('.left-3'),
    r1: document.querySelector('.right-1'), r2: document.querySelector('.right-2'), r3: document.querySelector('.right-3')
};

// Floating UI
const ckLogo = document.getElementById('ck-logo-btn');
const navMenuContainer = document.getElementById('nav-menu-container');

// About Section
const aboutTrack = document.getElementById('about-track');
const aboutTitle = document.getElementById('about-title');
const aboutLayout = document.getElementById('about-layout');
const aboutCircle = document.getElementById('about-circle');
const aboutText = document.getElementById('about-text-content');

// Education Section
const eduTrack = document.getElementById('education-track');
const eduTitle = document.getElementById('education-title');
const eduDividers = document.querySelectorAll('.edu-divider');
const eduItems = document.querySelectorAll('.edu-item');
const eduMainTexts = document.querySelectorAll('.type-target'); 
const eduScoreTexts = document.querySelectorAll('.type-target-score'); 

// Skills Section
const skillsTrack = document.getElementById('skills-track');
const skillsTitle = document.getElementById('skills-title');
const skillsWrapper = document.getElementById('skills-cards-wrapper');
const skillsContainer = document.getElementById('skills-carousel-container');
const skillsInfoBox = document.getElementById('skill-info-display');
const skillNameDisplay = document.getElementById('skill-name');
const skillDescDisplay = document.getElementById('skill-desc');

// Gallery Section
const galleryTrack = document.getElementById('gallery-track');
const galleryTitle = document.getElementById('gallery-title');
const galleryDeck = document.getElementById('gallery-deck');
const galleryWrapper = document.getElementById('gallery-wrapper');
const galleryNavBtns = document.querySelectorAll('.nav-btn-container');

// Creations Section
const creationsTrack = document.getElementById('creations-track');
const creationsTitle = document.getElementById('creations-title');
const creationCounter = document.getElementById('creation-counter');
const creationImgPlaceholder = document.getElementById('creation-img-placeholder');
const creationTitleText = document.getElementById('creation-video-title');
const creationDescText = document.getElementById('creation-video-desc');
const creationLinkBtn = document.getElementById('creation-drive-link');
const creationInfoBox = document.querySelector('.creation-info-box');
const stackWrapper = document.getElementById('stack-wrapper');
const stackMainCard = document.getElementById('main-creation-card'); 
const creationToggleShort = document.getElementById('toggle-fast');
const creationToggleLong = document.getElementById('toggle-full');
const stackBackCards = [
    document.querySelector('.stack-card.card-1'),
    document.querySelector('.stack-card.card-2'),
    document.querySelector('.stack-card.card-3'),
    document.querySelector('.stack-card.card-4'),
    document.querySelector('.stack-card.card-5')
];

// Contact Section
const contactTrack = document.getElementById('contact-track');
const contactWrapperEle = document.getElementById('contact-wrapper');

// Footer Section
const footerTrack = document.getElementById('footer-track');
const giantFooterName = document.getElementById('giant-name');
const copyrightText = document.getElementById('copyright-text');

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

/* --------------------------------------------------------------------------
   4. GLOBAL STATE VARIABLES
   -------------------------------------------------------------------------- */

// Snake Intro State
let pixels = [];
let pathQueue = [];
let currentStep = 0;

// Cursor State
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let outerX = window.innerWidth / 2;
let outerY = window.innerHeight / 2;

// Skills Carousel State
const ARC_RADIUS = 2500;       
const CARD_SPREAD = 10; 
const DRAG_SPEED = 0.4;       
const SNAP_SPEED = 0.1;       
let sCards = [];
let sCurrentAngle = 0;
let sTargetAngle = 0;
let sIsDragging = false;
let sStartX = 0;
let sStartAngle = 0;
let sActiveIndex = 0;
let sGlobalScrollOpacity = 0; 

// Gallery State
let galleryCenterIndex = 0; 
let isGallerySpread = false;
let hasUnfolded = false; 
let currentLightboxIndex = 0;

// Creations State
let currentCategory = 'shorts'; 
let currentCreationIndex = 0;
let isSwitchingCategory = false;
let isAnimatingCard = false;
let hasAnimatedCreationsText = false;

// Scroll Animation Flags
let hasTypedEducation = false;

/* --------------------------------------------------------------------------
   5. UTILITIES (SCROLL LOCK & MATH)
   -------------------------------------------------------------------------- */

// Prevent Scroll during loading
if (history.scrollRestoration) { history.scrollRestoration = 'manual'; }
window.scrollTo(0, 0);

function preventDefault(e) { e.preventDefault(); }

function lockScroll() {
    window.addEventListener('wheel', preventDefault, { passive: false });
    window.addEventListener('touchmove', preventDefault, { passive: false });
    window.addEventListener('keydown', preventDefaultForScrollKeys, { passive: false });
}

function unlockScroll() {
    window.removeEventListener('wheel', preventDefault, { passive: false });
    window.removeEventListener('touchmove', preventDefault, { passive: false });
    window.removeEventListener('keydown', preventDefaultForScrollKeys, { passive: false });
    document.documentElement.classList.remove('no-scroll');
    document.body.classList.remove('no-scroll');
}

var keys = {37: 1, 38: 1, 39: 1, 40: 1, 32: 1};
function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) { preventDefault(e); return false; }
}

// Math Mapping Helper
function mapRange(value, start, end) {
    if (value < start) return 0;
    if (value > end) return 1;
    return (value - start) / (end - start);
}

// Global Smooth Scroll Function for Nav Links
function scrollToSection(e, id) {
    e.preventDefault(); 
    const targetSection = document.getElementById(id);
    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    }
}
window.scrollToSection = scrollToSection;

/* --------------------------------------------------------------------------
   6. CUSTOM CURSOR ENGINE
   -------------------------------------------------------------------------- */

document.addEventListener('mousemove', (e) => {
    if (cursorInner && cursorOuter) {
        cursorInner.style.opacity = '1';
        cursorOuter.style.opacity = '1';
    }
    mouseX = e.clientX;
    mouseY = e.clientY;
    if(cursorInner) {
        cursorInner.style.transform = `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%))`;
    }
});

function renderCursor() {
    outerX += (mouseX - outerX) * 0.15; 
    outerY += (mouseY - outerY) * 0.15;
    if(cursorOuter) {
        cursorOuter.style.transform = `translate(calc(${outerX}px - 50%), calc(${outerY}px - 50%))`;
    }
    requestAnimationFrame(renderCursor);
}
renderCursor();

// Cursor Hover Effects
document.addEventListener('mouseover', (e) => {
    const clickable = e.target.closest('a, button, input, .gallery-card, .nav-arrow, .toggle-btn, #skills-carousel-container, .lb-nav-btn, #ck-logo-btn, .hamburger-icon, .nav-btn-container, .about-title-wrapper, #nav-menu-container');
    if (clickable && cursorOuter && cursorInner) {
        cursorOuter.classList.add('hover-active');
        cursorInner.classList.add('hover-active');
    }
});

document.addEventListener('mouseout', (e) => {
    const clickable = e.target.closest('a, button, input, .gallery-card, .nav-arrow, .toggle-btn, #skills-carousel-container, .lb-nav-btn, #ck-logo-btn, .hamburger-icon, .nav-btn-container, .about-title-wrapper');
    if (clickable && cursorOuter && cursorInner) {
        cursorOuter.classList.remove('hover-active');
        cursorInner.classList.remove('hover-active');
    }
});

/* --------------------------------------------------------------------------
   7. INTRO SNAKE & GRID ENGINE
   -------------------------------------------------------------------------- */

function initIntroGrid() {
    const rows = 10; const cols = 45; const boxSize = 30; 
    for (let i = 0; i < rows * cols; i++) {
        const div = document.createElement('div'); div.classList.add('pixel');
        gridContainer.appendChild(div); pixels.push(div);
    }
    
    // Scale grid for smaller screens
    function scaleGrid() {
        const gridWidth = cols * boxSize;
        const windowWidth = window.innerWidth;
        const padding = 40; 
        if (windowWidth < gridWidth + padding) {
            const scale = (windowWidth - padding) / gridWidth;
            gridContainer.style.transform = `scale(${scale})`;
        } else { gridContainer.style.transform = `scale(1)`; }
    }
    scaleGrid();
    window.addEventListener('resize', scaleGrid);

    // Setup Snake Path for "CHETAN"
    const fontMapFull = {
        'C': [[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,0],[1,0,0,0,1],[0,1,1,1,0]],
        'H': [[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,1],[1,0,0,0,1],[1,0,0,0,1]],
        'E': [[1,1,1,1,1],[1,0,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,1,1,1,1]],
        'T': [[1,1,1,1,1],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0]],
        'A': [[0,1,1,1,0],[1,0,0,0,1],[1,1,1,1,1],[1,0,0,0,1],[1,0,0,0,1]],
        'N': [[1,0,0,0,1],[1,1,0,0,1],[1,0,1,0,1],[1,0,0,1,1],[1,0,0,0,1]]
    };

    let startX = 4; let startY = 3; 
    "CHETAN".split('').forEach(char => {
        const bitmap = fontMapFull[char];
        for (let r = 0; r < bitmap.length; r++) {
            for (let c = 0; c < bitmap[r].length; c++) {
                if (bitmap[r][c] === 1) { pathQueue.push((startY + r) * cols + (startX + c)); }
            }
        } startX += 6; 
    });
}

function playSnake() {
    if (currentStep >= pathQueue.length) {
        pixels[pathQueue[pathQueue.length - 1]].classList.remove('cursor');
        pixels[pathQueue[pathQueue.length - 1]].classList.add('active');
        setTimeout(() => {
            introLayer.style.opacity = '0'; introLayer.style.pointerEvents = 'none';
            setTimeout(() => { 
                introLayer.style.display = 'none'; 
                startTerminalSequence(); 
            }, 1000);
        }, 1000);
        return;
    }
    const pixelIdx = pathQueue[currentStep];
    if (currentStep > 0) {
        pixels[pathQueue[currentStep-1]].classList.remove('cursor');
        pixels[pathQueue[currentStep-1]].classList.add('active');
    }
    pixels[pixelIdx].classList.add('cursor');
    currentStep++;
    setTimeout(playSnake, SNAKE_SPEED);
}

/* --------------------------------------------------------------------------
   8. TERMINAL TYPING & HERO INTRO
   -------------------------------------------------------------------------- */

function startTerminalSequence() {
    const container = document.querySelector('.portfolio-container');
    container.style.opacity = '1';
    const textToType = "$ npm run portfolio";
    const terminalEl = document.getElementById('terminal-layer');
    let charIndex = 0;
    terminalEl.innerHTML = ''; terminalEl.style.opacity = '1';

    function typeWriter() {
        if (charIndex < textToType.length) {
            terminalEl.innerHTML += textToType.charAt(charIndex);
            charIndex++; setTimeout(typeWriter, TYPING_SPEED); 
        } else { setTimeout(revealPromptAndBreak, 920); } //can change 920 value to change duration of "npm run portfolio"
    }
    typeWriter();
}

function revealPromptAndBreak() {
    scrollPrompt.style.opacity = '1'; scrollPrompt.style.transform = 'scale(1)';
    setTimeout(() => { 
        explodeTerminalText(); 
        unlockScroll(); 
    }, IMPACT_DELAY); 
}

function explodeTerminalText() {
    const terminalEl = document.getElementById('terminal-layer');
    const text = terminalEl.innerText;
    terminalEl.innerHTML = '';
    const spans = [];
    text.split('').forEach(char => {
        const span = document.createElement('span');
        span.innerText = char; span.classList.add('exploding-char');
        terminalEl.appendChild(span);
        spans.push(span);
    });
    void terminalEl.offsetWidth; 
    spans.forEach(span => {
        const spreadX = (Math.random() - 0.5) * EXPLOSION_POWER; 
        const spreadY = (Math.random() - 0.5) * EXPLOSION_POWER; 
        const rot = (Math.random() - 0.5) * 720; 
        span.style.transform = `translate(${spreadX}px, ${spreadY}px) rotate(${rot}deg)`;
        span.style.opacity = '0';
    });
}

/* --------------------------------------------------------------------------
   9. SCROLL ANIMATION ORCHESTRATOR
   -------------------------------------------------------------------------- */

// Global Apply Transform for Hero Image Fan
const applyTransform = (el, factor, progress) => {
    const direction = factor < 0 ? -1 : 1;
    const absFactor = Math.abs(factor);
    el.style.transform = `translateX(${direction * SCROLL_SPREAD * absFactor * progress}px)`;
    el.style.opacity = Math.min(progress * 2.5, 1);
};

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const vh = window.innerHeight;

    /* --- A. HERO & FLOATING UI --- */
    let heroP = Math.min(scrollY / (vh * 2.8), 1); 
    let animP = Math.min(heroP / 0.8, 1);

    if (heroP <= 1) {
        requestAnimationFrame(() => {
            const transitionP = Math.min(animP * 5, 1); 
            scrollPrompt.style.opacity = 1 - transitionP;
            scrollPrompt.style.transform = `scale(${1 + (transitionP * 0.2)})`; 
            
            const imgScale = 0.7 + (0.3 * transitionP);
            const imgBlur = 15 - (15 * transitionP);   
            heroMainImg.style.opacity = transitionP;
            heroMainImg.style.filter = `blur(${imgBlur}px)`;
            heroMainImg.style.transform = `scale(${imgScale})`;

            applyTransform(heroImages.l1, -1.0, animP); 
            applyTransform(heroImages.l2, -2.0, animP); 
            applyTransform(heroImages.l3, -2.6, animP);
            applyTransform(heroImages.r1, 1.0, animP); 
            applyTransform(heroImages.r2, 2.0, animP); 
            applyTransform(heroImages.r3, 2.6, animP);

            if (animP > 0.3) {
                let tp = (animP - 0.3) * 1.5;
                heroText.style.opacity = Math.min(tp, 1);
                heroText.style.transform = `translateY(${40 - (40 * Math.min(tp, 1))}px)`;
            } else { heroText.style.opacity = 0; }

            if (animP > 0.75) {
                let tgp = (animP - 0.75) * 4;
                let clampTgp = Math.min(tgp, 1);
                taglineRow.style.opacity = clampTgp;
                lineL.style.width = `${clampTgp * 80}px`;
                lineR.style.width = `${clampTgp * 80}px`;
            } else { taglineRow.style.opacity = 0; lineL.style.width = '0px'; lineR.style.width = '0px'; }
        });
    }

    // Floating UI visibility based on Hero scroll progress
    requestAnimationFrame(() => {
        let uiP = mapRange(animP, 0.8, 1);
        if (ckLogo && ckLogo.dataset.progress !== uiP.toString()) {
            ckLogo.style.opacity = uiP;
            ckLogo.style.transform = `scale(${0.5 + (0.5 * uiP)})`;
            ckLogo.style.pointerEvents = uiP > 0.5 ? 'auto' : 'none';
            ckLogo.dataset.progress = uiP.toString();

            navMenuContainer.style.opacity = uiP;
            navMenuContainer.style.transform = `scale(${0.5 + (0.5 * uiP)})`;
            navMenuContainer.style.pointerEvents = uiP > 0.5 ? 'auto' : 'none';
            navMenuContainer.dataset.progress = uiP.toString();
        }
    });

    /* --- B. ABOUT SECTION --- */
    if (aboutTrack) {
        const rect = aboutTrack.getBoundingClientRect();
        const distFromTop = -rect.top;
        let aboutP = Math.min(Math.max(distFromTop / (rect.height - vh), 0), 1);
        
        requestAnimationFrame(() => {
            let p1 = mapRange(aboutP, ABOUT_TITLE_START, 0.3);
            aboutTitle.style.opacity = p1;
            aboutTitle.style.letterSpacing = `${20 - (15 * p1)}px`;
            
            let p2 = mapRange(aboutP, ABOUT_BOX_START, 0.6);
            aboutLayout.style.opacity = p2;
            aboutLayout.style.transform = `translateY(${100 - (100 * p2)}px)`;
            
            let p3 = mapRange(aboutP, ABOUT_CONTENT_START, 0.9);
            aboutCircle.style.opacity = p3;
            aboutCircle.style.transform = `scale(${0.5 + (0.5 * p3)})`;
            aboutText.style.opacity = p3;
            aboutText.style.transform = `scale(${0.8 + (0.2 * p3)})`;
        });
    }

    /* --- C. EDUCATION SECTION --- */
    if (eduTrack) {
        const rect = eduTrack.getBoundingClientRect();
        let eduP = Math.min(Math.max(-rect.top / (rect.height - vh), 0), 1);
        
        requestAnimationFrame(() => {        
            let pTitle = mapRange(eduP, EDU_TITLE_START, EDU_TITLE_START + 0.2);
            eduTitle.style.opacity = pTitle;
            eduTitle.style.letterSpacing = `${20 - (15 * pTitle)}px`;
            
            let pContent = mapRange(eduP, EDU_CONTENT_START, EDU_CONTENT_START + 0.2);
            eduDividers.forEach(div => { div.style.opacity = pContent; div.style.transform = `scaleX(${pContent})`; });
            eduItems.forEach(item => { item.style.opacity = pContent; item.style.transform = `translateY(${30 - (30 * pContent)}px)`; });

            if (eduP > EDU_TYPE_TRIGGER && !hasTypedEducation) {
                hasTypedEducation = true;
                typeTextGroup(eduMainTexts, 30, 100, () => { typeConcurrent(eduScoreTexts, 30); });
            }
        });
    }

    /* --- D. SKILLS SECTION --- */
    if (skillsTrack) {
        const rect = skillsTrack.getBoundingClientRect();
        let sP = Math.min(Math.max(-rect.top / (rect.height - vh), 0), 1);

        requestAnimationFrame(() => {
            let pTitle = mapRange(sP, 0.05, 0.25);
            skillsTitle.style.opacity = pTitle;
            skillsTitle.style.letterSpacing = `${30 - (30 * pTitle)}px`;

            if (sP > 0.25) document.getElementById('skills-arc-line').style.opacity = '1';
            else document.getElementById('skills-arc-line').style.opacity = '0';

            sGlobalScrollOpacity = mapRange(sP, 0.25, 0.5);
            let pText = mapRange(sP, 0.55, 0.7);
            skillsInfoBox.style.opacity = pText;

            if (pText === 0) {
                skillNameDisplay.style.opacity = '0';
                skillDescDisplay.style.opacity = '0';
            } else if (skillNameDisplay.style.opacity === '0' && skillNameDisplay.innerText !== "") {
                skillNameDisplay.style.opacity = '1'; skillDescDisplay.style.opacity = '1';
                skillNameDisplay.style.transform = 'translateY(0)'; skillDescDisplay.style.transform = 'translateY(0)';
            }
        });
    }

    /* --- E. GALLERY SECTION --- */
    if (galleryTrack) {
        const rect = galleryTrack.getBoundingClientRect();
        let galP = Math.min(Math.max(-rect.top / (rect.height - vh), 0), 1);

        if (galP <= 0.05 && isGallerySpread) {
            spreadGallery(false);
            hasUnfolded = false;
        }

        requestAnimationFrame(() => {
            let pTitle = mapRange(galP, GALLERY_ENTRY_START, GALLERY_ENTRY_START + 0.2);
            galleryTitle.style.opacity = pTitle;
            galleryTitle.style.letterSpacing = `${20 - (15 * pTitle)}px`;

            let pDeck = mapRange(galP, GALLERY_DECK_START, GALLERY_DECK_START + 0.3);
            galleryWrapper.style.opacity = pDeck;
            galleryWrapper.style.transform = `scale(${0.8 + (0.2 * pDeck)})`;
        });
    }

    /* --- F. CREATIONS SECTION --- */
    if (creationsTrack) {
        const rect = creationsTrack.getBoundingClientRect();
        let cP = Math.min(Math.max(-rect.top / (rect.height - vh), 0), 1);

        requestAnimationFrame(() => {
            let pTitle = mapRange(cP, 0.1, 0.3);    
            let pSub = mapRange(cP, 0.2, 0.45);     
            let pStack = mapRange(cP, 0.15, 0.45);  
            let pInfo = mapRange(cP, 0.3, 0.6);     

            creationsTitle.style.opacity = pTitle;
            creationsTitle.style.letterSpacing = `${20 - (15 * pTitle)}px`;
            creationToggleShort.style.opacity = pSub;
            creationToggleLong.style.opacity = pSub;
            
            if(!isSwitchingCategory && !isAnimatingCard) {
                let mainScale = 0.5 + (0.5 * pStack);
                let mainY = 100 - (100 * pStack); 
                stackMainCard.style.opacity = pStack;
                stackMainCard.style.transform = `scale(${mainScale}) translateY(${mainY}px)`;

                stackBackCards.forEach((card, i) => {
                    if(card) {
                        let yMult = (i + 1) * 20;
                        let sMult = (i + 1) * 0.04;
                        let by = pStack * yMult;
                        let bs = 1 - (pStack * sMult);
                        card.style.transform = `translateY(${by}px) scale(${bs})`;
                        card.style.setProperty('--cy', `${by}px`);
                        card.style.setProperty('--cs', `${bs}`);
                        card.style.opacity = pStack;
                    }
                });
            }

            if(!isSwitchingCategory && !isAnimatingCard) {
                if(pInfo > 0.1 && !hasAnimatedCreationsText) {
                    hasAnimatedCreationsText = true;
                    creationTitleText.classList.remove('slide-out'); creationDescText.classList.remove('slide-out');
                    creationTitleText.classList.add('slide-in');
                    setTimeout(() => { creationDescText.classList.add('slide-in'); }, 150);
                    setTimeout(() => { creationInfoBox.classList.add('expand-line'); }, 100);
                } else if (pInfo <= 0.1 && hasAnimatedCreationsText) {
                    hasAnimatedCreationsText = false;
                    creationInfoBox.classList.remove('expand-line');
                    creationTitleText.classList.remove('slide-in'); creationDescText.classList.remove('slide-in');
                    creationTitleText.classList.add('slide-out');
                    setTimeout(() => { creationDescText.classList.add('slide-out'); }, 100);
                }
            }
        });
    }

    /* --- G. CONTACT SECTION --- */
    if (contactTrack) {
        const rect = contactTrack.getBoundingClientRect();
        let cP = Math.min(Math.max(-rect.top / (rect.height - vh), 0), 1);
        requestAnimationFrame(() => {
            let pContact = mapRange(cP, 0.1, 0.35); 
            contactWrapperEle.style.transform = `scale(${0.5 + (0.5 * pContact)})`;
            contactWrapperEle.style.opacity = pContact;
        });
    } 

    /* --- H. FOOTER SECTION --- */
    if (footerTrack) {
        const rect = footerTrack.getBoundingClientRect();
        let fP = Math.min(Math.max(-rect.top / (rect.height - vh), 0), 1);
        requestAnimationFrame(() => {
            let pName = mapRange(fP, 0.1, 0.7);
            giantFooterName.style.opacity = pName;
            giantFooterName.style.transform = `scale(${0.8 + (0.2 * pName)})`;
            giantFooterName.style.letterSpacing = `${30 - (30 * pName)}px`; 
            let pCopy = mapRange(fP, 0.5, 0.9);
            copyrightText.style.opacity = pCopy;
            copyrightText.style.transform = `translateY(${30 - (30 * pCopy)}px)`;
        });
    }
    
    // Auto Highlight Nav Links on Scroll
    requestAnimationFrame(() => {
        const sections = ['about-track', 'education-track', 'skills-track', 'gallery-track', 'creations-track', 'contact-track'];
        let currentActive = '';
        sections.forEach(id => {
            const sec = document.getElementById(id);
            if (sec && sec.getBoundingClientRect().top <= vh * 0.7) currentActive = id;
        });
        document.querySelectorAll('.nav-item a').forEach(link => {
            link.classList.toggle('active-nav-link', link.getAttribute('href') === `#${currentActive}`);
        });
    });
});

/* --------------------------------------------------------------------------
   10. SKILLS CAROUSEL LOGIC
   -------------------------------------------------------------------------- */

function initSkillsCarousel() {
    SKILLS_DATA.forEach((skill, index) => {
        const el = document.createElement('div');
        el.classList.add('skill-card');
        
        // CHECK: If this is the last card, add a special class
        if (index === SKILLS_DATA.length - 1) {
            el.classList.add('coming-soon-card');
        }

        let formattedNum = (index + 1) < 10 ? `0${index + 1}` : index + 1;
        
        // Change the label for the last card
        let label = (index === SKILLS_DATA.length - 1) ? "STATUS // PENDING" : `SEC // ${formattedNum}`;

        el.innerHTML = `<div class="tech-label">${label}</div><div class="tech-title">${skill.title}</div>`;
        skillsWrapper.appendChild(el);
        sCards.push({ el: el, index: index });
    });

    skillNameDisplay.innerText = SKILLS_DATA[0].title;
    skillDescDisplay.innerText = SKILLS_DATA[0].desc;
}

function animateSkillsLoop() {
    if (!sIsDragging) sCurrentAngle += (sTargetAngle - sCurrentAngle) * SNAP_SPEED;
    const centerY = ARC_RADIUS; 

    sCards.forEach((c) => {
        let offsetAngle = (c.index * CARD_SPREAD) - sCurrentAngle;
        let rad = (offsetAngle - 90) * (Math.PI / 180); 
        let x = ARC_RADIUS * Math.cos(rad);
        let y = centerY + ARC_RADIUS * Math.sin(rad);

        c.el.style.transform = `translate(${x}px, ${y}px) rotate(${offsetAngle}deg) scale(${sGlobalScrollOpacity})`;
        c.el.style.opacity = sGlobalScrollOpacity < 0.05 ? 0 : sGlobalScrollOpacity;
        
        if (Math.abs(offsetAngle) < CARD_SPREAD / 2) {
            c.el.classList.add('active-card');
            if (sActiveIndex !== c.index) {
                sActiveIndex = c.index;
                updateSkillTextContent(c.index); 
            }
        } else c.el.classList.remove('active-card');
    });
    requestAnimationFrame(animateSkillsLoop);
}

function updateSkillTextContent(index) {
    [skillNameDisplay, skillDescDisplay].forEach(el => {
        el.style.opacity = '0'; el.style.transform = 'translateY(15px)';
    });
    setTimeout(() => {
        skillNameDisplay.innerText = SKILLS_DATA[index].title;
        skillDescDisplay.innerText = SKILLS_DATA[index].desc;
        if (sGlobalScrollOpacity > 0.1) {
            [skillNameDisplay, skillDescDisplay].forEach(el => {
                el.style.opacity = '1'; el.style.transform = 'translateY(0)';
            });
        }
    }, 200); 
}

// Skills Drag Handlers
skillsContainer.addEventListener('mousedown', (e) => { sIsDragging = true; sStartX = e.pageX; sStartAngle = sCurrentAngle; skillsContainer.style.cursor = 'grabbing'; });
window.addEventListener('mousemove', (e) => { if (!sIsDragging) return; e.preventDefault(); sCurrentAngle = sStartAngle - ((e.pageX - sStartX) * DRAG_SPEED * 0.2); });
window.addEventListener('mouseup', () => { if (!sIsDragging) return; finishSkillDrag(); });
skillsContainer.addEventListener('touchstart', (e) => { sIsDragging = true; sStartX = e.touches[0].pageX; sStartAngle = sCurrentAngle; }, {passive: false});
window.addEventListener('touchmove', (e) => { if (!sIsDragging) return; sCurrentAngle = sStartAngle - ((e.touches[0].pageX - sStartX) * DRAG_SPEED * 0.2); }, {passive: false});
window.addEventListener('touchend', () => { if (!sIsDragging) return; finishSkillDrag(); });

function finishSkillDrag() {
    sIsDragging = false; skillsContainer.style.cursor = 'grab';
    let nearestIdx = Math.round(sCurrentAngle / CARD_SPREAD);
    sTargetAngle = Math.min(Math.max(nearestIdx, 0), SKILLS_DATA.length - 1) * CARD_SPREAD;
}

/* --------------------------------------------------------------------------
   11. GALLERY & LIGHTBOX LOGIC
   -------------------------------------------------------------------------- */

function initGallery() {
    GALLERY_IMAGES.forEach((src, i) => {
        const card = document.createElement('div');
        card.classList.add('gallery-card');
        // Removed the blur-bg completely, keeping only the main image.
        card.innerHTML = `<img src="${src}" class="main-img" alt="Gallery Image">`;
        card.onclick = () => openLightbox(i);
        galleryDeck.appendChild(card);
    });
    updateGalleryPositions(); 
    galleryWrapper.addEventListener('mouseenter', () => { if (!hasUnfolded) { hasUnfolded = true; spreadGallery(true); } });
}

function updateGalleryPositions() {
    const cards = document.querySelectorAll('.gallery-card');
    const total = cards.length;
    cards.forEach((card, i) => {
        let offset = i - galleryCenterIndex;
        while (offset > total / 2) offset -= total;
        while (offset < -total / 2) offset += total;

        let rot = isGallerySpread ? 0 : offset * 15;
        let x = isGallerySpread ? offset * 260 : 0;
        let op = (isGallerySpread && Math.abs(offset) > 1) ? 0 : (isGallerySpread ? 1 : (Math.abs(offset) > 2 ? 0 : 1));
        let scale = (isGallerySpread && Math.abs(offset) > 1) ? 0.8 : 1;

        card.style.transform = `translateX(${x}px) rotate(${rot}deg) scale(${scale})`;
        card.style.opacity = op; 
        card.style.zIndex = 100 - Math.abs(offset);
        card.style.setProperty('--offset', offset);
    });
}

function moveGallery(dir) { if (!isGallerySpread) return; galleryCenterIndex = (galleryCenterIndex + dir + GALLERY_IMAGES.length) % GALLERY_IMAGES.length; updateGalleryPositions(); }
function spreadGallery(spread) { isGallerySpread = spread; updateGalleryPositions(); galleryNavBtns.forEach(btn => btn.classList.toggle('active-nav', spread)); }

// Lightbox
function openLightbox(index) { 
    currentLightboxIndex = index; 
    lightboxImg.src = GALLERY_IMAGES[index]; 
    lightbox.classList.add('active'); 
    document.body.style.overflow = 'hidden'; 
    document.body.classList.add('lightbox-open'); // Tells the CSS to hide the UI
}

function closeLightbox() { 
    lightbox.classList.remove('active'); 
    document.body.style.overflow = ''; 
    document.body.classList.remove('lightbox-open'); // Brings the UI back
}

function lbNavigate(dir) { 
    currentLightboxIndex = (currentLightboxIndex + dir + GALLERY_IMAGES.length) % GALLERY_IMAGES.length; 
    lightboxImg.src = GALLERY_IMAGES[currentLightboxIndex]; 
}

window.moveGallery = moveGallery; window.openLightbox = openLightbox; window.closeLightbox = closeLightbox; window.lbNavigate = lbNavigate;

/* --------------------------------------------------------------------------
   12. CREATIONS INTERACTION ENGINE
   -------------------------------------------------------------------------- */

function initCreations() { renderCreation(false); }

function renderCreation(anim = true) {
    const data = CREATIONS_DATA[currentCategory][currentCreationIndex];
    creationCounter.innerText = `${currentCreationIndex + 1} / ${CREATIONS_DATA[currentCategory].length}`;
    creationLinkBtn.href = data.link;
    creationImgPlaceholder.style.backgroundImage = `url('${data.img}')`;
    if(!anim) { creationTitleText.innerText = data.title; creationDescText.innerHTML = data.desc; }
}

function switchCategory(type) {
    if(isSwitchingCategory || currentCategory === type) return;
    isSwitchingCategory = true;
    
    document.getElementById('toggle-fast').classList.toggle('active', type === 'shorts');
    document.getElementById('toggle-full').classList.toggle('active', type === 'longs');

    // 1. Hide current text
    creationInfoBox.classList.remove('expand-line');
    creationTitleText.classList.remove('slide-in');
    creationDescText.classList.remove('slide-in');
    creationTitleText.classList.add('slide-out');
    setTimeout(() => { creationDescText.classList.add('slide-out'); }, 100);

    // 2. Cascade Cards Out
    const allCards = document.querySelectorAll('.stack-card');
    allCards.forEach(c => { c.classList.remove('cascade-in'); c.classList.add('cascade-out'); });

    setTimeout(() => {
        currentCategory = type; 
        currentCreationIndex = 0; 
        const data = CREATIONS_DATA[type][0];
        
        // Update Content
        creationTitleText.innerText = data.title; 
        creationDescText.innerHTML = data.desc;
        creationImgPlaceholder.style.backgroundImage = `url('${data.img}')`;
        creationLinkBtn.href = data.link;
        creationCounter.innerText = `1 / ${CREATIONS_DATA[type].length}`;

        // 3. Cascade Cards In & Slide Text In
        allCards.forEach(c => { c.classList.remove('cascade-out'); c.classList.add('cascade-in'); });
        
        creationTitleText.classList.remove('slide-out');
        creationDescText.classList.remove('slide-out');
        void creationTitleText.offsetWidth; // Force reflow

        creationTitleText.classList.add('slide-in');
        setTimeout(() => { creationDescText.classList.add('slide-in'); }, 150);
        setTimeout(() => creationInfoBox.classList.add('expand-line'), 100);
        
        setTimeout(() => { 
            allCards.forEach(c => c.classList.remove('cascade-in')); 
            isSwitchingCategory = false; 
        }, 1100); 
    }, 1100);
}

function changeCreation(dir) {
    if(isAnimatingCard || isSwitchingCategory) return;
    isAnimatingCard = true;

    // 1. Trigger Slide Out and Line Collapse
    creationInfoBox.classList.remove('expand-line');
    creationTitleText.classList.remove('slide-in');
    creationDescText.classList.remove('slide-in');
    
    creationTitleText.classList.add('slide-out');
    setTimeout(() => { creationDescText.classList.add('slide-out'); }, 100);

    // Card Stack Shuffling Animation
    stackWrapper.classList.add(dir === 1 ? 'animating-exit-next' : 'animating-exit-prev');
    stackMainCard.classList.add(dir === 1 ? 'card-exit-next' : 'card-exit-prev');

    setTimeout(() => {
        // 2. Update the Data
        const dataSet = CREATIONS_DATA[currentCategory];
        currentCreationIndex = (currentCreationIndex + dir + dataSet.length) % dataSet.length;
        
        const data = dataSet[currentCreationIndex];
        
        // Apply new text while it's invisible (slid out)
        creationTitleText.innerText = data.title;
        creationDescText.innerHTML = data.desc;
        creationImgPlaceholder.style.backgroundImage = `url('${data.img}')`;
        creationLinkBtn.href = data.link;
        creationCounter.innerText = `${currentCreationIndex + 1} / ${dataSet.length}`;

        // Prepare Card for Entry
        stackMainCard.classList.remove('card-exit-next', 'card-exit-prev');
        stackWrapper.classList.remove('animating-exit-next', 'animating-exit-prev');
        stackMainCard.classList.add(dir === 1 ? 'card-enter-next' : 'card-enter-prev'); 
        stackWrapper.classList.add(dir === 1 ? 'animating-enter-next' : 'animating-enter-prev'); 

        // 3. Trigger Slide In
        creationTitleText.classList.remove('slide-out');
        creationDescText.classList.remove('slide-out');
        
        // Small delay to ensure browser registers the class removal
        void creationTitleText.offsetWidth; 

        creationTitleText.classList.add('slide-in');
        setTimeout(() => { creationDescText.classList.add('slide-in'); }, 150);
        setTimeout(() => { creationInfoBox.classList.add('expand-line'); }, 100);

        setTimeout(() => {
            stackMainCard.classList.remove('card-enter-next', 'card-enter-prev');
            stackWrapper.classList.remove('animating-enter-next', 'animating-enter-prev');
            isAnimatingCard = false;
        }, 500);

    }, 600); 
}

window.changeCreation = changeCreation; window.switchCategory = switchCategory;

/* --------------------------------------------------------------------------
   13. TYPING EFFECT HELPERS
   -------------------------------------------------------------------------- */

function typeTextGroup(elements, speed, delay, callback) {
    let count = 0;
    function next() {
        if (count >= elements.length) { if (callback) callback(); return; }
        const el = elements[count]; const txt = el.getAttribute('data-text');
        el.classList.add('typing-cursor'); let i = 0;
        function t() {
            if (i < txt.length) { el.innerText += txt.charAt(i++); setTimeout(t, speed); }
            else { el.classList.remove('typing-cursor'); count++; setTimeout(next, delay); }
        }
        t();
    }
    next();
}

function typeConcurrent(elements, speed) {
    elements.forEach(el => {
        const txt = el.getAttribute('data-text'); el.classList.add('typing-cursor');
        let i = 0;
        function t() {
            if (i < txt.length) { el.innerText += txt.charAt(i++); setTimeout(t, speed); }
            else el.classList.remove('typing-cursor');
        }
        t();
    });
}

/* --- Dynamic Tab Title --- */
let originalTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "TERMINAL // Paused...";
});
window.addEventListener("focus", () => {
    document.title = originalTitle;
});


/* --------------------------------------------------------------------------
   14. CONTACT FORM ENGINE (Bulletproof Submit)
   -------------------------------------------------------------------------- */
async function submitContactForm() {
    const form = document.getElementById("contactForm");
    const submitBtn = form.querySelector('.contact-submit-btn');
    
    // 1. Change button text to show it's working
    const originalBtnText = submitBtn.innerText;
    submitBtn.innerText = "SENDING...";
    submitBtn.style.opacity = "0.7";
    submitBtn.style.pointerEvents = "none";

    // 2. Gather the data
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
        const response = await fetch("https://submit-form.com/OAIhpm570", {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: json,
        });

        if (response.ok) {
            // 3. Show a sleek, themed Success Message instead of the form
            form.innerHTML = `
              <div style="text-align: center; animation: textSlideIn 0.5s ease-out forwards;">
                <h3 style="color: var(--accent-red); font-family: 'Fira Code', monospace; font-size: 1.8rem; margin: 0 0 15px 0;">MESSAGE SENT_</h3>
                <p style="color: #ccc; font-family: 'Montserrat', sans-serif; font-size: 1rem; line-height: 1.6;">
                  Target locked. I will review your transmission and reply shortly.
                </p>
              </div>
            `;
        } else {
            // Revert button if something goes wrong
            alert("Oops! The server rejected the transmission. Please try again.");
            submitBtn.innerText = originalBtnText;
            submitBtn.style.opacity = "1";
            submitBtn.style.pointerEvents = "auto";
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Unable to establish a connection right now. Please try again later!");
        submitBtn.innerText = originalBtnText;
        submitBtn.style.opacity = "1";
        submitBtn.style.pointerEvents = "auto";
    }
}

/* --------------------------------------------------------------------------
   15. INITIALIZATION
   -------------------------------------------------------------------------- */

function init() {
    initIntroGrid();
    initSkillsCarousel();
    animateSkillsLoop();
    initGallery();
    initCreations();
    lockScroll();
    playSnake(); 
}

document.addEventListener('DOMContentLoaded', init);
