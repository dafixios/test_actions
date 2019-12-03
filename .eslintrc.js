module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
    "prettier/vue"
  ],
  rules: {
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/no-v-html": "off",
    "vue/no-template-shadow": "off",
    "vue/valid-v-on": "off"
  },
  globals: {
    $nuxt: true,
    Drupal: "readonly"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
}
