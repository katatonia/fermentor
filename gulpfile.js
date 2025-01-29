const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const htmlmin = require("gulp-htmlmin");
const terser = require("gulp-terser");
const clean = require("gulp-clean");

// Очистка `dist/` перед сборкой
gulp.task("clean", function () {
    return gulp.src("dist", { allowEmpty: true }).pipe(clean());
});

// Компиляция SCSS → CSS
gulp.task("styles", function () {
    return gulp
        .src("src/sass/**/*.+(scss|sass)")
        .pipe(sass().on("error", sass.logError)) // 📌 Dev: без сжатия
        .pipe(gulp.dest("src/css")) // 📌 Dev: остается в `src/`
        .pipe(browserSync.stream());
});

gulp.task("styles:build", function () {
    return gulp
        .src("src/sass/**/*.+(scss|sass)")
        .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError)) // 📌 Build: сжато
        .pipe(rename({ suffix: ".min" }))
        .pipe(autoprefixer())
        .pipe(cleanCSS({ compatibility: "ie8" }))
        .pipe(gulp.dest("dist/css"));
});

// Минификация HTML
gulp.task("html:build", function () {
    return gulp.src("src/*.html").pipe(htmlmin({ collapseWhitespace: true })).pipe(gulp.dest("dist/"));
});

// Минификация JS
gulp.task("scripts", function () {
    return gulp.src("src/js/**/*.js").pipe(gulp.dest("src/js")).pipe(browserSync.stream());
});

gulp.task("scripts:build", function () {
    return gulp
        .src("src/js/main.js")
        .pipe(terser())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest("dist/js"));
});

// Копирование шрифтов
gulp.task("fonts", function () {
    return gulp.src("src/fonts/**/*").pipe(gulp.dest("dist/fonts"));
});

// Копирование видео
gulp.task("copyVideos", function () {
    return gulp.src("src/video/**/*").pipe(gulp.dest("dist/video"));
});

// Копирование иконок (dev)
gulp.task("copyIcons", function () {
    return gulp.src("src/icons/**/*").pipe(gulp.dest("dist/icons"));
});

// Оптимизация иконок (build)
gulp.task("optimizeIcons", function () {
    return gulp
        .src("src/icons/**/*.{png,jpg,svg,gif,webp}")
        .pipe(imagemin([
            imagemin.svgo({ plugins: [{ removeViewBox: false }, { cleanupIDs: false }] }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.mozjpeg({ quality: 75, progressive: true }),
            imagemin.gifsicle({ interlaced: true })
        ]))
        .pipe(gulp.dest("dist/icons"));
});

// Копирование изображений (dev)
gulp.task("copyImages", function () {
    return gulp.src("src/img/**/*").pipe(gulp.dest("dist/img"));
});

// Оптимизация изображений (build)
gulp.task("optimizeImages", function () {
    return gulp.src("src/img/**/*").pipe(imagemin()).pipe(gulp.dest("dist/img"));
});

// Запуск локального сервера и отслеживание изменений
gulp.task("server", function () {
    browserSync.init({
        server: {
            baseDir: "src",
        },
    });

    gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel("styles"));
    gulp.watch("src/*.html").on("change", browserSync.reload);
    gulp.watch("src/js/**/*.js").on("change", browserSync.reload);
    gulp.watch("src/fonts/**/*").on("change", browserSync.reload);
    gulp.watch("src/video/**/*").on("change", browserSync.reload);
    gulp.watch("src/icons/**/*").on("change", browserSync.reload);
    gulp.watch("src/img/**/*").on("change", browserSync.reload);
});

// Dev-режим: просто отслеживает изменения без сжатия
gulp.task("dev", gulp.series(
    gulp.parallel("styles", "scripts"),
    "server"
));

// Build-режим: очищает `dist/`, сжимает файлы и копирует
gulp.task("build", gulp.series(
    "clean",
    gulp.parallel(
        "styles:build",
        "scripts:build",
        "html:build",
        "fonts",
        "copyVideos",
        "optimizeIcons",
        "optimizeImages"
    )
));
