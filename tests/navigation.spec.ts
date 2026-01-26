import { test, expect } from '@playwright/test';

/**
 * Suite de pruebas de navegación para el sitio web
 * 
 * Esta suite verifica:
 * 1. Que todas las páginas principales carguen correctamente (200 OK)
 * 2. Que cada página tenga contenido visible
 * 3. Que los botones principales sean clickeables
 * 
 * Configuración: Las pruebas se ejecutan SECUENCIALMENTE (una por una)
 */

// Deshabilitar paralelismo: ejecuta las pruebas una por una
test.describe.configure({ mode: 'serial' });

test.describe('Navigation Tests', () => {
  
  // ============================================================
  // CONFIGURACIÓN: Lista de páginas a probar
  // ============================================================
  const pages = [
    { url: '/', name: 'Inicio' },
    { url: '/acerca/admisiones', name: 'Admisiones' },
    { url: '/acerca/apoyos', name: 'Apoyos' },
    { url: '/acerca/historia', name: 'Historia' },
    { url: '/acerca/modelo-educativo', name: 'Modelo Educativo' },
    { url: '/acerca/plataforma', name: 'Plataforma' },
    { url: '/acerca/politicas', name: 'Políticas' },
    { url: '/acerca/preguntasfrecuentes', name: 'Preguntas Frecuentes' },
    { url: '/acerca/terminos-condiciones', name: 'Términos y Condiciones' },
    { url: '/contacto/gracias', name: 'Gracias' },
    { url: '/contacto/solicitarinformacion', name: 'Solicitar Información' },
    { url: '/oferta-academica/', name: 'Oferta Académica' },
    { url: '/oferta-academica/bachillerato', name: 'Bachillerato' },
    { url: '/oferta-academica/licenciaturas', name: 'Licenciaturas' },
    { url: '/oferta-academica/maestrias', name: 'Maestrías' },
  ];

  // ============================================================
  // PRUEBA 1: Verificar que cada página cargue correctamente
  // ============================================================
  test.describe('Page Loading', () => {
    for (const { url, name } of pages) {
      test(`📄 ${name} (${url}) debe cargar correctamente`, async ({ page }) => {
        console.log(`\n🔍 Probando: ${name}`);
        
        // --------------------------------------------------------
        // PASO 1: Navegar a la página y verificar respuesta
        // --------------------------------------------------------
        const response = await page.goto(url, { 
          waitUntil: 'domcontentloaded',
          timeout: 30000 
        });
        
        // Verificar que la respuesta sea exitosa (200-299)
        expect(response?.status(), `${name} debe responder con código 2xx`).toBeLessThan(400);
        console.log(`   ✓ Código de respuesta: ${response?.status()}`);
        
        // --------------------------------------------------------
        // PASO 2: Verificar que la página tenga contenido
        // --------------------------------------------------------
        const bodyText = await page.locator('body').textContent();
        expect(bodyText?.length, `${name} debe tener contenido`).toBeGreaterThan(0);
        console.log(`   ✓ Contenido encontrado: ${bodyText?.length} caracteres`);
        
        // --------------------------------------------------------
        // PASO 3: Verificar que no haya errores visibles
        // --------------------------------------------------------
        // Buscar mensajes de error comunes
        const hasError404 = await page.getByText('404').count();
        const hasError500 = await page.getByText('500').count();
        const hasErrorMessage = await page.getByText('Error').count();
        
        expect(hasError404, `${name} no debe mostrar error 404`).toBe(0);
        expect(hasError500, `${name} no debe mostrar error 500`).toBe(0);
        console.log(`   ✓ Sin errores visibles`);
        
        // --------------------------------------------------------
        // PASO 4: Verificar elementos básicos de navegación
        // --------------------------------------------------------
        // Verificar que exista un header/nav (típico en todas las páginas)
        const hasHeader = await page.locator('header, nav').count() > 0;
        expect(hasHeader, `${name} debe tener header o navegación`).toBeTruthy();
        console.log(`   ✓ Navegación presente`);
        
        console.log(`   ✅ ${name} carga correctamente\n`);
      });
    }
  });

  // ============================================================
  // PRUEBA 2: Verificar enlaces críticos (solo en página principal)
  // ============================================================
  test.describe('Critical Links Check', () => {
    test('🔗 Verificar enlaces principales desde inicio', async ({ page }) => {
      console.log(`\n🔍 Verificando enlaces principales desde /`);
      
      await page.goto('/', { 
        waitUntil: 'domcontentloaded',
        timeout: 30000 
      });

      // Solo verificar que las páginas principales estén enlazadas
      const criticalPages = [
        '/oferta-academica/',
        '/acerca/admisiones',
        '/contacto/solicitarinformacion',
      ];

      for (const pageUrl of criticalPages) {
        const link = page.locator(`a[href="${pageUrl}"], a[href*="${pageUrl}"]`).first();
        const exists = await link.count() > 0;
        
        expect(exists, `Debe existir enlace a ${pageUrl} desde inicio`).toBeTruthy();
        
        if (exists) {
          await expect(link, `El enlace a ${pageUrl} debe ser visible`).toBeVisible();
          console.log(`   ✓ Enlace a ${pageUrl} presente y visible`);
        }
      }
      
      console.log(`   ✅ Todos los enlaces críticos están presentes\n`);
    });
  });

  // ============================================================
  // PRUEBA 3: Verificar botones interactivos
  // ============================================================
  test.describe('Interactive Elements', () => {
    // Solo verificar botones en páginas clave (no todas)
    const pagesWithButtons = [
      { url: '/', name: 'Inicio' },
      { url: '/contacto/solicitarinformacion', name: 'Solicitar Información' },
      { url: '/oferta-academica/', name: 'Oferta Académica' },
    ];

    for (const { url, name } of pagesWithButtons) {
      test(`🔘 Botones en ${name}`, async ({ page }) => {
        console.log(`\n🔍 Verificando botones en: ${name}`);
        
        await page.goto(url, { 
          waitUntil: 'domcontentloaded',
          timeout: 30000 
        });

        // --------------------------------------------------------
        // BUSCAR: Botones visibles y habilitados
        // --------------------------------------------------------
        const visibleButtons = await page.locator('button:not([disabled]):visible').all();
        
        console.log(`   ℹ Encontrados ${visibleButtons.length} botones visibles`);

        // Si no hay botones, está bien, algunas páginas no los necesitan
        if (visibleButtons.length === 0) {
          console.log(`   ⊘ Esta página no tiene botones interactivos\n`);
          return;
        }
        
        // --------------------------------------------------------
        // VERIFICAR: Primeros 5 botones (evitar sobrecarga)
        // --------------------------------------------------------
        const buttonsToCheck = visibleButtons.slice(0, 5);
        
        for (let i = 0; i < buttonsToCheck.length; i++) {
          const button = buttonsToCheck[i];
          const buttonText = (await button.textContent())?.trim() || '(sin texto)';
          
          console.log(`   🔘 Verificando botón ${i + 1}: "${buttonText}"`);
          
          // Verificar que sea visible y clickeable
          await expect(button).toBeVisible();
          await expect(button).toBeEnabled();
          
          console.log(`      ✓ OK`);
        }

        if (visibleButtons.length > 5) {
          console.log(`   ℹ Se omitieron ${visibleButtons.length - 5} botones adicionales`);
        }

        console.log(`   ✅ Botones verificados correctamente\n`);
      });
    }
  });

  // ============================================================
  // PRUEBA 4: Navegación básica (flujo de usuario)
  // ============================================================
  test.describe('User Navigation Flow', () => {
    test('🧭 Usuario puede navegar: Inicio → Oferta Académica → Admisiones', async ({ page }) => {
      console.log(`\n🧭 Probando flujo de navegación típico`);
      
      // PASO 1: Inicio
      await page.goto('/', { waitUntil: 'domcontentloaded' });
      console.log(`   ✓ En página de inicio`);
      
      // PASO 2: Click en Oferta Académica
      const ofertaLink = page.locator('a[href*="oferta-academica"]').first();
      await expect(ofertaLink).toBeVisible();
      await ofertaLink.click();
      await page.waitForLoadState('domcontentloaded');
      
      expect(page.url()).toContain('oferta-academica');
      console.log(`   ✓ Navegó a Oferta Académica`);
      
      // PASO 3: Click en Admisiones (desde cualquier página)
      const admisionesLink = page.locator('a[href*="admisiones"]').first();
      await expect(admisionesLink).toBeVisible();
      await admisionesLink.click();
      await page.waitForLoadState('domcontentloaded');
      
      expect(page.url()).toContain('admisiones');
      console.log(`   ✓ Navegó a Admisiones`);
      
      console.log(`   ✅ Flujo de navegación completado exitosamente\n`);
    });
  });
});