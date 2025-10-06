# 📊 Configuración de Google Sheets para Club Integral

## 🎯 **Objetivo**
Configurar Google Sheets para recibir automáticamente los registros del formulario de contacto.

## 📋 **Paso a Paso**

### **PASO 1: Crear Google Apps Script**

1. **Ir a [script.google.com](https://script.google.com)**
2. **Crear nuevo proyecto**
3. **Copiar y pegar este código:**

```javascript
function doPost(e) {
  try {
    // Obtener la hoja de cálculo (crear una nueva si no existe)
    const sheet = SpreadsheetApp.getActiveSheet()
    
    // Si es la primera vez, agregar encabezados
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Fecha y Hora',
        'Nombre',
        'Email', 
        'Teléfono',
        'Mensaje',
        'Fuente'
      ])
    }
    
    // Obtener los datos del formulario
    const data = JSON.parse(e.postData.contents)
    
    // Agregar nueva fila con los datos
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.email,
      data.phone,
      data.message,
      data.source
    ])
    
    // Respuesta de éxito
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true, 
        message: 'Registro guardado correctamente'
      }))
      .setMimeType(ContentService.MimeType.JSON)
      
  } catch (error) {
    // Respuesta de error
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false, 
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON)
  }
}
```

### **PASO 2: Guardar y Nombrar el Proyecto**

1. **Guardar** el proyecto (Ctrl+S)
2. **Nombrar** el proyecto: "Club Integral - Formulario"
3. **Hacer clic** en "Deploy" → "New Deployment"

### **PASO 3: Configurar el Deployment**

1. **Tipo:** Web App
2. **Execute as:** Me (tu email)
3. **Who has access:** Anyone
4. **Hacer clic** en "Deploy"
5. **Copiar** la URL que aparece (algo como: `https://script.google.com/macros/s/ABC123.../exec`)

### **PASO 4: Actualizar el Código**

1. **Abrir** `src/utils/googleSheets.js`
2. **Reemplazar** `YOUR_SCRIPT_ID` con el ID de tu script:

```javascript
// Cambiar esta línea:
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'

// Por esta (con tu ID real):
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/ABC123DEF456GHI789/exec'
```

### **PASO 5: Crear la Hoja de Cálculo**

1. **Ir a [sheets.google.com](https://sheets.google.com)**
2. **Crear nueva hoja**
3. **Nombrar:** "Registros Club Integral"
4. **En el Apps Script, cambiar:**
   ```javascript
   // En lugar de:
   const sheet = SpreadsheetApp.getActiveSheet()
   
   // Usar:
   const spreadsheet = SpreadsheetApp.openById('TU_SPREADSHEET_ID')
   const sheet = spreadsheet.getSheetByName('Registros Club Integral')
   ```

## 🔧 **Configuración Alternativa: Google Forms**

### **Si prefieres usar Google Forms (más simple):**

1. **Crear Google Form** con estos campos:
   - Nombre (texto corto)
   - Email (texto corto)
   - Teléfono (texto corto)  
   - Mensaje (párrafo)

2. **Obtener el Form ID** de la URL
3. **Obtener los Entry IDs:**
   - Abrir el formulario
   - Ver código fuente (F12)
   - Buscar `entry.` para encontrar los IDs

4. **Actualizar** `src/utils/googleSheets.js`:
   ```javascript
   // Cambiar YOUR_FORM_ID y los entry IDs
   const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/TU_FORM_ID/formResponse'
   
   formDataToSend.append('entry.1234567890', formData.name) // ID real del campo nombre
   formDataToSend.append('entry.1234567891', formData.email) // ID real del campo email
   // etc...
   ```

## ✅ **Verificación**

1. **Ejecutar** el proyecto: `npm run dev`
2. **Llenar** el formulario de contacto
3. **Enviar** el formulario
4. **Verificar** en Google Sheets que aparezca el registro

## 🚨 **Solución de Problemas**

### **Error: "Script not found"**
- Verificar que el Script ID sea correcto
- Asegurar que el deployment esté activo

### **Error: "Permission denied"**
- Verificar que el script tenga permisos
- Re-autorizar el script si es necesario

### **Error: "CORS"**
- Usar `mode: 'no-cors'` en la configuración
- Verificar que el script esté desplegado como Web App

## 📊 **Estructura de la Hoja**

| Fecha y Hora | Nombre | Email | Teléfono | Mensaje | Fuente |
|--------------|--------|-------|----------|---------|--------|
| 2024-01-15 10:30 | Juan Pérez | juan@email.com | 3001234567 | Quiero unirme al club | Club Integral Website |

## 🎉 **¡Listo!**

Una vez configurado, todos los registros del formulario se guardarán automáticamente en tu Google Sheet.
