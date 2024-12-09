import * as constantes from "./formula.js"
const containerForm = document.querySelector('.container_desktop')

// Resetear valores
 export function resetAll() {
    constantes.mountgageAmount.value = ""
    constantes.mountgageTerm.value = ""
    constantes.interestRate.value = ""
    constantes.resultsRepay.value = 0
    constantes.resultsRepayments.value = 0
    constantes.resultsContainer.classList.remove('d-none')
    constantes.resultsContainerCal.classList.add('d-none')
    containerForm.reset()
}