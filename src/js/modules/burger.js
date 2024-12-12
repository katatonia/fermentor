export const burger = () => {
	const burger = document.querySelector(".header__burger");
	const nav = document.querySelector(".header__nav");
	const header = document.querySelector(".header");
	const body = document.body;

	burger.addEventListener("click", () => {
		nav.classList.toggle("header__nav_active");
		burger.classList.toggle("header__burger_active");
		header.classList.toggle("header_active");
		body.classList.toggle("lock");
	});
};
