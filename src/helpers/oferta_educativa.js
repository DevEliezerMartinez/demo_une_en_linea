// ============================================
// ESTRUCTURA NORMALIZADA Y ESCALABLE
// ============================================
//

const ofertaEducativa = {
  // 1. CATÁLOGO DE PROGRAMAS
  programas: {
    // --- Licenciaturas: Negocios y Administrativas ---
    administracion: {
      id: "administracion",
      nombre: "Administración",
      nivel: "licenciatura",
      area: "negocios_administrativas",
      url: "/oferta-academica/licenciaturas/administracion",
      imagen: "Administracion2",
      descripcion:
        "Desarrolla habilidades de liderazgo y gestión estratégica para dirigir organizaciones hacia el éxito en un entorno competitivo.",
    },
    contaduria: {
      id: "contaduria",
      nombre: "Contaduría",
      nivel: "licenciatura",
      area: "negocios_administrativas",
      url: "/oferta-academica/licenciaturas/contaduria",
      imagen: "Contaduria",
      descripcion:
        "Domina el lenguaje financiero de los negocios, gestionando información fiscal y contable para la correcta toma de decisiones.",
    },
    mercadotecnia: {
      id: "mercadotecnia",
      nombre: "Mercadotecnia",
      nivel: "licenciatura",
      area: "negocios_administrativas",
      url: "/oferta-academica/licenciaturas/mercadotecnia",
      imagen: "Mercadotecnia",
      descripcion:
        "Crea estrategias de mercado innovadoras, analizando el comportamiento del consumidor y gestionando marcas de alto impacto.",
    },
    comercio_negocios_globales: {
      id: "comercio_negocios_globales",
      nombre: "Comercio y Negocios Globales",
      nivel: "licenciatura",
      area: "negocios_administrativas",
      url: "/oferta-academica/licenciaturas/comercio_y_negocios_globales",
      imagen: "ComercioNegocios",
      descripcion:
        "Conviértete en un experto en operaciones internacionales, logística y estrategias de expansión en mercados globales.",
    },

    // --- Licenciaturas: Tecnología e Ingeniería ---
    administracion_sistemas_informacion: {
      id: "administracion_sistemas_informacion",
      nombre: "Administración de Sistemas de Información",
      nivel: "licenciatura",
      area: "tecnologia_ingenieria",
      url: "/oferta-academica/licenciaturas/administracion_sistemas_informacion",
      imagen: "SistemasInformacion",
      descripcion:
        "Integra la tecnología y los negocios optimizando flujos de información y gestionando infraestructura tecnológica empresarial.",
    },
    ingenieria_industrial: {
      id: "ingenieria_industrial",
      nombre: "Ingeniería Industrial",
      nivel: "licenciatura",
      area: "tecnologia_ingenieria",
      url: "/oferta-academica/licenciaturas/ingenieria_industrial",
      imagen: "IngenieriaIndustrial",
      descripcion:
        "Optimiza procesos productivos y de servicios, mejorando la calidad y eficiencia en organizaciones complejas.",
    },

    // --- Licenciaturas: Sociales y Humanidades ---
    comunicacion: {
      id: "comunicacion",
      nombre: "Comunicación",
      nivel: "licenciatura",
      area: "ciencias_sociales_humanidades",
      url: "/oferta-academica/licenciaturas/comunicacion",
      imagen: "Comunicacion",
      descripcion:
        "Domina los medios digitales y tradicionales para crear mensajes efectivos en entornos corporativos, periodísticos y sociales.",
    },
    derecho: {
      id: "derecho",
      nombre: "Derecho",
      nivel: "licenciatura",
      area: "ciencias_sociales_humanidades",
      url: "/oferta-academica/licenciaturas/derecho",
      imagen: "Derecho",
      descripcion:
        "Fórmate con una sólida base jurídica para la defensa de la justicia, la asesoría legal y la resolución de conflictos.",
    },
    educacion: {
      id: "educacion",
      nombre: "Educación",
      nivel: "licenciatura",
      area: "ciencias_sociales_humanidades",
      url: "/oferta-academica/licenciaturas/educacion",
      imagen: "Educacion",
      descripcion:
        "Transforma vidas a través de la enseñanza, diseñando modelos pedagógicos innovadores y gestionando instituciones educativas.",
    },
    psicologia: {
      id: "psicologia",
      nombre: "Psicología",
      nivel: "licenciatura",
      area: "ciencias_sociales_humanidades",
      url: "/oferta-academica/licenciaturas/psicologia",
      imagen: "Psicologia",
      descripcion:
        "Comprende el comportamiento humano y promueve la salud mental con un enfoque clínico, social y organizacional.",
    },

    // --- Licenciaturas: Diseño ---
    diseno_grafico: {
      id: "diseno_grafico",
      nombre: "Diseño Gráfico",
      nivel: "licenciatura",
      area: "arquitectura_diseno",
      url: "/oferta-academica/licenciaturas/diseno_grafico",
      imagen: "DisenoGrafico",
      descripcion:
        "Comunica ideas visualmente mediante el dominio del diseño digital, editorial, publicitario y de identidad corporativa.",
    },

    // --- Maestrías ---
    maestria_educacion: {
      id: "maestria_educacion",
      nombre: "Maestría en Educación",
      nivel: "maestria",
      area: "ciencias_sociales_humanidades",
      url: "/oferta-academica/maestrias/maestria_educacion",
      imagen: "MaestriaEducacion",
      descripcion:
        "Especialízate en docencia y gestión educativa de alto nivel para liderar la innovación en el aprendizaje.",
    },
    maestria_administracion_negocios: {
      id: "maestria_administracion_negocios",
      nombre: "Maestría en Administración de Negocios",
      nivel: "maestria",
      area: "negocios_administrativas",
      url: "/oferta-academica/maestrias/maestria_administracion_negocios",
      imagen: "MBA",
      descripcion:
        "Potencia tu perfil directivo con herramientas avanzadas de gestión, finanzas y estrategia empresarial global.",
    },

    // Bachilleratos
    bachillerato: {
      id: "bachillerato",
      nombre: "Bachillerato",
      nivel: "bachillerato",
      area: "bachillerato",
      url: "/oferta-academica/bachillerato",
      imagen: "Bachillerato",
      descripcion:
        "Formación integral con enfoque humanista y visión global para enfrentar los retos del futuro.",
    },
  },

  // 2. INCORPORACIONES
  incorporaciones: {
    sicyt: { id: "sicyt", nombre: "SICYT" },
  },

  // 3. OFERTAS (Relaciones: Todos con SICYT)
  ofertas: [
    { programa_id: "administracion", incorporacion_id: "sicyt", activo: true },
    {
      programa_id: "administracion_sistemas_informacion",
      incorporacion_id: "sicyt",
      activo: true,
    },
    { programa_id: "contaduria", incorporacion_id: "sicyt", activo: true },
    { programa_id: "mercadotecnia", incorporacion_id: "sicyt", activo: true },
    {
      programa_id: "comercio_negocios_globales",
      incorporacion_id: "sicyt",
      activo: true,
    },
    {
      programa_id: "ingenieria_industrial",
      incorporacion_id: "sicyt",
      activo: true,
    },
    { programa_id: "comunicacion", incorporacion_id: "sicyt", activo: true },
    { programa_id: "derecho", incorporacion_id: "sicyt", activo: true },
    { programa_id: "educacion", incorporacion_id: "sicyt", activo: true },
    { programa_id: "psicologia", incorporacion_id: "sicyt", activo: true },
    { programa_id: "diseno_grafico", incorporacion_id: "sicyt", activo: true },
    {
      programa_id: "maestria_educacion",
      incorporacion_id: "sicyt",
      activo: true,
    },
    {
      programa_id: "maestria_administracion_negocios",
      incorporacion_id: "sicyt",
      activo: true,
    },
    {
      programa_id: "bachillerato",
      incorporacion_id: "sicyt",
      activo: true,
    },
  ],

  // 4. ÁREAS DE CONOCIMIENTO (Generadas automáticamente)
  areas: {
    negocios_administrativas: {
      id: "negocios_administrativas",
      nombre: "Negocios y Administrativas",
    },
    tecnologia_ingenieria: {
      id: "tecnologia_ingenieria",
      nombre: "Tecnología e Ingeniería",
    },
    ciencias_sociales_humanidades: {
      id: "ciencias_sociales_humanidades",
      nombre: "Ciencias Sociales y Humanidades",
    },
    arquitectura_diseno: {
      id: "arquitectura_diseno",
      nombre: "Arquitectura y Diseño",
    },
  },
};

// Búsqueda flexible
function buscarOfertas(filtros = {}) {
  let resultados = ofertaEducativa.ofertas.filter((o) => o.activo);

  if (filtros.programa_id) {
    resultados = resultados.filter(
      (o) => o.programa_id === filtros.programa_id,
    );
  }

  if (filtros.nivel) {
    resultados = resultados.filter(
      (o) => ofertaEducativa.programas[o.programa_id].nivel === filtros.nivel,
    );
  }

  return resultados.map((oferta) => ({
    ...oferta,
    programa: ofertaEducativa.programas[oferta.programa_id],
    incorporacion: ofertaEducativa.incorporaciones[oferta.incorporacion_id],
  }));
}

// ============================================
// EXPORTACIONES
// ============================================

export { ofertaEducativa, buscarOfertas };
