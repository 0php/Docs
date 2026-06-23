import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from 'fumadocs-mdx/config';
import { rehypeCodeDefaultOptions } from 'fumadocs-core/mdx-plugins';

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev/docs/mdx/collections#define-docs
export const docs = defineDocs({
  docs: {
    schema: frontmatterSchema,
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      ...rehypeCodeDefaultOptions,
      // Eagerly load every bundled grammar (default is lazy, which only
      // preloads ts/tsx and doesn't reliably apply langAlias on demand).
      lazy: false,
      // Map fence languages that aren't bundled under those names to a real
      // grammar: `env` is only an alias of `dotenv`, and `cron` has none.
      langAlias: {
        cron: 'bash',
        env: 'dotenv',
      },
    },
  },
});
