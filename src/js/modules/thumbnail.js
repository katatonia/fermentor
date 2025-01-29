window.thumbnail = function () {
    // Проверяем, есть ли модальное окно на странице
    const modal = document.getElementById("imageModal");

    // Собираем все миниатюры с нужными классами
    const thumbnails = document.querySelectorAll(".booking__thumbnail, .gallery__thumbnail");

    // Если модального окна или миниатюр нет, прерываем выполнение
    if (!modal || thumbnails.length === 0) {
        console.warn("Ошибка: `#imageModal` или `.booking__thumbnail, .gallery__thumbnail` не найдены!");
        return;
    }

    // Элементы модального окна
    const modalImage = modal.querySelector(".thumbnail-modal__image");
    const closeButton = modal.querySelector(".thumbnail-modal__close");
    const overlay = modal.querySelector(".thumbnail-modal__overlay");

    // Проверяем, есть ли все элементы внутри модального окна
    if (!modalImage || !closeButton || !overlay) {
        console.warn("Ошибка: Элементы модального окна отсутствуют в `#imageModal`!");
        return;
    }

    // Функция открытия модального окна
    function openModal(fullImageUrl) {
        modalImage.src = fullImageUrl;
        modal.setAttribute("aria-hidden", "false");
        modal.classList.add("visible");
        document.body.style.overflow = "hidden";

        // Добавляем обработчик закрытия по клавише Escape
        document.addEventListener("keydown", escKeyHandler);
    }

    // Функция закрытия модального окна
    function closeModal() {
        modal.setAttribute("aria-hidden", "true");
        modal.classList.remove("visible");
        modalImage.src = ""; // Очищаем src
        document.body.style.overflow = "";

        // Удаляем обработчик клавиши Escape
        document.removeEventListener("keydown", escKeyHandler);
    }

    // Обработчик клавиши Escape
    function escKeyHandler(event) {
        if (event.key === "Escape") {
            closeModal();
        }
    }

    // Открытие модального окна по клику на миниатюру
    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener("click", (event) => {
            const fullImageUrl = event.target.dataset.full;

            if (fullImageUrl) {
                openModal(fullImageUrl);
            }
        });
    });

    // Обработчики закрытия модального окна
    closeButton.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);
};
