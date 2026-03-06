module.exports = {
  parser: "postcss-scss",
  plugins: [
    require("postcss-nested"),       // SCSS 중첩 문법 지원
    require("postcss-preset-env")({  // 최신 CSS 문법 변환
      stage: 1,
    }),
    require("autoprefixer"),         // 벤더 프리픽스 자동 추가
    require("cssnano")({             // CSS 압축 (production)
      preset: "default",
    }),
  ],
};
