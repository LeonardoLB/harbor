//----------//
//-- VARS --//
//----------//


var gulp = require( 'gulp' );
var pug = require( 'gulp-pug' );
var stylus = require('gulp-stylus');



//-----------//
//-- TASKS --//
//-----------//

gulp.task( 'pug', function(){

    return gulp.src( 'src/views/pages/*.pug' )
        .pipe( pug() )
        .pipe( gulp.dest( 'views/' ));
});

gulp.task('stylus', function () {

    return gulp.src('src/styles/main.styl')
        .pipe(stylus())
        .pipe(gulp.dest('assets/css/'));
});


// WATCH
gulp.task( 'watch', function(){

    gulp.watch( 'src/views/pages/*', ['pug'] )
    gulp.watch( 'src/styles/**/*', ['stylus'] )

})

// when you execute 'gulp' you are execute :
gulp.task( 'default', [  'watch' ] );
