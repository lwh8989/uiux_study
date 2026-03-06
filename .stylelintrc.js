module.exports = {
  extends: [
    "stylelint-config-standard-scss",  // SCSS 표준 규칙
    "stylelint-config-prettier-scss",  // prettier와 충돌 규칙 비활성화
  ],
  customSyntax: "postcss-scss",        // .pcss 파일에 SCSS 문법 적용
  rules: {
    "color-no-invalid-hex": true,
    "no-duplicate-selectors": true,
    "scss/dollar-variable-pattern": /^[a-z][a-zA-Z0-9-]*$/, // 변수명 규칙
  },
};
