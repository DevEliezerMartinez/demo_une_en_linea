# 🎓 Universidad UNE En Línea

Este repositorio contiene el código fuente del sitio web de **Universidad UNE En Línea**, una aplicación web moderna y de alto rendimiento construida con [Astro](https://astro.build/).

## 🚀 Tecnologías Principales

El proyecto utiliza un stack tecnológico moderno enfocado en el rendimiento y la experiencia de usuario:

- **[Astro 5](https://astro.build/)**: Framework web para sitios orientados a contenido, optimizado para velocidad.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Framework de utilidades para un diseño rápido y responsivo.
- **[Splide.js](https://splidejs.com/)**: Carruseles y sliders ligeros y accesibles.
- **[Lucide Icons](https://lucide.dev/)**: Iconos vectoriales limpios y consistentes.
- **[tsParticles](https://particles.js.org/)**: Animaciones de partículas ligeras para fondos interactivos.

## 📂 Estructura del Proyecto

El proyecto sigue una estructura modular y organizada:

```text
/
├── public/             # Archivos estáticos (imágenes, favicon, robots.txt)
├── src/
│   ├── components/     # Componentes reutilizables de la UI
│   │   ├── layout/     # Componentes estructurales (Header, Footer)
│   │   └── sections/   # Secciones de página (Hero, Features, etc.)
│   ├── pages/          # Rutas de la aplicación (basado en archivos)
│   │   ├── acerca/     # Páginas informativas
│   │   ├── oferta-academica/ # Catálogo de programas educativos
│   │   └── index.astro # Página de inicio
│   └── assets/         # Recursos como imágenes, fuentes e iconos
└── package.json
```

### 📍 Alias de Importación

Para facilitar el desarrollo y mantener el código limpio, se han configurado los siguientes alias:

- `@/`: `src/`
- `@components`: `src/components`
- `@layout`: `src/components/layout`
- `@sections`: `src/components/sections`
- `@assets`: `src/assets`
- `@images`: `src/assets/images`
- `@logos`: `src/assets/Logos`

## 🛠️ Comandos Disponibles

Todos los comandos se ejecutan desde la raíz del proyecto. Se recomienda usar `npm` o `pnpm`.

| Comando             | Acción                                                                                         |
| :------------------ | :--------------------------------------------------------------------------------------------- |
| `npm run dev`       | Inicia el servidor de desarrollo local en `localhost:4321`. Incluye recarga en caliente (HMR). |
| `npm run build`     | Compila el sitio para producción en el directorio `./dist/`.                                   |
| `npm run preview`   | Previsualiza la versión compilada localmente antes de desplegar.                               |
| `npm run astro ...` | Ejecuta comandos CLI como `astro add`, `astro check`.                                          |

## 🏁 Comenzando

1.  **Clonar el repositorio:**

    ```bash
    git clone <url-del-repo>
    cd une-enlinea
    ```

2.  **Instalar dependencias:**

    ```bash
    npm install
    # o
    pnpm install
    ```

3.  **Iniciar servidor de desarrollo:**
    ```bash
    npm run dev
    ```

## Notas de Desarrollo

- **Imágenes**: Usa el componente `<Image />` de Astro siempre que sea posible para la optimización automática.
- **Estilos**: Preferir clases de Tailwind CSS sobre CSS personalizado.
- **Componentes**: Mantener los componentes pequeños y enfocados en una sola responsabilidad.

---

Desarrollado con ❤️ para Universidad UNE.
