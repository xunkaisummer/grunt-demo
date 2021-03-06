module.exports = function (grunt) {
  // 项目配置
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // concat: {
    //   options: {
    //     separator: ';'
    //   },
    //   dist: {
    //     src: ['src/zepto.js', 'src/underscore.js', 'src/backbone.js'],
    //     dest: 'dest/libs.js'
    //   }
    // },
    // uglify: {
    //   build: {
    //     src: 'dest/libs.js',
    //     dest: 'dest/libs.min.js'
    //   }
    // }
      uglify: {
      "my_target": {
        "files": {
          'dest/libs.min.js': ['src/zepto.js', 'src/underscore.js', 'src/backbone.js']
        }
      }
    }
  });
  // 加载提供"uglify"任务的插件
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  // grunt.loadNpmTasks('grunt-contrib-concat');
  // 默认任务
  grunt.registerTask('default', ['uglify']);
}