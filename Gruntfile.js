var grunt = require('grunt');

grunt.loadNpmTasks('grunt-bower-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');

grunt.initConfig({

    uglify: {
        my_target: {
	    files: {
                'build/_bower.min.js': ['build/_bower.js']
            }
        }
    },

    bower_concat: {
        all: {
            dest: 'build/_bower.js',
            cssDest: 'build/_bower.css',
            bowerOptions: {
                relative: false
            }
        }
    }

});

grunt.registerTask('buildbower', ['bower_concat','uglify'] );



