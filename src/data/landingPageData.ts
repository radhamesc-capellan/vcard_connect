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
    title: "vCard Connect - Tarjetas de Presentación Digitales Inteligentes",
    description:
      "Comparte tu información de contacto de forma moderna y profesional con vCard Connect. Crea tarjetas digitales personalizadas, QR codes y más.",
    keywords: [
      "vcard",
      "tarjeta digital",
      "tarjeta de presentación",
      "contacto digital",
      "networking",
      "QR code",
      "business card",
    ],
    ogImage: "/og-image.svg", // Imagen para compartir en redes sociales
  },

  navigation: {
    links: [
      { label: "Inicio", href: "#hero" },
      { label: "Características", href: "#features" },
      { label: "Precios", href: "#pricing" },
      { label: "Contacto", href: "#contact" },
    ],
  },

  hero: {
    title: "Tu Tarjeta de Presentación Digital",
    subtitle: "Siempre Contigo, Siempre Actualizada",
    description:
      "Olvídate de las tarjetas de papel. Con vCard Connect, comparte tu información de contacto de forma instantánea mediante códigos QR, links personalizados o NFC.",
    ctaPrimary: {
      text: "Comenzar Gratis",
      href: "#contact",
    },
    ctaSecondary: {
      text: "Ver Características",
      href: "#features",
    },
    image: "/hero-image.svg", // Coloca una imagen hero en /public/
    imageAlt: "Persona usando vCard Connect en su smartphone",
  },

  features: {
    sectionTitle: "¿Por Qué Elegir vCard Connect?",
    sectionSubtitle:
      "Descubre las características que hacen de vCard Connect la mejor opción para tu networking profesional",
    items: [
      {
        id: "feature-1",
        title: "Tarjeta Digital Personalizable",
        description:
          "Diseña tu tarjeta con tu estilo único. Añade tu foto, logo, colores corporativos y toda tu información de contacto.",
        icon: "🎨",
      },
      {
        id: "feature-2",
        title: "Código QR Personalizado",
        description:
          "Genera un código QR único para compartir tu tarjeta al instante. Perfecto para eventos, reuniones y networking.",
        icon: "📱",
      },
      {
        id: "feature-3",
        title: "Actualizaciones en Tiempo Real",
        description:
          "¿Cambiaste de número o email? Actualiza tu información y todos tus contactos verán los cambios automáticamente.",
        icon: "⚡",
      },
      {
        id: "feature-4",
        title: "Análisis y Estadísticas",
        description:
          "Conoce cuántas personas han visto tu tarjeta, guardado tu contacto y más. Toma decisiones basadas en datos.",
        icon: "📊",
      },
      {
        id: "feature-5",
        title: "Compatible con NFC",
        description:
          "Comparte tu tarjeta con solo acercar tu teléfono. Tecnología NFC para una experiencia sin fricciones.",
        icon: "🔗",
      },
      {
        id: "feature-6",
        title: "100% Ecológico",
        description:
          "Reduce tu huella de carbono. Sin papel, sin desperdicio. Networking sostenible y responsable con el planeta.",
        icon: "🌱",
      },
    ],
  },

  pricing: {
    sectionTitle: "Planes Diseñados Para Ti",
    sectionSubtitle:
      "Elige el plan que mejor se adapte a tus necesidades. Sin compromisos, cancela cuando quieras.",
    plans: [
      {
        id: "free",
        name: "Gratis",
        price: "$0",
        period: "para siempre",
        description: "Perfecto para empezar y probar vCard Connect",
        features: [
          "1 Tarjeta digital",
          "Código QR básico",
          "Actualizaciones ilimitadas",
          "Estadísticas básicas",
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
        description: "Ideal para profesionales y emprendedores",
        features: [
          "5 Tarjetas digitales",
          "Códigos QR personalizados",
          "Diseños premium",
          "Análisis avanzados",
          "Compatible con NFC",
          "Integración con CRM",
          "Soporte prioritario",
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
        description: "Para equipos y empresas en crecimiento",
        features: [
          "Tarjetas ilimitadas",
          "Gestión de equipo",
          "Branding corporativo",
          "API y webhooks",
          "Análisis empresariales",
          "Soporte dedicado 24/7",
          "Onboarding personalizado",
          "SLA garantizado",
        ],
        ctaText: "Contactar Ventas",
        ctaLink: "#contact",
      },
    ],
  },

  contact: {
    sectionTitle: "¿Listo Para Comenzar?",
    sectionSubtitle:
      "Contáctanos y descubre cómo vCard Connect puede transformar tu forma de hacer networking",
    form: {
      nameLabel: "Nombre Completo",
      namePlaceholder: "Jhon Doe",
      emailLabel: "Correo Electrónico",
      emailPlaceholder: "jhon@ejemplo.com",
      messageLabel: "Mensaje",
      messagePlaceholder: "Cuéntanos cómo podemos ayudarte...",
      submitButton: "Enviar Mensaje",
      sendingButton: "Enviando...",
      successMessage:
        "¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.",
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
      "vCard Connect es la plataforma líder en tarjetas de presentación digitales. Conectamos profesionales de todo el mundo de forma moderna, eficiente y sostenible.",
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
