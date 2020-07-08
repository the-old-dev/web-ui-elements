import { html, css, LitElement } from "lit-element";

import '@polymer/iron-icons/iron-icons.js';
//import '@polymer/iron-icon/iron-icon.js';

export class WueButton extends LitElement {

    static get styles() {
        return css`
            button {
                background-color: #4285f4;
                color: white;
 
                padding: 5px;
                margin-bottom: 10px;

                border-color:  #4285f4;
                border-radius: 5px;

                box-shadow: 1px 1px #9ebbe9;

                text-align: left;             
                font-size: 12px;
                
            }

            button:hover {
                font-weight: bold;
            }

            iron-icon {
                --iron-icon-height: 16px;
                --iron-icon-width: 16px;
                color: white;
            }
        `;
    }

    static get properties() {
        return {
            title: { type: String },
            icon: { type: String },
            width: { type: String }
        }
    }

    constructor() {
        super();
        this.title = "Execute";
        this.icon = "polymer";
        this.width = "128px";
    }

    render() {
        return html`
            <button>
                <iron-icon icon="${this.icon}"></iron-icon>
                ${this.title}
            </button>
        `;
    }

}

customElements.define('wue-button', WueButton);