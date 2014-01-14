'use strict';

// Basic template description.
exports.description = 'Set up a project with Grunt.';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'This template supplies the most basic files you need to get ' + 
  'started on a project with Grunt: Gruntfile.js and package.json.';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = 'Gruntfile.js';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [
    // Prompt for these values.
    {
      name: 'project_name',
      message: 'What is the name of your project?',
      default: 'my-grunt-project',
      warning: 'The name of project containing only url-safe characters'
    },
    {
      name: 'has_package_json',
      message: 'Does your project already include a package.json file?',
      default: 'Y/n',
      warning: 'This determines whether or not a package.json file is generated for you.'
    }
  ], function(err, props) {
    props.has_package_json = /y/i.test(props.package_json);
    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

      var devDependencies = {
        'grunt': '~0.4.0',
        'load-grunt-tasks': '~0.1.0'
      };

      var projectName = props.project_name;

      if(!props.has_package_json){
        // Generate package.json file, used by npm and grunt.
        init.writePackageJSON('package.json', {
          name: props.has_package_json,
          version: '0.1.0',
          devDependencies: devDependencies
        });
      }

    done();
  });

};