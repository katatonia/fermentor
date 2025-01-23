export const changeText = () => {
	document.addEventListener("DOMContentLoaded", () => {
		const textContainer = document.getElementById("text-container");
		const texts = [
			"Ваш рецепт",
			"Наше искусство",
			"Ваш бренд",
		];
		let index = 0;

		setInterval(() => {
			index = (index + 1) % texts.length; // Переход к следующему тексту (с зацикливанием)
			textContainer.textContent = texts[index];
		}, 2000); // Интервал в 2 секунды
	});
};
