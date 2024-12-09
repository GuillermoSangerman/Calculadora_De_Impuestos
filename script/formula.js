


export const mountgageAmount = document.querySelector('#mountgage_amount')
export const mountgageTerm = document.querySelector('#mountgage_term')
export const interestRate = document.querySelector('#interest_rate')
export const interestOnly = document.querySelector('#interest_only')
export const resultsRepayments = document.querySelector('#results_repayments')
export const resultsRepay = document.querySelector('#results_repay')
export const resultsContainer = document.querySelector('.results_container')
export const resultsContainerCal = document.querySelector('.results_container_cal')

// valores iniciales
mountgageAmount.value = ""
mountgageTerm.value = ""
interestRate.value = ""
resultsRepay.value = 0
resultsRepayments.value = 0
let p = 0
let r = 0
let n = 0


// calculo de las formulas y condiciones
export function repaymentChecked() {
    if (mountgageAmount.value === "" && mountgageAmount.value < 1 || mountgageTerm.value === "" && mountgageTerm.value < 1 || interestRate.value === "" && interestRate.value < 1) {
        console.log("es Nan");
        resultsContainer.classList.remove('d-none')
        resultsContainerCal.classList.add('d-none')
    } else {
        resultsContainer.classList.add('d-none')
        resultsContainerCal.classList.remove('d-none')
        p = parseFloat(mountgageAmount.value)
        r = obtenerIntereses(parseFloat(interestRate.value))
        n = obtenerMeses(parseFloat(mountgageTerm.value))
        console.log(p, r, n);
        calculoDeIntereses(p, r, n)
    }

}
export function interestOnlyChecked() {
    if (mountgageAmount.value === "" && mountgageAmount.value < 1 || mountgageTerm.value === "" && mountgageTerm.value < 1 || interestRate.value === "" && interestOnly.value > 1) {
        console.log("es Nan");
        resultsContainer.classList.remove('d-none')
        resultsContainerCal.classList.add('d-none')
    }  else {
        resultsContainer.classList.add('d-none')
        resultsContainerCal.classList.remove('d-none')
        p = parseFloat(mountgageAmount.value)
        r = obtenerIntereses(parseFloat(interestRate.value))
        n = obtenerMeses(parseFloat(mountgageTerm.value))
        console.log(p, r, n);
        soloIntereses(p, r, n)
    }

}
//  M = Pago mensual.
//  P = Monto del préstamo.
//  r = Tasa de interés mensual (tasa de interés anual dividida por 12).
//  n = Número total de pagos (número de años multiplicado por 12).

// funciones de calculo
export function obtenerIntereses(r) {
    let result = r / 100 / 12
    return result
}
export function obtenerMeses(n) {
    let result = n * 12
    return result
}
export function calculoDeIntereses(p, r, n) {
    let primerValor = p * r * ((1 + r) ** n)
    let segundoValor = ((1 + r) ** n) - 1
    let res = (primerValor / segundoValor)
    resultsRepayments.value = res.toFixed(2)
    resultsRepay.value = (res * n).toFixed(2)
}
export function soloIntereses(p, r, n) {
    let primerValor = p * r * ((1 + r) ** n)
    let segundoValor = ((1 + r) ** n) - 1
    let res = (primerValor / segundoValor)
    let multiplicoYResto = (res * n) - p
    let divido = multiplicoYResto / n
    resultsRepayments.value = divido.toFixed(2)
    resultsRepay.value = multiplicoYResto.toFixed(2)
}