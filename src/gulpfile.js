const gulp = require('gulp');
const htmlPartial = require('gulp-html-partial');
 
gulp.task('html', function () {
    gulp.src(['**/*.html', '!partials/**'])
        .pipe(htmlPartial({
            basePath: __dirname + '/partials/'
        }))
        .pipe(gulp.dest(__dirname + '/../'));
});

//gulp.watch([__dirname + '/**/*.html'], ['html']);

gulp.task('default', ['html']);