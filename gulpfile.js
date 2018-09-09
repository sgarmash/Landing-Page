'use strict';
 

var gulp          = require('gulp'),
	sass          = require('gulp-sass'),
	sync          = require('browser-sync'),
	concat        = require('gulp-concat'),
	uglify        = require('gulp-uglifyjs'),
	cssrename     = require('gulp-rename'),
	del           = require('del'),
	imagemin      = require ('gulp-imagemin'),
	pngquant      = require('imagemin-pngquant'),
	cache         = require('gulp-cache'),
	autoprefixer  = require('gulp-autoprefixer'),
	jade          = require('gulp-jade'),
    csso	      = require('gulp-csso'),
    rigger	      = require('gulp-rigger');  


gulp.task('jade', function() {
	return gulp.src('app/jade/*.jade')
	.pipe(jade({
		pretty: true
	}))
	.pipe(gulp.dest('app/'));
});

gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.sass')
	.pipe(sass())
	.pipe(autoprefixer(['last 9 versions', 'ie 8'], { cascade: true }))
	.pipe(gulp.dest('app/css'))
	.pipe(sync.reload({stream: true}))
});

gulp.task('scripts:libs', function() {
  return gulp.src([
  	'app/vendor/jquery/dist/jquery.min.js',
    'app/vendor/slick-carousel/slick/slick.min.js',
    'app/vendor/jquery-validation/dist/jquery.validate.min.js'
   ])
    .pipe(concat('libs.min.js'))
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('scripts:main', function() {
  return gulp.src([
  	'app/js/common.js'
   ])
    .pipe(concat('common.js'))
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('css', function () {
    return gulp.src([
    	'app/css/main.css'
    	])
        .pipe(csso({
            restructure: false,
            sourceMap: true,
            debug: true
        }))
    .pipe(gulp.dest('dist/css'));
});



gulp.task('browser-sync', function() {
	sync({
		server: {
			baseDir: 'app'
		},
	notify: false
	});
});

gulp.task('clean', function() {
	return del.sync('dist');
});

gulp.task('clear', function() {
	return cache.clearAll();
});

gulp.task('img', function() {
	return gulp.src('app/images/**/*')
	.pipe(cache(imagemin({
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		une: [pngquant()]
	})))
	.pipe(gulp.dest('dist/images'));
});

gulp.task('watch', ['browser-sync', 'jade', 'sass', 'scripts:libs', 'scripts:main'] , function() {
	gulp.watch('app/sass/**/*.sass',['sass']);
	gulp.watch('app/jade/**/*.jade',['jade']);
	gulp.watch('app/*.html', sync.reload);
	gulp.watch('app/js/**/*.js', sync.reload);
});

gulp.task('build', ['clean', 'img' , 'jade' , 'sass', 'css', 'scripts:libs', 'scripts:main'], function() {

	var buildFonts = gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'));

	var buldJs = gulp.src([
		'app/js/common.js',
		'app/js/libs.min.js'
		])
		.pipe(gulp.dest('dist/js'));

	var buildHtml = gulp.src('app/*.html')
		.pipe(gulp.dest('dist'));
});

