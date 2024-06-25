class VerticalTabsPanel extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	async connectedCallback() {
		await this.loadHTML(this.shadowRoot, './VerticalTabsPanel.html');
		await this.loadStyles(this.shadowRoot, './styles.css');
		this.switchTabs();
	}

	//Loads the HTML copied from utils/HTMLLoader.js
	async loadHTML(shadowRoot, htmlPath) {
		const html = await fetch(htmlPath).then(response => response.text());
		shadowRoot.innerHTML = html;
	}

	//Loads the styles, copied from utils/StyleLoader.js
	async loadStyles(shadowRoot, stylePath) {
		const css = await fetch(stylePath).then(response => response.text());
		const style = document.createElement('style');
		style.textContent = css;
		shadowRoot.appendChild(style);
	}

	switchTabs() {
		const tabs = this.shadowRoot.querySelectorAll(".tabs h3");
		const tabContents = this.shadowRoot.querySelectorAll(".tab-content div");

		tabs.forEach((tab, index) => {
			tab.addEventListener("click", () => {
				tabContents.forEach(content => {
					content.classList.remove("active");
				});
				tabs.forEach((tab) => {
					tab.classList.remove("active");
				});
				tabContents[index].classList.add("active");
				tabs[index].classList.add("active");
			});
		});
	}
}

customElements.define('vertical-tabs-panel', VerticalTabsPanel);
