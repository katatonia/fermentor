export const stickyHeader = () => {
	document.addEventListener('DOMContentLoaded', () => {
		const targetBlock = document.getElementById('target-block');
		const header = document.getElementById('header');

		window.addEventListener('scroll', () => {
		  const targetHeight = targetBlock.offsetHeight;

		  if (window.scrollY > targetHeight) {
			header.classList.add('scrolled');
		  } else {
			header.classList.remove('scrolled');
		  }
		});
	  });
};
