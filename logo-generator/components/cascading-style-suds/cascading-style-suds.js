import { css, html } from "lit";
import { EtiquetteBase } from "../etiquette-base/etiquette-base.js";
import { ascii } from "./ascii.js";
import "../main-logo/main-logo.js";

export class CascadingStyleSuds extends EtiquetteBase {
    constructor() {
        super();

        this.splashImage = ascii;
        this.beerName = "Cascading-Style-Suds";

        this.info = {
            "Beer Style": "West Coast Session IPA",
            "Developer's notes": "@media only beer and (max-abv: 3.0%)",
            "Operating Environment": "A laid back session of pair programming or an end of day code review",
            "Hops": "Cascade",
            "ABV": "3.0%",
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
          --background-color: #202330;
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
