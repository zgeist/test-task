var gulp = require('gulp');
var coffee = require('gulp-coffee');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

function handlerError (error) {

  console.log(error.toString());

  this.emit('end');
}

gulp.task('coffee', function(){
  gulp.src('./app/*.coffee')
    .pipe(coffee({
      bare: true
    }))
    .on('error', handlerError)
    .pipe(gulp.dest('./assets/source'))
    .pipe(connect.reload());
});

gulp.task('sass', function(){
  gulp.src('./assets/sass/*.scss')
    .pipe(sass())
    .on('error', handlerError)
    .pipe(gulp.dest('./assets/css'))
    .pipe(connect.reload());
});

gulp.task('connect', function(){
  connect.server({
    port: 3000,
    livereload: true,
    root: './'
  });
});

gulp.task('watch', function(){
  gulp.watch('./app/*.coffee', ['coffee']);
  gulp.watch('./assets/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['connect', 'sass', 'coffee', 'watch']);