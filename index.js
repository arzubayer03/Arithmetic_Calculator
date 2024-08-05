var num1 = document.getElementById("number1");
var num2 = document.getElementById("number2");
var res = document.getElementById("result");

document.getElementById("add").addEventListener("click", function() {
    res.value = parseInt(num1.value)+parseInt(num2.value);
});

document.getElementById("sub").addEventListener("click", function() {
    res.value = parseInt(num1.value)-parseInt(num2.value);
});

document.getElementById("mul").addEventListener("click", function() {
    res.value = parseInt(num1.value)*parseInt(num2.value);
});

document.getElementById("div").addEventListener("click", function() {
    res.value = parseInt(num1.value)/parseInt(num2.value);
});