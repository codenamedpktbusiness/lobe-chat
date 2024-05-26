import config from './.eslintrc.js';

export default {
  ...config,
  ignores: [
    'node_modules/',
    'coverage',
    '.coverage',
    'jest*',
    '*.test.ts',
    '*.test.tsx',
    '.umi',
    '.umi-production',
    '.umi-test',
    '.dumi/tmp*',
    '!.dumirc.ts',
    'dist',
    'es',
    'lib',
    'logs',
    '.next'
  ],
  overrides: [
    {
      files: ['src/**/*.{js,jsx,ts,tsx}', 'tests/**/*.{js,jsx,ts,tsx}'],
      rules: {
        'no-console': 'warn',
        'no-debugger': 'error',
        'no-unused-vars': 'warn',
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
        'indent': ['error', 2],
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
      }
    },
    {
      files: ['*.mdx'],
      extends: ['plugin:mdx/recommended'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'warn',
        'no-undef': 'off',
        'react/jsx-no-undef': 'off',
        'react/no-unescaped-entities': 'off'
      },
      settings: {
        'mdx/code-blocks': false
      }
    }
  ]
};