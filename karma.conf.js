module.exports = function (config) {
    var configuration = {
        basePath: './',

        frameworks: ['jasmine'],
        browsers: ['Chrome'],

        // Karma plugins loaded
        plugins: [
            'karma-jasmine',
            'karma-coverage',
            'karma-chrome-launcher'
        ],

        // Coverage reporter generates the coverage
        reporters: ['progress', 'dots', 'coverage'],

        // Source files that you wanna generate coverage for.
        // Do not include tests or libraries (these files will be instrumented by Istanbul)
        preprocessors: {
            'src/**/!(*spec).js': ['coverage']
        },

        coverageReporter: {
            reporters: [
                { type: 'json', subdir: '.', file: 'coverage-final.json' }
            ]
        },

        files: [
            'node_modules/angular2/bundles/angular2-polyfills.js',
        // 'node_modules/zone.js/dist/zone-microtask.js',
        // 'node_modules/zone.js/dist/long-stack-trace-zone.js',
        // 'node_modules/zone.js/dist/jasmine-patch.js',
        // 'node_modules/es6-module-loader/dist/es6-module-loader.js',
            'node_modules/systemjs/dist/system.src.js',
            'node_modules/reflect-metadata/Reflect.js',
            'karma-test-shim.js',

            { pattern: 'node_modules/angular2/**/*.js', included: false, watched: false },
            { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
            { pattern: 'src/**/*.js', included: false, watched: true },
            { pattern: 'test/test-helpers/*.js', included: false, watched: true },
            { pattern: 'node_modules/systemjs/dist/system-polyfills.js', included: false, watched: false },

            // paths loaded via Angular's component compiler
            // (these paths need to be rewritten, see proxies section)
            // { pattern: 'src/**/*.html', included: false, watched: true },
            // {pattern: 'src/**/*.css', included: false, watched: true},

            // paths to support debugging with source maps in dev tools
            { pattern: 'src/**/*.ts', included: false, watched: false },
            { pattern: 'src/**/*.js.map', included: false, watched: false }
        ],

        // proxied base paths
        proxies: {
            // required for component assests fetched by Angular's compiler
            "/src/": "/base/src/"
        },

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        singleRun: true
    };

    config.set(configuration);
}