// Datos
const BachilleratoData = [
  {
    question: "¿Cuáles son los requisitos de ingreso?",
    answer: "Necesitas presentar tu certificado...",
  },
];

const LicenciaturaData = [
  { question: "¿Cuánto dura la carrera?", answer: "Dura 3 años y 4 meses." },
  {
    question: "¿Tienen bolsa de trabajo?",
    answer: "Sí, tenemos convenios con empresas.",
  },
];

const MaestriaData = [
  { question: "¿Es presencial o en línea?", answer: "Es 100% en línea." },
  { question: "¿Necesito título?", answer: "Sí, es indispensable." },
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
