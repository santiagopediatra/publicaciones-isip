> Actualización bibliográfica posterior: consultar [AUDITORIA_BIBLIOGRAFICA.md](AUDITORIA_BIBLIOGRAFICA.md). Los recuentos de datos faltantes y pendientes de este documento describen el estado anterior a esa fase.

# Revisión del portal ISIP

Este informe describe el rediseño inicial. La revisión posterior, las correcciones y el estado vigente están en [AUDITORIA_FINAL.md](AUDITORIA_FINAL.md).

Implementación local, sin commit, push ni publicación y sin cambios de configuración GitHub/Netlify.

## Diagnóstico

Aplicación estática sin paquetes, frameworks ni compilación. Rama inicial: main; árbol de trabajo limpio. Había 15 registros en js/app.js y un HTML autónomo con datos, estilos e imágenes incrustados duplicados. Búsqueda y filtros temáticos implementados; faltaban filtros por año/revista y ordenamiento. Las tarjetas abrían ventanas sin gestión completa del foco.

## Cambios

- index.html: identidad institucional, encabezado, publicaciones recientes, catálogo, filtros etiquetados, pie de página y diálogo nativo accesible.
- index_embedded.html: entrada equivalente que consume los mismos recursos locales. Ya no es un documento autónomo; requiere css/, js/ y assets/, igual que index.html. Evita duplicar datos e imágenes en base64.
- css/styles.css: azul marino, turquesa, tipografía de sistema y serif para encabezados, diseño adaptable, indicadores de foco y contraste.
- js/articles.js: 15 registros originales exactos, enriquecimiento separado y dos registros nuevos. Metadatos ausentes: null o no mostrados.
- js/app.js: búsqueda instantánea, filtros combinados, ordenamiento, contador, estado vacío, acceso editorial y PDF, apertura de detalles y restauración del foco.

## Integridad bibliográfica

Los cuatro artículos solicitados están disponibles; anemia y cesárea ya estaban en el catálogo. Total: 17, sin duplicarlos. Se mantuvieron todos los campos originales, incluidos textos y enlaces. No se auditó científicamente el contenido de los resúmenes anteriores.

Verificación editorial:
- Frontiers: https://www.frontiersin.org/journals/global-womens-health/articles/10.3389/fgwh.2026.1920014/full — autores, título, DOI, año y volumen 7.
- Revista Cubana: https://revpediatria.sld.cu/index.php/ped/article/view/8008 — año 2026, volumen 98 y acceso PDF.
- Magazine: https://revistas.utb.edu.ec/index.php/magazine/article/view/4308 — título, autores, año 2026, 11(1), 92–106 y acceso PDF.
- Cesárea: página editorial respondió pero no permitió extraer los metadatos; SciELO agotó el tiempo de consulta. El DOI solicitado 10.24245/gom.v94i4.11032 difiere del visible en la captura aportada (10.24245/gom.v94i1.11002). No se muestra DOI hasta confirmarlo. Se conserva el enlace editorial original.

Los años de los otros 13 artículos no estaban en los registros originales: no se infirieron a partir de títulos o DOI. El orden cronológico coloca primero los años verificados y al final los desconocidos. Las imágenes reutilizadas son ilustrativas y se identifican como tales.

## Verificación ejecutada

- node --check en ambos archivos JavaScript.
- Chromium headless en 1440 × 1100 y 390 × 844: 111 comprobaciones por tamaño, todas satisfactorias.
- Preservación exacta de los 15 registros originales; 17 IDs únicos.
- Búsqueda individual de cada título y filtros combinados de área, revista y año.
- Orden alfabético y posición de artículos sin año; estado vacío y restablecimiento.
- Apertura de todos los detalles, fuentes originales y restauración del foco.
- Teclas Tab y Escape enviadas mediante Chromium: foco dentro del diálogo y cierre con Escape.
- Enlaces externos con noopener/noreferrer; imágenes WebP decodificadas; rutas locales existentes.
- Sin excepciones JavaScript ni fallos de carga de red en las ejecuciones locales.
- Entrada index_embedded.html cargada y 17 publicaciones presentes.
- Capturas de escritorio y móvil en verificaciones/redesign-*.png.
- Sin desbordamiento horizontal en ambos tamaños.

No se hizo una auditoría formal completa WCAG 2.2, ni pruebas con lector de pantalla, Safari, Firefox o dispositivos físicos. No se verificó la disponibilidad externa de todos los enlaces históricos ni se desplegó en Netlify. La compatibilidad estática se mantiene: no requiere build ni dependencias.

Las pruebas anteriores en verificaciones/verificar.cjs comparaban una extracción sin cambios visuales; ese guion ya no corresponde al rediseño. Las pruebas actuales están en verificaciones/redesign.cjs y los resultados en verificaciones/redesign-results.json (carpeta ignorada por Git).

## Revisión local

Desde el directorio del proyecto:

```bash
python3 -m http.server 8000
```

Abrir http://localhost:8000. La segunda entrada está en http://localhost:8000/index_embedded.html. Para repetir las pruebas locales disponibles: `node verificaciones/redesign.cjs` (requiere Chromium y undici presentes en este entorno).
