var grunt = require('grunt')
require('load-grunt-tasks')(grunt)

grunt.initConfig({
  shell: {
    target: {
      command: 'ncu'
    }
  }
});

grunt.registerTask('default', ['shell']);