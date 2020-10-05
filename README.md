# setup the project
> clone the project
> install JDK
> Install npm and node
> java -version
> npm --version
> node --version

From the root directory:
- npm setup
> will update and start "webdriver manager" on port 4444
- npm run test 
> will execute the build e2e
- npm run report
> will launch allure reports in a default browser starting the allure server.



##Installation 

- `npm install -g protractor --save--dev`
- `protractor --version`
- `set NODE_TLS_REJECT_UNAUTHORIZED=0`
- `webdriver-manager update --ignore_ssl`
- `webdriver-manager status --ignore_ssl`
- `webdriver-manager start --ignore_ssl`
- server started on port :4444
  > session: [http://localhost:4444/wd/hub/static/resource/hub.html]
- server started on port :4444
- Protractor needs two files to run, a spec file and a configuration file.

 ``// conf.js
   exports.config = {
   framework: 'jasmine',
   seleniumAddress: '[http://localhost:4444/wd/hub]',
   specs: ['spec.js']
   }``

- run the test `protractor conf.js`
    * visit `package.json`
    * Script
    * `"test": "protractor conf.js"`
    * conf.js

#Jasmine is fully supported as test and assertion frameworks.

#How to connect to Browser Drivers?

> Protractor needs to know how to connect to Drivers for the browsers
> it is testing on. This is usually done through a Selenium Server.
> There are five options - specify one of the following:

- seleniumServerJar - to start a standalone Selenium Server locally.
- seleniumAddress - to connect to a Selenium Server which is already
  running.
- sauceUser/sauceKey - to use remote Selenium Servers via Sauce Labs.
- browserstackUser/browserstackKey - to use remote Selenium Servers via
  BrowserStack.
- directConnect - to connect directly to the browser Drivers.
  This option is only available for Firefox and Chrome.

#How to set up browsers

> Protractor can launch your tests on one or more browsers. If you are
> testing on a single browser, use the capabilities option. If you are
> testing on multiple browsers, use the multiCapabilities array.

> For a list of available capabilities, see
> [https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities]

> In addition, you may specify count, shardTestFiles, and maxInstances.

> Example:
`` capabilities: {
 browserName: 'chrome',
 name: 'Unnamed Job',
 logName: 'Chrome - English',
 count: 1,
 shardTestFiles: false,
 maxInstances: 1,
 specs: ['spec/chromeOnlySpec.js'],
 exclude: ['spec/doNotRunInChromeSpec.js'],
 seleniumAddress: 'http://localhost:4444/wd/hub'
 }``

> supported browser [https://www.protractortest.org/#/browser-support]
#setting up MSEdge webdriver
- [https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/]
> download the suitable version of the binary
- copy the binary into the required folder
- from the command prompt run the `msedgedriver.exe` file
> Starting MSEdgeDriver 85.0.564.68 (226c9a618a11c00d61ee433fede8d2eef5d27985) on port 9515
- use the port number to modify the 
`seleniumAddress: [http://localhost:9515]