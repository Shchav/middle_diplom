export const sliderCarousel = (
    {
        items = '.benefits__item',
        itemsWrap = '.benefits-wrap',
        arrowsWrap = '.benefits-arrows',
        arrowCls = '.benefits__arrow',
        arrowLeft = 'benefits__arrow--left',
        arrowRight = 'benefits__arrow--right',

        // Кол-во одновременно отображаемых выгод для клиентов в карусели
        numItems
    }) => {

    // Все выгоды для клиентов
    const benefitsItems = document.querySelectorAll(items)
    // Блок-обертка надо выгодами для клиентов
    const benefitsWrap = document.querySelector(itemsWrap)
    // Блок с кнопками слайдера, используется для делегировоания события
    const benefitsArrows = document.querySelector(arrowsWrap)

    // Слушатель изменения размера страницы 
    window.addEventListener('resize', () => {
        displayBenefitsItems(calcDisplayedPositions(getNumsItems()))
    });

    // Начальный номер выгоды для клиента, который будет отображаться первым 
    // в карусели из всех выгод для клиента в benefitsItems
    let startPosition = 0

    // Слушатель нажатия на кнопки перемещения по карусели
    benefitsArrows.addEventListener('click', (e) => {
        // Изменение начального номера выгоды для клиента
        const benefitsArrow = e.target.closest(arrowCls);
        if (benefitsArrow.classList.contains(arrowLeft)) {
            startPosition--
        } else if (benefitsArrow.classList.contains(arrowRight)) {
            startPosition++
        }
        // Начальный номер не может быть меньше нуля и больше общего кол-ва выгод
        if (startPosition < 0) startPosition = benefitsItems.length + startPosition
        if (startPosition >= benefitsItems.length) startPosition = 0

        displayBenefitsItems(calcDisplayedPositions(getNumsItems()))
    })

    // Расчитать номера и правильную последовательность выгод для клиента на основе
    // начальной позиции и заданного кол-во одновременно отображаемых выгод
    const calcDisplayedPositions = (num) => {
        // Значения и последовательность позиций, которые должны отображаться в карусели
        const positions = []
        // Цикл от текущей позиции выгоды и до следующей позиции на расстоянии установленного кол-ва
        for (let index = startPosition; index < startPosition + num; index++) {
            // Если расчитываемая текущая позиция больше общего кол-ва выгод,
            if (index >= benefitsItems.length)
                // то расчитываемая позиция должна начинаться с начала общего кол-ва выгод
                positions.push(index - benefitsItems.length)
            else
                positions.push(index)
        }
        return positions
    }

    // Отображение выгод для клиента в заданном кол-ве в нужном порядке
    const displayBenefitsItems = (positions) => {
        // Перед отображением очищаем все ранее отображенные выгоды
        benefitsItems.forEach(item => {
            item.remove()
        })
        positions.forEach(index => {
            // Выгоды должны отображаться только те, позиции которых рассчитаны
            // и должны отображаться в правильной последовательности
            benefitsWrap.append(benefitsItems[index])
        })
    }

    // Получение кол-во одновременно отображаемых элементов карусели
    // в зависимости от ширины страницы
    const getNumsItems = () => {
        let i = 0
        for (i = 0; i < numItems.length; i++) {
            if (document.documentElement.clientWidth >= numItems[i].betweenWidth[0] &&
                document.documentElement.clientWidth < numItems[i].betweenWidth[1]) {
                break
            }
        }
        return numItems[i].num;
    }

    displayBenefitsItems(calcDisplayedPositions(getNumsItems()))
}