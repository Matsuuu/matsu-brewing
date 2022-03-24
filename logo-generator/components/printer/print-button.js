import { html, LitElement } from "lit";
import { printNode } from "./printer.js";

export class PrintButton extends LitElement {
    static get properties() {
        return {
            targetElement: { type: String, attribute: "target-element" },
        };
    }

    targetElement = "";

    printPng() {
        printNode(document.querySelector(this.targetElement));
    }

    render() {
        return html`<button @click=${this.printPng}>Print PNG</button>`;
    }
}

customElements.define("print-button", PrintButton);
