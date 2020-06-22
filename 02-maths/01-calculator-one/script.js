/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value
    var firstOperand;
    var secondOperand;

    document.getElementById("addition").addEventListener("click", function() {

        firstOperand = +document.getElementById("op-one").value;
        secondOperand = +document.getElementById("op-two").value;

        var sum = firstOperand + secondOperand;

        alert(sum);

        document.querySelectorAll("input").innerHTML = "";

    });

    document.getElementById("substraction").addEventListener("click", function() {
        var firstOperand = +document.getElementById("op-one").value;
        var secondOperand = +document.getElementById("op-two").value;

        var difference = firstOperand - secondOperand;

        alert(difference);

        document.querySelectorAll("input").innerHTML = "";
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        var firstOperand = +document.getElementById("op-one").value;
        var secondOperand = +document.getElementById("op-two").value;

        var product = firstOperand * secondOperand;

        alert(product);

        document.querySelectorAll("input").innerHTML = "";
    });

    document.getElementById("division").addEventListener("click", function() {
        var firstOperand = +document.getElementById("op-one").value;
        var secondOperand = +document.getElementById("op-two").value;

        var quotient = firstOperand / secondOperand;

        alert(quotient);

        document.querySelectorAll("input").innerHTML = "";
    });
})();