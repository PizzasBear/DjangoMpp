"use strict";
class DEl extends HTMLElement {
    constructor() {
        super();
        console.log(this.getAttribute("google"));
        // const shadow = this.attachShadow({mode: 'open'});
    }
    attributeChangedCallback() {
    }
}
customElements.define('d-el', DEl);
