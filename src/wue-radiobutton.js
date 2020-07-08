import { html } from "lit-element";
import { WueBaseInput } from "./wue-base-input";

export class WueRadiobutton extends WueBaseInput {

  static _CHANGE_EVENT_PROPAGATION_TYPE = "change_propagation";

  static get properties() {
    return {
      name: { type: String },
      title: { type: String },
      break: { type: Boolean },
      value: { type: String },
      checked: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.value = false;
    this.checked = false;
    this.propagator = null;
  }

  connectedCallback() {
    super.connectedCallback()
    this._enableChangePropagation();
  }

  _renderInput() {
    return html`
      <input type="radio" name="${this.name}" id="${this.value}" value="${this.value}"
      @change="${this._handleChange}"></input>
    `;
  }

  _enableChangePropagation() {
    var myself = this;
    var eventCallback = function(e) { myself._handlePropagatedChange(e); };
    this._getChangePropagator().addEventListener(WueRadiobutton._CHANGE_EVENT_PROPAGATION_TYPE, eventCallback);
  }

  _getChangePropagator() {
    
    if (this.propagator == null) {
      this.propagator = this.parentElement;
    }

    if (this.propagator == null) {
      this.propagator = this.parentNode.host;
    }

    return this.propagator;
  }

  _handlePropagatedChange(e) {

    // only handle changes of our group name
    if (this.name != e.detail.name) {
      return;
    }

    if (this.value != e.detail.value) {
      this.checked = false;
    } else {
      this.checked = true;
    }

    this.shadowRoot.querySelector("input").checked = this.checked;

  }

  _handleChange(e) {
    
    var type = WueRadiobutton._CHANGE_EVENT_PROPAGATION_TYPE;
    var detail = {name:e.target.name, value:e.target.value};       
    var event = new CustomEvent(type, { detail: detail, bubbles: true, composed: true } );
    this._getChangePropagator().dispatchEvent(event);

    this.dispatchEvent(new Event("change"));


  }

}

customElements.define('wue-radiobutton', WueRadiobutton);