import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  define: {
    ...(process.env.NODE_ENV === 'development' && {
      'process.env': process.env,
    })
  }
};

export default config;
