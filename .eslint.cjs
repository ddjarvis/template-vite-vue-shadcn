// .eslintrc.cjs
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential', // Good balance for Vue 3
    'plugin:prettier/recommended' // Enables Prettier rule
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    // Customize as needed
    'no-console': 'warn',
    'no-debugger': 'warn',
    'vue/multi-word-component-names': 'off' // Allow single-word names (e.g., Button.vue)
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  }
}
