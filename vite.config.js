import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/My-Portfolio/', // 👈 IMPORTANT: must match your repo name
});
