export const calc = () => {

    // Блок рассчета
    const calcBlock = document.querySelector('#calc')
    // Не на всех страницах есть калькулятор
    if (!calcBlock) return
    // Тип балкона
    const type = document.querySelector('#calc-type')
    // Материал
    const material = document.querySelector('#calc-type-material')
    // Площадь
    const square = document.querySelector('#calc-input')
    // Итого
    const total = document.querySelector('#calc-total')

    square.addEventListener('input', (e) => {
        if (square.value <= 0) {
            square.value = '';
        }
        calcTotal()
    });

    calcBlock.addEventListener('change', (e) => {
        calcTotal()
    })

    const calcTotal = () => {
        if (
            parseFloat(type.value) &&
            parseInt(material.value) &&
            parseFloat(square.value)
        ) {
            total.value = Math.round(
                square.value * type.value * material.value
                * 100) / 100
        } else {
            total.value = ''
        }
    }
}