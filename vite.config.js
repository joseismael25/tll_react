import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// La ruta debe coincidir exactamente con el nombre del repositorio de GitHub.
// Repositorio: https://github.com/joseismael25/tll_react
export default defineConfig({
  plugins: [react()],
  base: '/tll_react/',
})
