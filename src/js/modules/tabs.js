window.tabs = function () {
	const tabsBtn = document.querySelectorAll('.tabs__btn');
	const tabsPanel = document.querySelectorAll('.tabs__panel');

	tabsBtn.forEach(btn => {
		btn.addEventListener('click', () => {
			const tab = btn.dataset.tab;

			tabsBtn.forEach(b => b.classList.remove('active'));
			tabsPanel.forEach(p => p.classList.remove('active'));

			btn.classList.add('active');
			document.querySelector(`.tabs__panel[data-tab="${tab}"]`).classList.add('active');
		});
	});
};
