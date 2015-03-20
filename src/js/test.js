gulp.task('orders_js', function () {
    gulp.src(orders_js) // Javascript files source defined else where as an array (top of file)
//      .pipe(uglify())
        .pipe(uglify().on('error', function(e) { console.log('\x07',e.message); return this.end(); }))
        .pipe(gulp.dest('assets/js/pages'));
});
