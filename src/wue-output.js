import { html, css, LitElement } from 'lit-element';
import '@polymer/iron-icons/iron-icons.js';
//import '@polymer/iron-icon/iron-icon.js';

export class WueOutput extends LitElement {

    static get styles() {
        return css`
            :host, div {
                
            }

            input {
                margin-bottom: 10px;
            }

            .blue {
                color: #4285f4;
            }

            .green {
                color: green;
            }

            .red {
                color: red;
            }

            code {
                font-family: monospace;
                white-space: pre;
            }
        `;
    }

    static get properties() {
        return {
          content: {type: String},
          _waiting: {type: Boolean},
          _success: {type: Boolean},
          _error: {type: Boolean}
        }
    }

    constructor() {
        super();
        this._waiting = true;
        this._success = false;
        this._error = false;
        this.content = "Result goes here!";
    }

    render() {
        return html`
            ${this._waiting?html`<iron-icon class="blue" icon="info"></iron-icon>`:html``}
            ${this._success?html`<iron-icon class="green" icon="check"></iron-icon>`:html``}
            ${this._error?html`<iron-icon class="red" icon="block"></iron-icon>`:html``}
            <code class="json">${this.content}</code>
        `;
    }

    showError(content) {
        this._waiting = false;
        this._success = false;
        this._error = true;
        this.content = content;
    }

    showSuccess(content) {
        this._waiting = false;
        this._success = true;
        this._error = false;
        this.content = content;
    }

}

customElements.define('wue-output', WueOutput);