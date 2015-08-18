module.exports = function(grunt) {

  // Project configuration.
  grunt.config.init({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
      	stripBanners:true,
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src:['src/js/*.js'] ,
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    jshint: {
      //pack path== all css
      build:['Gruntfile.js','src/**/*.js'],
      options: {
        jQuery: true,
        console: true,
        module: true,
        document: true,
        jshintrc:'.jshintrc'
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          //pack path== all css
          //'dist/style.all.css':['src/css/*.css']
          'dist/style.min.css': ['src/css/style.css'],
          'dist/default.min.css':['src/css/default.css']
        }
      }
    },
    watch: {
      build: {
        files: ['Gruntfile.js','src/js/*.js'],
        //files: ['<%= jshint.files %>'],
        tasks: ['jshint','uglify'],
        options:{spawn:false}
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
 
  // Default task(s).
  grunt.registerTask('default', ['jshint','cssmin','uglify','watch']);
};

