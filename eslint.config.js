// eslint.config.js
const js = require("@eslint/js");
const tseslint = require("@typescript-eslint/eslint-plugin");
const parser = require("@typescript-eslint/parser");
const reactPlugin = require("eslint-plugin-react");
const reactNativePlugin = require("eslint-plugin-react-native");
const reactHooks = require("eslint-plugin-react-hooks");
const jsxA11y = require("eslint-plugin-jsx-a11y");
const prettier = require("eslint-config-prettier");

module.exports = [
  js.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      "@typescript-eslint/no-require-imports": "off",
      "no-undef": "off"
    },
  },
  {
    plugins: {
      react: reactPlugin,
      "react-native": reactNativePlugin,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
    },
    ignores: [
      "node_modules/",
      "dist/",
      "*.config.js"
    ],
    rules: {
      "react/prop-types": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "react-native/no-inline-styles": "off",
      "react-native/split-platform-components": "off",
      "react-native/no-color-literals": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  prettier,
];

