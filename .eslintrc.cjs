module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    ecmaVersion: 2020,
    sourceType: 'module',
    extraFileExtensions: ['.vue']
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    '@typescript-eslint/member-ordering': 'off',
    'no-var': 'warn',
    'brace-style': ['warn', 'stroustrup'],
    'quotes': ['warn', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
    'keyword-spacing': 'warn',
    'no-multiple-empty-lines': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    'indent': ['warn', 4],
    '@typescript-eslint/no-inferrable-types': 'off',
    'vue/max-attributes-per-line': ['warn', {
        'singleline': {
            'max': 3
        },
        'multiline': {
            'max': 1
        }
    }],
    'vue/first-attribute-linebreak': ['warn', {
        'singleline': 'beside',
        'multiline': 'below'
    }],
    'vue/multiline-html-element-content-newline': ['warn', {
        'ignoreWhenEmpty': true,
        'ignores': ['pre', 'textarea'],
        'allowEmptyLines': false
    }],
    'vue/html-indent': ['warn', 4],
    'vue/script-indent': ['warn', 4],
    'vue/no-static-inline-styles': 'warn',
    'semi': 'off',
    '@typescript-eslint/semi': 'warn',
}
}
