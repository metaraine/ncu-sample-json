var grunt = require('grunt')
require('load-grunt-tasks')(grunt)

grunt.initConfig({
  shell: {
    options: {
      stderr: false
    },
    target: {
      command: 'cat package.json | ncu'
    }
  }
});

grunt.registerTask('default', ['shell']);