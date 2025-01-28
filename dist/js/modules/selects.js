export const selects = () => {
	document.addEventListener("DOMContentLoaded", () => {
		// Находим все элементы селектов
		const selectItems = document.querySelectorAll(".selects__item");

		selectItems.forEach((selectItem) => {
			const current = selectItem.querySelector(".selects__current");
			const list = selectItem.querySelector(".selects__list");
			const listItems = list.querySelectorAll(".selects__list-item");

			// Проверяем, если это список с классом selects__list_volume
			const isVolumeList = list.classList.contains("selects__list_volume");

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
					// Если это список volume, можно выбирать несколько вариантов
					if (isVolumeList) {
						listItem.classList.toggle("selected");

						// Обновляем отображение выбранных элементов в current
						const selectedItems = list.querySelectorAll(".selects__list-item.selected");
						const selectedText = Array.from(selectedItems)
							.map((item) => item.textContent)
							.join(", ");
						current.textContent = selectedText || "Выберите вариант";
					} else {
						// Для обычных списков — один вариант
						current.textContent = listItem.textContent;

						// Закрываем список
						list.classList.remove("active");
					}
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
	});
};

