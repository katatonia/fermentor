export const calendar = () => {
	const months = [
		"Январь",
		"Февраль",
		"Март",
		"Апрель",
		"Май",
		"Июнь",
		"Июль",
		"Август",
		"Сентябрь",
		"Октябрь",
		"Ноябрь",
		"Декабрь",
	];

	let currentDate = new Date();

	function renderCalendar(date, calendarDaysElement, currentMonthElement) {
		const year = date.getFullYear();
		const month = date.getMonth();

		currentMonthElement.textContent = `${months[month]} ${year}`;

		const firstDay = new Date(year, month, 1).getDay();
		const lastDate = new Date(year, month + 1, 0).getDate();

		const days = [];

		// Заполнение пустых ячеек перед первым днём месяца
		for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) {
			days.push("<div></div>");
		}

		// Заполнение дней месяца
		for (let i = 1; i <= lastDate; i++) {
			days.push(`<div class=\"calendar__date\">${i}</div>`);
		}

		calendarDaysElement.innerHTML = days.join("");
	}

	function openModal(modal, calendarDaysElement, currentMonthElement) {
		modal.classList.add("visible");
		document.body.style.overflow = "hidden"; // Запрет прокрутки
		renderCalendar(currentDate, calendarDaysElement, currentMonthElement);
	}

	function closeModal(modal) {
		modal.classList.remove("visible");
		document.body.style.overflow = ""; // Восстановление прокрутки
	}

	// Обработчик для всех кнопок и модальных окон
	const buttons = [
		{
			buttonId: "calendarButton",
			modalId: "calendarModal",
		},
		{
			buttonId: "calendarButtonTours",
			modalId: "calendarModalTours",
		},
		{
			buttonId: "calendarButtonOffers-1",
			modalId: "calendarModalOffers-1",
		},
		{
			buttonId: "calendarButtonOffers-2",
			modalId: "calendarModalOffers-2",
		},
		{
			buttonId: "calendarButtonOffers-3",
			modalId: "calendarModalOffers-3",
		},
	];

	buttons.forEach(({ buttonId, modalId }) => {
		const button = document.getElementById(buttonId);
		const modal = document.getElementById(modalId);

		// Проверяем наличие кнопки и модального окна
		if (!button || !modal) {
			console.warn(`Не удалось найти кнопку с id "${buttonId}" или модальное окно с id "${modalId}".`);
			return;
		}

		const closeModalButton = modal.querySelector(".calendar-modal__close");
		const overlay = modal.querySelector(".calendar-modal__overlay");
		const currentMonthElement = modal.querySelector("#currentMonth");
		const calendarDaysElement = modal.querySelector("#calendarDays");
		const prevMonthButton = modal.querySelector("#prevMonth");
		const nextMonthButton = modal.querySelector("#nextMonth");

		// Проверяем наличие всех элементов внутри модального окна
		if (!closeModalButton || !overlay || !currentMonthElement || !calendarDaysElement || !prevMonthButton || !nextMonthButton) {
			console.warn(`Некоторые элементы внутри модального окна с id "${modalId}" отсутствуют.`);
			return;
		}

		button.addEventListener("click", () => {
			openModal(modal, calendarDaysElement, currentMonthElement);
		});

		closeModalButton.addEventListener("click", () => closeModal(modal));
		overlay.addEventListener("click", () => closeModal(modal));
		modal.addEventListener("click", (event) => {
			if (event.target === modal) {
				closeModal(modal);
			}
		});

		prevMonthButton.addEventListener("click", () => {
			currentDate.setMonth(currentDate.getMonth() - 1);
			renderCalendar(currentDate, calendarDaysElement, currentMonthElement);
		});

		nextMonthButton.addEventListener("click", () => {
			currentDate.setMonth(currentDate.getMonth() + 1);
			renderCalendar(currentDate, calendarDaysElement, currentMonthElement);
		});
	});
};
