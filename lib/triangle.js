const Shapes = require('./shapes');

class Triangle extends Shapes {
    constructor(sName, sColor, tColor) {
        super(sName, sColor, tColor);      
    }
    render() {
        return `
<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
<polygon points="150, 18 244, 182 56, 182" fill="${this.sColor}" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.tColor}">${this.sName}</text></svg>`;
    }
}

module.exports = Triangle;