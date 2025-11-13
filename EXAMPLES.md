# 🎯 Ejemplos de Configuración

Este archivo contiene ejemplos de diferentes configuraciones para casos de uso comunes.

## Ejemplo 1: Startup Tecnológica

```typescript
export const landingPageData: LandingPageData = {
  company: {
    name: "TechFlow",
    tagline: "Innovación sin límites",
    description: "Transformamos ideas en productos digitales excepcionales",
    logo: "/logo.svg",
  },

  seo: {
    title: "TechFlow - Desarrollo de Software e Innovación Digital",
    description: "Creamos soluciones tecnológicas innovadoras para impulsar tu negocio al siguiente nivel.",
    keywords: ["desarrollo software", "apps móviles", "innovación", "tecnología"],
    ogImage: "/og-image.svg",
  },

  hero: {
    title: "Construimos el Futuro Digital",
    subtitle: "De la Idea al Producto en Tiempo Record",
    description: "Somos un equipo de desarrolladores apasionados que convierten visiones en realidad digital.",
    ctaPrimary: { text: "Empezar Proyecto", href: "#contact" },
    ctaSecondary: { text: "Ver Portfolio", href: "#features" },
    image: "/hero-tech.svg",
    imageAlt: "Equipo trabajando en proyectos innovadores",
  },

  features: {
    sectionTitle: "Nuestra Expertise",
    sectionSubtitle: "Dominamos las tecnologías más avanzadas del mercado",
    items: [
      {
        id: "web-dev",
        title: "Desarrollo Web",
        description: "Apps web modernas con React, Next.js y tecnologías de vanguardia",
        icon: "💻",
      },
      {
        id: "mobile-dev",
        title: "Apps Móviles",
        description: "Aplicaciones nativas e híbridas para iOS y Android",
        icon: "📱",
      },
      {
        id: "cloud",
        title: "Cloud & DevOps",
        description: "Infraestructura escalable en AWS, Azure y Google Cloud",
        icon: "☁️",
      },
    ],
  },

  pricing: {
    sectionTitle: "Inversión en tu Proyecto",
    sectionSubtitle: "Planes flexibles adaptados a tu presupuesto",
    plans: [
      {
        id: "mvp",
        name: "MVP",
        price: "$5,000",
        period: "proyecto",
        description: "Ideal para validar tu idea de negocio",
        features: [
          "Prototipo funcional",
          "Diseño UI/UX básico",
          "Deployment en cloud",
          "2 semanas de desarrollo",
          "1 mes de soporte",
        ],
        ctaText: "Solicitar Cotización",
        ctaLink: "#contact",
      },
    ],
  },
};
```

## Ejemplo 2: Agencia de Marketing

```typescript
export const landingPageData: LandingPageData = {
  company: {
    name: "Growth Marketing Pro",
    tagline: "Hacemos crecer tu marca",
    description: "Agencia de marketing digital enfocada en resultados",
    logo: "/logo.svg",
  },

  hero: {
    title: "Multiplica tus Ventas Online",
    subtitle: "Estrategias de Marketing Basadas en Datos",
    description: "Ayudamos a empresas a alcanzar sus objetivos de crecimiento mediante campañas inteligentes y creatividad sin límites.",
    ctaPrimary: { text: "Auditoría Gratis", href: "#contact" },
    ctaSecondary: { text: "Casos de Éxito", href: "#features" },
    image: "/hero-marketing.svg",
    imageAlt: "Gráfico de crecimiento",
  },

  features: {
    sectionTitle: "Servicios que Generan ROI",
    sectionSubtitle: "Cada estrategia está diseñada para maximizar tu retorno de inversión",
    items: [
      {
        id: "seo",
        title: "SEO & SEM",
        description: "Posicionamiento orgánico y campañas de Google Ads optimizadas",
        icon: "🎯",
      },
      {
        id: "social",
        title: "Redes Sociales",
        description: "Gestión de comunidad y publicidad en todas las plataformas",
        icon: "📱",
      },
      {
        id: "content",
        title: "Marketing de Contenidos",
        description: "Creamos contenido que atrae, convierte y fideliza",
        icon: "✍️",
      },
      {
        id: "analytics",
        title: "Analytics & Reporting",
        description: "Medimos todo para optimizar constantemente tus campañas",
        icon: "📊",
      },
    ],
  },
};
```

## Ejemplo 3: Consultoría Profesional

```typescript
export const landingPageData: LandingPageData = {
  company: {
    name: "Business Advisors",
    tagline: "Estrategia empresarial de alto impacto",
    description: "Consultoría estratégica para empresas que quieren crecer",
    logo: "/logo.svg",
  },

  hero: {
    title: "Transformamos Empresas",
    subtitle: "Consultoría Estratégica con Resultados Medibles",
    description: "Más de 15 años ayudando a empresas a optimizar procesos, aumentar rentabilidad y alcanzar sus objetivos de negocio.",
    ctaPrimary: { text: "Agendar Consulta", href: "#contact" },
    ctaSecondary: { text: "Conocer Metodología", href: "#features" },
    image: "/hero-consulting.svg",
    imageAlt: "Consultor trabajando con cliente",
  },

  features: {
    sectionTitle: "Áreas de Especialización",
    sectionSubtitle: "Experiencia comprobada en múltiples industrias",
    items: [
      {
        id: "strategy",
        title: "Estrategia Corporativa",
        description: "Definimos la dirección estratégica de tu empresa para el crecimiento sostenible",
        icon: "🎯",
      },
      {
        id: "operations",
        title: "Optimización de Operaciones",
        description: "Mejoramos procesos para aumentar eficiencia y reducir costos",
        icon: "⚙️",
      },
      {
        id: "finance",
        title: "Gestión Financiera",
        description: "Planificación financiera y análisis para maximizar rentabilidad",
        icon: "💰",
      },
      {
        id: "hr",
        title: "Talento Humano",
        description: "Desarrollo organizacional y gestión del cambio",
        icon: "👥",
      },
    ],
  },

  pricing: {
    sectionTitle: "Modelos de Colaboración",
    sectionSubtitle: "Trabajamos contigo de la forma que mejor se adapte a tus necesidades",
    plans: [
      {
        id: "project",
        name: "Por Proyecto",
        price: "Desde $3,000",
        period: "por proyecto",
        description: "Para necesidades específicas y bien definidas",
        features: [
          "Diagnóstico inicial",
          "Plan de acción detallado",
          "Implementación guiada",
          "Seguimiento de resultados",
          "Informe final",
        ],
        ctaText: "Solicitar Propuesta",
        ctaLink: "#contact",
      },
      {
        id: "retainer",
        name: "Retainer Mensual",
        price: "$5,000",
        period: "/mes",
        description: "Acompañamiento continuo para tu empresa",
        features: [
          "8 horas de consultoría/mes",
          "Acceso prioritario",
          "Revisiones estratégicas",
          "Soporte por email",
          "Reportes mensuales",
        ],
        highlighted: true,
        ctaText: "Comenzar Colaboración",
        ctaLink: "#contact",
      },
    ],
  },
};
```

## Ejemplo 4: Tienda Online / E-commerce

```typescript
export const landingPageData: LandingPageData = {
  company: {
    name: "StyleHub",
    tagline: "Moda que define tu estilo",
    description: "La mejor selección de moda urbana",
    logo: "/logo.svg",
  },

  hero: {
    title: "Descubre tu Estilo Único",
    subtitle: "Las Últimas Tendencias al Mejor Precio",
    description: "Ropa de calidad, diseños exclusivos y envíos gratis en compras superiores a $50. Encuentra tu look perfecto.",
    ctaPrimary: { text: "Ver Colección", href: "#features" },
    ctaSecondary: { text: "Ofertas del Mes", href: "#pricing" },
    image: "/hero-fashion.svg",
    imageAlt: "Modelo usando ropa de StyleHub",
  },

  features: {
    sectionTitle: "¿Por Qué Comprar con Nosotros?",
    sectionSubtitle: "Tu satisfacción es nuestra prioridad",
    items: [
      {
        id: "quality",
        title: "Calidad Premium",
        description: "Seleccionamos cuidadosamente cada prenda para garantizar la mejor calidad",
        icon: "⭐",
      },
      {
        id: "shipping",
        title: "Envío Gratis",
        description: "En compras mayores a $50. Recibe tu pedido en 2-3 días hábiles",
        icon: "🚚",
      },
      {
        id: "returns",
        title: "Devoluciones Fáciles",
        description: "30 días para devolver sin preguntas. Tu satisfacción garantizada",
        icon: "🔄",
      },
      {
        id: "support",
        title: "Atención 24/7",
        description: "Nuestro equipo está disponible para ayudarte cuando lo necesites",
        icon: "💬",
      },
    ],
  },

  contact: {
    sectionTitle: "¿Necesitas Ayuda?",
    sectionSubtitle: "Contáctanos y te responderemos en menos de 24 horas",
    form: {
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre",
      emailLabel: "Email",
      emailPlaceholder: "tu@email.com",
      messageLabel: "¿En qué podemos ayudarte?",
      messagePlaceholder: "Cuéntanos tu consulta...",
      submitButton: "Enviar",
      sendingButton: "Enviando...",
      successMessage: "¡Gracias por contactarnos! Te responderemos pronto.",
      errorMessage: "Error al enviar. Por favor intenta de nuevo.",
    },
    contactInfo: {
      email: "hola@stylehub.com",
      phone: "+1 (555) FASHION",
      address: "123 Fashion Ave, NYC 10001",
    },
  },
};
```

## Ejemplo 5: SaaS B2B

```typescript
export const landingPageData: LandingPageData = {
  company: {
    name: "ProjectFlow",
    tagline: "Gestión de proyectos simplificada",
    description: "La herramienta de gestión que tu equipo amará usar",
    logo: "/logo.svg",
  },

  hero: {
    title: "Gestión de Proyectos sin Complicaciones",
    subtitle: "Todo tu Equipo en Sincronía, Todo el Tiempo",
    description: "Olvídate de emails interminables y reuniones improductivas. ProjectFlow centraliza la comunicación, tareas y progreso en un solo lugar.",
    ctaPrimary: { text: "Prueba Gratis 14 Días", href: "#contact" },
    ctaSecondary: { text: "Ver Demo", href: "#features" },
    image: "/hero-saas.svg",
    imageAlt: "Dashboard de ProjectFlow",
  },

  features: {
    sectionTitle: "Todo lo que Necesitas en una Plataforma",
    sectionSubtitle: "Funcionalidades diseñadas para equipos modernos",
    items: [
      {
        id: "tasks",
        title: "Gestión de Tareas",
        description: "Crea, asigna y da seguimiento a tareas con facilidad. Tableros Kanban incluidos",
        icon: "✅",
      },
      {
        id: "time",
        title: "Time Tracking",
        description: "Registra tiempo dedicado a cada tarea automáticamente",
        icon: "⏱️",
      },
      {
        id: "collab",
        title: "Colaboración en Tiempo Real",
        description: "Comentarios, menciones y notificaciones instantáneas",
        icon: "💬",
      },
      {
        id: "reports",
        title: "Reportes Avanzados",
        description: "Visualiza el progreso de proyectos con dashboards personalizables",
        icon: "📊",
      },
      {
        id: "integrations",
        title: "Integraciones",
        description: "Conecta con Slack, Google Drive, GitHub y 50+ herramientas",
        icon: "🔗",
      },
      {
        id: "security",
        title: "Seguridad Enterprise",
        description: "Cifrado de datos, 2FA y cumplimiento SOC 2",
        icon: "🔒",
      },
    ],
  },

  pricing: {
    sectionTitle: "Precios Transparentes y Escalables",
    sectionSubtitle: "Paga solo por lo que necesitas, cancela cuando quieras",
    plans: [
      {
        id: "starter",
        name: "Starter",
        price: "$12",
        period: "/usuario/mes",
        description: "Para equipos pequeños que están comenzando",
        features: [
          "Hasta 10 usuarios",
          "Proyectos ilimitados",
          "5GB de almacenamiento",
          "Soporte por email",
          "Integraciones básicas",
        ],
        ctaText: "Comenzar Gratis",
        ctaLink: "#contact",
      },
      {
        id: "pro",
        name: "Professional",
        price: "$24",
        period: "/usuario/mes",
        description: "Para equipos en crecimiento que necesitan más",
        features: [
          "Usuarios ilimitados",
          "Proyectos ilimitados",
          "100GB de almacenamiento",
          "Soporte prioritario",
          "Todas las integraciones",
          "Reportes avanzados",
          "Campos personalizados",
        ],
        highlighted: true,
        ctaText: "Probar 14 Días Gratis",
        ctaLink: "#contact",
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: "Personalizado",
        period: "",
        description: "Para organizaciones con necesidades específicas",
        features: [
          "Todo de Professional",
          "Almacenamiento ilimitado",
          "SLA garantizado",
          "Account manager dedicado",
          "Onboarding personalizado",
          "Seguridad avanzada",
          "SSO / SAML",
          "Contratos anuales",
        ],
        ctaText: "Contactar Ventas",
        ctaLink: "#contact",
      },
    ],
  },
};
```

## 🎨 Tips para Personalizar

1. **Mantén la Coherencia**: Usa el mismo tono de voz en todos los textos
2. **Sé Específico**: En lugar de "buenos resultados", di "aumenta ventas en 30%"
3. **Usa Números**: Los datos concretos generan más confianza
4. **Beneficios > Características**: Enfócate en cómo ayudas al cliente
5. **CTA Claros**: "Comenzar Gratis" es mejor que solo "Comenzar"

## 📋 Checklist de Personalización

- [ ] Nombre de empresa actualizado
- [ ] Tagline refleja tu propuesta de valor
- [ ] Título hero es claro y atractivo
- [ ] CTAs orientados a acción
- [ ] Features enfocadas en beneficios
- [ ] Precios actualizados
- [ ] Información de contacto real
- [ ] Enlaces sociales correctos
- [ ] Tono de voz consistente
- [ ] Sin errores ortográficos

---

Estos ejemplos son un punto de partida. ¡Siéntete libre de mezclar y adaptar!
