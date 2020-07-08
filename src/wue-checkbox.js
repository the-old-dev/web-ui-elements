import { html } from "lit-element";
import { WueBaseInput } from "./wue-base-input";

export class WueCheckbox extends WueBaseInput {

  static get properties() {
    var superProperties = WueBaseInput.properties;
    superProperties.value = { type: Boolean };
    superProperties.checked = { type: Boolean };
    return superProperties;
  }

  constructor() {
    super();
    this.value = false;
  }

  _renderInput() {
    return html`
      <input id="${this.name}"  name="${this.name}" @change="${this._handleChange}" type="checkbox" ?checked=${this.value}></input">
    `;
  }

  _handleChange(e) {
    this.value = e.target.checked;
  }

}

customElements.define('wue-checkbox', WueCheckbox);