window.modal = function () {
    const body = document.body;
    const overlay = document.querySelector(".overlay");
    if (!overlay) return;

    const modalTriggers = document.querySelectorAll("[data-modal]");
    const modals = document.querySelectorAll(".modal");

    if (modalTriggers.length) {
        modalTriggers.forEach((trigger) => {
            trigger.addEventListener("click", (event) => {
                event.preventDefault(); // Предотвращаем стандартное поведение кнопки

                const modalId = trigger.getAttribute("data-modal");

                if (!modalId) {
                    return;
                }

                // Закрываем все модальные окна перед открытием нужного
                modals.forEach((modal) => modal.classList.remove("active"));

                // Ищем нужное модальное окно и открываем его
                const modal = document.getElementById(modalId);

                if (modal) {
                    modal.classList.add("active");
                    overlay.classList.add("active");
                    body.classList.add("lock");
                } else {
                    return;
                }
            });
        });
    } else {
        return;
    }

    // Закрытие модального окна по клику на overlay или кнопку закрытия
    overlay.addEventListener("click", (event) => {
        if (event.target.classList.contains("overlay") || event.target.classList.contains("modal__close")) {
            modals.forEach((modal) => modal.classList.remove("active"));
            overlay.classList.remove("active");
            body.classList.remove("lock");
        }
    });
};
