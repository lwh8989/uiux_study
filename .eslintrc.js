module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "prettier", // prettier와 충돌하는 eslint 규칙 비활성화
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-console": "warn",
    "no-unused-vars": "warn",
    "prefer-const": "error",
  },
};
