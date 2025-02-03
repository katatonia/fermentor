window.changeText = function () {
    const textContainer = document.getElementById("text-container");

    if (!textContainer) {
        return;
    }

    const texts = ["Ваши идеи", "Наши возможности"];
    let index = 0;

    function updateText() {
        if (window.innerWidth < 768) {
            textContainer.style.display = "none"; // Скрываем текст
        } else {
            textContainer.style.display = "block"; // Показываем текст
            textContainer.textContent = texts[index];
        }
    }

    updateText(); // Запускаем проверку при загрузке

    setInterval(() => {
        if (window.innerWidth >= 768) {
            index = (index + 1) % texts.length;
            textContainer.textContent = texts[index];
        }
    }, 1000);

    window.addEventListener("resize", updateText); // Проверяем при изменении размера экрана
};
