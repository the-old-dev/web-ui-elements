import { html, LitElement } from "lit-element";
import {WueBasicForm, WueTextInput, WueCheckbox, WueRadiobutton} from "/index.js";

export class MyForm extends WueBasicForm {

    constructor() {
        super();
    }
       
    get inputs() {
        return html`
            <!-- Inputs -->
            <wue-text-input name="attribute_0" title="Attribute #0" slot="inputs" value="0" size="16"></wue-text-input>
            <wue-text-input name="attribute_1" title="Attribute #1" slot="inputs" value="1" size="32"></wue-text-input>
            <wue-checkbox name="attribute_2" title="Attribute #2" slot="inputs"></wue-checkbox>
            <wue-checkbox name="attribute_3" title="Attribute #3" slot="inputs" value="true"></wue-checkbox>
            <wue-radiobutton name="attribute_4" title="Attribute #4 - #1" value="selection_1" slot="inputs"></wue-radiobutton>
            <wue-radiobutton name="attribute_4" title="Attribute #4 - #2" value="selection_2" slot="inputs"></wue-radiobutton>
        `;
    }

}

customElements.define('my-form', MyForm);