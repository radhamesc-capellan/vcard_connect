# vCard Connect - Landing Page

> [!NOTE] > **Demo Live:** [https://vcard.radhames.dev](https://vcard.radhames.dev)

> [!IMPORTANT] > **Test Credentials:**
>
> - **User:** `demo@example.com`
> - **Password:** `Demo123!`

Landing page moderna, responsiva y optimizada para SEO desarrollada con Next.js, TypeScript y Tailwind CSS.

## 🚀 Características

- ✅ **Next.js 15** con App Router
- ✅ **TypeScript** para seguridad de tipos
- ✅ **Tailwind CSS** para estilos modernos
- ✅ **SSG (Static Site Generation)** para rendimiento óptimo
- ✅ **Responsive Design** (Mobile-First)
- ✅ **SEO Optimizado** con metadatos completos
- ✅ **Formulario de Contacto** con validación
- ✅ **Contenido Centralizado** en archivo editable
- ✅ **Animaciones Sutiles** para mejor UX
- ✅ **Preparado para AWS Amplify**

## 📁 Estructura del Proyecto

```
vcard_connect_project/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts          # API Route para formulario
│   │   ├── layout.tsx                # Layout principal con metadata SEO
│   │   ├── page.tsx                  # Página principal
│   │   └── globals.css               # Estilos globales
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.tsx            # Barra de navegación
│   │   │   └── Footer.tsx            # Pie de página
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx       # Sección hero
│   │   │   ├── FeaturesSection.tsx   # Sección de características
│   │   │   ├── PricingSection.tsx    # Sección de precios
│   │   │   └── ContactSection.tsx    # Sección de contacto
│   │   └── ui/
│   │       └── Button.tsx            # Componente de botón reutilizable
│   └── data/
│       └── landingPageData.ts        # 📝 ARCHIVO DE CONTENIDO EDITABLE
├── public/                           # Archivos estáticos (imágenes, favicon, etc.)
├── tailwind.config.ts                # Configuración de Tailwind
├── tsconfig.json                     # Configuración de TypeScript
├── next.config.mjs                   # Configuración de Next.js
└── package.json                      # Dependencias del proyecto
```

## 🏗️ Arquitectura

```mermaid
graph TD
    User([User]) -->|HTTPS| CF[CloudFront / CDN]
    CF -->|Serve Static| S3[S3 Bucket (Frontend)]
    User -->|API Calls| APIG[API Gateway]
    APIG -->|Process| Lambda[AWS Lambda]
    Lambda -->|Read/Write| DB[(DynamoDB)]
    Lambda -->|Store Assets| S3Assets[S3 (Images)]
    Lambda -->|Send Email| SES[AWS SES]
```

## 🎨 Editar Contenido

**Todo el contenido de la landing page se gestiona desde un único archivo:**

📝 **`src/data/landingPageData.ts`**

Este archivo contiene:

- Textos de todas las secciones
- Información de la empresa
- Metadatos SEO
- Enlaces de navegación
- Características y beneficios
- Planes de precios
- Textos del formulario
- Enlaces sociales
- URL del backend API

### Ejemplo de edición:

```typescript
// Editar el título del hero
hero: {
  title: "Tu Nuevo Título Aquí",
  subtitle: "Tu Subtítulo",
  // ... más campos
}

// Añadir una nueva característica
features: {
  items: [
    {
      id: "nueva-feature",
      title: "Nueva Característica",
      description: "Descripción de la característica",
      icon: "🎉",
    },
    // ... más características
  ]
}
```

## 🛠️ Instalación y Desarrollo

### Requisitos Previos

- Node.js 18+
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install
# o
yarn install
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev
# o
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build para Producción

```bash
# Generar build estático
npm run build
# o
yarn build
```

Los archivos estáticos se generarán en la carpeta `out/`.

### Preview del Build

```bash
# Iniciar servidor de producción
npm run start
# o
yarn start
```

## 📱 Responsive Breakpoints

La landing usa los breakpoints estándar de Tailwind:

- **sm:** 640px
- **md:** 768px
- **lg:** 1024px
- **xl:** 1280px
- **2xl:** 1536px

## 📝 Licencia

Este proyecto es privado y confidencial.

## 👨‍💻 Soporte

Para preguntas o soporte, contacta al equipo de desarrollo.

---

**Desarrollado con ❤️ usando Next.js, TypeScript y Tailwind CSS**
