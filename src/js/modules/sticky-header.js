window.stickyHeader = function () {
    const targetBlock = document.getElementById("target-block");
    const header = document.getElementById("header");

    if (!targetBlock || !header) {
        console.warn("Ошибка: `#target-block` или `#header` не найдены!");
        return;
    }

    let targetHeight = targetBlock.offsetHeight;

    window.addEventListener("scroll", () => {
        if (window.scrollY > targetHeight) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Обновляем высоту при изменении размера окна
    window.addEventListener("resize", () => {
        targetHeight = targetBlock.offsetHeight;
    });
};
