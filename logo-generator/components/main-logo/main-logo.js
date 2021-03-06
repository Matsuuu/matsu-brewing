import { html, LitElement } from "lit";
import { mainLogoStyles } from "./main-logo.styles.js";

export class MainLogo extends LitElement {

    static get properties() {
        return {
            scale: { type: Number, reflect: true },
            textColor: { type: String, attribute: "text-color" },
            textAltColor: { type: String, attribute: "text-alt-color" },
            backgroundColor: { type: String, attribute: "background-color" }
        }
    }

    constructor() {
        super();
        this.scale = 1;
        this.textColor = "";
        this.textAltColor = "";
        this.backgroundColor = "";
    }

    /**
     * @param {import("lit-element").PropertyValues} _changedProperties
     */
    updated(_changedProperties) {
        if (_changedProperties.has("scale")) {
            this.style.setProperty("--scale", this.scale.toString());
        }
        if (_changedProperties.has("textColor")) {
            this.style.setProperty("--text-color", this.textColor);
        }
        if (_changedProperties.has("textAltColor")) {
            this.style.setProperty("--text-alt-color", this.textAltColor);
        }
        if (_changedProperties.has("backgroundColor")) {
            this.style.setProperty("--background-color", this.backgroundColor);
        }
    }

    render() {
        return html`
      <div class="fermenter">
        <div class="top-lid">
          <div class="top-lid-cap"></div>
        </div>

        <div class="liquid">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 1440">
            <path
              fill-opacity="1"
              d="M 0 160 L 48 149.3 C 96 139 192 117 288 96 C 384 75 480 53 576 64 C 672 75 768 117 864 144 C 960 171 1056 181 1152 176 C 1248 171 1344 149 1392 138.7 L 1440 128 L 1440 1425 L 1392 1440 C 1344 1440 1248 1440 1152 1440 C 1056 1440 960 1440 864 1440 C 768 1440 672 1440 576 1440 C 480 1440 384 1440 288 1440 C 192 1440 96 1440 48 1440 L 0 1440 Z"
            ></path>
          </svg>
          <div
            class="bubble"
            style="top: 15%; left: -30%; --bubble-size: 1"
          ></div>
          <div
            class="bubble"
            style="top: -20%; left: -20%; --bubble-size: 1.2"
          ></div>
          <div
            class="bubble"
            style="top: -20%; left: -40%; --bubble-size: 0.4"
          ></div>
          <div
            class="bubble"
            style="top: -10%; left: -60%; --bubble-size: 0.4"
          ></div>
          <div
            class="bubble"
            style="top: -40%; left: -30%; --bubble-size: 0.4"
          ></div>
        </div>

        <div class="bottom-part">
          <div class="bottom-part--left"></div>
          <div class="bottom-part--right"></div>
          <div class="bottom-part--bottom"></div>
        </div>

        <div class="legs">
          <div class="leg"></div>
          <div class="leg"></div>
        </div>
      </div>

      <div class="label">
        <h2>Matsu <span>Brewing</span></h2>
      </div>
    `;
    }

    static styles = mainLogoStyles;
}

customElements.define("main-logo", MainLogo);
