export const selects = () => {
	document.addEventListener("DOMContentLoaded", () => {
		// Находим все элементы селектов
		const selectItems = document.querySelectorAll(".selects__item");

		selectItems.forEach((selectItem) => {
		  const current = selectItem.querySelector(".selects__current");
		  const list = selectItem.querySelector(".selects__list");
		  const listItems = list.querySelectorAll(".selects__list-item");

		  // Обработчик клика на текущий элемент
		  current.addEventListener("click", () => {
			// Закрываем все открытые списки, кроме текущего
			selectItems.forEach((item) => {
			  const otherList = item.querySelector(".selects__list");
			  if (item !== selectItem) {
				otherList.classList.remove("active");
			  }
			});

			// Переключаем видимость текущего списка
			list.classList.toggle("active");
		  });

		  // Обработчик клика на элемент списка
		  listItems.forEach((listItem) => {
			listItem.addEventListener("click", () => {
			  // Устанавливаем текст выбранного элемента в заголовок
			  current.textContent = listItem.textContent;

			  // Закрываем список
			  list.classList.remove("active");
			});
		  });
		});

		// Закрытие селектов при клике вне области
		document.addEventListener("click", (e) => {
		  if (!e.target.closest(".selects__item")) {
			document.querySelectorAll(".selects__list").forEach((list) => {
			  list.classList.remove("active");
			});
		  }
		});
	  })
};
