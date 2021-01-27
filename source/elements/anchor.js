import html from '../templates/anchor.js';

const { Component, template, define } = quantum;

export class Anchor extends Component {
    constructor() {
        super();
    }

    static template = template(html);
}

define('quantum-anchor', Anchor);