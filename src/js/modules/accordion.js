export const accordion = () => {
	document.querySelectorAll('.accordion__header').forEach(header => {
		header.addEventListener('click', () => {
			const content = header.nextElementSibling;

			if (content.classList.contains('open')) {
				content.classList.remove('open');
			} else {
				document.querySelectorAll('.accordion__content').forEach(c => c.classList.remove('open'));
				document.querySelectorAll('.icon').forEach(i => i.classList.remove('open'));
				content.classList.add('open');
			}
		});
	});
};
