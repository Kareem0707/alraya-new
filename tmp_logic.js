
// Intro Animation
window.addEventListener('load', () => {
    // SVG Intro Animation
    const overlay = document.getElementById('intro-overlay');
    const app = document.getElementById('app');
    const cableLeft = document.getElementById('cable-path-left');
    const cableRight = document.getElementById('cable-path-right');
    const plugLeft = document.getElementById('plug-grp-left');
    const plugRight = document.getElementById('plug-grp-right');
    const spark = document.getElementById('intro-spark');

    // Config
    const duration = 1000; // Faster (1 second)
    let startTime = null;

    function animateIntro(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);

        // Cubic Ease Out
        const ease = 1 - Math.pow(1 - progress, 3);

        const width = window.innerWidth;
        const height = window.innerHeight;

        const centerX = width / 2;
        const targetY = height * 0.4; // 40% height as requested

        const startY = -40; // Start just off screen

        // Current Y position
        const currentY = startY + (targetY - startY) * ease;

        // Horizontal positions
        // Start wide (20% and 80%)
        // End at center (minus/plus plug width offset)
        const gap = 30; // 30px from center. Plug width is 30.
        // Actually, plug is centered on its group origin?
        // Let's assume group origin is the connection point.
        // Left plug: x=0 is center? No, drawing rect x=-30. So right edge is at 0.
        // So left plug should end at centerX.

        // Left Plug Group: 
        // We defined Rect x=-30. So right edge is 0.
        // So simply translating to centerX will make it touch the center line from the left.

        // Right Plug Group:
        // We defined Rect x=0. So left edge is 0.
        // So translating to centerX will make it touch the center line from the right.

        const startXLeft = width * 0.2;
        const endXLeft = centerX;

        const startXRight = width * 0.8;
        const endXRight = centerX;

        // Interpolate X
        const currentXLeft = startXLeft + (endXLeft - startXLeft) * ease;
        const currentXRight = startXRight + (endXRight - startXRight) * ease;

        // Update Plug Groups
        if (plugLeft) plugLeft.setAttribute('transform', `translate(${currentXLeft}, ${currentY})`);
        if (plugRight) plugRight.setAttribute('transform', `translate(${currentXRight}, ${currentY})`);

        // Update Cables (Bezier Curve)
        // Start point: Fixed at top corners (20% width)
        // End point: Moving with plug (currentX, currentY)
        // Control point: To droop, X should be mostly constant or midway, Y should hang low.
        // A simple "J" curve: Control point X = StartX, Y = CurrentY.
        // This makes it go down then curve in.

        if (cableLeft) cableLeft.setAttribute('d', `M ${startXLeft} 0 Q ${startXLeft} ${currentY} ${currentXLeft} ${currentY}`);

        if (cableRight) cableRight.setAttribute('d', `M ${startXRight} 0 Q ${startXRight} ${currentY} ${currentXRight} ${currentY}`);

        if (progress < 1) {
            requestAnimationFrame(animateIntro);
        } else {
            triggerConnection();
        }
    }

    function triggerConnection() {
        if (!spark) return;
        // Spark Effect
        spark.setAttribute('r', '5'); // Visible
        spark.style.filter = 'drop-shadow(0 0 10px gold)';
        spark.style.transition = 'all 0.1s';

        setTimeout(() => {
            spark.setAttribute('r', '20');
            spark.style.opacity = '0';

            // Light up
            app.classList.add('visible');

            // Fade overlay
            overlay.style.transition = 'opacity 1s';
            overlay.style.opacity = '0';
            setTimeout(() => { overlay.style.display = 'none'; }, 1000);
        }, 100);
    }

    // Start
    requestAnimationFrame(animateIntro);
});

// App Logic
// Handle Browser History Navigation
window.addEventListener('popstate', (event) => {
    if (event.state && event.state.view === 'product-category') {
        showProducts(event.state.category, false);
    } else {
        renderHome();
    }
});

// Initial State
window.addEventListener('DOMContentLoaded', () => {
    history.replaceState({ view: 'home' }, '', window.location.pathname);
});

function showProducts(category, addToHistory = true) {
    const list = document.getElementById('product-grid');
    const gridSection = document.getElementById('products-section');
    const services = document.getElementById('services');
    const title = document.getElementById('category-title');
    const hero = document.querySelector('.hero');

    if (addToHistory) {
        history.pushState({ view: 'product-category', category: category }, '', `#${category.replace(/\s+/g, '-')}`);
    }

    // Filter products
    const filtered = products.filter(p => p.category === category);

    // Render
    list.innerHTML = filtered.map(p => `
    <div class="product-card" onclick="openProduct(${p.id})" style="cursor: pointer; transition: transform 0.3s;">
        <div style="height: 300px; background: url('${p.image}') center/cover; border-radius: 8px; margin-bottom: 1rem; position: relative; border: 1px solid rgba(255,255,255,0.1);">
            <div style="position: absolute; top: 1rem; right: 1rem; background: rgba(0,0,0,0.8); color: var(--accent-gold); padding: 0.5rem 1rem; border-radius: 20px; font-weight: bold; border: 1px solid var(--accent-gold);">
                ${p.price}
            </div>
        </div>
        <h3 style="color: #fff; margin-bottom: 0.5rem;">${p.name}</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem;">${p.category}</p>
    </div>
  `).join('');

    title.innerText = category;

    // Switch views
    services.style.display = 'none';
    hero.style.display = 'none';
    gridSection.style.display = 'block';

    // Trigger animation
    setTimeout(() => {
        list.classList.add('active');
    }, 10);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function hideProducts() {
    // This function is called by the "Back" button
    if (history.state && history.state.view === 'product-category') {
        history.back();
    } else {
        renderHome();
    }
}

function renderHome() {
    const gridSection = document.getElementById('products-section');
    const services = document.getElementById('services');
    const hero = document.querySelector('.hero');

    gridSection.style.display = 'none';
    services.style.display = 'grid';
    hero.style.display = 'flex';

    // Ensure scroll to services or top? User usually expects to return to where they were, 
    // but for simplicity, let's keep position or scroll to services top if needed.
    // existing behavior was just show/hide.
    // Let's scroll to top of services to be helpful? Or just top of page.
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openProduct(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    document.getElementById('modal-image').style.backgroundImage = `url('${product.image}')`;
    document.getElementById('modal-title').innerText = product.name;
    document.getElementById('modal-desc').innerText = product.desc;
    document.getElementById('modal-price').innerText = product.price;
    document.getElementById('modal-warranty').innerText = product.warranty;

    // Format WhatsApp Link
    // Format WhatsApp Link
    const message = `Hello, I'm contacting you via the Alraya website. I'm interested in: ${product.name} (${product.price}).`;
    const waBtn = document.getElementById('modal-whatsapp');
    waBtn.href = `https://wa.me/201091732255?text=${encodeURIComponent(message)}`;

    // Track click
    waBtn.onclick = function () {
        notifyAdmin(`Product Inquiry: ${product.name}`);
    };

    document.getElementById('product-modal').classList.add('active');
}

function notifyAdmin(action) {
    console.log(`[Analytics] User clicked WhatsApp: ${action}`);

    // Check if EmailJS is loaded
    if (typeof emailjs === 'undefined') {
        console.warn("EmailJS SDK not loaded.");
        return;
    }

    // EmailJS Configuration
    const serviceID = "service_dvortoy";
    const templateID = "template_gv5evuh";

    const templateParams = {
        message: action,
        to_email: "kelshafie8743@gmail.com",
        timestamp: new Date().toLocaleString()
    };

    emailjs.send(serviceID, templateID, templateParams)
        .then(() => {
            console.log('[EmailJS] Notification sent successfully!');
        }, (error) => {
            console.error('[EmailJS] Failed to send notification:', error);
        });
}

function closeModal() {
    document.getElementById('product-modal').classList.remove('active');
}

// Mobile Menu Toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const burgerMenu = document.querySelector('.burger-menu');
    const icon = burgerMenu.querySelector('span');

    navLinks.classList.toggle('active');
    burgerMenu.classList.toggle('active');

    if (burgerMenu.classList.contains('active')) {
        icon.innerText = 'close';
    } else {
        icon.innerText = 'menu';
    }
}

// Mobile Dropdown Toggle
window.addEventListener('DOMContentLoaded', () => {
    const dropBtns = document.querySelectorAll('.dropbtn');
    dropBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // On mobile, click toggles the dropdown
            if (window.innerWidth <= 768) {
                e.preventDefault();
                btn.parentElement.classList.toggle('active');
            }
        });
    });

    // Close menu when clicking a standard link
    const links = document.querySelectorAll('.nav-links a:not(.dropbtn)');
    links.forEach(link => {
        link.addEventListener('click', () => {
            const navLinks = document.querySelector('.nav-links');
            const burgerMenu = document.querySelector('.burger-menu');
            const icon = burgerMenu.querySelector('span');

            navLinks.classList.remove('active');
            if (burgerMenu) {
                burgerMenu.classList.remove('active');
                if (icon) icon.innerText = 'menu';
            }
        });
    });
});

// Scroll Reveal Logic
window.addEventListener('DOMContentLoaded', () => {
    // Select major sections and cards
    const revealElements = document.querySelectorAll('.services, .service-card, footer, .hero p, .hero a');

    // Add initial reveal class style (hidden state)
    revealElements.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // observer.unobserve(entry.target); // Optional: Keep one-time reveal
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before bottom
    });

    revealElements.forEach(el => observer.observe(el));
});

// Language Switch Logic
const translations = {
    en: {
        nav_home: "Home",
        nav_fixtures: "Lighting Fixtures",
        cat_lampshades: "Lampshades",
        cat_pendant: "Pendant Lights",
        cat_wall: "Indoor Wall Sconce",
        cat_spot: "Spotlights",
        cat_floor: "Floor Lamp",
        cat_track: "Track Lights",
        cat_pillar: "Outdoor Pillar Lights",
        cat_spike: "Garden Spike Lights",
        nav_about: "About Us",
        nav_contact: "Contact Us",
        hero_slogan: "Elegance In Every Glow.",
        hero_cta: "Explore Collection",
        section_fixtures: "LIGHTING FIXTURES",
        back_to_cats: "Back to Categories",
        about_text: "Alraya Lighting Systems doesn't just sell lighting, but we design atmospheres that give your space a soul and exceptional luxury. We combine the precision of modern design with the magic of light to turn every corner of your home into an artistic painting that tells the story of your high taste.",
        val_money: "Value for Money",
        after_sales: "After-sales Service",
        footer_address: "Al-Sheikh Zayed, Karma4 Mall behind Alahly Club"
    },
    ar: {
        nav_home: "الرئيسية",
        nav_fixtures: "وحدات الإضاءة",
        cat_lampshades: "أباجورات",
        cat_pendant: "نجف",
        cat_wall: "إضاءة حائط داخلية",
        cat_spot: "سبوت لايت",
        cat_floor: "أباجورات أرضية",
        cat_track: "تراك لايت",
        cat_pillar: "عواميد حدائق",
        cat_spike: "حربه",
        nav_about: "من نحن",
        nav_contact: "تواصل معنا",
        hero_slogan: "الأناقة في كل شعاع.",
        hero_cta: "تصفح المجموعة",
        section_fixtures: "وحدات الإضاءة",
        back_to_cats: "العودة للقائمة",
        about_text: "الراية لأنظمة الإضاءة لا نبيع مجرد إضاءة، بل نصمم أجواءً تمنح مساحتك روحاً وفخامة استثنائية، نجمع بين دقة التصميم العصري وسحر الضوء لنحول كل ركن في منزلك إلى لوحة فنية تحكي قصة ذوقك الرفيع.",
        val_money: "قيمة مقابل سعر",
        after_sales: "خدمة ما بعد البيع",
        footer_address: "الشيخ زايد، مول كرمة 4 خلف النادي الأهلي"
    }
};

let currentLang = 'mixed'; // 'mixed', 'en', 'ar'

function toggleLanguage() {
    const switchContainer = document.getElementById('lang-switch');
    // If mixed, assumes starting at EN visual state, so click goes to AR.
    // Visual state: no 'active' class = EN (Left). 'active' class = AR (Right).

    if (switchContainer.classList.contains('active')) {
        // Was AR, switch to EN
        switchContainer.classList.remove('active');
        setLanguage('en');
    } else {
        // Was EN (or mixed/start), switch to AR
        switchContainer.classList.add('active');
        setLanguage('ar');
    }
}

function setLanguage(lang) {
    currentLang = lang;
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    // Handle Direction - Add/remove 'lang-ar' class for RTL styling
    if (lang === 'ar') {
        document.body.classList.add('lang-ar');
        document.body.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    } else {
        document.body.classList.remove('lang-ar');
        document.body.style.fontFamily = "'Outfit', sans-serif";
    }
}
