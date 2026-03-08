export const sertificates = () => {

    // Содержимое блока "Сертификаты и документы"
    const sertificateBlock = document.querySelector('a.sertificate-document').closest('.text-center')
    // Модальное окно отображения оригинального изображения сертификата
    const sertificateModal = document.getElementById('sertificate-modal')
    // Оригинальное изображение сертификата в модальном окне
    const sertificateOriginalImage = document.getElementById('sertificate-original-image')

    // Слушатель клика мыши на содержимом блока "Сертификаты и документы"
    sertificateBlock.addEventListener('click', (e) => {
        // Модальное окно отображение оригинального изображения сертификата отображено и
        // клик мыши вне оригинального изображения в этом модальном окне скрывает это 
        // модальное окно
        if (e.target.id == 'sertificate-modal') {
            sertificateModal.style.display = 'none'
            // Модальное окно отображение оригинального изображения сертификата отображено и
            // при клике мыши на самом оригинальном изображении ничего не происходит
        } else if (e.target.id == 'sertificate-original-image') {
            return
            // Модальное окно отображение оригинального изображения сертификата скрыто и
            // клик мыши на иконке сертификата приводит к отображению этого модального окна
        } else {
            e.preventDefault()
            // Оригинальное изображение сертификата
            // sertificateOriginalImage.src = e.target.parentElement.href
            sertificateOriginalImage.src = e.target.closest('a').href
            // Отображение модального окна с изображением оригинального изображения 
            // сертификата
            sertificateModal.style.display = 'flex'
        }
    })
}