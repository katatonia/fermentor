window.modal = function () {
    const body = document.body;
    const overlay = document.querySelector(".overlay");

    if (!overlay) {
        console.warn("Ошибка: Элемент `.overlay` не найден!");
        return;
    }

    // Обработчик для открытия модального окна
    const modalButtons = document.querySelectorAll("[data-modal]");
    if (modalButtons.length) {
        modalButtons.forEach((button) => {
            button.addEventListener("click", () => {
                const modalId = button.getAttribute("data-modal");
                const modal = document.getElementById(modalId);
                if (modal) {
                    modal.classList.add("active");
                    overlay.classList.add("active");
                    body.classList.add("lock");
                } else {
                    console.warn(`Ошибка: Модальное окно с ID "${modalId}" не найдено.`);
                }
            });
        });
    } else {
        console.warn("Нет кнопок с атрибутом `data-modal`.");
    }

    // Обработчик для закрытия модального окна
    overlay.addEventListener("click", (e) => {
        if (
            e.target.classList.contains("overlay") ||
            e.target.classList.contains("modal__close")
        ) {
            closeModal();
        }
    });

    function closeModal() {
        document.querySelectorAll(".modal.active").forEach((modal) => {
            modal.classList.remove("active");
        });
        overlay.classList.remove("active");
        body.classList.remove("lock");
    }
};

