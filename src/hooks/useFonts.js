import { useEffect } from 'react'

export const useFonts = () => {
  useEffect(() => {
    // Precargar fuentes críticas
    const preloadFonts = () => {
      // Precargar Scripter para títulos
      const scripterLink = document.createElement('link')
      scripterLink.rel = 'preload'
      scripterLink.href = '/src/assets/fonts/Scripter-Regular.woff2'
      scripterLink.as = 'font'
      scripterLink.type = 'font/woff2'
      scripterLink.crossOrigin = 'anonymous'
      document.head.appendChild(scripterLink)

      // Precargar 29LT Riwaya para texto
      const riwayaLink = document.createElement('link')
      riwayaLink.rel = 'preload'
      riwayaLink.href = '/src/assets/fonts/29lt-riwaya-regular.ttf'
      riwayaLink.as = 'font'
      riwayaLink.type = 'font/ttf'
      riwayaLink.crossOrigin = 'anonymous'
      document.head.appendChild(riwayaLink)
    }

    preloadFonts()
  }, [])
}

export default useFonts
