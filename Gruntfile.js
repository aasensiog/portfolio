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
        clean: ['dist']
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['clean', 'copy']);

    // NEW DEPLOY
    //grunt pre; cp -rf dist/* ../aasensiog.github.io/;
    //cd $HOME/Desktop/github/aasensiog.github.io/; git add .; git ci -am 'new version'; git push;
};
