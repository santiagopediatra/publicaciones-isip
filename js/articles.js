
    const articles = [
      {id:"pdc-episiotomia",title:"Frecuencia de la práctica de la episiotomía en una institución en Quito, Ecuador, 2009-2022",authors:"Mercy Rosero-Quintana, Santiago Vasco-Morales, Karla Benalcázar-Sanmartín, Liseth Salazar-Congacha, Paola Toapanta-Pinta",journal:"Revista Colombiana de Obstetricia y Ginecología",doi:"https://doi.org/10.18597/rcog.4216",enfoque:"Un estudio realizado en el Hospital Gineco-Obstétrico Isidro Ayora (HGOIA) de Quito, Ecuador, reveló que entre 2009 y 2022 se practicaron episiotomías en el 36.69% de los partos vaginales, una cifra que supera la recomendación de la OMS (menos del 10%). Los principales resultados mostraron que este procedimiento es más frecuente en mujeres menores de 20 años, en partos sin acompañante, con cesárea previa, con bebés nacidos a término o grandes para su edad gestacional. Las conclusiones del estudio destacan una tendencia a reducir este procedimiento desde 2019.",importancia:"El tema de la episiotomía es importante porque es un procedimiento obstétrico que ha sido común durante décadas, inicialmente considerado para proteger al neonato, pero que hoy genera controversia por sus potenciales complicaciones.",category:"Obstetricia",img:"assets/pdc-episiotomia.webp"},
      {id:"pdc-ciberaprendizaje",title:"Evolución de las opiniones estudiantiles sobre el ciberaprendizaje en la carrera de obstetricia",authors:"Paola Toapanta-Pinta, Sara Céspedes-Granda, Mercy Rosero-Quintana, Santiago Vasco-Morales",journal:"Educación Médica",doi:"https://doi.org/10.1016/j.edumed.2023.100840",enfoque:"Este estudio analizó la evolución de las percepciones estudiantiles sobre el ciberaprendizaje en la carrera de obstetricia a lo largo del tiempo.",importancia:"El ciberaprendizaje es fundamental en la educación médica moderna, especialmente tras la pandemia de COVID-19.",category:"Educación Médica",img:"assets/pdc-ciberaprendizaje.webp"},
      {id:"pdc-dietary-patterns",title:"Dietary Patterns and Factors Associated with Food Affinity in Pregnant Women from Quito, Ecuador",authors:"Toapanta-Pinta P., Vasco-Morales S., Céspedes-Granda S., Sartorelli D.S., Moisés E.C.D",journal:"Nutrients",doi:"https://doi.org/10.3390/nu16040475",enfoque:"El estudio analizó los patrones dietéticos de 535 mujeres embarazadas en Quito, identificando tres patrones principales. El 50.8% presentaba sobrepeso u obesidad.",importancia:"La nutrición durante el embarazo impacta el desarrollo fetal, previene complicaciones maternas y reduce el riesgo de enfermedades crónicas en el hijo.",category:"Obstetricia",img:"assets/pdc-dietary-patterns.webp"},
      {id:"pdc-metodo-canguro",title:"Revisión integrativa: beneficios, desafíos y perspectivas del método canguro en el cuidado neonatal",authors:"Santiago Vasco-Morales, Andrea Quinde-Arce, Fabiola Males-Jácome, Catalina Verdesoto-Jácome, Catalina Almeida-Torres, Paola Toapanta-Pinta",journal:"Revista de Gestão Social e Ambiental",doi:"https://rgsa.openaccesspublications.org/rgsa/article/view/7165",enfoque:"Esta revisión integrativa analiza la evidencia científica sobre el método canguro (contacto piel a piel) en el cuidado neonatal.",importancia:"El método canguro reduce la mortalidad infantil en un 36%, mejora la termorregulación y favorece la lactancia.",category:"Neonatología",img:"assets/pdc-metodo-canguro.webp"},
      {id:"pdc-tesis-a-articulos",title:"De tesis a artículos científicos: publicación de investigaciones neonatales en Ecuador",authors:"Paola Toapanta-Pinta, Verónica Oliva-Velasco, Bianca Gavilanes-Vallejo, Daniela Caicedo-Gallardo, Santiago Vasco-Morales",journal:"Revista de Gestão Social e Ambiental",doi:"https://rgsa.openaccesspublications.org/rgsa/article/view/9224",enfoque:"Estudio bibliométrico que analiza la conversión de tesis en neonatología en artículos científicos publicados en Ecuador durante 2018-2023. Se revisaron 342 tesis.",importancia:"La baja tasa de publicación representa una pérdida de conocimiento científico generado en universidades ecuatorianas.",category:"Educación Médica",img:"assets/pdc-tesis-a-articulos.webp"},
      {id:"pdc-derechos-humanos-ciencia",title:"Derechos humanos en la ciencia: observaciones de los comités de ética a protocolos de investigación médica",authors:"Santiago Vasco-Morales, Cristhian Vasco-Toapanta, Alisson Guanoluisa-Vasco, Gabriel Vasco-Toapanta, Paola Toapanta-Pinta",journal:"Revista de Gestão Social e Ambiental",doi:"https://rgsa.openaccesspublications.org/rgsa/article/view/8300",enfoque:"Este estudio analiza las observaciones más frecuentes realizadas por comités de ética (CEI) a protocolos de investigación médica en Ecuador durante 2019-2023. Se revisaron 1,456 evaluaciones.",importancia:"La protección de los derechos humanos en la investigación médica garantiza la integridad científica y la confianza pública.",category:"Educación Médica",img:"assets/pdc-derechos-humanos-ciencia.webp"},
      {id:"pdc-pis-proyecto",title:"Percepción de los estudiantes sobre el proyecto integrador de saberes: análisis métricos versus ordinales",authors:"Paola Toapanta-Pinta, Mercy Rosero-Quintana, Mariana Salinas-Salinas, Mayra Cruz-Cevallos, Santiago Vasco-Morales",journal:"Educación Médica",doi:"https://www.sciencedirect.com/science/article/pii/S1575181319301974",enfoque:"Estudio comparativo que analiza percepciones estudiantiles sobre el Proyecto Integrador de Saberes (PIS) utilizando análisis métrico vs. análisis ordinal.",importancia:"El PIS es una innovación curricular clave en la educación médica ecuatoriana para promover el aprendizaje interdisciplinario.",category:"Educación Médica",img:"assets/pdc-pis-proyecto.webp"},
      {id:"pdc-prematuros-ecuador",title:"Sobrevida y principales causas de morbilidad y mortalidad en prematuros en Ecuador",authors:"Nathaly Alexandra Ortega Barrionuevo, Santiago Vasco-Morales",journal:"The Ecuador Journal of Medicine. Pediatría",doi:"https://doi.org/10.46721/tejom-vol2issEsp-2022-1-13",enfoque:"Revisión sistemática que analiza la sobrevida y principales causas de morbilidad y mortalidad en 2,156 prematuros nacidos en hospitales de referencia de Ecuador entre 2020-2023.",importancia:"La prematuridad es la principal causa de mortalidad neonatal en Ecuador.",category:"Neonatología",img:"assets/pdc-prematuros-ecuador.webp"},
      {id:"pdc-covid-gestantes-neonatos",title:"COVID-19 en gestantes y neonatos: características clínicas y hallazgos de laboratorio e imagenológicos",authors:"Toapanta-Pinta P.C., Vasco-Toapanta C.S., Herrera-Tasiguano A.E., Verdesoto-Jácome C.A., Páez-Pastor M.J., Vasco-Morales S.",journal:"Revista de la Facultad de Medicina (Colombia)",doi:"http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0120-00112023000100009",enfoque:"Umbrella review que sintetiza la evidencia disponible sobre COVID-19 en gestantes y neonatos.",importancia:"Proporcionó la síntesis más completa de evidencia para guiar decisiones clínicas durante la pandemia.",category:"Obstetricia",img:"assets/pdc-covid-gestantes-neonatos.webp"},
      {id:"pdc-anemia-indigena",title:"Anemia y estado nutricional infantil en comunidades indígenas de altura: estudio transversal en Chimborazo, Ecuador",authors:"Luis Humberto Calle Campos, Paola Cristina Toapanta Pinta, Valeria Elizabeth Jerez Campoverde, Daniel Esteban Ortega Larrea, Antonio Andrés Cerón Caicedo, Santiago Vasco-Morales",journal:"Revista Cubana de Pediatría",doi:"https://revpediatria.sld.cu/index.php/ped/article/view/8008",enfoque:"El estudio evalúa la asociación entre la maternidad adolescente, prácticas alimentarias y factores contextuales con anemia y desnutrición en lactantes indígenas andinos.",importancia:"La maternidad adolescente se asocia con mayor riesgo de desnutrición y anemia infantil en contextos vulnerables.",category:"Neonatología",img:"assets/pdc-anemia-indigena.webp"},
      {id:"pdc-cesarea-multipara",title:"Determinantes clínicas, obstétricas y neonatales de la cesárea primaria en mujeres multíparas",authors:"Santiago Vasco Morales, Carmen Durán Verdesoto, María Fernanda Morales Carrasco, María Elena Borja Santin, Paola Toapanta Pinta",journal:"Ginecología y Obstetricia de México",doi:"https://ginecologiayobstetricia.org.mx/articulo/determinantes-clinicas-obstetricas-y-neonatales-de-la-cesarea-primaria-en-mujeres-multiparas",enfoque:"Analiza factores de riesgo clínicos, obstétricos y neonatales para cesárea primaria en mujeres multíparas.",importancia:"Definir determinantes permite desarrollar intervenciones para reducir cesáreas innecesarias.",category:"Obstetricia",img:"assets/pdc-cesarea-multipara.webp"},
      {id:"pdc-lactancia-exclusiva",title:"Factores maternos y neonatales asociados a la lactancia materna exclusiva al egreso hospitalario",authors:"Paola Cristina Toapanta-Pinta, Adriana Paola Sinchiguano Cóndor, Deicy Maribel Muso Defaz, Angélica Oliva Gualavisí Landeta, Blanca Llilman Parra Cadena, Santiago Vasco-Morales",journal:"Revista Brasileira de Enfermagem",doi:"https://pmc.ncbi.nlm.nih.gov/articles/PMC12707856/",enfoque:"Investigación en más de 22,000 registros hospitalarios con modelos de regresión logística. Tasa de lactancia exclusiva del 91.55%, con determinantes negativos como cesárea y bajo peso al nacer.",importancia:"Permite promover estrategias de lactancia priorizando a madres de cesáreas.",category:"Neonatología",img:"assets/pdc-lactancia-exclusiva.webp"},
      {id:"pdc-gastrosquisis",title:"Prevalencia y factores de mortalidad en la hospitalización inicial por gastrosquisis",authors:"Santiago Vasco-Morales, Christian Vega-Reyes, Antonio Cerón-Caicedo, Nicole Orozco-Sánchez, Cristhian Vasco-Toapanta, Paola Cristina Toapanta-Pinta",journal:"Andes Pediatrica",doi:"https://doi.org/10.32641/andespediatr.v96i4.5517",enfoque:"Estudio sobre 175 neonatos con gastrosquisis, identificando que complicaciones múltiples, Apgar bajo y bajo peso se asocian con mayor riesgo de desenlace fatal.",importancia:"Subraya la urgencia de enfoques multidisciplinarios para anomalías congénitas de pared abdominal.",category:"Neonatología",img:"assets/pdc-gastrosquisis.webp"},
      {id:"pdc-dermatitis-neurologica",title:"Neurological disorders in infants may represent a potential risk factor for the development of atopic dermatitis",authors:"Santiago Vasco-Morales, Edson Zangiacomi Martinez, Paola Cristina Toapanta-Pinta, Walusa Assad, Davi Aragon, Renata Gomes de Oliveira, Persio Roxo-Junior",journal:"Revista de Medicina de Ribeirão Preto",doi:"https://revistas.usp.br/rmrp/es/article/view/230186",enfoque:"Explora cómo desórdenes neurológicos sistémicos pueden ser factores predisponentes para el desarrollo de dermatitis atópica e incremento de IgE.",importancia:"Ofrece perspectivas integradoras entre neurología pediátrica e inmunología-dermatología.",category:"Neonatología",img:"assets/pdc-dermatitis-neurologica.webp"},{id:"pdc-anomalias-congenitas",title:"Prevalence of congenital anomalies and factors associated with their development at a national referral hospital in Quito, Ecuador",authors:"Paola Cristina Toapanta-Pinta, Cristhian Santiago Vasco-Toapanta, Kevin Sidel-Almache, Analy Alejandra Salinas-Salinas, Santiago Vasco-Morales",journal:"Revista de la Facultad de Medicina (Colombia)",doi:"https://doi.org/10.15446/revfacmed.v72n4.113715",enfoque:"Estudio transversal con datos del HGOIA (Quito, 2009-2022): 105 385 nacidos vivos para estimar prevalencia y 26 236 neonatos hospitalizados para explorar factores asociados. La prevalencia de AC fue 2.92% (n=3 075). Las anomalías del sistema nervioso (25.6%), cardiovascular-respiratorio (21.1%) y musculoesquelético (16.1%) fueron las más frecuentes. Se usaron modelos de regresión logística binaria simple y múltiple.",importancia:"La edad materna >35 años se asoció positivamente con AC (OR: 1.20, IC95%: 1.07-1.33), mientras que el embarazo planificado (OR: 0.88) y el embarazo múltiple (OR: 0.50) mostraron asociaciones negativas. La suplementación con ácido fólico redujo el riesgo de anomalías del sistema nervioso. La DM materna incrementó el riesgo de AC cardiovasculares (OR: 2.50).",category:"Neonatología",img:"assets/pdc-anomalias-congenitas.webp"}
    ];


// Enrichment is separate to preserve all original record fields.
const bibliography = {
  "pdc-episiotomia": {
    "doiIdentifier": "10.18597/rcog.4216",
    "area": "Obstetricia",
    "source": "https://doi.org/10.18597/rcog.4216",
    "year": 2024,
    "volume": "75",
    "issue": "2",
    "keywords": [
      "Episiotomía",
      "Parto normal",
      "Herida quirúrgica",
      "Salud materna",
      "Prevalencia",
      "Ginecología",
      "Obstetricia"
    ],
    "journal": "Revista Colombiana de Obstetricia y Ginecología",
    "authors": "Mercy Dolores Rosero-Quintana, Santiago Vasco-Morales, Karla Benalcázar-Sanmartín, Liseth Paola Salazar-Congacha, Paola Cristina Toapanta-Pinta"
  },
  "pdc-ciberaprendizaje": {
    "doiIdentifier": "10.1016/j.edumed.2023.100840",
    "area": "Educación Médica",
    "source": "https://doi.org/10.1016/j.edumed.2023.100840",
    "year": 2023,
    "volume": "24",
    "issue": "5",
    "keywords": [
      "COVID-19; Educación a distancia; Preceptoría; Teleducación; Teorema de Bayes"
    ],
    "journal": "Educación Médica",
    "articleNumber": "100840",
    "pdf": "https://www.elsevier.es/es-revista-educacion-medica-71-pdf-download-S1575181323000505"
  },
  "pdc-dietary-patterns": {
    "doiIdentifier": "10.3390/nu16040475",
    "area": "Obstetricia",
    "source": "https://doi.org/10.3390/nu16040475",
    "year": 2024,
    "volume": "16",
    "issue": "4",
    "journal": "Nutrients",
    "articleNumber": "475",
    "authors": "Paola Toapanta-Pinta, Santiago Vasco-Morales, Sara Céspedes-Granda, Daniela Saes Sartorelli, Elaine Christine Dantas Moisés",
    "metadataNote": "Datos contrastados con la versión editorial depositada en PMC. El acceso directo a MDPI no pudo comprobarse por bloqueo automatizado."
  },
  "pdc-metodo-canguro": {
    "area": "Neonatología",
    "source": "https://rgsa.openaccesspublications.org/rgsa/article/view/7165",
    "year": 2024,
    "volume": "18",
    "issue": "8",
    "doiIdentifier": "10.24857/rgsa.v18n8-119",
    "journal": "Revista de Gestão Social e Ambiental",
    "articleNumber": "e07165",
    "pdf": "https://rgsa.openaccesspublications.org/rgsa/article/download/7165/3154",
    "title": "Revisión integrativa: beneficios, desafíos y perspectivas del método canguro en el cuidado neonatal",
    "authors": "Santiago Vasco-Morales, Andrea Quinde-Arce, Fabiola Males-Jácome, Catalina Verdesoto-Jácome, Catalina Almeida-Torres, Paola Toapanta-Pinta"
  },
  "pdc-tesis-a-articulos": {
    "area": "Educación Médica",
    "source": "https://rgsa.openaccesspublications.org/rgsa/article/view/9224",
    "year": 2024,
    "volume": "18",
    "issue": "10",
    "doiIdentifier": "10.24857/rgsa.v18n10-185",
    "journal": "Revista de Gestão Social e Ambiental",
    "articleNumber": "e09224",
    "pdf": "https://rgsa.openaccesspublications.org/rgsa/article/download/9224/4351",
    "title": "De tesis a artículos científicos: publicación de investigaciones neonatales en Ecuador",
    "authors": "Paola Toapanta-Pinta, Verónica Oliva-Velasco, Bianca Gavilanes-Vallejo, Daniela Caicedo-Gallardo, Santiago Vasco-Morales",
    "enfoque": "Estudio bibliométrico sobre tesis y artículos científicos de neonatología con filiación ecuatoriana. Los criterios de inclusión delimitan el periodo entre enero de 2003 y diciembre de 2022; se compararon títulos, resúmenes y autorías para identificar coincidencias."
  },
  "pdc-derechos-humanos-ciencia": {
    "area": "Educación Médica",
    "source": "https://rgsa.openaccesspublications.org/rgsa/article/view/8300",
    "year": 2024,
    "volume": "18",
    "issue": "10",
    "doiIdentifier": "10.24857/rgsa.v18n10-074",
    "journal": "Revista de Gestão Social e Ambiental",
    "articleNumber": "e08300",
    "pdf": "https://rgsa.openaccesspublications.org/rgsa/article/download/8300/4168",
    "title": "Derechos humanos en la ciencia: observaciones de los comités de ética a protocolos de investigación médica",
    "authors": "Santiago Vasco-Morales, Cristhian Vasco-Toapanta, Alisson Guanoluisa-Vasco, Gabriel Vasco-Toapanta, Paola Toapanta-Pinta",
    "enfoque": "Revisión de publicaciones sobre observaciones de los comités de ética a protocolos de investigación. Se realizaron búsquedas en PubMed, Scopus y Google Académico hasta el 30 de noviembre de 2023 y un metaanálisis de proporción única."
  },
  "pdc-pis-proyecto": {
    "area": "Educación Médica",
    "source": "https://www.sciencedirect.com/science/article/pii/S1575181319301974",
    "year": 2021,
    "volume": "22",
    "doiIdentifier": "10.1016/j.edumed.2019.10.015",
    "keywords": [
      "Análisis bayesiano; Likert; Ordenado-probit"
    ],
    "journal": "Educación Médica",
    "pages": "S358–S363",
    "issue": "Supl. 5",
    "pdf": "https://www.elsevier.es/es-revista-educacion-medica-71-pdf-download-S1575181319301974",
    "onlineDate": "2019-12-23"
  },
  "pdc-prematuros-ecuador": {
    "doiIdentifier": "10.46721/tejom-vol2issEsp-2022-1-13",
    "area": "Neonatología",
    "source": "https://doi.org/10.46721/tejom-vol2issEsp-2022-1-13",
    "year": 2022,
    "volume": "2",
    "issue": "Esp",
    "keywords": [
      "Morbilidad",
      "Mortalidad",
      "Recién nacido",
      "Neonato",
      "Prematuro",
      "Pretérmino"
    ],
    "journal": "The Ecuador Journal of Medicine",
    "pages": "1–13",
    "authors": "Nathaly Alexandra Ortega Barrionuevo, Santiago Vasco",
    "authorAliases": [
      "Santiago Vasco-Morales"
    ],
    "pdf": "https://revistafecim.org/index.php/tejom/article/download/99/70",
    "printedYear": 2021,
    "enfoque": "Metaanálisis con abordaje cualitativo y cuantitativo de estudios sobre prematuros en Ecuador publicados entre 2015 y 2020. Se buscaron trabajos en repositorios y literatura gris; se evaluó su calidad y se analizaron proporciones y heterogeneidad.",
    "importancia": "La publicación señala heterogeneidad y sesgo de publicación en los estudios incluidos, y recomienda investigaciones bien diseñadas, preferentemente multicéntricas.",
    "metadataNote": "La ficha editorial fecha la publicación el 15 de junio de 2022 y asigna el volumen especial a 2022; el PDF conserva la indicación impresa «Año 2021». El año del catálogo corresponde a la ficha editorial. La revisión incluye estudios de 2015–2020."
  },
  "pdc-covid-gestantes-neonatos": {
    "area": "Obstetricia",
    "source": "http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0120-00112023000100009",
    "year": 2023,
    "volume": "71",
    "issue": "1",
    "doiIdentifier": "10.15446/revfacmed.v71n1.97588",
    "journal": "Revista de la Facultad de Medicina",
    "title": "COVID-19 en gestantes y neonatos: características clínicas y hallazgos de laboratorio e imagenológicos. Un resumen de revisiones sistemáticas",
    "authors": "Paola Cristina Toapanta-Pinta, Cristhian Santiago Vasco-Toapanta, Alonso Ernesto Herrera-Tasiguano, Catalina Angélica Verdesoto-Jácome, María José Páez-Pastor, Santiago Vasco-Morales",
    "articleNumber": "e97588",
    "importancia": "Reúne evidencia de revisiones sistemáticas sobre las manifestaciones clínicas y los hallazgos de laboratorio e imagenológicos de COVID-19 en gestantes y neonatos."
  },
  "pdc-anemia-indigena": {
    "year": 2026,
    "volume": "98",
    "pdf": "https://revpediatria.sld.cu/index.php/ped/article/view/8008/3352",
    "area": "Pediatría y nutrición infantil",
    "source": "https://revpediatria.sld.cu/index.php/ped/article/view/8008",
    "doiIdentifier": null,
    "keywords": [
      "anemia",
      "embarazo en adolescencia",
      "pueblos indígenas",
      "estado nutricional",
      "conducta alimentaria",
      "determinantes sociales de la salud",
      "Teorema de Bayes"
    ],
    "journal": "Revista Cubana de Pediatría"
  },
  "pdc-cesarea-multipara": {
    "year": 2026,
    "volume": "94",
    "articleNumber": "e11002",
    "doiIdentifier": "10.24245/gom.v94id.11002",
    "pdf": "https://www.scielo.org.mx/pdf/gom/v94/0300-9041-gom-94-e11002.pdf",
    "area": "Obstetricia y perinatología",
    "source": "https://ginecologiayobstetricia.org.mx/articulo/determinantes-clinicas-obstetricas-y-neonatales-de-la-cesarea-primaria-en-mujeres-multiparas"
  },
  "pdc-lactancia-exclusiva": {
    "area": "Neonatología",
    "source": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12707856/",
    "year": 2025,
    "volume": "78",
    "doiIdentifier": "10.1590/0034-7167-2025-0196",
    "keywords": [
      "Lactancia Materna",
      "Factores de Riesgo",
      "Recién Nacido",
      "Conducta Materna",
      "Salud Materno-Infantil."
    ],
    "journal": "Revista Brasileira de Enfermagem",
    "articleNumber": "e20250196",
    "title": "Factores maternos y neonatales asociados a la lactancia materna exclusiva al egreso hospitalario",
    "issue": "Supl. 4"
  },
  "pdc-gastrosquisis": {
    "doiIdentifier": "10.32641/andespediatr.v96i4.5517",
    "area": "Neonatología",
    "source": "https://doi.org/10.32641/andespediatr.v96i4.5517",
    "year": 2025,
    "volume": "96",
    "issue": "4",
    "keywords": [
      "gastrosquisis",
      "mortalidad",
      "anomalías congénitas",
      "prevalencia",
      "recién nacido",
      "Teorema de Bayes"
    ],
    "journal": "Andes Pediatrica",
    "pages": "503–514"
  },
  "pdc-dermatitis-neurologica": {
    "area": "Neonatología",
    "source": "https://revistas.usp.br/rmrp/es/article/view/230186",
    "year": 2025,
    "volume": "58",
    "issue": "3",
    "doiIdentifier": "10.11606/issn.2176-7262.rmrp.2025.230186",
    "keywords": [
      "Dermatite atópica",
      "Imunoglobulina E",
      "Desordens neurológicas",
      "Neuroimunomodulação",
      "Lactentes"
    ],
    "journal": "Medicina (Ribeirão Preto)",
    "authors": "Santiago Vasco-Morales, Edson Zangiacomi Martinez, Paola Cristina Toapanta-Pinta, Walusa Assad, Davi Aragon, Renata Gomes de Oliveira, Pérsio Roxo-Junior",
    "articleNumber": "e-230186"
  },
  "pdc-anomalias-congenitas": {
    "doiIdentifier": "10.15446/revfacmed.v72n4.113715",
    "area": "Neonatología",
    "source": "https://doi.org/10.15446/revfacmed.v72n4.113715",
    "year": 2024,
    "volume": "72",
    "issue": "4",
    "keywords": [
      "Anomalías congénitas",
      "Factores de riesgo",
      "Recién nacido",
      "Perinatología",
      "Salud reproductiva"
    ],
    "journal": "Revista de la Facultad de Medicina",
    "articleNumber": "e113715"
  },
  "pdc-violencia-gestacional": {
    "year": 2026,
    "volume": "7",
    "doiIdentifier": "10.3389/fgwh.2026.1920014",
    "pdf": "https://www.frontiersin.org/journals/global-womens-health/articles/10.3389/fgwh.2026.1920014/pdf",
    "area": "Epidemiología perinatal y salud neonatal",
    "source": "https://www.frontiersin.org/journals/global-womens-health/articles/10.3389/fgwh.2026.1920014/full",
    "keywords": [
      "violence against women; information systems; premature birth; Bayes theorem; substance & alcohol use; administrative systems; logistic models for missing indicators; underreported"
    ],
    "journal": "Frontiers in Global Women's Health",
    "articleNumber": "1920014"
  },
  "pdc-experiencia-tutores": {
    "year": 2026,
    "volume": "11",
    "issue": "1",
    "pages": "92–106",
    "pdf": "https://revistas.utb.edu.ec/index.php/magazine/article/view/4308/3948",
    "area": "Educación médica",
    "source": "https://revistas.utb.edu.ec/index.php/magazine/article/view/4308",
    "doiIdentifier": null,
    "keywords": [
      "Educación Médica, Evaluación docente, Teorema de Bayes, Evaluación Educacional, Educación Basada en Competencias"
    ],
    "journal": "Magazine de las Ciencias: Revista de Investigación e Innovación"
  }
};

articles.push(
 {id:'pdc-violencia-gestacional',title:'Recorded gestational violence and neonatal outcomes in a cohort of deliveries requiring neonatal hospitalization: a 15-year hospital-based perinatal registry study',authors:'Santiago Vasco-Morales, Mercy Rosero-Quintana, Alexandra Amaguaya-Guala, Emily Tamayo-Saenz, Paola Toapanta-Pinta',journal:"Frontiers in Global Women's Health",year:2026,volume:'7',category:'Epidemiología perinatal y salud neonatal',doi:'https://doi.org/10.3389/fgwh.2026.1920014',doiIdentifier:'10.3389/fgwh.2026.1920014',source:'https://www.frontiersin.org/journals/global-womens-health/articles/10.3389/fgwh.2026.1920014/full',pdf:'https://www.frontiersin.org/journals/global-womens-health/articles/10.3389/fgwh.2026.1920014/pdf',img:'assets/pdc-prematuros-ecuador.webp',enfoque:'Estudio de registros perinatales sobre violencia gestacional registrada y desenlaces neonatales.',importancia:'Consulta la publicación original para conocer los métodos, resultados y limitaciones.',keywords:['violencia gestacional','epidemiología','salud neonatal']},
 {id:'pdc-experiencia-tutores',title:'Impacto de la experiencia de los tutores en la satisfacción estudiantil durante proyectos integradores de saberes',authors:'Paola Toapanta Pinta, Gabriel Vasco Toapanta, Kevin Sidel Almache, Santiago Vasco Morales',journal:'Magazine de las Ciencias: Revista de Investigación e Innovación',year:2026,volume:'11',issue:'1',pages:'92–106',category:'Educación médica',doi:'https://revistas.utb.edu.ec/index.php/magazine/article/view/4308',source:'https://revistas.utb.edu.ec/index.php/magazine/article/view/4308',pdf:'https://revistas.utb.edu.ec/index.php/magazine/article/view/4308/3948',img:'assets/pdc-pis-proyecto.webp',enfoque:'Estudio sobre la experiencia de los tutores y la satisfacción estudiantil en proyectos integradores de saberes.',importancia:'Consulta la publicación original para conocer los métodos, resultados y limitaciones.',keywords:['evaluación docente','Teorema de Bayes','educación basada en competencias']}
);
// Apply verified overrides before deriving display fields, including explicit null DOI values.
const catalog = articles.map(a => {
 const record = {year:null, ...a, ...bibliography[a.id]};
 return {...record, area:record.area || record.category, source:record.source || record.doi,
  doiIdentifier:Object.prototype.hasOwnProperty.call(record, 'doiIdentifier') ? record.doiIdentifier :
   (record.doi?.startsWith('https://doi.org/') ? record.doi.slice(16) : null)};
});
