const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('default', () =>
    gulp.src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
);
