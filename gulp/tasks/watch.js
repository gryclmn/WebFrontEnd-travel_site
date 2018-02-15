var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

/*
Create a watch task to then run in the cmd line with 'gulp watch' command
*/
gulp.task('watch', function() {
    
    /*
    Initialize browserSync, allows auto reloading of browser when set files are modified
    */
    browserSync.init({
        nofity: false,
        server: {
            baseDir: "app"
        }
    });
    
    /*
    Watch task to reload browser when index.html is modified
    */
    watch('./app/index.html', function() {
        browserSync.reload();
    });
    
    /*
    Watch task to run cssInject task (See below) when any CSS file (*.css) and any css files in subdirectories of /styles/ are modified
    */
    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('cssInject');
    });
    
    /*
    Watch task to run scriptsRefresh task (See below) when any .js file (*.js) and any css files in subdirectories of /scripts/ are modified
    */
    watch('./app/assets/scripts/**/*.js', function() {
        gulp.start('scriptsRefresh');
        
    });
});

/*
Create cssInject task that places css file in specific temp folder after the styles.js file has started and completed in gulp
(This styles.js file runs cssImport, mixins, cssvars, autoprefixer, etc)
*/
gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());
});

/*
Create scriptsRefresh task that refreshes the broswer after the scripts.js file has started and completed in gulp
*/
gulp.task('scriptsRefresh', ['scripts'], function() {
    browserSync.reload();
});