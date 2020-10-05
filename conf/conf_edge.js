exports.config = {

  'baseUrl': 'http://juliemr.github.io/protractor-demo/',
  /*  
  directConnect - to connect directly to the browser Drivers.
  This option is only available for Firefox and Chrome.
  */
  // directConnect: true,

  framework: 'jasmine',

  capabilities: {
    'browserName': 'MicrosoftEdge',
    'maxInstances': 3,
    'elementScrollingBehavior': 1,
    'nativeEvents': false,
    'shardTestFiles': true,
    'seleniumAddress': 'http://localhost:9515',
  },

  jasmineNodeOpts: {
    'showColors': true,
    'keepAlive': true,
    'defaultTimeoutInterval': 30000,
    print: function () { }
  },

  specs: ['../test/specs/**.js'],

  onPrepare: function () {
    // browser.driver.manage().window().maximize(); // maximize the browser before executing the feature files
    // browser.driver.manage().timeouts().implicitlyWait(60000);
    // browser.driver.manage().timeouts().pageLoadTimeout(60000);
    // browser.driver.manage().timeouts().setScriptTimeout(60000);

    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));

    // jasmine.getEnv().addReporter(new AllureReporter());
    // jasmine.getEnv().afterEach(function (done) {
    //   browser.driver.takeScreenshot().then(function (png) {
    //     allure.createAttachment('Screenshot', function () {
    //       return new Buffer(png, 'base64')
    //     }, 'image/png')();
    //     done();
    //   })
    // });

  },

     /**
   * Alternatively, suites may be used. When run without a command line
   * parameter, all suites will run. If run with --suite=smoke or
   * --suite=smoke,full only the patterns matched by the specified suites will
   * run.
   *
   * Example:
   * suites: {
   *   smoke: 'spec/smoketests/*.js',
   *   full: 'spec/*.js'
   * }
   */
  suites: {
    api: '../test/specs/api/api.js'
  }

};