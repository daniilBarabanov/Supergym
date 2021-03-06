"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var csso = require("gulp-csso");
var rename = require("gulp-rename");
var webp = require("gulp-webp");
var svgstore = require("gulp-svgstore")
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var concat = require("gulp-concat");
var del = require("del");
const webpack = require(`webpack-stream`);

let isDev = true;

const mainWebpackConfig = {
  output: {
    filename: `index.js`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: `babel-loader`,
        exclude: /node_modules/,
        options: {
          presets: [[`@babel/preset-env`, {
            "targets": `> 0.25%, not dead`
          }]]
        }
      }
    ]
  },
  mode: isDev ? `development` : `production`,
  devtool: isDev ? `eval-sourse-map` : `none`
};

const vendorWebpackConfig = {
  output: {
    filename: `index.js`
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules\/(?!(swiper|dom7)\/).*/],
        loader: `babel-loader`,
        options: {
          presets: [`@babel/preset-env`]
        }
      }
    ]
  },
  mode: isDev ? `development` : `production`,
  devtool: isDev ? `eval-sourse-map` : `none`
};

gulp.task("css", function () {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("server", function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("css"));
  gulp.watch("source/img/icon-*.svg", gulp.series("sprite", "html", "refresh"));
  gulp.watch("source/*.html", gulp.series("html", "refresh"));
});

gulp.task("refresh", function (done) {
  server.reload();
  done();
});

gulp.task("webp", function () {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("source/img"));
});

gulp.task("sprite", function () {
  return gulp.src("source/img/{icon-*,logo-*,htmlacademy*}.svg")
    .pipe(svgstore({inlineSvg: true}))
    .pipe(rename("sprite_auto.svg"))
    .pipe(gulp.dest("build/img"));
});

gulp.task("html", function () {
  return gulp.src("source/*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(gulp.dest("build"));
});

gulp.task("copy", function () {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    // "source/js/**",
    "source//*.ico"
    ], {
      base: "source"
    })
  .pipe(gulp.dest("build"));
});

gulp.task("clean", function () {
  return del("build");
});

gulp.task('concat-js-main', function () {
  return gulp.src('source/js/main-*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('build/js'));
});

gulp.task('concat-js-vendor', function () {
  return gulp.src('source/js/vendor-*.js')
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('build/js'));
});

gulp.task("build", gulp.series("clean", "copy", "css", "sprite", "html", "concat-js-main", "concat-js-vendor"));
gulp.task("start", gulp.series("build", "server"));
