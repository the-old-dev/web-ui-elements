import { html } from "lit-element";
import { WueList} from "/index.js"

export class SampleList extends WueList {

    constructor() {
        super();
    }

    renderElement(elementData) {
        return html`
            <wue-radiobutton name="${elementData.name}" title="${elementData.title}" value="${elementData.value}" @change="${this.handleChange}"></wue-radiobutton>
        `;
    }

    handleChange(event) {
        this.value = event.target.value;
    }
}

customElements.define('sample-list', SampleList);