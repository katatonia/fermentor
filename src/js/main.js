document.addEventListener("DOMContentLoaded", () => {
    // Проверка наличия и вызов функций модулей
    function safeCall(fnName) {
        if (typeof window[fnName] === "function") {
            window[fnName]();
        } else {
            return;
        }
    }

    // Вызываем все модули
    safeCall("selects");
    safeCall("accordion");
    safeCall("modal");
    safeCall("tabs");
});
