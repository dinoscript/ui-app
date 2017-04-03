var gulp = require('gulp');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var flatten = require('gulp-flatten');

// Copy data
gulp.task('copy-data', function () {
    return gulp.src(['src/data/*.*'])
        .pipe(flatten())
        .pipe(gulp.dest('public/data'))
});

// Copy libs
gulp.task('copy-libs', function () {
    return gulp.src(['src/libs/**/*.js'])
        .pipe(gulp.dest('public/libs'))
});

// Copy views
gulp.task('copy-views', function () {
    return gulp.src(['src/app/**/*.view.html'])
        .pipe(flatten())
        .pipe(gulp.dest('public/views'))
});

// Copy directives tamplates
gulp.task('copy-directives', function () {
    return gulp.src(['src/app/**/*.directive.html'])
        .pipe(flatten())
        .pipe(gulp.dest('public/templates'))
});

// Minify compiled CSS
gulp.task('minify-css', function () {
    return gulp.src('src/**/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(flatten())
        .pipe(gulp.dest('public/css'))
});

// Concat JS
gulp.task('concat-minify-js', function () {
    return gulp.src(['src/app/**/*.module.js', 'src/app/**/*.directive.js', 'src/app/**/*.controller.js', 'src/app/**/*.service.js'])
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('public/js'))
});

// Configure the browserSync task
gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'public'
        }
    })
});

// Run everything
gulp.task('default', ['copy-libs', 'copy-data', 'copy-views', 'copy-directives', 'concat-minify-js', 'minify-css']);

// Develop task with browserSync
gulp.task('develop', ['browserSync','copy-libs', 'copy-data', 'copy-views', 'copy-directives', 'concat-minify-js', 'minify-css'], function () {
    gulp.watch('src/**/*.css', ['minify-css', browserSync.reload]);
    gulp.watch('src/app/**/*.js', ['concat-minify-js', browserSync.reload]);
    gulp.watch('src/app/**/*.view.html', ['copy-views', browserSync.reload]);
    gulp.watch('src/app/**/*.directive.html', ['copy-directives', browserSync.reload]);
    gulp.watch('public/index.html', browserSync.reload);
});