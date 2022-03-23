import { css, html } from "lit";
import { EtiquetteBase } from "../etiquette-base/etiquette-base.js";
import { ascii } from "./ascii.js";

export class CascadingStyleSuds extends EtiquetteBase {
    constructor() {
        super();

        this.splashImage = ascii;
        this.beerName = "Cascading-Style-Suds";

        this.info = {
            "Beer Style": "India Pale Lager",
            "Developer's notes": "A fresh and crushable love child of an IPA and a Lager",
            "Pair with": "A laid back session of coding or an end of day code review",
            "Hops": "Cascade",
            "ABV": "5.0%",
            "Ingredients": "Water, Barley malt, Wheat Malt, hops, yeast",
            "Author": "Matsu (https://matsu.beer)"
        }
    }

    static get styles() {
        return [
            ...super.styles,
            css`
        :host {
          --main-color: #d3dcff;
          --background: #202330;
          --secondary-color: #ffffff;

          --logo-text-color: #d3dcff;
          --logo-text-alt-color: #202330;
          --logo-background-color: transparent;
        }
      `,
        ];
    }
}

customElements.define("cascading-style-suds", CascadingStyleSuds);
