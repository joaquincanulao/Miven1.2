module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "google",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "no-restricted-globals": ["error", "name", "length"],
    "prefer-arrow-callback": "error",
    "quotes": ["error", "double", { "allowTemplateLiterals": true }],
    "indent": ["error", 2],
    "max-len": ["error", { "code": 120 }],
    "eol-last": ["error", "always"],
    "object-curly-spacing": ["error", "always"], // Ajustado para permitir espacios
    "no-invalid-this": "off",
    "brace-style": ["error", "1tbs"],
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-unused-vars": ["warn"], // Mostrar advertencia, no error
  },
  overrides: [
    {
      files: ["**/*.spec.*"],
      env: {
        mocha: true,
      },
      rules: { "max-len": ["error", { "code": 120 }] },
    },
  ],
  globals: {},
};
