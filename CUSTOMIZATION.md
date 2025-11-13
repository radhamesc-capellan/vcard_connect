# 📝 Guía de Personalización - vCard Connect Landing Page

Esta guía te ayudará a personalizar completamente la landing page de vCard Connect sin necesidad de conocimientos profundos de programación.

## 🎯 Archivo Principal de Contenido

**Todos los cambios de contenido se realizan en:**
```
src/data/landingPageData.ts
```

## ✏️ Cómo Editar Contenido

### 1. Información de la Empresa

```typescript
company: {
  name: "vCard Connect",              // Nombre de tu empresa
  tagline: "Conecta de forma inteligente",  // Eslogan
  description: "La forma moderna...",  // Descripción breve
  logo: "/logo.svg",                   // Ruta del logo (en /public/)
}
```

### 2. SEO y Metadatos

```typescript
seo: {
  title: "vCard Connect - ...",        // Título para Google
  description: "Comparte tu...",       // Descripción para Google
  keywords: ["vcard", "tarjeta"...],   // Palabras clave
  ogImage: "/og-image.svg",           // Imagen para redes sociales
}
```

**Nota:** La imagen OG debe ser 1200x630px para mejor visualización en redes sociales.

### 3. Navegación

```typescript
navigation: {
  links: [
    { label: "Inicio", href: "#hero" },
    { label: "Características", href: "#features" },
    // Añade o elimina enlaces aquí
  ]
}
```

### 4. Sección Hero (Principal)

```typescript
hero: {
  title: "Tu Tarjeta de Presentación Digital",
  subtitle: "Siempre Contigo, Siempre Actualizada",
  description: "Olvídate de las tarjetas...",
  ctaPrimary: {
    text: "Comenzar Gratis",
    href: "#contact",
  },
  ctaSecondary: {
    text: "Ver Características",
    href: "#features",
  },
  image: "/hero-image.svg",
  imageAlt: "Descripción de la imagen",
}
```

### 5. Características

Para añadir una nueva característica:

```typescript
features: {
  items: [
    {
      id: "mi-nueva-feature",           // ID único
      title: "Título de la Feature",
      description: "Descripción...",
      icon: "🎨",                       // Emoji o ícono
    },
    // ... más características
  ]
}
```

**Emojis recomendados:**
- 🎨 Diseño
- 📱 Mobile
- ⚡ Velocidad
- 📊 Análisis
- 🔗 Conexión
- 🌱 Ecológico
- 🔒 Seguridad
- 💡 Ideas

### 6. Precios

Para editar un plan existente:

```typescript
pricing: {
  plans: [
    {
      id: "free",
      name: "Gratis",
      price: "$0",
      period: "para siempre",
      description: "Perfecto para empezar",
      features: [
        "1 Tarjeta digital",
        "Código QR básico",
        // Añade o elimina características
      ],
      highlighted: false,              // true para destacar
      ctaText: "Comenzar Gratis",
      ctaLink: "#contact",
    },
  ]
}
```

**Para añadir un nuevo plan**, copia todo el bloque anterior y modifica los valores.

### 7. Formulario de Contacto

```typescript
contact: {
  sectionTitle: "¿Listo Para Comenzar?",
  sectionSubtitle: "Contáctanos...",
  form: {
    nameLabel: "Nombre Completo",
    namePlaceholder: "Juan Pérez",
    emailLabel: "Correo Electrónico",
    emailPlaceholder: "juan@ejemplo.com",
    messageLabel: "Mensaje",
    messagePlaceholder: "Cuéntanos...",
    submitButton: "Enviar Mensaje",
    sendingButton: "Enviando...",
    successMessage: "¡Mensaje enviado con éxito!",
    errorMessage: "Hubo un error...",
  },
  contactInfo: {
    email: "hola@vcardconnect.com",
    phone: "+1 (555) 123-4567",        // Opcional
    address: "123 Tech Street...",     // Opcional
  }
}
```

### 8. Footer

```typescript
footer: {
  aboutText: "vCard Connect es...",
  socialLinks: [
    {
      name: "Twitter",
      url: "https://twitter.com/vcardconnect",
      icon: "twitter",                 // twitter, linkedin, instagram, github
    },
    // Añade más redes sociales
  ],
  quickLinks: [
    { label: "Privacidad", href: "/privacy" },
    // Añade más enlaces
  ],
  copyright: "© 2025 vCard Connect...",
}
```

### 9. API Backend

```typescript
api: {
  contactEndpoint: "https://api.vcardconnect.com/contact-messages",
  // Durante desarrollo: "http://localhost:8000/contact-messages"
}
```

## 🎨 Personalizar Colores

Edita `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    50: '#f0f9ff',   // Muy claro
    100: '#e0f2fe',
    // ...
    600: '#0284c7',  // Color principal
    700: '#0369a1',  // Más oscuro
    // ...
  },
  secondary: {
    // Similar a primary
  }
}
```

**Herramientas útiles:**
- [Tailwind Color Generator](https://uicolors.app/create)
- [Coolors](https://coolors.co/)

## 🖼️ Añadir Imágenes

1. **Coloca tus imágenes en** `/public/`
2. **Referencia en el código:**
   ```typescript
   image: "/mi-imagen.png"
   ```

**Formatos recomendados:**
- Logo: SVG (escalable)
- Fotos: WebP o PNG
- Íconos: SVG

**Tamaños recomendados:**
- Logo: 200x50px aprox
- Hero image: 800x800px
- OG image: 1200x630px
- Favicon: 32x32px

## 🔤 Cambiar Tipografía

En `src/app/layout.tsx`:

```typescript
import { Inter } from 'next/font/google';
// Cambia 'Inter' por otra fuente de Google Fonts

const miFont = Inter({ subsets: ['latin'] });
```

**Fuentes populares:**
- Inter (moderna, limpia)
- Poppins (geométrica, friendly)
- Roboto (neutral, profesional)
- Montserrat (elegante)

Ver más en: [Google Fonts](https://fonts.google.com/)

## 📱 Añadir Nueva Sección

1. **Crea el componente:**
   ```typescript
   // src/components/sections/MiSeccion.tsx
   export const MiSeccion = () => {
     return (
       <section id="mi-seccion" className="py-20">
         {/* Tu contenido */}
       </section>
     );
   };
   ```

2. **Importa en la página principal:**
   ```typescript
   // src/app/page.tsx
   import { MiSeccion } from '@/components/sections/MiSeccion';
   
   export default function Home() {
     return (
       <main>
         {/* ... otras secciones */}
         <MiSeccion />
       </main>
     );
   }
   ```

3. **Añade al menú de navegación** en `landingPageData.ts`

## 🌐 Traducir a Otro Idioma

Simplemente edita todos los textos en `landingPageData.ts`:

```typescript
hero: {
  title: "Your Digital Business Card",  // Inglés
  subtitle: "Always With You...",
  // ...
}
```

Para múltiples idiomas, considera crear archivos separados:
- `landingPageData.es.ts` (Español)
- `landingPageData.en.ts` (Inglés)

## ⚙️ Variables de Entorno

Para datos sensibles, crea `.env.local`:

```env
NEXT_PUBLIC_API_URL=https://api.vcardconnect.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Uso en el código:
```typescript
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

**Nota:** Variables con `NEXT_PUBLIC_` son accesibles en el navegador.

## 🚀 Probar Cambios

```bash
# 1. Guarda tus cambios en landingPageData.ts
# 2. El servidor se recargará automáticamente
# 3. Revisa http://localhost:3000
```

## 📋 Checklist antes de Publicar

- [ ] Todos los textos actualizados
- [ ] Imágenes optimizadas y en /public/
- [ ] Logo y favicon personalizados
- [ ] URL del API backend configurada
- [ ] Colores corporativos aplicados
- [ ] Enlaces de redes sociales correctos
- [ ] Información de contacto actualizada
- [ ] Metadatos SEO completos
- [ ] Probado en mobile
- [ ] Sin errores de consola

## 🆘 Solución de Problemas

### El servidor no inicia
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Los cambios no se reflejan
- Guarda el archivo
- Recarga el navegador (Ctrl/Cmd + R)
- Limpia caché (Ctrl/Cmd + Shift + R)

### Error de compilación
- Verifica la sintaxis en `landingPageData.ts`
- Asegúrate de cerrar todas las llaves `{}`
- Revisa que todas las comas estén en su lugar

## 📚 Recursos Adicionales

- [Documentación de Next.js](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Emojipedia](https://emojipedia.org/)

## 💡 Consejos de Diseño

1. **Consistencia:** Usa los mismos colores y tipografía en toda la página
2. **Espaciado:** No sobrecargues, el espacio en blanco es tu amigo
3. **Jerarquía:** Los títulos deben ser más grandes que el texto
4. **Contraste:** Asegura legibilidad (texto oscuro sobre fondo claro)
5. **Mobile First:** Siempre prueba en móvil primero

---

¿Tienes dudas? Consulta el README.md o contacta al equipo de desarrollo.
