
function calculatorPageObjects() {
    let Header = element(by.tagName("h3"));
    let first = element(by.model('first'));
    let operator = element(by.model('operator'));
    let goButton = element(by.id('gobutton'));
    let resultCalculated = element(by.tagName('h2'));
    let resultPRocessedBinding = element(by.binding('latest'));
    let allOptions = element.all(by.options('value for (key, value) in operators'));

    let second = element(by.model('second'));


    return { Header, first, operator, allOptions, second, goButton, resultCalculated, resultPRocessedBinding };
}

module.exports = calculatorPageObjects();