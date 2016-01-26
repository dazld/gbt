
var gulp = require('gulp');
var gbt = require('gulp-bump-tag');
var debug = require('gulp-debug');
var path = require('path');


gulp.task('update', function(done){
  gbt({
    file: path.resolve('./version.json')
  }, done);
})
