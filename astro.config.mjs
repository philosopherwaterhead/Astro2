import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://comphand.pages.dev',
    markdown: {
        remarkPlugins: [
            'remark-math',
        ],
        rehypePlugins: [
            ['rehype-katex', {
            // Katex plugin options
            }]
        ]   
    }
});
