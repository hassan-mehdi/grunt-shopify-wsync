/*
 * grunt-shopify-wsync
 * https://github.com/hassan-mehdi/grunt-shopify-wsync
 */

'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js'
            ],
            options: {
                jshintrc: '.jshintrc',
            }
        },

        clean: {
            tests: ['tmp'],
        }
    });

    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-release');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('default', ['jshint']);
};
