const gulp = require('gulp'),
	sass = require('gulp-sass'),
	prefix = require('gulp-autoprefixer'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	plumber = require('gulp-plumber'),
	runSequence = require('run-sequence'),
	babel = require('gulp-babel');

// Compile Sass into CSS
gulp.task('styles', () => {
	return gulp.src('src/scss/**/*.scss') // Gets all files ending with .scss in src/scss
		.pipe(plumber())
		.pipe(sass({
			outputStyle: 'compact'
		}).on('error', sass.logError)) // Converts Sass to CSS with gulp-sass
		.pipe(prefix('last 2 versions', '> 1%', 'ie 8', 'Android 2', 'Firefox ESR')) //adds vendor prefixes if needed
		.pipe(gulp.dest('build/css')) // outputs CSS to src/css
		.pipe(reload({
			stream: true
		}));
});

// compiles es6 with Babel
gulp.task('es2015', () => {
	return gulp.src('src/js/app.js')
		.pipe(plumber())
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('build'))
		.pipe(reload({
			stream: true
		}));
});

//copy index.html to build
gulp.task('html', () => {
	return gulp.src('src/index.html')
		.pipe(plumber())
		.pipe(gulp.dest('build'))
		.pipe(reload({
			stream: true
		}));
});

// Starts browserSync server
gulp.task('browserSync', () => {
	browserSync.init({
		server: {
			baseDir: 'build'
		},
		ui: false,
		port: 3000
	});
});

// Watches for file changes and reloads browsers
gulp.task('default', ['html', 'styles', 'es2015', 'browserSync'], () => {
	gulp.watch('src/scss/**/*.scss', ['styles']);
	gulp.watch('src/js/**/*.js', ['es2015']);
	gulp.watch('src/**/*.html', ['html']);
});

// Production Tasks

// Compile Sass into CSS
gulp.task('styles-dist', () => {
	return gulp.src('src/scss/**/*.scss') // Gets all files ending with .scss in src/scss
		.pipe(plumber())
		.pipe(sass({
			outputStyle: 'compact'
		}).on('error', sass.logError)) // Converts Sass to CSS with gulp-sass
		.pipe(prefix('last 2 versions', '> 1%', 'ie 8', 'Android 2', 'Firefox ESR')) //adds vendor prefixes if needed
		.pipe(gulp.dest('dist/css')) // outputs CSS to src/css
		.pipe(reload({
			stream: true
		}));
});

// compiles es6 with Babel
gulp.task('es2015-dist', () => {
	return gulp.src('src/js/app.js')
		.pipe(plumber())
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('dist'))
		.pipe(reload({
			stream: true
		}));
});

//copy index.html to build
gulp.task('html-dist', () => {
	return gulp.src('src/index.html')
		.pipe(plumber())
		.pipe(gulp.dest('dist'))
		.pipe(reload({
			stream: true
		}));
});

gulp.task('build-dist', (callback) => {
	runSequence('html-dist', 'styles-dist', 'es2015-dist', callback);
});
