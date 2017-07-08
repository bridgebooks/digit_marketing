const gulp = require('gulp'),
    sass = require('gulp-sass'),
    clean = require('gulp-clean'),
    util = require('gulp-util'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps')

//Config
const config = {
    paths: {
        src: {
            js: [
                './client/js/index.module.js',
                './client/js/shared/shared.module.js',
                './client/js/home/home.module.js',
                './client/js/home/home.controller.js',
                './client/js/shared/directives/*.js'
            ],
            scripts: './client/js/**/*.js',
            scss: './client/scss/**/*.scss',
            scssMain: './client/scss/base.scss'
        },
        dest: {
            css: './public/assets/css',
            js: './public/assets/js'
        }
    }
}

//Tasks

//sass
gulp
    .task('sass', () => {
        return gulp.src(config.paths.src.scssMain)
            .pipe(sourcemaps.init())
            .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
            .pipe(rename({ extname: '.min.css' }))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(config.paths.dest.css))
    })

//concat
gulp
    .task('concat-scripts', () => {
        return gulp.src(config.paths.src.js)
            .pipe(concat({ path: 'scripts.js' }))
            .pipe(gulp.dest(config.paths.dest.js))
    })

gulp
    .task('watch', () => {
        gulp.watch(config.paths.src.scss, ['sass'])
        gulp.watch(config.paths.src.scripts, ['concat-scripts'])
    })