import { html } from "lit-element";
import { WueBaseInput } from "./wue-base-input";

export class WueTextInput extends WueBaseInput {

  static get properties() {
    var superProperties = WueBaseInput.properties;
    superProperties.size = { type: Number };
    return superProperties;
  }

  constructor() {
    super();
    this.size = 128;
    this.break = true;
  }

  _renderInput() {
    return html`
      <input id="${this.name}"  name="${this.name}" type="text" @change="${this._handleChange}" size="${this.size}" value="${this.value}" ></input>
    `;
  }
  
}

customElements.define('wue-text-input', WueTextInput);