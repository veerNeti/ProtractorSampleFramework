const { browser } = require('protractor');

exports.config = {


  /*  
  directConnect - to connect directly to the browser Drivers.
  This option is only available for Firefox and Chrome.
  */
  directConnect: true,

  'chromeOptions': {
    'args': [
      'disable-infobars',
      'show-fps-counter=true',
      "--headless",
      "--disable-gpu",
      "--window-size=800,600"]
  },

  'baseUrl': 'http://juliemr.github.io/protractor-demo/',
  framework: 'jasmine',

  jasmineNodeOpts: {
    'showColors': true,
    'keepAlive': true,
    'defaultTimeoutInterval': 30000,
    print: function () { }
  },

  // specs: ['../test/specs/**.js'],
  specs: ['../test/specs/Addition.spec.js'],

  onPrepare: function () {
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