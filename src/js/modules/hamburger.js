export const hamburger = () => {
	const hamburger = document.querySelector(".header__hamburger");
	// const logo = document.querySelector(".header__logo");
	const nav = document.querySelector(".header__nav");
	const header = document.querySelector(".header");
	const body = document.body;

	hamburger.addEventListener("click", () => {
		nav.classList.toggle("header__nav_active");
		hamburger.classList.toggle("header__hamburger_active");
		header.classList.toggle("header_active");
		// logo.classList.toggle("header__logo_hidden");
		body.classList.toggle("lock");
	});
};
