	module.exports = function (grunt) {
		require("load-grunt-tasks")(grunt);

		grunt.initConfig({
			settings:{
				assets: 'src',
				prototype: 'dev'
			},

			connect: {
				options:{
					livereload: 35729
				},
				livereload: {
					options: {
						port: 9000,
						hostname: '*',
						base: '<%= settings.prototype %>'
					}
				}
			},

			watch: {
				options: {
					livereload: '<%= connect.options.livereload %>'
				},
				html: {
					files: ['<%= settings.prototype %>/index.html']
				},
				scripts:{
					files: ['<%= settings.assets %>/js/**/*.js']
				}
			},

			browserify: {
				options: {
					browserifyOptions: {
						debug: true
					},
					plugin: [
					],
					transform: [
						['babelify', {
							presets: ['es2015']
						}]			
					]
				},
				dev: {
					options: {
						watch: true
					},
					files: [{
						src: ['<%= settings.assets %>/js/main.js'],
						dest: '<%= settings.prototype %>/js/bundle.js'
					}]
				},
			}
		});

		grunt.registerTask('dev', [
			'browserify:dev'
			]);

		grunt.registerTask('server', [
			'connect',
			'dev',
			'watch'
			]);

		grunt.registerTask('default', 'server');
	}