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

	const currentMonthElement = document.querySelector("#currentMonth");
	const calendarDaysElement = document.querySelector("#calendarDays");
	const prevMonthButton = document.querySelector("#prevMonth");
	const nextMonthButton = document.querySelector("#nextMonth");

	renderCalendar(currentDate, calendarDaysElement, currentMonthElement);

	prevMonthButton.addEventListener("click", () => {
	  currentDate.setMonth(currentDate.getMonth() - 1);
	  renderCalendar(currentDate, calendarDaysElement, currentMonthElement);
	});

	nextMonthButton.addEventListener("click", () => {
	  currentDate.setMonth(currentDate.getMonth() + 1);
	  renderCalendar(currentDate, calendarDaysElement, currentMonthElement);
	});
  };

