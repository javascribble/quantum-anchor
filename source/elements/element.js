import html from '../templates/anchor.js';

export class Anchor extends quantum.Component {
    constructor() {
        super();
    }

    static template = quantum.template(html);
}

quantum.define('quantum-anchor', Anchor);