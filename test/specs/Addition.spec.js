const { browser, element, by } = require('protractor');
const expectationForOperation = require("../utils/expectation");
const calculatorPO = require("../Pages/calculator.PageObjects");
const logger = require("../utils/log")

beforeAll(function () {
    logger.log('info', "----------------reloading Browser--------------");
    browser.get(browser.baseUrl);
});

describe('Addition', () => {
    logger.log('info', 'test message %s', 'my string');
    logger.log('info', 'test message %d', 123);
    logger.log('info', 'test message %s, %s', 'first', 'second', { number: 123 });
    it('add 3+2', () => {
        a = 3; b = 2;
        calculatorPO.first.clear().sendKeys(a);
        expect(calculatorPO.first.getText()).toBe(String(a));
        expect(calculatorPO.operator.getText()).toBe('+');
        calculatorPO.second.clear().sendKeys(b);
        expect(calculatorPO.second.getText()).toBe(String(b));
        calculatorPO.goButton.click();
        calculatorPO.resultPRocessedBinding.getText().then((s) => {
            logger.log('info', s);
        });


        browser.waitForAngular();
        expect(calculatorPO.resultPRocessedBinding.getText()).toBe(String(expectationForOperation.addition(a, b)));
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

    // it('results log validation', () => {

    //     var start = new Date().getTime();
    //     browser.executeAsyncScript(
    //         'window.setTimeout(arguments[arguments.length - 1], 5000);').
    //         then(function () {
    //             console.log(
    //                 'Elapsed time: ' + (new Date().getTime() - start) + ' ms');
    //         });
    //     expect(element.all(by.repeater('result in memory')).count()).toEqual(2);
    //     expect(element.all(by.binding('result.value')).getText()).toEqual(['3', '5']);
    //     // element.all(by.binding('result.value')).getText().then((e) => {
    //     //     console.log(e);
    //     // });
    // });
});