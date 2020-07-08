import { html, css, LitElement } from "lit-element";

export class WueBaseInput extends LitElement {

  static get styles() {
    return css`
          :host, div {
            font: 11pt Arial;
          }

          input {
            margin-bottom: 10px;
          }

          label {
            color: #4285f4;
            font-style: italic;
          }
        `;
  }

  static get properties() {
    return {
      name: { type: String },
      title: { type: String },
      break: { type: Boolean },
      value: { type: String }
    };
  }

  constructor() {
    super();
    this.break = false;
  }

  render() {
    const renderedInput = this._renderInput();
    return html`
      <div>
          <label for="${this.name}">${this.title}: </label>
          ${this.break ? html`<br>` : html``}
          ${renderedInput}
      </div>
    `;
  }

  _renderInput() {
    return html`
      <input id="${this.name}"  name="${this.name}" type="text" @change="${this._handleChange}"/>
    `;
  }

  _handleChange(e) {
    this.value = e.target.value;
  }

}