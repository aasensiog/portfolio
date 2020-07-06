module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            options: {
                compress: true,
                mangle: true

            },
            own: {
                files: [{
                    expand: true,
                    cwd: 'js/src',
                    src: ['**/*.js', '!**/*.min.js'],
                    dest: 'dist/js/build',
                    rename: function (dst, src) {
                        // To keep src js files and make new files as *.min.js :
                        return dst + '/' + src.replace('.js', '.min.js');
                        // Or to override to src :
                        // return src;
                    }
                }]
            },
            commonlib: {
                files: {
                    'dist/js/build/lib.min.js': [
                        'js/lib/clipboard.min.js',
                        'js/lib/fontawesome-all.min.js',
                        'js/lib/jquery-3.3.1.min.js',
                        'js/lib/jquery.formatter.min.js',
                        'js/lib/popper.min.js',
                        'js/lib/bootstrap-slider.min.js',
                        'js/lib/formatter.min.js',
                        'js/lib/html2canvas.min.js',
                        'js/lib/iso-7064.js',
                        'js/lib/jquery.qrcode.min.js',
                        'js/lib/JsBarcode.all.min.js',
                        'js/lib/qrcode.min.js',
                        'js/lib/mustache.min.js',
                        'js/lib/jxon.min.js',
                    ]
                }
            }

        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/css/build/css.min.css': ['css/src/*']
                }
            }
        },
        cacheBust: {
            taskName: {
                options: {
                    assets: [
                        'dist/css/build/css.min.css',
                        'dist/js/build/lib.min.js',
                        'dist/js/build/menu.min.js'
                    ]
                },
                src: ['index.html']
            }
        },
        copy: {
            main: {
                files: [
                    // includes files within path
                    // {expand: true, src: ['dist '], dest: 'build/js/lib', filter: 'isFile'},

                    // includes files within path and its sub-directories
                    
                    {expand: true, cwd: 'css/fonts/', src: '**', dest: 'dist/css/fonts/'},
                    {expand: true, cwd: 'css/lib/', src: '**', dest: 'dist/css/'},
                    
                    {expand: true, cwd: 'js/lib/bootstrap/', src: '**', dest: 'dist/js/bootstrap/'},

                    {expand: true, src: ['favicon/**', 'templates/**', 'img/**'], dest: 'dist/'},

                    // {expand: true, src: ['css/lib/*'], dest: 'dist/css/lib/'},
                    // {expand: true, src: ['css/fonts/*'], dest: 'dist/css/fonts/'},
                    {expand: true, src: ['index.html', 'boxing.html', '404.shtml', 'cookies.html', 'sitemap.xml', 'ads.txt', 'favicon.ico'], dest: 'dist/'}
                ]
            }
        },
        'ftp-deploy': {
            build: {
                auth: {
                    host: 'albertasensio.es',
                    port: 21,
                    authKey: 'key'
                },
                src: 'dist',
                dest: 'www/dni/dist/',
                // exclusions: ['./js/src', 'favicon', './css/src', 'img/profiles', 'node_modules', '.ftppass', '.gitignore', '*.txt', '*.json', './ignore', '.git', '.idea', '.DS_Store'],
                forceVerbose: true
            }
        },
        clean: ['build', 'dist']
    });


    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('uglify', ['uglify']);

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('cssmin', ['cssmin']);

    grunt.loadNpmTasks('grunt-cache-bust');
    grunt.registerTask('cachebust', ['cacheBust']);

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-cache-bust');
    grunt.loadNpmTasks('grunt-ftp-deploy');
    grunt.registerTask('upload', ['clean', 'uglify', 'cssmin', 'cacheBust', 'ftp-deploy']);

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // grunt.loadNpmTasks('grunt-cache-bust');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('pre', ['clean', 'uglify', 'cssmin', 'cacheBust', 'copy']);

    grunt.loadNpmTasks('grunt-ftp-deploy');
    grunt.registerTask('upload_light', ['ftp-deploy']);

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('limpiar', ['clean']);

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // grunt.loadNpmTasks('grunt-cache-bust');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-ftp-deploy');
    grunt.registerTask('upload', ['clean', 'uglify', 'cssmin', 'copy', 'ftp-deploy']);

    // NEW DEPLOY
    //grunt pre; cp -rf dist/* ../aasensiog.github.io/;
    //cd $HOME/Desktop/github/aasensiog.github.io/; git add .; git ci -am 'new version'; git push;
};
