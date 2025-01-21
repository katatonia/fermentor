export let thumbnails = () => {
	// Элементы модального окна
	const modal = document.getElementById("imageModal");
	const modalContent = modal.querySelector(".modal__content");
	const modalImage = modal.querySelector(".modal__image");
	const closeButton = modal.querySelector(".modal__close");
	const overlay = modal.querySelector(".modal__overlay");

	// Миниатюры галереи
	const thumbnails = document.querySelectorAll(".booking__thumbnail");

	// Функция для проверки ширины экрана
	function isMobileScreen() {
		return window.innerWidth <= 767;
	}

	// Открытие модального окна
	thumbnails.forEach((thumbnail) => {
		thumbnail.addEventListener("click", (event) => {
			if (isMobileScreen()) {
				const fullImageUrl = event.target.dataset.full;

				if (fullImageUrl) {
					// Устанавливаем src для увеличенного изображения
					modalImage.src = fullImageUrl;

					// Показываем модальное окно
					modal.setAttribute("aria-hidden", "false");
					modal.classList.add("visible");
				}
			}
		});
	});

	// Закрытие модального окна
	function closeModal() {
		modal.setAttribute("aria-hidden", "true");
		modal.classList.remove("visible");
		modalImage.src = ""; // Очищаем src
	}

	// Обработчики закрытия модального окна
	closeButton.addEventListener("click", closeModal);
	overlay.addEventListener("click", closeModal);

	// Закрытие по клавише Esc
	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			closeModal();
		}
	});
};
