// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var concatCSS = require('gulp-concat-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var debug = require('gulp-debug');
var ts = require('gulp-typescript');
var rimraf = require('rimraf');
var del = require('del');

var paths = {
    output: "shared/dist",
    fusion_output: "shared/src/js",
    css_output: "shared/styles/css"
};

var FUSION_OUTPUT = "fusion.js";

var files = {
    libs: [
        "shared/lib/jquery-2.1.4.js",
        "shared/lib/jquery-sidebar.js",
        "shared/lib/ol-debug.js",
        "shared/lib/knockout-3.3.0.debug.js"
    ],
    fusion: [
        paths.fusion_output + "/fusion.all.js"
    ],
    styles: [
        "shared/styles/ol.css",
        "shared/styles/css/ol3-sidebar.css"
    ],
    fusionTS: "shared/src/fusion/**/*.ts",
    fusionTS_compiled_output: "shared/src/fusion/**/*.js",
    sass: "shared/styles/scss/*.scss"
};

gulp.task("ts", function() {
    return gulp.src(files.fusionTS)
        //.pipe(debug({ title: "ts: "}))
        .pipe(ts({
            target: "ES5",
            out: "fusion.all.js",
            sourceMap: true
        }))
        .js.pipe(gulp.dest(paths.fusion_output));
});

gulp.task("lint", function() {
    
});

gulp.task("sass", function() {
    return gulp.src(files.sass)
        //.pipe(debug({ title: "sass: "}))
        .pipe(sass())
        .pipe(gulp.dest(paths.css_output));
});

gulp.task("scripts", function() {
    return gulp.src(files.libs.concat(files.fusion))
        //.pipe(debug({ title: "scripts: "}))
        .pipe(concat("fusionSF.js"))
        .pipe(gulp.dest(paths.output))
        .pipe(rename("fusionSF-compressed.js"))
        .pipe(uglify())
        .pipe(gulp.dest(paths.output));
});

gulp.task("styles", function() {
    return gulp.src(files.styles)
        .pipe(debug({ title: "styles: " }))
        .pipe(concatCSS("fusion.all.css"))
        .pipe(gulp.dest(paths.output + "/css"))
});

gulp.task("clean:dist", function(cb) {
    rimraf(paths.output, cb);
});

gulp.task("clean:js", function(cb) {
    rimraf(paths.fusion_output, cb);
});

gulp.task("clean:ts", function(cb) {
    del(files.fusionTS_compiled_output, cb);
});

gulp.task("clean:css", function(cb) {
    rimraf(paths.css_output, cb);
});

gulp.task("clean", ["clean:dist", "clean:js", "clean:ts", "clean:css"]);

//gulp.task("watch", function() {
//    gulp.watch("shared/lib/**/*.js", ["lint", "scripts"]);
//    gulp.watch("shared/scss/*.scss", ["sass"]);
//});

gulp.task("default", ["lint", "sass", "ts", "scripts", "styles"]);