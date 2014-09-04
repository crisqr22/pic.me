var gulp            = require('gulp');
var less 	    = require('gulp-less'); 
var path            = require('path'); 
var livereload      = require('gulp-livereload');
var connect         = require('gulp-connect');


gulp.task('less', function () {
  gulp.src('./less/bootstrap.less')  	
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'));    
});


gulp.task('watch', function() {
  gulp.watch('./less/**/*.less', ['less'])
});

gulp.task('webserver', function() {
  connect.server({
    root: './',
    hostname: '0.0.0.0',
    port: 5000,
    livereload: true
  });
});


gulp.task('default', ['webserver', 'watch',  ]);