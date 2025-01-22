export let thumbnails = () => {
	// Проверяем, есть ли модальное окно и миниатюры на странице
	const modal = document.getElementById("imageModal");
	const thumbnails = document.querySelectorAll(".booking__thumbnail");

	// Если модального окна или миниатюр нет, прерываем выполнение
	if (!modal || thumbnails.length === 0) {
		return;
	}

	// Элементы модального окна
	const modalImage = modal.querySelector(".booking-modal__image");
	const closeButton = modal.querySelector(".booking-modal__close");
	const overlay = modal.querySelector(".booking-modal__overlay");

	// Открытие модального окна
	thumbnails.forEach((thumbnail) => {
		thumbnail.addEventListener("click", (event) => {
			const fullImageUrl = event.target.dataset.full;

			if (fullImageUrl) {
				// Устанавливаем src для увеличенного изображения
				modalImage.src = fullImageUrl;

				// Показываем модальное окно
				modal.setAttribute("aria-hidden", "false");
				modal.classList.add("visible");
				document.body.style.overflow = "hidden";
			}
		});
	});

	// Закрытие модального окна
	function closeModal() {
		modal.setAttribute("aria-hidden", "true");
		modal.classList.remove("visible");
		modalImage.src = ""; // Очищаем src
		document.body.style.overflow = "";
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

