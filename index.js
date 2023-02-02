const inputValueNode = document.querySelector(".js-input-value")
const selectCurrencyNode = document.querySelector(".js-select-currency")
const outputNode = document.querySelector(".js-output")

function getInput() {
    return {
        rub: Number(inputValueNode.value),
        currency: selectCurrencyNode.value
    }
}

function render(result) {
    outputNode.innerHTML = result
}

inputValueNode.addEventListener("input", () => {
    const result = convert(getInput())
    render(result)
})

selectCurrencyNode.addEventListener("change", () => {
    const result = convert(getInput())
    render(result)
})