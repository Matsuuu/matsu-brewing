import { html } from "lit";
import { css, LitElement } from "lit-element";

export class EtiquetteBase extends LitElement {
    static get properties() {
        return {
            scale: { type: Number },
            splashImage: { type: Object },
            splashImageFontSize: { type: String },

            beerName: { type: String },
            beerStyle: { type: String },
        };
    }

    constructor() {
        super();
        this.scale = 1;
        this.splashImage = html``;
        this.splashImageFontSize = "3.5px";
        this.beerName = "";
        this.beerStyle = "";
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
        return html`
      <div class="splash-image">${this.splashImage}</div>
      <div class="neofetch">
        <p class="name">${this.beerName}@Matsu-Brewing</p>
        <p>${"-".repeat(`${this.beerName}@Matsu-Brewing`.length)}</p>
        <br />
        <p><b>Beer Style</b>: ${this.beerStyle}</p>
      </div>
      <main-logo scale="0.5" background-color="transparent"></main-logo>
    `;
    }

    static get styles() {
        return [
            css`
        :host {
          --scale: 1;
          --splash-image-font-size: 3.5px;

          position: relative;
          box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%),
            0 6px 20px 0 rgb(0 0 0 / 19%);
          width: calc(500px * var(--scale));
          height: calc(200px * var(--scale));
          display: flex;
          margin: 1rem;
          align-items: center;
          padding: 3rem 3rem;
          box-sizing: border-box;

          background: var(--background-color, #202330);
        }

        .splash-image {
          font-size: var(--splash-image-font-size);
          margin-right: 4rem;
        }

        .neofetch {
          display: flex;
          height: 100%;
          width: 100%;
          flex-direction: column;
          color: var(--secondary-color);
        }

        .neofetch > p {
          padding: 0;
          margin: 0;
        }

        .neofetch b {
          color: var(--main-color);
        }

        .name {
          color: var(--main-color);
        }

        .brewery-logo {
        }

        main-logo {
          position: absolute;
          right: -4rem;
          top: auto;
          bottom: auto;
          transform: rotate(-90deg);

          --text-color: var(--logo-text-color);
          --text-alt-color: var(--logo-text-alt-color);
          --background-color: var(--logo-background-color);
        }
      `,
        ];
    }
}
