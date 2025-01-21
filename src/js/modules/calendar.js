export const calendar = () => {
	const modal = document.getElementById("calendarModal");
	const openModalButton = document.getElementById("calendarButton");
	const closeModalButton = document.getElementById("closeModal");

	const currentMonthElement = document.getElementById("currentMonth");
	const calendarDaysElement = document.getElementById("calendarDays");
	const prevMonthButton = document.getElementById("prevMonth");
	const nextMonthButton = document.getElementById("nextMonth");

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

	function renderCalendar(date) {
		const year = date.getFullYear();
		const month = date.getMonth();

		currentMonthElement.textContent = `${months[month]} ${year}`;

		const firstDay = new Date(year, month, 1).getDay();
		const lastDate = new Date(year, month + 1, 0).getDate();

		const days = [];

		// Fill in blank spaces for days before the first day of the month
		for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) {
			days.push("<div></div>");
		}

		// Fill in the days of the month
		for (let i = 1; i <= lastDate; i++) {
			days.push(`<div class="calendar__date">${i}</div>`);
		}

		calendarDaysElement.innerHTML = days.join("");
	}

	prevMonthButton.addEventListener("click", () => {
		currentDate.setMonth(currentDate.getMonth() - 1);
		renderCalendar(currentDate);
	});

	nextMonthButton.addEventListener("click", () => {
		currentDate.setMonth(currentDate.getMonth() + 1);
		renderCalendar(currentDate);
	});

	openModalButton.addEventListener("click", () => {
		modal.classList.add("visible");
		renderCalendar(currentDate);
	});

	closeModalButton.addEventListener("click", () => {
		modal.classList.remove("visible");
	});

	modal.addEventListener("click", (event) => {
		if (event.target === modal) {
			modal.classList.remove("visible");
		}
	});
};
