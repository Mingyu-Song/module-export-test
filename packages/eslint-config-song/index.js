module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  ignorePatterns: [".eslintrc.js", "tsup.config.ts", "stories"],
  parserOptions: {
    project: "tsconfig.json",
    ecmaVersion: 12,
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "airbnb-typescript",
    "turbo",
    "prettier",
  ],
  plugins: ["@typescript-eslint/eslint-plugin"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "import/no-extraneous-dependencies": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}
