import { html } from "lit";
import { css, LitElement } from "lit-element";

export class EtiquetteBase extends LitElement {
    static get properties() {
        return {
            scale: { type: Number },
            splashImage: { type: Object },
            splashImageFontSize: { type: String },
        };
    }

    constructor() {
        super();
        this.scale = 1;
        this.splashImage = html``;
        this.splashImageFontSize = "3.5px";
    }

    /**
     * @param {import("lit-element").PropertyValues} _changedProperties
     */
    updated(_changedProperties) {
        if (_changedProperties.has("scale")) {
            this.style.setProperty("--scale", this.scale.toString());
        }
        if (_changedProperties.has("splashImageFontSize")) {
            this.style.setProperty(
                "--splash-image-font-size",
                this.splashImageFontSize
            );
        }
    }

    render() {
        return html` <div class="splash-image">${this.splashImage}</div> `;
    }

    static get styles() {
        return [
            css`
        :host {
          --scale: 1;
          --splash-image-font-size: 3.5px;

          box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%),
            0 6px 20px 0 rgb(0 0 0 / 19%);
          width: calc(500px * var(--scale));
          height: calc(200px * var(--scale));
          display: flex;
          margin: 1rem;
          align-items: center;
          padding: 1rem 3rem;
          box-sizing: border-box;
        }

        .splash-image {
          font-size: var(--splash-image-font-size);
        }
      `,
        ];
    }
}
