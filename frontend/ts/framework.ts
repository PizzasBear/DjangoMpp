class DEl extends HTMLElement {
    val?: string;
    constructor() {
        super();
        console.log(this.getAttribute("google"));
        // const shadow = this.attachShadow({mode: 'open'});
    }

    attributeChangedCallback() {
        
    }
}

customElements.define('d-el', DEl)

