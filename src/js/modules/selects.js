window.selects = function () {
	const selectItems = document.querySelectorAll(".selects__item");

	if (!selectItems.length) return;

	selectItems.forEach((selectItem) => {
		const current = selectItem.querySelector(".selects__current");
		const list = selectItem.querySelector(".selects__list");
		const listItems = list.querySelectorAll(".selects__list-item");
		const hiddenInput = selectItem.querySelector("input[type='hidden']");
		const isMultiple = list.classList.contains("selects__list_multiple");

		if (!current || !list || !hiddenInput) {
			return;
		}

		// Закрываем список по умолчанию
		list.classList.remove("active");

		// === ОТКРЫТИЕ / ЗАКРЫТИЕ СПИСКА ===
		current.addEventListener("click", (event) => {
			event.stopPropagation();

			document.querySelectorAll(".selects__list").forEach((otherList) => {
				if (otherList !== list) {
					otherList.classList.remove("active");
				}
			});

			list.classList.toggle("active");
		});

		// === ВЫБОР ВАРИАНТА ===
		listItems.forEach((listItem) => {
			listItem.addEventListener("click", (event) => {
				event.stopPropagation();

				if (isMultiple) {
					// === МНОЖЕСТВЕННЫЙ ВЫБОР ===
					listItem.classList.toggle("selected");

					const selectedItems = Array.from(
						list.querySelectorAll(".selects__list-item.selected")
					).map(item => item.textContent);

					hiddenInput.value = selectedItems.join(", ");
					current.textContent = selectedItems.length ?
						selectedItems.join(", ") :
						"Выберите вариант";
				} else {
					// === ОДИНОЧНЫЙ ВЫБОР ===
					current.textContent = listItem.textContent;
					hiddenInput.value = listItem.textContent;

					list.classList.remove("active");
				}
			});
		});
	});

	// === ЗАКРЫТИЕ СПИСКА ПРИ КЛИКЕ ВНЕ (ОДИН РАЗ) ===
	document.addEventListener("click", (e) => {
		if (!e.target.closest(".selects__item")) {
			document.querySelectorAll(".selects__list").forEach((list) => {
				list.classList.remove("active");
			});
		}
	});

	// === ЗАКРЫТИЕ ПРИ СКРОЛЛЕ ===
	window.addEventListener("scroll", () => {
		document.querySelectorAll(".selects__list.active").forEach((list) => {
			list.classList.remove("active");
		});
	}, {
		passive: true
	});
};
