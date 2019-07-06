const { src, dest, series } = require("gulp");
const $ = require("gulp-load-plugins")();

function html() {
  return src("./src/*.html")
    .pipe($.htmlmin({ collapseWhitespace: true }))
    .pipe(dest("./dist/"));
}

function images() {
  return src("./src/img/*")
    .pipe($.imagemin())
    .pipe(dest("./dist/img"));
}

function libs() {
  return src("./src/libs/*.js").pipe(dest("./dist/libs/"));
}

function sass_f() {
  return src("./src/css/*.css")
    .pipe($.plumber())
    .pipe($.autoprefixer())
    .pipe($.cssnano())
    .pipe(dest("./dist/css/"));
}

function slick() {
  return src("./src/libs/*.css")
    .pipe($.autoprefixer())
    .pipe($.cssnano())
    .pipe(dest("./dist/libs/"));
}
function favicon() {
  return src("./src/favicon-16x16.png").pipe(dest("./dist/"));
}
exports.default = series(html, sass_f, images, libs, slick, favicon);
