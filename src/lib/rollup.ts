import { rollup } from 'rollup'
import rollupEsbuild from 'rollup-plugin-esbuild'

import type { InputOption } from 'rollup'

export async function rollupBuild(input: InputOption) {
  const bundle = await rollup({
    input,
    plugins: [
      rollupEsbuild({
        target: 'esm',
        minify: true,
      }),
    ],
  })

  const out = await bundle.generate({ compact: true })

  return out.output.map((o) => {
    return o.type === 'chunk' ? o.code : ''
  })
    .join('\n')
}
