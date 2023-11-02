import type { CodegenConfig } from '@graphql-codegen/cli';
​
const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  schema: `https://graphql.prepr.io/${process.env.PREPR_ACCESS_TOKEN}`,
  documents: ['lib/prepr/**/*.ts'],
  generates: {
    'lib/prepr/__types__/': {
      plugins: ['typescript', 'typescript-operations'],
      preset: 'client',
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
};
​
export default config;