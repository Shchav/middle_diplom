import { animate } from "./helpers.js";

export const scrolling = ({
    smoothScrollCls,
    timeScroll = 3000
}) => {

    // Кнопка прокрутки страницы на самый верх
    const smoothScrollBtn = document.querySelector(smoothScrollCls)

    // Слушатель прокрутки страницы
    window.addEventListener('scroll', (e) => {
        // Отоббражение/скрытие кнопки прокрутки страницы 
        // на самый верх в зависимости от текущего положения страницы
        hideIfNecessary()
    })

    // Слушатель нажатия на кнопку прокрутки страницы на самый верх
    smoothScrollBtn.addEventListener('click', (e) => {
        animation(0)
    })

    // Скрыть или отобразить кнопку прокрутки страницы на самый верх
    //  в зависимости от текущего положения страницы
    const hideIfNecessary = () => {
        smoothScrollBtn.style.display = document.documentElement.scrollTop ?
            'block' :
            'none' // Кнопка скрывается, если смещение страницы равно 0
    }
    hideIfNecessary()

    const animation = (finishTop) => {
        let currentTop = document.documentElement.scrollTop;

        animate({
            duration: timeScroll,
            timing(timeFraction) {
                return 1 - Math.pow(1 - timeFraction, 10);
            },
            draw(progress) {
                document.documentElement.scrollTop =
                    Math.floor(currentTop + (finishTop - currentTop) * progress);
            }
        });
    }
}