const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// EJS 템플릿 엔진 설정
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

// 정적 파일 서빙 (빌드된 CSS, JS 등)
app.use(express.static(path.join(__dirname, "public")));

// 라우터
app.get("/", (req, res) => {
  res.render("index", {
    title: "UI/UX Study",
    description: "EJS + PostCSS(SCSS) 기본 셋팅",
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
