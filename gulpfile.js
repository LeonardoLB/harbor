var gulp = require( 'gulp' );
var pug = require( 'gulp-pug' );
// var pug = require('gulp-stylus');


// TASKS
gulp.task( 'pug', function(){

    return gulp.src( 'src/views/pages/*.pug' )
        .pipe( pug() )
        .pipe( gulp.dest( 'views' ));
});

// WATCH
gulp.task( 'watch', function(){

    gulp.watch( 'src/views/pages/*', ['pug'] )

})

// when you execute 'gulp' you are execute :
gulp.task( 'default', [  'watch' ] );