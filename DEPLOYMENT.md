# 🚀 Guía de Despliegue - AWS Amplify

Esta guía detalla el proceso completo de despliegue de tu landing page en AWS Amplify.

## 📋 Pre-requisitos

- [ ] Cuenta de AWS creada
- [ ] Repositorio Git (GitHub, GitLab, o Bitbucket) con el código
- [ ] Código probado localmente (`npm run build` sin errores)
- [ ] Variables de entorno identificadas (si las hay)

## 🌐 Método 1: Despliegue desde Git (Recomendado)

### Paso 1: Preparar tu Repositorio

1. **Sube tu código a Git:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: vCard Connect landing page"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/vcard-connect.git
   git push -u origin main
   ```

2. **Verifica que el archivo `amplify.yml` esté en la raíz del proyecto**

### Paso 2: Conectar con AWS Amplify

1. **Accede a AWS Amplify Console:**
   - Ve a: https://console.aws.amazon.com/amplify/
   - Haz clic en "New app" → "Host web app"

2. **Conecta tu repositorio:**
   - Selecciona tu proveedor Git (GitHub/GitLab/Bitbucket)
   - Autoriza el acceso a AWS Amplify
   - Selecciona tu repositorio
   - Selecciona la rama (main o master)

### Paso 3: Configurar Build Settings

AWS detectará automáticamente Next.js, pero verifica la configuración:

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

**Configuraciones importantes:**
- **Framework:** Next.js - SSG
- **Build command:** `npm run build`
- **Output directory:** `out`
- **Node version:** 18 o superior

### Paso 4: Variables de Entorno (Opcional)

Si tienes variables de entorno:

1. En Amplify Console, ve a "Environment variables"
2. Añade tus variables:
   ```
   NEXT_PUBLIC_API_URL=https://api.vcardconnect.com
   ```

**Nota:** Solo variables con prefijo `NEXT_PUBLIC_` serán accesibles en el cliente.

### Paso 5: Desplegar

1. Haz clic en "Save and deploy"
2. Amplify comenzará el proceso:
   - ✅ Provision (30s)
   - ✅ Build (~3-5 min)
   - ✅ Deploy (~1 min)
   - ✅ Verify (~30s)

3. Una vez completado, tendrás una URL como:
   ```
   https://main.d1234567890abc.amplifyapp.com
   ```

### Paso 6: Configurar Dominio Personalizado

1. **En Amplify Console, ve a "Domain management"**

2. **Opción A: Dominio de AWS (Route 53)**
   - Selecciona tu dominio de Route 53
   - Amplify configurará automáticamente SSL

3. **Opción B: Dominio externo**
   - Añade tu dominio (ej: vcardconnect.com)
   - Copia los registros DNS proporcionados
   - Configúralos en tu proveedor de DNS:
     ```
     Tipo: CNAME
     Nombre: www
     Valor: [valor de Amplify]
     
     Tipo: A / ALIAS
     Nombre: @
     Valor: [valor de Amplify]
     ```

4. **Espera la verificación (puede tomar hasta 48h)**

## 🖥️ Método 2: Despliegue Manual

Si no quieres conectar un repositorio Git:

### Paso 1: Generar Build Estático

```bash
# En tu computadora local
npm run build
```

Esto generará la carpeta `out/` con los archivos estáticos.

### Paso 2: Desplegar en Amplify

1. **Ve a AWS Amplify Console**
2. **Selecciona "Deploy without Git"**
3. **Arrastra la carpeta `out/` o súbela**
4. **Amplify desplegará tu sitio**

**Desventajas:**
- ❌ No hay despliegue automático
- ❌ Debes subir manualmente cada actualización

## 🔄 Despliegues Continuos (CI/CD)

Con el método Git, cada vez que hagas push a tu rama:

```bash
git add .
git commit -m "Actualizar textos del hero"
git push
```

Amplify automáticamente:
1. Detectará los cambios
2. Ejecutará el build
3. Desplegará la nueva versión
4. ¡En menos de 5 minutos!

## 🌍 Configuración Avanzada

### Redirecciones y Rewrites

Para manejar rutas, añade en Amplify Console → "Rewrites and redirects":

```
/api/* → https://api.vcardconnect.com/:splat → 200 (Proxy)
/privacy → /privacy.html → 200
/* → /index.html → 200 (SPA)
```

### Headers de Seguridad

En "Custom headers":

```yaml
customHeaders:
  - pattern: '**/*'
    headers:
      - key: 'Strict-Transport-Security'
        value: 'max-age=31536000; includeSubDomains'
      - key: 'X-Frame-Options'
        value: 'DENY'
      - key: 'X-Content-Type-Options'
        value: 'nosniff'
```

### Branch Previews

Para ver cambios antes de producción:

1. Crea una rama de desarrollo:
   ```bash
   git checkout -b dev
   git push -u origin dev
   ```

2. En Amplify, conecta la rama `dev`
3. Tendrás URLs separadas:
   - Producción: `main.amplifyapp.com`
   - Desarrollo: `dev.amplifyapp.com`

## 📊 Monitoreo y Logs

### Ver Logs de Build

1. En Amplify Console, selecciona tu app
2. Ve a la sección "Build history"
3. Haz clic en cualquier build para ver detalles
4. Revisa cada fase:
   - Provision
   - Build
   - Deploy
   - Verify

### Métricas y Analytics

Amplify proporciona:
- ✅ Tráfico y visitantes
- ✅ Tiempo de carga
- ✅ Errores 4xx/5xx
- ✅ Datos de CDN

## 🐛 Solución de Problemas

### Error: "Build failed"

**Verifica:**
1. `npm run build` funciona localmente
2. Node version en Amplify (Settings → Build settings)
3. Variables de entorno configuradas
4. No hay errores de TypeScript

**Logs a revisar:**
```
Build step failed with: Error: Process exited with code 1
```

### Error: "Page not found" (404)

**Solución:**
Añade rewrite en Amplify:
```
Source: /<*>
Target: /index.html
Type: 200 (Rewrite)
```

### Error: Variables de entorno no funcionan

**Verifica:**
- Tienen prefijo `NEXT_PUBLIC_`
- Están en "Environment variables" de Amplify
- Hiciste rebuild después de añadirlas

### Sitio muy lento

**Optimizaciones:**
1. Optimiza imágenes (usa WebP, comprime)
2. Minimiza JavaScript
3. Usa CDN de Amplify (ya incluido)
4. Revisa Core Web Vitals en Google PageSpeed

## 💰 Costos Estimados

AWS Amplify Hosting incluye:
- ✅ 1000 build minutes/mes (Gratis)
- ✅ 15 GB de data transfer/mes (Gratis)
- ✅ SSL certificado (Gratis)

**Después del tier gratuito:**
- Build: $0.01/minuto
- Data transfer: $0.15/GB
- Storage: $0.023/GB-mes

**Estimado mensual para una landing page:**
- Tráfico bajo (5K visitas): ~$0
- Tráfico medio (50K visitas): ~$5-10
- Tráfico alto (500K visitas): ~$50-100

## 🔒 Seguridad

### SSL/TLS

Amplify proporciona:
- ✅ Certificado SSL automático
- ✅ HTTPS por defecto
- ✅ Renovación automática

### Autenticación (Opcional)

Para proteger el sitio durante desarrollo:

1. Ve a "Access control"
2. Activa "Restrict access"
3. Añade usuario/contraseña

### Headers de Seguridad

Ya configurados automáticamente:
- ✅ HSTS
- ✅ X-Frame-Options
- ✅ CSP (Content Security Policy)

## 📱 Testing Post-Deploy

### Checklist de Verificación

- [ ] Sitio carga correctamente
- [ ] Todas las secciones visibles
- [ ] Navegación funciona
- [ ] Formulario de contacto envía datos
- [ ] Imágenes cargan
- [ ] Responsive en mobile
- [ ] SSL activo (candado verde)
- [ ] Google PageSpeed >90
- [ ] Metadatos SEO correctos

### Herramientas de Testing

1. **Google PageSpeed Insights**
   - URL: https://pagespeed.web.dev/
   - Objetivo: >90 en mobile y desktop

2. **GTmetrix**
   - URL: https://gtmetrix.com/
   - Objetivo: Grade A

3. **SSL Labs**
   - URL: https://www.ssllabs.com/ssltest/
   - Objetivo: Grade A+

4. **Mobile-Friendly Test**
   - URL: https://search.google.com/test/mobile-friendly
   - Debe pasar todas las pruebas

## 🔄 Actualizaciones

### Actualización de Contenido

1. Edita `src/data/landingPageData.ts`
2. Commit y push:
   ```bash
   git add src/data/landingPageData.ts
   git commit -m "Actualizar precios"
   git push
   ```
3. Amplify desplegará automáticamente

### Rollback a Versión Anterior

Si algo sale mal:

1. En Amplify Console → "Build history"
2. Encuentra el build anterior funcional
3. Haz clic en "Redeploy this version"
4. Confirma

## 📞 Soporte

### Documentación Oficial

- AWS Amplify Docs: https://docs.amplify.aws/
- Next.js Deployment: https://nextjs.org/docs/deployment
- Amplify Discord: https://discord.gg/amplify

### Contacto AWS Support

- Tier básico: Foros de la comunidad
- Tier Developer: $29/mes
- Tier Business: $100/mes

## ✅ Checklist Final

Antes de marcar como completado:

- [ ] Sitio accesible en URL de producción
- [ ] Dominio personalizado configurado (si aplica)
- [ ] SSL activo
- [ ] Formulario de contacto testeado
- [ ] Analytics configurado (Google Analytics, etc.)
- [ ] Sitemap enviado a Google Search Console
- [ ] Redes sociales actualizadas con nueva URL
- [ ] Equipo notificado del nuevo sitio

---

¡Felicitaciones! Tu landing page está en producción 🎉
