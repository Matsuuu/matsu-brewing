import { html } from "lit";
import { css, LitElement } from "lit-element";

export class EtiquetteBase extends LitElement {
    static get properties() {
        return {
            scale: { type: Number },
            splashImage: { type: Object },
            splashImageFontSize: { type: String },

            beerName: { type: String },
            info: { type: Object },
        };
    }

    constructor() {
        super();
        this.scale = 1;
        this.splashImage = html``;
        this.splashImageFontSize = "1.75px";
        this.beerName = "";
        this.info = {};
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
      <div class="main-label">
        <div class="splash-image">${this.splashImage}</div>
        <div class="neofetch">
          <p class="name">${this.beerName} @ Matsu-Brewing</p>
          <p>${"-".repeat(`${this.beerName}@Matsu-Brewing`.length)}</p>
          ${Object.keys(this.info).map(
            (key) => html` <p><b>${key}</b>: ${this.info[key]}</p> `
        )}
        </div>
      </div>
      <div class="terminal-line">
        <span class="username">matsu</span>
        <span class="directory">~/beers/developer-series</span>
        <span class="caret"> > </span>
        <div class="blinker"></div>
      </div>
      <main-logo
        scale="${this.scale * 0.25}"
        background-color="transparent"
      ></main-logo>
    `;
    }

    static get styles() {
        return [
            css`
        :host {
          --scale: 1;
          --splash-image-font-size: 1.75px;

          position: relative;
          box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%),
            0 6px 20px 0 rgb(0 0 0 / 19%);
          width: calc(520px * var(--scale));
          height: calc(220px * var(--scale));
          display: flex;
          flex-direction: column;
          margin: 1rem;
          align-items: center;
          padding: 3rem 3rem;
          box-sizing: border-box;
          justify-content: space-between;

          background: var(--background-color, #202330);
        }
        .main-label {
          display: flex;
        }

        .splash-image {
          font-size: calc(var(--splash-image-font-size) * var(--scale));
          margin-right: 4rem;
        }

        .neofetch {
          display: flex;
          height: 100%;
          width: 50%;
          flex-direction: column;
          color: var(--secondary-color);
          font-size: calc(var(--scale) * 0.55rem);
        }

        .neofetch > p {
          padding: 0;
          margin: 0 0 6px 0;
          line-height: calc(var(--scale) * 0.55rem);
        }

        .neofetch b {
          color: var(--main-color);
        }

        .name {
          color: var(--main-color);
          font-weight: bold;
        }

        .brewery-logo {
        }

        main-logo {
          position: absolute;
          right: -4rem;
          top: 0;
          bottom: 0;
          margin: auto;
          transform: rotate(-90deg);

          --text-color: var(--logo-text-color);
          --text-alt-color: var(--logo-text-alt-color);
          --background-color: var(--logo-background-color);
        }

        .terminal-line {
          width: 100%;
          padding: 1rem 0 1rem 0.5rem;
          display: flex;
          gap: 0.5rem;
        }

        .username,
        .caret {
          color: var(--main-color);
        }

        .directory {
          color: var(--secondary-color);
        }

        .blinker {
          background: var(--main-color);
          width: calc(var(--scale) * 0.275rem);
          height: calc(var(--scale) * 0.55rem);
        }
      `,
        ];
    }
}
