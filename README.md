# TECNOLAB XR — Laboratorio interactivo

Aplicación web educativa para explorar conceptos de Tecnología e Informática mediante escenarios 3D y actividades demostrativas.

## Experiencias incluidas
- Hardware del computador.
- Redes informáticas.
- Robótica.
- Programación.
- Ciberseguridad.
- Inteligencia artificial.
- Electricidad y electrónica.
- Realidad aumentada y virtual.
- Sistemas operativos.
- Impresión 3D.
- Almacenamiento y procesamiento.
- Evolución tecnológica.

## Funciones
- Interfaz adaptable a computadores, tabletas y móviles.
- Escenarios 3D interactivos con A-Frame.
- Selección de objetos y panel de información.
- Controles para girar, ampliar, reducir y centrar elementos.
- Herramientas y desafíos educativos en cada laboratorio.
- Reconocimiento de manos mediante MediaPipe (opcional; requiere cámara, internet y HTTPS).
- Comprobación de compatibilidad con WebXR AR.
- Manifest y service worker para capacidades básicas de PWA.

## Ejecutar localmente
Se recomienda Node.js 20 o superior.

```bash
npm install
npm run dev
```

Abre la dirección local indicada por Vite. Para probar la cámara, usa localhost y concede permiso de cámara.

## Publicar en GitHub Pages
El proyecto incluye un workflow en `.github/workflows/deploy.yml`. En GitHub abre **Settings → Pages** y selecciona **GitHub Actions** como fuente de publicación. Cada push a `main` ejecutará la compilación y el despliegue.

La dirección esperada para este repositorio es:
`https://eyleencantillo.github.io/tecnolab-xr/`

## Alcance técnico
Los escenarios, conexiones, circuitos y retos son simulaciones educativas; no representan equipos, redes o circuitos físicos validados. El botón AR comprueba disponibilidad de WebXR, pero no inicia una sesión completa de colocación de objetos en el entorno real. MediaPipe se carga desde CDN y necesita conexión a internet.