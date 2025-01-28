export const hamburger = () => {
	const hamburger = document.querySelector(".header__hamburger");
	const nav = document.querySelector(".header__nav");
	const header = document.querySelector(".header");
	const body = document.body;
	const menuLinks = document.querySelectorAll(".header__nav a"); // Ссылки меню

	hamburger.addEventListener("click", () => {
		nav.classList.toggle("header__nav_active");
		hamburger.classList.toggle("header__hamburger_active");
		header.classList.toggle("header_active");
		body.classList.toggle("lock");
	});

	// Закрыть меню, если кликнули по пункту текущей страницы
	menuLinks.forEach((link) => {
		link.addEventListener("click", () => {
			// Приводим оба пути к единому формату
			const linkPath = new URL(link.href, window.location.origin).pathname;
			const currentPath = window.location.pathname;

			if (linkPath === currentPath) {
				nav.classList.remove("header__nav_active");
				hamburger.classList.remove("header__hamburger_active");
				header.classList.remove("header_active");
				body.classList.remove("lock");
			}
		});
	});
};
