//----------//
//-- VARS --//
//----------//


var gulp = require( 'gulp' );
var pug = require( 'gulp-pug' );
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');



//-----------//
//-- TASKS --//
//-----------//

gulp.task('pug', function(){

    return gulp.src( '../../src/views/pages/*.pug' )
        .pipe( pug() )
        .pipe( gulp.dest( '../../views/' ));
});

gulp.task('stylus', function () {

    return gulp.src('../../src/styles/main.styl')
        .pipe( stylus() )
        .pipe(gulp.dest('../../assets/css/'));
});

gulp.task('scripts', function () {

    return gulp.src(['../../src/js/*.js'])
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('../../assets/js/'))
});

//-----------//
//-- WATCH --//
//-----------//

gulp.task( 'watch', function(){

    gulp.watch( '../../src/views/**/*', gulp.parallel('pug') )
    gulp.watch('../../src/styles/**/*', gulp.parallel('stylus') )
    gulp.watch('../../src/js/*', gulp.parallel('scripts') )

})

//---------------------//
//-- DEFAULT EXECUTE --//
//---------------------//

gulp.task('default', gulp.parallel('watch') );
