import { loadHTML } from './utils/HTMLLoader.js';
import { loadStyles } from './utils/StyleLoader.js';

class VerticalTabsPanel extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	async connectedCallback() {
		await loadHTML(this.shadowRoot, './VerticalTabsPanel.html');
		await loadStyles(this.shadowRoot, './styles.css');
		this.switchTabs();
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
