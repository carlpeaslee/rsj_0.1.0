module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: [
                    'client/scripts/app.js',
                    'client/scripts/controllers/*.js',
                    'client/scripts/factories/*.js'
                ],
                dest: 'server/public/assets/scripts/app.min.js'
            }
        },
        copy: {
            angular : {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "angular/*",
                    "angular-animate/*",
                    "angular-aria/*",
                    "angular-material/*",
                    "angular-messages/*",
                    "angular-route/*",
                    "angular-sanitize/*",
                    "angular-cookies/*"
                ],
                "dest": "server/public/assets/vendors/"
            },
            html : {
                expand: true,
                cwd: 'client/views/',
                src: [
                    "*",
                    "partials/*",
                    "imgs/*",
                    "journal/*",
                    "library/*",
                    "profile/*",
                    "questions/*",
                    "*/*"
                ],
                "dest": "server/public/assets/views/"
            },
            style : {
                expand: true,
                cwd: 'client/styles/',
                src: [
                    "*"
                ],
                "dest": "server/public/assets/styles/"
            }
        },
        sass: {
            dist: {
				files: {
					'server/public/assets/styles/style2.css' : 'client/styles/style2.scss'
				}
			}
        }

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['sass', 'copy', 'uglify']);
};
