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
};

export function obtenerPlanEstudios(programa) {
  const plan = planesEstudio[programa];

  if (!plan) {
    console.warn(`No se encontró el plan de estudios para: ${programa}`);
    return [];
  }

  return plan;
}

// Exportaciones retrocompatibles para mantener la compatibilidad con código existente
export const plan_bachillerato = planesEstudio.bachillerato;
export const plan_administracion = planesEstudio.administracion;
