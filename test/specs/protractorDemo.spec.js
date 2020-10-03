
const { browser, element } = require('protractor');
const calculatorPO = require("../Pages/calculator.PageObjects");

// Jasmine is fully supported as test and assertion frameworks.
//No need to import chai

// var url = "https://juliemr.github.io/protractor-demo/";

    browser.get('http://juliemr.github.io/protractor-demo/');
describe('Super calculator addition', () => {
    // let Header = element(by.tagName("h3"));
    // let first = element(by.model('first'));
    // let operator = element(by.model('operator'));
    // let allOptions = element.all(by.options('value for (key, value) in operators'));
    // let second = element(by.model('second'));


    // beforeEach(function () {
    //     console.log("----------------reloading Browser--------------");
    //     browser.get('http://juliemr.github.io/protractor-demo/');
    // });

    it('title should be \'Super Calculator\'', () => {
        expect(browser.getTitle()).toBe('Super Calculator');
    });

    it('header should be \'Super Calculator\'', () => {
        expect(calculatorPO.Header.getText()).toBe('Super Calculator');
    });

    it('should have 5 options', () => {
        // allOptions.count().then((n) => {
        //     // assert.equal(n, 5, "[message: count mismatch]");
        // })
        expect(calculatorPO.allOptions.count()).toBe(5);
    });

    it('first operation should be \'Addition\'', () => {
        expect(calculatorPO.allOptions.first().getAttribute('value')).toBe("ADDITION");
    });

    it("All allowed operations should be [\'ADDITION', 'DIVISION', 'MODULO', 'MULTIPLICATION', 'SUBTRACTION\']", function () {
        expect(calculatorPO.allOptions.getAttribute('value')).toEqual(['ADDITION', 'DIVISION', 'MODULO', 'MULTIPLICATION', 'SUBTRACTION']);
    });


});