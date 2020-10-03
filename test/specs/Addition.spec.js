const { browser, element, by } = require('protractor');
const expectationForOperation = require("../utils/expectation");
const calculatorPO = require("../Pages/calculator.PageObjects");
var EC = protractor.ExpectedConditions;


browser.get('http://juliemr.github.io/protractor-demo/');
describe('Addition', () => {
    // beforeEach(function () {
    //     console.log("----------------reloading Browser--------------");
    //     browser.get('http://juliemr.github.io/protractor-demo/');
    // });
    it('add 3+2', () => {
        a = 3; b = 2;
        calculatorPO.first.clear().sendKeys(a);
        calculatorPO.second.clear().sendKeys(b);
        calculatorPO.goButton.click()
        browser.waitForAngular();
        expect(calculatorPO.resultPRocessedBinding.getText()).toBe(String(expectationForOperation.addition(a, b)));

        expect(element(by.binding('result.first')).getText()).toBe(String(a));
        expect(element(by.binding('result.operator')).getText()).toBe('+');
        expect(element(by.binding('result.second')).getText()).toBe(String(b));

    });

    it('add 1+1', () => {
        a = 1; b = 2
        calculatorPO.first.clear().sendKeys(a);
        calculatorPO.second.clear().sendKeys(b);
        calculatorPO.goButton.click()
        expect(calculatorPO.resultCalculated.getText()).toBe(String(expectationForOperation.addition(a, b)));
    });

    it('value in field', () => {
        a = 4;
        calculatorPO.first.clear().sendKeys(a);
        expect(calculatorPO.first.getAttribute('value')).toBe(String(a));
    });

    it('results log validation', () => {

        var start = new Date().getTime();
        browser.executeAsyncScript(
            'window.setTimeout(arguments[arguments.length - 1], 5000);').
            then(function () {
                console.log(
                    'Elapsed time: ' + (new Date().getTime() - start) + ' ms');
            });
        expect(element.all(by.repeater('result in memory')).count()).toEqual(2);
        expect(element.all(by.binding('result.value')).getText()).toEqual(['3', '5']);
        // element.all(by.binding('result.value')).getText().then((e) => {
        //     console.log(e);
        // });
    });
});