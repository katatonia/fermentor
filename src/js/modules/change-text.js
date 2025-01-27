export const changeText = () => {
	document.addEventListener("DOMContentLoaded", () => {
	  const textContainer = document.getElementById("text-container");

	  // Проверяем наличие контейнера на странице
	  if (!textContainer) {
		return;
	  }

	  const texts = [
		"Ваши идеи",
		"Наши возможности"
	  ];
	  let index = 0;

	  setInterval(() => {
		index = (index + 1) % texts.length; // Переход к следующему тексту (с зацикливанием)
		textContainer.textContent = texts[index];
	  }, 1000); // Интервал в 2 секунды
	});
  };
