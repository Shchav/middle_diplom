const leaveRequest = (
    url = 'https://jsonplaceholder.typicode.com/posts'
) => {

    // На странице таких одинаковых форм оставления заявки как минимум 2
    const forms = document.querySelectorAll('.order-form.rf form')
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            submit(form)
        })
    })

    // Валидация данных формы
    const validate = (formData) => {
        return (
            formData.fio && // Проверка пустого значения
            /^[а-яА-Яa-zA-Z]*$/.test(formData.fio) &&
            formData.phone &&
            /^\+?\d{1,16}$/.test(formData.phone)
        )
    }

    // Мигание красным цветом рамки элемента, куда входит форма
    let idInterval;
    const alarm = (form) => {
        clearInterval(idInterval)
        const alarm = form.closest('div.order-form.rf')
        alarm.style.borderColor = ''
        const currentAlarmColor = window.getComputedStyle(alarm).borderColor
        let countAlarm = 0
        idInterval = setInterval(() => {
            countAlarm % 2 ? alarm.style.borderColor = currentAlarmColor :
                alarm.style.borderColor = "red"
            if (countAlarm++ >= 5) {
                alarm.style.borderColor = ''
                clearInterval(idInterval)
            }
        }, 250);
    }

    // Отправка данных формы
    const sendData = (formData) => {
        return fetch(url, {
            method: 'POST',
            Data: JSON.stringify(formData),
            headers: {
                "Content-type": "application/json"
            }
        }).then(res => res.json())
    }

    const submit = (form) => {
        // Инпуты формы, значения которых необходимо обрабатывать и отправлять
        const formInputs = {
            fio: form.querySelector('input[name="fio"]'),
            phone: form.querySelector('input[name="phone"]')
        }
        // Формирование объекта с данными формы
        let formData = {}
        Object.entries(formInputs).forEach(([key, val]) => {
            formData[key] = val.value;
        })
        // Не на всех страницах есть калькулятор
        const calcTotal = document.querySelector('#calc-total')
        formData['total'] = calcTotal ? calcTotal.value : '';

        // Валидация данных формы
        if (!validate(formData)) {
            // Мигание красным цветом рамки элемента, куда входит форма
            alarm(form)
            return;
        }
        sendData(formData)
            .then(formData => {
                formInputs.forEach(input => {
                    input.value = ''; // Очистка input-ов формы после отправки
                })
            })
            .catch(error => {
                alert('Ошибка отправки заявки');
                console.log(formData);
            })
    }
}

export default leaveRequest;