// wrapper function
module.exports = function(grunt){
	// load all our Grunt plugins
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
        // task configuration goes here

        concat: {   
        	dist: {
        		src: [
        		'scripts/*.js', // All JS in the scripts folder
        		'scripts/{,*/}*.js'  // What does this match exactly??? do we still need the above one?
        		],
        		dest: 'scripts/production.js',
        	}
        }

    });

    // define the default task that executes when we run 'grunt' from inside the project
    grunt.registerTask('default', []);

};