window.changeText = function () {
    const textContainer = document.getElementById("text-container");

    if (!textContainer) {
        console.warn("❌ Элемент #text-container не найден!");
        return;
    }

    const texts = ["Ваши идеи", "Наши возможности"];
    let index = 0;

    setInterval(() => {
        index = (index + 1) % texts.length;
        textContainer.textContent = texts[index];
    }, 1000);
};
