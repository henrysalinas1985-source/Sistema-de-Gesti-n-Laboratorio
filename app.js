const router = {
    content: document.getElementById('hubContent'),
    title: document.getElementById('mainTitle'),
    subtitle: document.getElementById('mainSubtitle'),
    backNav: document.getElementById('backNav'),

    // Definición de las Vistas
    views: {
        home: {
            title: "Sistema de Gestión de Laboratorio",
            subtitle: "Selecciona una categoría para comenzar",
            showBack: false,
            cards: [
                {
                    id: 'rev',
                    title: "Relevamientos",
                    desc: "Gestión de equipos, relevamientos e investigación.",
                    icon: "📋",
                    action: "router.relevamientos()",
                    accent: "accent-rev"
                },
                {
                    id: 'cal',
                    title: "Calibraciones",
                    desc: "Acceso a Mondis, Centrífugas, Dataloggers y Baños.",
                    icon: "⚖️",
                    action: "router.calibraciones()",
                    accent: "accent-cal"
                }
            ]
        },
        relevamientos: {
            title: "Módulo de Relevamientos",
            subtitle: "Registro de equipos e investigación técnica",
            showBack: true,
            cards: [
                {
                    title: "Relevamiento de Equipos",
                    desc: "Plantilla oficial para el registro de equipos en campo.",
                    icon: "📝",
                    url: "https://henrysalinas1985-source.github.io/eqquipos/",
                    accent: "accent-rev"
                },
                {
                    title: "Investigación",
                    desc: "Módulo de análisis CSL e investigación técnica profunda.",
                    icon: "🔍",
                    url: "https://henrysalinas1985-source.github.io/CSL/",
                    accent: "accent-csl"
                }
            ]
        },
        calibraciones: {
            title: "Módulo de Calibraciones",
            subtitle: "Sistemas integrados de calibración por equipo",
            showBack: true,
            cards: [
                {
                    title: "Mondis",
                    desc: "Monitoreo inteligente de sensores y registros Mondis.",
                    icon: "📊",
                    url: "https://henrysalinas1985-source.github.io/MONITOREO/",
                    accent: "accent-mondis"
                },
                {
                    title: "Centrífugas",
                    desc: "Calibración y mantenimiento preventivo de centrífugas.",
                    icon: "⚙️",
                    url: "https://henrysalinas1985-source.github.io/Centrifugas/",
                    accent: "accent-cen"
                },
                {
                    title: "Datalogger",
                    desc: "Trazabilidad y análisis de datos de dataloggers.",
                    icon: "📈",
                    url: "https://henrysalinas1985-source.github.io/datalogger/",
                    accent: "accent-data"
                },
                {
                    title: "Baños Térmicos",
                    desc: "Control de temperatura y calibración de baños térmicos.",
                    icon: "🌡️",
                    url: "https://henrysalinas1985-source.github.io/T-rmicos/",
                    accent: "accent-ban"
                }
            ]
        }
    },

    init() {
        this.home();
    },

    render(viewKey) {
        const view = this.views[viewKey];

        // Efecto de salida
        this.content.classList.remove('fade-in');
        this.content.classList.add('fade-out');

        setTimeout(() => {
            // Actualizar Textos
            this.title.textContent = view.title;
            this.subtitle.textContent = view.subtitle;

            // Mostrar/Ocultar Botón Volver
            if (view.showBack) {
                this.backNav.classList.remove('hidden');
            } else {
                this.backNav.classList.add('hidden');
            }

            // Generar Cards
            this.content.innerHTML = view.cards.map(card => `
                <div class="hub-card ${card.accent || ''}" onclick="${card.action || `window.open('${card.url}', '_blank')`}">
                    <div class="card-icon">${card.icon}</div>
                    <div class="card-content">
                        <h3>${card.title}</h3>
                        <p>${card.desc}</p>
                    </div>
                    <div class="card-arrow">→</div>
                </div>
            `).join('');

            // Efecto de entrada
            this.content.classList.remove('fade-out');
            this.content.classList.add('fade-in');
        }, 300);
    },

    home() { this.render('home'); },
    relevamientos() { this.render('relevamientos'); },
    calibraciones() { this.render('calibraciones'); }
};

// Iniciar Hub
document.addEventListener('DOMContentLoaded', () => router.init());
