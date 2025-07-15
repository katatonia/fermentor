window.stickyHeader = function () {
	const targetBlock = document.getElementById("target-block");
	const header = document.getElementById("header");
	const logo = document.getElementById("header__logo");

	if (!targetBlock || !header || !logo) {
		return;
	}

	let targetHeight = targetBlock.offsetHeight - header.offsetHeight;

	window.addEventListener("scroll", () => {
		if (window.scrollY > targetHeight) {
			header.classList.add("scrolled");
			logo.classList.add("toggle-visible_visible");
		} else {
			header.classList.remove("scrolled");
			logo.classList.remove("toggle-visible_visible");
		}
	});

	window.addEventListener("resize", () => {
		targetHeight = targetBlock.offsetHeight - header.offsetHeight;
	});
};
