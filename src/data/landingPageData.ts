/**
 * Landing Page Data
 * Este archivo centraliza todo el contenido de la landing page.
 * Modifica este archivo para cambiar textos, imágenes, enlaces, etc.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string; // Nombre del ícono o SVG path
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string; // Emoji o nombre de ícono
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
  ctaLink: string;
}

export interface ContactFormLabels {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitButton: string;
  sendingButton: string;
  successMessage: string;
  errorMessage: string;
}

export interface LandingPageData {
  // Información de la empresa
  company: {
    name: string;
    tagline: string;
    description: string;
    logo: string;
  };

  // SEO Metadata
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
  };

  // Navegación
  navigation: {
    links: NavLink[];
  };

  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    description: string;
    ctaPrimary: {
      text: string;
      href: string;
    };
    ctaSecondary: {
      text: string;
      href: string;
    };
    image: string;
    imageAlt: string;
  };

  // Features Section
  features: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: Feature[];
  };

  // Pricing Section
  pricing: {
    sectionTitle: string;
    sectionSubtitle: string;
    plans: PricingPlan[];
  };

  // Contact Section
  contact: {
    sectionTitle: string;
    sectionSubtitle: string;
    form: ContactFormLabels;
    contactInfo: {
      email: string;
      phone?: string;
      address?: string;
    };
  };

  // Footer
  footer: {
    aboutText: string;
    socialLinks: SocialLink[];
    quickLinks: NavLink[];
    copyright: string;
  };

  // Backend API URL
  api: {
    contactEndpoint: string;
  };
}

// ============================================================================
// DATOS DE LA LANDING PAGE - EDITA AQUÍ
// ============================================================================

export const landingPageData: LandingPageData = {
  company: {
    name: "vCard Connect",
    tagline: "Conecta de forma inteligente",
    description: "La forma moderna de compartir tu información de contacto",
    logo: "/logo.svg", // Coloca tu logo en /public/logo.svg
  },

  seo: {
    title: "vCard Connect - La Tarjeta Digital Profesional",
    description:
      "Crea tu Tarjeta de Presentación Digital y compártela al instante. Gestiona tus contactos desde nuestra App PWA y agrégala a tu Apple Wallet o Google Wallet.",
    keywords: [
      "vcard",
      "tarjeta digital",
      "business card",
      "pwa",
      "apple wallet",
      "google wallet",
      "networking",
      "nfc",
    ],
    ogImage: "/og-image.svg", // Imagen para compartir en redes sociales
  },

  navigation: {
    links: [
      { label: "Inicio", href: "#hero" },
      { label: "Funcionalidades", href: "#features" },
      { label: "Precios", href: "#pricing" },
      { label: "Contacto", href: "#contact" },
    ],
  },

  hero: {
    title: "Tu Tarjeta de Presentación Digital. Reinventada.",
    subtitle: "Comparte sin límites. Gestiona desde nuestra App PWA.",
    description:
      "La herramienta definitiva para profesionales. Crea tu tarjeta digital, guárdala en Apple o Google Wallet y usa nuestra Web App (PWA) para analizar tus visitas y actualizar tus datos en tiempo real.",
    ctaPrimary: {
      text: "Crear mi Tarjeta Gratis",
      href: "#contact",
    },
    ctaSecondary: {
      text: "Ver Demo",
      href: "#features",
    },
    image: "/hero-image.svg", // Coloca una imagen hero en /public/
    imageAlt: "Tarjeta Digital vCard Connect mostrada en un smartphone",
  },

  features: {
    sectionTitle: "Mucho más que una Tarjeta",
    sectionSubtitle:
      "Una suite completa de networking digital gestionada desde una aplicación moderna.",
    items: [
      {
        id: "feature-card",
        title: "Tarjeta Digital Premium",
        description:
          "Tu identidad profesional en un link. Personalizable, interactiva y siempre actualizada. Compártela vía QR, NFC o enlace directo.",
        icon: "📇",
      },
      {
        id: "feature-pwa",
        title: "Gestión vía App (PWA)",
        description:
          "Instala nuestra aplicación web en tu móvil para editar tu perfil, ver estadísticas y gestionar tus contactos sin ocupar espacio.",
        icon: "📱",
      },
      {
        id: "feature-wallet",
        title: "Apple & Google Wallet",
        description:
          "Lleva tu tarjeta en tu billetera nativa. Generamos pases .pkpass oficiales para que compartas tu contacto offline y con un toque.",
        icon: "💳",
      },
      {
        id: "feature-design",
        title: "Diseño Adaptativo",
        description:
          "Modo oscuro automático y temas que se ajustan a tu marca personal. Tu tarjeta lucirá perfecta en cualquier dispositivo.",
        icon: "🎨",
      },
      {
        id: "feature-analytics",
        title: "Analítica Visual",
        description:
          "Entiende a tu audiencia. Gráficos de impacto sobre quién ve tu tarjeta, desde dónde (Ciudad/País) y qué dispositivo usan.",
        icon: "📊",
      },
      {
        id: "feature-eco",
        title: "Impacto ESG Real",
        description:
          "Networking sin papel. Visualiza tu huella ecológica positiva y gamifica tu ahorro de CO2 y árboles.",
        icon: "🌱",
      },
    ],
  },

  pricing: {
    sectionTitle: "Planes Flexibles",
    sectionSubtitle:
      "Empieza gratis y escala según tus necesidades de networking.",
    plans: [
      {
        id: "free",
        name: "Gratis",
        price: "$0",
        period: "para siempre",
        description: "Tu tarjeta digital esencial.",
        features: [
          "1 Tarjeta Digital",
          "Acceso a App de Gestión (PWA)",
          "QR Dinámico",
          "Modo Oscuro Automático",
          "Estadísticas Básicas",
        ],
        ctaText: "Crear Ahora",
        ctaLink: "#contact",
      },
      {
        id: "pro",
        name: "Profesional",
        price: "$9.99",
        period: "/mes",
        description: "Para maximizar tu impacto y alcance.",
        features: [
          "5 Tarjetas Digitales",
          "Pases para Apple/Google Wallet",
          "Analíticas Geográficas Visuales",
          "Personalización Avanzada",
          "Soporte NFC",
          "Prioridad en Soporte",
        ],
        highlighted: true,
        ctaText: "Prueba 14 Días Gratis",
        ctaLink: "#contact",
      },
      {
        id: "business",
        name: "Empresarial",
        price: "$29.99",
        period: "/mes",
        description: "Solución corporativa centralizada.",
        features: [
          "Tarjetas Ilimitadas",
          "Panel de Control de Equipo",
          "Branding Corporativo Protegido",
          "Integración CRM (API/Webhooks)",
          "Métricas ESG de Empresa",
          "Soporte 24/7",
        ],
        ctaText: "Contactar Ventas",
        ctaLink: "#contact",
      },
    ],
  },

  contact: {
    sectionTitle: "¿Listo para conectar?",
    sectionSubtitle:
      "Únete a la revolución del networking digital con vCard Connect.",
    form: {
      nameLabel: "Nombre Completo",
      namePlaceholder: "Tu nombre",
      emailLabel: "Correo Profesional",
      emailPlaceholder: "tu@empresa.com",
      messageLabel: "Mensaje",
      messagePlaceholder: "Tengo una duda sobre los planes...",
      submitButton: "Enviar Mensaje",
      sendingButton: "Enviando...",
      successMessage:
        "¡Recibido! Nos pondremos en contacto contigo muy pronto.",
      errorMessage:
        "Hubo un error al enviar tu mensaje. Por favor, intenta nuevamente.",
    },
    contactInfo: {
      email: "hola@vcardconnect.com",
      phone: "+34 612 345 678",
      address: "Calle Vitoria 3, Alcalá de Henares - Madrid, España",
    },
  },

  footer: {
    aboutText:
      "vCard Connect es la plataforma de tarjetas de presentación digitales líder. Combina diseño premium, tecnología Wallet y gestión PWA para profesionales modernos.",
    socialLinks: [
      {
        name: "X",
        url: "https://x.com/vcardconnect",
        icon: "x",
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/company/vcardconnect",
        icon: "linkedin",
      },
      {
        name: "Instagram",
        url: "https://instagram.com/vcardconnect",
        icon: "instagram",
      },
      {
        name: "GitHub",
        url: "https://github.com/vcardconnect",
        icon: "github",
      },
    ],
    quickLinks: [
      { label: "Privacidad", href: "/privacy" },
      { label: "Términos", href: "/terms" },
      { label: "FAQ", href: "/faq" },
      { label: "Blog", href: "/blog" },
    ],
    copyright: `© ${new Date().getFullYear()} vCard Connect. Todos los derechos reservados.`,
  },

  api: {
    // URL de tu backend FastAPI para el formulario de contacto
    contactEndpoint: "https://api.vcardconnect.com/contact-messages",
    // Durante desarrollo, puedes usar: "http://localhost:8000/contact-messages"
  },
};
