var operation = new function () {

    this.addition = function (a, b) {
        return a + b;
    }
    this.substraction = function (a, b) {
        return a - b;
    }

    this.multiplication = function (a, b) {
        return a * b;
    }
    this.divide = function (a, b) {
        return a / b;
    }
    this.reminder = function (a, b) {
        return a % b;
    }

    // return (addition, substraction, multiplication, divide, reminder);
}
module.exports = operation;