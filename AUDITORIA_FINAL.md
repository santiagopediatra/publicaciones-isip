> Actualización bibliográfica posterior: consultar [AUDITORIA_BIBLIOGRAFICA.md](AUDITORIA_BIBLIOGRAFICA.md). Los recuentos de datos faltantes y pendientes de este documento describen el estado anterior a esa fase.

# Auditoría final · Producción Científica ISIP

Fecha: 10 de octubre de 2026 (America/Guayaquil). Revisión local en http://localhost:8000.

**Dictamen: técnicamente apto para alojamiento estático; no recomiendo todavía la publicación final como catálogo bibliográficamente validado.** Deben revisarse los títulos traducidos/abreviados y los textos científicos heredados, completar los datos faltantes y confirmar manualmente los accesos bloqueados por las editoriales.

## Resultado de los nueve puntos solicitados

1. **17 publicaciones sin duplicados** por ID, título normalizado, URL editorial y DOI registrado. Las tres publicaciones de la sección reciente son referencias visuales al catálogo; no registros adicionales.
2. Título, autores y revista están presentes en los 17 registros. Se contrastaron páginas editoriales, sus etiquetas de citación y PDF editorial. Los datos siguen incompletos: 13 registros sin año/volumen, 9 sin DOI registrado y solo uno con intervalo de páginas. No todos los artículos necesitan número o páginas: algunos usan publicación continua o identificadores electrónicos. La ausencia de DOI en una página tampoco demuestra que exista uno. Inventario individual debajo.
3. Se consultaron los 17 destinos: 15 devolvieron HTTP 200 y dos devolvieron 403. HTTP 200 no certifica por sí solo que el artículo se haya renderizado: cesárea devuelve una aplicación JavaScript y ciberaprendizaje una página de redirección. Los cuatro accesos PDF visibles están comprobados; en anemia y tutores también se siguió el enlace de descarga y se confirmó cabecera `%PDF` y `application/pdf`.
4. Búsqueda por título, autor, revista, palabras clave, acentos y espacios; filtros combinados; contador, vacío, restablecimiento y los tres ordenamientos: OK. Con los cuatro años reales registrados en 2026, ambos sentidos cronológicos mantienen su empate. Se probaron además años distintos en una copia temporal en memoria, restaurada al terminar; no se alteró ningún archivo bibliográfico.
5. Los 15 archivos WebP distintos que usan las 17 tarjetas respondieron HTTP 200, tienen cabecera WebP válida y se decodificaron en Chromium. Carga diferida comprobada. Las imágenes reutilizadas siguen identificadas como ilustrativas.
6. Capturas revisadas en 1440×1100, 768×1024 y 390×844: encabezado, catálogo, footer y diálogo. Sin desbordamiento horizontal; filtros y tarjetas se adaptan. No se probaron dispositivos físicos, Safari, Firefox ni lector de pantalla.
7. El footer de ambas entradas conserva la descripción institucional y el enlace UCE; no contiene el nombre eliminado. Se verificó que los 15 registros originales conservan sus campos exactamente y que los 17 registros siguen incluyendo el autor Vasco. Ningún autor fue eliminado.
8. La ejecución final no registra excepciones JavaScript, `console.error`, errores de red ni recursos HTTP 4xx/5xx locales. Aplicación HTML/CSS/JS estática, sin compilación ni dependencias de servidor: compatible con Netlify publicando la raíz del proyecto y sus recursos. No se accedió a la configuración remota de Netlify ni se ejecutó un despliegue; no se certifica esa configuración.
9. Pruebas ejecutadas: **489 comprobaciones finales (163 por tamaño)** más Enter, espacio, Tab, Shift+Tab, Escape y restauración del foco; todas satisfactorias. El guion del rediseño también pasó **222 comprobaciones (111 por tamaño)**. `node --check` en ambos JS y en el nuevo guion, y `git diff --check`: OK.

## Problemas corregidos

- Se unificaron variantes de mayúsculas/acentos del filtro temático: «Educación Médica» y «Educación médica» muestran conjuntamente sus cinco artículos. Los valores bibliográficos originales no se modificaron.
- Se corrigió la combinación de campos bibliográficos: las propiedades derivadas respetan las sustituciones verificadas, incluyendo un DOI explícitamente nulo.
- La navegación con Tab/Shift+Tab permanece dentro del diálogo al cruzar sus límites; se conserva Escape y el retorno al botón de origen.
- Se añadió un favicon SVG local y su referencia en ambos HTML, eliminando el 404 comprobado por consola/red.
- Se resolvió la discrepancia del DOI de cesárea con el **PDF editorial descargado y extraído**: `10.24245/gom.v94id.11002`, volumen 94, artículo e11002. Se sustituyó la nota pendiente incorrecta del enriquecimiento y se añadió acceso PDF, sin cambiar el registro original. [PDF editorial](https://www.scielo.org.mx/pdf/gom/v94/0300-9041-gom-94-e11002.pdf).
- Se añadió el PDF de Frontiers que figura en `citation_pdf_url` de su página y que devolvió HTTP 200 con contenido PDF válido. [Página editorial](https://www.frontiersin.org/journals/global-womens-health/articles/10.3389/fgwh.2026.1920014/full).

El supuesto bucle de dermatitis **no era un enlace roto**: la revista necesita cookies. La consulta con cookies obtuvo HTTP 200; se conservó la URL existente.

## Inventario bibliográfico y enlaces

«Sin registrar» indica ausencia en el catálogo, no ausencia en la revista. Los títulos cortos de esta tabla son etiquetas del informe; no reemplazan los títulos del portal. Se conservaron los datos originales, excepto los enriquecimientos con evidencia descritos arriba.

| Publicación | Año en catálogo | Volumen en catálogo | DOI en catálogo | Comprobación del destino |
|---|---:|---|---|---|
| [Episiotomía](https://doi.org/10.18597/rcog.4216) | Sin registrar | Sin registrar | 10.18597/rcog.4216 | HTTP 200 |
| [Ciberaprendizaje](https://doi.org/10.1016/j.edumed.2023.100840) | Sin registrar | Sin registrar | 10.1016/j.edumed.2023.100840 | HTTP 200; redirección Elsevier |
| [Patrones dietéticos](https://doi.org/10.3390/nu16040475) | Sin registrar | Sin registrar | 10.3390/nu16040475 | HTTP Error 403: Forbidden |
| [Método canguro](https://rgsa.openaccesspublications.org/rgsa/article/view/7165) | Sin registrar | Sin registrar | Sin registrar | HTTP 200 |
| [De tesis a artículos](https://rgsa.openaccesspublications.org/rgsa/article/view/9224) | Sin registrar | Sin registrar | Sin registrar | HTTP 200 |
| [Derechos humanos en la ciencia](https://rgsa.openaccesspublications.org/rgsa/article/view/8300) | Sin registrar | Sin registrar | Sin registrar | HTTP 200 |
| [Proyecto integrador de saberes](https://www.sciencedirect.com/science/article/pii/S1575181319301974) | Sin registrar | Sin registrar | Sin registrar | HTTP Error 403: Forbidden |
| [Prematuros en Ecuador](https://doi.org/10.46721/tejom-vol2issEsp-2022-1-13) | Sin registrar | Sin registrar | 10.46721/tejom-vol2issEsp-2022-1-13 | HTTP 200 |
| [COVID-19 en gestantes y neonatos](http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0120-00112023000100009) | Sin registrar | Sin registrar | Sin registrar | HTTP 200 |
| [Anemia en comunidades indígenas](https://revpediatria.sld.cu/index.php/ped/article/view/8008) | 2026 | 98 | Sin registrar | HTTP 200 |
| [Cesárea en multíparas](https://ginecologiayobstetricia.org.mx/articulo/determinantes-clinicas-obstetricas-y-neonatales-de-la-cesarea-primaria-en-mujeres-multiparas) | 2026 | 94 | 10.24245/gom.v94id.11002 | HTTP 200; aplicación JS, PDF verificado |
| [Lactancia exclusiva](https://pmc.ncbi.nlm.nih.gov/articles/PMC12707856/) | Sin registrar | Sin registrar | Sin registrar | HTTP 200 |
| [Gastrosquisis](https://doi.org/10.32641/andespediatr.v96i4.5517) | Sin registrar | Sin registrar | 10.32641/andespediatr.v96i4.5517 | HTTP 200 |
| [Dermatitis y trastornos neurológicos](https://revistas.usp.br/rmrp/es/article/view/230186) | Sin registrar | Sin registrar | Sin registrar | HTTP 200 con cookies |
| [Anomalías congénitas](https://doi.org/10.15446/revfacmed.v72n4.113715) | Sin registrar | Sin registrar | 10.15446/revfacmed.v72n4.113715 | HTTP 200 |
| [Violencia gestacional](https://www.frontiersin.org/journals/global-womens-health/articles/10.3389/fgwh.2026.1920014/full) | 2026 | 7 | 10.3389/fgwh.2026.1920014 | HTTP 200 |
| [Experiencia de tutores](https://revistas.utb.edu.ec/index.php/magazine/article/view/4308) | 2026 | 11 | Sin registrar | HTTP 200 |

Los nueve DOI sin registrar corresponden a método canguro, tesis, derechos humanos, proyecto integrador, COVID-19, anemia, lactancia, dermatitis y experiencia de tutores. Se localizaron DOI en las fuentes de siete de esas fichas (excluyendo anemia y tutores); siguen pendientes de incorporación editorial controlada. Para anemia y tutores no se observó un DOI propio en la página.

La ficha de tutores registra 11(1), 92–106. Frontiers usa volumen 7 y el identificador 1920014; cesárea volumen 94 y e11002; anemia volumen 98 de publicación continua. No se inventaron números o intervalos de páginas para publicaciones electrónicas.

## Pendientes que afectan la validación científica

- **13 registros sin año**: todos salvo anemia, cesárea, violencia gestacional y tutores. La ordenación cronológica solo es completa entre los cuatro registros fechados. Se encontraron años editoriales para los anteriores; deben incorporarse con sus fuentes, no deducirse de periodos de estudio o del DOI.
- Algunas fichas usan traducciones o títulos abreviados. Las cabeceras editoriales de los tres artículos RGSA están en inglés; lactancia también tiene título original inglés. COVID-19 omite el subtítulo «Un resumen de revisiones sistemáticas». Deben validarse las versiones idiomáticas exactas. No se reemplazaron títulos por traducciones inferidas.
- Nombres abreviados o incompletos respecto de algunas fichas editoriales; por ejemplo, episiotomía omite nombres intermedios en varios autores. Deben revisarse las formas bibliográficas de los autores y la denominación de revistas, incluida Medicina (Ribeirão Preto).
- **Resumen heredado de prematuros:** menciona investigaciones entre 2020 y 2023, mientras la revista fecha el artículo en 2022. Esa atribución necesita corrección científica con el artículo completo; se conservó y se señala, en vez de inventar un periodo sustituto. [Ficha editorial](https://revistafecim.org/index.php/tejom/article/view/99), [PDF](https://revistafecim.org/index.php/tejom/article/download/99/70).
- No se validaron una por una todas las cifras, recomendaciones clínicas y conclusiones de los textos heredados de «Enfoque» e «Importancia». El paso de pruebas técnicas no certifica esos contenidos.
- MDPI y ScienceDirect (PIS) bloquearon la consulta directa con 403. Sus enlaces no se modificaron: esa respuesta puede ser una protección automatizada, no desaparición del artículo. Ciberaprendizaje respondió con una redirección hacia ScienceDirect. Las fichas de Elsevier se localizaron en resultados editoriales indexados: [ciberaprendizaje](https://www.sciencedirect.com/science/article/pii/S1575181323000505), [PIS](https://www.sciencedirect.com/science/article/pii/S1575181319301974). Para Nutrients se contrastó el artículo depositado en [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC10892012/); sigue pendiente confirmar el acceso directo desde un navegador habitual.
- No se realizó una certificación integral WCAG ni una prueba de despliegue Netlify. `index_embedded.html` continúa requiriendo css/, js/ y assets/; no es un HTML autónomo.

## Pruebas reproducibles y archivos

Prueba actual, con localhost:8000 ya iniciado:

```bash
node tests/final-audit.cjs
```

Requiere Chromium y el módulo `undici` disponibles en este entorno. No se instalaron dependencias nuevas.

El guion histórico `verificaciones/verificar.cjs` se ejecutó y falló en «15 publicaciones iniciales». Comparaba la antigua extracción de CSS/JS y exige la estructura anterior: no es una prueba válida del portal de 17 registros. No se ocultó ese fallo; el guion actual está versionable en tests/final-audit.cjs.

Cambios de esta auditoría: js/app.js, js/articles.js, index.html, index_embedded.html, nuevo assets/favicon.svg, tests/final-audit.cjs y este informe. REVISION.md remite a la auditoría final. La carpeta verificaciones/ está ignorada por Git y contiene resultados JSON, respuestas editoriales y capturas `audit-*.png`.

No se ejecutó git commit, git push ni publicación; no se modificó la configuración de GitHub o Netlify.
