import {getPresets} from 'eslint-config-molindo';
import reactCompilerPlugin from 'eslint-plugin-react-compiler';

export default (await getPresets('typescript', 'react', 'vitest')).concat({
  plugins: {
    'react-compiler': reactCompilerPlugin
  },
  rules: {
    'react-compiler/react-compiler': 'error',

    // Strict type imports to avoid side effects
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/no-import-type-side-effects': 'error',
    'import/no-duplicates': ['error', {'prefer-inline': true}]
  }
});
