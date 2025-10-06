// Configuración para Google Sheets
const GOOGLE_SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL || 'https://script.google.com/macros/s/AKfycbwrpSXtqFhad-F5y6eUoAHt0ZtTlCTefTIBFsBeogsIG9mXVjAhvNMwJN09stim-GvY/exec'

export const submitToGoogleSheets = async (formData) => {
  try {
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors',
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
    
    return { success: true, data: 'Registro enviado a Google Sheets' }
  } catch (error) {
    console.error('Error al enviar a Google Sheets:', error)
    return { success: false, error: error.message }
  }
}

