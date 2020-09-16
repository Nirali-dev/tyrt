/**
 * gruntfile.js
 *
 * Manages all the assets having features like minifying,
 * concating and uglifying
 *
 */

module.exports = function(grunt) {

    var paths = {
        'bower': './bower_components/',
        'scss': './scss/',
        'css': './css/',
        'js': './js/'
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        paths: paths,
    });

    //Loads all the tasks
    grunt.loadTasks('./grunt/tasks');

    //Registration of different tasks
    grunt.registerTask('build', [
        'sass',
        'concat',
        'uglify'
    ]);

    grunt.registerTask('default', ['build']);
};
