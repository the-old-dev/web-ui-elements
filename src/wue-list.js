import { html, LitElement } from "lit-element";

export class WueList extends LitElement {

    static get properties() {
        return {
            elements: { type: Array },
            name: { type: String },
            value: { type: String }
        };
    }

    constructor() {
        super();
        this.elements = [];
        this.name = null;
        this.value = "";
    }

    render() {

        var myself = this;

        var elementRenderFunction = function (elementData) {

            if (elementData["name"] == null) {
                elementData["name"] = myself.name;
            }

            return myself.renderElement(elementData);

        };

        return html`
            ${this.elements.map(elementRenderFunction)}
        `;
    }
    
    renderElement(elementData) {
        return html`
            Implement Rendering via SubClass of WueList for: ${JSON.stringify(elementData)}
        `;
    }

}

customElements.define('wue-list', WueList);