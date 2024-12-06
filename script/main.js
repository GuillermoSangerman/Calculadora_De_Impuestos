const mountgageAmount = document.querySelector('#mountgage_amount')
const mountgageTerm = document.querySelector('#mountgage_term')
const interestRate = document.querySelector('#interest_rate')
const repayment = document.querySelector('#repayment')
const interestOnly = document.querySelector('#interest_only')
const btnCalculate = document.querySelector('#btn_calculate')
const clearAll = document.querySelector('.clear_all')

mountgageAmount.value = 0
mountgageTerm.value = 0
interestRate.value = 0


function obtenerIntereses(r) {
    let result = r / 100 / 12
    return result
}
function obtenerMeses(n) {
    let result = n * 12
    return result
}
function calculoDeIntereses(p, r, n) {
    let primerValor = p * r * ((1 + r) ** n)
    // console.log(primerValor);
    let segundoValor = ((1 + r) ** n) - 1
    // console.log(segundoValor);
    let res = (primerValor / segundoValor).toFixed(2)
    console.log(res);
}
// //  M = Pago mensual.
//  P = Monto del préstamo.
//  r = Tasa de interés mensual (tasa de interés anual dividida por 12).
//  n = Número total de pagos (número de años multiplicado por 12).