# MotoRiders

Sitio web de catálogo de motocicletas desarrollado con React, Vite y Bootstrap.

## Tecnologías
- React
- Vite
- React Router
- Bootstrap 5

## Ejecutar localmente
Requiere Node.js 22.12 o superior y npm.

```bash
npm install
npm run dev
```

## Compilar

```bash
npm run build
npm run preview
```

La compilación se genera en `dist/`.

## Publicación en GitHub Pages
Este repositorio está configurado para publicarse en:

`https://joseismael25.github.io/tll_react/`

El archivo `vite.config.js` define `base: '/tll_react/'`. El workflow `.github/workflows/deploy.yml` instala dependencias, ejecuta `npm run build` y publica automáticamente `dist/` cada vez que se suben cambios a la rama `main`.

En GitHub, abrir **Settings → Pages** y seleccionar **GitHub Actions** como Source. No se debe subir `node_modules/`; tampoco es necesario subir `dist/`, porque GitHub Actions la genera durante el despliegue.

## Estructura principal

```text
.github/workflows/deploy.yml  # Despliegue automático
public/                       # Recursos estáticos
src/                          # Código React
  features/
    auth/                      # Vistas de autenticación
    landing/                   # Página principal y componentes
  App.jsx                      # Rutas de la aplicación
  main.jsx                     # Punto de entrada React
index.html                     # Documento HTML principal
vite.config.js                 # Configuración de Vite
package.json                   # Dependencias y comandos
```
