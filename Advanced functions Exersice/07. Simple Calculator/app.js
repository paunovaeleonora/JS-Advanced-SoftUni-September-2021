function calculator() {
    let firstInput;
    let secondInput;
    let resultBox;

    function init(selector1, selector2, selector3) {
        firstInput = document.querySelector(selector1);
        secondInput = document.querySelector(selector2);
        resultBox = document.querySelector(selector3);
        
    }

    function add() {
        resultBox.value = Number(firstInput.value) + Number(secondInput.value);
    }

    function subtract() {
        resultBox.value = Number(firstInput.value) - Number(secondInput.value);
    }

    return { // връщаме референции към функциите, за да можем да фи закачим към външната функция и да ги извикваме при натискаане на бутоните
        init,
        add,
        subtract
    }
}
const calculate = calculator();
calculate.init('#num1', '#num2', '#result'); // извикваме инит за да зададем трите селектора
// нужни за работата на др два функции




