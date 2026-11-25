document.addEventListener('DOMContentLoaded', () => {
    // --- Translations Dictionary ---
    const translations = {
        es: {
            nav_home: 'Inicio',
            nav_about: 'Sobre mí',
            nav_exp: 'Experiencia',
            nav_proj: 'Proyectos',
            nav_skills: 'Habilidades',
            nav_contact: 'Contacto',
            hero_greeting: 'Hola, mi nombre es',
            hero_desc: 'Ingeniero Electrónico, Robótico y Mecatrónico enfocado en verificación digital (RTL), sistemas embebidos, visión artificial y navegación autónoma.',
            btn_contact: 'Contactar',
            btn_cv: 'Descargar CV (PDF)',
            sec_about: 'Sobre mí',
            about_p1: 'Soy ingeniero graduado en Electrónica, Robótica y Mecatrónica por la Universidad de Málaga (con estancia Erasmus+ en la Université de Liège) y actualmente curso el Máster en Ingeniería Mecatrónica.',
            about_p2: 'Mi enfoque combina el diseño y verificación de hardware de bajo nivel (VHDL, FPGAs, microcontroladores en C/C++ bare-metal) con software de alto nivel para robótica autónoma (ROS 2, Python, visión artificial y Deep Learning). Busco aportar rigor técnico en sectores de alta exigencia como aeroespacial, defensa, semiconductores e I+D.',
            hl_tfg: 'Matrícula de Honor en TFG (Conducción Autónoma)',
            hl_exp: 'Experiencias en I+D, EMC y Aeroespacial',
            hl_lang: 'Inglés (Cambridge) y Francés (DELF)',
            sec_exp: 'Experiencia y Formación',
            date_clue: 'Noviembre 2026 - Presente',
            role_clue: 'Prácticas – Verificación RTL (Hardware Digital)',
            desc_clue_1: 'Verificación funcional a bajo nivel de diseño digital RTL para sistemas aeroespaciales y aviónica.',
            desc_clue_2: 'Desarrollo de entornos de prueba y validación sobre arquitecturas FPGA/VHDL.',
            date_master: 'Septiembre 2026 - Presente',
            role_master: 'Máster en Ingeniería Mecatrónica',
            desc_master: 'Especialización avanzada en control de robots móviles, sistemas mecatrónicos complejos y automatización.',
            date_enerclic: 'Marzo 2026 - Mayo 2026',
            role_enerclic: 'Prácticas – Departamento de I+D',
            desc_enerclic_1: 'Desarrollo de interfaces gráficas de diagnóstico en Python (PyQt5) y gestión de bases de datos SQL.',
            desc_enerclic_2: 'Validación funcional de prototipos electrónicos embebidos, comunicaciones industriales (Modbus, MQTT) y Raspberry Pi.',
            date_dekra: 'Marzo 2025 - Septiembre 2025',
            role_dekra: 'Prácticas – Ingeniero de Ensayos Radioeléctricos y EMC',
            desc_dekra_1: 'Ejecución de ensayos de Compatibilidad Electromagnética (EMC) y radiofrecuencia en laboratorio.',
            desc_dekra_2: 'Configuración de analizadores de espectro y generadores de señales.',
            desc_dekra_3: 'Automatización de instrumentación y captura de datos mediante scripts en Python y comandos SCPI.',
            date_erasmus: 'Septiembre 2023 - Junio 2024',
            role_erasmus: 'Estancia Erasmus+ (Ingeniería)',
            desc_erasmus: 'Nota media: 8.2/10. Reconocimiento académico en Circuitos Eléctricos, Electrónica Digital (VHDL/CPLD) y Electrónica de Potencia.',
            date_grado: 'Septiembre 2021 - Julio 2026',
            role_grado: 'Grado en Ingeniería Electrónica, Robótica y Mecatrónica',
            desc_grado_1: 'Nota media: 7.24/10.',
            desc_grado_2: 'TFG: "Detección de conos mediante visión artificial y seguimiento de trayectorias con Pure Pursuit en vehículo a escala 1/10" (Formula Student Driverless sobre NVIDIA Jetson TX2). Matrícula de Honor (9.8/10).',
            sec_proj: 'Proyectos Destacados',
            filter_all: 'Todos',
            filter_rob: 'Robótica & IA',
            filter_fpga: 'FPGA & Embebidos',
            filter_pow: 'Potencia & PCB',
            proj1_title: 'Conducción Autónoma (Formula Student)',
            proj1_desc: 'Pipeline de visión artificial (YOLO) con dataset sintético propio en Blender/Gazebo y algoritmo de control lateral Pure Pursuit desplegado en NVIDIA Jetson TX2.',
            proj2_title: 'Filtros Digitales FIR e IIR en FPGA',
            proj2_desc: 'Diseño RTL, simulación y síntesis de filtros digitales de procesamiento de señal en tiempo real sobre FPGA.',
            proj3_title: 'Redes Neuronales desde Cero (NumPy)',
            proj3_desc: 'Implementación matemática sin frameworks de perceptrones binarios, multiclase y Perceptrón Multicapa (MLP) con backpropagation entrenado en MNIST.',
            proj4_title: 'Convertidor Buck de Alta Robustez',
            proj4_desc: 'Diseño, simulación y montaje físico de un convertidor DC-DC reductor, reconocido por su estabilidad y eficiencia frente a otros prototipos.',
            proj5_title: 'Controlador Digital en CPLD',
            proj5_desc: 'Descripción de hardware en VHDL y síntesis sobre dispositivos lógicos programables complejos (CPLD) para máquinas de estados síncronas.',
            proj6_title: 'Robot Móvil Autónomo y Diseño PCB',
            proj6_desc: 'Desarrollo de robot seguidor de trayectoria con evasión de obstáculos y diseño de PCB personalizada en KiCad para integrar drivers y sensores.',
            sec_skills: 'Habilidades Técnicas',
            skill_cat1: 'Embebidos & Hardware',
            skill_cat2: 'Robótica, IA & Software',
            skill_cat3: 'Idiomas',
            skill_cat4: 'Certificaciones',
            lang_es: 'Español:',
            lang_en: 'Inglés:',
            lang_fr: 'Francés:',
            lang_de: 'Alemán:',
            sec_contact: 'Contacto',
            contact_desc: '¿Buscas un perfil técnico en robótica, sistemas embebidos o verificación hardware? Escríbeme directamente o descarga mi currículum.',
            btn_copy: 'Copiar',
            lbl_phone: 'Teléfono',
            lbl_loc: 'Ubicación',
            val_loc: 'Málaga, España (Disponibilidad movilidad europea)',
            ph_name: 'Tu nombre / Empresa',
            ph_email: 'Tu correo electrónico',
            ph_msg: 'Mensaje...',
            btn_send: 'Enviar Mensaje',
            footer_rights: 'Todos los derechos reservados.',
            professions: [
                'Ingeniero de Robótica y Mecatrónica',
                'Especialista en Verificación RTL & FPGA',
                'Desarrollador de Sistemas Embebidos',
                'Ingeniero de Visión Artificial y Control'
            ]
        },
        en: {
            nav_home: 'Home',
            nav_about: 'About',
            nav_exp: 'Experience',
            nav_proj: 'Projects',
            nav_skills: 'Skills',
            nav_contact: 'Contact',
            hero_greeting: 'Hello, my name is',
            hero_desc: 'Electronic, Robotic, and Mechatronic Engineer focused on RTL digital verification, embedded systems, computer vision, and autonomous navigation.',
            btn_contact: 'Get in Touch',
            btn_cv: 'Download CV (PDF)',
            sec_about: 'About Me',
            about_p1: 'I hold a Bachelor’s degree in Electronic, Robotic, and Mechatronic Engineering from the University of Málaga (including an Erasmus+ exchange at the Université de Liège) and I am currently pursuing a Master’s in Mechatronic Engineering.',
            about_p2: 'My profile bridges low-level hardware design and verification (VHDL, FPGAs, bare-metal C/C++ microcontrollers) with high-level software for autonomous robotics (ROS 2, Python, computer vision, and Deep Learning). I aim to contribute technical rigor in demanding sectors such as aerospace, defense, semiconductors, and R&D.',
            hl_tfg: 'Honors (9.8/10) on Autonomous Driving Thesis',
            hl_exp: 'Internships in R&D, EMC & Aerospace',
            hl_lang: 'English (Cambridge) & French (DELF)',
            sec_exp: 'Experience & Education',
            date_clue: 'November 2026 - Present',
            role_clue: 'Intern – RTL Verification Engineer',
            desc_clue_1: 'Low-level functional verification of RTL digital hardware designs for aerospace and avionics systems.',
            desc_clue_2: 'Development of testbenches and validation environments on FPGA/VHDL architectures.',
            date_master: 'September 2026 - Present',
            role_master: 'M.Sc. in Mechatronic Engineering',
            desc_master: 'Advanced specialization in mobile robot control, complex mechatronic systems, and industrial automation.',
            date_enerclic: 'March 2026 - May 2026',
            role_enerclic: 'Intern – R&D Department',
            desc_enerclic_1: 'Developed diagnostic GUIs in Python (PyQt5) and managed SQL databases.',
            desc_enerclic_2: 'Performed functional validation of embedded hardware prototypes, industrial protocols (Modbus, MQTT), and Raspberry Pi.',
            date_dekra: 'March 2025 - September 2025',
            role_dekra: 'Intern – Electromagnetic & Radio Matters (EMC) Engineer',
            desc_dekra_1: 'Executed Electromagnetic Compatibility (EMC) and radio frequency testing procedures in accredited labs.',
            desc_dekra_2: 'Configured spectrum analyzers and RF signal generators.',
            desc_dekra_3: 'Automated laboratory instrumentation and data acquisition via Python scripts and SCPI commands.',
            date_erasmus: 'September 2023 - June 2024',
            role_erasmus: 'Erasmus+ Exchange Program',
            desc_erasmus: 'GPA: 8.2/10. Recognized for academic performance in Electrical Circuits, Digital Electronics (VHDL/CPLD), and Power Electronics.',
            date_grado: 'September 2021 - July 2026',
            role_grado: 'B.Sc. in Electronic, Robotic and Mechatronic Engineering',
            desc_grado_1: 'GPA: 7.24/10.',
            desc_grado_2: 'Thesis: "Cone detection using computer vision and path following with Pure Pursuit using a 1/10 scale car" (Formula Student Driverless on NVIDIA Jetson TX2). Awarded Honors (9.8/10).',
            sec_proj: 'Featured Projects',
            filter_all: 'All',
            filter_rob: 'Robotics & AI',
            filter_fpga: 'FPGA & Embedded',
            filter_pow: 'Power & PCB',
            proj1_title: 'Autonomous Driving (Formula Student)',
            proj1_desc: 'Computer vision pipeline (YOLO) trained on a custom Blender/Gazebo synthetic dataset paired with a Pure Pursuit controller deployed on NVIDIA Jetson TX2.',
            proj2_title: 'FIR & IIR Digital Filters on FPGA',
            proj2_desc: 'RTL design, simulation, and synthesis of real-time digital signal processing filters on FPGA hardware.',
            proj3_title: 'Neural Networks from Scratch (NumPy)',
            proj3_desc: 'Framework-free mathematical implementation of binary, multiclass, and Multilayer Perceptrons (MLP) with backpropagation trained on MNIST.',
            proj4_title: 'High-Robustness Buck Converter',
            proj4_desc: 'Design, simulation, and hardware assembly of a step-down DC-DC converter recognized for superior stability and efficiency.',
            proj5_title: 'Digital Controller on CPLD',
            proj5_desc: 'Hardware description in VHDL and synthesis on Complex Programmable Logic Devices (CPLDs) for synchronous state machines.',
            proj6_title: 'Autonomous Mobile Robot & PCB Design',
            proj6_desc: 'Trajectory-following obstacle-avoidance robot and custom PCB layout in KiCad integrating motor drivers and sensor arrays.',
            sec_skills: 'Technical Skills',
            skill_cat1: 'Embedded & Hardware',
            skill_cat2: 'Robotics, AI & Software',
            skill_cat3: 'Languages',
            skill_cat4: 'Certifications',
            lang_es: 'Spanish:',
            lang_en: 'English:',
            lang_fr: 'French:',
            lang_de: 'German:',
            sec_contact: 'Contact',
            contact_desc: 'Looking for an engineer in robotics, embedded systems, or hardware verification? Reach out directly or download my CV.',
            btn_copy: 'Copy',
            lbl_phone: 'Phone',
            lbl_loc: 'Location',
            val_loc: 'Málaga, Spain (Open to European relocation)',
            ph_name: 'Your Name / Company',
            ph_email: 'Your Email Address',
            ph_msg: 'Message...',
            btn_send: 'Send Message',
            footer_rights: 'All rights reserved.',
            professions: [
                'Robotics & Mechatronics Engineer',
                'RTL & FPGA Verification Specialist',
                'Embedded Systems Developer',
                'Computer Vision & Control Engineer'
            ]
        }
    };

    let currentLang = 'es';
    const langToggleBtn = document.getElementById('lang-toggle');

    function updateLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;
        langToggleBtn.textContent = lang === 'es' ? 'EN' : 'ES';

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });

        // Reset typing animation
        count = 0;
        index = 0;
    }

    langToggleBtn.addEventListener('click', () => {
        updateLanguage(currentLang === 'es' ? 'en' : 'es');
    });

    // --- Navigation ---
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, idx) => {
            link.style.animation = link.style.animation ? '' : `navLinkFade 0.4s ease forwards ${idx / 7 + 0.2}s`;
        });
        burger.classList.toggle('toggle');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
                navLinks.forEach(l => l.style.animation = '');
            }
        });
    });

    // --- Typing Effect ---
    const typingSpan = document.querySelector('.typing');
    let count = 0;
    let index = 0;

    (function type() {
        const professions = translations[currentLang].professions;
        if (count >= professions.length) count = 0;
        
        const currentText = professions[count];
        const letter = currentText.slice(0, ++index);
        typingSpan.textContent = letter;

        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000);
        } else {
            setTimeout(type, 80);
        }
    }());

    // --- Project Filtering ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.classList.remove('hide');
                } else {
                    card.classList.add('hide');
                }
            });
        });
    });

    // --- Copy Email & Contact Form ---
    const copyBtn = document.getElementById('copy-email');
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText('juanarielgodoybaez750@gmail.com');
        const originalText = copyBtn.textContent;
        copyBtn.textContent = currentLang === 'es' ? '¡Copiado!' : 'Copied!';
        setTimeout(() => {
            copyBtn.textContent = translations[currentLang].btn_copy;
        }, 2000);
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('sender-name').value;
        const email = document.getElementById('sender-email').value;
        const msg = document.getElementById('sender-msg').value;

        const subject = encodeURIComponent(`Contacto Portfolio - ${name}`);
        const body = encodeURIComponent(`Nombre/Empresa: ${name}\nEmail: ${email}\n\nMensaje:\n${msg}`);
        window.location.href = `mailto:juanarielgodoybaez750@gmail.com?subject=${subject}&body=${body}`;
    });

    // --- Reveal on Scroll ---
    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(reveal => revealObserver.observe(reveal));

    // --- Dynamic Background Canvas ---
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');
    let particlesArray = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
    }

    window.addEventListener('resize', resizeCanvas);

    class Particle {
        constructor(x, y, directionX, directionY, size) {
            this.x = x;
            this.y = y;
            this.directionX = directionX;
            this.directionY = directionY;
            this.size = size;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = '#00d4ff';
            ctx.fill();
        }
        update() {
            if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
            if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;
            this.x += this.directionX;
            this.y += this.directionY;
            this.draw();
        }
    }

    function initParticles() {
        particlesArray = [];
        const numberOfParticles = Math.min((canvas.height * canvas.width) / 16000, 90);
        for (let i = 0; i < numberOfParticles; i++) {
            const size = (Math.random() * 1.8) + 1;
            const x = Math.random() * (canvas.width - size * 4) + size * 2;
            const y = Math.random() * (canvas.height - size * 4) + size * 2;
            const directionX = (Math.random() * 0.8) - 0.4;
            const directionY = (Math.random() * 0.8) - 0.4;
            particlesArray.push(new Particle(x, y, directionX, directionY, size));
        }
    }

    function connectParticles() {
        const maxDist = 140 * 140;
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a + 1; b < particlesArray.length; b++) {
                const dx = particlesArray[a].x - particlesArray[b].x;
                const dy = particlesArray[a].y - particlesArray[b].y;
                const distSq = dx * dx + dy * dy;
                if (distSq < maxDist) {
                    const opacity = 1 - (distSq / maxDist);
                    ctx.strokeStyle = `rgba(0, 212, 255, ${opacity * 0.4})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
        }
        connectParticles();
    }

    resizeCanvas();
    animate();
});