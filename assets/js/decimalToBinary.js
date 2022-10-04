function getInputValue() {
    let inputVal = document.getElementsByClassName("inputClass")[0].value;
    document.getElementById("result").innerHTML= "The result is: " + toDecimal(inputVal);
}

function toDecimal (n) {
    let bits = Number(n).toString(2);
    return bits;
}