var grunt = require('grunt');

grunt.loadNpmTasks('grunt-bower-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-copy');


grunt.initConfig({
    copy: {
        main: {
            files: [
                // includes files within path
                {expand: true, cwd:'src', src: ['**/*.html'], dest: 'build/', filter: 'isFile'},
                
                // includes files within path and its sub-directories
                //{expand: true, src: ['path/**'], dest: 'dest/'},
                
                // makes all src relative to cwd
                //{expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},
                
                // flattens results to a single level
                //{expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
            ],
        },
    },
    cssmin: {
        target: {
            files: [{
                expand: true,
                cwd: 'src',
                src: ['*.css', '!*.min.css'],
                dest: 'build/css',
                ext: '.min.css'
            }]
        }
    },

    uglify: {
        my_target: {
	    files: {
                'build/js/bower.min.js': ['src/bower.js']
            }
        }
    },

    bower_concat: {
        all: {
            dest: 'src/bower.js',
            cssDest: 'src/bower.css',
            bowerOptions: {
                relative: false
            }
        }
    }

});


grunt.registerTask('importbower', ['bower_concat']);
grunt.registerTask('build', ['uglify','cssmin','copy'] );



