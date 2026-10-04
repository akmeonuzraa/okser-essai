import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        presentation: resolve(__dirname, 'presentation.html'),
        gard: resolve(__dirname, 'gard.html'),
        candidat: resolve(__dirname, 'candidat.html'),
        entreprise: resolve(__dirname, 'entreprise.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
})
