import adapter from '@sveltejs/adapter-node';
import preprocessor from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocessor({
		scss: {
			prependData: `@import '$lib/../src/styles/global.scss';`
		}
	}),
	kit: {
		adapter: adapter({
			precompress: true
	 	})
	},
	onwarn: (warning, handler) => {
        const { code, frame } = warning;
        if (code === "css-unused-selector")
            return;

        handler(warning);
    },
};

export default config;
