// Datos
const BachilleratoData = [
  {
    question: "¿Cuánto dura el bachillerato en línea?",
    answer:
      "El bachillerato tiene una duración aproximada de 2 años, dependiendo del ritmo de avance del estudiante.",
  },
  {
    question: "¿Cómo está conformado el plan de estudios?",
    answer:
      "El plan de estudios está organizado por semestres e incluye materias del tronco común de educación media superior, como matemáticas, ciencias, humanidades e inglés.",
  },
  {
    question: "¿La modalidad es 100% en línea?",
    answer:
      "Sí, el bachillerato se cursa completamente en línea a través de una plataforma educativa disponible las 24 horas.",
  },
  {
    question: "¿Hay horarios fijos para tomar clases?",
    answer:
      "No, el modelo es flexible. Puedes estudiar en el horario que mejor se adapte a tus actividades diarias.",
  },
  {
    question: "¿Cómo se evalúa el aprendizaje?",
    answer:
      "La evaluación se basa en actividades, tareas y participación en la plataforma, sin exámenes presenciales.",
  },
  {
    question: "¿El bachillerato tiene validez oficial?",
    answer:
      "Sí, el bachillerato cuenta con validez oficial ante las autoridades educativas correspondientes.",
  },
  {
    question:
      "¿Cuáles son las ventajas de estudiar el bachillerato en UNE en línea?",
    answer:
      "Flexibilidad de horarios, acompañamiento académico, estudio a tu propio ritmo y posibilidad de combinarlo con trabajo u otras actividades.",
  },
];

// Datos
const LicenciaturaData = [
  {
    question: "¿La modalidad es 100% en línea?",
    answer:
      "Sí, todas las licenciaturas se cursan completamente en línea a través de una plataforma disponible las 24 horas.",
  },
  {
    question: "¿Cómo están conformados los planes de estudio?",
    answer:
      "Los planes de estudio están conformados por 30 materias y se cursa una materia cada 5 semanas.",
  },
  {
    question: "¿Hay horarios fijos para estudiar?",
    answer:
      "No, el modelo es flexible y te permite estudiar a tu propio ritmo, sin horarios fijos.",
  },
  {
    question: "¿Cómo se evalúa el aprendizaje?",
    answer:
      "La evaluación se basa en actividades, proyectos y participación en la plataforma, sin exámenes presenciales.",
  },
  {
    question: "¿Cuándo puedo inscribirme?",
    answer:
      "Puedes inscribirte cualquier día del año, ya que hay inscripciones abiertas los 365 días.",
  },
  {
    question: "¿Las licenciaturas tienen validez oficial?",
    answer:
      "Sí, todas las licenciaturas cuentan con validez oficial ante las autoridades educativas correspondientes.",
  },
  {
    question: "¿Tienen bolsa de trabajo?",
    answer:
      "Sí, contamos con convenios con diversas empresas que apoyan la vinculación laboral de nuestros estudiantes y egresados.",
  },
  {
    question: "¿Cuáles son las ventajas de estudiar  en UNE en línea?",
    answer:
      "Flexibilidad de horarios, acompañamiento académico, estudio a tu ritmo y la posibilidad de combinar estudios con trabajo.",
  },
];

// Datos
const MaestriaData = [
  {
    question: "¿La maestría es presencial o en línea?",
    answer:
      "La maestría se cursa en modalidad 100% en línea a través de una plataforma educativa disponible las 24 horas.",
  },
  {
    question: "¿Cuál es la duración de la maestría?",
    answer:
      "La maestría tiene una duración aproximada de 1 año o 8 meses, dependiendo del plan elegido.",
  },
  {
    question: "¿Cómo está conformado el plan de estudios?",
    answer:
      "El plan de estudios está conformado por 15 materias y se cursa una materia cada 5 semanas.",
  },
  {
    question: "¿Necesito título para inscribirme?",
    answer:
      "Sí, es indispensable contar con título y cédula profesional de licenciatura para ingresar a la maestría.",
  },
  {
    question: "¿Hay horarios fijos de clases?",
    answer:
      "No, el modelo es flexible y permite estudiar a tu propio ritmo, sin horarios establecidos.",
  },
  {
    question: "¿Cómo se evalúa el aprendizaje?",
    answer:
      "La evaluación se realiza mediante actividades, proyectos y participación en la plataforma, sin exámenes presenciales.",
  },
  {
    question: "¿Cuándo puedo inscribirme?",
    answer: "Las inscripciones están abiertas los 365 días del año.",
  },
  {
    question: "¿Las maestrías tienen validez oficial?",
    answer:
      "Sí, las maestrías cuentan con validez oficial ante las autoridades educativas correspondientes.",
  },
];

const diccionarios = {
  bachillerato: BachilleratoData,
  licenciatura: LicenciaturaData,
  maestria: MaestriaData,
};

//  Función para obtener los datos
const obtenerDatos = (nombre) => {
  // Convertimos a minúsculas para evitar errores si escriben "Bachillerato"
  const llave = nombre.toLowerCase();

  // Retorna los datos o un array vacío si el nombre no existe (para evitar errores)
  return diccionarios[llave] || [];
};

// Exportas la función y, si quieres, el objeto completo
export { obtenerDatos, diccionarios };
