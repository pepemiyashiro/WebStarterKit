/**
 * Custom Element Example
 */

import template from './hello-world.template';


class HelloWorld extends HTMLElement {
    constructor() {
        super();
        this.initialize();
    }

    initialize() {
        console.log(this);
        const html = template('This is a custom element banner that inherits Styles from the main class');
        this.innerHTML = html;
    }
}

customElements.define('hello-world', HelloWorld);
