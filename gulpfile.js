var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');
var ghtmlSrc = require('gulp-html-src');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('default', function () {
  return gulp.src('test/index.html')
  .pipe(vulcanize())
  .pipe(ghtmlSrc())
  // From this point, it's as if you'd used gulp.src() listing each of your
  // javascript files that are in your html as <script src="..."></script>
  .pipe(concat('symphony.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./build/'));
});
