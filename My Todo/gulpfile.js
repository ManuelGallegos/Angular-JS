/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. https://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');

var paths = {
    sourcePath: "./node_modules",
    targetPath: "./wwwroot/libs"
};
var librariesToMove = [
    paths.sourcePath + '/core-js/client/shim.min.js',
    paths.sourcePath + '/zone.js/dist/zone.min.js',
    paths.sourcePath + '/systemjs/dist/system.src.js'
];

gulp.task('default', function () {
   
});

gulp.task('librariesToMove', function () {
    return gulp.src(librariesToMove).pipe(gulp.dest(paths.targetPath));
});