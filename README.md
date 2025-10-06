# 🏆 Club Integral Herbalife - Landing Page

Una landing page moderna y responsiva para el Club Integral Herbalife, enfocada en el bienestar integral: cuerpo, mente y espíritu.

## 🚀 **Tecnologías Utilizadas**

- **React 18** - Framework principal
- **Vite** - Build tool y servidor de desarrollo
- **Tailwind CSS** - Framework de estilos
- **Framer Motion** - Animaciones
- **Zustand** - Gestión de estado
- **Lucide React** - Iconos
- **Google Sheets** - Base de datos de formularios

## 📦 **Instalación y Configuración**

### **1. Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/club-integral-herbalife.git
cd club-integral-herbalife
```

### **2. Instalar dependencias**
```bash
npm install
```

### **3. Configurar Google Sheets (IMPORTANTE)**

#### **Paso 3.1: Crear Google Apps Script**
1. Ir a [script.google.com](https://script.google.com)
2. Crear nuevo proyecto
3. Copiar y pegar este código:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet()
    
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Fecha', 'Nombre', 'Email', 'Teléfono', 'Mensaje', 'Fuente'])
    }
    
    const data = JSON.parse(e.postData.contents)
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.email,
      data.phone,
      data.message,
      data.source
    ])
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON)
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON)
  }
}
```

#### **Paso 3.2: Desplegar como Web App**
1. Guardar el proyecto
2. Ir a "Deploy" → "New Deployment"
3. Tipo: Web App
4. Execute as: Me
5. Who has access: Anyone
6. Copiar la URL generada

#### **Paso 3.3: Actualizar configuración**
1. Abrir `src/utils/googleSheets.js`
2. Reemplazar `YOUR_SCRIPT_ID` con tu Script ID:

```javascript
// Cambiar esta línea:
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'

// Por esta (con tu ID real):
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/ABC123DEF456/exec'
```

### **4. Ejecutar en desarrollo**
```bash
npm run dev
```

### **5. Construir para producción**
```bash
npm run build
```

## 🌐 **Despliegue**

### **Opción 1: Netlify (Recomendado)**
1. Conectar repositorio a Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. ¡Desplegar!

### **Opción 2: Vercel**
1. Conectar repositorio a Vercel
2. Framework: Vite
3. ¡Desplegar!

### **Opción 3: GitHub Pages**
1. Ejecutar `npm run build`
2. Subir carpeta `dist` a GitHub Pages
3. Configurar dominio personalizado (opcional)

## ⚙️ **Configuración Post-Despliegue**

### **1. Verificar Google Sheets**
- Probar el formulario de contacto
- Verificar que los datos lleguen a Google Sheets
- Revisar permisos del script

### **2. Configurar dominio personalizado**
- Agregar dominio en Netlify/Vercel
- Configurar DNS
- Actualizar Google Apps Script con nuevo dominio (si es necesario)

### **3. Optimizaciones de rendimiento**
- Configurar CDN
- Optimizar imágenes
- Configurar cache headers

## 📊 **Estructura del Proyecto**

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx          # Navegación principal
│   │   └── Footer.jsx          # Pie de página
│   └── sections/
│       ├── Hero.jsx            # Sección principal
│       ├── About.jsx           # Sobre nosotros
│       ├── Products.jsx        # Productos Herbalife
│       ├── Testimonials.jsx    # Testimonios
│       └── Contact.jsx         # Formulario de contacto
├── store/
│   └── useStore.js             # Estado global (Zustand)
├── utils/
│   └── googleSheets.js         # Integración con Google Sheets
├── assets/
│   ├── fonts/                  # Fuentes personalizadas
│   └── img/                    # Imágenes
└── App.jsx                     # Componente principal
```

## 🎨 **Personalización**

### **Colores (Tailwind)**
```javascript
// tailwind.config.js
colors: {
  primary: {
    50: '#f0fdf4',    // Verde claro
    500: '#22c55e',   // Verde Herbalife
    600: '#16a34a',   // Verde oscuro
  },
  secondary: {
    50: '#eff6ff',    // Azul claro
    600: '#2563eb',   // Azul espiritual
  },
  accent: {
    500: '#f97316',   // Naranja energético
  }
}
```

### **Fuentes Personalizadas**
- **Scripter** - Para títulos
- **29LT Riwaya** - Para texto general

### **Contenido**
Editar `src/store/useStore.js` para cambiar:
- Información del club
- Productos
- Testimonios
- Datos de contacto

## 🔧 **Comandos Disponibles**

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo
npm run build        # Construir para producción
npm run preview      # Previsualizar build
npm run lint         # Verificar código

# Google Sheets
# Ver GOOGLE_SHEETS_SETUP.md para configuración detallada
```

## 📱 **Características**

- ✅ **Responsive Design** - Mobile, tablet, desktop
- ✅ **Animaciones suaves** - Framer Motion
- ✅ **Formulario funcional** - Google Sheets integration
- ✅ **Navegación suave** - Scroll spy
- ✅ **SEO optimizado** - Meta tags
- ✅ **Performance** - Lazy loading
- ✅ **Accesibilidad** - ARIA labels

## 🚨 **Solución de Problemas**

### **Error: "Script not found"**
- Verificar que el Script ID sea correcto
- Asegurar que el deployment esté activo

### **Error: "Permission denied"**
- Re-autorizar el Google Apps Script
- Verificar permisos de la hoja de cálculo

### **Error: "CORS"**
- Usar `mode: 'no-cors'` en la configuración
- Verificar que el script esté desplegado como Web App

### **Formulario no envía**
- Verificar conexión a internet
- Revisar consola del navegador
- Verificar configuración de Google Sheets

## 📞 **Soporte**

Para problemas técnicos:
1. Revisar la consola del navegador
2. Verificar configuración de Google Sheets
3. Revisar logs de Netlify/Vercel

## 🎯 **Próximas Mejoras**

- [ ] Panel de administración
- [ ] Notificaciones por email
- [ ] Analytics integrado
- [ ] Chat en vivo
- [ ] Sistema de citas
- [ ] Blog integrado

## 📄 **Licencia**

Este proyecto es de uso interno del Club Integral Herbalife.

---

**¡Listo para desplegar! 🚀**

Sigue los pasos de configuración de Google Sheets y tu landing page estará funcionando perfectamente.