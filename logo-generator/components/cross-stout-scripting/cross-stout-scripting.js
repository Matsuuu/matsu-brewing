import { css, html } from "lit";
import { EtiquetteBase } from "../etiquette-base/etiquette-base.js";
import { ascii } from "./ascii.js";
import "../main-logo/main-logo.js";

export class CrossStoutScripting extends EtiquetteBase {
    constructor() {
        super();

        this.splashImage = ascii;
        this.splashImageFontSize = "1.75px";
        this.beerName = "Cross-Stout-Scripting";

        this.info = {
            "Beer Style": "Milk Stout",
            "Developer's notes": "What if we tried to make a stout that tasted like hot chocolate? ",
            "Operating Environment": "An intense Fuzzing session or a well deserved reward after a day of bug bounties",
            "Hops": "Fuggle && East Kent Goldings",
            "ABV": "5.8%",
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

          --logo-text-color: #664b30;
          --logo-text-alt-color: #1d1a18;
          --logo-background-color: transparent;
        }
      `,
        ];
    }
}

customElements.define("cross-stout-scripting", CrossStoutScripting);
