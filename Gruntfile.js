module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: [
          // 'comments.js',
          "stories.js",
          'app.js'
        ],
        dest: './public/production.js'
      },
      libs: {
        src: [
          './node_modules/jquery/dist/jquery.js'
        ],
        dest: './public/libraries.js'
      },
    },

    uglify: {
      dist: {
        src: './public/production.js',
        dest: './public/js/production.min.js'
      },
      libs: {
        src: './public/libraries.js',
        dest: './public/js/libraries.min.js'
      },

    },

    jshint: {
      files: [
        'public/*.js'
      ],
      options: {
        force: 'false',
        jshintrc: '.jshintrc',
        ignores: [
          './public/libraries.min.js',
        ]
      }
    },

    cssmin: {
      all: {
        src: ["*.css"],
        dest: "./public/js/styling.min.css"
      }
    },

    watch: {
      scripts: {
        files: [
          'app.js',
        ],
        tasks: [
          'concat',
          'uglify'
        ]
      },
      css: {
        files: 'styles.css',
        tasks: ['cssmin']
      }
    },

    shell: {
      prodServer: {
        command: 'git push azure master'
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('server-dev', function (target) {
    // Running nodejs in a different process and displaying output on the main console
    var nodemon = grunt.util.spawn({
         cmd: 'grunt',
         grunt: true,
         args: 'nodemon'
    });
    nodemon.stdout.pipe(process.stdout);
    nodemon.stderr.pipe(process.stderr);

    grunt.task.run([ 'watch' ]);
  });

  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////


  grunt.registerTask('build', ['jshint', 'concat', 'cssmin', 'uglify']);

  grunt.registerTask('deploy', function(n) {
    if(grunt.option('prod')) {
      grunt.task.run(['build']);
      grunt.task.run(['shell']);
    } else {
      grunt.task.run(['build']);
    }
  });

  // grunt.registerTask('deploy', [
  //   // add your deploy tasks here
  // ]);


};
