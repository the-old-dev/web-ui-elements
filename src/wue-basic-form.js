import { html, css, LitElement } from "lit-element";
import { WueButton } from "./wue-button";
import { WueOutput } from "./wue-output";

export class WueBasicForm extends LitElement {

    static WUE_RADIOBUTTON_NODE_NAME = "wue-radiobutton";

    static get styles() {
        return css`

            :host {
                font: 11pt Arial;
            }

            div {
                text-align: left;
                padding: 5px;
            }

            .action-panel {
                border: 1px solid #4285f4;
                border-radius: 3px;
                box-shadow: 1px 1px #9ebbe9;        
                padding: 5px;
                display: grid;
                grid-gap: 5px;
                grid-template-columns: 24px auto auto;
            }

            iron-icon {
                color: #4285f4;
            }

            .title {
                border-bottom: 1px solid #4285f4;
                color: #4285f4;
                font-size: 12pt;
                font-weight: bold; 
                grid-column: 2 / span 2;
                grid-row: 1;
            }

            .inputs {
                grid-column: 2;
                grid-row: 2;
            }
            
            .buttons {
                border-left: 1px dashed #4285f4;
                padding-left: 10px;
                padding-right: 10px;
                grid-column: 3;
                grid-row: 2;          
            }

            .outputs {
                overflow: auto;
                grid-column: 2;
                grid-row: 3;
            }

    `;
    }

    static get properties() {
        return {
            icon: { type: String },
            title: { type: String },
            width: { type: String }
        }
    }

    constructor(title, icon) {
        super();

        if (icon == null || icon == "") {
            this.icon = "polymer";
        } else {
            this.icon = icon;
        }

        if (title == null || title == "") {
            this.title = "title";
        } else {
            this.title = title;
        }
        
        this.width = "640px";
    }

    render() {
        return html`
            <div class="action-panel" style="width: ${this.width};">
                
                <iron-icon icon="${this.icon}"></iron-icon>
                <div class="title">${this.title}</div>
                
                <div class="inputs">
                    ${this.inputs}
                </div>
                
                <div class="outputs">
                    ${this.outputs}
                </div>
                
                <div class="buttons">
                    ${this.buttons}
                </div>
                
            </div>
        `;
    }

    get outputs() {
        return html`
            <wue-output content="Result will be shown here!"></wue-output>
        `;
    }

    get buttons() {
        return html`
            <wue-button @click="${this._handleButtonClick}" name="click-button" title="${this.title}" icon="${this.icon}"></wue-button>
        `;
    }
    
    handleButtonClick(inputs, successDisplay, errorDisplay) {
        successDisplay(inputs);
    }

    _handleButtonClick(event) {

        var output = this._getOutput();

        var successDisplay = function (result) {
            output.showSuccess(JSON.stringify(result, null, 3));
        }
        var errorDisplay = function (result) {
            output.showError(JSON.stringify(result, null, 3));
        }
        var inputs = this._getInputs();
        this.handleButtonClick(inputs, successDisplay, errorDisplay);
    }

    _getInputs() {
        var inputs = new Object();
        var inputsFound = this.shadowRoot.querySelector('[class="inputs"]').children;

        for (let index = 0; index < inputsFound.length; index++) {
            const input = inputsFound[index];
            if (WueBasicForm.WUE_RADIOBUTTON_NODE_NAME == input.nodeName.toLowerCase()) {
                if (input.checked) {
                    inputs[input.name] = input.value;
                }
            } else {
                inputs[input.name] = input.value;
            }
        }

        return inputs;
    }

    _getOutput() {
        var outputs = this.shadowRoot.querySelector('[class="outputs"]');
        outputs = outputs.children;
        return outputs[0];
    }

}

customElements.define("wue-basic-form", WueBasicForm);