import { defineConfig } from 'vite';

export default defineConfig({
  publicDir: false,
  build: {
    lib: {
      entry: './lib/main.ts',
      name: 'bitrix24-library',
      fileName: 'index',
    },
  },
});
