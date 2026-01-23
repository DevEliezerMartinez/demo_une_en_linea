// src/helpers/imageManager.js
// Helper universal para manejar imágenes de todos los niveles educativos

// ============================================
// CONFIGURACIÓN DE RUTAS Y GLOBALS
// ============================================

const imageGlobs = {
  licenciaturas: import.meta.glob(
    "/src/assets/imagenes/cards_licenciaturas/*.webp",
    {
      eager: true,
    },
  ),
  maestrias: import.meta.glob("/src/assets/imagenes/cards_maestrias/*.webp", {
    eager: true,
  }),
};

// SVG Placeholder base64 para evitar errores de imagen no encontrada
const PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzZiNzI4MCI+SW1hZ2VuIG5vIGRpc3BvbmllYmxlPC90ZXh0Pjwvc3ZnPg==";

// ============================================
// PROCESAMIENTO DE MAPAS (Cache en memoria)
// ============================================

const processModules = (modules) => {
  const map = {};
  for (const path in modules) {
    const fileName = path.split("/").pop().replace(".webp", "").toLowerCase();
    const mod = modules[path];
    map[fileName] = mod.default?.src || mod.default || mod.src || mod;
  }
  return map;
};

const imageMaps = Object.keys(imageGlobs).reduce((acc, key) => {
  acc[key] = processModules(imageGlobs[key]);
  return acc;
}, {});

// ============================================
// FUNCIONES EXPORTADAS
// ============================================

/**
 * Obtiene la URL de una imagen de forma eficiente.
 * @param {string} name - Nombre del archivo (sin extensión).
 * @param {string} nivel - Categoría (licenciaturas, maestrias, etc).
 */
export const getImageUrl = (name, nivel = "maestrias") => {
  if (!name) return PLACEHOLDER;

  const targetLevel = imageMaps[nivel] || imageMaps.licenciaturas;
  const normalizedName = name.toLowerCase();

  // 1. Búsqueda exacta (O(1))
  if (targetLevel[normalizedName]) return targetLevel[normalizedName];

  // 2. Búsqueda por coincidencia parcial si falla la exacta
  const fuzzyMatch = Object.keys(targetLevel).find(
    (key) => normalizedName.includes(key) || key.includes(normalizedName),
  );

  return targetLevel[fuzzyMatch] || PLACEHOLDER;
};

/**
 * Helper para crear un buscador pre-configurado para un nivel específico.
 */
export const createImageUrlGetter = (nivel) => (name) =>
  getImageUrl(name, nivel);

/**
 * Verifica si una imagen existe en los mapas cargados.
 */
export const imageExists = (name, nivel = "licenciaturas") => {
  if (!name) return false;
  const targetLevel = imageMaps[nivel] || imageMaps.licenciaturas;
  return !!targetLevel[name.toLowerCase()];
};
