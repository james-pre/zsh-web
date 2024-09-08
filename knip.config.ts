import { type KnipConfig } from 'knip'

const config: KnipConfig = {
  ignoreBinaries: ['only-allow'],
  ignoreDependencies: ['prettier-plugin-*'],
  postcss: {
    config: 'postcss.config.mjs'
  }
}

export default config
