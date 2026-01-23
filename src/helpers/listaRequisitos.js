const requisitos_licenciaturas = [
  {
    id: 1,
    label: "Acta de Nacimiento",
    copies: 3,
    original: true,
    note: "Con fecha de expedición no mayor a un año y en excelente estado. Puede descargarse gratuitamente por internet, imprimirse a color y en hoja opalina para presentarse como original.",
    link: "https://actasenlinea.jalisco.gob.mx/actasescolares/Nacimiento.do",
  },
  {
    id: 2,
    label: "Certificado de Bachillerato",
    copies: 3,
    original: true,
    note: "En caso de que el certificado haya sido expedido en un estado distinto a Jalisco, deberá estar legalizado por la autoridad correspondiente. No se requiere legalización si el documento contiene la leyenda: “ESTE DOCUMENTO ES VÁLIDO EN LOS ESTADOS UNIDOS MEXICANOS Y NO REQUIERE TRÁMITES ADICIONALES DE LEGALIZACIÓN”.",
    link: undefined,
  },
  {
    id: 3,
    label: "Carta de validación de Certificado de Bachillerato",
    copies: 3,
    original: true,
    note: "Documento obligatorio. Sin esta carta, el certificado no es válido y no se acepta para la inscripción ante secretaría. Debe estar dirigida a quien corresponda o a la Mtra. Fanny Guadalupe Valdivia Márquez, Directora de Incorporación y Servicios Escolares SICyT. Debe presentarse en hoja membretada e incluir folio del certificado, nombre del alumno y fecha de expedición.",
    link: undefined,
  },
  {
    id: 4,
    label: "CURP",
    copies: 3,
    original: false,
    note: "Presentar tres copias legibles.",
    link: undefined,
  },
  {
    id: 5,
    label: "Identificación Oficial vigente con fotografía",
    copies: 3,
    original: false,
    note: "Debe encontrarse vigente y ser claramente legible.",
    link: undefined,
  },
  {
    id: 6,
    label: "Comprobante de Domicilio",
    copies: 3,
    original: false,
    note: "Comprobante reciente.",
    link: undefined,
  },
  {
    id: 7,
    label: "Fotografías tamaño infantil",
    copies: 0,
    original: false,
    note: "8 fotografías tamaño infantil en blanco y negro, con vestimenta presentable. Pueden ser de Farmacias Guadalajara.",
    link: undefined,
  },
];

const requisitos_maestrias = [
  {
    id: 1,
    label: "Acta de Nacimiento",
    copies: 3,
    original: true,
    note: "Fecha de expedición no mayor a un año y en excelente estado. Puede descargarse gratuitamente por internet, imprimirse a color y en hoja opalina para presentarse como original.",
    link: "https://actasenlinea.jalisco.gob.mx/actasescolares/Nacimiento.do",
  },
  {
    id: 2,
    label: "Certificado de Licenciatura",
    copies: 3,
    original: true,
    note: "Si el certificado fue expedido en un estado distinto a Jalisco, deberá estar legalizado por la autoridad correspondiente. No se requiere legalización si el documento incluye la leyenda: “ESTE DOCUMENTO ES VÁLIDO EN LOS ESTADOS UNIDOS MEXICANOS Y NO REQUIERE TRÁMITES ADICIONALES DE LEGALIZACIÓN”.",
    link: "",
  },
  {
    id: 3,
    label: "Carta de validación del Certificado de Licenciatura",
    copies: 3,
    original: true,
    note: "Documento obligatorio. Sin esta carta el certificado no es válido para inscripción ante secretaría. Debe dirigirse a quien corresponda o al Ing. Marco Arturo Castro Aguilera, Director de Incorporación y Servicios Escolares SICyT. Debe presentarse en hoja membretada e incluir folio del certificado, nombre del alumno y fecha de expedición.",
    link: "",
  },
  {
    id: 4,
    label: "Título",
    copies: 3,
    original: false,
    note: "",
    link: "",
  },
  {
    id: 5,
    label: "Cédula Profesional",
    copies: 3,
    original: false,
    note: "",
    link: "",
  },
  {
    id: 6,
    label: "Identificación Oficial vigente con fotografía",
    copies: 3,
    original: false,
    note: "",
    link: "",
  },
  {
    id: 7,
    label: "Comprobante de Domicilio",
    copies: 3,
    original: false,
    note: "",
    link: "",
  },
  {
    id: 8,
    label: "Fotografías tamaño infantil",
    copies: 8,
    original: false,
    note: "Blanco y negro, con vestimenta presentable. Pueden ser de Farmacias Guadalajara.",
    link: "",
  },
];

export function obtenerRequisitos(tipoPrograma = "licenciatura") {
  if (tipoPrograma?.toLowerCase() === "maestria") {
    return requisitos_maestrias;
  }
  return requisitos_licenciaturas;
}
