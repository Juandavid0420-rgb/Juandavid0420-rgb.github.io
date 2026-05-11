# Juan David Sánchez — Portfolio

Portafolio personal construido en HTML, CSS y JavaScript puro. Listo para publicar en GitHub Pages.

## Estructura

```
portfolio/
├── index.html          ← Archivo principal
├── css/
│   └── style.css       ← Diseño y sistema visual completo
├── js/
│   └── main.js         ← Navegación, tema, animaciones
├── assets/             ← Imágenes (foto, capturas de proyectos)
└── README.md
```

## Cómo publicar en GitHub Pages

1. Crea un repositorio en GitHub llamado exactamente: `tu-usuario.github.io`
   (reemplaza `tu-usuario` con tu usuario real de GitHub)

2. Sube todos los archivos de esta carpeta al repositorio:
   ```bash
   git init
   git add .
   git commit -m "Portfolio inicial"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/tu-usuario.github.io.git
   git push -u origin main
   ```

3. Ve a Settings → Pages → Source: Deploy from branch → main → / (root) → Save

4. En 2-3 minutos estará en: `https://tu-usuario.github.io`

## Personalización pendiente (busca estos comentarios en el código)

En `index.html`:

| Qué cambiar | Dónde |
|---|---|
| Foto personal | Reemplaza `<div class="photo-slot">` con `<img src="assets/foto.jpg">` |
| Usuario de GitHub | `href="https://github.com/tu-usuario"` |
| Usuario de Instagram | `href="https://instagram.com/tu.usuario"` |
| Número de WhatsApp | `href="https://wa.me/573001234567"` (formato: 57 + número sin 0) |
| Email | Ya está `contacto@aprobaia.co`, confirma si es correcto |
| Link de Temira | Los `href="#"` en los botones de Temira |
| Repos de GitHub | Los `href="#"` en VeloStats y Motor de Mallas |

## Cómo agregar tu foto

1. Pon tu foto en `assets/foto.jpg` (recomendado: cuadrada, mínimo 400×400px)
2. En `index.html`, reemplaza el bloque `<div class="photo-slot" ...>...</div>` con:
   ```html
   <div class="photo-slot">
     <img src="assets/foto.jpg" alt="Juan David Sánchez">
   </div>
   ```

## Features incluidos

- ✅ Modo oscuro / claro con persistencia en localStorage
- ✅ Navegación de dos páginas (Home / Proyectos)
- ✅ Responsive completo (mobile, tablet, desktop)
- ✅ Animaciones de entrada en cards y hero
- ✅ Menú móvil hamburger
- ✅ WhatsApp con mensaje prellenado
- ✅ Cero dependencias (sin npm, sin build steps)
