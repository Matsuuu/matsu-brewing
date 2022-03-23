import { css, html } from "lit";
import { EtiquetteBase } from "../etiquette-base/etiquette-base.js";
import { ascii } from "./ascii.js";

export class CrossStoutScripting extends EtiquetteBase {
    constructor() {
        super();

        this.splashImage = ascii;
        this.splashImageFontSize = "1.75px";
        this.beerName = "Cross-Stout-Scripting";

        this.info = {
            "Beer Style": "Milk Stout",
            "Developer's notes": "What if we tried to make a stout that tasted like hot chocolate? ",
            "Pair with": "A laid back session of coding or an end of day code review",
            "Hops": "East Kent Goldings",
            "ABV": "6.8%",
            "Ingredients": "Water, Barley malt, Wheat Malt, Cococa nibs, lactose, hops, yeast",
            "Author": "Matsu (https://matsu.beer)"
        }
    }

    static get styles() {
        return [
            ...super.styles,
            css`
        :host {
          --main-color: #664b30;
          --background-color: #1d1a18;
          --secondary-color: #ffffff;

          --logo-text-color: #432200;
          --logo-text-alt-color: #1d1a18;
          --logo-background-color: transparent;
        }
      `,
        ];
    }
}

customElements.define("cross-stout-scripting", CrossStoutScripting);