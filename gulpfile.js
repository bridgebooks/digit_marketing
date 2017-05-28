const gulp = require('gulp'),
    sass = require('gulp-sass'),
    clean = require('gulp-clean'),
    util = require('gulp-util'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps')

//Config
const config = {
    paths: {
        src: {
            scss: './client/scss/**/*.scss',
            scssMain: './client/scss/base.scss'
        },
        dest: {
            css: './public/assets/css'
        }
    }
}

//Tasks

//sass
gulp
    .task('sass', () => {
        return gulp.src(config.paths.src.scssMain)
            .pipe(sourcemaps.init())
            .pipe(sass({ outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(rename({ extname: '.min.css' }))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(config.paths.dest.css))
    })

gulp
    .task('watch', () => {
        gulp.watch(config.paths.src.scss, ['sass'])
    })