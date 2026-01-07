// ============================================
// ESTRUCTURA NORMALIZADA Y ESCALABLE
// ============================================
// 
// CONCEPTO CLAVE: Separación de Responsabilidades
// En lugar de tener todo mezclado, separamos en:
// 1. QUÉ se ofrece (programas)
// 2. DÓNDE se ofrece (campus)
// 3. CÓMO se ofrece (modalidades)
// 4. Las COMBINACIONES disponibles (ofertas)
//
// ============================================

const ofertaEducativa = {
  
  // 1. CATÁLOGO DE PROGRAMAS (Fuente única de verdad)
  programas: {
    arquitectura: {
      id: "arquitectura",
      nombre: "Arquitectura",
      nivel: "licenciatura",
      area: "arquitectura_diseno",
      url: "/oferta/licenciaturas/arquitectura",
      imagen: "Arquitectura",
      descripcion: "Diseña el futuro construyendo espacios funcionales, sostenibles y estéticamente atractivos. Da vida a tus ideas a través de la arquitectura."
    },
    diseno_grafico: {
      id: "diseno_grafico",
      nombre: "Diseño Gráfico",
      nivel: "licenciatura",
      area: "arquitectura_diseno",
      url: "/oferta/licenciaturas/diseno_grafico",
      imagen: "Disenografico",
      descripcion: "Expresa ideas visuales con impacto. Aprende a crear diseño publicitario, digital y de marca."
    },
    ciencias_comunicacion: {
      id: "ciencias_comunicacion",
      nombre: "Ciencias de la Comunicación",
      nivel: "licenciatura",
      area: "ciencias_sociales_humanidades",
      url: "/oferta/licenciaturas/ciencias_de_la_comunicacion",
      imagen: "Cienciascomunicacion",
      descripcion: "Conviértete en un comunicador versátil y creativo, preparado para impactar en medios digitales, corporativos y sociales."
    },
    derecho: {
      id: "derecho",
      nombre: "Derecho",
      nivel: "licenciatura",
      area: "ciencias_sociales_humanidades",
      url: "/oferta/licenciaturas/derecho",
      imagen: "Derecho",
      descripcion: "Conviértete en un profesional del derecho con sólida formación jurídica, listo para defender la justicia y asesorar con responsabilidad."
    }
    // ... más programas
  },

  // 2. CATÁLOGO DE CAMPUS
  campus: {
    centro: {
      id: "centro",
      nombre: "Centro",
      ciudad: "Guadalajara",
      tipo: "presencial"
    },
    zapopan: {
      id: "zapopan",
      nombre: "Zapopan",
      ciudad: "Zapopan",
      tipo: "presencial"
    },
    puerto_vallarta: {
      id: "puerto_vallarta",
      nombre: "Campus Puerto Vallarta",
      ciudad: "Puerto Vallarta",
      tipo: "presencial"
    },
    une_en_linea: {
      id: "une_en_linea",
      nombre: "UNE en Línea",
      ciudad: null,
      tipo: "en_linea",
      url_base: "https://www.une-enlinea.com"
    }
    // ... más campus
  },

  // 3. MODALIDADES (Catálogo reutilizable)
  modalidades: {
    escolarizada: { id: "escolarizada", nombre: "Escolarizada" },
    semiescolarizada: { id: "semiescolarizada", nombre: "Semiescolarizada" },
    sabatina: { id: "sabatina", nombre: "Sabatina" },
    viernes_sabado: { id: "viernes_sabado", nombre: "Viernes y Sábado" },
    martes_jueves: { id: "martes_jueves", nombre: "Martes y Jueves" },
    en_linea: { id: "en_linea", nombre: "En línea" }
  },

  // 4. INCORPORACIONES
  incorporaciones: {
    sicyt: { id: "sicyt", nombre: "SICYT" },
    udg: { id: "udg", nombre: "UDG" }
  },

  // 5. OFERTAS (Relaciones entre programas, campus y modalidades)
  ofertas: [
    {
      programa_id: "arquitectura",
      campus_id: "puerto_vallarta",
      modalidad_id: "escolarizada",
      incorporacion_id: "sicyt",
      activo: true
    },
    {
      programa_id: "arquitectura",
      campus_id: "centro",
      modalidad_id: "escolarizada",
      incorporacion_id: "udg",
      activo: true
    },
    {
      programa_id: "arquitectura",
      campus_id: "centro",
      modalidad_id: "escolarizada",
      incorporacion_id: "sicyt",
      activo: true
    },
    {
      programa_id: "diseno_grafico",
      campus_id: "une_en_linea",
      modalidad_id: "en_linea",
      incorporacion_id: "sicyt",
      url_override: "https://www.une-enlinea.com/lic-diseno-grafico",
      activo: true
    },
    {
      programa_id: "derecho",
      campus_id: "centro",
      modalidad_id: "semiescolarizada",
      incorporacion_id: "sicyt",
      activo: true
    }
    // ... más ofertas
  ],

  // 6. ÁREAS DE CONOCIMIENTO
  areas: {
    arquitectura_diseno: {
      id: "arquitectura_diseno",
      nombre: "Arquitectura y Diseño"
    },
    ciencias_sociales_humanidades: {
      id: "ciencias_sociales_humanidades",
      nombre: "Ciencias Sociales y Humanidades"
    }
    // ... más áreas
  }
};

// ============================================
// FUNCIONES HELPER PARA CONSULTAS
// ============================================

// Obtener todas las ofertas de un programa
function getOfertasPorPrograma(programaId) {
  return ofertaEducativa.ofertas
    .filter(o => o.programa_id === programaId && o.activo)
    .map(oferta => ({
      ...oferta,
      programa: ofertaEducativa.programas[oferta.programa_id],
      campus: ofertaEducativa.campus[oferta.campus_id],
      modalidad: ofertaEducativa.modalidades[oferta.modalidad_id],
      incorporacion: ofertaEducativa.incorporaciones[oferta.incorporacion_id]
    }));
}

// Obtener todas las ofertas de un campus
function getOfertasPorCampus(campusId) {
  return ofertaEducativa.ofertas
    .filter(o => o.campus_id === campusId && o.activo)
    .map(oferta => ({
      ...oferta,
      programa: ofertaEducativa.programas[oferta.programa_id],
      campus: ofertaEducativa.campus[oferta.campus_id],
      modalidad: ofertaEducativa.modalidades[oferta.modalidad_id],
      incorporacion: ofertaEducativa.incorporaciones[oferta.incorporacion_id]
    }));
}

// Obtener programas por área
function getProgramasPorArea(areaId) {
  return Object.values(ofertaEducativa.programas)
    .filter(p => p.area === areaId);
}

// Búsqueda flexible
function buscarOfertas(filtros = {}) {
  let resultados = ofertaEducativa.ofertas.filter(o => o.activo);
  
  if (filtros.programa_id) {
    resultados = resultados.filter(o => o.programa_id === filtros.programa_id);
  }
  if (filtros.campus_id) {
    resultados = resultados.filter(o => o.campus_id === filtros.campus_id);
  }
  if (filtros.modalidad_id) {
    resultados = resultados.filter(o => o.modalidad_id === filtros.modalidad_id);
  }
  if (filtros.nivel) {
    resultados = resultados.filter(o => 
      ofertaEducativa.programas[o.programa_id].nivel === filtros.nivel
    );
  }
  
  return resultados.map(oferta => ({
    ...oferta,
    programa: ofertaEducativa.programas[oferta.programa_id],
    campus: ofertaEducativa.campus[oferta.campus_id],
    modalidad: ofertaEducativa.modalidades[oferta.modalidad_id],
    incorporacion: ofertaEducativa.incorporaciones[oferta.incorporacion_id]
  }));
}

// ============================================
// EXPORTACIONES (CRÍTICO - ESTABA FALTANDO)
// ============================================

export {
  ofertaEducativa,
  getOfertasPorPrograma,
  getOfertasPorCampus,
  getProgramasPorArea,
  buscarOfertas
};

// También puedes usar export default si prefieres
// export default {
//   ofertaEducativa,
//   getOfertasPorPrograma,
//   getOfertasPorCampus,
//   getProgramasPorArea,
//   buscarOfertas
// };