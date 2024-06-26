import { loadHTML } from '../utils/HTMLLoader.js';
import { loadStyles } from '../utils/StyleLoader.js';

class TabContent1 extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	async connectedCallback() {
		await loadHTML(this.shadowRoot, 'tab-content-1.html');
		await loadStyles(this.shadowRoot, '../styles.css');
	}
}

customElements.define('tab-content-1', TabContent1);
