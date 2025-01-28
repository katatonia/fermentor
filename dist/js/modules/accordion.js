export const accordion = () => {
	document.querySelectorAll('.accordion__header').forEach(header => {
		header.addEventListener('click', () => {
			const content = header.nextElementSibling;
			const plusIcon = header.querySelector('.accordion__plus');

			if (content.classList.contains('open')) {
				content.classList.remove('open');
				if (plusIcon) plusIcon.classList.remove('open');
			} else {
				document.querySelectorAll('.accordion__content').forEach(c => c.classList.remove('open'));
				document.querySelectorAll('.accordion__plus').forEach(i => i.classList.remove('open'));

				content.classList.add('open');
				if (plusIcon) plusIcon.classList.add('open');
			}
		});
	});
};
