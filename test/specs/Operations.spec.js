const { browser, element, by, ElementArrayFinder } = require('protractor');
const expectationForOperation = require("../utils/expectation");
const calculatorPO = require("../Pages/calculator.PageObjects");
var EC = protractor.ExpectedConditions;

beforeAll(function () {
    console.log("----------------reloading Browser--------------");
    browser.get(browser.baseUrl);
});
describe('Operations', () => {

    it('DIVISION 3-2', () => {
        a = 3; b = 2;
        calculatorPO.first.clear().sendKeys(a);
        calculatorPO.second.clear().sendKeys(b);
        calculatorPO.operator.click();
        calculatorPO.allOptions.get(1).click();
        expect(calculatorPO.allOptions.get(1).getAttribute('value')).toBe('DIVISION');
        // element(by.model('operator')).click();
        calculatorPO.goButton.click()
        browser.waitForAngular();
        expect(calculatorPO.resultPRocessedBinding.getText()).toBe(String(expectationForOperation.divide(a, b)));

        expect(element(by.binding('result.first')).getText()).toBe(String(a));
        expect(element(by.binding('result.operator')).getText()).toBe('/');
        expect(element(by.binding('result.second')).getText()).toBe(String(b));

    });

    it('SUBTRACTION 1-1', () => {
        a = 1; b = 2
        calculatorPO.first.clear().sendKeys(a);
        calculatorPO.second.clear().sendKeys(b);
        calculatorPO.operator.click();
        calculatorPO.allOptions.get(4).click();
        expect(calculatorPO.allOptions.get(4).getAttribute('value')).toBe('SUBTRACTION');
        calculatorPO.goButton.click();
        expect(calculatorPO.resultCalculated.getText()).toBe(String(expectationForOperation.substraction(a, b)));
    });

    it('MODULO', () => {
        a = 1; b = 2
        calculatorPO.first.clear().sendKeys(a);
        calculatorPO.second.clear().sendKeys(b);
        calculatorPO.operator.click();
        calculatorPO.allOptions.get(2).click();
        expect(calculatorPO.allOptions.get(2).getAttribute('value')).toBe('MODULO');
        calculatorPO.goButton.click();
        expect(calculatorPO.resultCalculated.getText()).toBe(String(expectationForOperation.reminder(a, b)));
    });


    it('DIVISION', () => {
        a = 1; b = 2
        calculatorPO.first.clear().sendKeys(a);
        calculatorPO.second.clear().sendKeys(b);
        calculatorPO.operator.click();
        calculatorPO.allOptions.get(1).click();
        expect(calculatorPO.allOptions.get(1).getAttribute('value')).toBe('DIVISION');
        calculatorPO.goButton.click();
        expect(calculatorPO.resultCalculated.getText()).toBe(String(expectationForOperation.divide(a, b)));
    });
    it('MULTIPLICATION', () => {
        a = 1; b = 2
        calculatorPO.first.clear().sendKeys(a);
        calculatorPO.second.clear().sendKeys(b);
        calculatorPO.operator.click();
        calculatorPO.allOptions.get(3).click();
        expect(calculatorPO.allOptions.get(3).getAttribute('value')).toBe('MULTIPLICATION');
        calculatorPO.goButton.click();
        expect(calculatorPO.resultCalculated.getText()).toBe(String(expectationForOperation.multiplication(a, b)));
    });
    it('results log validation', () => {


        // expect(element.all(by.repeater('result in memory')).count()).toEqual(0);

        // expect(element.all(by.binding('result.value')).getText()).not.toBeNull;

        var group = element.all(by.binding('result.value')).getText();
        group.then()
        // console.log("object :group:=>" + group);
    });

});