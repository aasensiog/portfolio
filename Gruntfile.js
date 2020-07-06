module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        copy: {
            main: {
                files: [
                    // includes files within path
                    // {expand: true, src: ['dist '], dest: 'build/js/lib', filter: 'isFile'},

                    // includes files within path and its sub-directories

                    {expand: true, cwd: 'assets', src: '**', dest: 'dist/assets/'},
                    {expand: true, cwd: 'images', src: '**', dest: 'dist/images/'},

                    // {expand: true, src: ['css/lib/*'], dest: 'dist/css/lib/'},
                    // {expand: true, src: ['css/fonts/*'], dest: 'dist/css/fonts/'},
                    {expand: true, src: ['*.html'], dest: 'dist/'}
                ]
            }
        },
        clean: ['dist'],
       'ftp-deploy': {
            build: {
                auth: {
                    host: 'albertasensio.es',
                    port: 21,
                    authKey: 'key'
                },
                src: 'dist',
                dest: 'web',
                // exclusions: ['./js/src', 'favicon', './css/src', 'img/profiles', 'node_modules', '.ftppass', '.gitignore', '*.txt', '*.json', './ignore', '.git', '.idea', '.DS_Store'],
                forceVerbose: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-ftp-deploy');
    grunt.registerTask('default', ['clean', 'copy']);

    // NEW DEPLOY
    //grunt pre; cp -rf dist/* ../aasensiog.github.io/;
    //cd $HOME/Desktop/github/aasensiog.github.io/; git add .; git ci -am 'new version'; git push;
};
