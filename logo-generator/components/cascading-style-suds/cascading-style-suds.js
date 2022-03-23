import { css, html } from "lit";
import { EtiquetteBase } from "../etiquette-base/etiquette-base.js";
import { ascii } from "./ascii.js";

export class CascadingStyleSuds extends EtiquetteBase {

    constructor() {
        super();

        this.splashImage = ascii;
    }

    static get styles() {
        return [
            ...super.styles,
            css`
            :host {
                background: #202330;
            }
            `
        ];
    }
}

customElements.define("cascading-style-suds", CascadingStyleSuds);
