module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    project: [
      './tsconfig.json'
    ]
  },
  extends: [
    'eslint:recommended',
    'eslint-config-prettier',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript'
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [
      2,
      {
        'namedComponents': 'arrow-function'
      }
    ],
    'no-restricted-imports': [
      'error',
      {
        'paths': [
          {
            'name': 'styled-components',
            'message': 'Please import from styled-components/macro.'
          }
        ],
        'patterns': [
          '!styled-components/macro'
        ]
      }
    ]
  },
  plugins: [
    'react'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true
  }
}