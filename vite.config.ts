import { defineConfig, Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Resolves figma:asset/... imports as placeholder transparent PNGs
function figmaAssetPlugin(): Plugin {
  const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect width='1' height='1' fill='%23e0e0e0'/%3E%3C/svg%3E"
  return {
    name: 'figma-asset',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) return '\0' + id
    },
    load(id) {
      if (id.startsWith('\0figma:asset/')) return `export default "${PLACEHOLDER}"`
    },
  }
}

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    figmaAssetPlugin(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv', '**/*.gif'],
})
