# vCard Connect - Landing Page

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

## 🌐 Despliegue en AWS Amplify

### Opción 1: Usando la Consola de AWS Amplify

1. **Conecta tu repositorio:**
   - Ve a [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
   - Haz clic en "New app" → "Host web app"
   - Conecta tu repositorio de GitHub/GitLab/Bitbucket

2. **Configura el build:**
   - AWS Amplify detectará automáticamente Next.js
   - Verifica la configuración de build:
   
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: out
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

3. **Despliega:**
   - Haz clic en "Save and deploy"
   - Amplify construirá y desplegará tu app automáticamente

### Opción 2: Usando Amplify CLI

```bash
# Instalar Amplify CLI
npm install -g @aws-amplify/cli

# Configurar Amplify
amplify configure

# Inicializar proyecto
amplify init

# Publicar
amplify publish
```

## 🔌 Configurar Backend API

El formulario de contacto envía datos a tu backend FastAPI. Configura la URL en:

```typescript
// src/data/landingPageData.ts
api: {
  contactEndpoint: "https://api.vcardconnect.com/contact-messages",
}
```

### Endpoint Esperado

El backend debe tener un endpoint POST que acepte:

```json
{
  "name": "string",
  "email": "string",
  "message": "string",
  "timestamp": "ISO 8601 string"
}
```

## 📱 Responsive Breakpoints

La landing usa los breakpoints estándar de Tailwind:

- **sm:** 640px
- **md:** 768px
- **lg:** 1024px
- **xl:** 1280px
- **2xl:** 1536px

## 🎨 Personalización de Colores

Los colores se definen en `tailwind.config.ts`:

```typescript
colors: {
  primary: { /* azul */ },
  secondary: { /* púrpura */ },
}
```

## 📊 SEO

Los metadatos SEO se configuran en `src/data/landingPageData.ts`:

```typescript
seo: {
  title: "Tu título SEO",
  description: "Tu descripción SEO",
  keywords: ["palabra1", "palabra2"],
  ogImage: "/og-image.jpg",
}
```

Asegúrate de incluir:
- ✅ `favicon.ico` en `/public/`
- ✅ `og-image.jpg` en `/public/` (1200x630px recomendado)
- ✅ `logo.svg` en `/public/`

## 🚨 Notas Importantes

1. **API Route**: El formulario usa un API Route (`/api/contact`) que actúa como proxy al backend FastAPI. Esto evita problemas de CORS.

2. **Imágenes**: Para usar `next/image` con export estático, las imágenes deben estar optimizadas manualmente o usar `unoptimized: true`.

3. **Variables de Entorno**: Si necesitas variables de entorno, créalas en `.env.local`:
   ```
   NEXT_PUBLIC_API_URL=https://api.vcardconnect.com
   ```

4. **Client vs Server Components**: 
   - `Navbar` y `ContactSection` son Client Components (usan `'use client'`)
   - El resto son Server Components por defecto

## 📝 Licencia

Este proyecto es privado y confidencial.

## 👨‍💻 Soporte

Para preguntas o soporte, contacta al equipo de desarrollo.

---

**Desarrollado con ❤️ usando Next.js, TypeScript y Tailwind CSS**
