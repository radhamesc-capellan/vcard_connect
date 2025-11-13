# 📌 Referencia Rápida - vCard Connect

## 🎯 TL;DR (Demasiado Largo; No Lo Leí)

```bash
# 1. Instalar dependencias (ya hecho)
npm install

# 2. Editar contenido
nano src/data/landingPageData.ts

# 3. Probar localmente
npm run dev
# Abre http://localhost:3000

# 4. Build para producción
npm run build

# 5. Deploy en Amplify
# Conecta tu repo Git en console.aws.amazon.com/amplify
```

## 📝 Edición de Contenido

**Archivo único para todo**: `src/data/landingPageData.ts`

```typescript
// Cambiar título
hero: { title: "Tu Nuevo Título" }

// Añadir feature
features: {
  items: [
    { id: "new", title: "Título", description: "Desc", icon: "🎉" }
  ]
}

// Cambiar precio
pricing: {
  plans: [
    { name: "Plan", price: "$99", ... }
  ]
}
```

## 🎨 Cambios de Diseño Comunes

### Colores

```typescript
// tailwind.config.ts
primary: { 600: '#TU_COLOR' }
```

### Tipografía

```typescript
// src/app/layout.tsx
import { Poppins } from "next/font/google";
const font = Poppins({ weight: ["400", "700"] });
```

### Logo

```bash
# Reemplaza
/public/logo.svg
```

## 🚀 Comandos Esenciales

| Comando         | Descripción                                 |
| --------------- | ------------------------------------------- |
| `npm run dev`   | Servidor desarrollo (http://localhost:3000) |
| `npm run build` | Build producción (genera /out/)             |
| `npm run lint`  | Verificar código                            |

## 📁 Archivos Clave

| Archivo                       | Propósito               |
| ----------------------------- | ----------------------- |
| `src/data/landingPageData.ts` | **TODO EL CONTENIDO**   |
| `src/app/page.tsx`            | Estructura de la página |
| `tailwind.config.ts`          | Colores y estilos       |
| `next.config.mjs`             | Configuración Next.js   |
| `amplify.yml`                 | Deploy AWS Amplify      |

## 🔧 Tareas Comunes

### Cambiar Email de Contacto

```typescript
// src/data/landingPageData.ts
contact: {
  contactInfo: {
    email: "nuevo@email.com";
  }
}
```

### Añadir Red Social

```typescript
// src/data/landingPageData.ts
footer: {
  socialLinks: [{ name: "Facebook", url: "https://...", icon: "facebook" }];
}
```

### Cambiar API Backend

```typescript
// src/data/landingPageData.ts
api: {
  contactEndpoint: "https://tu-api.com/contact";
}
```

## 🐛 Solución Rápida de Problemas

| Problema            | Solución                              |
| ------------------- | ------------------------------------- |
| Build falla         | `rm -rf .next && npm run build`       |
| Cambios no aparecen | Ctrl+R en navegador                   |
| Error TypeScript    | Revisa sintaxis en landingPageData.ts |
| Port 3000 ocupado   | `npx kill-port 3000`                  |

## 📱 Testing Checklist

- [ ] Desktop (1920px)
- [ ] Laptop (1366px)
- [ ] Tablet (768px)
- [ ] Mobile (375px)
- [ ] Formulario funciona
- [ ] Navegación funciona
- [ ] Sin errores en consola

## 🌐 Deploy AWS Amplify

1. Push código a Git
2. console.aws.amazon.com/amplify
3. New app → Host web app
4. Conecta repo
5. Deploy automático

## 📚 Más Info

- Personalización completa: `CUSTOMIZATION.md`
- Ejemplos: `EXAMPLES.md`
- Deploy: `DEPLOYMENT.md`
- Resumen completo: `PROJECT_SUMMARY.md`

## 💡 Tips Rápidos

- ✅ Edita solo `landingPageData.ts` para contenido
- ✅ Usa `npm run dev` para ver cambios en tiempo real
- ✅ Haz `git commit` frecuentemente
- ✅ Prueba en mobile antes de deploy
- ✅ Optimiza imágenes antes de subirlas

## 🎯 Siguiente Paso

**Empieza aquí:**

```bash
code src/data/landingPageData.ts
```

Busca `// EDITA AQUÍ` y comienza a personalizar.

---

**¿Necesitas ayuda?** Consulta los archivos de documentación completa.
