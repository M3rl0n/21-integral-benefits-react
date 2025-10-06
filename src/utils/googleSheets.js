// Configuración para Google Sheets
// PASO 1: Reemplaza YOUR_SCRIPT_ID con el ID de tu Google Apps Script
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'

export const submitToGoogleSheets = async (formData) => {
  try {
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors', // Importante para Google Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        timestamp: new Date().toISOString(),
        source: 'Club Integral Website'
      })
    })

    return { success: true, data: 'Registro guardado en Google Sheets' }
  } catch (error) {
    console.error('Error al enviar a Google Sheets:', error)
    return { success: false, error: error.message }
  }
}

// Función alternativa usando Google Forms (más simple)
export const submitToGoogleForms = async (formData) => {
  // PASO 1: Reemplaza YOUR_FORM_ID con el ID de tu Google Form
  const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse'
  
  // PASO 2: Reemplaza los entry IDs con los reales de tu formulario
  const formDataToSend = new FormData()
  formDataToSend.append('entry.1234567890', formData.name) // Reemplazar con entry IDs reales
  formDataToSend.append('entry.1234567891', formData.email)
  formDataToSend.append('entry.1234567892', formData.phone)
  formDataToSend.append('entry.1234567893', formData.message)

  try {
    const response = await fetch(GOOGLE_FORM_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: formDataToSend
    })

    return { success: true, data: 'Registro enviado a Google Forms' }
  } catch (error) {
    console.error('Error al enviar a Google Forms:', error)
    return { success: false, error: error.message }
  }
}
