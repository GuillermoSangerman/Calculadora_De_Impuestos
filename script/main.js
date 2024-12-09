const mountgageAmount = document.querySelector('#mountgage_amount')
const numberIcon = document.querySelector('#number_icon')
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
const container = document.querySelector('.container_desktop')
const mountgageAmountInvalid = document.querySelector("#mountgage_amount_invalid")
const mountgageTermIvalid = document.querySelector("#mountgage_term_invalid")
const interestRateInvalid = document.querySelector("#interest_rate_invalid")
const repaymentInvalid = document.querySelector('#repayment_invalid')
const numberIconYears = document.querySelector('#number_icon_years')
const numberIconPorcentaje = document.querySelector('#number_icon_porcentaje')

mountgageAmount.value = ""
mountgageTerm.value = ""
interestRate.value = ""
resultsRepay.value = 0
resultsRepayments.value = 0
let p = 0
let r = 0
let n = 0

function repaymentChecked() {
    resultsContainer.classList.add('d-none')
    resultsContainerCal.classList.remove('d-none')
    p = parseFloat(mountgageAmount.value)
    r = obtenerIntereses(parseFloat(interestRate.value))
    n = obtenerMeses(parseFloat(mountgageTerm.value))
    console.log(p, r, n);
    calculoDeIntereses(p, r, n)
}
function interestOnlyChecked() {
    resultsContainer.classList.add('d-none')
    resultsContainerCal.classList.remove('d-none')
    p = parseFloat(mountgageAmount.value)
    r = obtenerIntereses(parseFloat(interestRate.value))
    n = obtenerMeses(parseFloat(mountgageTerm.value))
    console.log(p, r, n);
    soloIntereses(p, r, n)
}
function agregarInput() {
        if (mountgageAmount.value === "" || mountgageAmount.value < 0) {
            mountgageAmountInvalid.classList.add('d-block')
            mountgageAmount.classList.add(`mountgage_invalid`)
            mountgageAmount.classList.add(`focus_invalid`)
            mountgageAmount.classList.remove('focus_content')
            mountgageAmount.classList.remove('mountgage_amount')
            numberIcon.classList.add('number_invalid')
            numberIcon.classList.remove('number_icon')
        } else {
            mountgageAmountInvalid.classList.add('d-none')
            mountgageAmount.classList.remove(`mountgage_invalid`)
            mountgageAmount.classList.remove(`focus_invalid`)
            mountgageAmount.classList.add('focus_content')
            mountgageAmount.classList.add('mountgage_amount')
            numberIcon.classList.remove('number_invalid')
            numberIcon.classList.add('number_icon')
        }
        if (mountgageTerm.value === "" || mountgageTerm.value < 0) {
            mountgageTermIvalid.classList.add('d-block')
            mountgageTerm.classList.add(`mountgage_invalid`)
            mountgageTerm.classList.add(`focus_invalid`)
            mountgageTerm.classList.remove('focus_content')
            mountgageTerm.classList.remove('mountgage_term')
            numberIconYears.classList.add('number_invalid')
            numberIconYears.classList.remove('number_icon_years')
        } else {
            mountgageTermIvalid.classList.add('d-none')
            mountgageTerm.classList.remove(`mountgage_invalid`)
            mountgageTerm.classList.remove(`focus_invalid`)
            mountgageTerm.classList.add('focus_content')
            mountgageTerm.classList.add('mountgage_term')
            numberIconYears.classList.remove('number_invalid')
            numberIconYears.classList.add('number_icon_years')
        }
        if (interestRate.value === "" || interestRate.value < 0) {
            interestRateInvalid.classList.add('d-block')
            interestRate.classList.add(`mountgage_invalid`)
            interestRate.classList.add(`focus_invalid`)
            interestRate.classList.remove('focus_content')
            interestRate.classList.remove('mountgage_term')
            numberIconPorcentaje.classList.add('number_invalid')
            numberIconPorcentaje.classList.remove('number_icon_years')
        } else {
            interestRateInvalid.classList.add('d-none')
            interestRate.classList.remove(`mountgage_invalid`)
            interestRate.classList.remove(`focus_invalid`)
            interestRate.classList.add('focus_content')
            interestRate.classList.add('mountgage_term')
            numberIconPorcentaje.classList.remove('number_invalid')
            numberIconPorcentaje.classList.add('number_icon_years')
        }
        if (repayment.checked === false || interestOnly.checked === false) {
            repaymentInvalid.classList.add("d-block")
        } 
        if (repayment.checked === true && interestOnly.checked === false ||
            repayment.checked === false && interestOnly.checked === true) {
            repaymentInvalid.classList.add("d-none")
        }
        if (repayment.checked === true && interestOnly.checked === false) {
            repaymentChecked()
        } else if (repayment.checked === false && interestOnly.checked === true) {
            interestOnlyChecked()
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
    resultsContainer.classList.remove('d-none')
    resultsContainerCal.classList.add('d-none')
    //location.reload()
}
clearAll.addEventListener('click', () => {
    resetAll()
})

btnCalculate.addEventListener('click', agregarInput)