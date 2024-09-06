import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy:{
      '/app/v1/' : 'https://fakeshopapi-l2ng.onrender.com/' ,
    } 
  } ,
  plugins: [react()],
})
