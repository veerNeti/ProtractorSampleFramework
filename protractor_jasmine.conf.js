exports.config = {


  /*  
  directConnect - to connect directly to the browser Drivers.
  This option is only available for Firefox and Chrome.
  */
  // directConnect: true,



  multiCapabilities: [{
    'browserName': 'firefox'
  }, {
    'browserName': 'chrome'
  }],

  framework: 'jasmine',

  capabilities: {
    'browserName': 'chrome',
    'maxInstances': 3,
    'shardTestFiles': true,
    'seleniumAddress': 'http://localhost:4444/wd/hub',


    'chromeOptions': {
      'args': [
        'show-fps-counter=true',
        // "--headless",
        "--disable-gpu",
        "--window-size=800,600"]
    }
  },





  jasmineNodeOpts: {
    showColors: true,
    keepAlive: true,
    defaultTimeoutInterval: 30000,
    print: function () { }
  },

  specs: ['./test/specs/**.js'],

  onPrepare: function () {
    browser.manage().window().maximize(); // maximize the browser before executing the feature files

    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));

  }
};