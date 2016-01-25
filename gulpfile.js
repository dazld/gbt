
var gulp = require('gulp');
var gbt = require('gulp-bump-tag');

gulp.task('update', function(){
    return gulp.src('./version.json')
            .pipe(gbt())
            .pipe(gulp.dest('.'))
})
