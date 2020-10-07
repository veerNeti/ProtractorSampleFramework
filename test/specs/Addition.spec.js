const { browser, element, by } = require('protractor');
const expectationForOperation = require("../utils/expectation");
const calculatorPO = require("../Pages/calculator.PageObjects");
const logger = require("../utils/log")

beforeAll(function () {
    logger.log('info', "--------------BeforeAll Hook--------------");
    logger.log('info', 'test message %s', 'sample log');
    browser.get(browser.baseUrl);
});


describe('Feature: operation Addition', () => {

    it('3+2 should be 5', async () => {
        a = 3; b = 2;
        calculatorPO.first.clear().sendKeys(a);
        calculatorPO.second.clear().sendKeys(b);
        expect(calculatorPO.first.getAttribute('value')).toBe(String(3));
        expect(calculatorPO.operator.getAttribute('value')).toBe('ADDITION');
        expect(calculatorPO.second.getAttribute('value')).toBe(String(b));

        calculatorPO.goButton.click();
        browser.waitForAngular();
        calculatorPO.resultPRocessedBinding.getText().then((text) => {
            console.log('info', text);
            expect(text).toBe(String(expectationForOperation.addition(a, b)));
        });

        expect(calculatorPO.resultPRocessedBinding.getText()).toBe(String(expectationForOperation.addition(a, b)));
    });

    it('1+1 should be 2', () => {
        a = 1; b = 2
        calculatorPO.first.clear().sendKeys(a);
        calculatorPO.second.clear().sendKeys(b);
        calculatorPO.goButton.click();
        expect(calculatorPO.resultCalculated.getText()).toBe(String(expectationForOperation.addition(a, b)));
    });

    it('Entering 4 in inputbox should hold the value 4 in field', () => {
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