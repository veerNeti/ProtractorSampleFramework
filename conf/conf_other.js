const { browser } = require('protractor');

exports.config = {

  multiCapabilities: [
    {
      'browserName': 'chrome',
      'chromeOptions': {
        'args': [
          'disable-infobars',
          'show-fps-counter=true',
          // "--headless",
          "--disable-gpu"]
      }
    },
    {
      'browserName': 'firefox',
      'moz:firefoxOptions': {
        'args': ['--safe-mode']
      }
    },

  ],
  'baseUrl': 'http://juliemr.github.io/protractor-demo/',
  framework: 'jasmine',


  jasmineNodeOpts: {
    'showColors': true,
    'keepAlive': true,
    'defaultTimeoutInterval': 30000,
    print: function () { }
  },

  specs: ['../test/specs/**.js'],

  onPrepare: function () {
    // browser.manage().window().maximize(); // maximize the browser before executing the feature files
    // browser.manage().timeouts().implicitlyWait(60000);
    // browser.manage().timeouts().pageLoadTimeout(60000);
    // browser.manage().timeouts().setScriptTimeout(60000);

    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));

    // jasmine.getEnv().addReporter(new AllureReporter());
    // jasmine.getEnv().afterEach(function (done) {
    //   browser.takeScreenshot().then(function (png) {
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