import { Component, template } from '../../references/quantum.js';
import html from '../templates/anchor.js';

export class Anchor extends Component {
    constructor() {
        super();
    }

    static template = template(html);

    static attributes = [];
}

customElements.define('quantum-anchor', Anchor);