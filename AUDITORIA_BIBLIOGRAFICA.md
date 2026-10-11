# Auditoría bibliográfica · Producción Científica ISIP

Fecha: 10 de octubre de 2026. Portal comprobado en http://localhost:8000. Referencia inicial: [AUDITORIA_FINAL.md](AUDITORIA_FINAL.md).

## Dictamen

**Apto como catálogo bibliográfico con salvedades documentadas; la validación no es incondicional.** Existen 17 publicaciones sin duplicados, todas con año sustentado; 15 tienen DOI verificado. No se localizaron DOI en las fuentes de anemia y tutores: permanecen vacíos, sin afirmar que esos artículos carezcan de DOI. La discordancia editorial de prematuros y dos restricciones de acceso siguen pendientes. Para presentar el portal como íntegramente validado científicamente aún hace falta revisar todas las síntesis narrativas heredadas, fuera del contraste bibliográfico de esta fase.

## Método y alcance

Se revisaron individualmente título, firma y orden de autores, revista, año, DOI y destino editorial. Se usaron páginas originales, etiquetas de citación, secciones «Cómo citar» y PDF editoriales. La versión editorial depositada en PMC permitió contrastar Nutrients cuando MDPI bloqueó las solicitudes. Gastrosquisis se contrastó con la captura HTML editorial obtenida durante la auditoría anterior de esta misma sesión; el nuevo acceso devolvió 403. Un código HTTP 200 por sí solo no demuestra equivalencia bibliográfica.

Los campos efectivos del catálogo se corrigen en la capa `bibliography` de `js/articles.js`; el conjunto histórico se conserva para trazabilidad. Se mantuvieron títulos, firmas, DOI y enlaces ya correctos. Las variantes españolas de RGSA y lactancia están respaldadas por versiones editoriales, por lo que no se sustituyeron por traducciones nuevas. No se reconstruyeron autores, resultados ni identificadores.

El registro [bibliografia/evidencias.json](bibliografia/evidencias.json) contiene por ficha los valores finales, cambios antes/después, fuentes por campo, metadatos originales, respuestas HTTP y huellas SHA-256. Las capturas y descargas locales están en `verificaciones/bibliografia/`, directorio excluido de Git.

## Tabla individual

En todas las filas se contrastaron título, autores, revista, año, DOI disponible y enlace. «Verificado» se refiere a estos campos; no certifica cada afirmación clínica del texto de divulgación.

| Artículo | Problema | Evidencia | Corrección | Estado final |
| --- | --- | --- | --- | --- |
| Frecuencia de la práctica de la episiotomía en una institución en Quito, Ecuador, 2009-2022 | Campos incompletos o divergentes: año, volumen, número/suplemento, palabras clave, autores | [Fuente 1](https://doi.org/10.18597/rcog.4216) | año: 2024; volumen: 75; número/suplemento: 2; autores: Mercy Dolores Rosero-Quintana, Santiago Vasco-Morales, Karla Benalcázar-Sanmartín, Liseth Paola Salazar-Congacha, Paola Cristina Toapanta-Pinta; Palabras clave editoriales incorporadas | 2024; DOI: 10.18597/rcog.4216; verificado |
| Evolución de las opiniones estudiantiles sobre el ciberaprendizaje en la carrera de obstetricia | Campos incompletos o divergentes: año, volumen, número/suplemento, palabras clave, identificador electrónico, PDF | [Fuente 1](https://www.elsevier.es/es-revista-educacion-medica-71-articulo-evolucion-opiniones-estudiantiles-sobre-el-S1575181323000505)<br>[Fuente 2](https://www.elsevier.es/es-revista-educacion-medica-71-pdf-download-S1575181323000505) | año: 2023; volumen: 24; número/suplemento: 5; identificador electrónico: 100840; PDF: https://www.elsevier.es/es-revista-educacion-medica-71-pdf-download-S1575181323000505; Palabras clave editoriales incorporadas | 2023; DOI: 10.1016/j.edumed.2023.100840; verificado |
| Dietary Patterns and Factors Associated with Food Affinity in Pregnant Women from Quito, Ecuador | Campos incompletos o divergentes: año, volumen, número/suplemento, identificador electrónico, autores, nota de evidencia; Acceso directo al sitio MDPI bloqueado; versión editorial consultada en PMC | [Fuente 1](https://pmc.ncbi.nlm.nih.gov/articles/PMC10892012/) | año: 2024; volumen: 16; número/suplemento: 4; identificador electrónico: 475; autores: Paola Toapanta-Pinta, Santiago Vasco-Morales, Sara Céspedes-Granda, Daniela Saes Sartorelli, Elaine Christine Dantas Moisés | 2024; DOI: 10.3390/nu16040475; verificado con pendiente documentado |
| Revisión integrativa: beneficios, desafíos y perspectivas del método canguro en el cuidado neonatal | Campos incompletos o divergentes: año, volumen, número/suplemento, DOI, identificador electrónico, PDF | [Fuente 1](https://rgsa.openaccesspublications.org/rgsa/article/view/7165)<br>[Fuente 2](https://rgsa.openaccesspublications.org/rgsa/article/download/7165/3154) | año: 2024; volumen: 18; número/suplemento: 8; DOI: 10.24857/rgsa.v18n8-119; identificador electrónico: e07165; PDF: https://rgsa.openaccesspublications.org/rgsa/article/download/7165/3154 | 2024; DOI: 10.24857/rgsa.v18n8-119; verificado |
| De tesis a artículos científicos: publicación de investigaciones neonatales en Ecuador | Campos incompletos o divergentes: año, volumen, número/suplemento, DOI, identificador electrónico, PDF, síntesis del método | [Fuente 1](https://rgsa.openaccesspublications.org/rgsa/article/view/9224)<br>[Fuente 2](https://rgsa.openaccesspublications.org/rgsa/article/download/9224/4351) | año: 2024; volumen: 18; número/suplemento: 10; DOI: 10.24857/rgsa.v18n10-185; identificador electrónico: e09224; PDF: https://rgsa.openaccesspublications.org/rgsa/article/download/9224/4351; Síntesis corregida según el método original; detalle debajo | 2024; DOI: 10.24857/rgsa.v18n10-185; verificado |
| Derechos humanos en la ciencia: observaciones de los comités de ética a protocolos de investigación médica | Campos incompletos o divergentes: año, volumen, número/suplemento, DOI, identificador electrónico, PDF, síntesis del método | [Fuente 1](https://rgsa.openaccesspublications.org/rgsa/article/view/8300)<br>[Fuente 2](https://rgsa.openaccesspublications.org/rgsa/article/download/8300/4168) | año: 2024; volumen: 18; número/suplemento: 10; DOI: 10.24857/rgsa.v18n10-074; identificador electrónico: e08300; PDF: https://rgsa.openaccesspublications.org/rgsa/article/download/8300/4168; Síntesis corregida según el método original; detalle debajo | 2024; DOI: 10.24857/rgsa.v18n10-074; verificado |
| Percepción de los estudiantes sobre el proyecto integrador de saberes: análisis métricos versus ordinales | Campos incompletos o divergentes: año, volumen, DOI, palabras clave, páginas, número/suplemento, PDF, publicación electrónica | [Fuente 1](https://www.elsevier.es/es-revista-educacion-medica-71-articulo-percepcion-estudiantes-sobre-el-proyecto-S1575181319301974)<br>[Fuente 2](https://www.elsevier.es/es-revista-educacion-medica-71-pdf-download-S1575181319301974) | año: 2021; volumen: 22; DOI: 10.1016/j.edumed.2019.10.015; páginas: S358–S363; número/suplemento: Supl. 5; PDF: https://www.elsevier.es/es-revista-educacion-medica-71-pdf-download-S1575181319301974; publicación electrónica: 2019-12-23; Palabras clave editoriales incorporadas | 2021; DOI: 10.1016/j.edumed.2019.10.015; verificado |
| Sobrevida y principales causas de morbilidad y mortalidad en prematuros en Ecuador | Campos incompletos o divergentes: año, volumen, número/suplemento, palabras clave, revista, páginas, autores, alias de búsqueda, PDF, año impreso, síntesis del método, síntesis de relevancia, nota de evidencia; Discordancia de fecha entre PDF impreso (2021) y ficha editorial (2022) documentada; sin confirmación adicional de la revista | [Fuente 1](https://revistafecim.org/index.php/tejom/article/view/99)<br>[Fuente 2](https://revistafecim.org/index.php/tejom/article/download/99/70) | año: 2022; volumen: 2; número/suplemento: Esp; revista: The Ecuador Journal of Medicine; páginas: 1–13; autores: Nathaly Alexandra Ortega Barrionuevo, Santiago Vasco; PDF: https://revistafecim.org/index.php/tejom/article/download/99/70; año impreso: 2021; Síntesis corregida según el método original; detalle debajo; Palabras clave editoriales incorporadas | 2022; DOI: 10.46721/tejom-vol2issEsp-2022-1-13; verificado con pendiente documentado |
| COVID-19 en gestantes y neonatos: características clínicas y hallazgos de laboratorio e imagenológicos. Un resumen de revisiones sistemáticas | Campos incompletos o divergentes: año, volumen, número/suplemento, DOI, revista, título, autores, identificador electrónico, síntesis de relevancia | [Fuente 1](http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0120-00112023000100009) | año: 2023; volumen: 71; número/suplemento: 1; DOI: 10.15446/revfacmed.v71n1.97588; revista: Revista de la Facultad de Medicina; título: COVID-19 en gestantes y neonatos: características clínicas y hallazgos de laboratorio e imagenológicos. Un resumen de revisiones sistemáticas; autores: Paola Cristina Toapanta-Pinta, Cristhian Santiago Vasco-Toapanta, Alonso Ernesto Herrera-Tasiguano, Catalina Angélica Verdesoto-Jácome, María José Páez-Pastor, Santiago Vasco-Morales; identificador electrónico: e97588; Síntesis corregida según el método original; detalle debajo | 2023; DOI: 10.15446/revfacmed.v71n1.97588; verificado |
| Anemia y estado nutricional infantil en comunidades indígenas de altura: estudio transversal en Chimborazo, Ecuador | Campos incompletos o divergentes: palabras clave; DOI no localizado en la página editorial; no se presume su existencia | [Fuente 1](https://revpediatria.sld.cu/index.php/ped/article/view/8008) | Palabras clave editoriales incorporadas | 2026; DOI: pendiente, no localizado; verificado con pendiente documentado |
| Determinantes clínicas, obstétricas y neonatales de la cesárea primaria en mujeres multíparas | Sin divergencias bibliográficas comprobadas | [Fuente 1](https://www.scielo.org.mx/pdf/gom/v94/0300-9041-gom-94-e11002.pdf) | Se conservan los campos verificados | 2026; DOI: 10.24245/gom.v94id.11002; verificado |
| Factores maternos y neonatales asociados a la lactancia materna exclusiva al egreso hospitalario | Campos incompletos o divergentes: año, volumen, DOI, palabras clave, identificador electrónico, número/suplemento | [Fuente 1](https://www.scielo.br/j/reben/a/6ssmqbFmc99fM36vSqvdDJw/?lang=es)<br>[Fuente 2](https://pmc.ncbi.nlm.nih.gov/articles/PMC12707856/) | año: 2025; volumen: 78; DOI: 10.1590/0034-7167-2025-0196; identificador electrónico: e20250196; número/suplemento: Supl. 4; Palabras clave editoriales incorporadas | 2025; DOI: 10.1590/0034-7167-2025-0196; verificado |
| Prevalencia y factores de mortalidad en la hospitalización inicial por gastrosquisis | Campos incompletos o divergentes: año, volumen, número/suplemento, palabras clave, páginas; Reacceso a la editorial bloqueado con 403; se usó snapshot editorial previo de esta sesión | [Fuente 1](https://andespediatrica.cl/index.php/rchped/article/view/5517) | año: 2025; volumen: 96; número/suplemento: 4; páginas: 503–514; Palabras clave editoriales incorporadas | 2025; DOI: 10.32641/andespediatr.v96i4.5517; verificado con pendiente documentado |
| Neurological disorders in infants may represent a potential risk factor for the development of atopic dermatitis | Campos incompletos o divergentes: año, volumen, número/suplemento, DOI, palabras clave, revista, autores, identificador electrónico | [Fuente 1](https://revistas.usp.br/rmrp/es/article/view/230186) | año: 2025; volumen: 58; número/suplemento: 3; DOI: 10.11606/issn.2176-7262.rmrp.2025.230186; revista: Medicina (Ribeirão Preto); autores: Santiago Vasco-Morales, Edson Zangiacomi Martinez, Paola Cristina Toapanta-Pinta, Walusa Assad, Davi Aragon, Renata Gomes de Oliveira, Pérsio Roxo-Junior; identificador electrónico: e-230186; Palabras clave editoriales incorporadas | 2025; DOI: 10.11606/issn.2176-7262.rmrp.2025.230186; verificado |
| Prevalence of congenital anomalies and factors associated with their development at a national referral hospital in Quito, Ecuador | Campos incompletos o divergentes: año, volumen, número/suplemento, palabras clave, revista, identificador electrónico | [Fuente 1](https://doi.org/10.15446/revfacmed.v72n4.113715) | año: 2024; volumen: 72; número/suplemento: 4; revista: Revista de la Facultad de Medicina; identificador electrónico: e113715; Palabras clave editoriales incorporadas | 2024; DOI: 10.15446/revfacmed.v72n4.113715; verificado |
| Recorded gestational violence and neonatal outcomes in a cohort of deliveries requiring neonatal hospitalization: a 15-year hospital-based perinatal registry study | Campos incompletos o divergentes: palabras clave, identificador electrónico | [Fuente 1](https://www.frontiersin.org/journals/global-womens-health/articles/10.3389/fgwh.2026.1920014/full) | identificador electrónico: 1920014; Palabras clave editoriales incorporadas | 2026; DOI: 10.3389/fgwh.2026.1920014; verificado |
| Impacto de la experiencia de los tutores en la satisfacción estudiantil durante proyectos integradores de saberes | Campos incompletos o divergentes: palabras clave; DOI no localizado en la página editorial; no se presume su existencia | [Fuente 1](https://revistas.utb.edu.ec/index.php/magazine/article/view/4308) | Palabras clave editoriales incorporadas | 2026; DOI: pendiente, no localizado; verificado con pendiente documentado |

## Correcciones y evidencia por campo

Este detalle registra también lo conservado en el fichero de evidencias. Las palabras clave proceden de los metadatos editoriales; no se interpretaron como nuevos resultados.

### Frecuencia de la práctica de la episiotomía en una institución en Quito, Ecuador, 2009-2022

- **año:** sin dato → 2024. Fuente: [evidencia 1](https://doi.org/10.18597/rcog.4216).
- **volumen:** sin dato → 75. Fuente: [evidencia 1](https://doi.org/10.18597/rcog.4216).
- **número/suplemento:** sin dato → 2. Fuente: [evidencia 1](https://doi.org/10.18597/rcog.4216).
- **autores:** Mercy Rosero-Quintana, Santiago Vasco-Morales, Karla Benalcázar-Sanmartín, Liseth Salazar-Congacha, Paola Toapanta-Pinta → Mercy Dolores Rosero-Quintana, Santiago Vasco-Morales, Karla Benalcázar-Sanmartín, Liseth Paola Salazar-Congacha, Paola Cristina Toapanta-Pinta. Fuente: [evidencia 1](https://doi.org/10.18597/rcog.4216).

### Evolución de las opiniones estudiantiles sobre el ciberaprendizaje en la carrera de obstetricia

- **año:** sin dato → 2023. Fuente: [evidencia 1](https://www.elsevier.es/es-revista-educacion-medica-71-articulo-evolucion-opiniones-estudiantiles-sobre-el-S1575181323000505), [evidencia 2](https://www.elsevier.es/es-revista-educacion-medica-71-pdf-download-S1575181323000505).
- **volumen:** sin dato → 24. Fuente: [evidencia 1](https://www.elsevier.es/es-revista-educacion-medica-71-articulo-evolucion-opiniones-estudiantiles-sobre-el-S1575181323000505).
- **número/suplemento:** sin dato → 5. Fuente: [evidencia 1](https://www.elsevier.es/es-revista-educacion-medica-71-articulo-evolucion-opiniones-estudiantiles-sobre-el-S1575181323000505).
- **identificador electrónico:** sin dato → 100840. Fuente: [evidencia 1](https://www.elsevier.es/es-revista-educacion-medica-71-articulo-evolucion-opiniones-estudiantiles-sobre-el-S1575181323000505).
- **PDF:** sin dato → https://www.elsevier.es/es-revista-educacion-medica-71-pdf-download-S1575181323000505. Fuente: [evidencia 1](https://www.elsevier.es/es-revista-educacion-medica-71-articulo-evolucion-opiniones-estudiantiles-sobre-el-S1575181323000505).

### Dietary Patterns and Factors Associated with Food Affinity in Pregnant Women from Quito, Ecuador

- **año:** sin dato → 2024. Fuente: [evidencia 1](https://pmc.ncbi.nlm.nih.gov/articles/PMC10892012/).
- **volumen:** sin dato → 16. Fuente: [evidencia 1](https://pmc.ncbi.nlm.nih.gov/articles/PMC10892012/).
- **número/suplemento:** sin dato → 4. Fuente: [evidencia 1](https://pmc.ncbi.nlm.nih.gov/articles/PMC10892012/).
- **identificador electrónico:** sin dato → 475. Fuente: [evidencia 1](https://pmc.ncbi.nlm.nih.gov/articles/PMC10892012/).
- **autores:** Toapanta-Pinta P., Vasco-Morales S., Céspedes-Granda S., Sartorelli D.S., Moisés E.C.D → Paola Toapanta-Pinta, Santiago Vasco-Morales, Sara Céspedes-Granda, Daniela Saes Sartorelli, Elaine Christine Dantas Moisés. Fuente: [evidencia 1](https://pmc.ncbi.nlm.nih.gov/articles/PMC10892012/).

### Revisión integrativa: beneficios, desafíos y perspectivas del método canguro en el cuidado neonatal

- **año:** sin dato → 2024. Fuente: [evidencia 1](https://rgsa.openaccesspublications.org/rgsa/article/view/7165), [evidencia 2](https://rgsa.openaccesspublications.org/rgsa/article/download/7165/3154).
- **volumen:** sin dato → 18. Fuente: [evidencia 1](https://rgsa.openaccesspublications.org/rgsa/article/view/7165).
- **número/suplemento:** sin dato → 8. Fuente: [evidencia 1](https://rgsa.openaccesspublications.org/rgsa/article/view/7165).
- **DOI:** sin dato → 10.24857/rgsa.v18n8-119. Fuente: [evidencia 1](https://rgsa.openaccesspublications.org/rgsa/article/view/7165), [evidencia 2](https://rgsa.openaccesspublications.org/rgsa/article/download/7165/3154).
- **identificador electrónico:** sin dato → e07165. Fuente: [evidencia 1](https://rgsa.openaccesspublications.org/rgsa/article/view/7165).
- **PDF:** sin dato → https://rgsa.openaccesspublications.org/rgsa/article/download/7165/3154. Fuente: [evidencia 1](https://rgsa.openaccesspublications.org/rgsa/article/view/7165).

### De tesis a artículos científicos: publicación de investigaciones neonatales en Ecuador

- **año:** sin dato → 2024. Fuente: [evidencia 1](https://rgsa.openaccesspublications.org/rgsa/article/view/9224), [evidencia 2](https://rgsa.openaccesspublications.org/rgsa/article/download/9224/4351).
- **volumen:** sin dato → 18. Fuente: [evidencia 1](https://rgsa.openaccesspublications.org/rgsa/article/view/9224).
- **número/suplemento:** sin dato → 10. Fuente: [evidencia 1](https://rgsa.openaccesspublications.org/rgsa/article/view/9224).
- **DOI:** sin dato → 10.24857/rgsa.v18n10-185. Fuente: [evidencia 1](https://rgsa.openaccesspublications.org/rgsa/article/view/9224), [evidencia 2](https://rgsa.openaccesspublications.org/rgsa/article/download/9224/4351).
- **identificador electrónico:** sin dato → e09224. Fuente: [evidencia 1](https://rgsa.openaccesspublications.org/rgsa/article/view/9224).
- **PDF:** sin dato → https://rgsa.openaccesspublications.org/rgsa/article/download/9224/4351. Fuente: [evidencia 1](https://rgsa.openaccesspublications.org/rgsa/article/view/9224).
- **síntesis del método:** Estudio bibliométrico que analiza la conversión de tesis en neonatología en artículos científicos publicados en Ecuador durante 2018-2023. Se revisaron 342 tesis. → Estudio bibliométrico sobre tesis y artículos científicos de neonatología con filiación ecuatoriana. Los criterios de inclusión delimitan el periodo entre enero de 2003 y diciembre de 2022; se compararon títulos, resúmenes y autorías para identificar coincidencias.. Fuente: [evidencia 1](https://rgsa.openaccesspublications.org/rgsa/article/download/9224/4351).

### Derechos humanos en la ciencia: observaciones de los comités de ética a protocolos de investigación médica

- **año:** sin dato → 2024. Fuente: [evidencia 1](https://rgsa.openaccesspublications.org/rgsa/article/view/8300), [evidencia 2](https://rgsa.openaccesspublications.org/rgsa/article/download/8300/4168).
- **volumen:** sin dato → 18. Fuente: [evidencia 1](https://rgsa.openaccesspublications.org/rgsa/article/view/8300).
- **número/suplemento:** sin dato → 10. Fuente: [evidencia 1](https://rgsa.openaccesspublications.org/rgsa/article/view/8300).
- **DOI:** sin dato → 10.24857/rgsa.v18n10-074. Fuente: [evidencia 1](https://rgsa.openaccesspublications.org/rgsa/article/view/8300), [evidencia 2](https://rgsa.openaccesspublications.org/rgsa/article/download/8300/4168).
- **identificador electrónico:** sin dato → e08300. Fuente: [evidencia 1](https://rgsa.openaccesspublications.org/rgsa/article/view/8300).
- **PDF:** sin dato → https://rgsa.openaccesspublications.org/rgsa/article/download/8300/4168. Fuente: [evidencia 1](https://rgsa.openaccesspublications.org/rgsa/article/view/8300).
- **síntesis del método:** Este estudio analiza las observaciones más frecuentes realizadas por comités de ética (CEI) a protocolos de investigación médica en Ecuador durante 2019-2023. Se revisaron 1,456 evaluaciones. → Revisión de publicaciones sobre observaciones de los comités de ética a protocolos de investigación. Se realizaron búsquedas en PubMed, Scopus y Google Académico hasta el 30 de noviembre de 2023 y un metaanálisis de proporción única.. Fuente: [evidencia 1](https://rgsa.openaccesspublications.org/rgsa/article/download/8300/4168).

### Percepción de los estudiantes sobre el proyecto integrador de saberes: análisis métricos versus ordinales

- **año:** sin dato → 2021. Fuente: [evidencia 1](https://www.elsevier.es/es-revista-educacion-medica-71-articulo-percepcion-estudiantes-sobre-el-proyecto-S1575181319301974), [evidencia 2](https://www.elsevier.es/es-revista-educacion-medica-71-pdf-download-S1575181319301974).
- **volumen:** sin dato → 22. Fuente: [evidencia 1](https://www.elsevier.es/es-revista-educacion-medica-71-articulo-percepcion-estudiantes-sobre-el-proyecto-S1575181319301974).
- **DOI:** sin dato → 10.1016/j.edumed.2019.10.015. Fuente: [evidencia 1](https://www.elsevier.es/es-revista-educacion-medica-71-articulo-percepcion-estudiantes-sobre-el-proyecto-S1575181319301974), [evidencia 2](https://www.elsevier.es/es-revista-educacion-medica-71-pdf-download-S1575181319301974).
- **páginas:** sin dato → S358–S363. Fuente: [evidencia 1](https://www.elsevier.es/es-revista-educacion-medica-71-pdf-download-S1575181319301974).
- **número/suplemento:** sin dato → Supl. 5. Fuente: [evidencia 1](https://www.elsevier.es/es-revista-educacion-medica-71-articulo-percepcion-estudiantes-sobre-el-proyecto-S1575181319301974).
- **PDF:** sin dato → https://www.elsevier.es/es-revista-educacion-medica-71-pdf-download-S1575181319301974. Fuente: [evidencia 1](https://www.elsevier.es/es-revista-educacion-medica-71-articulo-percepcion-estudiantes-sobre-el-proyecto-S1575181319301974).
- **publicación electrónica:** sin dato → 2019-12-23. Fuente: [evidencia 1](https://www.elsevier.es/es-revista-educacion-medica-71-pdf-download-S1575181319301974).

### Sobrevida y principales causas de morbilidad y mortalidad en prematuros en Ecuador

- **año:** sin dato → 2022. Fuente: [evidencia 1](https://revistafecim.org/index.php/tejom/article/view/99).
- **volumen:** sin dato → 2. Fuente: [evidencia 1](https://revistafecim.org/index.php/tejom/article/view/99).
- **número/suplemento:** sin dato → Esp. Fuente: [evidencia 1](https://revistafecim.org/index.php/tejom/article/view/99).
- **revista:** The Ecuador Journal of Medicine. Pediatría → The Ecuador Journal of Medicine. Fuente: [evidencia 1](https://revistafecim.org/index.php/tejom/article/view/99).
- **páginas:** sin dato → 1–13. Fuente: [evidencia 1](https://revistafecim.org/index.php/tejom/article/view/99).
- **autores:** Nathaly Alexandra Ortega Barrionuevo, Santiago Vasco-Morales → Nathaly Alexandra Ortega Barrionuevo, Santiago Vasco. Fuente: [evidencia 1](https://revistafecim.org/index.php/tejom/article/view/99), [evidencia 2](https://revistafecim.org/index.php/tejom/article/download/99/70).
- **PDF:** sin dato → https://revistafecim.org/index.php/tejom/article/download/99/70. Fuente: [evidencia 1](https://revistafecim.org/index.php/tejom/article/view/99).
- **año impreso:** sin dato → 2021. Fuente: [evidencia 1](https://revistafecim.org/index.php/tejom/article/download/99/70).
- **síntesis del método:** Revisión sistemática que analiza la sobrevida y principales causas de morbilidad y mortalidad en 2,156 prematuros nacidos en hospitales de referencia de Ecuador entre 2020-2023. → Metaanálisis con abordaje cualitativo y cuantitativo de estudios sobre prematuros en Ecuador publicados entre 2015 y 2020. Se buscaron trabajos en repositorios y literatura gris; se evaluó su calidad y se analizaron proporciones y heterogeneidad.. Fuente: [evidencia 1](https://revistafecim.org/index.php/tejom/article/download/99/70).
- **síntesis de relevancia:** La prematuridad es la principal causa de mortalidad neonatal en Ecuador. → La publicación señala heterogeneidad y sesgo de publicación en los estudios incluidos, y recomienda investigaciones bien diseñadas, preferentemente multicéntricas.. Fuente: [evidencia 1](https://revistafecim.org/index.php/tejom/article/download/99/70).

### COVID-19 en gestantes y neonatos: características clínicas y hallazgos de laboratorio e imagenológicos. Un resumen de revisiones sistemáticas

- **año:** sin dato → 2023. Fuente: [evidencia 1](http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0120-00112023000100009).
- **volumen:** sin dato → 71. Fuente: [evidencia 1](http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0120-00112023000100009).
- **número/suplemento:** sin dato → 1. Fuente: [evidencia 1](http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0120-00112023000100009).
- **DOI:** sin dato → 10.15446/revfacmed.v71n1.97588. Fuente: [evidencia 1](http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0120-00112023000100009).
- **revista:** Revista de la Facultad de Medicina (Colombia) → Revista de la Facultad de Medicina. Fuente: [evidencia 1](http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0120-00112023000100009).
- **título:** COVID-19 en gestantes y neonatos: características clínicas y hallazgos de laboratorio e imagenológicos → COVID-19 en gestantes y neonatos: características clínicas y hallazgos de laboratorio e imagenológicos. Un resumen de revisiones sistemáticas. Fuente: [evidencia 1](http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0120-00112023000100009).
- **autores:** Toapanta-Pinta P.C., Vasco-Toapanta C.S., Herrera-Tasiguano A.E., Verdesoto-Jácome C.A., Páez-Pastor M.J., Vasco-Morales S. → Paola Cristina Toapanta-Pinta, Cristhian Santiago Vasco-Toapanta, Alonso Ernesto Herrera-Tasiguano, Catalina Angélica Verdesoto-Jácome, María José Páez-Pastor, Santiago Vasco-Morales. Fuente: [evidencia 1](http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0120-00112023000100009).
- **identificador electrónico:** sin dato → e97588. Fuente: [evidencia 1](http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0120-00112023000100009).
- **síntesis de relevancia:** Proporcionó la síntesis más completa de evidencia para guiar decisiones clínicas durante la pandemia. → Reúne evidencia de revisiones sistemáticas sobre las manifestaciones clínicas y los hallazgos de laboratorio e imagenológicos de COVID-19 en gestantes y neonatos.. Fuente: [evidencia 1](http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0120-00112023000100009).

### Anemia y estado nutricional infantil en comunidades indígenas de altura: estudio transversal en Chimborazo, Ecuador


### Factores maternos y neonatales asociados a la lactancia materna exclusiva al egreso hospitalario

- **año:** sin dato → 2025. Fuente: [evidencia 1](https://www.scielo.br/j/reben/a/6ssmqbFmc99fM36vSqvdDJw/?lang=es), [evidencia 2](https://pmc.ncbi.nlm.nih.gov/articles/PMC12707856/).
- **volumen:** sin dato → 78. Fuente: [evidencia 1](https://www.scielo.br/j/reben/a/6ssmqbFmc99fM36vSqvdDJw/?lang=es).
- **DOI:** sin dato → 10.1590/0034-7167-2025-0196. Fuente: [evidencia 1](https://www.scielo.br/j/reben/a/6ssmqbFmc99fM36vSqvdDJw/?lang=es), [evidencia 2](https://pmc.ncbi.nlm.nih.gov/articles/PMC12707856/).
- **identificador electrónico:** sin dato → e20250196. Fuente: [evidencia 1](https://www.scielo.br/j/reben/a/6ssmqbFmc99fM36vSqvdDJw/?lang=es).
- **número/suplemento:** sin dato → Supl. 4. Fuente: [evidencia 1](https://www.scielo.br/j/reben/a/6ssmqbFmc99fM36vSqvdDJw/?lang=es), [evidencia 2](https://pmc.ncbi.nlm.nih.gov/articles/PMC12707856/).

### Prevalencia y factores de mortalidad en la hospitalización inicial por gastrosquisis

- **año:** sin dato → 2025. Fuente: [evidencia 1](https://andespediatrica.cl/index.php/rchped/article/view/5517).
- **volumen:** sin dato → 96. Fuente: [evidencia 1](https://andespediatrica.cl/index.php/rchped/article/view/5517).
- **número/suplemento:** sin dato → 4. Fuente: [evidencia 1](https://andespediatrica.cl/index.php/rchped/article/view/5517).
- **páginas:** sin dato → 503–514. Fuente: [evidencia 1](https://andespediatrica.cl/index.php/rchped/article/view/5517).

### Neurological disorders in infants may represent a potential risk factor for the development of atopic dermatitis

- **año:** sin dato → 2025. Fuente: [evidencia 1](https://revistas.usp.br/rmrp/es/article/view/230186).
- **volumen:** sin dato → 58. Fuente: [evidencia 1](https://revistas.usp.br/rmrp/es/article/view/230186).
- **número/suplemento:** sin dato → 3. Fuente: [evidencia 1](https://revistas.usp.br/rmrp/es/article/view/230186).
- **DOI:** sin dato → 10.11606/issn.2176-7262.rmrp.2025.230186. Fuente: [evidencia 1](https://revistas.usp.br/rmrp/es/article/view/230186).
- **revista:** Revista de Medicina de Ribeirão Preto → Medicina (Ribeirão Preto). Fuente: [evidencia 1](https://revistas.usp.br/rmrp/es/article/view/230186).
- **autores:** Santiago Vasco-Morales, Edson Zangiacomi Martinez, Paola Cristina Toapanta-Pinta, Walusa Assad, Davi Aragon, Renata Gomes de Oliveira, Persio Roxo-Junior → Santiago Vasco-Morales, Edson Zangiacomi Martinez, Paola Cristina Toapanta-Pinta, Walusa Assad, Davi Aragon, Renata Gomes de Oliveira, Pérsio Roxo-Junior. Fuente: [evidencia 1](https://revistas.usp.br/rmrp/es/article/view/230186).
- **identificador electrónico:** sin dato → e-230186. Fuente: [evidencia 1](https://revistas.usp.br/rmrp/es/article/view/230186).

### Prevalence of congenital anomalies and factors associated with their development at a national referral hospital in Quito, Ecuador

- **año:** sin dato → 2024. Fuente: [evidencia 1](https://doi.org/10.15446/revfacmed.v72n4.113715).
- **volumen:** sin dato → 72. Fuente: [evidencia 1](https://doi.org/10.15446/revfacmed.v72n4.113715).
- **número/suplemento:** sin dato → 4. Fuente: [evidencia 1](https://doi.org/10.15446/revfacmed.v72n4.113715).
- **revista:** Revista de la Facultad de Medicina (Colombia) → Revista de la Facultad de Medicina. Fuente: [evidencia 1](https://doi.org/10.15446/revfacmed.v72n4.113715).
- **identificador electrónico:** sin dato → e113715. Fuente: [evidencia 1](https://doi.org/10.15446/revfacmed.v72n4.113715).

### Recorded gestational violence and neonatal outcomes in a cohort of deliveries requiring neonatal hospitalization: a 15-year hospital-based perinatal registry study

- **identificador electrónico:** sin dato → 1920014. Fuente: [evidencia 1](https://www.frontiersin.org/journals/global-womens-health/articles/10.3389/fgwh.2026.1920014/full).

### Impacto de la experiencia de los tutores en la satisfacción estudiantil durante proyectos integradores de saberes


## Prematuros: discrepancia cronológica

La [ficha de The Ecuador Journal of Medicine](https://revistafecim.org/index.php/tejom/article/view/99) identifica volumen 2, número especial y publicación del 15 de junio de **2022**. El [PDF editorial](https://revistafecim.org/index.php/tejom/article/download/99/70) imprime **Año 2021**. Se usa 2022 como año de la ficha y se conserva 2021 como `printedYear`, con una nota visible de discordancia. La revista debe aclarar esa diferencia; no se declara resuelta.

La revisión incluyó trabajos de **2015–2020**. Se retiró la descripción heredada de una cohorte de 2.156 pacientes y el periodo **2020–2023**, porque no corresponden al método original. El 2023 era el final de un periodo atribuido por el portal, no el año editorial. La nueva síntesis describe el metaanálisis y sus limitaciones sin inventar resultados. La firma visible es Nathaly Alexandra Ortega Barrionuevo y Santiago Vasco; se mantiene Santiago Vasco-Morales como alias de búsqueda, sin alterar la firma editorial.

## Otras precisiones y pendientes

- **PIS:** año bibliográfico 2021, volumen 22, suplemento 5, S358–S363. El PDF declara disponibilidad electrónica el 23 de diciembre de 2019; el sufijo del DOI no se tomó como año del fascículo.
- **COVID:** año de la cita y volumen 71(1): 2023. La aparición electrónica en SciELO en 2024 no sustituye el año del fascículo. Se recuperaron el subtítulo y las firmas completas de la publicación.
- **Tesis:** los criterios originales delimitan enero de 2003–diciembre de 2022. Se retiraron 2018–2023 y 342 tesis del enfoque heredado, sin introducir una muestra alternativa.
- **Derechos humanos/ética:** el original describe revisión y metaanálisis con búsquedas hasta el 30 de noviembre de 2023. Se retiró la descripción de 1.456 protocolos individuales de 2019–2023.
- **Nutrients:** metadatos contrastados con la versión editorial en PMC; acceso directo a MDPI bloqueado. El supuesto PDF de PMC devolvió una página de desafío, por lo que no se añadió un enlace PDF como validado.
- **Gastrosquisis:** se conservó el DOI correcto y se completaron año/volumen/número/páginas desde la captura editorial previa. Pendiente comprobar nuevamente la disponibilidad directa; el 403 no demuestra que el enlace esté roto.
- **Anemia y tutores:** no se encontró DOI en las páginas editoriales consultadas. Consultar a las revistas si se requiere completar ese campo. No se dedujo del número OJS ni de otras publicaciones.
- **PDF:** se conservaron los cuatro accesos previamente comprobados y se añadieron seis descargas editoriales comprobadas (dos Elsevier, tres RGSA en español y prematuros): diez accesos visibles. Los otros siete registros no presentan un acceso PDF validado en esta fase; la falta de botón no demuestra inexistencia del PDF.

## Validación técnica y guion histórico

`verificaciones/verificar.cjs` y `verificaciones/redesign.cjs` delegan ahora en `tests/final-audit.cjs`, evitando la antigua extracción que exigía 15 fichas. El test conservado en el proyecto valida el catálogo efectivo de **17** y la preservación de los 15 registros históricos originales como comprobación separada. No modifica el catálogo.

Ejecución: `node verificaciones/verificar.cjs`, en localhost:8000. **552 comprobaciones satisfactorias** (184 por anchura: 1440, 768 y 390 px), más las comprobaciones de teclado y del punto de entrada alternativo. Búsqueda —incluido el alias del autor de prematuros—, filtros, ordenamiento, diálogos, enlaces PDF, imágenes y ausencia de desbordamiento pasan. Consola y solicitudes locales sin errores. Un cotejo independiente confirmó que las 17 fichas efectivas coinciden con `verifiedFields` del registro de evidencia.

Se mantiene la eliminación del nombre únicamente del pie de página. La autoría científica permanece en el catálogo. La estructura continúa siendo estática y compatible con Netlify; no se realizó despliegue ni prueba en un alojamiento publicado. No se ejecutaron commit ni push.

Los pendientes anteriores son de evidencia/editorial y acceso externo, no fallos comprobados del JavaScript local. La publicación como catálogo puede proceder con estas salvedades; una aprobación científica integral exige revisar el resto de los textos narrativos y aclarar la discordancia de prematuros.
