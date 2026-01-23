// Planes de estudio organizados por programa
const planesEstudio = {
  bachillerato: [
    {
      id: 1,
      title: "1° Semestre",
      subjects: [
        "Informática I",
        "Taller de Lectura y Redacción I",
        "Metodología de la Investigación",
        "Matemáticas I",
        "Química I",
        "Inglés I",
        "Ética I",
        "Aprendizaje Autogestivo",
      ],
    },
    {
      id: 2,
      title: "2° Semestre",
      subjects: [
        "Informática II",
        "Taller de Lectura y Redacción II",
        "Introducción a las Ciencias Sociales",
        "Matemáticas II",
        "Química II",
        "Inglés II",
        "Ética II",
        "Desarrollo Humano",
      ],
    },
    {
      id: 3,
      title: "3° Semestre",
      subjects: [
        "Biología I",
        "Literatura I",
        "Física I",
        "Matemáticas III",
        "Historia de México I",
        "Inglés III",
      ],
    },
    {
      id: 4,
      title: "4° Semestre",
      subjects: [
        "Biología II",
        "Literatura II",
        "Física II",
        "Matemáticas IV",
        "Historia de México II",
        "Inglés IV",
      ],
    },
    {
      id: 5,
      title: "5° Semestre",
      subjects: [
        "Geografía",
        "Estructura Socioeconómica de México",
        "Cálculo diferencial",
        "Administración I (Formación Empresarial I)",
        "Sociología I",
        "Contabilidad I",
      ],
    },
    {
      id: 6,
      title: "6° Semestre",
      subjects: [
        "Filosofía",
        "Ecología y medio ambiente",
        "Historia universal contemporánea",
        "Cálculo Integral",
        "Administración II (Formación Empresarial II)",
        "Sociología II",
        "Contabilidad II",
      ],
    },
  ],

  administracion: [
    {
      id: 1,
      title: "1° Semestre",
      subjects: [
        "Informática I",
        "Taller de Lectura y Redacción I",
        "Metodología de la Investigación",
        "Matemáticas I",
        "Química I",
        "Inglés I",
        "Ética I",
        "Aprendizaje Autogestivo",
      ],
    },
    {
      id: 2,
      title: "2° Semestre",
      subjects: [
        "Informática II",
        "Taller de Lectura y Redacción II",
        "Introducción a las Ciencias Sociales",
        "Matemáticas II",
        "Química II",
        "Inglés II",
        "Ética II",
        "Desarrollo Humano",
      ],
    },
    {
      id: 3,
      title: "3° Semestre",
      subjects: [
        "Biología I",
        "Literatura I",
        "Física I",
        "Matemáticas III",
        "Historia de México I",
        "Inglés III",
      ],
    },
    {
      id: 4,
      title: "4° Semestre",
      subjects: [
        "Biología II",
        "Literatura II",
        "Física II",
        "Matemáticas IV",
        "Historia de México II",
        "Inglés IV",
      ],
    },
    {
      id: 5,
      title: "5° Semestre",
      subjects: [
        "Geografía",
        "Estructura Socioeconómica de México",
        "Cálculo diferencial",
        "Administración I (Formación Empresarial I)",
        "Sociología I",
        "Contabilidad I",
      ],
    },
    {
      id: 6,
      title: "6° Semestre",
      subjects: [
        "Filosofía",
        "Ecología y medio ambiente",
        "Historia universal contemporánea",
        "Cálculo Integral",
        "Administración II (Formación Empresarial II)",
        "Sociología II",
        "Contabilidad II",
      ],
    },
  ],

  licenciaturaEnAdministracion: [
    {
      id: 1,
      title: "1er bloque",
      subjects: [
        "Estrategias de aprendizaje a distancia",
        "Fundamentos de contabilidad",
        "Fundamentos de mercadotecnia",
      ],
    },
    {
      id: 2,
      title: "2do bloque",
      subjects: [
        "Redacción profesional",
        "Fundamentos de administración",
        "Sistemas de información en los negocios",
      ],
    },
    {
      id: 3,
      title: "3er bloque",
      subjects: [
        "Comunicación en las organizaciones",
        "Matemáticas financieras",
        "Administración de recursos humanos",
      ],
    },
    {
      id: 4,
      title: "4to bloque",
      subjects: [
        "Estadística para los negocios",
        "Derecho empresarial",
        "Fundamentos de economía",
      ],
    },
    {
      id: 5,
      title: "5to bloque",
      subjects: [
        "Negociación",
        "Finanzas para los negocios",
        "Administración estratégica",
      ],
    },
    {
      id: 6,
      title: "6to bloque",
      subjects: [
        "Contabilidad administrativa y de costos",
        "Operaciones en la empresa",
        "Desarrollo organizacional",
      ],
    },
    {
      id: 7,
      title: "7mo bloque",
      subjects: [
        "Plan de negocios",
        "Administración de pequeñas empresas",
        "Cadena de suministros",
      ],
    },
    {
      id: 8,
      title: "8vo bloque",
      subjects: [
        "Competitividad empresarial",
        "Simulación de negocios",
        "Gestión de la innovación",
      ],
    },
    {
      id: 9,
      title: "9no bloque",
      subjects: [
        "Ética y valores en la empresa",
        "Administración de proyectos",
        "Teoría de la comunicación",
      ],
    },
    {
      id: 10,
      title: "10mo bloque",
      subjects: [
        "Gestión del capital humano",
        "Formulación y evaluación de proyectos de inversión",
        "Administración de riesgos en proyectos",
      ],
    },
  ],

  licenciaturaEnAdministracionDeSistemasDeLaInformacion: [
    {
      id: 1,
      title: "1er bloque",
      subjects: [
        "Estrategia de aprendizaje a distancia",
        "Fundamentos de contabilidad",
        "Fundamentos de mercadotecnia",
      ],
    },
    {
      id: 2,
      title: "2do bloque",
      subjects: [
        "Redacción profesional",
        "Fundamentos de administración",
        "Sistemas de información en los negocios",
      ],
    },
    {
      id: 3,
      title: "3er bloque",
      subjects: [
        "Comunicación en las organizaciones",
        "Matemáticas financieras",
        "Administración de los recursos humanos",
      ],
    },
    {
      id: 4,
      title: "4to bloque",
      subjects: [
        "Estadísticas para los negocios",
        "Derecho empresarial",
        "Fundamentos de economía",
      ],
    },
    {
      id: 5,
      title: "5to bloque",
      subjects: [
        "Negociación",
        "Bases de programación",
        "Administración estratégica",
      ],
    },
    {
      id: 6,
      title: "6to bloque",
      subjects: [
        "Programación estructurada",
        "Telecomunicaciones",
        "Sistemas operativos",
      ],
    },
    {
      id: 7,
      title: "7mo bloque",
      subjects: [
        "Administración de bases de datos",
        "Redes de computadoras",
        "Negocios electrónicos",
      ],
    },
    {
      id: 8,
      title: "8vo bloque",
      subjects: [
        "Lenguaje orientado a objetos",
        "Seguridad y auditoría en informática",
        "Soluciones móviles",
      ],
    },
    {
      id: 9,
      title: "9no bloque",
      subjects: [
        "Ética y valores en la empresa",
        "Administración de proyectos",
        "Consultorio en informática",
      ],
    },
    {
      id: 10,
      title: "10mo bloque",
      subjects: [
        "Formulación y evaluación de proyectos en inversión",
        "Administración de riesgos en proyectos",
        "Minería y almacenamiento de datos",
      ],
    },
  ],

  licenciaturaEnContaduria: [
    {
      id: 1,
      title: "1er bloque",
      subjects: [
        "Estrategias de aprendizaje a distancia",
        "Fundamentos de contabilidad",
        "Fundamentos de mercadotecnia",
      ],
    },
    {
      id: 2,
      title: "2do bloque",
      subjects: [
        "Redacción profesional",
        "Fundamentos de administración",
        "Sistemas de información en los negocios",
      ],
    },
    {
      id: 3,
      title: "3er bloque",
      subjects: [
        "Comunicación en las organizaciones",
        "Matemáticas financieras",
        "Administración de recursos",
      ],
    },
    {
      id: 4,
      title: "4to bloque",
      subjects: [
        "Estadísticas para negocios",
        "Derecho empresarial",
        "Fundamentos de economía",
      ],
    },
    {
      id: 5,
      title: "5to bloque",
      subjects: [
        "Negociación",
        "Finanzas para los negocios",
        "Contabilidad intermedia del balance",
      ],
    },
    {
      id: 6,
      title: "6to bloque",
      subjects: [
        "Contabilidad intermedia de resultados",
        "Contabilidad administrativa",
        "Análisis e interpretación de estados financieros",
      ],
    },
    {
      id: 7,
      title: "7mo bloque",
      subjects: [
        "Plan de negocios",
        "Contabilidad de costos",
        "Bases fiscales",
      ],
    },
    {
      id: 8,
      title: "8vo bloque",
      subjects: [
        "Impuestos para personas físicas",
        "Contabilidad avanzada",
        "Sistema financiero mexicano",
      ],
    },
    {
      id: 9,
      title: "9no bloque",
      subjects: [
        "Ética y valores en la empresa",
        "Impuestos para personas morales",
        "Sistemas de información para contabilidad",
      ],
    },
    {
      id: 10,
      title: "10mo bloque",
      subjects: [
        "Formulación y evaluación de proyectos de inversión",
        "Mercado de valores y dinero",
        "Auditoría",
      ],
    },
  ],

  licenciaturaEnMercadotecnia: [
    {
      id: 1,
      title: "1er bloque",
      subjects: [
        "Estrategias de aprendizaje a distancia",
        "Fundamentos de contabilidad",
        "Fundamentos de mercadotecnia",
      ],
    },
    {
      id: 2,
      title: "2do bloque",
      subjects: [
        "Redacción profesional",
        "Fundamentos de administración",
        "Sistemas de información en los negocios",
      ],
    },
    {
      id: 3,
      title: "3er bloque",
      subjects: [
        "Comunicación en las organizaciones",
        "Matemáticas financieras",
        "Administración de recursos humanos",
      ],
    },
    {
      id: 4,
      title: "4to bloque",
      subjects: [
        "Estadísticas para los negocios",
        "Derecho empresarial",
        "Fundamentos de economía",
      ],
    },
    {
      id: 5,
      title: "5to bloque",
      subjects: [
        "Negociación",
        "Mezcla de mercadotecnia",
        "Administración estratégica",
      ],
    },
    {
      id: 6,
      title: "6to bloque",
      subjects: [
        "Contabilidad administrativa y de costos",
        "Herramientas y estrategias de venta",
        "Segmentación de mercados",
      ],
    },
    {
      id: 7,
      title: "7mo bloque",
      subjects: [
        "Plan de negocios",
        "Psicología del consumidor",
        "Desarrollo emprendedor e innovación",
      ],
    },
    {
      id: 8,
      title: "8vo bloque",
      subjects: [
        "Neuro-mercadotecnia",
        "Estrategia de mercadotecnia",
        "Relaciones públicas",
      ],
    },
    {
      id: 9,
      title: "9no bloque",
      subjects: [
        "Ética y valores en la empresa",
        "Teoría de la comunicación",
        "Dirección de mercadotecnia",
      ],
    },
    {
      id: 10,
      title: "10mo bloque",
      subjects: [
        "Promoción, publicidad e identidad de marca",
        "Negocios por internet",
        "Comunicación integral en mercadotecnia",
      ],
    },
  ],

  licenciaturaEnComunicacion: [
    {
      id: 1,
      title: "1er bloque",
      subjects: [
        "Estrategias de aprendizaje a distancia",
        "Fundamentos de la comunicación",
        "Estadística I",
      ],
    },
    {
      id: 2,
      title: "2do bloque",
      subjects: [
        "Estadística II",
        "Habilidades socioemocionales",
        "Historia contemporánea",
      ],
    },
    {
      id: 3,
      title: "3er bloque",
      subjects: [
        "Informática",
        "Habilidades profesionales",
        "Redacción y análisis literario",
      ],
    },
    {
      id: 4,
      title: "4to bloque",
      subjects: [
        "Sociología de la comunicación",
        "Expresión creativa en la comunicación",
        "Mercadotecnia",
      ],
    },
    {
      id: 5,
      title: "5to bloque",
      subjects: [
        "Liderazgo y trabajo colaborativo",
        "Métodos y herramientas de investigación",
        "Teorías de la comunicación",
      ],
    },
    {
      id: 6,
      title: "6to bloque",
      subjects: [
        "Estrategias de negociación para la resolución de problemas",
        "Principios de la comunicación masiva",
        "Técnicas de la investigación en la comunicación",
      ],
    },
    {
      id: 7,
      title: "7mo bloque",
      subjects: [
        "Fotografía",
        "Introducción al diseño digital",
        "Periodismo digital",
      ],
    },
    {
      id: 8,
      title: "8vo bloque",
      subjects: [
        "Legislación de los medios",
        "Comunicación y desarrollo organizacional",
        "Taller de emprendimiento y comunicación aplicada",
      ],
    },
    {
      id: 9,
      title: "9no bloque",
      subjects: [
        "Edición y aplicación del diseño digital",
        "Comunicación intercultural",
        "Apreciación cinematográfica",
      ],
    },
    {
      id: 10,
      title: "10mo bloque",
      subjects: [
        "Producción y desarrollo de contenidos multimedia",
        "Periodismo y opinión pública",
        "Guionismo",
      ],
    },
  ],

  licenciaturaEnEducacion: [
    {
      id: 1,
      title: "1er bloque",
      subjects: [
        "Estrategias de aprendizaje a distancia",
        "Filosofía y epistemología de la educación",
        "Historia de la educación",
      ],
    },
    {
      id: 2,
      title: "2do bloque",
      subjects: [
        "Psicología de la educación",
        "Teorías de aprendizaje",
        "Psicología del desarrollo: Infancia",
      ],
    },
    {
      id: 3,
      title: "3er bloque",
      subjects: [
        "Educación contemporánea",
        "Política educativa",
        "Psicología del desarrollo: adolescencia",
      ],
    },
    {
      id: 4,
      title: "4to bloque",
      subjects: [
        "Estadística de educación",
        "Psicología del desarrollo: adulto y adulto mayor",
        "Didáctica",
      ],
    },
    {
      id: 5,
      title: "5to bloque",
      subjects: ["Pedagogía", "Sociología", "Metodología de la investigación"],
    },
    {
      id: 6,
      title: "6to bloque",
      subjects: [
        "Evaluación del aprendizaje",
        "Diseño curricular",
        "Planeación educativa",
      ],
    },
    {
      id: 7,
      title: "7mo bloque",
      subjects: [
        "Investigación educativa",
        "Formación y evaluación docente",
        "Ética",
      ],
    },
    {
      id: 8,
      title: "8vo bloque",
      subjects: [
        "Orientación educativa",
        "Andragogía",
        "Tecnología aplicada a la educación",
      ],
    },
    {
      id: 9,
      title: "9no bloque",
      subjects: [
        "Modelos del diseño instruccional",
        "Diseño de entornos virtuales de aprendizaje a distancia",
        "Inclusión educativa",
      ],
    },
    {
      id: 10,
      title: "10mo bloque",
      subjects: [
        "Administración en la educación",
        "Evaluación de programas educativos",
        "Seminario de educación",
      ],
    },
  ],

  licenciaturaEnPsicologia: [
    {
      id: 1,
      title: "1er bloque",
      subjects: [
        "Estrategias de aprendizaje a distancia",
        "Metodología de la investigación",
        "Bases filosóficas y epistemológicas de la psicología",
      ],
    },
    {
      id: 2,
      title: "2do bloque",
      subjects: [
        "Procesos psicológicos",
        "Estadística",
        "Psicología del desarrollo: de la concepción hasta la senectud",
      ],
    },
    {
      id: 3,
      title: "3er bloque",
      subjects: [
        "Bases psicobiológicas del comportamiento",
        "Metodología cuantitativa y cualitativa",
        "Teorías y corrientes psicológicas",
      ],
    },
    {
      id: 4,
      title: "4to bloque",
      subjects: [
        "Comunicación humana",
        "Teorías de la personalidad",
        "Teorías y técnicas de la entrevista",
      ],
    },
    {
      id: 5,
      title: "5to bloque",
      subjects: [
        "Teorías y dinámicas de grupos",
        "Sexualidad humana",
        "Psicopatología de la infancia",
      ],
    },
    {
      id: 6,
      title: "6to bloque",
      subjects: [
        "Psicopatología del adulto",
        "Psicometría de la infancia",
        "Psicometría de la adultez",
      ],
    },
    {
      id: 7,
      title: "7mo bloque",
      subjects: [
        "Psicodiagnóstico infantil",
        "Psicodiagnóstico del adulto",
        "Psicología social y comunitaria",
      ],
    },
    {
      id: 8,
      title: "8vo bloque",
      subjects: [
        "Principios teóricos de la psicología educativa",
        "Psicología de las organizaciones",
        "Intervenciones en crisis y emergencias psicológicas",
      ],
    },
    {
      id: 9,
      title: "9no bloque",
      subjects: [
        "Evaluación e intervención en educación especial",
        "Evaluación y diagnóstico de las organizaciones",
        "Tanatología",
      ],
    },
    {
      id: 10,
      title: "10mo bloque",
      subjects: [
        "Psicología forense",
        "Orientación asesoría y tutoría",
        "Evaluación e intervención psicoeducativa",
      ],
    },
  ],

  licenciaturaEnComercioYNegociosGlobales: [
    {
      id: 1,
      title: "1er bloque",
      subjects: [
        "Estrategias de aprendizaje a distancia",
        "Mercado y competencia internacional",
        "Metodología de la investigación",
      ],
    },
    {
      id: 2,
      title: "2do bloque",
      subjects: [
        "Matemáticas financieras",
        "Cotizaciones y mercado de divisas",
        "Microeconomía",
      ],
    },
    {
      id: 3,
      title: "3er bloque",
      subjects: [
        "Estadísticas para los negocios",
        "Bases contables",
        "Macroeconomía",
      ],
    },
    {
      id: 4,
      title: "4to bloque",
      subjects: [
        "Investigación de mercados",
        "Contabilidad de costos",
        "Derecho mercantil",
      ],
    },
    {
      id: 5,
      title: "5to bloque",
      subjects: [
        "Comercialización internacional",
        "Contabilidad de finanzas",
        "Derecho laboral",
      ],
    },
    {
      id: 6,
      title: "6to bloque",
      subjects: [
        "Geografía económica y política",
        "Transportación y canales de distribución internacional",
        "Derecho fiscal",
      ],
    },
    {
      id: 7,
      title: "7mo bloque",
      subjects: [
        "Política comercial internacional",
        "Finanzas empresariales",
        "Análisis y clasificación arancelaria",
      ],
    },
    {
      id: 8,
      title: "8vo bloque",
      subjects: [
        "Administración de la cadena",
        "Tratados comerciales internacionales",
        "Legislación aduanera aplicada",
      ],
    },
    {
      id: 9,
      title: "9no bloque",
      subjects: [
        "Mercadotecnia global",
        "Estrategias de comercialización en redes sociales",
        "Legislación comercial internacional",
      ],
    },
    {
      id: 10,
      title: "10mo bloque",
      subjects: [
        "Seminario de comercio y negocios",
        "Dirección de plan de exportación",
        "Análisis de comercio",
      ],
    },
  ],

  licenciaturaEnDisenoGrafico: [
    {
      id: 1,
      title: "1er bloque",
      subjects: [
        "Estadística de aprendizaje a distancia",
        "Teorías del Diseño Gráfico",
        "Dibujo básico",
      ],
    },
    {
      id: 2,
      title: "2do bloque",
      subjects: [
        "Diseño vectorial I",
        "Historia del arte",
        "Bases bidimensionales y tridimensionales",
      ],
    },
    {
      id: 3,
      title: "3er bloque",
      subjects: [
        "Diseño vectorial II",
        "Teoría y psicología del color",
        "Comunicación visual",
      ],
    },
    {
      id: 4,
      title: "4to bloque",
      subjects: ["Fotografía básica", "Diseño digital I", "Métodos del diseño"],
    },
    {
      id: 5,
      title: "5to bloque",
      subjects: [
        "Fotografía creativa y publicitaria",
        "Diseño digital II",
        "Diseño de logotipos",
      ],
    },
    {
      id: 6,
      title: "6to bloque",
      subjects: ["Diseño publicitario", "Diseño digital III", "Preprensa"],
    },
    {
      id: 7,
      title: "7mo bloque",
      subjects: [
        "Mercadotecnia digital",
        "Diseño editorial",
        "Audio visual I y audio digital",
      ],
    },
    {
      id: 8,
      title: "8vo bloque",
      subjects: ["Audiovisual II", "Imagen corporativa", "Diseño web"],
    },
    {
      id: 9,
      title: "9no bloque",
      subjects: [
        "Diseño de plataformas digitales",
        "Animación 2D",
        "Diseño de envase y empaque",
      ],
    },
    {
      id: 10,
      title: "10mo bloque",
      subjects: [
        "Metodología de la investigación",
        "Producción y arte digital",
        "Animación 3D",
      ],
    },
  ],

  ingenieriaIndustrial: [
    {
      id: 1,
      title: "1er bloque",
      subjects: [
        "Estrategias de aprendizaje a distancia",
        "Matemáticas en Ingeniería",
        "Introducción a la Ingeniería Industrial",
      ],
    },
    {
      id: 2,
      title: "2do bloque",
      subjects: [
        "Administración I",
        "Administración II",
        "Cálculo Diferencial",
      ],
    },
    {
      id: 3,
      title: "3er bloque",
      subjects: ["Estudio del Trabajo I", "Contabilidad", "Estática"],
    },
    {
      id: 4,
      title: "4to bloque",
      subjects: [
        "Teoría General de Sistemas",
        "Cálculo Integral",
        "Contabilidad de Costos",
      ],
    },
    {
      id: 5,
      title: "5to bloque",
      subjects: [
        "Estudio del Trabajo II",
        "Administración Estratégica",
        "Dinámica",
      ],
    },
    {
      id: 6,
      title: "6to bloque",
      subjects: [
        "Probabilidad y Estadística I",
        "Procesos de Manufactura",
        "Ciencias de Materiales",
      ],
    },
    {
      id: 7,
      title: "7mo bloque",
      subjects: [
        "Probabilidad y Estadística II",
        "Investigación de Operaciones I",
        "Termodinámica",
      ],
    },
    {
      id: 8,
      title: "8vo bloque",
      subjects: [
        "Control de Calidad",
        "Automatización",
        "Investigación de Operaciones II",
      ],
    },
    {
      id: 9,
      title: "9no bloque",
      subjects: [
        "Planeación y Control de la Producción I",
        "Ergonomía y Seguridad Industrial",
        "Ingeniería Económica",
      ],
    },
    {
      id: 10,
      title: "10mo bloque",
      subjects: [
        "Planeación y Control de la Producción II",
        "Ingeniería de Proyectos",
        "Seminario de Titulación",
      ],
    },
  ],

  maestriaEnAdministracionDeNegocios: [
    {
      id: 1,
      title: "1er bloque",
      subjects: [
        "Administración",
        "Contabilidad Administrativa",
        "Derecho Empresarial",
      ],
    },
    {
      id: 2,
      title: "2do bloque",
      subjects: [
        "Administración del Capital Humano",
        "Métodos Cuantitativos",
        "Economía",
      ],
    },
    {
      id: 3,
      title: "3er bloque",
      subjects: [
        "Habilidades Directivas y Gerenciales",
        "Finanzas Corporativas",
        "Administración de Cadena de Suministros",
      ],
    },
    {
      id: 4,
      title: "4to bloque",
      subjects: [
        "Mercadotecnia Estratégica",
        "Calidad y Productividad",
        "Estadística Aplicada a los Negocios",
      ],
    },
    {
      id: 5,
      title: "5to bloque",
      subjects: [
        "Desarrollo Organizacional",
        "Fundamentos de la Administración de Proyectos",
        "Administración en la Calidad y Riesgos en Proyectos",
      ],
    },
  ],

  maestriaEnEducacion: [
    {
      id: 1,
      title: "1er bloque",
      subjects: [
        "Filosofía de la Educación",
        "Metodología de la Investigación I",
        "Teorías del Aprendizaje",
      ],
    },
    {
      id: 2,
      title: "2do bloque",
      subjects: [
        "Historia de la Educación en México",
        "Metodología de la Investigación II",
        "Psicología de la Educación",
      ],
    },
    {
      id: 3,
      title: "3er bloque",
      subjects: [
        "Legislación Educativa",
        "Tecnología Educativa",
        "Modelos y Estrategias de Instrucción",
      ],
    },
    {
      id: 4,
      title: "4to bloque",
      subjects: [
        "Evaluación Educativa",
        "Planeación y Gestión de Instituciones Educativas",
        "Diseño Curricular",
      ],
    },
    {
      id: 5,
      title: "5to bloque",
      subjects: [
        "Educación por Competencias",
        "Educación Comparada",
        "Liderazgo y Dirección",
      ],
    },
  ],
};

export function obtenerPlanEstudios(programa) {
  const plan = planesEstudio[programa];

  if (!plan) {
    console.warn(`No se encontró el plan de estudios para: ${programa}`);
    return [];
  }

  return plan;
}
