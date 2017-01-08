/**
 * Created by Ahole on 2017/1/8.
 */
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify');

gulp.task('default', function () {
    gulp.src('public/jssrc/*.js')
        .pipe( uglify() )
        .pipe(  minify ({
            ext:{
                min:'.js'
            }
        }) )
        .pipe( gulp.dest('public/js') )
});