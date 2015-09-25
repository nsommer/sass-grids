//
// Basic grunt config to compile scss files to css files.
//

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'dist/sass-grids.css': 'src/sass-grids.scss'
        }
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['sass']);
}
