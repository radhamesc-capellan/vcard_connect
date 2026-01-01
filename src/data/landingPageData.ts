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
    title: "vCard Connect - Tu Tarjeta Digital Premium & PWA",
    description:
      "No es solo una web. Es tu App personal. Carga al instante, funciona offline y se integra nativamente en Apple Wallet y Google Wallet.",
    keywords: [
      "vcard",
      "pwa",
      "apple wallet",
      "google wallet",
      "tarjeta digital",
      "networking",
      "nfc",
      "business card",
    ],
    ogImage: "/og-image.svg", // Imagen para compartir en redes sociales
  },

  navigation: {
    links: [
      { label: "Inicio", href: "#hero" },
      { label: "Experiencia App", href: "#features" },
      { label: "Precios", href: "#pricing" },
      { label: "Contacto", href: "#contact" },
    ],
  },

  hero: {
    title: "No es solo una Tarjeta. Es tu App Personal.",
    subtitle: "Instalable. Rápida. Integrada en tu Wallet.",
    description:
      "Vende tu imagen profesional con una Web App Progresiva (PWA) que tus clientes pueden instalar. Guárdala en Apple Wallet o Google Wallet y comparte con un solo toque.",
    ctaPrimary: {
      text: "Crear mi PWA Gratis",
      href: "#contact",
    },
    ctaSecondary: {
      text: "Ver Demo en Vivo",
      href: "#features",
    },
    image: "/hero-image.svg", // Coloca una imagen hero en /public/
    imageAlt: "vCard Connect corriendo como app nativa en iPhone y Android",
  },

  features: {
    sectionTitle: "Tecnología que Impresiona",
    sectionSubtitle:
      "Hemos traducido capacidades técnicas complejas en una experiencia de usuario fluida y premium.",
    items: [
      {
        id: "feature-pwa",
        title: "Experiencia App-Like (PWA)",
        description:
          "Se siente como una app nativa. Transiciones instantáneas, funciona offline y tus clientes pueden instalarla en su pantalla de inicio sin ir a la App Store.",
        icon: "📱",
      },
      {
        id: "feature-wallet",
        title: "Apple & Google Wallet",
        description:
          "Lo llevas en tu bolsillo digital. Detectamos tu dispositivo y te ofrecemos guardar tu pase .pkpass directamente en tu billetera nativa.",
        icon: "💳",
      },
      {
        id: "feature-design",
        title: "Diseño Inteligente & Dark Mode",
        description:
          "Tu tarjeta se adapta. Detecta automáticamente si el móvil de tu cliente está en modo oscuro y ajusta los colores para una elegancia visual perfecta.",
        icon: "🎨",
      },
      {
        id: "feature-analytics",
        title: "Inteligencia Visual",
        description:
          "Deja de adivinar. Mira gráficos interactivos de tus visitas por Ciudad, País y Tipo de Dispositivo (iPhone vs Android). Mide tu impacto real.",
        icon: "📊",
      },
      {
        id: "feature-nfc",
        title: "Intercambio Sin Fricción",
        description:
          "QR dinámicos de alta resolución y soporte NFC. Toca, comparte y conecta. Sin apps de terceros, sin esperas.",
        icon: "⚡",
      },
      {
        id: "feature-eco",
        title: "Impacto ESG Visible",
        description:
          "Sostenibilidad gamificada. Visualiza cuántos árboles has salvado y comparte tus logros ecológicos con tu red profesional.",
        icon: "🌱",
      },
    ],
  },

  pricing: {
    sectionTitle: "Inversión Inteligente",
    sectionSubtitle:
      "Desde una tarjeta personal gratuita hasta un ecosistema corporativo completo.",
    plans: [
      {
        id: "free",
        name: "Gratis",
        price: "$0",
        period: "para siempre",
        description: "Tu entrada al networking digital moderno.",
        features: [
          "1 PWA Personal",
          "QR dinámico básico",
          "Modo Oscuro Automático",
          "Estadísticas básicas (Vistas totales)",
          "Soporte por email",
        ],
        ctaText: "Comenzar Gratis",
        ctaLink: "#contact",
      },
      {
        id: "pro",
        name: "Profesional",
        price: "$9.99",
        period: "/mes",
        description: "Para quien busca medir y optimizar su impacto.",
        features: [
          "5 PWAs Personalizadas",
          "Integración Apple/Google Wallet",
          "Analíticas Visuales (Mapas de calor, Dispositivos)",
          "Diseños Premium & Personalización Total",
          "Compatible con tarjetas NFC",
          "Prioridad en soporte",
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
        description: "Gestión centralizada para equipos de alto rendimiento.",
        features: [
          "Tarjetas ilimitadas",
          "Dashboard de Equipo y Roles",
          "Branding Corporativo Lock",
          "API y Webhooks para CRM",
          "Reportes de ESG Corporativos",
          "Soporte dedicado 24/7",
          "SLA garantizado",
        ],
        ctaText: "Contactar Ventas",
        ctaLink: "#contact",
      },
    ],
  },

  contact: {
    sectionTitle: "¿Listo Para Modernizarte?",
    sectionSubtitle:
      "Contáctanos y descubre cómo vCard Connect transforma simples contactos en conexiones de alto valor.",
    form: {
      nameLabel: "Nombre Completo",
      namePlaceholder: "Tu nombre",
      emailLabel: "Correo Profesional",
      emailPlaceholder: "tu@empresa.com",
      messageLabel: "Mensaje",
      messagePlaceholder: "Me interesa para mi equipo de ventas...",
      submitButton: "Enviar Mensaje",
      sendingButton: "Enviando...",
      successMessage:
        "¡Mensaje enviado! Un experto en networking digital te contactará pronto.",
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
      "vCard Connect redefine el networking con tecnología PWA, Wallet y Analítica Visual. Conectamos profesionales de forma inteligente, rápida y sostenible.",
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
