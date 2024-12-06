const mountgageAmount = document.querySelector('#mountgage_amount')
const mountgageTerm = document.querySelector('#mountgage_term')
const interestRate = document.querySelector('#interest_rate')
const repayment = document.querySelector('#repayment')
const interestOnly = document.querySelector('#interest_only')
const btnCalculate = document.querySelector('.btn_calculate')
const clearAll = document.querySelector('.clear_all')
const resultsContainer = document.querySelector('.results_container')
const resultsContainerCal = document.querySelector('.results_container_cal')
const resultsRepayments = document.querySelector('#results_repayments')
const resultsRepay = document.querySelector('#results_repay')

mountgageAmount.value = ""
mountgageTerm.value = ""
interestRate.value = ""
resultsRepay.value = 0
resultsRepayments.value = 0
let p = 0
let r = 0
let n = 0

function cliqueo() {

}
function agregarInput() {
    if (mountgageAmount.value === "" ||
        mountgageTerm.value === "" ||
        interestRate.value === "") {
        console.log("casilla vacia");
    } else {
        resultsContainer.classList.add('d-none')
        resultsContainerCal.classList.remove('d-none')
        p = parseFloat(mountgageAmount.value)
        r = obtenerIntereses(parseFloat(interestRate.value))
        n = obtenerMeses(parseFloat(mountgageTerm.value))
        console.log(p, r, n);
        soloIntereses(p, r, n)
    }



}

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
    let segundoValor = ((1 + r) ** n) - 1
    let res = (primerValor / segundoValor)
    resultsRepayments.value = res.toFixed(2)
    resultsRepay.value = (res * n).toFixed(2)
}
function soloIntereses(p, r, n) {
    let primerValor = p * r * ((1 + r) ** n)
    let segundoValor = ((1 + r) ** n) - 1
    let res = (primerValor / segundoValor)
    let multiplicoYResto = (res * n) - p
    let divido = multiplicoYResto / n
    resultsRepayments.value = divido.toFixed(2)
    resultsRepay.value = multiplicoYResto.toFixed(2)
}
//  M = Pago mensual.
//  P = Monto del préstamo.
//  r = Tasa de interés mensual (tasa de interés anual dividida por 12).
//  n = Número total de pagos (número de años multiplicado por 12).
function resetAll() {
    mountgageAmount.value = ""
    mountgageTerm.value = ""
    interestRate.value = ""
    resultsRepay.value = 0
    resultsRepayments.value = 0
    //location.reload()
}
clearAll.addEventListener('click', () => {
    resultsContainer.classList.remove('d-none')
    resultsContainerCal.classList.add('d-none')
    resetAll()
})

btnCalculate.addEventListener('click', () => {
    agregarInput()
})