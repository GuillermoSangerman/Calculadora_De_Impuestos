import { resetAll } from "./resetForm.js"
import * as valores from "./formula.js"
const btnCalculate = document.querySelector('.btn_calculate')
const clearAll = document.querySelector('.clear_all')
const mountgageAmountInvalid = document.querySelector("#mountgage_amount_invalid")
const mountgageTermIvalid = document.querySelector("#mountgage_term_invalid")
const interestRateInvalid = document.querySelector("#interest_rate_invalid")
const repaymentInvalid = document.querySelector('#repayment_invalid')
const numberIconYears = document.querySelector('#number_icon_years')
const numberIconPorcentaje = document.querySelector('#number_icon_porcentaje')
const numberIcon = document.querySelector('#number_icon')
const repayment = document.querySelector('#repayment')
// valoracion de inputs
function agregarInput() {
    console.log(repayment.checked, valores.interestOnly.checked);
    if (valores.mountgageAmount.value === "" || valores.mountgageAmount.value < 1) {
        mountgageAmountInvalid.classList.add('d-block')
        mountgageAmountInvalid.classList.remove("d-none")
        valores.mountgageAmount.classList.add(`mountgage_invalid`)
        valores.mountgageAmount.classList.add(`focus_invalid`)
        valores.mountgageAmount.classList.remove('focus_content')
        valores.mountgageAmount.classList.remove('mountgage_amount')
        numberIcon.classList.add('number_invalid')
        numberIcon.classList.remove('number_icon')
    } else {
        mountgageAmountInvalid.classList.add('d-none')
        valores.mountgageAmount.classList.remove(`mountgage_invalid`)
        valores.mountgageAmount.classList.remove(`focus_invalid`)
        valores.mountgageAmount.classList.add('focus_content')
        valores.mountgageAmount.classList.add('mountgage_amount')
        numberIcon.classList.remove('number_invalid')
        numberIcon.classList.add('number_icon')
    }
    if (valores.mountgageTerm.value === "" || valores.mountgageTerm.value < 1) {
        mountgageTermIvalid.classList.add('d-block')
        mountgageTermIvalid.classList.remove("d-none")
        valores.mountgageTerm.classList.add(`mountgage_invalid`)
        valores.mountgageTerm.classList.add(`focus_invalid`)
        valores.mountgageTerm.classList.remove('focus_content')
        valores.mountgageTerm.classList.remove('mountgage_term')
        numberIconYears.classList.add('number_invalid')
        numberIconYears.classList.remove('number_icon_years')
    } else {
        mountgageTermIvalid.classList.add('d-none')
        valores.mountgageTerm.classList.remove(`mountgage_invalid`)
        valores.mountgageTerm.classList.remove(`focus_invalid`)
        valores.mountgageTerm.classList.add('focus_content')
        valores.mountgageTerm.classList.add('mountgage_term')
        numberIconYears.classList.remove('number_invalid')
        numberIconYears.classList.add('number_icon_years')
    }
    if (valores.interestRate.value === "" || valores.interestRate.value < 1) {
        interestRateInvalid.classList.add('d-block')
        interestRateInvalid.classList.remove("d-none")
        valores.interestRate.classList.add(`mountgage_invalid`)
        valores.interestRate.classList.add(`focus_invalid`)
        valores.interestRate.classList.remove('focus_content')
        valores.interestRate.classList.remove('mountgage_term')
        numberIconPorcentaje.classList.add('number_invalid')
        numberIconPorcentaje.classList.remove('number_icon_years')
    } else {
        interestRateInvalid.classList.add('d-none')
        valores.interestRate.classList.remove(`mountgage_invalid`)
        valores.interestRate.classList.remove(`focus_invalid`)
        valores.interestRate.classList.add('focus_content')
        valores.interestRate.classList.add('mountgage_term')
        numberIconPorcentaje.classList.remove('number_invalid')
        numberIconPorcentaje.classList.add('number_icon_years')
    }
    if (repayment.checked === false && valores.interestOnly.checked === false
    ) {
        repaymentInvalid.classList.add("d-block")
        repaymentInvalid.classList.remove("d-none")
    }
    if (repayment.checked === true && valores.interestOnly.checked === false ||
        repayment.checked === false && valores.interestOnly.checked === true) {
        repaymentInvalid.classList.add("d-none")
    }
    if (repayment.checked === true && valores.interestOnly.checked === false) {
        valores.repaymentChecked()
    } else if (repayment.checked === false && valores.interestOnly.checked === true) {
        valores.interestOnlyChecked()
    }
}

clearAll.addEventListener('click', resetAll)
btnCalculate.addEventListener('click', agregarInput)