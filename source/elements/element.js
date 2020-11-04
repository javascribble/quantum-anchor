import { Component, template, define } from '../import.js';
import html from '../templates/anchor.js';

export class Anchor extends Component {
    constructor() {
        super();
    }

    static template = template(html);
}

define('quantum-anchor', Anchor);