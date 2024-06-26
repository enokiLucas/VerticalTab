import { loadHTML } from '../utils/HTMLLoader.js';
import { loadStyles } from '../utils/StyleLoader.js';

class TabContent4 extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	async connectedCallback() {
		await loadHTML(this.shadowRoot, '../tabHTML/tab-content-4.html');
		await loadStyles(this.shadowRoot, '../styles.css');
	}
}

customElements.define('tab-content-4', TabContent4);
